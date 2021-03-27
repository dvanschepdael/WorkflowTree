# WorkflowTree

Browse a decision tree as a step-by-step workflow

# Installation
<pre>
<code>
npm i workflowtree
</code>
</pre>


# Usage

Simple usage with a forms workflow with linear steps:

- Create keys
<pre>
<code>
export enum Step {    
    FormA,  
    FormB,   
    FormC   
}
</code>
</pre>

- Create steps with a key and a step() function
<pre>
<code>
const stepA = {
    key: Step.FormA,
    next: (formA: FormA) => {
        //Check the form and determine the next step
        return Step.FormB;
    }
} as Node;
</code>
<code>
const stepB = {
    key: Step.FormB,
    parentKey: Step.FormA,
    next: (formB: FormB) => {
        //Check the form and determine the next step
        return Step.FormC;
    }
} as Node;
</code>
<code>
const stepC = {
    key: Step.FormC,
    parentKey: Step.FormB,
    next: () => {
        //Finish the process
        return null;
    }
} as Node;
</code>
</pre>

- Create the workflow with a tree and organize steps
<pre>
<code>
const tree = new Tree(stepA);   //Create tree and set stepA as root
tree.add(stepB, stepC);         //Add other steps
</code>
<code>
const workflow = new Workflow(tree);
</code>
</pre>

- Browse through the tree
<pre>
<code>
//First form
const currentKey = workflow.currentNode.key;
</code>
<code>
//Wait user fills fields and click to continue
currentKey = workflow.next(currentForm).key;
</code>
</pre>

- list of step history
<pre>
<code>
const history = workflow.stack;
</code>
</pre>
