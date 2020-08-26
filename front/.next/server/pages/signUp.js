module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signUp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/*! exports provided: useStyles, useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\ljh\\Desktop\\all\\DigitalGallery\\front\\pages\\signUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const useInput = (initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};
function SignUp() {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    isSigningUp,
    isSignUp
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const [id, onChangeId] = useInput('');
  const [nickName, onChangeNickName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const {
    0: passwordConfirm,
    1: setPasswordConfirm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [gender, onChangeGender] = useInput('male');
  const [birth, onChangeBirth] = useInput('');
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isSignUp && isSignUp) {
      alert('회원가입성공. 로그인 페이지로 이동합니다');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    }
  }, [isSignUp === true]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log({
      id,
      nickName,
      password,
      passwordConfirm,
      gender,
      birth,
      term
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SING_UP_REQUEST"],
      data: {
        userId: id,
        nickname: nickName,
        password,
        gender,
        birth
      }
    });
  }, [id, nickName, password, passwordConfirm, term, gender]);
  const onChangePasswordConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setPasswordError(e.target.value !== password);
    setPasswordConfirm(e.target.value);
  }, [password]);
  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    component: "main",
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: classes.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785"), __jsx("form", {
    onSubmit: onSubmit,
    className: classes.form,
    noValidate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "user-id",
    id: "user-id",
    label: "\uC544\uC774\uB514",
    value: id,
    onChange: onChangeId,
    variant: "outlined",
    required: true,
    fullWidth: true,
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "nickName",
    id: "nickName",
    label: "\uB2C9\uB124\uC784",
    value: nickName,
    onChange: onChangeNickName,
    variant: "outlined",
    required: true,
    fullWidth: true,
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "birth",
    type: "date",
    label: "\uC0DD\uC77C",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    },
    value: birth,
    onChange: onChangeBirth,
    variant: "outlined",
    required: true,
    fullWidth: true,
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "password",
    id: "password",
    label: "\uBE44\uBC00\uBC88\uD638",
    value: password,
    onChange: onChangePassword,
    variant: "outlined",
    required: true,
    fullWidth: true,
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "passwordConfirm",
    id: "passwordConfirm",
    label: "\uBE44\uBC00\uBC88\uD638\uD655\uC778",
    value: passwordConfirm,
    onChange: onChangePasswordConfirm,
    variant: "outlined",
    required: true,
    fullWidth: true,
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }), passwordError && __jsx("div", {
    className: "agree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
    "aria-label": "gender",
    name: "gender",
    value: gender,
    onChange: onChangeGender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    value: "male",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 57
      }
    }),
    label: "\uB0A8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    value: "female",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 59
      }
    }),
    label: "\uC5EC",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "allowExtraEmails",
      checked: term,
      onChange: onChangeTerm,
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 26
      }
    }),
    label: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }), termError && __jsx("div", {
    className: "agree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "\uAC00\uC785\uD558\uAE30 ", isSigningUp && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 36
    }
  })))));
}

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SING_UP_REQUEST, SING_UP_SUCCESS, SING_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOW_REQUEST, LOAD_FOLLOW_SUCCESS, LOAD_FOLLOW_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, signUpAction, signUpSuccess, loginRequestAction, logoutRequestAction, signUpRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SING_UP_REQUEST", function() { return SING_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SING_UP_SUCCESS", function() { return SING_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SING_UP_FAILURE", function() { return SING_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_REQUEST", function() { return LOAD_FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_SUCCESS", function() { return LOAD_FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_FAILURE", function() { return LOAD_FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_REQUEST", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_SUCCESS", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_FAILURE", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_REQUEST", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_SUCCESS", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_FAILURE", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpAction", function() { return signUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequestAction", function() { return signUpRequestAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLogginsOut: false,
  loginErrorReason: '',
  //로긴 실패 사유
  isSigningUp: false,
  //회원가입시도중
  singedUp: false,
  //회원가입 성공
  signUperrorReason: '',
  //회원가입 실패 사유
  myInfo: null,
  //내정보
  followingList: [],
  followerList: [],
  userInfo: null //남의 정보
  //signUpData:{}, 이거왜빠짐?..

};
const SING_UP_REQUEST = 'SING_UP_REQUEST';
const SING_UP_SUCCESS = 'SING_UP_SUCCESS';
const SING_UP_FAILURE = 'SING_UP_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; //유저정보 불러오는액션

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; //팔로우 불러오기

const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE'; //팔로우하기

const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'; //언팔로우하기

const UNFOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
const UNFOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
const UNFOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'; // 팔로우하는사람 제거

const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // 머야

const signUpAction = data => ({
  type: SING_UP_SUCCESS,
  data
});
const signUpSuccess = {
  type: SING_UP_SUCCESS
};
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = {
  type: LOG_OUT_REQUEST
};
const signUpRequestAction = data => {
  return {
    type: SING_UP_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          logInErrorReason: ''
        });
      }

    case LOG_IN_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myInfo: action.data
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myInfo: null,
          loginErrorReason: action.error
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: true
        });
      }

    case LOG_OUT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: false,
          myInfo: null
        });
      }

    case LOAD_USER_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_USER_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          myInfo: action.data
        });
      }

    case LOAD_USER_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case SING_UP_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSigningUp: true,
          isSignUp: false,
          signUperrorReason: ''
        });
      }

    case SING_UP_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSigningUp: false,
          isSignUp: true
        });
      }

    case SING_UP_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSigningUp: false,
          signUperrorReason: action.error
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnblVwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJ1c2VJbnB1dCIsImluaXRWYWx1ZSIsInZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiU2lnblVwIiwiY2xhc3NlcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc1NpZ25pbmdVcCIsImlzU2lnblVwIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpZCIsIm9uQ2hhbmdlSWQiLCJuaWNrTmFtZSIsIm9uQ2hhbmdlTmlja05hbWUiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJzZXRQYXNzd29yZENvbmZpcm0iLCJnZW5kZXIiLCJvbkNoYW5nZUdlbmRlciIsImJpcnRoIiwib25DaGFuZ2VCaXJ0aCIsInRlcm0iLCJzZXRUZXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIlJvdXRlciIsInB1c2giLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJTSU5HX1VQX1JFUVVFU1QiLCJkYXRhIiwidXNlcklkIiwibmlja25hbWUiLCJvbkNoYW5nZVBhc3N3b3JkQ29uZmlybSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJ0ZXh0RmllbGQiLCJzaHJpbmsiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbnNPdXQiLCJsb2dpbkVycm9yUmVhc29uIiwic2luZ2VkVXAiLCJzaWduVXBlcnJvclJlYXNvbiIsIm15SW5mbyIsImZvbGxvd2luZ0xpc3QiLCJmb2xsb3dlckxpc3QiLCJ1c2VySW5mbyIsIlNJTkdfVVBfU1VDQ0VTUyIsIlNJTkdfVVBfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkxPQURfRk9MTE9XX1JFUVVFU1QiLCJMT0FEX0ZPTExPV19TVUNDRVNTIiwiTE9BRF9GT0xMT1dfRkFJTFVSRSIsIkZPTExPV19VU0VSX1JFUVVFU1QiLCJGT0xMT1dfVVNFUl9TVUNDRVNTIiwiRk9MTE9XX1VTRVJfRkFJTFVSRSIsIlVORk9MTE9XX1VTRVJfUkVRVUVTVCIsIlVORk9MTE9XX1VTRVJfU1VDQ0VTUyIsIlVORk9MTE9XX1VTRVJfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwic2lnblVwQWN0aW9uIiwic2lnblVwU3VjY2VzcyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWduVXBSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiIsImxvZ0luRXJyb3JSZWFzb24iLCJlcnJvciIsImlzTG9nZ2luZ091dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQzlDQyxPQUFLLEVBQUU7QUFDTEMsYUFBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FB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OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL3NpZ25VcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2lnblVwLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0ICx7IHVzZVN0YXRlICx1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAgXHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDc3NCYXNlbGluZSxUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LCBHcmlkIH1mcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgQ2lyY3VsYXJQcm9ncmVzcywgQ29udGFpbmVyLCBSYWRpb0dyb3VwLCBSYWRpbyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2ggLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgXHJcbmltcG9ydCB7IFNJTkdfVVBfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PntcclxuICBjb25zdFsgdmFsdWUsIHNldHRlcl0gPSB1c2VTdGF0ZShpbml0VmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7IFxyXG4gIH0sW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuIFxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGlzU2lnbmluZ1VwLCBpc1NpZ25VcCB9ID0gdXNlU2VsZWN0b3IoIHN0YXRlPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW25pY2tOYW1lLCBvbkNoYW5nZU5pY2tOYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZENvbmZpcm0sIHNldFBhc3N3b3JkQ29uZmlybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2dlbmRlciwgb25DaGFuZ2VHZW5kZXJdID0gdXNlSW5wdXQoJ21hbGUnKTtcclxuICBjb25zdCBbYmlydGgsIG9uQ2hhbmdlQmlydGhdID0gdXNlSW5wdXQoJycpOyBcclxuICAgXHJcbiAgY29uc3RbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gIGNvbnN0W3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3IgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvciBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGlzU2lnblVwICYmIGlzU2lnblVwICl7XHJcbiAgICAgIGFsZXJ0KCftmozsm5DqsIDsnoXshLHqs7UuIOuhnOq3uOyduCDtjpjsnbTsp4DroZwg7J2064+Z7ZWp64uI64ukJyk7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9LFtpc1NpZ25VcCA9PT0gdHJ1ZV0pXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYoIHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0gKXtcclxuICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0ZXJtKXtcclxuICAgICAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coeyBpZCwgbmlja05hbWUsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0sIGdlbmRlciwgYmlydGgsIHRlcm19KVxyXG5cclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6U0lOR19VUF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6e3VzZXJJZDogaWQsIG5pY2tuYW1lOiBuaWNrTmFtZSwgcGFzc3dvcmQsIGdlbmRlciwgYmlydGh9IFxyXG4gICAgICB9KTtcclxuXHJcbiAgfSxbaWQsbmlja05hbWUsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0sIHRlcm0sIGdlbmRlcl0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ29uZmlybSA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCApXHJcbiAgICAgIHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSxbcGFzc3dvcmRdKTsgXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCApOyBcclxuICB9LFtdKTsgXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPExvY2tPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJ1c2VyLWlkXCIgaWQ9XCJ1c2VyLWlkXCIgbGFiZWw9XCLslYTsnbTrlJRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHJlcXVpcmVkIGZ1bGxXaWR0aCBhdXRvRm9jdXMgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbmFtZT1cIm5pY2tOYW1lXCIgaWQ9XCJuaWNrTmFtZVwiIGxhYmVsPVwi64uJ64Sk7J6EXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrTmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja05hbWV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCBmdWxsV2lkdGggYXV0b0ZvY3VzIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwiYmlydGhcIiB0eXBlPVwiZGF0ZVwiIGxhYmVsPVwi7IOd7J28XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtiaXJ0aH0gb25DaGFuZ2U9e29uQ2hhbmdlQmlydGh9IFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgZnVsbFdpZHRoIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbGFiZWw9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHJlcXVpcmVkIGZ1bGxXaWR0aCBhdXRvRm9jdXMgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwicGFzc3dvcmRDb25maXJtXCIgaWQ9XCJwYXNzd29yZENvbmZpcm1cIiBsYWJlbD1cIuu5hOuwgOuyiO2YuO2ZleyduFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDb25maXJtfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENvbmZpcm19IFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgZnVsbFdpZHRoIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFncmVlXCI+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6Q8L2Rpdj4gIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPXtnZW5kZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZUdlbmRlcn0gPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtYWxlXCIgY29udHJvbD17PFJhZGlvIC8+fSAgIGxhYmVsPVwi64KoXCIgLz4gXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImZlbWFsZVwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCLsl6xcIiAvPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggdmFsdWU9XCJhbGxvd0V4dHJhRW1haWxzXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0gIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLqsJzsnbjsoJXrs7TsspjrpqzrsKnsuajsl5Ag64+Z7J2Y7ZWp64uI64ukLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7dGVybUVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVcIj7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpDwvZGl2Pn1cclxuICAgICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOqwgOyehe2VmOq4sCB7aXNTaWduaW5nVXAgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsIiBcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPXtcclxuICAgXHJcbiAgICBpc0xvZ2dpbnNPdXQgOiBmYWxzZSxcclxuICAgICBcclxuICAgIGxvZ2luRXJyb3JSZWFzb246JycsIC8v66Gc6ri0IOyLpO2MqCDsgqzsnKBcclxuXHJcbiAgICBpc1NpZ25pbmdVcDogZmFsc2UsIC8v7ZqM7JuQ6rCA7J6F7Iuc64+E7KSRXHJcbiAgICBzaW5nZWRVcDogZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyEseqztVxyXG4gICAgc2lnblVwZXJyb3JSZWFzb246JycsIC8v7ZqM7JuQ6rCA7J6FIOyLpO2MqCDsgqzsnKBcclxuXHJcbiAgICBteUluZm8gOiBudWxsLCAvL+uCtOygleuztFxyXG4gICAgZm9sbG93aW5nTGlzdDpbXSxcclxuICAgIGZvbGxvd2VyTGlzdDpbXSxcclxuXHJcbiAgICB1c2VySW5mbzogbnVsbCwgLy/rgqjsnZgg7KCV67O0XHJcbiAgICBcclxuICAgIC8vc2lnblVwRGF0YTp7fSwg7J206rGw7Jmc67mg7KeQPy4uXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0lOR19VUF9SRVFVRVNUID0gJ1NJTkdfVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSU5HX1VQX1NVQ0NFU1MgPSAnU0lOR19VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJTkdfVVBfRkFJTFVSRSA9ICdTSU5HX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG4vL+ycoOyggOygleuztCDrtojrn6zsmKTripTslaHshZhcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuIFxyXG4vL+2MlOuhnOyasCDrtojrn6zsmKTquLBcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG4vL+2MlOuhnOyasO2VmOq4sFxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfUkVRVUVTVCA9ICdGT0xMT1dfVVNFUl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9TVUNDRVNTID0gJ0ZPTExPV19VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfRkFJTFVSRSA9ICdGT0xMT1dfVVNFUl9GQUlMVVJFJztcclxuXHJcbi8v7Ja47YyU66Gc7Jqw7ZWY6riwXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX1JFUVVFU1QgPSAnRk9MTE9XX1VTRVJfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9TVUNDRVNTID0gJ0ZPTExPV19VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9GQUlMVVJFID0gJ0ZPTExPV19VU0VSX0ZBSUxVUkUnO1xyXG5cclxuLy8g7YyU66Gc7Jqw7ZWY64qU7IKs656MIOygnOqxsFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7IC8vIOuouOyVvFxyXG4gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSAoZGF0YSk9PiAoe1xyXG4gICAgdHlwZTpTSU5HX1VQX1NVQ0NFU1MsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSB7XHJcbiAgICB0eXBlOlNJTkdfVVBfU1VDQ0VTUyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9Pih7IFxyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLCBcclxufSlcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPXtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogU0lOR19VUF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn0gIFxyXG5cclxuY29uc3QgcmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yUmVhc29uOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG15SW5mbzogYWN0aW9uLmRhdGEsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG15SW5mbzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvZ2luRXJyb3JSZWFzb246IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDp0cnVlLCAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbXlJbmZvOm51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOnsgXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcclxuICAgICAgICAgICAgICAgIG15SW5mbzphY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgU0lOR19VUF9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25VcDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcGVycm9yUmVhc29uOicnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lOR19VUF9TVUNDRVNTOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNTaWduVXA6dHJ1ZSwgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSU5HX1VQX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBlcnJvclJlYXNvbjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==