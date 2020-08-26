webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Message */ "./node_modules/@material-ui/icons/Message.js");
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ljh\\Desktop\\all\\DigitalGallery\\front\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    }
  };
});

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user;
  }),
      myInfo = _useSelector.myInfo;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.post;
  }),
      CommentAdded = _useSelector2.CommentAdded,
      isAddingComment = _useSelector2.isAddingComment;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setCommentText(e.target.value);
  }, []); //댓글 입력버튼클릭시

  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!myInfo.id) {
      return alert('로그인 필요');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["ADD_COMMENT_REQUEST"],
      data: {
        postId: post.id
      }
    });
  }, [myInfo && myInfo.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCommentText('');
  }, [CommentAdded === true]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("div", {
    key: +post.createdAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    avatar: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      "aria-label": post.User.nickname[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }),
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "contained",
      color: "primary",
      disableElevation: true,
      style: {
        marginTop: 0
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 26
      }
    }, "\uD314\uB85C\uC789"),
    title: post.User.nickname,
    subheader: post.createdAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, post.content.split(/(#[^\s]+)/g).map(function (v) {
    if (v.match(/(#[^\s]+)/g)) {
      //만약 #ㅇㅇ 면, 링크로.
      return __jsx(next__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/hashtag",
        key: v,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 29
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 59
        }
      }, v));
    }

    return v;
  })), post.img && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.media,
    image: post.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    disableSpacing: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: onToggleComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  })), commentFormOpened && __jsx("form", {
    onSubmit: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: commentText,
    onChange: onChangeCommentText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, "\uB4F1\uB85D", isAddingComment && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 53
    }
  })))), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "\uCD1D ", post.Comments && post.Comments ? post.Comments.length : 0, "\uAC1C\uC758 \uB313\uAE00")), post.Comments !== 0 && post.Comments.map(function (item) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      alignItems: "flex-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, item.User.nickname[0])), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: item.User.nickname,
      secondary: item.content + item.createdAt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 29
      }
    }));
  }))))));
};

_s(PostCard, "SHfhsA0pL3Gfk6qBYzI3KNTQG70=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"]];
});

_c = PostCard;
PostCard.postTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = next;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FL2V4dGVybmFsIFwibmV4dFwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1lZGlhIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIlBvc3RDYXJkIiwicG9zdCIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJteUluZm8iLCJDb21tZW50QWRkZWQiLCJpc0FkZGluZ0NvbW1lbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25Ub2dnbGVDb21tZW50IiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0Q29tbWVudCIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJhbGVydCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsInBvc3RJZCIsInVzZUVmZmVjdCIsImNyZWF0ZWRBdCIsIlVzZXIiLCJuaWNrbmFtZSIsIm1hcmdpblRvcCIsImNvbnRlbnQiLCJzcGxpdCIsIm1hcCIsInYiLCJtYXRjaCIsImltZyIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInBvc3RUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsU0FBSyxFQUFFO0FBQ0xD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0EsSUFBSSxDQUFDWCxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FETCxDQURKLENBREosRUFNSSxNQUFDLDhEQUFEO0FBQ0EsYUFBTyxFQUFFVSxJQUFJLENBQUNYLElBQUwsQ0FBVUMsUUFEbkI7QUFFQSxlQUFTLEVBQUVVLElBQUksQ0FBQ1IsT0FBTCxHQUFjUSxJQUFJLENBQUNaLFNBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSixDQUQyQztBQUFBLEdBQW5CLENBSnhCLENBcEJSLENBREosQ0F2QkosQ0FGQSxDQURKO0FBd0VILENBM0dEOztHQUFNaEMsUTtVQUNjTixTLEVBSUVjLHVELEVBQ3dCQSx1RCxFQUN6Qk8sdUQ7OztLQVBmZixRO0FBNkdOQSxRQUFRLENBQUM2QyxTQUFULEdBQXFCO0FBQ2pCNUMsTUFBSSxFQUFFNkMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNsQmQsUUFBSSxFQUFFYSxpREFBUyxDQUFDRSxNQURFO0FBRWxCWixXQUFPLEVBQUVVLGlEQUFTLENBQUNHLE1BRkQ7QUFHbEJSLE9BQUcsRUFBRUssaURBQVMsQ0FBQ0csTUFIRztBQUlsQmpCLGFBQVMsRUFBRWMsaURBQVMsQ0FBQ0U7QUFKSCxHQUFoQjtBQURXLENBQXJCO0FBU2VoRCx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmYzAzNWU3YWE0NDE3NDE4ODg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgICBcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQnV0dG9uLCBDYXJkTWVkaWEsIENhcmQsIFRleHRGaWVsZCwgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtQXZhdGFyLExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJzsgICBcclxuaW1wb3J0IHsgQ2FyZEhlYWRlciwgQXZhdGFyLCBDYXJkQ29udGVudCwgQ2FyZEFjdGlvbnMsIENpcmN1bGFyUHJvZ3Jlc3MgfWZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJzsgXHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuaW1wb3J0IE1lc3NhZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZXNzYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge0FERF9DT01NRU5UX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbiAgXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoeyBcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcclxuICAgIH1cclxufSkpO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PntcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dCBdPXVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHtteUluZm8gfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBDb21tZW50QWRkZWQgLCBpc0FkZGluZ0NvbW1lbnR9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQocHJldj0+ICFwcmV2KTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQ29tbWVudFRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgLy/rjJPquIAg7J6F66Cl67KE7Yq87YG066at7IucXHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCAhbXlJbmZvLmlkICl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2VhOyalCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ6cG9zdC5pZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtteUluZm8gJiYgbXlJbmZvLmlkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57ICBcclxuICAgICAgICBzZXRDb21tZW50VGV4dCgnJyk7IFxyXG4gICAgfSxbQ29tbWVudEFkZGVkID09PSB0cnVlXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGtleT17K3Bvc3QuY3JlYXRlZEF0fT5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBhcmlhLWxhYmVsPXtwb3N0LlVzZXIubmlja25hbWVbMF19PjwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17IDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGRpc2FibGVFbGV2YXRpb25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOjB9fT5cclxuICAgICAgICAgICAgICAgIO2MlOuhnOyeiTwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBzdWJoZWFkZXI9e3Bvc3QuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50LnNwbGl0KC8oI1teXFxzXSspL2cpLm1hcCh2PT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodi5tYXRjaCgvKCNbXlxcc10rKS9nKSApeyAvL+unjOyVvSAj44WH44WHIOuptCwg66eB7YGs66GcLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhc2h0YWdcIiBrZXk9e3Z9PjxhPnt2fTwvYT48L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIHsgcG9zdC5pbWcgJiYgPENhcmRNZWRpYSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICBpbWFnZT17IHBvc3QuaW1nfSAvPn1cclxuICAgICAgICBcclxuICAgICAgICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VJY29uLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrk7HroZ1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBZGRpbmdDb21tZW50ICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7stJ0ge3Bvc3QuQ29tbWVudHMgJiYgcG9zdC5Db21tZW50cyA/IHBvc3QuQ29tbWVudHMubGVuZ3RoIDogMCB96rCc7J2YIOuMk+q4gDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuQ29tbWVudHMgIT09IDAgJiYgcG9zdC5Db21tZW50cy5tYXAoIChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17aXRlbS5jb250ZW50ICtpdGVtLmNyZWF0ZWRBdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUG9zdENhcmQucG9zdFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaW1nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG5cclxuICAgICAgICAgICAgICIsIm1vZHVsZS5leHBvcnRzID0gbmV4dDsiXSwic291cmNlUm9vdCI6IiJ9