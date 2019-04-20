webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Form.tsx":
/*!**********************!*\
  !*** ./src/Form.tsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormItem */ "./src/FormItem.tsx");








var _jsxFileName = "/mnt/c/dev/ez-former/src/Form.tsx";




var Form =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Form, _React$PureComponent);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      formData: _this.props.initialData ? immutable__WEBPACK_IMPORTED_MODULE_9__["Map"]().merge(_this.props.initialData) : immutable__WEBPACK_IMPORTED_MODULE_9__["Map"]()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "gatherFormItemProps", function (key) {
      var keyPath = Form.getKeyPath(key);

      var setFormData = function setFormData(value) {
        var nextFormData = _this.state.formData.setIn(keyPath, value);

        _this.setState({
          formData: nextFormData
        });

        if (typeof _this.props.onChange === 'function') {
          _this.props.onChange(value, key, nextFormData);
        }
      };

      return {
        data: _this.state.formData.getIn(keyPath),
        setFormData: setFormData
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getInjectedChildren", function () {
      var childrenProp = _this.props.children;
      var children = react__WEBPACK_IMPORTED_MODULE_8__["Children"].map(childrenProp, function (child) {
        if (Form.isFormItem(child)) {
          return react__WEBPACK_IMPORTED_MODULE_8__["cloneElement"](child, _this.gatherFormItemProps(child.props.formKey));
        }

        return child;
      });
      return children;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Form, [{
    key: "render",
    value: function render() {
      var children = this.getInjectedChildren();
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "EZ-FORMER"), children);
    }
  }], [{
    key: "setCalculatedValue",
    value: function setCalculatedValue(child, prevFormData, nextFormData) {
      // Determine default value
      var keyPath = Form.getKeyPath(child.props.formKey);
      var prevValue = prevFormData.getIn(keyPath);
      var valueToSet = prevValue;

      if (child.props.defaultValue !== undefined && prevValue === undefined) {
        valueToSet = child.props.defaultValue;
      }

      nextFormData.setIn(keyPath, valueToSet);
    }
  }, {
    key: "getKeyPath",
    value: function getKeyPath(key) {
      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(key)) return key;
      return [key];
    }
  }, {
    key: "isFormItem",
    value: function isFormItem(node) {
      if (!node || !react__WEBPACK_IMPORTED_MODULE_8__["isValidElement"](node)) return false;
      return node.type === _FormItem__WEBPACK_IMPORTED_MODULE_10__["default"];
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Form, "defaultProps", {
  formReadOnly: false
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Form, "getDerivedStateFromProps", function (props, state) {
  // Maintain form fields according to `formKey` props of chilren
  var formData = immutable__WEBPACK_IMPORTED_MODULE_9__["Map"]().withMutations(function (map) {
    react__WEBPACK_IMPORTED_MODULE_8__["Children"].map(props.children, function (child) {
      if (Form.isFormItem(child)) {
        Form.setCalculatedValue(child, state.formData, map);
      }
    });
  });
  if (state.formData.equals(formData)) return null; // or it may cause a loop rendering

  return {
    formData: formData
  };
});

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.7caa0ae914103efe4e4a.hot-update.js.map