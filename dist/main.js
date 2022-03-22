/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const toDo = [\r\n    {\r\n        description: 'Arrange room',\r\n        completed: false,\r\n        index: 1,\r\n    },\r\n    {\r\n        description: 'Read a book',\r\n        completed: false,\r\n        index: 2,\r\n    },\r\n    {\r\n        description: 'Study javascript',\r\n        completed: false,\r\n        index: 3,\r\n    },\r\n    {\r\n        description: 'Work on personal project',\r\n        completed: false,\r\n        index: 4,\r\n    },\r\n    {\r\n        description: 'Talk to friends',\r\n        completed: false,\r\n        index: 5,\r\n    }\r\n]\r\n\r\nconst listHolder = document.querySelector('.holder')\r\n\r\ntoDo.map((item) => {\r\n    let li = document.createElement('li')\r\n    li.classList.add('to-do-item')\r\n    li.innerHTML = `${(item.completed) ? '<i class=\"fa-solid fa-square-check\"></i>' : '<i class=\"fa-solid fa-square\"></i>'\r\n        } <p>${item.description}</p>`\r\n    listHolder.appendChild(li);\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;