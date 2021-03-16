import { Node } from './node';

export class Tree {
    private _root: Node;

    public constructor(root: Node) {
        this._root = root || null;
    }
    
    public get root(): Node {
        return this._root;
    }

    public searchChildren(node: Node, key: any): Node | null {
        if (node.children == null) {
            return null;
        }

        for (const child of node.children) {
            if (child.key === key) {
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
            const idx = node.parent.children.findIndex(n => n.key === node.key);
            node.parent.children.splice(idx, 1);
        }
    }
}
