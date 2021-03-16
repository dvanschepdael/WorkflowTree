# WorkflowTree

Usage
-----

Simple usage with a linear tree:

- Create values. This is stored in the tree node and used to distinct nodes. Value can be anything.
<pre>
<code>
export enum Step {    
    FormA,  
    FormB,   
    FormC   
}
</code>
</pre>

- Create steps with a next() function.
<pre>
<code>
const stepA = {
    value: Step.FormA,
    step: () => {
        //Check the form and determine the next step
        return Step.FormB;
    }
} as Node;
</code>
<code>
const stepB = {
    value: Step.FormB,
    step: () => {
        //Check the form and determine the next step
        return Step.FormC;
    }
} as Node;
</code>
<code>
const stepC = {
    value: Step.FormC,
    step: () => {
        //Finish the process
        return null;
    }
} as Node;
</code>
</pre>

- Create the workflow with a tree and organize steps.
<pre>
<code>
const tree = new Tree(stepA);   //Create tree and set the starting step
tree.add(stepB, stepA);         //Add stepB as a child of stepA
tree.add(stepC, stepB);         //Add stepC as a child of stepB
</code>
<code>
const workflow = new Workflow(tree);
</code>
</pre>

- Browse through the tree
<pre>
<code>
//First form
const currentForm = workflow.currentNode().value;
</code>
<code>
//User fills fields and click to continue
const currentForm = workflow.next().value;
</code>
</pre>

- List steps stack
<pre>
<code>
const steps = workflow.stack;
</code>
</pre>