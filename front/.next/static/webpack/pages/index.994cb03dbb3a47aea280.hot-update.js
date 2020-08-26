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
    console.log("-------------" + postAdded);
    console.log("------------" + isAddingPost);

    if (!isAddingPost) {
      setTextArea('');
    }
  }, [isAddingPost]);
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
        lineNumber: 41,
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
        lineNumber: 42,
        columnNumber: 13
      }
    }), __jsx("input", {
      type: "file",
      multiple: true,
      hidden: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      color: "primary",
      "aria-label": "upload picture",
      component: "span",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 48,
        columnNumber: 13
      }
    }, "\uC62C\uB9AC\uAE30", isAddingPost && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 37
      }
    })), imagePaths && imagePaths.map(function (v, i) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
        image: "http://localhost:3000/" + v,
        alt: v,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJpc0FkZGluZ1Bvc3QiLCJ1c2VTdGF0ZSIsInRleHRBcmVhIiwic2V0VGV4dEFyZWEiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiYWxlcnQiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50Iiwib25DaGFuZ2VUZXh0QXJlYSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHFCQUU4QkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBSyxDQUFDQyxJQUFSO0FBQUEsR0FBTixDQUZ6QztBQUFBLE1BRVZDLFVBRlUsZ0JBRVZBLFVBRlU7QUFBQSxNQUVFQyxTQUZGLGdCQUVFQSxTQUZGO0FBQUEsTUFFYUMsWUFGYixnQkFFYUEsWUFGYjs7QUFBQSxrQkFHZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUh4QjtBQUFBLE1BR1ZDLFFBSFU7QUFBQSxNQUdBQyxXQUhBOztBQU1sQkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFnQlAsU0FBNUI7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQWVOLFlBQTNCOztBQUNBLFFBQUcsQ0FBQ0EsWUFBSixFQUFpQjtBQUNiRyxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNIO0FBQ0osR0FOUSxFQU1QLENBQUNILFlBQUQsQ0FOTyxDQUFUO0FBUUEsTUFBTU8sWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUNsQ0EsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUksQ0FBQ1IsUUFBUSxDQUFDUyxJQUFULEVBQUwsRUFBc0I7QUFDbEIsYUFBT0MsS0FBSyxDQUFDLDBCQUFELENBQVo7QUFDSDs7QUFDRG5CLFlBQVEsQ0FBQztBQUNMb0IsVUFBSSxFQUFDQywrREFEQTtBQUVMQyxVQUFJLEVBQUM7QUFDREMsZUFBTyxFQUFDZDtBQURQO0FBRkEsS0FBRCxDQUFSO0FBT0gsR0FaK0IsRUFZOUIsQ0FBQ0EsUUFBRCxDQVo4QixDQUFoQztBQWNBLE1BQU1lLGdCQUFnQixHQUFHVCx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUN0Q04sZUFBVyxDQUFDTSxDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsR0FGbUMsRUFFbEMsQ0FBQ2pCLFFBQUQsQ0FGa0MsQ0FBcEM7QUFJQSxTQUNJO0FBQ0E7QUFBTSxjQUFRLEVBQUVLLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFVLGVBQVMsRUFBQyxlQUFwQjtBQUFvQyxjQUFRLEVBQUVVLGdCQUE5QztBQUFpRSxXQUFLLEVBQUVmLFFBQXhFO0FBQ0EsaUJBQVcsRUFBQywyREFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFHSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsTUFBM0I7QUFBNEIsWUFBTSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosRUFJSSxNQUFDLDREQUFEO0FBQVksV0FBSyxFQUFDLFNBQWxCO0FBQTRCLG9CQUFXLGdCQUF2QztBQUF3RCxlQUFTLEVBQUMsTUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkosRUFPSSxNQUFDLHdEQUFEO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBSyxFQUFDLFNBQTVCO0FBQXNDLFdBQUssRUFBRTtBQUFDLGlCQUFNO0FBQVAsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDUUYsWUFBWSxJQUFJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR4QixDQVBKLEVBVUtGLFVBQVUsSUFBSUEsVUFBVSxDQUFDc0IsR0FBWCxDQUFnQixVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBTztBQUNsQyxhQUNBLG1FQUFFLE1BQUMsMkRBQUQ7QUFDRixhQUFLLEVBQUUsMkJBQXlCRCxDQUQ5QjtBQUNpQyxXQUFHLEVBQUVBLENBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBRixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixDQURBO0FBTUgsS0FQYyxDQVZuQjtBQUZKO0FBc0JILENBdEREOztHQUFNN0IsUTtVQUNlRSx1RCxFQUMrQkMsdUQ7OztLQUY5Q0gsUTtBQXdEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTk0Y2IwM2RiYjNhNDdhZWEyODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAseyB1c2VDYWxsYmFjayAsdXNlU3RhdGUsIHVzZUVmZmVjdCB9ZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXHJcbmltcG9ydCB7IEljb25CdXR0b24sIEJ1dHRvbiwgQ2FyZE1lZGlhLCBDaXJjdWxhclByb2dyZXNzIH1mcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7IFxyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhJztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaW1hZ2VQYXRocyAscG9zdEFkZGVkLCBpc0FkZGluZ1Bvc3QgfSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFsgdGV4dEFyZWEsIHNldFRleHRBcmVhIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLVwiK3Bvc3RBZGRlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1cIitpc0FkZGluZ1Bvc3QpO1xyXG4gICAgICAgIGlmKCFpc0FkZGluZ1Bvc3Qpe1xyXG4gICAgICAgICAgICBzZXRUZXh0QXJlYSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaXNBZGRpbmdQb3N0XSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoZSk9PnsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCAhdGV4dEFyZWEudHJpbSgpICl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOugpOuptCDrgrTsmqnsnYQg7J6F66Cl7ZW07JW8IO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgY29udGVudDp0ZXh0QXJlYSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgIH0sW3RleHRBcmVhXSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXh0QXJlYSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFRleHRBcmVhKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sW3RleHRBcmVhXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8vIDxmb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+IFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEZvcm19PiBcclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInBvc3QtdGV4dGFyZWFcIiBvbkNoYW5nZT17b25DaGFuZ2VUZXh0QXJlYSB9IHZhbHVlPXt0ZXh0QXJlYX0gXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Jik64qYIO2VmOujqOuKlCDslrTrlaDrgpjsmpQ/XCIgLz4gXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiAgLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cInVwbG9hZCBwaWN0dXJlXCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319ID4gXHJcbiAgICAgICAgICAgICAgICDsmKzrpqzquLB7aXNBZGRpbmdQb3N0ICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHtpbWFnZVBhdGhzICYmIGltYWdlUGF0aHMubWFwKCAodixpKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPD48Q2FyZE1lZGlhIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e1wiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiK3Z9IGFsdD17dn1cclxuICAgICAgICAgICAgICAgIC8+PEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX0gXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuXHJcbiAgICAgICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9