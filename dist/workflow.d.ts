import { Node } from './node';
import { Tree } from './tree';
export declare class Workflow {
    private _tree;
    private _currentNode;
    private _stack;
    constructor(tree: Tree);
    get currentNode(): Node | null;
    get stack(): Array<any>;
    previous(): Node | null;
    next(param?: any): Node | null;
}
