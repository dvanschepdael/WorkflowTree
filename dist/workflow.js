(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Workflow = void 0;
    var Workflow = /** @class */ (function () {
        function Workflow(tree) {
            this._tree = tree;
            this._currentNode = this._tree.root;
            this._stack = [this._currentNode.value];
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
            if (this._currentNode != null && this._currentNode.parent != null) {
                this._currentNode = this._currentNode.parent;
                this._stack.pop();
                return this._currentNode;
            }
            else {
                return null;
            }
        };
        Workflow.prototype.next = function (args) {
            if (this._currentNode != null && this._currentNode.children != null) {
                var nextValue = this._currentNode.step(args);
                var node = this._tree.searchChildren(this._currentNode, nextValue);
                if (node != null) {
                    this._currentNode = node;
                    this._stack.push(nextValue);
                }
                return node;
            }
            else {
                return null;
            }
        };
        return Workflow;
    }());
    exports.Workflow = Workflow;
});
//# sourceMappingURL=workflow.js.map