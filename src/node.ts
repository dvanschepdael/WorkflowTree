import { StepFunction } from "./types";

export interface Node {
    key: any;
    step: StepFunction;
    parent: Node;
    children: Array<Node>;
}
