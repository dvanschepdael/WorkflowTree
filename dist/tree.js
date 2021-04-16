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
    Tree.prototype.search = function (key) {
        return this.searchNode(this._root, key);
    };
    Tree.prototype.searchNode = function (node, key) {
        if (node == null) {
            return null;
        }
        if (node.key == key) {
            return node;
        }
        if (node.children == null) {
            return null;
        }
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var rs = this.searchNode(child, key);
            if (!!rs) {
                return rs;
            }
        }
        return null;
    };
    Tree.prototype.add = function (parent) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        if (!parent) {
            return;
        }
        for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var node = nodes_1[_a];
            node.parent = parent;
            if (parent.children == null) {
                parent.children = new Array();
            }
            parent.children.push(node);
        }
    };
    Tree.prototype.remove = function (node) {
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.parent = node.parent;
        }
        if (!!node.parent) {
            var idx = node.parent.children.findIndex(function (n) { return n.key === node.key; });
            node.parent.children.splice(idx, 1);
        }
    };
    return Tree;
}());
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map