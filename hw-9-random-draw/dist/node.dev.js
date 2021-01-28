"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var prev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
  this.prev = prev;
};