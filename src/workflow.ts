import { Node } from './node';
import { Tree } from './tree';

export class Workflow {
    private _tree: Tree;
    private _currentNode: Node | null;
    private _stack: Array<any>;

    public constructor(tree: Tree) {
        this._tree = tree;
        this._currentNode = this._tree.root;
        this._stack = [this._currentNode.value];
    }

    public get currentNode(): Node | null {
        return this._currentNode;
    }

    public get stack(): Array<any> {
        return this._stack;
    }

    public previous(): Node | null {
        if (this._currentNode != null && this._currentNode.parent != null) {
            this._currentNode = this._currentNode.parent;
            this._stack.pop();
            return this._currentNode;
        } else {
            return null;
        }
    }

    public next(args?: any): Node | null {
        if (this._currentNode != null && this._currentNode.children != null) {
            const nextValue = this._currentNode.step(args);
            const node = this._tree.searchChildren(this._currentNode, nextValue);

            if (node != null) {
                this._currentNode = node;
                this._stack.push(nextValue);
            }

            return node;
        } else {
            return null;
        }
    }
}
