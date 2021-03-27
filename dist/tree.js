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
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var rs = this.searchNode(child, key);
            if (rs != null) {
                return rs;
            }
        }
        return null;
    };
    Tree.prototype.add = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var node = nodes_1[_a];
            var parent_1 = this.search(node.parentKey);
            if (!!parent_1) {
                node.parent = parent_1;
                if (parent_1.children == null) {
                    parent_1.children = new Array();
                }
                parent_1.children.push(node);
            }
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