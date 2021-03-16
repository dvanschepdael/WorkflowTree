import { Node } from './node';
export declare class Tree {
    private _root;
    constructor(root: Node);
    get root(): Node;
    searchChildren(node: Node, key: any): Node | null;
    add(node: Node, parent: Node): void;
    remove(node: Node): void;
}
