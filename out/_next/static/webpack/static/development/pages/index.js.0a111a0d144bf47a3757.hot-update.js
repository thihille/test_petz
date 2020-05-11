webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/card/index.jsx":
/*!***************************************!*\
  !*** ./src/components/card/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/card/style.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Card = function Card(_ref) {
  var data = _ref.data;
  var id = data.id,
      image = data.image,
      title = data.title,
      body = data.body;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "detalhes?idpost=".concat(id),
    as: "/detalhes/".concat(id)
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Item"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["CardImage"], null, __jsx("img", {
    src: image
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, title), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], null, body))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.0a111a0d144bf47a3757.hot-update.js.map