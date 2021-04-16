import { Node } from './node';

export class Tree {
    private _root: Node;

    public constructor(root: Node) {
        this._root = root || null;
    }
    
    public get root(): Node {
        return this._root;
    }

    public search(key: any): Node | null {
        return this.searchNode(this._root, key);
    }

    public searchNode(node: Node, key: any): Node | null {
        if (node == null) {
            return null;
        }

        if (node.key == key) {
            return node;
        }

        if (node.children == null) {
            return null;
        }
        
        for (let child of node.children) {
            const rs = this.searchNode(child, key);
            if (!!rs) {
                return rs;
            }
        }

        return null;
    }

    public add(parent: Node, ...nodes: Array<Node>): void {
        if (!parent) {
            return;
        }

        for(let node of nodes) {
            node.parent = parent;
            if (parent.children == null) {
                parent.children = new Array<Node>();
            }
            parent.children.push(node);
        }
    }

    public remove(node: Node): void {
        for (let child of node.children) {
            child.parent = node.parent;
        }

        if (!!node.parent) {
            const idx = node.parent.children.findIndex(n => n.key === node.key);
            node.parent.children.splice(idx, 1);
        }
    }
}
