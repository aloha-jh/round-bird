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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_signUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/signUp */ "./pages/signUp.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\ljh\\Desktop\\all\\DigitalGallery\\front\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 //import { useStyles } from '../pages/signUp';





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

const Login = () => {
  const classes = useStyles();
  const [id, onChangeId] = Object(_pages_signUp__WEBPACK_IMPORTED_MODULE_7__["useInput"])();
  const [password, onChangePassword] = Object(_pages_signUp__WEBPACK_IMPORTED_MODULE_7__["useInput"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const {
    isLoggingIn,
    myInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (myInfo && myInfo.id) {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
    }
  }, [myInfo && myInfo.id]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault(); //console.log({ id, password })

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_IN_REQUEST"],
      data: {
        userId: id,
        password
      }
    });
  }, [id, password]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "main",
    maxWidth: "xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "h1",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    onSubmit: onSubmit,
    className: classes.form,
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "\uD655\uC778 ", isLoggingIn && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 44
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

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

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnblVwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJMb2dpbiIsImNsYXNzZXMiLCJpZCIsIm9uQ2hhbmdlSWQiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc0xvZ2dpbmdJbiIsIm15SW5mbyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJkYXRhIiwidXNlcklkIiwiaW5pdFZhbHVlIiwidmFsdWUiLCJzZXR0ZXIiLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJ0YXJnZXQiLCJTaWduVXAiLCJpc1NpZ25pbmdVcCIsImlzU2lnblVwIiwibmlja05hbWUiLCJvbkNoYW5nZU5pY2tOYW1lIiwicGFzc3dvcmRDb25maXJtIiwic2V0UGFzc3dvcmRDb25maXJtIiwiZ2VuZGVyIiwib25DaGFuZ2VHZW5kZXIiLCJiaXJ0aCIsIm9uQ2hhbmdlQmlydGgiLCJ0ZXJtIiwic2V0VGVybSIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiU0lOR19VUF9SRVFVRVNUIiwibmlja25hbWUiLCJvbkNoYW5nZVBhc3N3b3JkQ29uZmlybSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJ0ZXh0RmllbGQiLCJzaHJpbmsiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbnNPdXQiLCJsb2dpbkVycm9yUmVhc29uIiwic2luZ2VkVXAiLCJzaWduVXBlcnJvclJlYXNvbiIsImZvbGxvd2luZ0xpc3QiLCJmb2xsb3dlckxpc3QiLCJ1c2VySW5mbyIsIlNJTkdfVVBfU1VDQ0VTUyIsIlNJTkdfVVBfRkFJTFVSRSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV19SRVFVRVNUIiwiTE9BRF9GT0xMT1dfU1VDQ0VTUyIsIkxPQURfRk9MTE9XX0ZBSUxVUkUiLCJGT0xMT1dfVVNFUl9SRVFVRVNUIiwiRk9MTE9XX1VTRVJfU1VDQ0VTUyIsIkZPTExPV19VU0VSX0ZBSUxVUkUiLCJVTkZPTExPV19VU0VSX1JFUVVFU1QiLCJVTkZPTExPV19VU0VSX1NVQ0NFU1MiLCJVTkZPTExPV19VU0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInNpZ25VcEFjdGlvbiIsInNpZ25VcFN1Y2Nlc3MiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic2lnblVwUmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJhY3Rpb24iLCJsb2dJbkVycm9yUmVhc29uIiwiZXJyb3IiLCJpc0xvZ2dpbmdPdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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bEI7QUFJSDs7QUFDRCxTQUFLaUQsaUJBQUw7QUFBdUI7QUFDbkIsaUNBQ081RCxLQURQO0FBR0g7O0FBS0QsU0FBS3VDLGVBQUw7QUFBcUI7QUFDakIsK0NBQ092QyxLQURQO0FBRUlvQixxQkFBVyxFQUFFLElBRmpCO0FBR0lDLGtCQUFRLEVBQUMsS0FIYjtBQUlJNkIsMkJBQWlCLEVBQUM7QUFKdEI7QUFNSDs7QUFDRCxTQUFLSSxlQUFMO0FBQXFCO0FBQ2pCLCtDQUNPdEQsS0FEUDtBQUVJb0IscUJBQVcsRUFBRSxLQUZqQjtBQUdJQyxrQkFBUSxFQUFDO0FBSGI7QUFLSDs7QUFDRCxTQUFLa0MsZUFBTDtBQUFxQjtBQUNqQiwrQ0FDT3ZELEtBRFA7QUFFSW9CLHFCQUFXLEVBQUUsS0FGakI7QUFHSThCLDJCQUFpQixFQUFFaUMsTUFBTSxDQUFDRTtBQUg5QjtBQUtIOztBQUNEO0FBQVE7QUFDSixpQ0FDT3JGLEtBRFA7QUFHSDtBQXBGTDtBQXNGSCxDQXZGRDs7QUF5RmVrRixzRUFBZixFOzs7Ozs7Ozs7OztBQ2hMQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGUgLHVzZUNhbGxiYWNrICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAgXHJcbmltcG9ydCB7IEF2YXRhciAsIEJ1dHRvbiwgQ3NzQmFzZWxpbmUsIFRleHRGaWVsZCB9ZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG4gIFxyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJzsgXHJcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJzsgIFxyXG5pbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gJy4uL3BhZ2VzL3NpZ25VcCc7XHJcbi8vaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi4vcGFnZXMvc2lnblVwJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgZm9ybToge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICBzdWJtaXQ6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+e1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBpc0xvZ2dpbmdJbiAsIG15SW5mbyB9ID0gdXNlU2VsZWN0b3IoIHN0YXRlPT4gc3RhdGUudXNlciApO1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihteUluZm8gJiYgbXlJbmZvLmlkKXtcclxuICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuICB9LFtteUluZm8gJiYgbXlJbmZvLmlkXSlcclxuXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh7IGlkLCBwYXNzd29yZCB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7IHVzZXJJZDppZCxwYXNzd29yZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFsgaWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwidXNlci1pZFwiIGlkPVwidXNlci1pZFwiIGxhYmVsPVwi7JWE7J2065SUXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCBmdWxsV2lkdGggYXV0b0ZvY3VzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbGFiZWw9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgZnVsbFdpZHRoIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7ZmV7J24IHtpc0xvZ2dpbmdJbiAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJpbXBvcnQgUmVhY3QgLHsgdXNlU3RhdGUgLHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7ICBcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENzc0Jhc2VsaW5lLFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsIEdyaWQgfWZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBDaXJjdWxhclByb2dyZXNzLCBDb250YWluZXIsIFJhZGlvR3JvdXAsIFJhZGlvIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IHt1c2VEaXNwYXRjaCAsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnOyBcclxuaW1wb3J0IHsgU0lOR19VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRWYWx1ZSA9IG51bGwpID0+e1xyXG4gIGNvbnN0WyB2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgc2V0dGVyKGUudGFyZ2V0LnZhbHVlKTsgXHJcbiAgfSxbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgaXNTaWduaW5nVXAsIGlzU2lnblVwIH0gPSB1c2VTZWxlY3Rvciggc3RhdGU9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmlja05hbWUsIG9uQ2hhbmdlTmlja05hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ29uZmlybSwgc2V0UGFzc3dvcmRDb25maXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZ2VuZGVyLCBvbkNoYW5nZUdlbmRlcl0gPSB1c2VJbnB1dCgnbWFsZScpO1xyXG4gIGNvbnN0IFtiaXJ0aCwgb25DaGFuZ2VCaXJ0aF0gPSB1c2VJbnB1dCgnJyk7IFxyXG4gICBcclxuICBjb25zdFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcbiAgY29uc3RbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvciBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0W3Rlcm1FcnJvciwgc2V0VGVybUVycm9yIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoaXNTaWduVXAgJiYgaXNTaWduVXAgKXtcclxuICAgICAgYWxlcnQoJ+2ajOybkOqwgOyeheyEseqztS4g66Gc6re47J24IO2OmOydtOyngOuhnCDsnbTrj5ntlanri4jri6QnKTtcclxuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH0sW2lzU2lnblVwID09PSB0cnVlXSlcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiggcGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSApe1xyXG4gICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRlcm0pe1xyXG4gICAgICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGlkLCBuaWNrTmFtZSwgcGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSwgZ2VuZGVyLCBiaXJ0aCwgdGVybX0pXHJcblxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTpTSU5HX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTp7dXNlcklkOiBpZCwgbmlja25hbWU6IG5pY2tOYW1lLCBwYXNzd29yZCwgZ2VuZGVyLCBiaXJ0aH0gXHJcbiAgICAgIH0pO1xyXG5cclxuICB9LFtpZCxuaWNrTmFtZSwgcGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSwgdGVybSwgZ2VuZGVyXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDb25maXJtID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkIClcclxuICAgICAgc2V0UGFzc3dvcmRDb25maXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LFtwYXNzd29yZF0pOyBcclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkICk7IFxyXG4gIH0sW10pOyBcclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbmFtZT1cInVzZXItaWRcIiBpZD1cInVzZXItaWRcIiBsYWJlbD1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgZnVsbFdpZHRoIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwibmlja05hbWVcIiBpZD1cIm5pY2tOYW1lXCIgbGFiZWw9XCLri4nrhKTsnoRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25pY2tOYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VOaWNrTmFtZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHJlcXVpcmVkIGZ1bGxXaWR0aCBhdXRvRm9jdXMgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJiaXJ0aFwiIHR5cGU9XCJkYXRlXCIgbGFiZWw9XCLsg53snbxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JpcnRofSBvbkNoYW5nZT17b25DaGFuZ2VCaXJ0aH0gXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCBmdWxsV2lkdGggYXV0b0ZvY3VzIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBsYWJlbD1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgcmVxdWlyZWQgZnVsbFdpZHRoIGF1dG9Gb2N1cyBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIiBpZD1cInBhc3N3b3JkQ29uZmlybVwiIGxhYmVsPVwi67mE67CA67KI7Zi47ZmV7J24XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENvbmZpcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ29uZmlybX0gXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiByZXF1aXJlZCBmdWxsV2lkdGggYXV0b0ZvY3VzIFxyXG4gICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVcIj7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpDwvZGl2PiAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9e2dlbmRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlR2VuZGVyfSA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59ICAgbGFiZWw9XCLrgqhcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiZmVtYWxlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIuyXrFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cImFsbG93RXh0cmFFbWFpbHNcIiBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfSAgY29sb3I9XCJwcmltYXJ5XCIgLz59XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuqwnOyduOygleuztOyymOumrOuwqey5qOyXkCDrj5nsnZjtlanri4jri6QuXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZVwiPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukPC9kaXY+fVxyXG4gICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg6rCA7J6F7ZWY6riwIHtpc1NpZ25pbmdVcCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiIFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG4gICBcclxuICAgIGlzTG9nZ2luc091dCA6IGZhbHNlLFxyXG4gICAgIFxyXG4gICAgbG9naW5FcnJvclJlYXNvbjonJywgLy/roZzquLQg7Iuk7YyoIOyCrOycoFxyXG5cclxuICAgIGlzU2lnbmluZ1VwOiBmYWxzZSwgLy/tmozsm5DqsIDsnoXsi5zrj4TspJFcclxuICAgIHNpbmdlZFVwOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7ISx6rO1XHJcbiAgICBzaWduVXBlcnJvclJlYXNvbjonJywgLy/tmozsm5DqsIDsnoUg7Iuk7YyoIOyCrOycoFxyXG5cclxuICAgIG15SW5mbyA6IG51bGwsIC8v64K07KCV67O0XHJcbiAgICBmb2xsb3dpbmdMaXN0OltdLFxyXG4gICAgZm9sbG93ZXJMaXN0OltdLFxyXG5cclxuICAgIHVzZXJJbmZvOiBudWxsLCAvL+uCqOydmCDsoJXrs7RcclxuICAgIFxyXG4gICAgLy9zaWduVXBEYXRhOnt9LCDsnbTqsbDsmZzruaDsp5A/Li5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSU5HX1VQX1JFUVVFU1QgPSAnU0lOR19VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJTkdfVVBfU1VDQ0VTUyA9ICdTSU5HX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lOR19VUF9GQUlMVVJFID0gJ1NJTkdfVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbi8v7Jyg7KCA7KCV67O0IOu2iOufrOyYpOuKlOyVoeyFmFxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG4gXHJcbi8v7YyU66Gc7JqwIOu2iOufrOyYpOq4sFxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV19SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV19TVUNDRVNTID0gJ0xPQURfRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV19GQUlMVVJFJztcclxuXHJcbi8v7YyU66Gc7Jqw7ZWY6riwXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9SRVFVRVNUID0gJ0ZPTExPV19VU0VSX1JFUVVFU1QnOyBcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX1NVQ0NFU1MgPSAnRk9MTE9XX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9GQUlMVVJFID0gJ0ZPTExPV19VU0VSX0ZBSUxVUkUnO1xyXG5cclxuLy/slrjtjJTroZzsmrDtlZjquLBcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfUkVRVUVTVCA9ICdGT0xMT1dfVVNFUl9SRVFVRVNUJzsgXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX1NVQ0NFU1MgPSAnRk9MTE9XX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX0ZBSUxVUkUgPSAnRk9MTE9XX1VTRVJfRkFJTFVSRSc7XHJcblxyXG4vLyDtjJTroZzsmrDtlZjripTsgqzrnowg7KCc6rGwXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7IFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJzsgLy8g66i47JW8XHJcbiBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcEFjdGlvbiA9IChkYXRhKT0+ICh7XHJcbiAgICB0eXBlOlNJTkdfVVBfU1VDQ0VTUyxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwU3VjY2VzcyA9IHtcclxuICAgIHR5cGU6U0lOR19VUF9TVUNDRVNTLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+KHsgXHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsIFxyXG59KVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9e1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBTSU5HX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufSAgXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICk9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3JSZWFzb246ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbXlJbmZvOiBhY3Rpb24uZGF0YSwgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbXlJbmZvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9naW5FcnJvclJlYXNvbjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nT3V0OnRydWUsICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBteUluZm86bnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6eyBcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgICAgICAgICAgbXlJbmZvOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBTSU5HX1VQX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU2lnblVwOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwZXJyb3JSZWFzb246JycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSU5HX1VQX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25VcDp0cnVlLCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJTkdfVVBfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcclxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ1VwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcGVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==