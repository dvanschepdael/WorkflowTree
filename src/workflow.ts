import { Node } from './node';
import { Tree } from './tree';

export class Workflow {
    private _tree: Tree;
    private _currentNode: Node | null;
    private _stack: Array<any>;

    public constructor(tree: Tree) {
        this._tree = tree;
        this._currentNode = this._tree.root;
        this._stack = [this._currentNode.key];
    }

    public get currentNode(): Node | null {
        return this._currentNode;
    }

    public get stack(): Array<any> {
        return this._stack;
    }

    public previous(): Node | null {
        if (this._currentNode == null || this._currentNode.parent == null) {
            return null;
        }

        this._currentNode = this._currentNode.parent;
        this._stack.pop();
        
        return this._currentNode;
    }

    public next(param?: any): Node | null {
        if (this._currentNode == null || this._currentNode.children == null) {
            return null;
        }

        const nextKey = this._currentNode.next(param);
        const node = this._tree.searchNode(this._currentNode, nextKey);

        if (node != null) {
            this._currentNode = node;
            this._stack.push(nextKey);
        }

        return node;
    }
}
