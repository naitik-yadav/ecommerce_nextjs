"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// fake login\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const request = req.body;\n    const email = request.email;\n    const password = request.password;\n    // if(email === 'johndoe@mail.com' && password === 'ecommerce') {\n    if (email === \"ntkydv16@gmail.com\" && password === \"naitik001\") {\n        res.status(200).json({\n            status: true\n        });\n    } else {\n        res.status(401).json({\n            status: false\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLGFBQWE7QUFDYixpRUFBZSxDQUFDQSxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQzVELE1BQU1DLE9BQU8sR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ3hCLE1BQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRSxLQUFLO0lBQzNCLE1BQU1DLFFBQVEsR0FBR0gsT0FBTyxDQUFDRyxRQUFRO0lBRWpDLGlFQUFpRTtJQUNuRSxJQUFHRCxLQUFLLEtBQUssb0JBQW9CLElBQUlDLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDM0RKLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUQsTUFBTSxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7SUFDekMsT0FBTztRQUNMTCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVELE1BQU0sRUFBRSxLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9wYWdlcy9hcGkvbG9naW4udHM/YzEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuLy8gZmFrZSBsb2dpblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSByZXEuYm9keTtcbiAgY29uc3QgZW1haWwgPSByZXF1ZXN0LmVtYWlsO1xuICBjb25zdCBwYXNzd29yZCA9IHJlcXVlc3QucGFzc3dvcmQ7XG5cbiAgLy8gaWYoZW1haWwgPT09ICdqb2huZG9lQG1haWwuY29tJyAmJiBwYXNzd29yZCA9PT0gJ2Vjb21tZXJjZScpIHtcbmlmKGVtYWlsID09PSAnbnRreWR2MTZAZ21haWwuY29tJyAmJiBwYXNzd29yZCA9PT0gJ25haXRpazAwMScpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IHN0YXR1czogZmFsc2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJyZXF1ZXN0IiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();