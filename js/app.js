/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '.js/templates/greeting.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//recordar de eliminar comentaris innecesaris, fer copia cuan es envie!!!
//console.log('Hola mon')
//chibatar lo que fa aquesta cosa!
//document lo que fa es carregar el document html per a modificarlo en js?
//console.log(document);
//console.log(document.body);
//carrega la pagina i inserta la linea!
//aixo es obsolet sin embargo.
///document.body.innerHTML ='<h1> Heyyy!!! </h1>'
//// Aixo carrega lo H1 i lo reemplaca!
// lo que se te que fer es two way. Aquest metode es obsolet perque requereix que el programa carregue
//el resultat a la vista. El two way, segons he entes, es que el javascript carregue el codi automaticament
// a la vista mentre el usuari lo usa. No se.
var name = 'Ayr'; //claudators!! no parenteisis
//const template = `<h1>${name}!</h1>`
//importem aixo desde altre fitxer.
//es separen les plantilles.
//control shift 7 per a comentar normal. A per a comentar en bloc
//cntr + e per a buscar archius i fitxers al code.
//per a indicar moduls propis cal fer / per a tot el path, o . per a relatius.

 //console.log(greeting);

document.body.innerHTML = !(function webpackMissingModule() { var e = new Error("Cannot find module '.js/templates/greeting.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()); //gestor de depencencies! sino cal importarles tot al document...
//npm es un gestor. tambe esta yarn.
//si es vol usar bable, can instalar una dependencia..-
//nodemodules (js) no es toca mai sense saber lo que es fa! vendor per a php.
// son les dependencies!
// sol si peta el programa de altre, si lo teu el peta.
// pero es pot borrar. sempre que es pugi fer el npm per instalarlo altra vegada.
//php es composer!
//pacaje-loc tambe lo mateix.
//manifest definira el nom i dependencies del projecte.
// se han de definir presets al babel.
//cal instalar webpack!
//import i export

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alumne/Code/apenalver/practitioner2/src/app.js */"./src/app.js");


/***/ })

/******/ });