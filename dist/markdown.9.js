"use strict";
(self["webpackChunkinterview_collection"] = self["webpackChunkinterview_collection"] || []).push([[9],{

/***/ 4351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8456);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3522);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6280);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5297);
/* provided dependency */ var React = __webpack_require__(7294);


 //import { Comment } from './Comment'
//import { ReactSyntaxHighlighter } from './ReactSyntaxHighlighter'



const code = codeProps => {
  const {
    inline,
    className,
    children,
    ...props
  } = codeProps;
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? React.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,
    language: match[1],
    wrapLongLines: true,
    PreTag: "div",
    children: String(children).replace(/\n$/, ''),
    ...props
  }) : React.createElement("code", {
    className: className,
    ...props
  }, children);
};

const components = {
  code
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return React.createElement("div", {
    className: "markdown-container markdown-body"
  }, React.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_0__, {
    plugins: [remark_slug__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z],
    components: components,
    children: props.content
  }));
});

/***/ })

}]);