import { Node } from './node';

export class Tree {
    private _root: Node;

    public constructor(root: Node) {
        this._root = root || null;
    }
    
    public get root(): Node {
        return this._root;
    }

    public searchChildren(node: Node, value: any): Node | null {
        for (const child of node.children) {
            if (child.value === value) {
                return child;
            }
        }
        return null;
    }

    public add(node: Node, parent: Node): void {
        node.parent = parent;

        if (parent.children == null) {
            parent.children = new Array<Node>();
        }

        parent.children.push(node);
    }

    public remove(node: Node): void {
        if (node.parent) {
            const idx = node.parent.children.findIndex(n => n === node);
            node.parent.children.splice(idx, 1);
        }
    }
}
