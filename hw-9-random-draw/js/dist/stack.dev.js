"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.pointer = -1;
    this.stack = new LinkedList();
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(x) {
      ++this.pointer;
      this.stack.insert(x);
    }
  }, {
    key: "pop",
    value: function pop() {
      this.pointer--;
      console.log(this.stack.getCount() - 1);
      return this.stack.removeLast();
    }
  }, {
    key: "getPointer",
    value: function getPointer() {
      return this.pointer;
    }
  }]);

  return Stack;
}();