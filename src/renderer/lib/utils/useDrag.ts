import { workspace } from '$lib/stores/workspace';
import type { Block } from '$lib/types';

export const useDrag = (
	element: HTMLElement,
	params: {
		bounds: 'parent' | 'body';
		position: { x: number; y: number };
		content: Block;
		onDrag: (event: PointerEvent) => void;
		onStart: (event: PointerEvent) => void;
		onEnd: (event: PointerEvent) => void;
	}
) => {
	let isDragging = false;
	let startX = 0;
	let startY = 0;
	let block = workspace.get().blocks.get(params.content.id) as Block;

	if (!block) return;

	let initialX = block.position.x;
	let initialY = block.position.y;

	const cleanup = () => {
		window.removeEventListener('pointermove', onMouseMove);
		window.removeEventListener('pointerup', onMouseUp);
	};

	const onMouseDown = (event: PointerEvent) => {
		isDragging = true;
		startX = event.clientX;
		startY = event.clientY;
		element.style.cursor = 'grabbing';
		params.onStart(event);
		console.log('drag start', block, workspace.get().blocks);

		window.addEventListener('pointermove', onMouseMove);
		window.addEventListener('pointerup', onMouseUp);
	};

	const onMouseMove = (event: PointerEvent) => {
		if (!isDragging) return;

		event.preventDefault();
		const deltaX = event.clientX - startX;
		const deltaY = event.clientY - startY;

		let newX = initialX + deltaX;
		let newY = initialY + deltaY;

		if (params.bounds === 'parent') {
			const parentRect = element.parentElement?.getBoundingClientRect();
			if (parentRect) {
				const maxX = parentRect.width - element.offsetWidth;
				const maxY = parentRect.height - element.offsetHeight;
				newX = Math.min(newX, maxX);
				newY = Math.max(0, Math.min(newY, maxY));
			}
		}

		block.position.x = newX;
		block.position.y = newY;

		workspace.blockUpdate(params.content.id, block);

		params.onDrag(event);
	};

	const onMouseUp = (event: PointerEvent) => {
		if (!isDragging) return;

		isDragging = false;
		initialX = params.position.x;
		initialY = params.position.y;
		element.style.cursor = 'grab';
		params.onEnd(event);
		cleanup();
	};

	element.style.cursor = 'grab';
	element.addEventListener('pointerdown', onMouseDown);

	return {
		destroy() {
			element.removeEventListener('pointerdown', onMouseDown);
			cleanup();
		}
	};
};