import { Node } from './node';
export declare class Tree {
    private _root;
    constructor(root: Node);
    get root(): Node;
    search(key: any): Node | null;
    searchNode(node: Node, key: any): Node | null;
    add(...nodes: Array<Node>): void;
    remove(node: Node): void;
}
