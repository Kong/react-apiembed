(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('httpsnippet')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'httpsnippet'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-apiembed"] = factory(global.React, global.PropTypes, global.HTTPSnippet));
})(this, (function (React, PropTypes, HTTPSnippet) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var HTTPSnippet__default = /*#__PURE__*/_interopDefaultLegacy(HTTPSnippet);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var prismCore = createCommonjsModule(function (module) {
  /// <reference lib="WebWorker"/>

  var _self = (typeof window !== 'undefined')
  	? window   // if in browser
  	: (
  		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
  			? self // if in worker
  			: {}   // if in node js
  	);

  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism = (function (_self) {

  	// Private helper vars
  	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  	var uniqueId = 0;

  	// The grammar object for plaintext
  	var plainTextGrammar = {};


  	var _ = {
  		/**
  		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
  		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
  		 * additional languages or plugins yourself.
  		 *
  		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
  		 *
  		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
  		 * empty Prism object into the global scope before loading the Prism script like this:
  		 *
  		 * ```js
  		 * window.Prism = window.Prism || {};
  		 * Prism.manual = true;
  		 * // add a new <script> to load Prism's script
  		 * ```
  		 *
  		 * @default false
  		 * @type {boolean}
  		 * @memberof Prism
  		 * @public
  		 */
  		manual: _self.Prism && _self.Prism.manual,
  		/**
  		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
  		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
  		 * own worker, you don't want it to do this.
  		 *
  		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
  		 *
  		 * You obviously have to change this value before Prism executes. To do this, you can add an
  		 * empty Prism object into the global scope before loading the Prism script like this:
  		 *
  		 * ```js
  		 * window.Prism = window.Prism || {};
  		 * Prism.disableWorkerMessageHandler = true;
  		 * // Load Prism's script
  		 * ```
  		 *
  		 * @default false
  		 * @type {boolean}
  		 * @memberof Prism
  		 * @public
  		 */
  		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

  		/**
  		 * A namespace for utility methods.
  		 *
  		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
  		 * change or disappear at any time.
  		 *
  		 * @namespace
  		 * @memberof Prism
  		 */
  		util: {
  			encode: function encode(tokens) {
  				if (tokens instanceof Token) {
  					return new Token(tokens.type, encode(tokens.content), tokens.alias);
  				} else if (Array.isArray(tokens)) {
  					return tokens.map(encode);
  				} else {
  					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
  				}
  			},

  			/**
  			 * Returns the name of the type of the given value.
  			 *
  			 * @param {any} o
  			 * @returns {string}
  			 * @example
  			 * type(null)      === 'Null'
  			 * type(undefined) === 'Undefined'
  			 * type(123)       === 'Number'
  			 * type('foo')     === 'String'
  			 * type(true)      === 'Boolean'
  			 * type([1, 2])    === 'Array'
  			 * type({})        === 'Object'
  			 * type(String)    === 'Function'
  			 * type(/abc+/)    === 'RegExp'
  			 */
  			type: function (o) {
  				return Object.prototype.toString.call(o).slice(8, -1);
  			},

  			/**
  			 * Returns a unique number for the given object. Later calls will still return the same number.
  			 *
  			 * @param {Object} obj
  			 * @returns {number}
  			 */
  			objId: function (obj) {
  				if (!obj['__id']) {
  					Object.defineProperty(obj, '__id', { value: ++uniqueId });
  				}
  				return obj['__id'];
  			},

  			/**
  			 * Creates a deep clone of the given object.
  			 *
  			 * The main intended use of this function is to clone language definitions.
  			 *
  			 * @param {T} o
  			 * @param {Record<number, any>} [visited]
  			 * @returns {T}
  			 * @template T
  			 */
  			clone: function deepClone(o, visited) {
  				visited = visited || {};

  				var clone; var id;
  				switch (_.util.type(o)) {
  					case 'Object':
  						id = _.util.objId(o);
  						if (visited[id]) {
  							return visited[id];
  						}
  						clone = /** @type {Record<string, any>} */ ({});
  						visited[id] = clone;

  						for (var key in o) {
  							if (o.hasOwnProperty(key)) {
  								clone[key] = deepClone(o[key], visited);
  							}
  						}

  						return /** @type {any} */ (clone);

  					case 'Array':
  						id = _.util.objId(o);
  						if (visited[id]) {
  							return visited[id];
  						}
  						clone = [];
  						visited[id] = clone;

  						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
  							clone[i] = deepClone(v, visited);
  						});

  						return /** @type {any} */ (clone);

  					default:
  						return o;
  				}
  			},

  			/**
  			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
  			 *
  			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
  			 *
  			 * @param {Element} element
  			 * @returns {string}
  			 */
  			getLanguage: function (element) {
  				while (element) {
  					var m = lang.exec(element.className);
  					if (m) {
  						return m[1].toLowerCase();
  					}
  					element = element.parentElement;
  				}
  				return 'none';
  			},

  			/**
  			 * Sets the Prism `language-xxxx` class of the given element.
  			 *
  			 * @param {Element} element
  			 * @param {string} language
  			 * @returns {void}
  			 */
  			setLanguage: function (element, language) {
  				// remove all `language-xxxx` classes
  				// (this might leave behind a leading space)
  				element.className = element.className.replace(RegExp(lang, 'gi'), '');

  				// add the new `language-xxxx` class
  				// (using `classList` will automatically clean up spaces for us)
  				element.classList.add('language-' + language);
  			},

  			/**
  			 * Returns the script element that is currently executing.
  			 *
  			 * This does __not__ work for line script element.
  			 *
  			 * @returns {HTMLScriptElement | null}
  			 */
  			currentScript: function () {
  				if (typeof document === 'undefined') {
  					return null;
  				}
  				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
  					return /** @type {any} */ (document.currentScript);
  				}

  				// IE11 workaround
  				// we'll get the src of the current script by parsing IE11's error stack trace
  				// this will not work for inline scripts

  				try {
  					throw new Error();
  				} catch (err) {
  					// Get file src url from stack. Specifically works with the format of stack traces in IE.
  					// A stack will look like this:
  					//
  					// Error
  					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
  					//    at Global code (http://localhost/components/prism-core.js:606:1)

  					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
  					if (src) {
  						var scripts = document.getElementsByTagName('script');
  						for (var i in scripts) {
  							if (scripts[i].src == src) {
  								return scripts[i];
  							}
  						}
  					}
  					return null;
  				}
  			},

  			/**
  			 * Returns whether a given class is active for `element`.
  			 *
  			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
  			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
  			 * given class is just the given class with a `no-` prefix.
  			 *
  			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
  			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
  			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
  			 *
  			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
  			 * version of it, the class is considered active.
  			 *
  			 * @param {Element} element
  			 * @param {string} className
  			 * @param {boolean} [defaultActivation=false]
  			 * @returns {boolean}
  			 */
  			isActive: function (element, className, defaultActivation) {
  				var no = 'no-' + className;

  				while (element) {
  					var classList = element.classList;
  					if (classList.contains(className)) {
  						return true;
  					}
  					if (classList.contains(no)) {
  						return false;
  					}
  					element = element.parentElement;
  				}
  				return !!defaultActivation;
  			}
  		},

  		/**
  		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
  		 *
  		 * @namespace
  		 * @memberof Prism
  		 * @public
  		 */
  		languages: {
  			/**
  			 * The grammar for plain, unformatted text.
  			 */
  			plain: plainTextGrammar,
  			plaintext: plainTextGrammar,
  			text: plainTextGrammar,
  			txt: plainTextGrammar,

  			/**
  			 * Creates a deep copy of the language with the given id and appends the given tokens.
  			 *
  			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
  			 * will be overwritten at its original position.
  			 *
  			 * ## Best practices
  			 *
  			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
  			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
  			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
  			 *
  			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
  			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
  			 *
  			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
  			 * @param {Grammar} redef The new tokens to append.
  			 * @returns {Grammar} The new language created.
  			 * @public
  			 * @example
  			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
  			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
  			 *     // at its original position
  			 *     'comment': { ... },
  			 *     // CSS doesn't have a 'color' token, so this token will be appended
  			 *     'color': /\b(?:red|green|blue)\b/
  			 * });
  			 */
  			extend: function (id, redef) {
  				var lang = _.util.clone(_.languages[id]);

  				for (var key in redef) {
  					lang[key] = redef[key];
  				}

  				return lang;
  			},

  			/**
  			 * Inserts tokens _before_ another token in a language definition or any other grammar.
  			 *
  			 * ## Usage
  			 *
  			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
  			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
  			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
  			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
  			 * this:
  			 *
  			 * ```js
  			 * Prism.languages.markup.style = {
  			 *     // token
  			 * };
  			 * ```
  			 *
  			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
  			 * before existing tokens. For the CSS example above, you would use it like this:
  			 *
  			 * ```js
  			 * Prism.languages.insertBefore('markup', 'cdata', {
  			 *     'style': {
  			 *         // token
  			 *     }
  			 * });
  			 * ```
  			 *
  			 * ## Special cases
  			 *
  			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
  			 * will be ignored.
  			 *
  			 * This behavior can be used to insert tokens after `before`:
  			 *
  			 * ```js
  			 * Prism.languages.insertBefore('markup', 'comment', {
  			 *     'comment': Prism.languages.markup.comment,
  			 *     // tokens after 'comment'
  			 * });
  			 * ```
  			 *
  			 * ## Limitations
  			 *
  			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
  			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
  			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
  			 * deleting properties which is necessary to insert at arbitrary positions.
  			 *
  			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
  			 * Instead, it will create a new object and replace all references to the target object with the new one. This
  			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
  			 *
  			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
  			 * you hold the target object in a variable, then the value of the variable will not change.
  			 *
  			 * ```js
  			 * var oldMarkup = Prism.languages.markup;
  			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
  			 *
  			 * assert(oldMarkup !== Prism.languages.markup);
  			 * assert(newMarkup === Prism.languages.markup);
  			 * ```
  			 *
  			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
  			 * object to be modified.
  			 * @param {string} before The key to insert before.
  			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
  			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
  			 * object to be modified.
  			 *
  			 * Defaults to `Prism.languages`.
  			 * @returns {Grammar} The new grammar object.
  			 * @public
  			 */
  			insertBefore: function (inside, before, insert, root) {
  				root = root || /** @type {any} */ (_.languages);
  				var grammar = root[inside];
  				/** @type {Grammar} */
  				var ret = {};

  				for (var token in grammar) {
  					if (grammar.hasOwnProperty(token)) {

  						if (token == before) {
  							for (var newToken in insert) {
  								if (insert.hasOwnProperty(newToken)) {
  									ret[newToken] = insert[newToken];
  								}
  							}
  						}

  						// Do not insert token which also occur in insert. See #1525
  						if (!insert.hasOwnProperty(token)) {
  							ret[token] = grammar[token];
  						}
  					}
  				}

  				var old = root[inside];
  				root[inside] = ret;

  				// Update references in other language definitions
  				_.languages.DFS(_.languages, function (key, value) {
  					if (value === old && key != inside) {
  						this[key] = ret;
  					}
  				});

  				return ret;
  			},

  			// Traverse a language definition with Depth First Search
  			DFS: function DFS(o, callback, type, visited) {
  				visited = visited || {};

  				var objId = _.util.objId;

  				for (var i in o) {
  					if (o.hasOwnProperty(i)) {
  						callback.call(o, i, o[i], type || i);

  						var property = o[i];
  						var propertyType = _.util.type(property);

  						if (propertyType === 'Object' && !visited[objId(property)]) {
  							visited[objId(property)] = true;
  							DFS(property, callback, null, visited);
  						} else if (propertyType === 'Array' && !visited[objId(property)]) {
  							visited[objId(property)] = true;
  							DFS(property, callback, i, visited);
  						}
  					}
  				}
  			}
  		},

  		plugins: {},

  		/**
  		 * This is the most high-level function in Prism’s API.
  		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
  		 * each one of them.
  		 *
  		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
  		 *
  		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
  		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
  		 * @memberof Prism
  		 * @public
  		 */
  		highlightAll: function (async, callback) {
  			_.highlightAllUnder(document, async, callback);
  		},

  		/**
  		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
  		 * {@link Prism.highlightElement} on each one of them.
  		 *
  		 * The following hooks will be run:
  		 * 1. `before-highlightall`
  		 * 2. `before-all-elements-highlight`
  		 * 3. All hooks of {@link Prism.highlightElement} for each element.
  		 *
  		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
  		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
  		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
  		 * @memberof Prism
  		 * @public
  		 */
  		highlightAllUnder: function (container, async, callback) {
  			var env = {
  				callback: callback,
  				container: container,
  				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
  			};

  			_.hooks.run('before-highlightall', env);

  			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

  			_.hooks.run('before-all-elements-highlight', env);

  			for (var i = 0, element; (element = env.elements[i++]);) {
  				_.highlightElement(element, async === true, env.callback);
  			}
  		},

  		/**
  		 * Highlights the code inside a single element.
  		 *
  		 * The following hooks will be run:
  		 * 1. `before-sanity-check`
  		 * 2. `before-highlight`
  		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
  		 * 4. `before-insert`
  		 * 5. `after-highlight`
  		 * 6. `complete`
  		 *
  		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
  		 * the element's language.
  		 *
  		 * @param {Element} element The element containing the code.
  		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
  		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
  		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
  		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
  		 *
  		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
  		 * asynchronous highlighting to work. You can build your own bundle on the
  		 * [Download page](https://prismjs.com/download.html).
  		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
  		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
  		 * @memberof Prism
  		 * @public
  		 */
  		highlightElement: function (element, async, callback) {
  			// Find language
  			var language = _.util.getLanguage(element);
  			var grammar = _.languages[language];

  			// Set language on the element, if not present
  			_.util.setLanguage(element, language);

  			// Set language on the parent, for styling
  			var parent = element.parentElement;
  			if (parent && parent.nodeName.toLowerCase() === 'pre') {
  				_.util.setLanguage(parent, language);
  			}

  			var code = element.textContent;

  			var env = {
  				element: element,
  				language: language,
  				grammar: grammar,
  				code: code
  			};

  			function insertHighlightedCode(highlightedCode) {
  				env.highlightedCode = highlightedCode;

  				_.hooks.run('before-insert', env);

  				env.element.innerHTML = env.highlightedCode;

  				_.hooks.run('after-highlight', env);
  				_.hooks.run('complete', env);
  				callback && callback.call(env.element);
  			}

  			_.hooks.run('before-sanity-check', env);

  			// plugins may change/add the parent/element
  			parent = env.element.parentElement;
  			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
  				parent.setAttribute('tabindex', '0');
  			}

  			if (!env.code) {
  				_.hooks.run('complete', env);
  				callback && callback.call(env.element);
  				return;
  			}

  			_.hooks.run('before-highlight', env);

  			if (!env.grammar) {
  				insertHighlightedCode(_.util.encode(env.code));
  				return;
  			}

  			if (async && _self.Worker) {
  				var worker = new Worker(_.filename);

  				worker.onmessage = function (evt) {
  					insertHighlightedCode(evt.data);
  				};

  				worker.postMessage(JSON.stringify({
  					language: env.language,
  					code: env.code,
  					immediateClose: true
  				}));
  			} else {
  				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
  			}
  		},

  		/**
  		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
  		 * and the language definitions to use, and returns a string with the HTML produced.
  		 *
  		 * The following hooks will be run:
  		 * 1. `before-tokenize`
  		 * 2. `after-tokenize`
  		 * 3. `wrap`: On each {@link Token}.
  		 *
  		 * @param {string} text A string with the code to be highlighted.
  		 * @param {Grammar} grammar An object containing the tokens to use.
  		 *
  		 * Usually a language definition like `Prism.languages.markup`.
  		 * @param {string} language The name of the language definition passed to `grammar`.
  		 * @returns {string} The highlighted HTML.
  		 * @memberof Prism
  		 * @public
  		 * @example
  		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
  		 */
  		highlight: function (text, grammar, language) {
  			var env = {
  				code: text,
  				grammar: grammar,
  				language: language
  			};
  			_.hooks.run('before-tokenize', env);
  			if (!env.grammar) {
  				throw new Error('The language "' + env.language + '" has no grammar.');
  			}
  			env.tokens = _.tokenize(env.code, env.grammar);
  			_.hooks.run('after-tokenize', env);
  			return Token.stringify(_.util.encode(env.tokens), env.language);
  		},

  		/**
  		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
  		 * and the language definitions to use, and returns an array with the tokenized code.
  		 *
  		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
  		 *
  		 * This method could be useful in other contexts as well, as a very crude parser.
  		 *
  		 * @param {string} text A string with the code to be highlighted.
  		 * @param {Grammar} grammar An object containing the tokens to use.
  		 *
  		 * Usually a language definition like `Prism.languages.markup`.
  		 * @returns {TokenStream} An array of strings and tokens, a token stream.
  		 * @memberof Prism
  		 * @public
  		 * @example
  		 * let code = `var foo = 0;`;
  		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
  		 * tokens.forEach(token => {
  		 *     if (token instanceof Prism.Token && token.type === 'number') {
  		 *         console.log(`Found numeric literal: ${token.content}`);
  		 *     }
  		 * });
  		 */
  		tokenize: function (text, grammar) {
  			var rest = grammar.rest;
  			if (rest) {
  				for (var token in rest) {
  					grammar[token] = rest[token];
  				}

  				delete grammar.rest;
  			}

  			var tokenList = new LinkedList();
  			addAfter(tokenList, tokenList.head, text);

  			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

  			return toArray(tokenList);
  		},

  		/**
  		 * @namespace
  		 * @memberof Prism
  		 * @public
  		 */
  		hooks: {
  			all: {},

  			/**
  			 * Adds the given callback to the list of callbacks for the given hook.
  			 *
  			 * The callback will be invoked when the hook it is registered for is run.
  			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
  			 *
  			 * One callback function can be registered to multiple hooks and the same hook multiple times.
  			 *
  			 * @param {string} name The name of the hook.
  			 * @param {HookCallback} callback The callback function which is given environment variables.
  			 * @public
  			 */
  			add: function (name, callback) {
  				var hooks = _.hooks.all;

  				hooks[name] = hooks[name] || [];

  				hooks[name].push(callback);
  			},

  			/**
  			 * Runs a hook invoking all registered callbacks with the given environment variables.
  			 *
  			 * Callbacks will be invoked synchronously and in the order in which they were registered.
  			 *
  			 * @param {string} name The name of the hook.
  			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
  			 * @public
  			 */
  			run: function (name, env) {
  				var callbacks = _.hooks.all[name];

  				if (!callbacks || !callbacks.length) {
  					return;
  				}

  				for (var i = 0, callback; (callback = callbacks[i++]);) {
  					callback(env);
  				}
  			}
  		},

  		Token: Token
  	};
  	_self.Prism = _;


  	// Typescript note:
  	// The following can be used to import the Token type in JSDoc:
  	//
  	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

  	/**
  	 * Creates a new token.
  	 *
  	 * @param {string} type See {@link Token#type type}
  	 * @param {string | TokenStream} content See {@link Token#content content}
  	 * @param {string|string[]} [alias] The alias(es) of the token.
  	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
  	 * @class
  	 * @global
  	 * @public
  	 */
  	function Token(type, content, alias, matchedStr) {
  		/**
  		 * The type of the token.
  		 *
  		 * This is usually the key of a pattern in a {@link Grammar}.
  		 *
  		 * @type {string}
  		 * @see GrammarToken
  		 * @public
  		 */
  		this.type = type;
  		/**
  		 * The strings or tokens contained by this token.
  		 *
  		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
  		 *
  		 * @type {string | TokenStream}
  		 * @public
  		 */
  		this.content = content;
  		/**
  		 * The alias(es) of the token.
  		 *
  		 * @type {string|string[]}
  		 * @see GrammarToken
  		 * @public
  		 */
  		this.alias = alias;
  		// Copy of the full string this token was created from
  		this.length = (matchedStr || '').length | 0;
  	}

  	/**
  	 * A token stream is an array of strings and {@link Token Token} objects.
  	 *
  	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
  	 * them.
  	 *
  	 * 1. No adjacent strings.
  	 * 2. No empty strings.
  	 *
  	 *    The only exception here is the token stream that only contains the empty string and nothing else.
  	 *
  	 * @typedef {Array<string | Token>} TokenStream
  	 * @global
  	 * @public
  	 */

  	/**
  	 * Converts the given token or token stream to an HTML representation.
  	 *
  	 * The following hooks will be run:
  	 * 1. `wrap`: On each {@link Token}.
  	 *
  	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
  	 * @param {string} language The name of current language.
  	 * @returns {string} The HTML representation of the token or token stream.
  	 * @memberof Token
  	 * @static
  	 */
  	Token.stringify = function stringify(o, language) {
  		if (typeof o == 'string') {
  			return o;
  		}
  		if (Array.isArray(o)) {
  			var s = '';
  			o.forEach(function (e) {
  				s += stringify(e, language);
  			});
  			return s;
  		}

  		var env = {
  			type: o.type,
  			content: stringify(o.content, language),
  			tag: 'span',
  			classes: ['token', o.type],
  			attributes: {},
  			language: language
  		};

  		var aliases = o.alias;
  		if (aliases) {
  			if (Array.isArray(aliases)) {
  				Array.prototype.push.apply(env.classes, aliases);
  			} else {
  				env.classes.push(aliases);
  			}
  		}

  		_.hooks.run('wrap', env);

  		var attributes = '';
  		for (var name in env.attributes) {
  			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
  		}

  		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  	};

  	/**
  	 * @param {RegExp} pattern
  	 * @param {number} pos
  	 * @param {string} text
  	 * @param {boolean} lookbehind
  	 * @returns {RegExpExecArray | null}
  	 */
  	function matchPattern(pattern, pos, text, lookbehind) {
  		pattern.lastIndex = pos;
  		var match = pattern.exec(text);
  		if (match && lookbehind && match[1]) {
  			// change the match to remove the text matched by the Prism lookbehind group
  			var lookbehindLength = match[1].length;
  			match.index += lookbehindLength;
  			match[0] = match[0].slice(lookbehindLength);
  		}
  		return match;
  	}

  	/**
  	 * @param {string} text
  	 * @param {LinkedList<string | Token>} tokenList
  	 * @param {any} grammar
  	 * @param {LinkedListNode<string | Token>} startNode
  	 * @param {number} startPos
  	 * @param {RematchOptions} [rematch]
  	 * @returns {void}
  	 * @private
  	 *
  	 * @typedef RematchOptions
  	 * @property {string} cause
  	 * @property {number} reach
  	 */
  	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
  		for (var token in grammar) {
  			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
  				continue;
  			}

  			var patterns = grammar[token];
  			patterns = Array.isArray(patterns) ? patterns : [patterns];

  			for (var j = 0; j < patterns.length; ++j) {
  				if (rematch && rematch.cause == token + ',' + j) {
  					return;
  				}

  				var patternObj = patterns[j];
  				var inside = patternObj.inside;
  				var lookbehind = !!patternObj.lookbehind;
  				var greedy = !!patternObj.greedy;
  				var alias = patternObj.alias;

  				if (greedy && !patternObj.pattern.global) {
  					// Without the global flag, lastIndex won't work
  					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
  					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
  				}

  				/** @type {RegExp} */
  				var pattern = patternObj.pattern || patternObj;

  				for ( // iterate the token list and keep track of the current token/string position
  					var currentNode = startNode.next, pos = startPos;
  					currentNode !== tokenList.tail;
  					pos += currentNode.value.length, currentNode = currentNode.next
  				) {

  					if (rematch && pos >= rematch.reach) {
  						break;
  					}

  					var str = currentNode.value;

  					if (tokenList.length > text.length) {
  						// Something went terribly wrong, ABORT, ABORT!
  						return;
  					}

  					if (str instanceof Token) {
  						continue;
  					}

  					var removeCount = 1; // this is the to parameter of removeBetween
  					var match;

  					if (greedy) {
  						match = matchPattern(pattern, pos, text, lookbehind);
  						if (!match || match.index >= text.length) {
  							break;
  						}

  						var from = match.index;
  						var to = match.index + match[0].length;
  						var p = pos;

  						// find the node that contains the match
  						p += currentNode.value.length;
  						while (from >= p) {
  							currentNode = currentNode.next;
  							p += currentNode.value.length;
  						}
  						// adjust pos (and p)
  						p -= currentNode.value.length;
  						pos = p;

  						// the current node is a Token, then the match starts inside another Token, which is invalid
  						if (currentNode.value instanceof Token) {
  							continue;
  						}

  						// find the last node which is affected by this match
  						for (
  							var k = currentNode;
  							k !== tokenList.tail && (p < to || typeof k.value === 'string');
  							k = k.next
  						) {
  							removeCount++;
  							p += k.value.length;
  						}
  						removeCount--;

  						// replace with the new match
  						str = text.slice(pos, p);
  						match.index -= pos;
  					} else {
  						match = matchPattern(pattern, 0, str, lookbehind);
  						if (!match) {
  							continue;
  						}
  					}

  					// eslint-disable-next-line no-redeclare
  					var from = match.index;
  					var matchStr = match[0];
  					var before = str.slice(0, from);
  					var after = str.slice(from + matchStr.length);

  					var reach = pos + str.length;
  					if (rematch && reach > rematch.reach) {
  						rematch.reach = reach;
  					}

  					var removeFrom = currentNode.prev;

  					if (before) {
  						removeFrom = addAfter(tokenList, removeFrom, before);
  						pos += before.length;
  					}

  					removeRange(tokenList, removeFrom, removeCount);

  					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
  					currentNode = addAfter(tokenList, removeFrom, wrapped);

  					if (after) {
  						addAfter(tokenList, currentNode, after);
  					}

  					if (removeCount > 1) {
  						// at least one Token object was removed, so we have to do some rematching
  						// this can only happen if the current pattern is greedy

  						/** @type {RematchOptions} */
  						var nestedRematch = {
  							cause: token + ',' + j,
  							reach: reach
  						};
  						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

  						// the reach might have been extended because of the rematching
  						if (rematch && nestedRematch.reach > rematch.reach) {
  							rematch.reach = nestedRematch.reach;
  						}
  					}
  				}
  			}
  		}
  	}

  	/**
  	 * @typedef LinkedListNode
  	 * @property {T} value
  	 * @property {LinkedListNode<T> | null} prev The previous node.
  	 * @property {LinkedListNode<T> | null} next The next node.
  	 * @template T
  	 * @private
  	 */

  	/**
  	 * @template T
  	 * @private
  	 */
  	function LinkedList() {
  		/** @type {LinkedListNode<T>} */
  		var head = { value: null, prev: null, next: null };
  		/** @type {LinkedListNode<T>} */
  		var tail = { value: null, prev: head, next: null };
  		head.next = tail;

  		/** @type {LinkedListNode<T>} */
  		this.head = head;
  		/** @type {LinkedListNode<T>} */
  		this.tail = tail;
  		this.length = 0;
  	}

  	/**
  	 * Adds a new node with the given value to the list.
  	 *
  	 * @param {LinkedList<T>} list
  	 * @param {LinkedListNode<T>} node
  	 * @param {T} value
  	 * @returns {LinkedListNode<T>} The added node.
  	 * @template T
  	 */
  	function addAfter(list, node, value) {
  		// assumes that node != list.tail && values.length >= 0
  		var next = node.next;

  		var newNode = { value: value, prev: node, next: next };
  		node.next = newNode;
  		next.prev = newNode;
  		list.length++;

  		return newNode;
  	}
  	/**
  	 * Removes `count` nodes after the given node. The given node will not be removed.
  	 *
  	 * @param {LinkedList<T>} list
  	 * @param {LinkedListNode<T>} node
  	 * @param {number} count
  	 * @template T
  	 */
  	function removeRange(list, node, count) {
  		var next = node.next;
  		for (var i = 0; i < count && next !== list.tail; i++) {
  			next = next.next;
  		}
  		node.next = next;
  		next.prev = node;
  		list.length -= i;
  	}
  	/**
  	 * @param {LinkedList<T>} list
  	 * @returns {T[]}
  	 * @template T
  	 */
  	function toArray(list) {
  		var array = [];
  		var node = list.head.next;
  		while (node !== list.tail) {
  			array.push(node.value);
  			node = node.next;
  		}
  		return array;
  	}


  	if (!_self.document) {
  		if (!_self.addEventListener) {
  			// in Node.js
  			return _;
  		}

  		if (!_.disableWorkerMessageHandler) {
  			// In worker
  			_self.addEventListener('message', function (evt) {
  				var message = JSON.parse(evt.data);
  				var lang = message.language;
  				var code = message.code;
  				var immediateClose = message.immediateClose;

  				_self.postMessage(_.highlight(code, _.languages[lang], lang));
  				if (immediateClose) {
  					_self.close();
  				}
  			}, false);
  		}

  		return _;
  	}

  	// Get current script and highlight
  	var script = _.util.currentScript();

  	if (script) {
  		_.filename = script.src;

  		if (script.hasAttribute('data-manual')) {
  			_.manual = true;
  		}
  	}

  	function highlightAutomaticallyCallback() {
  		if (!_.manual) {
  			_.highlightAll();
  		}
  	}

  	if (!_.manual) {
  		// If the document state is "loading", then we'll use DOMContentLoaded.
  		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
  		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
  		// might take longer one animation frame to execute which can create a race condition where only some plugins have
  		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
  		// See https://github.com/PrismJS/prism/issues/2102
  		var readyState = document.readyState;
  		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
  			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
  		} else {
  			if (window.requestAnimationFrame) {
  				window.requestAnimationFrame(highlightAutomaticallyCallback);
  			} else {
  				window.setTimeout(highlightAutomaticallyCallback, 16);
  			}
  		}
  	}

  	return _;

  }(_self));

  if (module.exports) {
  	module.exports = Prism;
  }

  // hack for components to work correctly in node.js
  if (typeof commonjsGlobal !== 'undefined') {
  	commonjsGlobal.Prism = Prism;
  }

  // some additional documentation/types

  /**
   * The expansion of a simple `RegExp` literal to support additional properties.
   *
   * @typedef GrammarToken
   * @property {RegExp} pattern The regular expression of the token.
   * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
   * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
   * @property {boolean} [greedy=false] Whether the token is greedy.
   * @property {string|string[]} [alias] An optional alias or list of aliases.
   * @property {Grammar} [inside] The nested grammar of this token.
   *
   * The `inside` grammar will be used to tokenize the text value of each token of this kind.
   *
   * This can be used to make nested and even recursive language definitions.
   *
   * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
   * each another.
   * @global
   * @public
   */

  /**
   * @typedef Grammar
   * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
   * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
   * @global
   * @public
   */

  /**
   * A function which will invoked after an element was successfully highlighted.
   *
   * @callback HighlightCallback
   * @param {Element} element The element successfully highlighted.
   * @returns {void}
   * @global
   * @public
   */

  /**
   * @callback HookCallback
   * @param {Object<string, any>} env The environment variables of the hook.
   * @returns {void}
   * @global
   * @public
   */
  });

  (function (Prism) {
  	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  	// + LC_ALL, RANDOM, REPLY, SECONDS.
  	// + make sure PS1..4 are here as they are not always set,
  	// - some useless things.
  	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

  	var commandAfterHeredoc = {
  		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
  		lookbehind: true,
  		alias: 'punctuation', // this looks reasonably well in all themes
  		inside: null // see below
  	};

  	var insideString = {
  		'bash': commandAfterHeredoc,
  		'environment': {
  			pattern: RegExp('\\$' + envVars),
  			alias: 'constant'
  		},
  		'variable': [
  			// [0]: Arithmetic Environment
  			{
  				pattern: /\$?\(\([\s\S]+?\)\)/,
  				greedy: true,
  				inside: {
  					// If there is a $ sign at the beginning highlight $(( and )) as variable
  					'variable': [
  						{
  							pattern: /(^\$\(\([\s\S]+)\)\)/,
  							lookbehind: true
  						},
  						/^\$\(\(/
  					],
  					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
  					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
  					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
  					// If there is no $ sign at the beginning highlight (( and )) as punctuation
  					'punctuation': /\(\(?|\)\)?|,|;/
  				}
  			},
  			// [1]: Command Substitution
  			{
  				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
  				greedy: true,
  				inside: {
  					'variable': /^\$\(|^`|\)$|`$/
  				}
  			},
  			// [2]: Brace expansion
  			{
  				pattern: /\$\{[^}]+\}/,
  				greedy: true,
  				inside: {
  					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
  					'punctuation': /[\[\]]/,
  					'environment': {
  						pattern: RegExp('(\\{)' + envVars),
  						lookbehind: true,
  						alias: 'constant'
  					}
  				}
  			},
  			/\$(?:\w+|[#?*!@$])/
  		],
  		// Escape sequences from echo and printf's manuals, and escaped quotes.
  		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  	};

  	Prism.languages.bash = {
  		'shebang': {
  			pattern: /^#!\s*\/.*/,
  			alias: 'important'
  		},
  		'comment': {
  			pattern: /(^|[^"{\\$])#.*/,
  			lookbehind: true
  		},
  		'function-name': [
  			// a) function foo {
  			// b) foo() {
  			// c) function foo() {
  			// but not “foo {”
  			{
  				// a) and c)
  				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
  				lookbehind: true,
  				alias: 'function'
  			},
  			{
  				// b)
  				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
  				alias: 'function'
  			}
  		],
  		// Highlight variable names as variables in for and select beginnings.
  		'for-or-select': {
  			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
  			alias: 'variable',
  			lookbehind: true
  		},
  		// Highlight variable names as variables in the left-hand part
  		// of assignments (“=” and “+=”).
  		'assign-left': {
  			pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
  			inside: {
  				'environment': {
  					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
  					lookbehind: true,
  					alias: 'constant'
  				}
  			},
  			alias: 'variable',
  			lookbehind: true
  		},
  		// Highlight parameter names as variables
  		'parameter': {
  			pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
  			alias: 'variable',
  			lookbehind: true
  		},
  		'string': [
  			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
  			{
  				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
  				lookbehind: true,
  				greedy: true,
  				inside: insideString
  			},
  			// Here-document with quotes around the tag
  			// → No expansion (so no “inside”).
  			{
  				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
  				lookbehind: true,
  				greedy: true,
  				inside: {
  					'bash': commandAfterHeredoc
  				}
  			},
  			// “Normal” string
  			{
  				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
  				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
  				lookbehind: true,
  				greedy: true,
  				inside: insideString
  			},
  			{
  				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
  				pattern: /(^|[^$\\])'[^']*'/,
  				lookbehind: true,
  				greedy: true
  			},
  			{
  				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
  				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
  				greedy: true,
  				inside: {
  					'entity': insideString.entity
  				}
  			}
  		],
  		'environment': {
  			pattern: RegExp('\\$?' + envVars),
  			alias: 'constant'
  		},
  		'variable': insideString.variable,
  		'function': {
  			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
  			lookbehind: true
  		},
  		'keyword': {
  			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
  			lookbehind: true
  		},
  		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
  		'builtin': {
  			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
  			lookbehind: true,
  			// Alias added to make those easier to distinguish from strings.
  			alias: 'class-name'
  		},
  		'boolean': {
  			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
  			lookbehind: true
  		},
  		'file-descriptor': {
  			pattern: /\B&\d\b/,
  			alias: 'important'
  		},
  		'operator': {
  			// Lots of redirections here, but not just that.
  			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
  			inside: {
  				'file-descriptor': {
  					pattern: /^\d/,
  					alias: 'important'
  				}
  			}
  		},
  		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
  		'number': {
  			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
  			lookbehind: true
  		}
  	};

  	commandAfterHeredoc.inside = Prism.languages.bash;

  	/* Patterns in command substitution. */
  	var toBeCopied = [
  		'comment',
  		'function-name',
  		'for-or-select',
  		'assign-left',
  		'parameter',
  		'string',
  		'environment',
  		'function',
  		'keyword',
  		'builtin',
  		'boolean',
  		'file-descriptor',
  		'operator',
  		'punctuation',
  		'number'
  	];
  	var inside = insideString.variable[1].inside;
  	for (var i = 0; i < toBeCopied.length; i++) {
  		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  	}

  	Prism.languages.sh = Prism.languages.bash;
  	Prism.languages.shell = Prism.languages.bash;
  }(Prism));

  Prism.languages.clike = {
  	'comment': [
  		{
  			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
  			lookbehind: true,
  			greedy: true
  		},
  		{
  			pattern: /(^|[^\\:])\/\/.*/,
  			lookbehind: true,
  			greedy: true
  		}
  	],
  	'string': {
  		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
  		greedy: true
  	},
  	'class-name': {
  		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
  		lookbehind: true,
  		inside: {
  			'punctuation': /[.\\]/
  		}
  	},
  	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  	'boolean': /\b(?:false|true)\b/,
  	'function': /\b\w+(?=\()/,
  	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  	'punctuation': /[{}[\];(),.:]/
  };

  Prism.languages.markup = {
  	'comment': {
  		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
  		greedy: true
  	},
  	'prolog': {
  		pattern: /<\?[\s\S]+?\?>/,
  		greedy: true
  	},
  	'doctype': {
  		// https://www.w3.org/TR/xml/#NT-doctypedecl
  		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
  		greedy: true,
  		inside: {
  			'internal-subset': {
  				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
  				lookbehind: true,
  				greedy: true,
  				inside: null // see below
  			},
  			'string': {
  				pattern: /"[^"]*"|'[^']*'/,
  				greedy: true
  			},
  			'punctuation': /^<!|>$|[[\]]/,
  			'doctype-tag': /^DOCTYPE/i,
  			'name': /[^\s<>'"]+/
  		}
  	},
  	'cdata': {
  		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
  		greedy: true
  	},
  	'tag': {
  		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
  		greedy: true,
  		inside: {
  			'tag': {
  				pattern: /^<\/?[^\s>\/]+/,
  				inside: {
  					'punctuation': /^<\/?/,
  					'namespace': /^[^\s>\/:]+:/
  				}
  			},
  			'special-attr': [],
  			'attr-value': {
  				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
  				inside: {
  					'punctuation': [
  						{
  							pattern: /^=/,
  							alias: 'attr-equals'
  						},
  						{
  							pattern: /^(\s*)["']|["']$/,
  							lookbehind: true
  						}
  					]
  				}
  			},
  			'punctuation': /\/?>/,
  			'attr-name': {
  				pattern: /[^\s>\/]+/,
  				inside: {
  					'namespace': /^[^\s>\/:]+:/
  				}
  			}

  		}
  	},
  	'entity': [
  		{
  			pattern: /&[\da-z]{1,8};/i,
  			alias: 'named-entity'
  		},
  		/&#x?[\da-f]{1,8};/i
  	]
  };

  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
  	Prism.languages.markup['entity'];
  Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function (env) {

  	if (env.type === 'entity') {
  		env.attributes['title'] = env.content.replace(/&amp;/, '&');
  	}
  });

  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  	/**
  	 * Adds an inlined language to markup.
  	 *
  	 * An example of an inlined language is CSS with `<style>` tags.
  	 *
  	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
  	 * case insensitive.
  	 * @param {string} lang The language key.
  	 * @example
  	 * addInlined('style', 'css');
  	 */
  	value: function addInlined(tagName, lang) {
  		var includedCdataInside = {};
  		includedCdataInside['language-' + lang] = {
  			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
  			lookbehind: true,
  			inside: Prism.languages[lang]
  		};
  		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

  		var inside = {
  			'included-cdata': {
  				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
  				inside: includedCdataInside
  			}
  		};
  		inside['language-' + lang] = {
  			pattern: /[\s\S]+/,
  			inside: Prism.languages[lang]
  		};

  		var def = {};
  		def[tagName] = {
  			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
  			lookbehind: true,
  			greedy: true,
  			inside: inside
  		};

  		Prism.languages.insertBefore('markup', 'cdata', def);
  	}
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
  	/**
  	 * Adds an pattern to highlight languages embedded in HTML attributes.
  	 *
  	 * An example of an inlined language is CSS with `style` attributes.
  	 *
  	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
  	 * case insensitive.
  	 * @param {string} lang The language key.
  	 * @example
  	 * addAttribute('style', 'css');
  	 */
  	value: function (attrName, lang) {
  		Prism.languages.markup.tag.inside['special-attr'].push({
  			pattern: RegExp(
  				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
  				'i'
  			),
  			lookbehind: true,
  			inside: {
  				'attr-name': /^[^\s=]+/,
  				'attr-value': {
  					pattern: /=[\s\S]+/,
  					inside: {
  						'value': {
  							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
  							lookbehind: true,
  							alias: [lang, 'language-' + lang],
  							inside: Prism.languages[lang]
  						},
  						'punctuation': [
  							{
  								pattern: /^=/,
  								alias: 'attr-equals'
  							},
  							/"|'/
  						]
  					}
  				}
  			}
  		});
  	}
  });

  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;

  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.ssml = Prism.languages.xml;
  Prism.languages.atom = Prism.languages.xml;
  Prism.languages.rss = Prism.languages.xml;

  Prism.languages.javascript = Prism.languages.extend('clike', {
  	'class-name': [
  		Prism.languages.clike['class-name'],
  		{
  			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
  			lookbehind: true
  		}
  	],
  	'keyword': [
  		{
  			pattern: /((?:^|\})\s*)catch\b/,
  			lookbehind: true
  		},
  		{
  			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
  			lookbehind: true
  		},
  	],
  	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  	'number': {
  		pattern: RegExp(
  			/(^|[^\w$])/.source +
  			'(?:' +
  			(
  				// constant
  				/NaN|Infinity/.source +
  				'|' +
  				// binary integer
  				/0[bB][01]+(?:_[01]+)*n?/.source +
  				'|' +
  				// octal integer
  				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
  				'|' +
  				// hexadecimal integer
  				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
  				'|' +
  				// decimal bigint
  				/\d+(?:_\d+)*n/.source +
  				'|' +
  				// decimal number (integer or float) but no bigint
  				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
  			) +
  			')' +
  			/(?![\w$])/.source
  		),
  		lookbehind: true
  	},
  	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });

  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

  Prism.languages.insertBefore('javascript', 'keyword', {
  	'regex': {
  		pattern: RegExp(
  			// lookbehind
  			// eslint-disable-next-line regexp/no-dupe-characters-character-class
  			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
  			// Regex pattern:
  			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
  			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
  			// with the only syntax, so we have to define 2 different regex patterns.
  			/\//.source +
  			'(?:' +
  			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
  			'|' +
  			// `v` flag syntax. This supports 3 levels of nested character classes.
  			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
  			')' +
  			// lookahead
  			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
  		),
  		lookbehind: true,
  		greedy: true,
  		inside: {
  			'regex-source': {
  				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
  				lookbehind: true,
  				alias: 'language-regex',
  				inside: Prism.languages.regex
  			},
  			'regex-delimiter': /^\/|\/$/,
  			'regex-flags': /^[a-z]+$/,
  		}
  	},
  	// This must be declared before keyword because we use "function" inside the look-forward
  	'function-variable': {
  		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
  		alias: 'function'
  	},
  	'parameter': [
  		{
  			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		},
  		{
  			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
  			lookbehind: true,
  			inside: Prism.languages.javascript
  		}
  	],
  	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });

  Prism.languages.insertBefore('javascript', 'string', {
  	'hashbang': {
  		pattern: /^#!.*/,
  		greedy: true,
  		alias: 'comment'
  	},
  	'template-string': {
  		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
  		greedy: true,
  		inside: {
  			'template-punctuation': {
  				pattern: /^`|`$/,
  				alias: 'string'
  			},
  			'interpolation': {
  				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
  				lookbehind: true,
  				inside: {
  					'interpolation-punctuation': {
  						pattern: /^\$\{|\}$/,
  						alias: 'punctuation'
  					},
  					rest: Prism.languages.javascript
  				}
  			},
  			'string': /[\s\S]+/
  		}
  	},
  	'string-property': {
  		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
  		lookbehind: true,
  		greedy: true,
  		alias: 'property'
  	}
  });

  Prism.languages.insertBefore('javascript', 'operator', {
  	'literal-property': {
  		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
  		lookbehind: true,
  		alias: 'property'
  	},
  });

  if (Prism.languages.markup) {
  	Prism.languages.markup.tag.addInlined('script', 'javascript');

  	// add attribute support for all DOM events.
  	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
  	Prism.languages.markup.tag.addAttribute(
  		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  		'javascript'
  	);
  }

  Prism.languages.js = Prism.languages.javascript;

  (function (Prism) {

  	/**
  	 * Returns the placeholder for the given language id and index.
  	 *
  	 * @param {string} language
  	 * @param {string|number} index
  	 * @returns {string}
  	 */
  	function getPlaceholder(language, index) {
  		return '___' + language.toUpperCase() + index + '___';
  	}

  	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
  		buildPlaceholders: {
  			/**
  			 * Tokenize all inline templating expressions matching `placeholderPattern`.
  			 *
  			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
  			 * `true` will be replaced.
  			 *
  			 * @param {object} env The environment of the `before-tokenize` hook.
  			 * @param {string} language The language id.
  			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
  			 * @param {(match: string) => boolean} [replaceFilter]
  			 */
  			value: function (env, language, placeholderPattern, replaceFilter) {
  				if (env.language !== language) {
  					return;
  				}

  				var tokenStack = env.tokenStack = [];

  				env.code = env.code.replace(placeholderPattern, function (match) {
  					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
  						return match;
  					}
  					var i = tokenStack.length;
  					var placeholder;

  					// Check for existing strings
  					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
  						++i;
  					}

  					// Create a sparse array
  					tokenStack[i] = match;

  					return placeholder;
  				});

  				// Switch the grammar to markup
  				env.grammar = Prism.languages.markup;
  			}
  		},
  		tokenizePlaceholders: {
  			/**
  			 * Replace placeholders with proper tokens after tokenizing.
  			 *
  			 * @param {object} env The environment of the `after-tokenize` hook.
  			 * @param {string} language The language id.
  			 */
  			value: function (env, language) {
  				if (env.language !== language || !env.tokenStack) {
  					return;
  				}

  				// Switch the grammar back
  				env.grammar = Prism.languages[language];

  				var j = 0;
  				var keys = Object.keys(env.tokenStack);

  				function walkTokens(tokens) {
  					for (var i = 0; i < tokens.length; i++) {
  						// all placeholders are replaced already
  						if (j >= keys.length) {
  							break;
  						}

  						var token = tokens[i];
  						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
  							var k = keys[j];
  							var t = env.tokenStack[k];
  							var s = typeof token === 'string' ? token : token.content;
  							var placeholder = getPlaceholder(language, k);

  							var index = s.indexOf(placeholder);
  							if (index > -1) {
  								++j;

  								var before = s.substring(0, index);
  								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
  								var after = s.substring(index + placeholder.length);

  								var replacement = [];
  								if (before) {
  									replacement.push.apply(replacement, walkTokens([before]));
  								}
  								replacement.push(middle);
  								if (after) {
  									replacement.push.apply(replacement, walkTokens([after]));
  								}

  								if (typeof token === 'string') {
  									tokens.splice.apply(tokens, [i, 1].concat(replacement));
  								} else {
  									token.content = replacement;
  								}
  							}
  						} else if (token.content /* && typeof token.content !== 'string' */) {
  							walkTokens(token.content);
  						}
  					}

  					return tokens;
  				}

  				walkTokens(env.tokens);
  			}
  		}
  	});

  }(Prism));

  /**
   * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
   * Modified by Miles Johnson: http://milesj.me
   * Rewritten by Tom Pavelec
   *
   * Supports PHP 5.3 - 8.0
   */
  (function (Prism) {
  	var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
  	var constant = [
  		{
  			pattern: /\b(?:false|true)\b/i,
  			alias: 'boolean'
  		},
  		{
  			pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
  			greedy: true,
  			lookbehind: true,
  		},
  		{
  			pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
  			greedy: true,
  			lookbehind: true,
  		},
  		/\b(?:null)\b/i,
  		/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
  	];
  	var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
  	var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
  	var punctuation = /[{}\[\](),:;]/;

  	Prism.languages.php = {
  		'delimiter': {
  			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
  			alias: 'important'
  		},
  		'comment': comment,
  		'variable': /\$+(?:\w+\b|(?=\{))/,
  		'package': {
  			pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
  			lookbehind: true,
  			inside: {
  				'punctuation': /\\/
  			}
  		},
  		'class-name-definition': {
  			pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
  			lookbehind: true,
  			alias: 'class-name'
  		},
  		'function-definition': {
  			pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
  			lookbehind: true,
  			alias: 'function'
  		},
  		'keyword': [
  			{
  				pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
  				alias: 'type-casting',
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
  				alias: 'type-hint',
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
  				alias: 'return-type',
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
  				alias: 'type-declaration',
  				greedy: true
  			},
  			{
  				pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
  				alias: 'type-declaration',
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /\b(?:parent|self|static)(?=\s*::)/i,
  				alias: 'static-context',
  				greedy: true
  			},
  			{
  				// yield from
  				pattern: /(\byield\s+)from\b/i,
  				lookbehind: true
  			},
  			// `class` is always a keyword unlike other keywords
  			/\bclass\b/i,
  			{
  				// https://www.php.net/manual/en/reserved.keywords.php
  				//
  				// keywords cannot be preceded by "->"
  				// the complex lookbehind means `(?<!(?:->|::)\s*)`
  				pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
  				lookbehind: true
  			}
  		],
  		'argument-name': {
  			pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
  			lookbehind: true
  		},
  		'class-name': [
  			{
  				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
  				greedy: true
  			},
  			{
  				pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
  				alias: 'class-name-fully-qualified',
  				greedy: true,
  				lookbehind: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			},
  			{
  				pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
  				alias: 'class-name-fully-qualified',
  				greedy: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			},
  			{
  				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
  				alias: 'class-name-fully-qualified',
  				greedy: true,
  				lookbehind: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			},
  			{
  				pattern: /\b[a-z_]\w*(?=\s*\$)/i,
  				alias: 'type-declaration',
  				greedy: true
  			},
  			{
  				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
  				alias: ['class-name-fully-qualified', 'type-declaration'],
  				greedy: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			},
  			{
  				pattern: /\b[a-z_]\w*(?=\s*::)/i,
  				alias: 'static-context',
  				greedy: true
  			},
  			{
  				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
  				alias: ['class-name-fully-qualified', 'static-context'],
  				greedy: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			},
  			{
  				pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
  				alias: 'type-hint',
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
  				alias: ['class-name-fully-qualified', 'type-hint'],
  				greedy: true,
  				lookbehind: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			},
  			{
  				pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
  				alias: 'return-type',
  				greedy: true,
  				lookbehind: true
  			},
  			{
  				pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
  				alias: ['class-name-fully-qualified', 'return-type'],
  				greedy: true,
  				lookbehind: true,
  				inside: {
  					'punctuation': /\\/
  				}
  			}
  		],
  		'constant': constant,
  		'function': {
  			pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
  			lookbehind: true,
  			inside: {
  				'punctuation': /\\/
  			}
  		},
  		'property': {
  			pattern: /(->\s*)\w+/,
  			lookbehind: true
  		},
  		'number': number,
  		'operator': operator,
  		'punctuation': punctuation
  	};

  	var string_interpolation = {
  		pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
  		lookbehind: true,
  		inside: Prism.languages.php
  	};

  	var string = [
  		{
  			pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
  			alias: 'nowdoc-string',
  			greedy: true,
  			inside: {
  				'delimiter': {
  					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
  					alias: 'symbol',
  					inside: {
  						'punctuation': /^<<<'?|[';]$/
  					}
  				}
  			}
  		},
  		{
  			pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
  			alias: 'heredoc-string',
  			greedy: true,
  			inside: {
  				'delimiter': {
  					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
  					alias: 'symbol',
  					inside: {
  						'punctuation': /^<<<"?|[";]$/
  					}
  				},
  				'interpolation': string_interpolation
  			}
  		},
  		{
  			pattern: /`(?:\\[\s\S]|[^\\`])*`/,
  			alias: 'backtick-quoted-string',
  			greedy: true
  		},
  		{
  			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
  			alias: 'single-quoted-string',
  			greedy: true
  		},
  		{
  			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
  			alias: 'double-quoted-string',
  			greedy: true,
  			inside: {
  				'interpolation': string_interpolation
  			}
  		}
  	];

  	Prism.languages.insertBefore('php', 'variable', {
  		'string': string,
  		'attribute': {
  			pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
  			greedy: true,
  			inside: {
  				'attribute-content': {
  					pattern: /^(#\[)[\s\S]+(?=\]$)/,
  					lookbehind: true,
  					// inside can appear subset of php
  					inside: {
  						'comment': comment,
  						'string': string,
  						'attribute-class-name': [
  							{
  								pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
  								alias: 'class-name',
  								greedy: true,
  								lookbehind: true
  							},
  							{
  								pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
  								alias: [
  									'class-name',
  									'class-name-fully-qualified'
  								],
  								greedy: true,
  								lookbehind: true,
  								inside: {
  									'punctuation': /\\/
  								}
  							}
  						],
  						'constant': constant,
  						'number': number,
  						'operator': operator,
  						'punctuation': punctuation
  					}
  				},
  				'delimiter': {
  					pattern: /^#\[|\]$/,
  					alias: 'punctuation'
  				}
  			}
  		},
  	});

  	Prism.hooks.add('before-tokenize', function (env) {
  		if (!/<\?/.test(env.code)) {
  			return;
  		}

  		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
  		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
  	});

  	Prism.hooks.add('after-tokenize', function (env) {
  		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
  	});

  }(Prism));

  Prism.languages.go = Prism.languages.extend('clike', {
  	'string': {
  		pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
  		lookbehind: true,
  		greedy: true
  	},
  	'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  	'boolean': /\b(?:_|false|iota|nil|true)\b/,
  	'number': [
  		// binary and octal integers
  		/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
  		// hexadecimal integers and floats
  		/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
  		// decimal integers and floats
  		/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  	],
  	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  	'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
  });

  Prism.languages.insertBefore('go', 'string', {
  	'char': {
  		pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
  		greedy: true
  	}
  });

  delete Prism.languages.go['class-name'];

  /**
   * Original by Samuel Flores
   *
   * Adds the following new token classes:
   *     constant, builtin, variable, symbol, regex
   */
  (function (Prism) {
  	Prism.languages.ruby = Prism.languages.extend('clike', {
  		'comment': {
  			pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
  			greedy: true
  		},
  		'class-name': {
  			pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
  			lookbehind: true,
  			inside: {
  				'punctuation': /[.\\]/
  			}
  		},
  		'keyword': /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
  		'operator': /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
  		'punctuation': /[(){}[\].,;]/,
  	});

  	Prism.languages.insertBefore('ruby', 'operator', {
  		'double-colon': {
  			pattern: /::/,
  			alias: 'punctuation'
  		},
  	});

  	var interpolation = {
  		pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
  		lookbehind: true,
  		inside: {
  			'content': {
  				pattern: /^(#\{)[\s\S]+(?=\}$)/,
  				lookbehind: true,
  				inside: Prism.languages.ruby
  			},
  			'delimiter': {
  				pattern: /^#\{|\}$/,
  				alias: 'punctuation'
  			}
  		}
  	};

  	delete Prism.languages.ruby.function;

  	var percentExpression = '(?:' + [
  		/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
  		/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
  		/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
  		/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
  		/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
  	].join('|') + ')';

  	var symbolName = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;

  	Prism.languages.insertBefore('ruby', 'keyword', {
  		'regex-literal': [
  			{
  				pattern: RegExp(/%r/.source + percentExpression + /[egimnosux]{0,6}/.source),
  				greedy: true,
  				inside: {
  					'interpolation': interpolation,
  					'regex': /[\s\S]+/
  				}
  			},
  			{
  				pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
  				lookbehind: true,
  				greedy: true,
  				inside: {
  					'interpolation': interpolation,
  					'regex': /[\s\S]+/
  				}
  			}
  		],
  		'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
  		'symbol': [
  			{
  				pattern: RegExp(/(^|[^:]):/.source + symbolName),
  				lookbehind: true,
  				greedy: true
  			},
  			{
  				pattern: RegExp(/([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source),
  				lookbehind: true,
  				greedy: true
  			},
  		],
  		'method-definition': {
  			pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
  			lookbehind: true,
  			inside: {
  				'function': /\b\w+$/,
  				'keyword': /^self\b/,
  				'class-name': /^\w+/,
  				'punctuation': /\./
  			}
  		}
  	});

  	Prism.languages.insertBefore('ruby', 'string', {
  		'string-literal': [
  			{
  				pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
  				greedy: true,
  				inside: {
  					'interpolation': interpolation,
  					'string': /[\s\S]+/
  				}
  			},
  			{
  				pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
  				greedy: true,
  				inside: {
  					'interpolation': interpolation,
  					'string': /[\s\S]+/
  				}
  			},
  			{
  				pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
  				alias: 'heredoc-string',
  				greedy: true,
  				inside: {
  					'delimiter': {
  						pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
  						inside: {
  							'symbol': /\b\w+/,
  							'punctuation': /^<<[-~]?/
  						}
  					},
  					'interpolation': interpolation,
  					'string': /[\s\S]+/
  				}
  			},
  			{
  				pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
  				alias: 'heredoc-string',
  				greedy: true,
  				inside: {
  					'delimiter': {
  						pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
  						inside: {
  							'symbol': /\b\w+/,
  							'punctuation': /^<<[-~]?'|'$/,
  						}
  					},
  					'string': /[\s\S]+/
  				}
  			}
  		],
  		'command-literal': [
  			{
  				pattern: RegExp(/%x/.source + percentExpression),
  				greedy: true,
  				inside: {
  					'interpolation': interpolation,
  					'command': {
  						pattern: /[\s\S]+/,
  						alias: 'string'
  					}
  				}
  			},
  			{
  				pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
  				greedy: true,
  				inside: {
  					'interpolation': interpolation,
  					'command': {
  						pattern: /[\s\S]+/,
  						alias: 'string'
  					}
  				}
  			}
  		]
  	});

  	delete Prism.languages.ruby.string;

  	Prism.languages.insertBefore('ruby', 'number', {
  		'builtin': /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
  		'constant': /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
  	});

  	Prism.languages.rb = Prism.languages.ruby;
  }(Prism));

  // https://ocaml.org/manual/lex.html

  Prism.languages.ocaml = {
  	'comment': {
  		pattern: /\(\*[\s\S]*?\*\)/,
  		greedy: true
  	},
  	'char': {
  		pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
  		greedy: true
  	},
  	'string': [
  		{
  			pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
  			greedy: true
  		},
  		{
  			pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
  			greedy: true
  		}
  	],
  	'number': [
  		// binary and octal
  		/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
  		// hexadecimal
  		/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
  		// decimal
  		/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
  	],
  	'directive': {
  		pattern: /\B#\w+/,
  		alias: 'property'
  	},
  	'label': {
  		pattern: /\B~\w+/,
  		alias: 'property'
  	},
  	'type-variable': {
  		pattern: /\B'\w+/,
  		alias: 'function'
  	},
  	'variant': {
  		pattern: /`\w+/,
  		alias: 'symbol'
  	},
  	// For the list of keywords and operators,
  	// see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  	'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  	'boolean': /\b(?:false|true)\b/,

  	'operator-like-punctuation': {
  		pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
  		alias: 'punctuation'
  	},
  	// Custom operators are allowed
  	'operator': /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  	'punctuation': /;;|::|[(){}\[\].,:;#]|\b_\b/
  };

  (function (Prism) {

  	var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

  	// full package (optional) + parent classes (optional)
  	var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

  	// based on the java naming conventions
  	var className = {
  		pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
  		lookbehind: true,
  		inside: {
  			'namespace': {
  				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
  				inside: {
  					'punctuation': /\./
  				}
  			},
  			'punctuation': /\./
  		}
  	};

  	Prism.languages.java = Prism.languages.extend('clike', {
  		'string': {
  			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
  			lookbehind: true,
  			greedy: true
  		},
  		'class-name': [
  			className,
  			{
  				// variables, parameters, and constructor references
  				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
  				pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
  				lookbehind: true,
  				inside: className.inside
  			},
  			{
  				// class names based on keyword
  				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
  				pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
  				lookbehind: true,
  				inside: className.inside
  			}
  		],
  		'keyword': keywords,
  		'function': [
  			Prism.languages.clike.function,
  			{
  				pattern: /(::\s*)[a-z_]\w*/,
  				lookbehind: true
  			}
  		],
  		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
  		'operator': {
  			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
  			lookbehind: true
  		},
  		'constant': /\b[A-Z][A-Z_\d]+\b/
  	});

  	Prism.languages.insertBefore('java', 'string', {
  		'triple-quoted-string': {
  			// http://openjdk.java.net/jeps/355#Description
  			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
  			greedy: true,
  			alias: 'string'
  		},
  		'char': {
  			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
  			greedy: true
  		}
  	});

  	Prism.languages.insertBefore('java', 'class-name', {
  		'annotation': {
  			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
  			lookbehind: true,
  			alias: 'punctuation'
  		},
  		'generics': {
  			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
  			inside: {
  				'class-name': className,
  				'keyword': keywords,
  				'punctuation': /[<>(),.:]/,
  				'operator': /[?&|]/
  			}
  		},
  		'import': [
  			{
  				pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
  				lookbehind: true,
  				inside: {
  					'namespace': className.inside.namespace,
  					'punctuation': /\./,
  					'operator': /\*/,
  					'class-name': /\w+/
  				}
  			},
  			{
  				pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
  				lookbehind: true,
  				alias: 'static',
  				inside: {
  					'namespace': className.inside.namespace,
  					'static': /\b\w+$/,
  					'punctuation': /\./,
  					'operator': /\*/,
  					'class-name': /\w+/
  				}
  			}
  		],
  		'namespace': {
  			pattern: RegExp(
  				/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
  					.source.replace(/<keyword>/g, function () { return keywords.source; })),
  			lookbehind: true,
  			inside: {
  				'punctuation': /\./,
  			}
  		}
  	});
  }(Prism));

  Prism.languages.python = {
  	'comment': {
  		pattern: /(^|[^\\])#.*/,
  		lookbehind: true,
  		greedy: true
  	},
  	'string-interpolation': {
  		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
  		greedy: true,
  		inside: {
  			'interpolation': {
  				// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
  				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
  				lookbehind: true,
  				inside: {
  					'format-spec': {
  						pattern: /(:)[^:(){}]+(?=\}$)/,
  						lookbehind: true
  					},
  					'conversion-option': {
  						pattern: /![sra](?=[:}]$)/,
  						alias: 'punctuation'
  					},
  					rest: null
  				}
  			},
  			'string': /[\s\S]+/
  		}
  	},
  	'triple-quoted-string': {
  		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
  		greedy: true,
  		alias: 'string'
  	},
  	'string': {
  		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
  		greedy: true
  	},
  	'function': {
  		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
  		lookbehind: true
  	},
  	'class-name': {
  		pattern: /(\bclass\s+)\w+/i,
  		lookbehind: true
  	},
  	'decorator': {
  		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
  		lookbehind: true,
  		alias: ['annotation', 'punctuation'],
  		inside: {
  			'punctuation': /\./
  		}
  	},
  	'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  	'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  	'boolean': /\b(?:False|None|True)\b/,
  	'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  	'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  	'punctuation': /[{}[\];(),.:]/
  };

  Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

  Prism.languages.py = Prism.languages.python;

  Prism.languages.swift = {
  	'comment': {
  		// Nested comments are supported up to 2 levels
  		pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
  		lookbehind: true,
  		greedy: true
  	},
  	'string-literal': [
  		// https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
  		{
  			pattern: RegExp(
  				/(^|[^"#])/.source
  				+ '(?:'
  				// single-line string
  				+ /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source
  				+ '|'
  				// multi-line string
  				+ /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source
  				+ ')'
  				+ /(?!["#])/.source
  			),
  			lookbehind: true,
  			greedy: true,
  			inside: {
  				'interpolation': {
  					pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
  					lookbehind: true,
  					inside: null // see below
  				},
  				'interpolation-punctuation': {
  					pattern: /^\)|\\\($/,
  					alias: 'punctuation'
  				},
  				'punctuation': /\\(?=[\r\n])/,
  				'string': /[\s\S]+/
  			}
  		},
  		{
  			pattern: RegExp(
  				/(^|[^"#])(#+)/.source
  				+ '(?:'
  				// single-line string
  				+ /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source
  				+ '|'
  				// multi-line string
  				+ /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source
  				+ ')'
  				+ '\\2'
  			),
  			lookbehind: true,
  			greedy: true,
  			inside: {
  				'interpolation': {
  					pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
  					lookbehind: true,
  					inside: null // see below
  				},
  				'interpolation-punctuation': {
  					pattern: /^\)|\\#+\($/,
  					alias: 'punctuation'
  				},
  				'string': /[\s\S]+/
  			}
  		},
  	],

  	'directive': {
  		// directives with conditions
  		pattern: RegExp(
  			/#/.source
  			+ '(?:'
  			+ (
  				/(?:elseif|if)\b/.source
  				+ '(?:[ \t]*'
  				// This regex is a little complex. It's equivalent to this:
  				//   (?:![ \t]*)?(?:\b\w+\b(?:[ \t]*<round>)?|<round>)(?:[ \t]*(?:&&|\|\|))?
  				// where <round> is a general parentheses expression.
  				+ /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source
  				+ ')+'
  			)
  			+ '|'
  			+ /(?:else|endif)\b/.source
  			+ ')'
  		),
  		alias: 'property',
  		inside: {
  			'directive-name': /^#\w+/,
  			'boolean': /\b(?:false|true)\b/,
  			'number': /\b\d+(?:\.\d+)*\b/,
  			'operator': /!|&&|\|\||[<>]=?/,
  			'punctuation': /[(),]/
  		}
  	},
  	'literal': {
  		pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
  		alias: 'constant'
  	},
  	'other-directive': {
  		pattern: /#\w+\b/,
  		alias: 'property'
  	},

  	'attribute': {
  		pattern: /@\w+/,
  		alias: 'atrule'
  	},

  	'function-definition': {
  		pattern: /(\bfunc\s+)\w+/,
  		lookbehind: true,
  		alias: 'function'
  	},
  	'label': {
  		// https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
  		pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
  		lookbehind: true,
  		alias: 'important'
  	},

  	'keyword': /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  	'boolean': /\b(?:false|true)\b/,
  	'nil': {
  		pattern: /\bnil\b/,
  		alias: 'constant'
  	},

  	'short-argument': /\$\d+\b/,
  	'omit': {
  		pattern: /\b_\b/,
  		alias: 'keyword'
  	},
  	'number': /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,

  	// A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  	'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  	'function': /\b[a-z_]\w*(?=\s*\()/i,
  	'constant': /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,

  	// Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  	// https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  	// This regex only supports ASCII operators.
  	'operator': /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  	'punctuation': /[{}[\]();,.:\\]/
  };

  Prism.languages.swift['string-literal'].forEach(function (rule) {
  	rule.inside['interpolation'].inside = Prism.languages.swift;
  });

  (function (Prism) {

  	/**
  	 * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
  	 *
  	 * Note: This is a simple text based replacement. Be careful when using backreferences!
  	 *
  	 * @param {string} pattern the given pattern.
  	 * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
  	 * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
  	 * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
  	 */
  	function replace(pattern, replacements) {
  		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
  			return '(?:' + replacements[+index] + ')';
  		});
  	}
  	/**
  	 * @param {string} pattern
  	 * @param {string[]} replacements
  	 * @param {string} [flags]
  	 * @returns {RegExp}
  	 */
  	function re(pattern, replacements, flags) {
  		return RegExp(replace(pattern, replacements), flags || '');
  	}

  	/**
  	 * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
  	 *
  	 * @param {string} pattern
  	 * @param {number} depthLog2
  	 * @returns {string}
  	 */
  	function nested(pattern, depthLog2) {
  		for (var i = 0; i < depthLog2; i++) {
  			pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
  		}
  		return pattern.replace(/<<self>>/g, '[^\\s\\S]');
  	}

  	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
  	var keywordKinds = {
  		// keywords which represent a return or variable type
  		type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
  		// keywords which are used to declare a type
  		typeDeclaration: 'class enum interface record struct',
  		// contextual keywords
  		// ("var" and "dynamic" are missing because they are used like types)
  		contextual: 'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
  		// all other keywords
  		other: 'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
  	};

  	// keywords
  	function keywordsToPattern(words) {
  		return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
  	}
  	var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
  	var keywords = RegExp(keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other));
  	var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other);
  	var nonContextualKeywords = keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.other);

  	// types
  	var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
  	var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
  	var name = /@?\b[A-Za-z_]\w*\b/.source;
  	var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
  	var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
  	var array = /\[\s*(?:,\s*)*\]/.source;
  	var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
  	var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array]);
  	var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
  	var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);

  	var typeInside = {
  		'keyword': keywords,
  		'punctuation': /[<>()?,.:[\]]/
  	};

  	// strings & characters
  	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
  	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
  	var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source; // simplified pattern
  	var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
  	var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;


  	Prism.languages.csharp = Prism.languages.extend('clike', {
  		'string': [
  			{
  				pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
  				lookbehind: true,
  				greedy: true
  			},
  			{
  				pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
  				lookbehind: true,
  				greedy: true
  			}
  		],
  		'class-name': [
  			{
  				// Using static
  				// using static System.Math;
  				pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
  				lookbehind: true,
  				inside: typeInside
  			},
  			{
  				// Using alias (type)
  				// using Project = PC.MyCompany.Project;
  				pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
  				lookbehind: true,
  				inside: typeInside
  			},
  			{
  				// Using alias (alias)
  				// using Project = PC.MyCompany.Project;
  				pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
  				lookbehind: true
  			},
  			{
  				// Type declarations
  				// class Foo<A, B>
  				// interface Foo<out A, B>
  				pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
  				lookbehind: true,
  				inside: typeInside
  			},
  			{
  				// Single catch exception declaration
  				// catch(Foo)
  				// (things like catch(Foo e) is covered by variable declaration)
  				pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
  				lookbehind: true,
  				inside: typeInside
  			},
  			{
  				// Name of the type parameter of generic constraints
  				// where Foo : class
  				pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
  				lookbehind: true
  			},
  			{
  				// Casts and checks via as and is.
  				// as Foo<A>, is Bar<B>
  				// (things like if(a is Foo b) is covered by variable declaration)
  				pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
  				lookbehind: true,
  				inside: typeInside
  			},
  			{
  				// Variable, field and parameter declaration
  				// (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
  				pattern: re(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
  				inside: typeInside
  			}
  		],
  		'keyword': keywords,
  		// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
  		'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
  		'operator': />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
  		'punctuation': /\?\.?|::|[{}[\];(),.:]/
  	});

  	Prism.languages.insertBefore('csharp', 'number', {
  		'range': {
  			pattern: /\.\./,
  			alias: 'operator'
  		}
  	});

  	Prism.languages.insertBefore('csharp', 'punctuation', {
  		'named-parameter': {
  			pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
  			lookbehind: true,
  			alias: 'punctuation'
  		}
  	});

  	Prism.languages.insertBefore('csharp', 'class-name', {
  		'namespace': {
  			// namespace Foo.Bar {}
  			// using Foo.Bar;
  			pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
  			lookbehind: true,
  			inside: {
  				'punctuation': /\./
  			}
  		},
  		'type-expression': {
  			// default(Foo), typeof(Foo<Bar>), sizeof(int)
  			pattern: re(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
  			lookbehind: true,
  			alias: 'class-name',
  			inside: typeInside
  		},
  		'return-type': {
  			// Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
  			// int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
  			// int Foo => 0; int Foo { get; set } = 0;
  			pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
  			inside: typeInside,
  			alias: 'class-name'
  		},
  		'constructor-invocation': {
  			// new List<Foo<Bar[]>> { }
  			pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
  			lookbehind: true,
  			inside: typeInside,
  			alias: 'class-name'
  		},
  		/*'explicit-implementation': {
  			// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
  			pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
  			inside: classNameInside,
  			alias: 'class-name'
  		},*/
  		'generic-method': {
  			// foo<Bar>()
  			pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
  			inside: {
  				'function': re(/^<<0>>/.source, [name]),
  				'generic': {
  					pattern: RegExp(generic),
  					alias: 'class-name',
  					inside: typeInside
  				}
  			}
  		},
  		'type-list': {
  			// The list of types inherited or of generic constraints
  			// class Foo<F> : Bar, IList<FooBar>
  			// where F : Bar, IList<int>
  			pattern: re(
  				/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
  				[typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
  			),
  			lookbehind: true,
  			inside: {
  				'record-arguments': {
  					pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
  					lookbehind: true,
  					greedy: true,
  					inside: Prism.languages.csharp
  				},
  				'keyword': keywords,
  				'class-name': {
  					pattern: RegExp(typeExpression),
  					greedy: true,
  					inside: typeInside
  				},
  				'punctuation': /[,()]/
  			}
  		},
  		'preprocessor': {
  			pattern: /(^[\t ]*)#.*/m,
  			lookbehind: true,
  			alias: 'property',
  			inside: {
  				// highlight preprocessor directives as keywords
  				'directive': {
  					pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
  					lookbehind: true,
  					alias: 'keyword'
  				}
  			}
  		}
  	});

  	// attributes
  	var regularStringOrCharacter = regularString + '|' + character;
  	var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
  	var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);

  	// https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
  	var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
  	var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);

  	Prism.languages.insertBefore('csharp', 'class-name', {
  		'attribute': {
  			// Attributes
  			// [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
  			pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
  			lookbehind: true,
  			greedy: true,
  			inside: {
  				'target': {
  					pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
  					alias: 'keyword'
  				},
  				'attribute-arguments': {
  					pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
  					inside: Prism.languages.csharp
  				},
  				'class-name': {
  					pattern: RegExp(identifier),
  					inside: {
  						'punctuation': /\./
  					}
  				},
  				'punctuation': /[:,]/
  			}
  		}
  	});


  	// string interpolation
  	var formatString = /:[^}\r\n]+/.source;
  	// multi line
  	var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
  	var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
  	// single line
  	var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2);
  	var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);

  	function createInterpolationInside(interpolation, interpolationRound) {
  		return {
  			'interpolation': {
  				pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
  				lookbehind: true,
  				inside: {
  					'format-string': {
  						pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
  						lookbehind: true,
  						inside: {
  							'punctuation': /^:/
  						}
  					},
  					'punctuation': /^\{|\}$/,
  					'expression': {
  						pattern: /[\s\S]+/,
  						alias: 'language-csharp',
  						inside: Prism.languages.csharp
  					}
  				}
  			},
  			'string': /[\s\S]+/
  		};
  	}

  	Prism.languages.insertBefore('csharp', 'string', {
  		'interpolation-string': [
  			{
  				pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
  				lookbehind: true,
  				greedy: true,
  				inside: createInterpolationInside(mInterpolation, mInterpolationRound),
  			},
  			{
  				pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
  				lookbehind: true,
  				greedy: true,
  				inside: createInterpolationInside(sInterpolation, sInterpolationRound),
  			}
  		],
  		'char': {
  			pattern: RegExp(character),
  			greedy: true
  		}
  	});

  	Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;

  }(Prism));

  var CodeSnippet = /*#__PURE__*/function (_React$Component) {
    _inherits(CodeSnippet, _React$Component);
    var _super = _createSuper(CodeSnippet);
    function CodeSnippet(props) {
      _classCallCheck(this, CodeSnippet);
      return _super.call(this, props);
    }
    _createClass(CodeSnippet, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
          har = _this$props.har,
          target = _this$props.target,
          client = _this$props.client,
          prismLanguage = _this$props.prismLanguage,
          tabIndex = _this$props.tabIndex,
          passedRef = _this$props.passedRef,
          keypressHandler = _this$props.keypressHandler;

        // TODO: httpsnippet should expose isLanguageSupported() method
        // TODO: httpsnippet and prism should have mappings for single language prop

        var code = new HTTPSnippet__default["default"](har).convert(target, client);
        var codeHTML = {
          __html: "".concat(prismCore.highlight(code, prismCore.languages[prismLanguage], prismLanguage).replaceAll('<span', '<span role="text"'))
        };
        return /*#__PURE__*/React__default["default"].createElement("pre", {
          className: "language-".concat(this.props.prismLanguage),
          onKeyDown: keypressHandler
        }, /*#__PURE__*/React__default["default"].createElement("code", {
          className: "language-".concat(this.props.prismLanguage)
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          ref: passedRef,
          tabIndex: tabIndex,
          dangerouslySetInnerHTML: codeHTML
        })));
      }
    }]);
    return CodeSnippet;
  }(React__default["default"].Component);
  CodeSnippet.propTypes = {
    har: PropTypes__default["default"].object.isRequired,
    target: PropTypes__default["default"].string.isRequired,
    client: PropTypes__default["default"].string,
    showClientInTab: PropTypes__default["default"].bool,
    prismLanguage: PropTypes__default["default"].string.isRequired,
    tabIndex: PropTypes__default["default"].number,
    passedRef: PropTypes__default["default"].func,
    keypressHandler: PropTypes__default["default"].func
  };

  var CodeSnippetWidget = /*#__PURE__*/function (_React$Component) {
    _inherits(CodeSnippetWidget, _React$Component);
    var _super = _createSuper(CodeSnippetWidget);
    function CodeSnippetWidget(props) {
      var _this;
      _classCallCheck(this, CodeSnippetWidget);
      _this = _super.call(this, props);
      _this.setTabRef = function (element, index) {
        _this.tabRefs[index] = element;
      };
      _this.setContentRef = function (element, index) {
        _this.contentRefs[index] = element;
      };
      _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_this));
      _this.keypressHandler = _this.keypressHandler.bind(_assertThisInitialized(_this));
      _this.state = {
        activeTab: 0,
        active: props.har.method + props.har.url + 0
      };
      _this.tabRefs = [];
      _this.contentRefs = [];
      return _this;
    }
    _createClass(CodeSnippetWidget, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevProps.har.url !== this.props.har.url) {
          this.setState({
            active: this.getHarKey(this.props.har) + this.state.activeTab
          });
        }
        if (prevState.activeTab !== this.state.activeTab) {
          this.tabRefs[this.state.activeTab].focus();
        }
      }
    }, {
      key: "getSnippetKey",
      value: function getSnippetKey(snippet) {
        return "".concat(snippet.target).concat(snippet.client ? "-".concat(snippet.client) : "");
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(index) {
        this.setState({
          active: this.getHarKey(this.props.har) + index,
          activeTab: index
        });
      }
    }, {
      key: "keypressHandler",
      value: function keypressHandler(key, index, event) {
        var targetIndex = index;
        var lastIndex = this.props.snippets.length - 1;
        if (key === "ArrowUp" || key === "ArrowLeft") {
          if (index === 0) {
            targetIndex = lastIndex;
          } else {
            targetIndex = index - 1;
          }
        } else if (key === "ArrowRight" || key === "ArrowDown") {
          if (index === lastIndex) {
            targetIndex = 0;
          } else {
            targetIndex = index + 1;
          }
        } else if (key === "Enter") {
          this.contentRefs[this.state.activeTab].focus();
        } else if (key === "Tab" && event.shiftKey) {
          if (index !== 0) {
            event.preventDefault();
            this.contentRefs[this.state.activeTab].focus();
          }
        }
        this.setState({
          active: this.getHarKey(this.props.har) + targetIndex,
          activeTab: targetIndex
        });
      }
    }, {
      key: "contentKeypressHandler",
      value: function contentKeypressHandler(key, index, event) {
        var targetIndex = index;
        var lastIndex = this.props.snippets.length - 1;
        if (key === "Tab" && !event.shiftKey) {
          if (index !== lastIndex) {
            event.preventDefault();
            targetIndex = index + 1;
          }
        } else if (key === "Tab" && event.shiftKey) {
          if (index !== 0) {
            event.preventDefault();
            targetIndex = index - 1;
          }
        }
        this.setState({
          active: this.getHarKey(this.props.har) + targetIndex,
          activeTab: targetIndex
        });
      }
    }, {
      key: "getHarKey",
      value: function getHarKey(harObject) {
        return harObject.method + harObject.url;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var har = this.props.har;
        var harKey = this.getHarKey(har);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "tabs-component"
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "tabs-component-body"
        }, /*#__PURE__*/React__default["default"].createElement("ul", {
          role: "tablist",
          className: "tabs-component-tabs"
        }, this.props.snippets.map(function (snippet, index) {
          var snippetKey = _this2.getSnippetKey(snippet);
          return /*#__PURE__*/React__default["default"].createElement("li", {
            role: "tab",
            className: "tabs-component-tab" + (harKey + index == _this2.state.active ? " is-active" : ""),
            "aria-controls": "".concat(snippetKey + harKey),
            onKeyDown: function onKeyDown(e) {
              return _this2.keypressHandler(e.nativeEvent.code, index, e);
            },
            onClick: function onClick() {
              return _this2.clickHandler(index);
            },
            "aria-selected": harKey + index == _this2.state.active,
            tabIndex: harKey + index == _this2.state.active ? 0 : -1,
            ref: function ref(el) {
              return _this2.setTabRef(el, index);
            },
            key: index
          }, /*#__PURE__*/React__default["default"].createElement("a", {
            role: "presentation",
            className: "tabs-component-tab-a",
            id: harKey + index
          }, snippet.target, snippet.client && snippet.showClientInTab && " - ".concat(snippet.client)));
        })), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "tabs-component-panels"
        }, this.props.snippets.map(function (snippet, index) {
          var activeTab = harKey + index == _this2.state.active;
          var snippetKey = _this2.getSnippetKey(snippet);
          return /*#__PURE__*/React__default["default"].createElement("section", {
            hidden: !activeTab,
            role: "tabpanel",
            id: "".concat(snippetKey + harKey),
            key: index
          }, /*#__PURE__*/React__default["default"].createElement(CodeSnippet, _extends({
            tabIndex: activeTab ? 0 : -1,
            har: har,
            passedRef: function passedRef(el) {
              return _this2.setContentRef(el, index);
            },
            keypressHandler: function keypressHandler(e) {
              return _this2.contentKeypressHandler(e.nativeEvent.code, index, e);
            }
          }, snippet)));
        }))));
      }
    }]);
    return CodeSnippetWidget;
  }(React__default["default"].Component);
  CodeSnippetWidget.propTypes = {
    har: PropTypes__default["default"].object.isRequired,
    snippets: PropTypes__default["default"].array.isRequired
  };

  var index = {
    CodeSnippet: CodeSnippet,
    CodeSnippetWidget: CodeSnippetWidget
  };

  return index;

}));
