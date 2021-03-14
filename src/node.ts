import { StepFunction } from "./types";

export interface Node {
    value: any;
    step: StepFunction;
    parent: Node;
    children: Array<Node>;
}
