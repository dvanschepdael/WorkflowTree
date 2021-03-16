# WorkflowTree

Usage
-----

Simple usage with a linear tree.

1. Create values. This is stored in the tree node and used to distinct nodes. Value can be anything.

export enum Step {
    FormA,
    FormB,
    FormC
}

2. Create steps with a next() function.

const stepA = {
    value: Step.FormA,
    step: () => {
        //Check the form and determine the next step
        return Step.FormB;
    }
} as Node;

const stepB = {
    value: Step.FormB,
    step: () => {
        //Check the form and determine the next step
        return Step.FormC;
    }
} as Node;

const stepC = {
    value: Step.FormC,
    step: () => {
        //Finish the process
        return null;
    }
} as Node;

3. Create the workflow with a tree and organize steps.

const tree = new Tree(stepA);   //Create tree and set the starting step
tree.add(stepB, stepA);         //Add stepB as a child of stepA
tree.add(stepC, stepB);         //Add stepC as a child of stepB

const workflow = new Workflow(tree);

4. Browse through the tree

//First form
const currentForm = workflow.currentNode().value;

//User fills fields and click to continue
const currentForm = workflow.next().value;

5. List steps stack

const steps = workflow.stack;