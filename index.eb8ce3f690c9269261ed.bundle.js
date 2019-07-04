/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"1f863e382d5727d5d0f0"}[chunkId] + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/button.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/button.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".btn-primary {\n  border-radius: 4px;\n  border: 1px solid lightgray; }\n  .btn-primary.bold {\n    font-weight: bolder; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./src/assets/images/big.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/big.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ff4c818fcf2b82f6bc2eda79370a8ea.jpg";

/***/ }),

/***/ "./src/assets/images/small.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/small.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADsBAgAHAAAAGgAAAAAAAADN4PLg+OAAAP/bAIQACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0MgEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8IAEQgArADsAwEiAAIRAQMRAf/EABsAAAIDAQEBAAAAAAAAAAAAAAMEAAIFAQYH/9oACAEBAAAAAPTtHtSsE7KWIIPcsvvMhDO1tBd5zLoj5qMtMEFXFTmmZnzwXHPczOU40631JXOy7UJcrJ0gOWztUhGX5fGSHY1oFUO1mSFoZktRd7xs9kFhDAW3ecEYd+Usxaq3LS5LdbTVtYt4qAsqvS17HmkoQUYNOMUREauP5vjLpjKhSw/dEo/fsiyGasFuol01gQct2xTA87bW9Oyybg8sfGF6BrEBsucGuARS0xKTU9nrCylyDYGmqJ2BRbtKrgFIRO9Car+m4ICuZLhY6TqgDEpJDSuHW3bE1Husnot0VEmn7WXSvNS6Cq2HOUvcjMdJHdveChk3rbPGDYqRUanmpKdJfpSluTUo5bsiFYnbScVXWzYAd7RUtO9jWq69YAuL3TC8bgl/ML9pwxzCYH207f2FeYJ9QjUerUa/ypS+oKheVt6ClRXI12mkzvZOSyyety/LqNpr0hQWdv6bM6aNv+jRC1m5z3NEWZhp8vmFQ52NXd2g0mvpFV1MfNuF6h+YwGXWCj85gdoYvqgCZ9HELr2UEVhCyeul1oPeNoeSfmw0xX0HIuuSqVboK2W9NRMpkjWoJuZboUN9k/Ww0vl1UHQutl3rLgoTpwJ9MFl8xjwXIliHan//xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/9oACAECEAAAAO4oT0ROkuPsBNOJgAQmkZoKSwi7MKF10R3Mm25ZKWKlWxqUE7WSUTNBjJk0ys+3Xm4ycx6VYL67RJwZeWiuhbcZ7HJs7ark7A4vOVfsXFVvwOycLuIzYZ6vn4J1H4c/PVtAnMNC5pCz5udR6dYf/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/9oACAEDEAAAAPFq6c+tzJ63M1Gks6uhWjaQADGqjFp4KAL8mwnWh2AWl1hBLdKsEIbqkA/Nz166Ape2kulEVu54x2UFgdHjkba/bVFjmYJxR6O93cThRzMJLqqGG0jjMLmLqSf/xAAeEAADAAIDAQEBAAAAAAAAAAABAgMABBESExQFEP/aAAgBAQABAgGdeQ/OEDHutDUt3ODK2Ft22l+gDRCaxVFeupHT6EkljMFHDrj4prNtl6io2571bv8AxdP4NWzo8yAQyV9/VycbOc69eRZLFX1R+emk2m+imuZCKgDwYvRn7inp6/Q+waFqyMPMLx5CYPc19fT07zfuNh9w7Z22qMCefl14/nb39/RWB7HCM5GDOOgR0fCoToGFTZ354WbR8uniJCQXjzKiZzlGBwDzZHTDPrf9Nv1x+uv7Cfpjd+htr63/AEtL9mH6B3BvrX09O/d7Hebfbc+mf6Db30Fq7TW44zt2/gfsf4GhuycEKJkGj168Gf0HbOx6BXUFGCFPVmIxW7FunUZCmpumz1anXkYScpr+WEk0ji4XFi3k0+P559BnRSuJi34eB13i1BsfU1kjyzK5l0WPh5kYI/Jx24JzjFdN9Nz657HoacctiilYqJGIjafz/Mmr4HCrpwSML+nfkME6LRA+0p1pJX1qV0jrLrPsVoNjtGjU44xlP8JI6gBeBT1Fvonbsu8Nn6Po9aFlBxgNhE5cEMzM2HARnAyoLfzntOy2WPgYoezFVOcMYv27lzjOGZ2CuLPb27Ac8denZBLDuJtbLSfosV1fl57MOxNsJQTR5s0nRvSe0t+nUfzv9R2ZV+JNL6t3fGyaSc2J780HRUpdrNgcOC5k73pMhU8usp6wRdqqCMqsDR1wUJ9Klgqepj8hHI/hNTPeBLEdoLrTasUy9WdhMgNSNxWn55/M+SOslhsNGn5TzBGUxU1kpMDXj5HKyZzsmNDJmFNlqKWu92LYcfA+Ttv6hmsZyGtNOBLuzcPja6oxSXnRCAoW074MbKArziuzpkns7kYcd0ryGX+MpzgPsu1OcJuCi53agyuMWMi4YdSnpGaqjIz5A8rRFObWFUTx6f/EADcQAAEDAwMCBAUDAwIHAAAAAAEAAhEDITESQVFhcQQTIoEjMkKRoRBSYhSx0TPBBUNygoOS4f/aAAgBAQADPwEQuqClAqLooUjBUiUAcppwoTSgLprIOEN3BMeA3hHw+kFo0hNrMlrrHhbIxCBc1wG91TMekIAQm+IqNJ22VNmGD7JgvGAvV+glFpR5soUlDdbhONlTeLjG6LDpafdOe6eU5u6hqBcGlsAoMZ6TJ6KoTqIKJO5XiHf8s+6q0i17xLJvC8MaWikQIUbq6gq6hEXUhDupK6q+U5hTIU7pwwnDqiNk0oOwUH5ATeCVSA9TAe6DzGkaeiDHtjCY0WQJwCtP0hO4RFnDPK8My/lslMLYCgwbfqUVCheyJOCn/tTD8qGQVCuuf0CaOiCbmZXRGc/pCbuAVJhoEDqmgcHhOmEOJR2ReMInZO3afsn8KonDKCahE6gm8oZlSIRixRi/6zvCM5T5R4ROyM4UpxTpynBstRcPUADyv3AlM6hM/cfdAbBRgBPNrdk/n8qpz+VVPH3VV52Hcp4yYR/euqjCPJTgVCcTACYWgSWlaTEokTZQgd1TA6pkphOQFeA6y1JwwU8/UifT5je0qBJe1AXJEcrwtGwmo7+OPuq5dLW0wO0qsMspn7r99H7FUHblvcJu1Rv3RO/5VMGHVfsqI+t32Xq9LCR1KqUIZV+IzrkLw1dmplb2OVSH1E+yp40nut2kd11CH8V1QjH5TKYl0ycQmjA/KqE2dHZVD9bvuqpPzOXiafy1CF4lxk13+yrvEGo4+6gzIPZEnP5lOeLlzu5TycIhboC0e4Q5KPdEcIp8K93foRuqjDDzraeSm1my33HCIwU83gp60/UAoEkpz3bo5JQJhrZ6ptJskgv44RAz9laLz2T9Xyqo/oi44RY4yjsjMFApjc/lU+n2VN26pEfMUAbGfwhyqY+onsFS/l9kXXafunDIU4R1WJa8cbqk9umoAyr/AHTBuT2BKtLRUPZhVTUYou91UeZcH/8Aqi0R/coOvc9lFrD3RqNgD3hED5mkccpxGIR1ad+iGG2RbYA90YkkAd0NifsrAgmFoUDOpU3j5boP+Q3GxRYbgj9CpsE7j8Js+kwnAoHb7KHDVfvlUX2LiDycquw+kiuycaoKpmPNbUpOH75H5TDfbuVTePqtwVb01nhVxJbUnonNs5l+Tcp4vM23Kc0QA2eSqlQ59gFA1OueFUJwB2F0QyPyVDflBPKyXECdk4/KCeqeMwmR16WWnot7I7SvOdAYRyQFQZ89QuPDMLT8jdKPATZsoGFIU5H6FuDCrMEE26qi8QWaDy1ODo8suHLSm1JDHXGRuPZEIqmTLqLHHqEwYpNb1bZXEADunGS1odBvAJXrgAF3AVV49bR2AVtgjMBn3Kcf2j3VSkJbpvwvEPvocqgs8tHcol16jY4bcplD6R1JQLbXHQoYEErugr4XQrTsidvdA8KOi7JjvlOknnCrsdYz7qo61WlPVNomWag3dpuFD4DW9iY/OFrj0m68MD8dlR09bBeCoAtpUYBvZUgIYKw/8ie9sCs73j/CbTH+o+Bm6pP+WpUbHBRpQf6l0cOATKY57BF1JpfIBuQE+IAgBRc56IURYiYkk7Lz365OjAlCI+ndSZkgITYyUdWEJPf9J2UjMey91AyUOqExMFOZYlHP+6A5XQFDXEBv/QSFXHqaQ5nTKk2f7QnnhPO7U7GlVHWbDUfLjnJRuYkHlRcw52w2CJUbICAWDTwnE3MNG5/wgRjC1GfwiRm43Cv/AITYcB+60iycBDxTcItGSqI+l4PdMm5sd1SHzF1za4QknQegDkCJDSOhRlpj7hEjKjCnoUeFKLT8zh2VN9nvF9yL/hMc7UyvMm4svQ2+9ynsbIv0hB8g2hCNMSrdEXnhAC35QJlUw6YunBx+A57Ymyc6Xnw9URzsoMQRzK0gmDJN1f5Cntqu+I0DUcBAu9Ty6+8xCBcR6i2MA3VSmAOROMJvq8xmvYXUkeq3ELYvE7A5KqGQT9nLmf8AtUgFrgQng3EhSPTZWuJPKIuCCFypeIcU3Rcm3O6o0hA1fZNrHQGep2CN0WVfh1HW2leJyabii7MgqTBMe6ZcSDPCoMcCKWp/VHhOhNAl39kwYTps1RXqD+ZwgLXV9/Yr6gyo62JQb8RwdpOJCYREkWsQiGVdIAaRBTjqMEhS+Mz1wvKrtc3bIVOvPwr8AgFMyD75U4mRxddboCQ78oNILKY6kqq8z6bKsbah7BOpVhUaBqHN0PFeuk3ROQXWVTwJFV1VnmD5WE/lEVAar2Mok31iSUKzm+XjnlazqA1bdFLZ1vb/ABlUQLu26oamhpzhOJuYEIaPX/Zartdbuh/VVgf3lB0nzCIsJCbSMSH8xgIiodLtPAAICFrkzkFNIF+1lAi907TE90Yx36phgzsiHtM3DcpzIjnVBwU3N7jZAZMKcA+9kRZxhD95QcCb2yqL3w0Onqm0ro+YNJLnGYJNgEzxnhKNA12tLDEtpXed14fw40FrajgDJdklUWOkMA4E4XxYaWaYuBlAvLbyCmABum4Nl5juP8rU8+oRvOEGyMoHxVUBur1FUux7qhkOcL5mU5w/1NTbiHDIRDy4X2tceyraHFzCGg7i6LHaTkKf0mcdkHUmN6JjS2IJHRVGHS9jXNG5EGFYmAG87KUFCljj+4LyTqcL8IzcgZJ7LztdapU0sf8ADba8lFmgUZ8prdI/iP8A6hWr6YjaJym1PQLwdgixsuIkfkIveXOMXuTlEOFO05BjZfC1OdDh0smluqPbqmRheMf4qs+nShpeYJMKu2fPc1juANRXgvlPnOc3MkCfsvCsa06W9FSAJDRbojpsI6RleHrVNVRnriHEJxBfRNifS3onUzDxDuFPpd7HhEGHdrIuERG6c5pde5wqbvBNEwR6TfKLCGx78IvsNk6pXiJhCkLbIuYdXCLntZqjU4SeE2g2n5TCdLnOYDuV5wbMksEEf3QMVCYgbm6pse11OdQGWrzA7LlTpxYyZwnAB7fpGCmmRDjJ23TXssPVazl5TyyMdFUP/EKuhut4eR2hVapII0MJghsn2TBX0u1NkWGkCB2GEC+GOced4XykDywcawRKdn02Ox3Ti5ziT1IH+yh2kYzJyv6kea0HWPyiwRHqRqvAYC7+QH3CJeRi24UCDESiKLXB31X5THu1OH5TGPyYB5VNrXFrQOSF8o32WkDF8okQB7QiQ3TOM9ExmKdo3sgWOEXIC8y52sQg2p6bTYpz6bgAWmLHqhp0OFzBunlvUfhGqbnTAxlOrVNbYAPJVUeOqfI1uswQIK2FVzYNr3ncrzK2fW4iSRnqi4w1oLd3Tugxh1iZ/JXnOJjVb2lBuZmEGjUI1G3ZVY+GcHKBv5LZByWgyPdPpBo2MnSLQgPiQC4n7J5hv0m17LQ2mJaIOJHsnhvmO9N/m4RNQQ/OIk+yDaN54F0Tp7oupTjoUC218ZUtF/ZXkjcWQmQLSENLsNnMKXeUBvF15JAcYbNjGCtbtU26nK105mNspoDnBwN75UEySOy1eL8QMAO2WoPJJU0B3R84Cw7Jxcb4EhRQYtPpGEfQeP8ACsYsAIEeyLqzmnDQVpGsfNlaKDY3EqKh37oeawbXRFQMgR2TT4l3QwEPM0/TwjJ6XRfUAPMLQTpsi5xniVc9SjK1ViLwgHaQAN0C0FzQT1QbW0gWkJheZaCqeuNNg2ya0ABf/8QAJBABAQACAgMBAQADAQEBAAAAAREAITFBUWGBcZGhscHR4fD/2gAIAQEAAT8QWAwMJpzjoYvYxpHZ7yqKfmS75wKoK4YI0ly0QelyfR5wB2U8mEalMKoodBgNHabbv8woO7s3MJSKKIZeRoch6larjAqz31lhgzhDD9SAnjzhyURpTjBEa4CZVLSPliNIunCBRCEDHqGvOarhGKYoR/TPJHs42rUwNC49tl6cDDZrGFFHwZN3do5MbEQf48YzbHoZqhm7zm5Rep7wuGpVuPkEdG2NZiulHNbSPB4wOwEGrAQRC1YXFQPp7ezNbdva4TRv5lrV9Y3NJJl3foxkX8cDApXznKxrkcJkgP8AjHz2wAzCsMSxEcFDrveERNPeLB3/ADDd37eMc2p8yJWL1gK0catychHCeZs3MNaDlTcfxAoaTNmKds2YIqoc5vyA7zQJJsYZcRvkcOnmiDr3gNmiaI5NIahjMSjLNG/uDFnGWc/4ypyXBAu3zjSf4cBlqnWaolxLT/PL7yvGFT9BJgw3ddYxsmuJm5P8MAoOz1h0oT8w2aF4yPc/MMG546xOrteuMN4g8mMcgj1gxvRzgyXOF5xQIcg4ZWBqnHBMB3vnKVV7Y0gQ42YlVoe95tg1NwN42oJzcIIEXyYH4TyOUA4Y0q305olcAt6DRyuPj/3FwG/pzaCT35x1Bp3nVE9Zp2CYy0O/GHlS9OHtSdXrNNNh5xE3a+MJaQ+VzaHQw2UfmIADXnHgQHnvBaA+XvKED23kt9BQxoX3Rx2yvjDgKElm8VBQcU3hy9HlMx2iDwYLkSPnHUrydMQCy6hctBLveIHG/mMMW/MTyo+ssj+iGMuEPeN4WbjgG5XrLdAq8rlBBHhHIGx0XJ56cNaLncAfbkrid1x4BOu8YAEcQS4GFq806xhiHi6xTQPJzgOK/fIfMYFH7iP3zhP7ha4/RH7hOddKWLWZ6GX2P7m+i16kf0pi2PPRwJAvxj2JOlcXMXujmIM6SgOTwnqLVhgw96i/mOVY+HiXYFlHGCgUJoOEpq+4sRfgwIkE9POPEp84d0cBYS1PA4aKenAw/bXwjJgQ/XeMzyg7MthOhTEQ0HaD65sjB7b/ALgwunlL9rhQOvDofOMNVfsxEit8ZFNivUwJTHpP+YI8C+TEUodKswoVjmy4fQF6waDj1MNoR/TNHHP+THhGJwnOeu0bvjl77JTleHNXoevOP0R5WXIuTG5+lcJgwxhKffAYTIx94NKbyuDKFo0Ng8+3FQEF9DFoq8MbEg6LvCt0E3Kz5hWo1wG8AGt8udZv+4ml8s6wPav/AHA7odu2IEBTvHPM8gZqlbalx3XDzqjK2uPaYK2o7wW3KVHTrljupDwUwoeb4zhstOiMOSCOme44FUkv/iGDcOcbn1JjwKHY3fzAIC8RIfnWAA3bUye/eWKVsIefuKVQeDAu0dD0977wshDw58sKCf07c0KQSCdPuOkuBFrg5unasPuWpdyVcC9udx/7h2NXbxjhYS7Xb/Mu6h4mo+HNhPqIOLkUbYRyI8ZrKkXDRgTziK5nrWe/iNWXgdZ2InCYjsj06JhI1jrgPxMYnIAEH3vDItqmP5WYkOGCQ/KjgcCq2JL/AHhQYeCuPoMdMcPdvcEX0YiwskUPrrHtvAUQ+YGJRsLiQeTiA230HB+vf+v3BBCptCPuExdFdluShRNoZi8oKDQYt4UmiD/cGH5u8dyB2aGS6BDzbcowUGkd4wWBwnI/pk6o8AfejChh2lKutuBsAdzV+4g5PVUctAX804Km3XncwQIKcxwHg3POLlvrDVk6BRx4QNwgL5DCA8fl/nP8cdAeZp+i2Ym2je8WR2eOsXWQj/8ABweWgkFZKkSaCr9uIjCUAelKGVA0XYx9iG8cVWTY+twEVZ6NuUAKMsF/mHbl4U4QZVAFf3BCtvawf7min8DciiJgCj4DjAwtm8l/zo/DL0AdQA+YRgjbNY4s9u2Y/wD4ck6NKW4NbB45x1ps/wBesstgcw0wER243MVQte94R0ryJRzXjzBKvvJhqoczT/eGLQiIBnSCbx1ecrZ92OQmGbU/iMLACO279Jp/cMxVpI/QN4fZCihV7q3JgUEN37sbjYWkIT9dsEl0o2H3OnymTnfq8980yaKO2v64wtZ9P7h4MKEhwD75wgeDQNf7hNCp3Vf64ouBh8vBh2MFETjlmbJ0NoNr4MdGBRL/AM7zRBh2XLkD9yx0ta+4KEDjw6xORddFc4CnmtYXFntI4MGHEtzdih6XjCojourigqdKpMORU9Y4wH6uG8k42scfG3lZPnDgDRV5V8caF9ymbs7y5tznWaz8AxVEJ5GYkkToQ3kwRe1V9YezSNWOEhah+i3lxnHV+GGop7QZ/nEliQOh7e3Ga2wFAPB0xlGuhuL8w2dAIRx7xwJQ3oQyr2zrGll6HatuquSr+UT+hMohAP8A3BNn3JFqbDuGmCR/uJzag0BPc3cFUgcEr5p1gAQqIo39yWMR4QP7hRQASLTC0i9zFiVDbTA4qnSbMdSR/wCY0Sje3/MrgPJZ/W2QaAKK1NhoTCEDQEKPaBcYHAPo7y2KFqSfuTVUtvn5nFRepxf3OrH0THvKbriZCnVNZyMeUqq5E1wjg4hGqJ7ByuDA9xDZPGKikCD6D51vFU1+YZhwJRN95eXt1AVsDzh4Q0gI3Cxjw5PagJgY8S/XvDgBUQAjzWjeAmSLPDk1+dODBDghaa5nrAEc4ShXrxz7wSyinQujd8zNOY5OfpyYkS8xty0prxglV6AyfMZqBObUl94cQPHPr9xoAXpiYQLo3Vw67JrjTDqiICW9B1j0Ok4Yj4i49PY1HXkRwEg8JIYMuAee079ZS+4PIHNK9urRrlusHg6vjpmAcEeOs0GHhUFb04mYNK0DCIWfuFTtQDa7cSGNdTZkmxWAIs86w6oaKSh5DoyGfr1L5uR3kElyOYU7QR0vGzDVYBKHHhD+/MBq0myAf8MckIkaI3ln5mtcdUDzq9G/uKiuc7A/piihQG67cuEUjrxkOB6TAeNG/g15xiCINmiYSzjzG/2YxR5L+vy4ILtQlPOqXXhcKkIbluqC8Wx7DN/FCCw0C3WzfUbnHfajToSk0EcNnG1FPDU7N4KoF4az9bmwbFta9i94+GQPsY3IERbUwAG3Yaby9AdCsJqzus5ew4zRNQiR9XxgRs5GkPLon9+4yu7OUHV+dbwwFivANa15N/3AGRBYgP8A3jJxppQ7XLrZRdv5hAtILtFY4xCgPD7MmMRHheL87zfsSqIg7U9xv7gIWKADvG0QXkztr2oxNAexrkABetEPmTij7GHLXlXGGqQZYdcbf7l8bpiTar0TeJy84EVhU1JabVXI+cOEG6GvyaAMPwfkV/rvq4Txcao+8ZOEAjS0j1r9woUgUvb4+4W2A2LJp15xyIC9Gmr7yiDDzXBWIN1U26DjNXUuTp/DLZWEASdiMPmNICqCRna9m5x4+4QpCRSXjywgqlbAVsnhMkBN0OmXJlm+WZZKX1jycHsc4dAEm8sV/wAGPDhDFEb/AOzLttIQ/RzlisBOUKf7wXDYsDtwzRk5hhKoa86xgbNJebzzr7jscVDS4QrqUbgKaOXwecOSMFTUDMs8k7QCYLq1czFiOpDkCO+QcIGSTVU5/hrxhgrgBH6GN64GQcawcK7dqNj3MkKwiU7S8bnd4yJoUgkoOdOLoLedGsMXBnRXYcpjIHSUFw2GWiEXmDRjNJNN2rzu7wFKuhTxo/ceVRxoX09Y+EBIRkiOHpXU0mF7TN9jDNIhOd9H1/k68YFlsT8PWDQ9NnuF/wBRy7EiHDYGv8mLdxoVW0fVJ8MPk2aOv1hYCugTBRdajiuQdALt7y6oeSb58e/WPKCFqdN/KmQeEduEqGuSwy9Q5y0Yx+K48GIqj/H3DHAx0NTV96cSxSgXkHt85z+MDtvy/PGBqiAw0PP7Zi7kCNMIN9FuGiSdCNIT3YH9zVTbC2QAA0p42APa4z4R+q7QxLesnFE2QGbTSV3vWHWIESvixTzXAhyETCNTvEodeTRRrfesFJu529qichrTIF9q3f8AOcERgm4QYCaXwnSPB77uF1BIrwUPNaYkqhqcMUfsf7MRgBiMj2n517rhpkbSVDA1NcAYMknGtlHX+3CKkVOn5/rXrLhEvY6wwS1T2uFAhXIsTCaKaByZ3/D+5LyaNuFyHj75waELkjboveskqgF3vCglAzWwB3xtNe7iICEBKo3cxkWpOIv+UZMELARErauu9n77zW3g53G7zyw59TESjSgapv7uj+46LSB4lMCJFMwHUXtXNRRo7DoDbdvL+4SjbRAjhoNuDddaAi60w39xeDQ7abJ7TAJpCE4pNhwcXXjKFoKi9/fL3hmRlNWJ/vV+e8rJSC+F6/U/xcC7K6gCAnTHC7AIgrxHS0xcXZMRUVfIbee83cqRZ6K3d5YYRkjO8aYOfa4lMDUBQb3Pierh0IKpQ1qOWvrDlInY/YYsTVNg5dcesOct4Nq7N+5iYhQ0LYf94wQ46aOjvBQsABNJDCofaedfnBmqLC02b0uAxlEQaEiq96afmHpUHMQF329ZuiQWaPb/AL6mCUtNbF63/n/PvGgxISCHK3gf+YQt0oDUwn6mBphKxgxfSz8uKuAhSff/ADGRAs0n3/LhLoJDpwkgDsv03mpROSeckptk+j/3GB0INAE/9Y4FQPcTnB20ULvdMDZW5enbr7f7kbyryq41d5MnS97yyqDr2fm/3GCQAMYgbAo/ZjP0j4xJ2jnX5gglL+sEo+w+4GCBejBbR6OCEC7BsXA3MxTcfmED9wH/AHF84txKgOS8gHl8uf/EACYRAAICAgIBBAIDAQAAAAAAAAECAAMRIQQxEgUTIkEUQhAyURX/2gAIAQIBAT8AKA7BhqwZ0cRcZwYvEJOT1H4pA1PZcHBEXirjuFaQngTBlGIiWEbBjAnsxmsx4g6leQdwDMW0NswsJlT3CR9RbrBoGGyzOcw2uRsw2ONTDMZ7LE7MVZhZgGBRM/4J4qIQMahAB3AcfwWMyZ55MWZgAMCgTBPUCn7MJxFf/ZWKnGB3Px1PZnsD6MFE9tF2Yb16QZnv7yUEbkEdYELlt5jcgodiDlk9CLcT2J5azCRAZ5ldiLzR00ruZh8SDD5mWIx7mCvUL4GSYSSYr/RjMmck5ilD1A5HR1G5laD5HcPqY/UQQQiGtVORoxPUGTTbEr9Qpcb1OTz+EuSdmXes07CpP+qjjA1G5ZOw0oa4tk9QX25MtstKksZ5sckxXI7EXmnG1g5ik4Aj81FOCDK7lsOjPEHuGoHqW8ckZEsqr/YGe2v6iD+wAEWzAlbnMexQMNqHwLfFhA6jsiBQmsRMHQEsJzgCGvIis6jA3ByiNMMRbQwlnR8RBxbA2TBXWh8s7jqXB8cAicj8g6VpajsMsSYK2BmxDyW6Ii2w3IBsz3dRbd7EOGETzqOGM90nU5VxrScmxrrcITOIpVPN/uXWo/wA1LK63+SaAjU+R1FQqSCI1QIyNGcmi52wp1LOIw20Wy2ofE5lF4tXP3Pd8ROReHUAHcXllRucrlveRrQlVni2QJ+X8cSuzRLGe4CdaBlaqBAADLeVY7ePUa+wbzFscrkmKuYlgqQlRAWtOWMZR1EcBdiWIM5jDBn9T/FbBnAxCoURnE//xAAkEQACAgICAQQDAQAAAAAAAAAAAQIRAyESMQQQFEFREyIyYf/aAAgBAwEBPwBSa7RHJoq1ZJPjcSXlqKoh5SfYs8GrTH5Mr0hPM580hPlGzJjUlTI/qRjC7rZJa0NkoNdbFH7KkuiN1seDG9tCx46qhYoJ6Qscey0hZEuhvZs2hyZRykJsTbGj/BL0rQ69HNIeRM5RHNfCNkovtGTJki99C8lnuGPyR5Zy0hYZv+mfja1yFiXyNJOhRTOCQ4r4ZbXQpMba6JKMlTHg+UZIJadoSSMTSOSfY2hNPZKnTTLSLsa+iOKUuiHiKtsdlN7Ko5J6ZkxRf8seGaejFg8iS1pEfCl8yH4tIUIJULFjabFHGRxRSs6LPbt9MeCSPbzaseKSlTRKFMUa2iM5R6ZHK2cpHFuLE6YrbMVsf0ykLaHaExmTCpIlilEsWj8jaoU5NURwJq2qIeLBK6OKjpKhsuy6EIoaKvTMmJpjSPGxLLKmYcEYbaMjV0jHGXbZX2zgl0SiRST3sXFKxU2NIaKVko89D8S3RgxRwo5FK7G0KaY50jsjBJD40WfAttD7ZGQ2Rk2cjnoUhdeiZ//Z"

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/button.component.js":
/*!********************************************!*\
  !*** ./src/components/button.component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component.scss */ "./src/components/button.component.scss");
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_component_scss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //export const button = ()=> {
  var _button = document.createElement('button');

  _button.textContent = 'Click Me!';

  _button.classList.add('btn-primary');

  _button.classList.add('bold');

  _button.onclick = function () {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./users/users */ "./src/components/users/users.js")).then(function (m) {
      console.log(m);
    });
  };

  document.body.appendChild(_button);
});

