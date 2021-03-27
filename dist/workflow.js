"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
var Workflow = /** @class */ (function () {
    function Workflow(tree) {
        this._tree = tree;
        this._currentNode = this._tree.root;
        this._stack = [this._currentNode.key];
    }
    Object.defineProperty(Workflow.prototype, "currentNode", {
        get: function () {
            return this._currentNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workflow.prototype, "stack", {
        get: function () {
            return this._stack;
        },
        enumerable: false,
        configurable: true
    });
    Workflow.prototype.previous = function () {
        if (this._currentNode == null || this._currentNode.parent == null) {
            return null;
        }
        this._currentNode = this._currentNode.parent;
        this._stack.pop();
        return this._currentNode;
    };
    Workflow.prototype.next = function (param) {
        if (this._currentNode == null || this._currentNode.children == null) {
            return null;
        }
        var nextKey = this._currentNode.next(param);
        var node = this._tree.searchNode(this._currentNode, nextKey);
        if (node != null) {
            this._currentNode = node;
            this._stack.push(nextKey);
        }
        return node;
    };
    return Workflow;
}());
exports.Workflow = Workflow;
//# sourceMappingURL=workflow.js.map