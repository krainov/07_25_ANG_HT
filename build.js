/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	let welcome = __webpack_require__(1);

	welcome("home");

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function(message) {
	    let app = angular.module('myApp', []);

	    let mails = [{
	        date: '21.07.2016 09:00',
	        from: "ivanov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 1',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	    }, {
	        date: '21.07.2016 10:00',
	        from: "petrov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 2',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	    }, {
	        date: '21.07.2016 11:00',
	        from: "sidorov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 3',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',

	    }, {
	        date: '21.07.2016 12:00',
	        from: "petrov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 4',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	    }, {
	        date: '21.07.2016 13:00',
	        from: "sidorov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 5',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	    }, {
	        date: '21.07.2016 14:00',
	        from: "petrov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 6',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	    }, {
	        date: '20.07.2016 15:00',
	        from: "sidorov@mail.ru",
	        to: 'me@mail.ru',
	        subject: 'subject 7',
	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',

	    }];

	    app
	        .component('mailbox', {
	            templateUrl: 'mailbox.html',
	            controller: function() {
	                this.mails = mails;
	            }
	        });
	};

/***/ }
/******/ ]);