/***/ }),

/***/ "./src/components/button.component.scss":
/*!**********************************************!*\
  !*** ./src/components/button.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./button.component.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/button.component.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _components_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button.component */ "./src/components/button.component.js");
/* harmony import */ var _assets_images_big_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/big.jpg */ "./src/assets/images/big.jpg");
/* harmony import */ var _assets_images_big_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_big_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_small_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/small.jpg */ "./src/assets/images/small.jpg");
/* harmony import */ var _assets_images_small_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_small_jpg__WEBPACK_IMPORTED_MODULE_4__);





console.log('big: ', _assets_images_big_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
console.log('small: ', _assets_images_small_jpg__WEBPACK_IMPORTED_MODULE_4___default.a); //const modules  = require('./math');

var no = new _math__WEBPACK_IMPORTED_MODULE_1__["Math"]().sub(1, 2); //const no = new modules.Math().sub(1,2);

console.log(no);
var smallImg = document.createElement('img');
smallImg.src = _assets_images_small_jpg__WEBPACK_IMPORTED_MODULE_4___default.a;
var bigImg = document.createElement('img');
bigImg.src = _assets_images_big_jpg__WEBPACK_IMPORTED_MODULE_3___default.a;
document.body.append(bigImg, smallImg); // class Employee{
//     public id?:number;
//     private name:string;
//     public setName(name:string = ''): void{
//         this.name = name;
//     }
//     public getName(): string{
//         return this.name;
//     }
// }
// const emp = new Employee();
// emp.setName('Hassona');
// console.log(emp.getName());

Object(_components_button_component__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: Math, myName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return Math; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myName", function() { return myName; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PI = 3.14;
var Math =
/*#__PURE__*/
function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, [{
    key: "sum",
    //class Math {
    value: function sum(n1, n2) {
      return n1 + n2;
    }
  }, {
    key: "sub",
    value: function sub(n1, n2) {
      return n1 - n2;
    }
  }]);

  return Math;
}();
var myName = 'Hassona'; //module.exports = { myName, Math };

/***/ })

/******/ });
//# sourceMappingURL=index.eb8ce3f690c9269261ed.bundle.js.map