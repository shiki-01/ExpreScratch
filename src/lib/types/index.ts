interface ConnectionPoint {
  input: boolean;
  output: boolean;
}

interface BlockContent {
  id: string;
  type: 'normal' | 'container' | 'value';
  text: string;
  inputType: string;
  value: string ;
}

interface Block {
  id: string;
  type: 'normal' | 'container' | 'value';
  color: 'blue' | 'red' | 'green' | 'yellow' | 'orange' | 'cyan';
  title: string;
  output: string;
  contents: (BlockContent | 'space')[];
  position: { x: number; y: number };
  connections: ConnectionPoint;
  children: string;
  parentId: string;
  depth: number;
}

interface WorkspaceState {
  blocks: Map<string, Block>;
}

export type { BlockContent, Block, ConnectionPoint, WorkspaceState };