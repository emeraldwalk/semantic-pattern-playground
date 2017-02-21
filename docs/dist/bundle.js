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

	"use strict";
	var angular = __webpack_require__(6);
	var app_module_1 = __webpack_require__(7);
	angular.element(function () {
	    angular.bootstrap(document.body, [app_module_1.appModule.name]);
	});


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(8);
	var angular = __webpack_require__(6);
	var app_component_1 = __webpack_require__(15);
	var app_component_tpl_1 = __webpack_require__(17);
	var pattern_component_1 = __webpack_require__(18);
	var pattern_detail_component_1 = __webpack_require__(19);
	var pattern_detail_component_tpl_1 = __webpack_require__(20);
	var tabset_component_1 = __webpack_require__(21);
	var tabset_component_tpl_1 = __webpack_require__(22);
	var app_routes_1 = __webpack_require__(23);
	exports.appModule = angular.module('patternSandbox', ['ngSanitize', 'ui.router']);
	/**
	 * Primary app component.
	 */
	exports.appModule.component('spsApp', {
	    template: app_component_tpl_1.templateProvider,
	    controller: app_component_1.AppComponent
	});
	exports.appModule.component('spsPatternDetail', {
	    template: pattern_detail_component_tpl_1.templateProvider,
	    controller: pattern_detail_component_1.PatternDetailComponent
	});
	exports.appModule.component('spsTabset', {
	    template: tabset_component_tpl_1.templateProvider,
	    bindings: {
	        tabs: '<'
	    },
	    controller: tabset_component_1.TabsetComponent
	});
	/**
	 * Pattern components.
	 */
	for (var key in pattern_component_1.patternComponentMap) {
	    exports.appModule.component(key, pattern_component_1.patternComponentMap[key]);
	}
	/**
	 * Routing
	 */
	exports.appModule.config([
	    '$stateProvider',
	    function ($stateProvider) {
	        app_routes_1.states.forEach(function (state) { return $stateProvider.state(state); });
	    }
	]);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(9);
	__webpack_require__(13);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "html {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #333;\n  background-color: #ccc;\n}\nhtml,\nbody {\n  height: 100%;\n}\nul,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.sps-app {\n  display: block;\n  position: relative;\n  min-height: 100%;\n  padding-bottom: 56px;\n}\n.sps-masthead {\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 10px;\n  color: #fff;\n  background-color: #333;\n}\n.sps-masthead__title {\n  font-size: 2em;\n}\n.sps-navbar {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 10px;\n  background-color: #fff;\n  border-bottom: 1px solid #333;\n}\n.sps-navbar__category {\n  position: relative;\n  display: inline-block;\n  margin-left: 20px;\n  cursor: pointer;\n}\n.sps-navbar__category:first-of-type {\n  margin-left: 0;\n}\n.sps-navbar__category-dropdown {\n  padding-top: 10px;\n  position: absolute;\n  visibility: hidden;\n}\n.sps-navbar__category:hover .sps-navbar__category-dropdown {\n  visibility: visible;\n}\n.sps-navbar__nav-link {\n  display: block;\n  color: #fff;\n  background-color: #333;\n  text-decoration: none;\n  padding: 5px 26px 5px 10px;\n  white-space: nowrap;\n}\n.sps-navbar__nav-link:before {\n  display: inline-block;\n  width: 16px;\n  content: '';\n}\n.sps-navbar__nav-link--active:before {\n  content: '\\2022';\n}\n.sps-navbar__nav-link:hover {\n  color: #fff;\n  background-color: #aaa;\n}\n.sps-main {\n  display: block;\n  padding: 10px;\n}\n.sps-main__header-primary {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.sps-footer {\n  display: block;\n  font-size: 16px;\n  position: absolute;\n  height: 16px;\n  bottom: 0;\n  left: 0;\n  width: calc(100% - 20px);\n  margin-top: 1em;\n  padding: 20px 10px;\n  color: #fff;\n  background-color: #333;\n}\n.sps-pattern-detail {\n  display: block;\n}\n.sps-pattern-detail__header-code {\n  color: #aaa;\n  font-size: 1em;\n  margin-bottom: .3em;\n}\n.sps-pattern-detail__pattern {\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\n.sps-pattern-detail__source {\n  margin-top: 10px;\n}\n.sps-tabset {\n  display: block;\n}\n.sps-tabset__tab {\n  display: inline-block;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  color: #aaa;\n  font-size: 1em;\n  padding: 10px;\n  cursor: pointer;\n}\n.sps-tabset__tab--active {\n  color: #333;\n  background: #fff;\n}\n.sps-tabset__tab-content {\n  height: 250px;\n  max-height: 250px;\n  overflow-y: auto;\n  padding: 10px;\n  color: #fff;\n  background-color: #333;\n  border: 1px solid #ccc;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./patterns.manifest.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./patterns.manifest.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\nh1 {\n  display: block;\n  font-size: 2em;\n  margin-top: 0.67em;\n  margin-bottom: 0.67em;\n  margin-left: 0;\n  margin-right: 0;\n  font-weight: bold;\n}\nh2 {\n  display: block;\n  font-size: 1.5em;\n  margin-top: 0.83em;\n  margin-bottom: 0.83em;\n  margin-left: 0;\n  margin-right: 0;\n  font-weight: bold;\n}\nh3 {\n  display: block;\n  font-size: 1.17em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  font-weight: bold;\n}\nh4 {\n  display: block;\n  margin-top: 1.33em;\n  margin-bottom: 1.33em;\n  margin-left: 0;\n  margin-right: 0;\n  font-weight: bold;\n}\nh5 {\n  display: block;\n  font-size: .83em;\n  margin-top: 1.67em;\n  margin-bottom: 1.67em;\n  margin-left: 0;\n  margin-right: 0;\n  font-weight: bold;\n}\nh6 {\n  display: block;\n  font-size: .67em;\n  margin-top: 2.33em;\n  margin-bottom: 2.33em;\n  margin-left: 0;\n  margin-right: 0;\n  font-weight: bold;\n}\n.c-person-editor {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var patterns_manifest_1 = __webpack_require__(16);
	/**
	 * Primary app component
	 */
	var AppComponent = (function () {
	    function AppComponent(_$stateParams, _$element) {
	        this._$stateParams = _$stateParams;
	        this._$element = _$element;
	    }
	    AppComponent.prototype.$onInit = function () {
	        this.patterns = patterns_manifest_1.patternManifest.tree.children;
	    };
	    Object.defineProperty(AppComponent.prototype, "currentPatternId", {
	        get: function () {
	            return this._$stateParams['id'];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AppComponent.prototype.patternIds = function (patterns) {
	        // unique patternIds
	        var names = patterns
	            .map(function (pattern) { return pattern.name.replace(/\.[^\.]+$/, ''); })
	            .filter(function (name, i, array) { return i === array.indexOf(name); });
	        return names;
	    };
	    AppComponent.prototype.displayName = function (machineName) {
	        if (machineName) {
	            return machineName
	                .replace(/^\d+_/, '') // leading digits + underscore
	                .replace(/(^|-)(.)/g, function (match, dash, char) { return "" + (dash && ' ') + char.toUpperCase(); });
	        }
	    };
	    return AppComponent;
	}());
	AppComponent.$inject = ['$stateParams', '$element'];
	exports.AppComponent = AppComponent;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.patternManifest = {
	    "map": {
	        "patterns/0_elements/01_reset": {
	            "name": "01_reset",
	            "less": true
	        },
	        "patterns/0_elements/02_fonts": {
	            "name": "02_fonts",
	            "less": true
	        },
	        "patterns/0_elements/headers": {
	            "name": "headers",
	            "html": true,
	            "less": true
	        },
	        "patterns/1_components/person-editor": {
	            "name": "person-editor",
	            "html": true,
	            "json": {
	                "firstName": "John",
	                "lastName": "Doe"
	            },
	            "less": true
	        },
	        "patterns/1_components/person-list-editor": {
	            "name": "person-list-editor",
	            "html": true,
	            "json": {
	                "people": [
	                    {
	                        "firstName": "Jeff",
	                        "lastName": "Smith"
	                    },
	                    {
	                        "firstName": "James",
	                        "lastName": "Jones"
	                    }
	                ]
	            }
	        },
	        "patterns/1_components/person-selector": {
	            "name": "person-selector",
	            "html": true,
	            "json": {
	                "selected": "Jane Doe"
	            },
	            "less": true
	        }
	    },
	    "tree": {
	        "name": "patterns",
	        "children": [
	            {
	                "name": "0_elements",
	                "children": [
	                    {
	                        "name": "01_reset.less"
	                    },
	                    {
	                        "name": "02_fonts.less"
	                    },
	                    {
	                        "name": "headers.html"
	                    },
	                    {
	                        "name": "headers.less"
	                    }
	                ]
	            },
	            {
	                "name": "1_components",
	                "children": [
	                    {
	                        "name": "person-editor.html"
	                    },
	                    {
	                        "name": "person-editor.json"
	                    },
	                    {
	                        "name": "person-editor.less"
	                    },
	                    {
	                        "name": "person-list-editor.html"
	                    },
	                    {
	                        "name": "person-list-editor.json"
	                    },
	                    {
	                        "name": "person-selector.html"
	                    },
	                    {
	                        "name": "person-selector.json"
	                    },
	                    {
	                        "name": "person-selector.less"
	                    }
	                ]
	            }
	        ]
	    }
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.templateProvider = [
	    '$element',
	    function ($element) {
	        $element.addClass('sps-app');
	        return "<div>\n\t\t\t<section class=\"sps-masthead\">\n\t\t\t\t<span class=\"sps-masthead__title\">Semantic Pattern Sandbox</span>\n\t\t\t</section>\n\t\t\t<nav class=\"sps-navbar\">\n\t\t\t\t<ul class=\"sps-navbar__categories\">\n\t\t\t\t\t<li class=\"sps-navbar__category\"\n\t\t\t\t\t\tng-repeat=\"category in $ctrl.patterns\">{{$ctrl.displayName(category.name)}}\n\t\t\t\t\t\t<ul class=\"sps-navbar__category-dropdown\"><li\n\t\t\t\t\t\t\tng-repeat=\"patternId in $ctrl.patternIds(category.children)\">\n\t\t\t\t\t\t\t<a class=\"sps-navbar__nav-link\"\n\t\t\t\t\t\t\tui-sref-active=\"sps-navbar__nav-link--active\"\n\t\t\t\t\t\t\tui-sref=\"app.pattern({id: patternId})\">{{$ctrl.displayName(patternId)}}</a>\n\t\t\t\t\t\t</li></ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<div class=\"sps-main\">\n\t\t\t\t<h1 class=\"sps-main__header-primary\">{{$ctrl.displayName($ctrl.currentPatternId)}}</h1>\n\t\t\t\t<ui-view></ui-view>\n\t\t\t</div>\n\t\t\t<div class=\"sps-footer\">\n\t\t\t\t&copy; Emeraldwalk 2017\n\t\t\t</div>\n\t\t</div>";
	    }
	];


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var patterns_manifest_1 = __webpack_require__(16);
	/**
	 * Keys for any configs with .html
	 */
	var componentKeys = Object
	    .keys(patterns_manifest_1.patternManifest.map)
	    .filter(function (key) { return patterns_manifest_1.patternManifest.map[key].html; });
	exports.patternComponentMap = {};
	var _loop_1 = function (key) {
	    var config = patterns_manifest_1.patternManifest.map[key];
	    var selector = patternIdToSelector(config.name);
	    var componentName = dashToCamelCase(selector);
	    var bindings = {};
	    for (var key_1 in config.json || {}) {
	        bindings[key_1] = '<';
	    }
	    exports.patternComponentMap[componentName] = {
	        templateUrl: function ($element) {
	            $element.addClass("sps-pattern sps-" + selector);
	            return key + ".html";
	        },
	        bindings: bindings,
	        controller: (_a = (function () {
	                function class_1(_$scope, _$http) {
	                    this._$scope = _$scope;
	                    this._$http = _$http;
	                }
	                class_1.prototype.$onInit = function () {
	                    var _this = this;
	                    if (config.json) {
	                        // refreshing in case the manifest hasn't been rebuilt
	                        this._$http.get(key + ".json").then(function (content) {
	                            for (var key_2 in content.data) {
	                                _this._$scope[key_2] = _this[key_2] || content.data[key_2];
	                            }
	                        });
	                    }
	                };
	                class_1.prototype.$onChanges = function () {
	                    for (var key_3 in bindings) {
	                        this._$scope[key_3] = this[key_3];
	                    }
	                };
	                return class_1;
	            }()),
	            _a.$inject = ['$scope', '$http'],
	            _a)
	    };
	};
	for (var _i = 0, componentKeys_1 = componentKeys; _i < componentKeys_1.length; _i++) {
	    var key = componentKeys_1[_i];
	    _loop_1(key);
	}
	/**
	 * Convert a pattern id to a valid component selector.
	 */
	function patternIdToSelector(id) {
	    return id.replace(/^\d+_?/, '');
	}
	exports.patternIdToSelector = patternIdToSelector;
	/**
	 * Convert a dashed-string to camelCase.
	 */
	function dashToCamelCase(text) {
	    return text.replace(/(-)(.)/g, function (match, dash, char) { return char.toUpperCase(); });
	}
	exports.dashToCamelCase = dashToCamelCase;
	var _a;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var patterns_manifest_1 = __webpack_require__(16);
	var PatternDetailComponent = (function () {
	    function PatternDetailComponent(_$sce, _$stateParams, _$templateRequest) {
	        this._$sce = _$sce;
	        this._$stateParams = _$stateParams;
	        this._$templateRequest = _$templateRequest;
	    }
	    PatternDetailComponent.prototype.$onInit = function () {
	        var _this = this;
	        this.srcTabs = [];
	        var keys = Object.keys(patterns_manifest_1.patternManifest.map);
	        /**
	         * Build a config with .html and .less paths
	         */
	        var config;
	        keys.some(function (key) {
	            if (patterns_manifest_1.patternManifest.map[key].name === _this._$stateParams['id']) {
	                config = {
	                    html: patterns_manifest_1.patternManifest.map[key].html && key + ".html",
	                    less: patterns_manifest_1.patternManifest.map[key].less && key + ".less",
	                    json: patterns_manifest_1.patternManifest.map[key].json && key + ".json"
	                };
	                return true;
	            }
	        });
	        if (config && config.html) {
	            this._$templateRequest("" + config.html).then(function (value) {
	                _this.templateSrc = _this._$sce.trustAsHtml(value);
	                _this.srcTabs.push({
	                    label: 'Source',
	                    content: _this.templateSrc
	                });
	            });
	        }
	        if (config && config.less) {
	            this._$templateRequest("" + config.less).then(function (value) {
	                _this.lessSrc = _this._$sce.trustAsHtml(value);
	                _this.srcTabs.push({
	                    label: 'Styles',
	                    content: _this.lessSrc
	                });
	            });
	        }
	        if (config && config.json) {
	            this._$templateRequest("" + config.json).then(function (value) {
	                _this.jsonSrc = _this._$sce.trustAsHtml(value);
	                _this.srcTabs.push({
	                    label: 'Data',
	                    content: _this.jsonSrc
	                });
	            });
	        }
	    };
	    return PatternDetailComponent;
	}());
	PatternDetailComponent.$inject = ['$sce', '$stateParams', '$templateRequest'];
	exports.PatternDetailComponent = PatternDetailComponent;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pattern_component_1 = __webpack_require__(18);
	/**
	 * Build a template for a pattern detail view.
	 */
	exports.templateProvider = [
	    '$stateParams',
	    '$element',
	    function ($stateParams, $element) {
	        $element.addClass('sps-pattern-detail');
	        var patternId = pattern_component_1.patternIdToSelector($stateParams['id']);
	        return "<h2 ng-if=\"$ctrl.templateSrc\" class=\"sps-pattern-detail__header-code\">Pattern</h2>\n\t\t<div ng-if=\"$ctrl.templateSrc\" class=\"sps-pattern-detail__pattern\"><" + patternId + "></" + patternId + "></div>\n\n\t\t<sps-tabset class=\"sps-pattern-detail__source\" tabs=\"$ctrl.srcTabs\"></sps-tabset>";
	    }
	];


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	var TabsetComponent = (function () {
	    function TabsetComponent() {
	    }
	    Object.defineProperty(TabsetComponent.prototype, "selectedTab", {
	        get: function () {
	            return this._selectedTab || this.tabs && this.tabs[0];
	        },
	        set: function (value) {
	            this._selectedTab = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TabsetComponent;
	}());
	exports.TabsetComponent = TabsetComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	exports.templateProvider = [
	    '$element',
	    function ($element) {
	        $element.addClass('sps-tabset');
	        return "<div>\n\t\t\t<ul><li class=\"sps-tabset__tab\"\n\t\t\t\t\tng-class=\"{'sps-tabset__tab--active': tab === $ctrl.selectedTab}\"\n\t\t\t\t\tng-click=\"$ctrl.selectedTab = tab\"\n\t\t\t\t\tng-repeat=\"tab in $ctrl.tabs\">{{tab.label}}</li></ul>\n\t\t\t<pre class=\"sps-tabset__tab-content\">{{$ctrl.selectedTab.content}}</pre>\n\t\t</div>";
	    }
	];


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	exports.states = [
	    {
	        name: 'app',
	        url: '',
	        abstract: true,
	        template: '<sps-app></sps-app>'
	    },
	    {
	        name: 'app.default',
	        url: '',
	    },
	    {
	        name: 'app.pattern',
	        url: '/pattern/:id',
	        template: '<sps-pattern-detail></sps-pattern-detail>'
	    }
	];


/***/ }
/******/ ]);