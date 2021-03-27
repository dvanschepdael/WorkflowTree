import { NextFunction } from "./types";
export interface Node {
    key: any;
    parentKey: any;
    next: NextFunction;
    parent: Node;
    children: Array<Node>;
}
