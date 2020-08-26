webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ljh\\Desktop\\all\\DigitalGallery\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      imagePaths = _useSelector.imagePaths,
      postAdded = _useSelector.postAdded,
      isAddingPost = _useSelector.isAddingPost;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      textArea = _useState[0],
      setTextArea = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (postAdded) {
      setTextArea('');
    }
  }, [postAdded]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!textArea.trim()) {
      return alert('게시글을 작성하려면 내용을 입력해야 합니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: {
        content: textArea
      }
    });
  }, [textArea]);
  var onChangeTextArea = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setTextArea(e.target.value);
  }, [textArea]);
  return (// <form encType="multipart/form-data" onSubmit={onSubmitForm}> 
    __jsx("form", {
      onSubmit: onSubmitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("textarea", {
      className: "post-textarea",
      onChange: onChangeTextArea,
      value: textArea,
      placeholder: "\uC624\uB298 \uD558\uB8E8\uB294 \uC5B4\uB560\uB098\uC694?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }), __jsx("input", {
      type: "file",
      multiple: true,
      hidden: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      color: "primary",
      "aria-label": "upload picture",
      component: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      color: "primary",
      style: {
        "float": 'right'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, "\uC62C\uB9AC\uAE30", isAddingPost && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 37
      }
    })), imagePaths && imagePaths.map(function (v, i) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
        image: "http://localhost:3000/" + v,
        alt: v,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 19
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }, "\uC81C\uAC70"));
    }))
  );
};

_s(PostForm, "8ge5B/fE7UNdsG1jmsgKtdrKG1E=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJpc0FkZGluZ1Bvc3QiLCJ1c2VTdGF0ZSIsInRleHRBcmVhIiwic2V0VGV4dEFyZWEiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJvbkNoYW5nZVRleHRBcmVhIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ2IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRThCQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNDLElBQVI7QUFBQSxHQUFOLENBRnpDO0FBQUEsTUFFVkMsVUFGVSxnQkFFVkEsVUFGVTtBQUFBLE1BRUVDLFNBRkYsZ0JBRUVBLFNBRkY7QUFBQSxNQUVhQyxZQUZiLGdCQUVhQSxZQUZiOztBQUFBLGtCQUdnQkMsc0RBQVEsQ0FBQyxFQUFELENBSHhCO0FBQUEsTUFHVkMsUUFIVTtBQUFBLE1BR0FDLFdBSEE7O0FBTWxCQyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHTCxTQUFILEVBQWE7QUFDVEksaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDSDtBQUNKLEdBSlEsRUFJUCxDQUFDSixTQUFELENBSk8sQ0FBVDtBQU1BLE1BQU1NLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQUs7QUFDbENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJLENBQUNOLFFBQVEsQ0FBQ08sSUFBVCxFQUFMLEVBQXNCO0FBQ2xCLGFBQU9DLEtBQUssQ0FBQywwQkFBRCxDQUFaO0FBQ0g7O0FBQ0RqQixZQUFRLENBQUM7QUFDTGtCLFVBQUksRUFBQ0MsK0RBREE7QUFFTEMsVUFBSSxFQUFDO0FBQ0RDLGVBQU8sRUFBQ1o7QUFEUDtBQUZBLEtBQUQsQ0FBUjtBQU9ILEdBWitCLEVBWTlCLENBQUNBLFFBQUQsQ0FaOEIsQ0FBaEM7QUFjQSxNQUFNYSxnQkFBZ0IsR0FBR1QseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQUs7QUFDdENKLGVBQVcsQ0FBQ0ksQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILEdBRm1DLEVBRWxDLENBQUNmLFFBQUQsQ0FGa0MsQ0FBcEM7QUFJQSxTQUNJO0FBQ0E7QUFBTSxjQUFRLEVBQUVHLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFVLGVBQVMsRUFBQyxlQUFwQjtBQUFvQyxjQUFRLEVBQUVVLGdCQUE5QztBQUFpRSxXQUFLLEVBQUViLFFBQXhFO0FBQ0EsaUJBQVcsRUFBQywyREFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFHSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsTUFBM0I7QUFBNEIsWUFBTSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosRUFJSSxNQUFDLDREQUFEO0FBQVksV0FBSyxFQUFDLFNBQWxCO0FBQTRCLG9CQUFXLGdCQUF2QztBQUF3RCxlQUFTLEVBQUMsTUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosRUFPSSxNQUFDLHdEQUFEO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBSyxFQUFDLFNBQTVCO0FBQXNDLFdBQUssRUFBRTtBQUFDLGlCQUFNO0FBQVAsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDUUYsWUFBWSxJQUFJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR4QixDQVBKLEVBVUtGLFVBQVUsSUFBSUEsVUFBVSxDQUFDb0IsR0FBWCxDQUFnQixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUNsQyxhQUNBLG1FQUFFLE1BQUMsMkRBQUQ7QUFDRixhQUFLLEVBQUUsMkJBQXlCRCxDQUQ5QjtBQUNpQyxXQUFHLEVBQUVBLENBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBRixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixDQURBO0FBTUgsS0FQYyxDQVZuQjtBQUZKO0FBc0JILENBcEREOztHQUFNM0IsUTtVQUNlRSx1RCxFQUMrQkMsdUQ7OztLQUY5Q0gsUTtBQXNEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTMzNDVmZmFiNjcxOGZmYTY5ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAseyB1c2VDYWxsYmFjayAsdXNlU3RhdGUsIHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXHJcbmltcG9ydCB7IEljb25CdXR0b24sIEJ1dHRvbiwgQ2FyZE1lZGlhLCBDaXJjdWxhclByb2dyZXNzIH1mcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7IFxyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhJztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaW1hZ2VQYXRocyAscG9zdEFkZGVkLCBpc0FkZGluZ1Bvc3QgfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgdGV4dEFyZWEsIHNldFRleHRBcmVhIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHBvc3RBZGRlZCl7XHJcbiAgICAgICAgICAgIHNldFRleHRBcmVhKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtwb3N0QWRkZWRdKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKChlKT0+eyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoICF0ZXh0QXJlYS50cmltKCkgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY66Ck66m0IOuCtOyaqeydhCDsnoXroKXtlbTslbwg7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OnRleHRBcmVhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgfSxbdGV4dEFyZWFdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVRleHRBcmVhID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0VGV4dEFyZWEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbdGV4dEFyZWFdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgLy8gPGZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT4gXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+IFxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicG9zdC10ZXh0YXJlYVwiIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHRBcmVhIH0gdmFsdWU9e3RleHRBcmVhfSBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmKTripgg7ZWY66Oo64qUIOyWtOuVoOuCmOyalD9cIiAvPiBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuICAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwidXBsb2FkIHBpY3R1cmVcIiBjb21wb25lbnQ9XCJzcGFuXCI+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPiBcclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX0gPiBcclxuICAgICAgICAgICAgICAgIOyYrOumrOq4sHtpc0FkZGluZ1Bvc3QgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoICh2LGkpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8PjxDYXJkTWVkaWEgXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIrdn0gYWx0PXt2fVxyXG4gICAgICAgICAgICAgICAgLz48QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfSBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG5cclxuICAgICAgICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=