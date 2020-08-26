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

    if (!textArea.trim) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJpc0FkZGluZ1Bvc3QiLCJ1c2VTdGF0ZSIsInRleHRBcmVhIiwic2V0VGV4dEFyZWEiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJvbkNoYW5nZVRleHRBcmVhIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ2IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRThCQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNDLElBQVI7QUFBQSxHQUFOLENBRnpDO0FBQUEsTUFFVkMsVUFGVSxnQkFFVkEsVUFGVTtBQUFBLE1BRUVDLFNBRkYsZ0JBRUVBLFNBRkY7QUFBQSxNQUVhQyxZQUZiLGdCQUVhQSxZQUZiOztBQUFBLGtCQUdnQkMsc0RBQVEsQ0FBQyxFQUFELENBSHhCO0FBQUEsTUFHVkMsUUFIVTtBQUFBLE1BR0FDLFdBSEE7O0FBTWxCQyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHTCxTQUFILEVBQWE7QUFDVEksaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDSDtBQUNKLEdBSlEsRUFJUCxDQUFDSixTQUFELENBSk8sQ0FBVDtBQU1BLE1BQU1NLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQUs7QUFDbENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJLENBQUNOLFFBQVEsQ0FBQ08sSUFBZCxFQUFvQjtBQUNoQixhQUFPQyxLQUFLLENBQUMsMEJBQUQsQ0FBWjtBQUNIOztBQUNEakIsWUFBUSxDQUFDO0FBQ0xrQixVQUFJLEVBQUNDLCtEQURBO0FBRUxDLFVBQUksRUFBQztBQUNEQyxlQUFPLEVBQUNaO0FBRFA7QUFGQSxLQUFELENBQVI7QUFPSCxHQVorQixFQVk5QixDQUFDQSxRQUFELENBWjhCLENBQWhDO0FBY0EsTUFBTWEsZ0JBQWdCLEdBQUdULHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFLO0FBQ3RDSixlQUFXLENBQUNJLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUZtQyxFQUVsQyxDQUFDZixRQUFELENBRmtDLENBQXBDO0FBSUEsU0FDSTtBQUNBO0FBQU0sY0FBUSxFQUFFRyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBVSxlQUFTLEVBQUMsZUFBcEI7QUFBb0MsY0FBUSxFQUFFVSxnQkFBOUM7QUFBaUUsV0FBSyxFQUFFYixRQUF4RTtBQUNBLGlCQUFXLEVBQUMsMkRBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBR0k7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFRLE1BQTNCO0FBQTRCLFlBQU0sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLEVBSUksTUFBQyw0REFBRDtBQUFZLFdBQUssRUFBQyxTQUFsQjtBQUE0QixvQkFBVyxnQkFBdkM7QUFBd0QsZUFBUyxFQUFDLE1BQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLEVBT0ksTUFBQyx3REFBRDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLFdBQUssRUFBQyxTQUE1QjtBQUFzQyxXQUFLLEVBQUU7QUFBQyxpQkFBTTtBQUFQLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ1FGLFlBQVksSUFBSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEeEIsQ0FQSixFQVVLRixVQUFVLElBQUlBLFVBQVUsQ0FBQ29CLEdBQVgsQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQU87QUFDbEMsYUFDQSxtRUFBRSxNQUFDLDJEQUFEO0FBQ0YsYUFBSyxFQUFFLDJCQUF5QkQsQ0FEOUI7QUFDaUMsV0FBRyxFQUFFQSxDQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsQ0FEQTtBQU1ILEtBUGMsQ0FWbkI7QUFGSjtBQXNCSCxDQXBERDs7R0FBTTNCLFE7VUFDZUUsdUQsRUFDK0JDLHVEOzs7S0FGOUNILFE7QUFzRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzZTJjZTg4YTdjNzdmOTRkYTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHsgdXNlQ2FsbGJhY2sgLHVzZVN0YXRlLCB1c2VFZmZlY3QgfWZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yICwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7IFxyXG5pbXBvcnQgeyBJY29uQnV0dG9uLCBCdXR0b24sIENhcmRNZWRpYSwgQ2lyY3VsYXJQcm9ncmVzcyB9ZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnOyBcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT57XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMgLHBvc3RBZGRlZCwgaXNBZGRpbmdQb3N0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbIHRleHRBcmVhLCBzZXRUZXh0QXJlYSBdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihwb3N0QWRkZWQpe1xyXG4gICAgICAgICAgICBzZXRUZXh0QXJlYSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcG9zdEFkZGVkXSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoZSk9PnsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCAhdGV4dEFyZWEudHJpbSApe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjroKTrqbQg64K07Jqp7J2EIOyeheugpe2VtOyVvCDtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6dGV4dEFyZWEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICB9LFt0ZXh0QXJlYV0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlVGV4dEFyZWEgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRUZXh0QXJlYShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFt0ZXh0QXJlYV0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAvLyA8Zm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uU3VibWl0PXtvblN1Ym1pdEZvcm19PiBcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT4gXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJwb3N0LXRleHRhcmVhXCIgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dEFyZWEgfSB2YWx1ZT17dGV4dEFyZWF9IFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYpOuKmCDtlZjro6jripQg7Ja065Wg64KY7JqUP1wiIC8+IFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gIC8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgICAgIDxQaG90b0NhbWVyYSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+IFxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fSA+IFxyXG4gICAgICAgICAgICAgICAg7Jis66as6riwe2lzQWRkaW5nUG9zdCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7aW1hZ2VQYXRocyAmJiBpbWFnZVBhdGhzLm1hcCggKHYsaSk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDw+PENhcmRNZWRpYSBcclxuICAgICAgICAgICAgICAgIGltYWdlPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIit2fSBhbHQ9e3Z9XHJcbiAgICAgICAgICAgICAgICAvPjxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9IFxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcblxyXG4gICAgICAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==