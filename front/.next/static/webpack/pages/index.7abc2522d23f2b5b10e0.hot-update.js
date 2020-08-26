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
      return __jsx(next__WEBPACK_IMPORTED_MODULE_4__["Link"], {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZWRpYSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJQb3N0Q2FyZCIsInBvc3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwiY29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibXlJbmZvIiwiQ29tbWVudEFkZGVkIiwiaXNBZGRpbmdDb21tZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uVG9nZ2xlQ29tbWVudCIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdENvbW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiYWxlcnQiLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJwb3N0SWQiLCJ1c2VFZmZlY3QiLCJjcmVhdGVkQXQiLCJVc2VyIiwibmlja25hbWUiLCJtYXJnaW5Ub3AiLCJjb250ZW50Iiwic3BsaXQiLCJtYXAiLCJ2IiwibWF0Y2giLCJpbWciLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwb3N0VHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUUsQ0FESDtBQUVMQyxnQkFBVSxFQUFFLFFB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REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tBLElBQUksQ0FBQ1gsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLENBREwsQ0FESixDQURKLEVBTUksTUFBQyw4REFBRDtBQUNBLGFBQU8sRUFBRVUsSUFBSSxDQUFDWCxJQUFMLENBQVVDLFFBRG5CO0FBRUEsZUFBUyxFQUFFVSxJQUFJLENBQUNSLE9BQUwsR0FBY1EsSUFBSSxDQUFDWixTQUY5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkosQ0FEMkM7QUFBQSxHQUFuQixDQUp4QixDQXBCUixDQURKLENBdkJKLENBRkEsQ0FESjtBQXdFSCxDQTNHRDs7R0FBTWhDLFE7VUFDY04sUyxFQUlFYyx1RCxFQUN3QkEsdUQsRUFDekJPLHVEOzs7S0FQZmYsUTtBQTZHTkEsUUFBUSxDQUFDNkMsU0FBVCxHQUFxQjtBQUNqQjVDLE1BQUksRUFBRTZDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDbEJkLFFBQUksRUFBRWEsaURBQVMsQ0FBQ0UsTUFERTtBQUVsQlosV0FBTyxFQUFFVSxpREFBUyxDQUFDRyxNQUZEO0FBR2xCUixPQUFHLEVBQUVLLGlEQUFTLENBQUNHLE1BSEc7QUFJbEJqQixhQUFTLEVBQUVjLGlEQUFTLENBQUNFO0FBSkgsR0FBaEI7QUFEVyxDQUFyQjtBQVNlaEQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2FiYzI1MjJkMjNmMmI1YjEwZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAse3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAgIFxyXG5pbXBvcnQgeyBJY29uQnV0dG9uLCBCdXR0b24sIENhcmRNZWRpYSwgQ2FyZCwgVGV4dEZpZWxkLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1BdmF0YXIsTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnOyAgIFxyXG5pbXBvcnQgeyBDYXJkSGVhZGVyLCBBdmF0YXIsIENhcmRDb250ZW50LCBDYXJkQWN0aW9ucywgQ2lyY3VsYXJQcm9ncmVzcyB9ZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnOyBcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgTWVzc2FnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lc3NhZ2UnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtBRERfQ09NTUVOVF9SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4gIFxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHsgXHJcbiAgICBtZWRpYToge1xyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT57XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHQgXT11c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7bXlJbmZvIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgQ29tbWVudEFkZGVkICwgaXNBZGRpbmdDb21tZW50fSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKHByZXY9PiAhcHJldik7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUNvbW1lbnRUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgICAgIHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIC8v64yT6riAIOyeheugpeuyhO2KvO2BtOumreyLnFxyXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiggIW15SW5mby5pZCApe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduCDtlYTsmpQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgcG9zdElkOnBvc3QuaWQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxbbXlJbmZvICYmIG15SW5mby5pZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+eyAgXHJcbiAgICAgICAgc2V0Q29tbWVudFRleHQoJycpOyBcclxuICAgIH0sW0NvbW1lbnRBZGRlZCA9PT0gdHJ1ZV0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBrZXk9eytwb3N0LmNyZWF0ZWRBdH0+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgYXJpYS1sYWJlbD17cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfT48L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249eyA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDowfX0+XHJcbiAgICAgICAgICAgICAgICDtjJTroZzsnok8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgc3ViaGVhZGVyPXtwb3N0LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuY29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAodj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHYubWF0Y2goLygjW15cXHNdKykvZykgKXsgLy/rp4zslb0gI+OFh+OFhyDrqbQsIOunge2BrOuhnC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9oYXNodGFnXCIga2V5PXt2fT48YT57dn08L2E+PC9MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICB7IHBvc3QuaW1nICYmIDxDYXJkTWVkaWEgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgaW1hZ2U9eyBwb3N0LmltZ30gLz59XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b25Ub2dnbGVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSWNvbi8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e2NvbW1lbnRUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg65Ox66GdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQWRkaW5nQ29tbWVudCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+7LSdIHtwb3N0LkNvbW1lbnRzICYmIHBvc3QuQ29tbWVudHMgPyBwb3N0LkNvbW1lbnRzLmxlbmd0aCA6IDAgfeqwnOydmCDrjJPquIA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LkNvbW1lbnRzICE9PSAwICYmIHBvc3QuQ29tbWVudHMubWFwKCAoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uVXNlci5uaWNrbmFtZVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2l0ZW0uY29udGVudCAraXRlbS5jcmVhdGVkQXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RDYXJkLnBvc3RUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGltZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuXHJcbiAgICAgICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9