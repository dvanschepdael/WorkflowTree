"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(root) {
        this._root = root || null;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    Tree.prototype.searchChildren = function (node, value) {
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.value === value) {
                return child;
            }
        }
        return null;
    };
    Tree.prototype.add = function (node, parent) {
        node.parent = parent;
        if (parent.children == null) {
            parent.children = new Array();
        }
        parent.children.push(node);
    };
    Tree.prototype.remove = function (node) {
        if (node.parent) {
            var idx = node.parent.children.findIndex(function (n) { return n === node; });
            node.parent.children.splice(idx, 1);
        }
    };
    return Tree;
}());
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map