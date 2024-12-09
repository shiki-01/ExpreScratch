import { bgscale, canvasPosition } from '$lib/stores';

export const useCanvas = (node: HTMLElement) => {
	let isDragging: boolean = false;
	let startX: number = 0;
	let startY: number = 0;
	let translateX: number = 0;
	let translateY: number = 0;

	const onMouseDown = (event: PointerEvent) => {
		if (isCancel(event)) return;
		isDragging = true;
		startX = event.clientX;
		startY = event.clientY;
		node.style.cursor = 'grabbing';
	};

	const onMouseMove = (event: PointerEvent) => {
		if (!isDragging || isCancel(event)) return;

		const deltaX = event.clientX - startX;
		const deltaY = event.clientY - startY;

		let scale = 1;

		bgscale.subscribe((v) => {
			scale = v;
		});

		const newTranslateX = translateX + deltaX / scale;
		const newTranslateY = translateY + deltaY / scale;

		const rect = node.getBoundingClientRect();
		if (!node.parentElement) return;
		const parentRect = node.parentElement.getBoundingClientRect();

		if (newTranslateX <= 0 && newTranslateX >= -(rect.width / scale - parentRect.width)) {
			translateX = newTranslateX;
			startX = event.clientX;
		}

		if (newTranslateY <= 0 && newTranslateY >= -(rect.height / scale - parentRect.height)) {
			translateY = newTranslateY;
			startY = event.clientY;
		}

		node.style.transform = `translate(${translateX}px, ${translateY}px)`;
		canvasPosition.update(() => ({ x: translateX, y: translateY }));
	};

	const onMouseUp = () => {
		isDragging = false;
		node.style.cursor = 'grab';
	};

	node.style.cursor = 'grab';
	node.addEventListener('pointerdown', onMouseDown);
	window.addEventListener('pointermove', onMouseMove);
	window.addEventListener('pointerup', onMouseUp);

	return {
		destroy() {
			node.removeEventListener('pointerdown', onMouseDown);
			window.removeEventListener('pointermove', onMouseMove);
			window.removeEventListener('pointerup', onMouseUp);
		}
	};
};

const isCancel = (e: MouseEvent) => {
	let isCancel = false;
	const cancels = window.document.querySelectorAll('.cancel');

	cancels.forEach((cancel) => {
		if (cancel.contains(e.target as Node)) {
			isCancel = true;
		}
	});

	return isCancel;
};