(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['react-apiembed'] = factory(global.React, global.PropTypes));
}(this, (function (React, PropTypes) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var hardyhar = createCommonjsModule(function (module, exports) {
	!function(e,t){t(exports);}(commonjsGlobal,function(e){var t="undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,n=!1;function o(){n=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,s=e.length;t<s;++t)r[t]=e[t],a[e.charCodeAt(t)]=t;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63;}function i(e,t,a){for(var s,n,o=[],i=t;i<a;i+=3)s=(e[i]<<16)+(e[i+1]<<8)+e[i+2],o.push(r[(n=s)>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return o.join("")}function u(e){var t;n||o();for(var a=e.length,s=a%3,u="",l=[],h=0,p=a-s;h<p;h+=16383)l.push(i(e,h,h+16383>p?p:h+16383));return 1===s?(t=e[a-1],u+=r[t>>2],u+=r[t<<4&63],u+="=="):2===s&&(t=(e[a-2]<<8)+e[a-1],u+=r[t>>10],u+=r[t>>4&63],u+=r[t<<2&63],u+="="),l.push(u),l.join("")}function l(e,t,r,a,s){var n,o,i=8*s-a-1,u=(1<<i)-1,l=u>>1,h=-7,p=r?s-1:0,c=r?-1:1,f=e[t+p];for(p+=c,n=f&(1<<-h)-1,f>>=-h,h+=i;h>0;n=256*n+e[t+p],p+=c,h-=8);for(o=n&(1<<-h)-1,n>>=-h,h+=a;h>0;o=256*o+e[t+p],p+=c,h-=8);if(0===n)n=1-l;else {if(n===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,a),n-=l;}return (f?-1:1)*o*Math.pow(2,n-a)}function h(e,t,r,a,s,n){var o,i,u,l=8*n-s-1,h=(1<<l)-1,p=h>>1,c=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,f=a?0:n-1,d=a?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+p>=1?c/u:c*Math.pow(2,1-p))*u>=2&&(o++,u/=2),o+p>=h?(i=0,o=h):o+p>=1?(i=(t*u-1)*Math.pow(2,s),o+=p):(i=t*Math.pow(2,p-1)*Math.pow(2,s),o=0));s>=8;e[r+f]=255&i,f+=d,i/=256,s-=8);for(o=o<<s|i,l+=s;l>0;e[r+f]=255&o,f+=d,o/=256,l-=8);e[r+f-d]|=128*m;}var p={}.toString,c=Array.isArray||function(e){return "[object Array]"==p.call(e)};function f(){return m.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function d(e,t){if(f()<t)throw new RangeError("Invalid typed array length");return m.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=m.prototype:(null===e&&(e=new m(t)),e.length=t),e}function m(e,t,r){if(!(m.TYPED_ARRAY_SUPPORT||this instanceof m))return new m(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return g(this,e)}return v(this,e,t,r)}function v(e,t,r,a){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return "undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,a){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(a||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===a?new Uint8Array(t):void 0===a?new Uint8Array(t,r):new Uint8Array(t,r,a);m.TYPED_ARRAY_SUPPORT?(e=t).__proto__=m.prototype:e=b(e,t);return e}(e,t,r,a):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!m.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var a=0|E(t,r),s=(e=d(e,a)).write(t,r);s!==a&&(e=e.slice(0,s));return e}(e,t,r):function(e,t){if(w(t)){var r=0|P(t.length);return 0===(e=d(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return "number"!=typeof t.length||(a=t.length)!=a?d(e,0):b(e,t);if("Buffer"===t.type&&c(t.data))return b(e,t.data)}var a;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function y(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function g(e,t){if(y(t),e=d(e,t<0?0:0|P(t)),!m.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function b(e,t){var r=t.length<0?0:0|P(t.length);e=d(e,r);for(var a=0;a<r;a+=1)e[a]=255&t[a];return e}function P(e){if(e>=f())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f().toString(16)+" bytes");return 0|e}function w(e){return !(null==e||!e._isBuffer)}function E(e,t){if(w(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return K(e).length;default:if(a)return Y(e).length;t=(""+t).toLowerCase(),a=!0;}}function j(e,t,r){var a=e[t];e[t]=e[r],e[r]=a;}function S(e,t,r,a,s){if(0===e.length)return -1;if("string"==typeof r?(a=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=s?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(s)return -1;r=e.length-1;}else if(r<0){if(!s)return -1;r=0;}if("string"==typeof t&&(t=m.from(t,a)),w(t))return 0===t.length?-1:O(e,t,r,a,s);if("number"==typeof t)return t&=255,m.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):O(e,[t],r,a,s);throw new TypeError("val must be string, number or Buffer")}function O(e,t,r,a,s){var n,o=1,i=e.length,u=t.length;if(void 0!==a&&("ucs2"===(a=String(a).toLowerCase())||"ucs-2"===a||"utf16le"===a||"utf-16le"===a)){if(e.length<2||t.length<2)return -1;o=2,i/=2,u/=2,r/=2;}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(s){var h=-1;for(n=r;n<i;n++)if(l(e,n)===l(t,-1===h?0:n-h)){if(-1===h&&(h=n),n-h+1===u)return h*o}else -1!==h&&(n-=n-h),h=-1;}else for(r+u>i&&(r=i-u),n=r;n>=0;n--){for(var p=!0,c=0;c<u;c++)if(l(e,n+c)!==l(t,c)){p=!1;break}if(p)return n}return -1}function k(e,t,r,a){r=Number(r)||0;var s=e.length-r;a?(a=Number(a))>s&&(a=s):a=s;var n=t.length;if(n%2!=0)throw new TypeError("Invalid hex string");a>n/2&&(a=n/2);for(var o=0;o<a;++o){var i=parseInt(t.substr(2*o,2),16);if(isNaN(i))return o;e[r+o]=i;}return o}function R(e,t,r,a){return G(Y(t,e.length-r),e,r,a)}function D(e,t,r,a){return G(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,a)}function _(e,t,r,a){return D(e,t,r,a)}function T(e,t,r,a){return G(K(t),e,r,a)}function x(e,t,r,a){return G(function(e,t){for(var r,a,s,n=[],o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),a=r>>8,s=r%256,n.push(s),n.push(a);return n}(t,e.length-r),e,r,a)}function $(e,t,r){return 0===t&&r===e.length?u(e):u(e.slice(t,r))}function q(e,t,r){r=Math.min(e.length,r);for(var a=[],s=t;s<r;){var n,o,i,u,l=e[s],h=null,p=l>239?4:l>223?3:l>191?2:1;if(s+p<=r)switch(p){case 1:l<128&&(h=l);break;case 2:128==(192&(n=e[s+1]))&&(u=(31&l)<<6|63&n)>127&&(h=u);break;case 3:n=e[s+1],o=e[s+2],128==(192&n)&&128==(192&o)&&(u=(15&l)<<12|(63&n)<<6|63&o)>2047&&(u<55296||u>57343)&&(h=u);break;case 4:n=e[s+1],o=e[s+2],i=e[s+3],128==(192&n)&&128==(192&o)&&128==(192&i)&&(u=(15&l)<<18|(63&n)<<12|(63&o)<<6|63&i)>65535&&u<1114112&&(h=u);}null===h?(h=65533,p=1):h>65535&&(h-=65536,a.push(h>>>10&1023|55296),h=56320|1023&h),a.push(h),s+=p;}return function(e){var t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);var r="",a=0;for(;a<t;)r+=String.fromCharCode.apply(String,e.slice(a,a+=A));return r}(a)}m.TYPED_ARRAY_SUPPORT=void 0===t.TYPED_ARRAY_SUPPORT||t.TYPED_ARRAY_SUPPORT,m.poolSize=8192,m._augment=function(e){return e.__proto__=m.prototype,e},m.from=function(e,t,r){return v(null,e,t,r)},m.TYPED_ARRAY_SUPPORT&&(m.prototype.__proto__=Uint8Array.prototype,m.__proto__=Uint8Array),m.alloc=function(e,t,r){return function(e,t,r,a){return y(t),t<=0?d(e,t):void 0!==r?"string"==typeof a?d(e,t).fill(r,a):d(e,t).fill(r):d(e,t)}(null,e,t,r)},m.allocUnsafe=function(e){return g(null,e)},m.allocUnsafeSlow=function(e){return g(null,e)},m.isBuffer=Z,m.compare=function(e,t){if(!w(e)||!w(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,a=t.length,s=0,n=Math.min(r,a);s<n;++s)if(e[s]!==t[s]){r=e[s],a=t[s];break}return r<a?-1:a<r?1:0},m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return !0;default:return !1}},m.concat=function(e,t){if(!c(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return m.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var a=m.allocUnsafe(t),s=0;for(r=0;r<e.length;++r){var n=e[r];if(!w(n))throw new TypeError('"list" argument must be an Array of Buffers');n.copy(a,s),s+=n.length;}return a},m.byteLength=E,m.prototype._isBuffer=!0,m.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)j(this,t,t+1);return this},m.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)j(this,t,t+3),j(this,t+1,t+2);return this},m.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)j(this,t,t+7),j(this,t+1,t+6),j(this,t+2,t+5),j(this,t+3,t+4);return this},m.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?q(this,0,e):function(e,t,r){var a=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return "";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return "";if((r>>>=0)<=(t>>>=0))return "";for(e||(e="utf8");;)switch(e){case"hex":return C(this,t,r);case"utf8":case"utf-8":return q(this,t,r);case"ascii":return F(this,t,r);case"latin1":case"binary":return U(this,t,r);case"base64":return $(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,t,r);default:if(a)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0;}}.apply(this,arguments)},m.prototype.equals=function(e){if(!w(e))throw new TypeError("Argument must be a Buffer");return this===e||0===m.compare(this,e)},m.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">"},m.prototype.compare=function(e,t,r,a,s){if(!w(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===a&&(a=0),void 0===s&&(s=this.length),t<0||r>e.length||a<0||s>this.length)throw new RangeError("out of range index");if(a>=s&&t>=r)return 0;if(a>=s)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,a>>>=0,s>>>=0,this===e)return 0;for(var n=s-a,o=r-t,i=Math.min(n,o),u=this.slice(a,s),l=e.slice(t,r),h=0;h<i;++h)if(u[h]!==l[h]){n=u[h],o=l[h];break}return n<o?-1:o<n?1:0},m.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},m.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},m.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},m.prototype.write=function(e,t,r,a){if(void 0===t)a="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)a=t,r=this.length,t=0;else {if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===a&&(a="utf8")):(a=r,r=void 0);}var s=this.length-t;if((void 0===r||r>s)&&(r=s),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var n=!1;;)switch(a){case"hex":return k(this,e,t,r);case"utf8":case"utf-8":return R(this,e,t,r);case"ascii":return D(this,e,t,r);case"latin1":case"binary":return _(this,e,t,r);case"base64":return T(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,t,r);default:if(n)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),n=!0;}},m.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var A=4096;function F(e,t,r){var a="";r=Math.min(e.length,r);for(var s=t;s<r;++s)a+=String.fromCharCode(127&e[s]);return a}function U(e,t,r){var a="";r=Math.min(e.length,r);for(var s=t;s<r;++s)a+=String.fromCharCode(e[s]);return a}function C(e,t,r){var a=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>a)&&(r=a);for(var s="",n=t;n<r;++n)s+=J(e[n]);return s}function N(e,t,r){for(var a=e.slice(t,r),s="",n=0;n<a.length;n+=2)s+=String.fromCharCode(a[n]+256*a[n+1]);return s}function L(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function I(e,t,r,a,s,n){if(!w(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<n)throw new RangeError('"value" argument is out of bounds');if(r+a>e.length)throw new RangeError("Index out of range")}function H(e,t,r,a){t<0&&(t=65535+t+1);for(var s=0,n=Math.min(e.length-r,2);s<n;++s)e[r+s]=(t&255<<8*(a?s:1-s))>>>8*(a?s:1-s);}function z(e,t,r,a){t<0&&(t=4294967295+t+1);for(var s=0,n=Math.min(e.length-r,4);s<n;++s)e[r+s]=t>>>8*(a?s:3-s)&255;}function B(e,t,r,a,s,n){if(r+a>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function M(e,t,r,a,s){return s||B(e,0,r,4),h(e,t,r,a,23,4),r+4}function Q(e,t,r,a,s){return s||B(e,0,r,8),h(e,t,r,a,52,8),r+8}m.prototype.slice=function(e,t){var r,a=this.length;if(e=~~e,t=void 0===t?a:~~t,e<0?(e+=a)<0&&(e=0):e>a&&(e=a),t<0?(t+=a)<0&&(t=0):t>a&&(t=a),t<e&&(t=e),m.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=m.prototype;else {var s=t-e;r=new m(s,void 0);for(var n=0;n<s;++n)r[n]=this[n+e];}return r},m.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||L(e,t,this.length);for(var a=this[e],s=1,n=0;++n<t&&(s*=256);)a+=this[e+n]*s;return a},m.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||L(e,t,this.length);for(var a=this[e+--t],s=1;t>0&&(s*=256);)a+=this[e+--t]*s;return a},m.prototype.readUInt8=function(e,t){return t||L(e,1,this.length),this[e]},m.prototype.readUInt16LE=function(e,t){return t||L(e,2,this.length),this[e]|this[e+1]<<8},m.prototype.readUInt16BE=function(e,t){return t||L(e,2,this.length),this[e]<<8|this[e+1]},m.prototype.readUInt32LE=function(e,t){return t||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},m.prototype.readUInt32BE=function(e,t){return t||L(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},m.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||L(e,t,this.length);for(var a=this[e],s=1,n=0;++n<t&&(s*=256);)a+=this[e+n]*s;return a>=(s*=128)&&(a-=Math.pow(2,8*t)),a},m.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||L(e,t,this.length);for(var a=t,s=1,n=this[e+--a];a>0&&(s*=256);)n+=this[e+--a]*s;return n>=(s*=128)&&(n-=Math.pow(2,8*t)),n},m.prototype.readInt8=function(e,t){return t||L(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},m.prototype.readInt16LE=function(e,t){t||L(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},m.prototype.readInt16BE=function(e,t){t||L(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},m.prototype.readInt32LE=function(e,t){return t||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},m.prototype.readInt32BE=function(e,t){return t||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},m.prototype.readFloatLE=function(e,t){return t||L(e,4,this.length),l(this,e,!0,23,4)},m.prototype.readFloatBE=function(e,t){return t||L(e,4,this.length),l(this,e,!1,23,4)},m.prototype.readDoubleLE=function(e,t){return t||L(e,8,this.length),l(this,e,!0,52,8)},m.prototype.readDoubleBE=function(e,t){return t||L(e,8,this.length),l(this,e,!1,52,8)},m.prototype.writeUIntLE=function(e,t,r,a){(e=+e,t|=0,r|=0,a)||I(this,e,t,r,Math.pow(2,8*r)-1,0);var s=1,n=0;for(this[t]=255&e;++n<r&&(s*=256);)this[t+n]=e/s&255;return t+r},m.prototype.writeUIntBE=function(e,t,r,a){(e=+e,t|=0,r|=0,a)||I(this,e,t,r,Math.pow(2,8*r)-1,0);var s=r-1,n=1;for(this[t+s]=255&e;--s>=0&&(n*=256);)this[t+s]=e/n&255;return t+r},m.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,1,255,0),m.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},m.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,65535,0),m.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):H(this,e,t,!0),t+2},m.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,65535,0),m.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):H(this,e,t,!1),t+2},m.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,4294967295,0),m.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):z(this,e,t,!0),t+4},m.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,4294967295,0),m.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):z(this,e,t,!1),t+4},m.prototype.writeIntLE=function(e,t,r,a){if(e=+e,t|=0,!a){var s=Math.pow(2,8*r-1);I(this,e,t,r,s-1,-s);}var n=0,o=1,i=0;for(this[t]=255&e;++n<r&&(o*=256);)e<0&&0===i&&0!==this[t+n-1]&&(i=1),this[t+n]=(e/o>>0)-i&255;return t+r},m.prototype.writeIntBE=function(e,t,r,a){if(e=+e,t|=0,!a){var s=Math.pow(2,8*r-1);I(this,e,t,r,s-1,-s);}var n=r-1,o=1,i=0;for(this[t+n]=255&e;--n>=0&&(o*=256);)e<0&&0===i&&0!==this[t+n+1]&&(i=1),this[t+n]=(e/o>>0)-i&255;return t+r},m.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,1,127,-128),m.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},m.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,32767,-32768),m.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):H(this,e,t,!0),t+2},m.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,32767,-32768),m.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):H(this,e,t,!1),t+2},m.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,2147483647,-2147483648),m.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):z(this,e,t,!0),t+4},m.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),m.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):z(this,e,t,!1),t+4},m.prototype.writeFloatLE=function(e,t,r){return M(this,e,t,!0,r)},m.prototype.writeFloatBE=function(e,t,r){return M(this,e,t,!1,r)},m.prototype.writeDoubleLE=function(e,t,r){return Q(this,e,t,!0,r)},m.prototype.writeDoubleBE=function(e,t,r){return Q(this,e,t,!1,r)},m.prototype.copy=function(e,t,r,a){if(r||(r=0),a||0===a||(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);var s,n=a-r;if(this===e&&r<t&&t<a)for(s=n-1;s>=0;--s)e[s+t]=this[s+r];else if(n<1e3||!m.TYPED_ARRAY_SUPPORT)for(s=0;s<n;++s)e[s+t]=this[s+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+n),t);return n},m.prototype.fill=function(e,t,r,a){if("string"==typeof e){if("string"==typeof t?(a=t,t=0,r=this.length):"string"==typeof r&&(a=r,r=this.length),1===e.length){var s=e.charCodeAt(0);s<256&&(e=s);}if(void 0!==a&&"string"!=typeof a)throw new TypeError("encoding must be a string");if("string"==typeof a&&!m.isEncoding(a))throw new TypeError("Unknown encoding: "+a)}else "number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var n;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else {var o=w(e)?e:Y(new m(e,a).toString()),i=o.length;for(n=0;n<r-t;++n)this[n+t]=o[n%i];}return this};var V=/[^+\/0-9A-Za-z-_]/g;function J(e){return e<16?"0"+e.toString(16):e.toString(16)}function Y(e,t){var r;t=t||1/0;for(var a=e.length,s=null,n=[],o=0;o<a;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!s){if(r>56319){(t-=3)>-1&&n.push(239,191,189);continue}if(o+1===a){(t-=3)>-1&&n.push(239,191,189);continue}s=r;continue}if(r<56320){(t-=3)>-1&&n.push(239,191,189),s=r;continue}r=65536+(s-55296<<10|r-56320);}else s&&(t-=3)>-1&&n.push(239,191,189);if(s=null,r<128){if((t-=1)<0)break;n.push(r);}else if(r<2048){if((t-=2)<0)break;n.push(r>>6|192,63&r|128);}else if(r<65536){if((t-=3)<0)break;n.push(r>>12|224,r>>6&63|128,63&r|128);}else {if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128);}}return n}function K(e){return function(e){var t,r,i,u,l,h;n||o();var p=e.length;if(p%4>0)throw new Error("Invalid string. Length must be a multiple of 4");l="="===e[p-2]?2:"="===e[p-1]?1:0,h=new s(3*p/4-l),i=l>0?p-4:p;var c=0;for(t=0,r=0;t<i;t+=4,r+=3)u=a[e.charCodeAt(t)]<<18|a[e.charCodeAt(t+1)]<<12|a[e.charCodeAt(t+2)]<<6|a[e.charCodeAt(t+3)],h[c++]=u>>16&255,h[c++]=u>>8&255,h[c++]=255&u;return 2===l?(u=a[e.charCodeAt(t)]<<2|a[e.charCodeAt(t+1)]>>4,h[c++]=255&u):1===l&&(u=a[e.charCodeAt(t)]<<10|a[e.charCodeAt(t+1)]<<4|a[e.charCodeAt(t+2)]>>2,h[c++]=u>>8&255,h[c++]=255&u),h}(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(V,"")).length<2)return "";for(;e.length%4!=0;)e+="=";return e}(e))}function G(e,t,r,a){for(var s=0;s<a&&!(s+r>=t.length||s>=e.length);++s)t[s+r]=e[s];return s}function Z(e){return null!=e&&(!!e._isBuffer||W(e)||function(e){return "function"==typeof e.readFloatLE&&"function"==typeof e.slice&&W(e.slice(0,0))}(e))}function W(e){return !!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var be=t.performance||{};be.now||be.mozNow||be.msNow||be.oNow||be.webkitNow||function(){return (new Date).getTime()};var je="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e;},Se=/%[sdj%]/g;function Oe(e){if(!He(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(Te(arguments[r]));return t.join(" ")}r=1;for(var a=arguments,s=a.length,n=String(e).replace(Se,function(e){if("%%"===e)return "%";if(r>=s)return e;switch(e){case"%s":return String(a[r++]);case"%d":return Number(a[r++]);case"%j":try{return JSON.stringify(a[r++])}catch(e){return "[Circular]"}default:return e}}),o=a[r];r<s;o=a[++r])Ne(o)||!Qe(o)?n+=" "+o:n+=" "+Te(o);return n}function ke(e,r){if(Be(t.process))return function(){return ke(e,r).apply(this,arguments)};var a=!1;return function(){if(!a){console.error(r),a=!0;}return e.apply(this,arguments)}}var Re,De={};function _e(e){if(Be(Re)&&(Re=""),e=e.toUpperCase(),!De[e])if(new RegExp("\\b"+e+"\\b","i").test(Re)){De[e]=function(){var t=Oe.apply(null,arguments);console.error("%s %d: %s",e,0,t);};}else De[e]=function(){};return De[e]}function Te(e,t){var r={seen:[],stylize:$e};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),Ce(t)?r.showHidden=t:t&&tt(r,t),Be(r.showHidden)&&(r.showHidden=!1),Be(r.depth)&&(r.depth=2),Be(r.colors)&&(r.colors=!1),Be(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=xe),qe(r,e,r.depth)}function xe(e,t){var r=Te.styles[t];return r?"["+Te.colors[r][0]+"m"+e+"["+Te.colors[r][1]+"m":e}function $e(e,t){return e}function qe(e,t,r){if(e.customInspect&&t&&Ye(t.inspect)&&t.inspect!==Te&&(!t.constructor||t.constructor.prototype!==t)){var a=t.inspect(r,e);return He(a)||(a=qe(e,a,r)),a}var s=function(e,t){if(Be(t))return e.stylize("undefined","undefined");if(He(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(Ie(t))return e.stylize(""+t,"number");if(Ce(t))return e.stylize(""+t,"boolean");if(Ne(t))return e.stylize("null","null")}(e,t);if(s)return s;var n=Object.keys(t),o=function(e){var t={};return e.forEach(function(e,r){t[e]=!0;}),t}(n);if(e.showHidden&&(n=Object.getOwnPropertyNames(t)),Je(t)&&(n.indexOf("message")>=0||n.indexOf("description")>=0))return Ae(t);if(0===n.length){if(Ye(t)){var i=t.name?": "+t.name:"";return e.stylize("[Function"+i+"]","special")}if(Me(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(Ve(t))return e.stylize(Date.prototype.toString.call(t),"date");if(Je(t))return Ae(t)}var u,l="",h=!1,p=["{","}"];(Ue(t)&&(h=!0,p=["[","]"]),Ye(t))&&(l=" [Function"+(t.name?": "+t.name:"")+"]");return Me(t)&&(l=" "+RegExp.prototype.toString.call(t)),Ve(t)&&(l=" "+Date.prototype.toUTCString.call(t)),Je(t)&&(l=" "+Ae(t)),0!==n.length||h&&0!=t.length?r<0?Me(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),u=h?function(e,t,r,a,s){for(var n=[],o=0,i=t.length;o<i;++o)rt(t,String(o))?n.push(Fe(e,t,r,a,String(o),!0)):n.push("");return s.forEach(function(s){s.match(/^\d+$/)||n.push(Fe(e,t,r,a,s,!0));}),n}(e,t,r,o,n):n.map(function(a){return Fe(e,t,r,o,a,h)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(u,l,p)):p[0]+l+p[1]}function Ae(e){return "["+Error.prototype.toString.call(e)+"]"}function Fe(e,t,r,a,s,n){var o,i,u;if((u=Object.getOwnPropertyDescriptor(t,s)||{value:t[s]}).get?i=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(i=e.stylize("[Setter]","special")),rt(a,s)||(o="["+s+"]"),i||(e.seen.indexOf(u.value)<0?(i=Ne(r)?qe(e,u.value,null):qe(e,u.value,r-1)).indexOf("\n")>-1&&(i=n?i.split("\n").map(function(e){return "  "+e}).join("\n").substr(2):"\n"+i.split("\n").map(function(e){return "   "+e}).join("\n")):i=e.stylize("[Circular]","special")),Be(o)){if(n&&s.match(/^\d+$/))return i;(o=JSON.stringify(""+s)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"));}return o+": "+i}function Ue(e){return Array.isArray(e)}function Ce(e){return "boolean"==typeof e}function Ne(e){return null===e}function Le(e){return null==e}function Ie(e){return "number"==typeof e}function He(e){return "string"==typeof e}function ze(e){return "symbol"==typeof e}function Be(e){return void 0===e}function Me(e){return Qe(e)&&"[object RegExp]"===Ze(e)}function Qe(e){return "object"==typeof e&&null!==e}function Ve(e){return Qe(e)&&"[object Date]"===Ze(e)}function Je(e){return Qe(e)&&("[object Error]"===Ze(e)||e instanceof Error)}function Ye(e){return "function"==typeof e}function Ke(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function Ge(e){return Z(e)}function Ze(e){return Object.prototype.toString.call(e)}function We(e){return e<10?"0"+e.toString(10):e.toString(10)}Te.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},Te.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};var Xe=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function et(){var e,t;console.log("%s - %s",(e=new Date,t=[We(e.getHours()),We(e.getMinutes()),We(e.getSeconds())].join(":"),[e.getDate(),Xe[e.getMonth()],t].join(" ")),Oe.apply(null,arguments));}function tt(e,t){if(!t||!Qe(t))return e;for(var r=Object.keys(t),a=r.length;a--;)e[r[a]]=t[r[a]];return e}function rt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var at={inherits:je,_extend:tt,log:et,isBuffer:Ge,isPrimitive:Ke,isFunction:Ye,isError:Je,isDate:Ve,isObject:Qe,isRegExp:Me,isUndefined:Be,isSymbol:ze,isString:He,isNumber:Ie,isNullOrUndefined:Le,isNull:Ne,isBoolean:Ce,isArray:Ue,inspect:Te,deprecate:ke,format:Oe,debuglog:_e},st=Object.freeze({format:Oe,deprecate:ke,debuglog:_e,inspect:Te,isArray:Ue,isBoolean:Ce,isNull:Ne,isNullOrUndefined:Le,isNumber:Ie,isString:He,isSymbol:ze,isUndefined:Be,isRegExp:Me,isObject:Qe,isDate:Ve,isError:Je,isFunction:Ye,isPrimitive:Ke,isBuffer:Ge,log:et,inherits:je,_extend:tt,default:at}),nt=st&&at||st,ot=function(e,t){this.code=[],this.indentation=e,this.lineJoin=t||"\n";};ot.prototype.buildLine=function(e,t){var r="",a=2;if("[object String]"===Object.prototype.toString.call(e))a=1,t=e,e=0;else if(null===e)return null;for(;e;)r+=this.indentation,e--;var s=Array.prototype.slice.call(arguments,a,arguments.length);return s.unshift(r+t),nt.format.apply(this,s)},ot.prototype.unshift=function(){return this.code.unshift(this.buildLine.apply(this,arguments)),this},ot.prototype.push=function(){return this.code.push(this.buildLine.apply(this,arguments)),this},ot.prototype.blank=function(){return this.code.push(null),this},ot.prototype.join=function(){return this.code.join(this.lineJoin)};var it=ot,ut=function(e,t){var r=new it;r.push("CURL *hnd = curl_easy_init();").blank().push('curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "%s");',e.method.toUpperCase()).push('curl_easy_setopt(hnd, CURLOPT_URL, "%s");',e.fullUrl);var a=Object.keys(e.headersObj);return a.length&&(r.blank().push("struct curl_slist *headers = NULL;"),a.forEach(function(t){r.push('headers = curl_slist_append(headers, "%s: %s");',t,e.headersObj[t]);}),r.push("curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);")),e.allHeaders.cookie&&r.blank().push('curl_easy_setopt(hnd, CURLOPT_COOKIE, "%s");',e.allHeaders.cookie),e.postData.text&&r.blank().push("curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, %s);",JSON.stringify(e.postData.text)),r.blank().push("CURLcode ret = curl_easy_perform(hnd);"),r.join()};ut.info={key:"libcurl",title:"Libcurl",link:"http://curl.haxx.se/libcurl/",description:"Simple REST and HTTP API Client for C"};var lt={info:{key:"c",title:"C",extname:".c",default:"libcurl"},libcurl:ut},ht=function(e){this.name=e;};ht.prototype.toString=function(){return ":"+this.name};var pt=function(e){this.path=e;};pt.prototype.toString=function(){return '(clojure.java.io/file "'+this.path+'")'};var ct=function(e){return void 0!==e?e.constructor.name.toLowerCase():null},ft=function(e){return "object"===ct(e)&&0===Object.keys(e).length},dt=function(e){return Object.keys(e).filter(function(t){return ft(e[t])}).forEach(function(t){delete e[t];}),e},mt=function(e,t){var r=Array.apply(null,Array(e)).map(function(e){return " "}).join("");return t.replace(/\n/g,"\n"+r)},vt=function(e,t){var r=new it(t);if(-1===["get","post","put","delete","patch","head","options"].indexOf(e.method.toLowerCase()))return r.push("Method not supported").join();var a={headers:e.allHeaders,"query-params":e.queryObj};switch(e.postData.mimeType){case"application/json":a["content-type"]=new ht("json"),a["form-params"]=e.postData.jsonObj,delete a.headers["content-type"];break;case"application/x-www-form-urlencoded":a["form-params"]=e.postData.paramsObj,delete a.headers["content-type"];break;case"text/plain":a.body=e.postData.text,delete a.headers["content-type"];break;case"multipart/form-data":a.multipart=e.postData.params.map(function(e){return e.fileName&&!e.value?{name:e.name,content:new pt(e.fileName)}:{name:e.name,content:e.value}}),delete a.headers["content-type"];}switch(a.headers.accept){case"application/json":a.accept=new ht("json"),delete a.headers.accept;}return r.push("(require '[clj-http.client :as client])\n"),ft(dt(a))?r.push('(client/%s "%s")',e.method.toLowerCase(),e.url):r.push('(client/%s "%s" %s)',e.method.toLowerCase(),e.url,mt(11+e.method.length+e.url.length,function e(t){switch(ct(t)){default:return t.toString();case"string":return '"'+t.replace(/\"/g,'\\"')+'"';case"file":case"keyword":return t.toString();case"null":return "nil";case"regexp":return '#"'+t.source+'"';case"object":var r=Object.keys(t).reduce(function(r,a){return r+":"+a+" "+mt(a.length+2,e(t[a]))+"\n "},"").trim();return "{"+mt(1,r)+"}";case"array":var a=t.reduce(function(t,r){return t+" "+e(r)},"").trim();return "["+mt(1,a)+"]"}}(dt(a)))),r.join()};vt.info={key:"clj_http",title:"clj-http",link:"https://github.com/dakrone/clj-http",description:"An idiomatic clojure http client wrapping the apache client."};var yt={info:{key:"clojure",title:"Clojure",extname:".clj",default:"clj_http"},clj_http:vt},gt=function(e,t){var r=new it;if(-1===["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS"].indexOf(e.method.toUpperCase()))return "Method not supported";r.push('var client = new RestClient("%s");',e.fullUrl),r.push("var request = new RestRequest(Method.%s);",e.method.toUpperCase());var a=Object.keys(e.headersObj);return a.length&&a.forEach(function(t){r.push('request.AddHeader("%s", "%s");',t,e.headersObj[t]);}),e.cookies.length&&e.cookies.forEach(function(e){r.push('request.AddCookie("%s", "%s");',e.name,e.value);}),e.postData.text&&r.push('request.AddParameter("%s", %s, ParameterType.RequestBody);',e.allHeaders["content-type"],JSON.stringify(e.postData.text)),r.push("IRestResponse response = client.Execute(request);"),r.join()};gt.info={key:"restsharp",title:"RestSharp",link:"http://restsharp.org/",description:"Simple REST and HTTP API Client for .NET"};var bt={info:{key:"csharp",title:"C#",extname:".cs",default:"restsharp"},restsharp:gt},Pt=function(e,t){var r,a=new it("\t"),s=nt._extend({showBoilerplate:!0,checkErrors:!1,printBody:!0,timeout:-1},t),n=s.checkErrors?"err":"_",o=s.showBoilerplate?1:0,i=function(){s.checkErrors&&a.push(o,"if err != nil {").push(o+1,"panic(err)").push(o,"}");};return s.showBoilerplate&&(a.push("package main").blank().push("import (").push(o,'"fmt"'),s.timeout>0&&a.push(o,'"time"'),e.postData.text&&a.push(o,'"strings"'),a.push(o,'"net/http"'),s.printBody&&a.push(o,'"io/ioutil"'),a.push(")").blank().push("func main() {").blank()),s.timeout>0?(r="client",a.push(o,"client := http.Client{").push(o+1,"Timeout: time.Duration(%s * time.Second),",s.timeout).push(o,"}").blank()):r="http.DefaultClient",a.push(o,'url := "%s"',e.fullUrl).blank(),e.postData.text?a.push(o,"payload := strings.NewReader(%s)",JSON.stringify(e.postData.text)).blank().push(o,'req, %s := http.NewRequest("%s", url, payload)',n,e.method).blank():a.push(o,'req, %s := http.NewRequest("%s", url, nil)',n,e.method).blank(),i(),Object.keys(e.allHeaders).length&&(Object.keys(e.allHeaders).forEach(function(t){a.push(o,'req.Header.Add("%s", "%s")',t,e.allHeaders[t]);}),a.blank()),a.push(o,"res, %s := %s.Do(req)",n,r),i(),s.printBody&&(a.blank().push(o,"defer res.Body.Close()").push(o,"body, %s := ioutil.ReadAll(res.Body)",n),i()),a.blank().push(o,"fmt.Println(res)"),s.printBody&&a.push(o,"fmt.Println(string(body))"),s.showBoilerplate&&a.blank().push("}"),a.join()};Pt.info={key:"native",title:"NewRequest",link:"http://golang.org/pkg/net/http/#NewRequest",description:"Golang HTTP client request"};var wt={info:{key:"go",title:"Go",extname:".go",default:"native"},native:Pt},Et=function(e,t){var r=nt._extend({indent:"  "},t),a=new it(r.indent);a.push("OkHttpClient client = new OkHttpClient();").blank(),e.postData.text&&(e.postData.boundary?a.push('MediaType mediaType = MediaType.parse("%s; boundary=%s");',e.postData.mimeType,e.postData.boundary):a.push('MediaType mediaType = MediaType.parse("%s");',e.postData.mimeType),a.push("RequestBody body = RequestBody.create(mediaType, %s);",JSON.stringify(e.postData.text))),a.push("Request request = new Request.Builder()"),a.push(1,'.url("%s")',e.fullUrl),-1===["GET","POST","PUT","DELETE","PATCH","HEAD"].indexOf(e.method.toUpperCase())?e.postData.text?a.push(1,'.method("%s", body)',e.method.toUpperCase()):a.push(1,'.method("%s", null)',e.method.toUpperCase()):["POST","PUT","DELETE","PATCH"].indexOf(e.method.toUpperCase())>=0?e.postData.text?a.push(1,".%s(body)",e.method.toLowerCase()):a.push(1,".%s(null)",e.method.toLowerCase()):a.push(1,".%s()",e.method.toLowerCase());var s=Object.keys(e.allHeaders);return s.length&&s.forEach(function(t){a.push(1,'.addHeader("%s", "%s")',t,e.allHeaders[t]);}),a.push(1,".build();").blank().push("Response response = client.newCall(request).execute();"),a.join()};Et.info={key:"okhttp",title:"OkHttp",link:"http://square.github.io/okhttp/",description:"An HTTP Request Client Library"};var jt=function(e,t){var r=nt._extend({indent:"  "},t),a=new it(r.indent);-1===["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS"].indexOf(e.method.toUpperCase())?a.push('HttpResponse<String> response = Unirest.customMethod("%s","%s")',e.method.toUpperCase(),e.fullUrl):a.push('HttpResponse<String> response = Unirest.%s("%s")',e.method.toLowerCase(),e.fullUrl);var s=Object.keys(e.allHeaders);return s.length&&s.forEach(function(t){a.push(1,'.header("%s", "%s")',t,e.allHeaders[t]);}),e.postData.text&&a.push(1,".body(%s)",JSON.stringify(e.postData.text)),a.push(1,".asString();"),a.join()};jt.info={key:"unirest",title:"Unirest",link:"http://unirest.io/java.html",description:"Lightweight HTTP Request Client Library"};var St={info:{key:"java",title:"Java",extname:".java",default:"unirest"},okhttp:Et,unirest:jt},Ot=function(e,t){var r=nt._extend({indent:"  "},t),a=new it(r.indent),s={async:!0,crossDomain:!0,url:e.fullUrl,method:e.method,headers:e.allHeaders};switch(e.postData.mimeType){case"application/x-www-form-urlencoded":s.data=e.postData.paramsObj?e.postData.paramsObj:e.postData.text;break;case"application/json":s.processData=!1,s.data=e.postData.text;break;case"multipart/form-data":a.push("var form = new FormData();"),e.postData.params.forEach(function(e){a.push("form.append(%s, %s);",JSON.stringify(e.name),JSON.stringify(e.value||e.fileName||""));}),s.processData=!1,s.contentType=!1,s.mimeType="multipart/form-data",s.data="[form]",~s.headers["content-type"].indexOf("boundary")&&delete s.headers["content-type"],a.blank();break;default:e.postData.text&&(s.data=e.postData.text);}return a.push("var settings = "+JSON.stringify(s,null,r.indent).replace('"[form]"',"form")).blank().push("$.ajax(settings).done(function (response) {").push(1,"console.log(response);").push("});"),a.join()};Ot.info={key:"jquery",title:"jQuery",link:"http://api.jquery.com/jquery.ajax/",description:"Perform an asynchronous HTTP (Ajax) requests with jQuery"};var kt=function(e,t){var r=nt._extend({indent:"  ",cors:!0},t),a=new it(r.indent);switch(e.postData.mimeType){case"application/json":a.push("var data = JSON.stringify(%s);",JSON.stringify(e.postData.jsonObj,null,r.indent)).push(null);break;case"multipart/form-data":a.push("var data = new FormData();"),e.postData.params.forEach(function(e){a.push("data.append(%s, %s);",JSON.stringify(e.name),JSON.stringify(e.value||e.fileName||""));}),e.allHeaders["content-type"].indexOf("boundary")&&delete e.allHeaders["content-type"],a.blank();break;default:a.push("var data = %s;",JSON.stringify(e.postData.text||null)).blank();}return a.push("var xhr = new XMLHttpRequest();"),r.cors&&a.push("xhr.withCredentials = true;"),a.blank().push('xhr.addEventListener("readystatechange", function () {').push(1,"if (this.readyState === this.DONE) {").push(2,"console.log(this.responseText);").push(1,"}").push("});").blank().push("xhr.open(%s, %s);",JSON.stringify(e.method),JSON.stringify(e.fullUrl)),Object.keys(e.allHeaders).forEach(function(t){a.push("xhr.setRequestHeader(%s, %s);",JSON.stringify(t),JSON.stringify(e.allHeaders[t]));}),a.blank().push("xhr.send(data);"),a.join()};kt.info={key:"xhr",title:"XMLHttpRequest",link:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",description:"W3C Standard API that provides scripted client functionality"};var Rt={info:{key:"javascript",title:"JavaScript",extname:".js",default:"xhr"},jquery:Ot,xhr:kt},Dt=function(e,t){var r=nt._extend({indent:"  "},t),a=new it(r.indent),s={method:e.method,hostname:e.uriObj.hostname,port:e.uriObj.port,path:e.uriObj.path,headers:e.allHeaders};switch(a.push('var http = require("%s");',e.uriObj.protocol.replace(":","")),a.blank().push("var options = %s;",JSON.stringify(s,null,r.indent)).blank().push("var req = http.request(options, function (res) {").push(1,"var chunks = [];").blank().push(1,'res.on("data", function (chunk) {').push(2,"chunks.push(chunk);").push(1,"});").blank().push(1,'res.on("end", function () {').push(2,"var body = Buffer.concat(chunks);").push(2,"console.log(body.toString());").push(1,"});").push("});").blank(),e.postData.mimeType){case"application/x-www-form-urlencoded":e.postData.paramsObj&&(a.unshift('var qs = require("querystring");'),a.push("req.write(qs.stringify(%s));",nt.inspect(e.postData.paramsObj,{depth:null})));break;case"application/json":e.postData.jsonObj&&a.push("req.write(JSON.stringify(%s));",nt.inspect(e.postData.jsonObj,{depth:null}));break;default:e.postData.text&&a.push("req.write(%s);",JSON.stringify(e.postData.text,null,r.indent));}return a.push("req.end();"),a.join()};Dt.info={key:"native",title:"HTTP",link:"http://nodejs.org/api/http.html#http_http_request_options_callback",description:"Node.js native HTTP interface"};var _t=function(e,t){var r=nt._extend({indent:"  "},t),a=!1,s=new it(r.indent);s.push('var request = require("request");').blank();var n={method:e.method,url:e.url};switch(Object.keys(e.queryObj).length&&(n.qs=e.queryObj),Object.keys(e.headersObj).length&&(n.headers=e.headersObj),e.postData.mimeType){case"application/x-www-form-urlencoded":n.form=e.postData.paramsObj;break;case"application/json":e.postData.jsonObj&&(n.body=e.postData.jsonObj,n.json=!0);break;case"multipart/form-data":n.formData={},e.postData.params.forEach(function(e){var t={};e.fileName||e.fileName||e.contentType?(e.fileName&&!e.value?(a=!0,t.value='fs.createReadStream("'+e.fileName+'")'):e.value&&(t.value=e.value),e.fileName&&(t.options={filename:e.fileName,contentType:e.contentType?e.contentType:null}),n.formData[e.name]=t):n.formData[e.name]=e.value;});break;default:e.postData.text&&(n.body=e.postData.text);}if(e.cookies.length){n.jar="JAR",s.push("var jar = request.jar();");var o=e.url;e.cookies.forEach(function(e){s.push('jar.setCookie(request.cookie("%s=%s"), "%s");',encodeURIComponent(e.name),encodeURIComponent(e.value),o);}),s.blank();}return a&&s.unshift('var fs = require("fs");'),s.push("var options = %s;",nt.inspect(n,{depth:null})).blank(),s.push(nt.format("request(options, %s","function (error, response, body) {")).push(1,"if (error) throw new Error(error);").blank().push(1,"console.log(body);").push("});").blank(),s.join().replace('"JAR"',"jar").replace(/"fs\.createReadStream\(\\\"(.+)\\\"\)\"/,'fs.createReadStream("$1")')};_t.info={key:"request",title:"Request",link:"https://github.com/request/request",description:"Simplified HTTP request client"};var Tt=function(e,t){var r=nt._extend({indent:"  "},t),a=!1,s=new it(r.indent);switch(s.push('var unirest = require("unirest");').blank().push('var req = unirest("%s", "%s");',e.method,e.url).blank(),e.cookies.length&&(s.push("var CookieJar = unirest.jar();"),e.cookies.forEach(function(t){s.push('CookieJar.add("%s=%s","%s");',encodeURIComponent(t.name),encodeURIComponent(t.value),e.url);}),s.push("req.jar(CookieJar);").blank()),Object.keys(e.queryObj).length&&s.push("req.query(%s);",JSON.stringify(e.queryObj,null,r.indent)).blank(),Object.keys(e.headersObj).length&&s.push("req.headers(%s);",JSON.stringify(e.headersObj,null,r.indent)).blank(),e.postData.mimeType){case"application/x-www-form-urlencoded":e.postData.paramsObj&&s.push("req.form(%s);",JSON.stringify(e.postData.paramsObj,null,r.indent));break;case"application/json":e.postData.jsonObj&&s.push('req.type("json");').push("req.send(%s);",JSON.stringify(e.postData.jsonObj,null,r.indent));break;case"multipart/form-data":var n=[];e.postData.params.forEach(function(e){var t={};e.fileName&&!e.value?(a=!0,t.body='fs.createReadStream("'+e.fileName+'")'):e.value&&(t.body=e.value),t.body&&(e.contentType&&(t["content-type"]=e.contentType),n.push(t));}),s.push("req.multipart(%s);",JSON.stringify(n,null,r.indent));break;default:e.postData.text&&s.push(r.indent+"req.send(%s);",JSON.stringify(e.postData.text,null,r.indent));}return a&&s.unshift('var fs = require("fs");'),s.blank().push("req.end(function (res) {").push(1,"if (res.error) throw new Error(res.error);").blank().push(1,"console.log(res.body);").push("});").blank(),s.join().replace(/"fs\.createReadStream\(\\\"(.+)\\\"\)\"/,'fs.createReadStream("$1")')};Tt.info={key:"unirest",title:"Unirest",link:"http://unirest.io/nodejs.html",description:"Lightweight HTTP Request Client Library"};var xt={info:{key:"node",title:"Node.js",extname:".js",default:"native"},native:Dt,request:_t,unirest:Tt},$t={blankString:function(e){return Array.apply(null,new Array(e)).map(String.prototype.valueOf," ").join("")},nsDeclaration:function(e,t,r,a){var s=e+" *"+t+" = ";return s+this.literalRepresentation(r,a?s.length:void 0)+";"},literalRepresentation:function(e,t){var r=void 0===t?", ":",\n   "+this.blankString(t);switch(Object.prototype.toString.call(e)){case"[object Number]":return "@"+e;case"[object Array]":return "@[ "+e.map(function(e){return this.literalRepresentation(e)}.bind(this)).join(r)+" ]";case"[object Object]":var a=[];for(var s in e)a.push(nt.format('@"%s": %s',s,this.literalRepresentation(e[s])));return "@{ "+a.join(r)+" }";case"[object Boolean]":return e?"@YES":"@NO";default:return null===e||void 0===e?"":'@"'+e.toString().replace(/"/g,'\\"')+'"'}}},qt=function(e,t){var r=nt._extend({indent:"    ",pretty:!0,timeout:"10"},t),a=new it(r.indent),s={hasHeaders:!1,hasBody:!1};if(a.push("#import <Foundation/Foundation.h>"),Object.keys(e.allHeaders).length&&(s.hasHeaders=!0,a.blank().push($t.nsDeclaration("NSDictionary","headers",e.allHeaders,r.pretty))),e.postData.text||e.postData.jsonObj||e.postData.params)switch(s.hasBody=!0,e.postData.mimeType){case"application/x-www-form-urlencoded":a.blank().push('NSMutableData *postData = [[NSMutableData alloc] initWithData:[@"%s=%s" dataUsingEncoding:NSUTF8StringEncoding]];',e.postData.params[0].name,e.postData.params[0].value);for(var n=1,o=e.postData.params.length;n<o;n++)a.push('[postData appendData:[@"&%s=%s" dataUsingEncoding:NSUTF8StringEncoding]];',e.postData.params[n].name,e.postData.params[n].value);break;case"application/json":e.postData.jsonObj&&a.push($t.nsDeclaration("NSDictionary","parameters",e.postData.jsonObj,r.pretty)).blank().push("NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];");break;case"multipart/form-data":a.push($t.nsDeclaration("NSArray","parameters",e.postData.params,r.pretty)).push('NSString *boundary = @"%s";',e.postData.boundary).blank().push("NSError *error;").push("NSMutableString *body = [NSMutableString string];").push("for (NSDictionary *param in parameters) {").push(1,'[body appendFormat:@"--%@\\r\\n", boundary];').push(1,'if (param[@"fileName"]) {').push(2,'[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"; filename=\\"%@\\"\\r\\n", param[@"name"], param[@"fileName"]];').push(2,'[body appendFormat:@"Content-Type: %@\\r\\n\\r\\n", param[@"contentType"]];').push(2,'[body appendFormat:@"%@", [NSString stringWithContentsOfFile:param[@"fileName"] encoding:NSUTF8StringEncoding error:&error]];').push(2,"if (error) {").push(3,'NSLog(@"%@", error);').push(2,"}").push(1,"} else {").push(2,'[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"\\r\\n\\r\\n", param[@"name"]];').push(2,'[body appendFormat:@"%@", param[@"value"]];').push(1,"}").push("}").push('[body appendFormat:@"\\r\\n--%@--\\r\\n", boundary];').push("NSData *postData = [body dataUsingEncoding:NSUTF8StringEncoding];");break;default:a.blank().push('NSData *postData = [[NSData alloc] initWithData:[@"'+e.postData.text+'" dataUsingEncoding:NSUTF8StringEncoding]];');}return a.blank().push('NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"'+e.fullUrl+'"]').push("                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy").push("                                                   timeoutInterval:"+parseInt(r.timeout,10).toFixed(1)+"];").push('[request setHTTPMethod:@"'+e.method+'"];'),s.hasHeaders&&a.push("[request setAllHTTPHeaderFields:headers];"),s.hasBody&&a.push("[request setHTTPBody:postData];"),a.blank().push("NSURLSession *session = [NSURLSession sharedSession];").push("NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request").push("                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {").push(1,"                                            if (error) {").push(2,'                                            NSLog(@"%@", error);').push(1,"                                            } else {").push(2,"                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;").push(2,'                                            NSLog(@"%@", httpResponse);').push(1,"                                            }").push("                                            }];").push("[dataTask resume];"),a.join()};qt.info={key:"nsurlsession",title:"NSURLSession",link:"https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",description:"Foundation's NSURLSession request"};var At={info:{key:"objc",title:"Objective-C",extname:".m",default:"nsurlsession"},nsurlsession:qt},Ft=function(e,t){var r=nt._extend({indent:"  "},t),a=new it(r.indent);a.push("open Cohttp_lwt_unix").push("open Cohttp").push("open Lwt").blank().push('let uri = Uri.of_string "%s" in',e.fullUrl);var s=Object.keys(e.allHeaders);return 1===s.length?a.push('let headers = Header.add (Header.init ()) "%s" "%s" in',s[0],e.allHeaders[s[0]]):s.length>1&&(a.push("let headers = Header.add_list (Header.init ()) ["),s.forEach(function(t){a.push(1,'("%s", "%s");',t,e.allHeaders[t]);}),a.push("] in")),e.postData.text&&a.push("let body = Cohttp_lwt_body.of_string %s in",JSON.stringify(e.postData.text)),a.blank(),a.push("Client.call %s%s%s uri",s.length?"~headers ":"",e.postData.text?"~body ":"",["get","post","head","delete","patch","put","options"].indexOf(e.method.toLowerCase())>=0?"`"+e.method.toUpperCase():'(Code.method_of_string "'+e.method+'")'),a.push(">>= fun (res, body_stream) ->").push(1,"(* Do stuff with the result *)"),a.join()};Ft.info={key:"cohttp",title:"CoHTTP",link:"https://github.com/mirage/ocaml-cohttp",description:"Cohttp is a very lightweight HTTP server using Lwt or Async for OCaml"};var Ut={info:{key:"ocaml",title:"OCaml",extname:".ml",default:"cohttp"},cohttp:Ft},Ct=function(e,t){var r=nt._extend({closingTag:!1,indent:"  ",maxRedirects:10,namedErrors:!1,noTags:!1,shortTags:!1,timeout:30},t),a=new it(r.indent);r.noTags||a.push(r.shortTags?"<?":"<?php").blank(),a.push("$curl = curl_init();").blank();var s=[{escape:!0,name:"CURLOPT_PORT",value:e.uriObj.port},{escape:!0,name:"CURLOPT_URL",value:e.fullUrl},{escape:!1,name:"CURLOPT_RETURNTRANSFER",value:"true"},{escape:!0,name:"CURLOPT_ENCODING",value:""},{escape:!1,name:"CURLOPT_MAXREDIRS",value:r.maxRedirects},{escape:!1,name:"CURLOPT_TIMEOUT",value:r.timeout},{escape:!1,name:"CURLOPT_HTTP_VERSION",value:"HTTP/1.0"===e.httpVersion?"CURL_HTTP_VERSION_1_0":"CURL_HTTP_VERSION_1_1"},{escape:!0,name:"CURLOPT_CUSTOMREQUEST",value:e.method},{escape:!0,name:"CURLOPT_POSTFIELDS",value:e.postData?e.postData.text:void 0}];a.push("curl_setopt_array($curl, array(");var n=new it(r.indent,"\n"+r.indent);s.forEach(function(e){~[null,void 0].indexOf(e.value)||n.push(nt.format("%s => %s,",e.name,e.escape?JSON.stringify(e.value):e.value));});var o=e.cookies.map(function(e){return encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)});o.length&&n.push(nt.format('CURLOPT_COOKIE => "%s",',o.join("; ")));var i=Object.keys(e.headersObj).sort().map(function(t){return nt.format('"%s: %s"',t,e.headersObj[t])});return i.length&&n.push("CURLOPT_HTTPHEADER => array(").push(1,i.join(",\n"+r.indent+r.indent)).push("),"),a.push(1,n.join()).push("));").blank().push("$response = curl_exec($curl);").push("$err = curl_error($curl);").blank().push("curl_close($curl);").blank().push("if ($err) {"),r.namedErrors?a.push(1,'echo array_flip(get_defined_constants(true)["curl"])[$err];'):a.push(1,'echo "cURL Error #:" . $err;'),a.push("} else {").push(1,"echo $response;").push("}"),!r.noTags&&r.closingTag&&a.blank().push("?>"),a.join()};Ct.info={key:"curl",title:"cURL",link:"http://php.net/manual/en/book.curl.php",description:"PHP with ext-curl"};var Nt={convert:function e(t,r,a){var s,n;switch(a||(a=""),Object.prototype.toString.call(t)){case"[object Null]":case"[object Undefined]":n="null";break;case"[object String]":n="'"+t.replace(/\\/g,"\\\\").replace(/\'/g,"'")+"'";break;case"[object Number]":n=t.toString();break;case"[object Array]":n=[],t.forEach(function(t){n.push(e(t,r+r,r));}),n="array(\n"+r+n.join(",\n"+r)+"\n"+a+")";break;case"[object Object]":for(s in n=[],t)t.hasOwnProperty(s)&&n.push(e(s,r)+" => "+e(t[s],r+r,r));n="array(\n"+r+n.join(",\n"+r)+"\n"+a+")";break;default:n="null";}return n},methods:["ACL","BASELINE_CONTROL","CHECKIN","CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LABEL","LOCK","MERGE","MKACTIVITY","MKCOL","MKWORKSPACE","MOVE","OPTIONS","POST","PROPFIND","PROPPATCH","PUT","REPORT","TRACE","UNCHECKOUT","UNLOCK","UPDATE","VERSION_CONTROL"]},Lt=function(e,t){var r=nt._extend({closingTag:!1,indent:"  ",noTags:!1,shortTags:!1},t),a=new it(r.indent);switch(r.noTags||a.push(r.shortTags?"<?":"<?php").blank(),~Nt.methods.indexOf(e.method.toUpperCase())||a.push("HttpRequest::methodRegister('%s');",e.method),a.push("$request = new HttpRequest();").push("$request->setUrl(%s);",Nt.convert(e.url)),~Nt.methods.indexOf(e.method.toUpperCase())?a.push("$request->setMethod(HTTP_METH_%s);",e.method.toUpperCase()):a.push("$request->setMethod(HttpRequest::HTTP_METH_%s);",e.method.toUpperCase()),a.blank(),Object.keys(e.queryObj).length&&a.push("$request->setQueryData(%s);",Nt.convert(e.queryObj,r.indent)).blank(),Object.keys(e.headersObj).length&&a.push("$request->setHeaders(%s);",Nt.convert(e.headersObj,r.indent)).blank(),Object.keys(e.cookiesObj).length&&a.push("$request->setCookies(%s);",Nt.convert(e.cookiesObj,r.indent)).blank(),e.postData.mimeType){case"application/x-www-form-urlencoded":a.push("$request->setContentType(%s);",Nt.convert(e.postData.mimeType)).push("$request->setPostFields(%s);",Nt.convert(e.postData.paramsObj,r.indent)).blank();break;default:e.postData.text&&a.push("$request->setBody(%s);",Nt.convert(e.postData.text)).blank();}return a.push("try {").push(1,"$response = $request->send();").blank().push(1,"echo $response->getBody();").push("} catch (HttpException $ex) {").push(1,"echo $ex;").push("}"),!r.noTags&&r.closingTag&&a.blank().push("?>"),a.join()};Lt.info={key:"http1",title:"HTTP v1",link:"http://php.net/manual/en/book.http.php",description:"PHP with pecl/http v1"};var It=function(e,t){var r=nt._extend({closingTag:!1,indent:"  ",noTags:!1,shortTags:!1},t),a=new it(r.indent),s=!1;switch(r.noTags||a.push(r.shortTags?"<?":"<?php").blank(),a.push("$client = new http\\Client;").push("$request = new http\\Client\\Request;").blank(),e.postData.mimeType){case"application/x-www-form-urlencoded":a.push("$body = new http\\Message\\Body;").push("$body->append(new http\\QueryString(%s));",Nt.convert(e.postData.paramsObj,r.indent)).blank(),s=!0;break;case"multipart/form-data":var n=[],o={};e.postData.params.forEach(function(e){e.fileName?n.push({name:e.name,type:e.contentType,file:e.fileName,data:e.value}):e.value&&(o[e.name]=e.value);}),a.push("$body = new http\\Message\\Body;").push("$body->addForm(%s, %s);",Object.keys(o).length?Nt.convert(o,r.indent):"NULL",n.length?Nt.convert(n,r.indent):"NULL"),~e.headersObj["content-type"].indexOf("boundary")&&delete e.headersObj["content-type"],a.blank(),s=!0;break;default:e.postData.text&&(a.push("$body = new http\\Message\\Body;").push("$body->append(%s);",Nt.convert(e.postData.text)).blank(),s=!0);}return a.push("$request->setRequestUrl(%s);",Nt.convert(e.url)).push("$request->setRequestMethod(%s);",Nt.convert(e.method)),s&&a.push("$request->setBody($body);").blank(),Object.keys(e.queryObj).length&&a.push("$request->setQuery(new http\\QueryString(%s));",Nt.convert(e.queryObj,r.indent)).blank(),Object.keys(e.headersObj).length&&a.push("$request->setHeaders(%s);",Nt.convert(e.headersObj,r.indent)).blank(),Object.keys(e.cookiesObj).length&&a.blank().push("$client->setCookies(%s);",Nt.convert(e.cookiesObj,r.indent)).blank(),a.push("$client->enqueue($request)->send();").push("$response = $client->getResponse();").blank().push("echo $response->getBody();"),!r.noTags&&r.closingTag&&a.blank().push("?>"),a.join()};It.info={key:"http2",title:"HTTP v2",link:"http://devel-m6w6.rhcloud.com/mdref/http",description:"PHP with pecl/http v2"};var Ht={info:{key:"php",title:"PHP",extname:".php",default:"curl"},curl:Ct,http1:Lt,http2:It},zt=function(e,t){var r=new it;r.push("import http.client").blank(),"https:"===e.uriObj.protocol?r.push('conn = http.client.HTTPSConnection("%s")',e.uriObj.host).blank():r.push('conn = http.client.HTTPConnection("%s")',e.uriObj.host).blank();var a,s=JSON.stringify(e.postData.text);s&&r.push("payload = %s",s).blank();var n=e.allHeaders,o=Object.keys(n).length;if(1===o)for(a in n)r.push("headers = { '%s': \"%s\" }",a,n[a]).blank();else if(o>1){var i=1;for(a in r.push("headers = {"),n)i++!==o?r.push("    '%s': \"%s\",",a,n[a]):r.push("    '%s': \"%s\"",a,n[a]);r.push("    }").blank();}var u=e.method,l=e.uriObj.path;return s&&o?r.push('conn.request("%s", "%s", payload, headers)',u,l):s&&!o?r.push('conn.request("%s", "%s", payload)',u,l):!s&&o?r.push('conn.request("%s", "%s", headers=headers)',u,l):r.push('conn.request("%s", "%s")',u,l),r.blank().push("res = conn.getresponse()").push("data = res.read()").blank().push('print(data.decode("utf-8"))'),r.join()};zt.info={key:"python3",title:"http.client",link:"https://docs.python.org/3/library/http.client.html",description:"Python3 HTTP Client"};var Bt=function(e,t){var r=new it("    ");if(r.push("import requests").blank(),r.push('url = "%s"',e.url).blank(),e.queryString.length){var a="querystring = "+JSON.stringify(e.queryObj);r.push(a).blank();}var s,n=JSON.stringify(e.postData.text);n&&r.push("payload = %s",n);var o=e.allHeaders,i=Object.keys(o).length;if(1===i)for(s in o)r.push("headers = {'%s': '%s'}",s,o[s]).blank();else if(i>1){var u=1;for(s in r.push("headers = {"),o)u++!==i?r.push(1,"'%s': \"%s\",",s,o[s]):r.push(1,"'%s': \"%s\"",s,o[s]);r.push(1,"}").blank();}var l=e.method,h=nt.format('response = requests.request("%s", url',l);return n&&(h+=", data=payload"),i>0&&(h+=", headers=headers"),a&&(h+=", params=querystring"),h+=")",r.push(h).blank().push("print(response.text)"),r.join()};Bt.info={key:"requests",title:"Requests",link:"http://docs.python-requests.org/en/latest/api/#requests.request",description:"Requests HTTP library"};var Mt={info:{key:"python",title:"Python",extname:".py",default:"python3"},python3:zt,requests:Bt},Qt=function(e,t){var r=new it;r.push("require 'uri'").push("require 'net/http'").blank();var a=e.method.toUpperCase(),s=a.charAt(0)+a.substring(1).toLowerCase();["GET","POST","HEAD","DELETE","PATCH","PUT","OPTIONS","COPY","LOCK","UNLOCK","MOVE","TRACE"].indexOf(a)<0&&r.push("class Net::HTTP::%s < Net::HTTPRequest",s).push("  METHOD = '%s'",a.toUpperCase()).push("  REQUEST_HAS_BODY = '%s'",e.postData.text?"true":"false").push("  RESPONSE_HAS_BODY = true").push("end").blank(),r.push('url = URI("%s")',e.fullUrl).blank().push("http = Net::HTTP.new(url.host, url.port)"),"https:"===e.uriObj.protocol&&r.push("http.use_ssl = true").push("http.verify_mode = OpenSSL::SSL::VERIFY_NONE"),r.blank().push("request = Net::HTTP::%s.new(url)",s);var n=Object.keys(e.allHeaders);return n.length&&n.forEach(function(t){r.push("request[\"%s\"] = '%s'",t,e.allHeaders[t]);}),e.postData.text&&r.push("request.body = %s",JSON.stringify(e.postData.text)),r.blank().push("response = http.request(request)").push("puts response.read_body"),r.join()};Qt.info={key:"native",title:"net::http",link:"http://ruby-doc.org/stdlib-2.2.1/libdoc/net/http/rdoc/Net/HTTP.html",description:"Ruby HTTP client"};var Vt={info:{key:"ruby",title:"Ruby",extname:".rb",default:"native"},native:Qt},Jt=function(e){return /^[a-z0-9-_/.@%^=:]+$/i.test(e)?e:nt.format("'%s'",e.replace(/'/g,"'\\''"))},Yt=function(e){return e.replace(/\r/g,"\\r").replace(/\n/g,"\\n")},Kt=function(e,t){var r=nt._extend({indent:"  ",short:!1,binary:!1},t),a=new it(r.indent,!1!==r.indent?" \\\n"+r.indent:" ");switch(a.push("curl %s %s",r.short?"-X":"--request",e.method).push(nt.format("%s%s",r.short?"":"--url ",Jt(e.fullUrl))),"HTTP/1.0"===e.httpVersion&&a.push(r.short?"-0":"--http1.0"),Object.keys(e.headersObj).sort().forEach(function(t){var s=nt.format("%s: %s",t,e.headersObj[t]);a.push("%s %s",r.short?"-H":"--header",Jt(s));}),e.allHeaders.cookie&&a.push("%s %s",r.short?"-b":"--cookie",Jt(e.allHeaders.cookie)),e.postData.mimeType){case"multipart/form-data":e.postData.params.map(function(e){var t=nt.format("%s=%s",e.name,e.value);e.fileName&&!e.value&&(t=nt.format("%s=@%s",e.name,e.fileName)),a.push("%s %s",r.short?"-F":"--form",Jt(t));});break;case"application/x-www-form-urlencoded":e.postData.params?e.postData.params.map(function(e){a.push("%s %s",r.binary?"--data-binary":r.short?"-d":"--data",Jt(nt.format("%s=%s",e.name,e.value)));}):a.push("%s %s",r.binary?"--data-binary":r.short?"-d":"--data",Yt(Jt(e.postData.text)));break;default:e.postData.text&&a.push("%s %s",r.binary?"--data-binary":r.short?"-d":"--data",Yt(Jt(e.postData.text)));}return a.join()};Kt.info={key:"curl",title:"cURL",link:"http://curl.haxx.se/",description:"cURL is a command line tool and library for transferring data with URL syntax"};var Gt=function(e,t){var r=nt._extend({body:!1,cert:!1,headers:!1,indent:"  ",pretty:!1,print:!1,queryParams:!1,short:!1,style:!1,timeout:!1,verbose:!1,verify:!1},t),a=new it(r.indent,!1!==r.indent?" \\\n"+r.indent:" "),s=!1,n=[];(r.headers&&n.push(r.short?"-h":"--headers"),r.body&&n.push(r.short?"-b":"--body"),r.verbose&&n.push(r.short?"-v":"--verbose"),r.print&&n.push(nt.format("%s=%s",r.short?"-p":"--print",r.print)),r.verify&&n.push(nt.format("--verify=%s",r.verify)),r.cert&&n.push(nt.format("--cert=%s",r.cert)),r.pretty&&n.push(nt.format("--pretty=%s",r.pretty)),r.style&&n.push(nt.format("--style=%s",r.pretty)),r.timeout&&n.push(nt.format("--timeout=%s",r.timeout)),r.queryParams)&&Object.keys(e.queryObj).forEach(function(t){var r=e.queryObj[t];nt.isArray(r)?r.forEach(function(e){a.push("%s==%s",t,Jt(e));}):a.push("%s==%s",t,Jt(r));});return Object.keys(e.allHeaders).sort().forEach(function(t){a.push("%s:%s",t,Jt(e.allHeaders[t]));}),"application/x-www-form-urlencoded"===e.postData.mimeType?e.postData.params&&e.postData.params.length&&(n.push(r.short?"-f":"--form"),e.postData.params.forEach(function(e){a.push("%s=%s",e.name,Jt(e.value));})):s=!0,a.unshift("http %s%s %s",n.length?n.join(" ")+" ":"",e.method,Jt(r.queryParams?e.url:e.fullUrl)),s&&e.postData.text&&a.unshift("echo %s | ",Jt(e.postData.text)),a.join()};Gt.info={key:"httpie",title:"HTTPie",link:"http://httpie.org/",description:"a CLI, cURL-like tool for humans"};var Zt=function(e,t){var r=nt._extend({indent:"  ",short:!1,verbose:!1},t),a=new it(r.indent,!1!==r.indent?" \\\n"+r.indent:" ");return r.verbose?a.push("wget %s",r.short?"-v":"--verbose"):a.push("wget %s",r.short?"-q":"--quiet"),a.push("--method %s",Jt(e.method)),Object.keys(e.allHeaders).forEach(function(t){var r=nt.format("%s: %s",t,e.allHeaders[t]);a.push("--header %s",Jt(r));}),e.postData.text&&a.push("--body-data "+Yt(Jt(e.postData.text))),a.push(r.short?"-O":"--output-document").push("- %s",Jt(e.fullUrl)),a.join()};Zt.info={key:"wget",title:"Wget",link:"https://www.gnu.org/software/wget/",description:"a free software package for retrieving files using HTTP, HTTPS"};var Wt={info:{key:"shell",title:"Shell",extname:".sh",default:"curl"},curl:Kt,httpie:Gt,wget:Zt};function Xt(e,t){return Array.apply(null,new Array(e)).map(String.prototype.valueOf,t).join("")}function er(e,t,r,a){var s=Xt(a,r),n=Xt(a-1,r),o=t?",\n"+s:", ";return t?"[\n"+s+e.join(o)+"\n"+n+"]":"["+e.join(o)+"]"}var tr={literalDeclaration:function(e,t,r){return nt.format("let %s = %s",e,this.literalRepresentation(t,r))},literalRepresentation:function(e,t,r){switch(r=void 0===r?1:r+1,Object.prototype.toString.call(e)){case"[object Number]":return e;case"[object Array]":var a=!1;return er(e.map(function(e){return "[object Object]"===Object.prototype.toString.call(e)&&(a=Object.keys(e).length>1),this.literalRepresentation(e,t,r)}.bind(this)),a,t.indent,r);case"[object Object]":var s=[];for(var n in e)s.push(nt.format('"%s": %s',n,this.literalRepresentation(e[n],t,r)));return er(s,t.pretty&&s.length>1,t.indent,r);case"[object Boolean]":return e.toString();default:return null===e||void 0===e?"":'"'+e.toString().replace(/"/g,'\\"')+'"'}}},rr=function(e,t){var r=nt._extend({indent:"  ",pretty:!0,timeout:"10"},t),a=new it(r.indent),s={hasHeaders:!1,hasBody:!1};if(a.push("import Foundation"),Object.keys(e.allHeaders).length&&(s.hasHeaders=!0,a.blank().push(tr.literalDeclaration("headers",e.allHeaders,r))),e.postData.text||e.postData.jsonObj||e.postData.params)switch(s.hasBody=!0,e.postData.mimeType){case"application/x-www-form-urlencoded":a.blank().push('let postData = NSMutableData(data: "%s=%s".data(using: String.Encoding.utf8)!)',e.postData.params[0].name,e.postData.params[0].value);for(var n=1,o=e.postData.params.length;n<o;n++)a.push('postData.append("&%s=%s".data(using: String.Encoding.utf8)!)',e.postData.params[n].name,e.postData.params[n].value);break;case"application/json":e.postData.jsonObj&&a.push(tr.literalDeclaration("parameters",e.postData.jsonObj,r),"as [String : Any]").blank().push("let postData = JSONSerialization.data(withJSONObject: parameters, options: [])");break;case"multipart/form-data":a.push(tr.literalDeclaration("parameters",e.postData.params,r)).blank().push('let boundary = "%s"',e.postData.boundary).blank().push('var body = ""').push("var error: NSError? = nil").push("for param in parameters {").push(1,'let paramName = param["name"]!').push(1,'body += "--\\(boundary)\\r\\n"').push(1,'body += "Content-Disposition:form-data; name=\\"\\(paramName)\\""').push(1,'if let filename = param["fileName"] {').push(2,'let contentType = param["content-type"]!').push(2,"let fileContent = String(contentsOfFile: filename, encoding: String.Encoding.utf8)").push(2,"if (error != nil) {").push(3,"print(error)").push(2,"}").push(2,'body += "; filename=\\"\\(filename)\\"\\r\\n"').push(2,'body += "Content-Type: \\(contentType)\\r\\n\\r\\n"').push(2,"body += fileContent").push(1,'} else if let paramValue = param["value"] {').push(2,'body += "\\r\\n\\r\\n\\(paramValue)"').push(1,"}").push("}");break;default:a.blank().push('let postData = NSData(data: "%s".data(using: String.Encoding.utf8)!)',e.postData.text);}return a.blank().push('let request = NSMutableURLRequest(url: NSURL(string: "%s")! as URL,',e.fullUrl).push("                                        cachePolicy: .useProtocolCachePolicy,").push("                                    timeoutInterval: %s)",parseInt(r.timeout,10).toFixed(1)).push('request.httpMethod = "%s"',e.method),s.hasHeaders&&a.push("request.allHTTPHeaderFields = headers"),s.hasBody&&a.push("request.httpBody = postData as Data"),a.blank().push("let session = URLSession.shared").push("let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in").push(1,"if (error != nil) {").push(2,"print(error)").push(1,"} else {").push(2,"let httpResponse = response as? HTTPURLResponse").push(2,"print(httpResponse)").push(1,"}").push("})").blank().push("dataTask.resume()"),a.join()};rr.info={key:"nsurlsession",title:"NSURLSession",link:"https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",description:"Foundation's NSURLSession request"};var ar={c:lt,clojure:yt,csharp:bt,go:wt,java:St,javascript:Rt,node:xt,objc:At,ocaml:Ut,php:Ht,python:Mt,ruby:Vt,shell:Wt,swift:{info:{key:"swift",title:"Swift",extname:".swift",default:"nsurlsession"},nsurlsession:rr}},sr="object"==typeof self?self.FormData:window.FormData;function nr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var or=Array.isArray||function(e){return "[object Array]"===Object.prototype.toString.call(e)};function ir(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return ""}}function ur(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?lr(hr(e),function(a){var s=encodeURIComponent(ir(a))+r;return or(e[a])?lr(e[a],function(e){return s+encodeURIComponent(ir(e))}).join(t):s+encodeURIComponent(ir(e[a]))}).join(t):a?encodeURIComponent(ir(a))+r+encodeURIComponent(ir(e)):""}function lr(e,t){if(e.map)return e.map(t);for(var r=[],a=0;a<e.length;a++)r.push(t(e[a],a));return r}var hr=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t};function pr(e,t,r,a){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var n=/\+/g;e=e.split(t);var o=1e3;a&&"number"==typeof a.maxKeys&&(o=a.maxKeys);var i=e.length;o>0&&i>o&&(i=o);for(var u=0;u<i;++u){var l,h,p,c,f=e[u].replace(n,"%20"),d=f.indexOf(r);d>=0?(l=f.substr(0,d),h=f.substr(d+1)):(l=f,h=""),p=decodeURIComponent(l),c=decodeURIComponent(h),nr(s,p)?or(s[p])?s[p].push(c):s[p]=[s[p],c]:s[p]=c;}return s}var cr={encode:ur,stringify:ur,decode:pr,parse:pr},fr=2147483647,dr=36,mr=1,vr=26,yr=38,gr=700,br=72,Pr=128,wr="-",Er=/[^\x20-\x7E]/,jr=/[\x2E\u3002\uFF0E\uFF61]/g,Sr={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Or=dr-mr,kr=Math.floor,Rr=String.fromCharCode;function Dr(e){throw new RangeError(Sr[e])}function _r(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function Tr(e,t,r){var a=0;for(e=r?kr(e/gr):e>>1,e+=kr(e/t);e>Or*vr>>1;a+=dr)e=kr(e/Or);return kr(a+(Or+1)*e/(e+yr))}function xr(e){return function(e,t){var r=e.split("@"),a="";r.length>1&&(a=r[0]+"@",e=r[1]);var s=function(e,t){for(var r=e.length,a=[];r--;)a[r]=t(e[r]);return a}((e=e.replace(jr,".")).split("."),t).join(".");return a+s}(e,function(e){return Er.test(e)?"xn--"+function(e){var t,r,a,s,n,o,i,u,l,h,p,c,f,d,m,v=[];for(c=(e=function(e){for(var t,r,a=[],s=0,n=e.length;s<n;)(t=e.charCodeAt(s++))>=55296&&t<=56319&&s<n?56320==(64512&(r=e.charCodeAt(s++)))?a.push(((1023&t)<<10)+(1023&r)+65536):(a.push(t),s--):a.push(t);return a}(e)).length,t=Pr,r=0,n=br,o=0;o<c;++o)(p=e[o])<128&&v.push(Rr(p));for(a=s=v.length,s&&v.push(wr);a<c;){for(i=fr,o=0;o<c;++o)(p=e[o])>=t&&p<i&&(i=p);for(i-t>kr((fr-r)/(f=a+1))&&Dr("overflow"),r+=(i-t)*f,t=i,o=0;o<c;++o)if((p=e[o])<t&&++r>fr&&Dr("overflow"),p==t){for(u=r,l=dr;!(u<(h=l<=n?mr:l>=n+vr?vr:l-n));l+=dr)m=u-h,d=dr-h,v.push(Rr(_r(h+m%d,0))),u=kr(m/d);v.push(Rr(_r(u,0))),n=Tr(r,f,a==s),r=0,++a;}++r,++t;}return v.join("")}(e):e})}var $r={parse:Jr,resolve:Zr,resolveObject:Wr,format:Kr,Url:qr};function qr(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null;}var Ar=/^([a-z0-9.+-]+:)/i,Fr=/:[0-9]*$/,Ur=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Cr=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),Nr=["'"].concat(Cr),Lr=["%","/","?",";","#"].concat(Nr),Ir=["/","?","#"],Hr=255,zr=/^[+a-z0-9A-Z_-]{0,63}$/,Br=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Mr={javascript:!0,"javascript:":!0},Qr={javascript:!0,"javascript:":!0},Vr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Jr(e,t,r){if(e&&Qe(e)&&e instanceof qr)return e;var a=new qr;return a.parse(e,t,r),a}function Yr(e,t,r,a){if(!He(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var s=t.indexOf("?"),n=-1!==s&&s<t.indexOf("#")?"?":"#",o=t.split(n);o[0]=o[0].replace(/\\/g,"/");var i=t=o.join(n);if(i=i.trim(),!a&&1===t.split("#").length){var u=Ur.exec(i);if(u)return e.path=i,e.href=i,e.pathname=u[1],u[2]?(e.search=u[2],e.query=r?pr(e.search.substr(1)):e.search.substr(1)):r&&(e.search="",e.query={}),e}var l,h,p,c,f=Ar.exec(i);if(f){var d=(f=f[0]).toLowerCase();e.protocol=d,i=i.substr(f.length);}if(a||f||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var m="//"===i.substr(0,2);!m||f&&Qr[f]||(i=i.substr(2),e.slashes=!0);}if(!Qr[f]&&(m||f&&!Vr[f])){var v,y,g=-1;for(l=0;l<Ir.length;l++)-1!==(h=i.indexOf(Ir[l]))&&(-1===g||h<g)&&(g=h);for(-1!==(y=-1===g?i.lastIndexOf("@"):i.lastIndexOf("@",g))&&(v=i.slice(0,y),i=i.slice(y+1),e.auth=decodeURIComponent(v)),g=-1,l=0;l<Lr.length;l++)-1!==(h=i.indexOf(Lr[l]))&&(-1===g||h<g)&&(g=h);-1===g&&(g=i.length),e.host=i.slice(0,g),i=i.slice(g),Xr(e),e.hostname=e.hostname||"";var b="["===e.hostname[0]&&"]"===e.hostname[e.hostname.length-1];if(!b){var P=e.hostname.split(/\./);for(l=0,p=P.length;l<p;l++){var w=P[l];if(w&&!w.match(zr)){for(var E="",j=0,S=w.length;j<S;j++)w.charCodeAt(j)>127?E+="x":E+=w[j];if(!E.match(zr)){var O=P.slice(0,l),k=P.slice(l+1),R=w.match(Br);R&&(O.push(R[1]),k.unshift(R[2])),k.length&&(i="/"+k.join(".")+i),e.hostname=O.join(".");break}}}}e.hostname.length>Hr?e.hostname="":e.hostname=e.hostname.toLowerCase(),b||(e.hostname=xr(e.hostname)),c=e.port?":"+e.port:"";var D=e.hostname||"";e.host=D+c,e.href+=e.host,b&&(e.hostname=e.hostname.substr(1,e.hostname.length-2),"/"!==i[0]&&(i="/"+i));}if(!Mr[d])for(l=0,p=Nr.length;l<p;l++){var _=Nr[l];if(-1!==i.indexOf(_)){var T=encodeURIComponent(_);T===_&&(T=escape(_)),i=i.split(_).join(T);}}var x=i.indexOf("#");-1!==x&&(e.hash=i.substr(x),i=i.slice(0,x));var $=i.indexOf("?");if(-1!==$?(e.search=i.substr($),e.query=i.substr($+1),r&&(e.query=pr(e.query)),i=i.slice(0,$)):r&&(e.search="",e.query={}),i&&(e.pathname=i),Vr[d]&&e.hostname&&!e.pathname&&(e.pathname="/"),e.pathname||e.search){c=e.pathname||"";var q=e.search||"";e.path=c+q;}return e.href=Gr(e),e}function Kr(e){return He(e)&&(e=Yr({},e)),Gr(e)}function Gr(e){var t=e.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var r=e.protocol||"",a=e.pathname||"",s=e.hash||"",n=!1,o="";e.host?n=t+e.host:e.hostname&&(n=t+(-1===e.hostname.indexOf(":")?e.hostname:"["+this.hostname+"]"),e.port&&(n+=":"+e.port)),e.query&&Qe(e.query)&&Object.keys(e.query).length&&(o=ur(e.query));var i=e.search||o&&"?"+o||"";return r&&":"!==r.substr(-1)&&(r+=":"),e.slashes||(!r||Vr[r])&&!1!==n?(n="//"+(n||""),a&&"/"!==a.charAt(0)&&(a="/"+a)):n||(n=""),s&&"#"!==s.charAt(0)&&(s="#"+s),i&&"?"!==i.charAt(0)&&(i="?"+i),r+n+(a=a.replace(/[?#]/g,function(e){return encodeURIComponent(e)}))+(i=i.replace("#","%23"))+s}function Zr(e,t){return Jr(e,!1,!0).resolve(t)}function Wr(e,t){return e?Jr(e,!1,!0).resolveObject(t):t}function Xr(e){var t=e.host,r=Fr.exec(t);r&&(":"!==(r=r[0])&&(e.port=r.substr(1)),t=t.substr(0,t.length-r.length)),t&&(e.hostname=t);}qr.prototype.parse=function(e,t,r){return Yr(this,e,t,r)},qr.prototype.format=function(){return Gr(this)},qr.prototype.resolve=function(e){return this.resolveObject(Jr(e,!1,!0)).format()},qr.prototype.resolveObject=function(e){if(He(e)){var t=new qr;t.parse(e,!1,!0),e=t;}for(var r,a=new qr,s=Object.keys(this),n=0;n<s.length;n++){var o=s[n];a[o]=this[o];}if(a.hash=e.hash,""===e.href)return a.href=a.format(),a;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),u=0;u<i.length;u++){var l=i[u];"protocol"!==l&&(a[l]=e[l]);}return Vr[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(e.protocol&&e.protocol!==a.protocol){if(!Vr[e.protocol]){for(var h=Object.keys(e),p=0;p<h.length;p++){var c=h[p];a[c]=e[c];}return a.href=a.format(),a}if(a.protocol=e.protocol,e.host||Qr[e.protocol])a.pathname=e.pathname;else {for(r=(e.pathname||"").split("/");r.length&&!(e.host=r.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==r[0]&&r.unshift(""),r.length<2&&r.unshift(""),a.pathname=r.join("/");}if(a.search=e.search,a.query=e.query,a.host=e.host||"",a.auth=e.auth,a.hostname=e.hostname||e.host,a.port=e.port,a.pathname||a.search){var f=a.pathname||"",d=a.search||"";a.path=f+d;}return a.slashes=a.slashes||e.slashes,a.href=a.format(),a}var m,v=a.pathname&&"/"===a.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),g=y||v||a.host&&e.pathname,b=g,P=a.pathname&&a.pathname.split("/")||[],w=a.protocol&&!Vr[a.protocol];if(r=e.pathname&&e.pathname.split("/")||[],w&&(a.hostname="",a.port=null,a.host&&(""===P[0]?P[0]=a.host:P.unshift(a.host)),a.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===r[0]?r[0]=e.host:r.unshift(e.host)),e.host=null),g=g&&(""===r[0]||""===P[0])),y)a.host=e.host||""===e.host?e.host:a.host,a.hostname=e.hostname||""===e.hostname?e.hostname:a.hostname,a.search=e.search,a.query=e.query,P=r;else if(r.length)P||(P=[]),P.pop(),P=P.concat(r),a.search=e.search,a.query=e.query;else if(!Le(e.search))return w&&(a.hostname=a.host=P.shift(),(m=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=m.shift(),a.host=a.hostname=m.shift())),a.search=e.search,a.query=e.query,Ne(a.pathname)&&Ne(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a;if(!P.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var E=P.slice(-1)[0],j=(a.host||e.host||P.length>1)&&("."===E||".."===E)||""===E,S=0,O=P.length;O>=0;O--)"."===(E=P[O])?P.splice(O,1):".."===E?(P.splice(O,1),S++):S&&(P.splice(O,1),S--);if(!g&&!b)for(;S--;S)P.unshift("..");!g||""===P[0]||P[0]&&"/"===P[0].charAt(0)||P.unshift(""),j&&"/"!==P.join("/").substr(-1)&&P.push("");var k=""===P[0]||P[0]&&"/"===P[0].charAt(0);return w&&(a.hostname=a.host=k?"":P.length?P.shift():"",(m=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=m.shift(),a.host=a.hostname=m.shift())),(g=g||a.host&&P.length)&&!k&&P.unshift(""),P.length?a.pathname=P.join("/"):(a.pathname=null,a.path=null),Ne(a.pathname)&&Ne(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=e.auth||a.auth,a.slashes=a.slashes||e.slashes,a.href=a.format(),a},qr.prototype.parseHost=function(){return Xr(this)};var ea=Object.freeze({parse:Jr,resolve:Zr,resolveObject:Wr,format:Kr,default:$r,Url:qr}),ta=Array.isArray,ra=Object.keys,aa=Object.prototype.hasOwnProperty,sa=function e(t,r){if(t===r)return !0;var a,s,n,o=ta(t),i=ta(r);if(o&&i){if((s=t.length)!=r.length)return !1;for(a=0;a<s;a++)if(!e(t[a],r[a]))return !1;return !0}if(o!=i)return !1;var u=t instanceof Date,l=r instanceof Date;if(u!=l)return !1;if(u&&l)return t.getTime()==r.getTime();var h=t instanceof RegExp,p=r instanceof RegExp;if(h!=p)return !1;if(h&&p)return t.toString()==r.toString();if(t instanceof Object&&r instanceof Object){var c=ra(t);if((s=c.length)!==ra(r).length)return !1;for(a=0;a<s;a++)if(!aa.call(r,c[a]))return !1;for(a=0;a<s;a++)if(!e(t[n=c[a]],r[n]))return !1;return !0}return !1},na={copy:function(e,t){for(var r in t=t||{},e)t[r]=e[r];return t},checkDataType:oa,checkDataTypes:function(e,t){switch(e.length){case 1:return oa(e[0],t,!0);default:var r="",a=ua(e);for(var s in a.array&&a.object&&(r=a.null?"(":"(!"+t+" || ",r+="typeof "+t+' !== "object")',delete a.null,delete a.array,delete a.object),a.number&&delete a.integer,a)r+=(r?" && ":"")+oa(s,t,!0);return r}},coerceToTypes:function(e,t){if(Array.isArray(t)){for(var r=[],a=0;a<t.length;a++){var s=t[a];ia[s]?r[r.length]=s:"array"===e&&"array"===s&&(r[r.length]=s);}if(r.length)return r}else {if(ia[t])return [t];if("array"===e&&"array"===t)return ["array"]}},toHash:ua,getProperty:pa,escapeQuotes:ca,equal:sa,ucs2length:function(e){for(var t,r=0,a=e.length,s=0;s<a;)r++,(t=e.charCodeAt(s++))>=55296&&t<=56319&&s<a&&56320==(64512&(t=e.charCodeAt(s)))&&s++;return r},varOccurences:function(e,t){t+="[^0-9]";var r=e.match(new RegExp(t,"g"));return r?r.length:0},varReplace:function(e,t,r){return t+="([^0-9])",r=r.replace(/\$/g,"$$$$"),e.replace(new RegExp(t,"g"),r+"$1")},cleanUpCode:function(e){return e.replace(fa,"").replace(da,"").replace(ma,"if (!($1))")},finalCleanUpCode:function(e,t){var r=e.match(va);r&&2==r.length&&(e=t?e.replace(ga,"").replace(wa,Ea):e.replace(ya,"").replace(ba,Pa));return (r=e.match(ja))&&3===r.length?e.replace(Sa,""):e},schemaHasRules:function(e,t){if("boolean"==typeof e)return !e;for(var r in e)if(t[r])return !0},schemaHasRulesExcept:function(e,t,r){if("boolean"==typeof e)return !e&&"not"!=r;for(var a in e)if(a!=r&&t[a])return !0},toQuotedString:Oa,getPathExpr:function(e,t,r,a){return Da(e,r?"'/' + "+t+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+t+" + ']'":"'[\\'' + "+t+" + '\\']'")},getPath:function(e,t,r){var a=Oa(r?"/"+_a(t):pa(t));return Da(e,a)},getData:function(e,t,r){var a,s,n,o;if(""===e)return "rootData";if("/"==e[0]){if(!ka.test(e))throw new Error("Invalid JSON-pointer: "+e);s=e,n="rootData";}else {if(!(o=e.match(Ra)))throw new Error("Invalid JSON-pointer: "+e);if(a=+o[1],"#"==(s=o[2])){if(a>=t)throw new Error("Cannot access property/index "+a+" levels up, current level is "+t);return r[t-a]}if(a>t)throw new Error("Cannot access data "+a+" levels up, current level is "+t);if(n="data"+(t-a||""),!s)return n}for(var i=n,u=s.split("/"),l=0;l<u.length;l++){var h=u[l];h&&(n+=pa(Ta(h)),i+=" && "+n);}return i},unescapeFragment:function(e){return Ta(decodeURIComponent(e))},unescapeJsonPointer:Ta,escapeFragment:function(e){return encodeURIComponent(_a(e))},escapeJsonPointer:_a};function oa(e,t,r){var a=r?" !== ":" === ",s=r?" || ":" && ",n=r?"!":"",o=r?"":"!";switch(e){case"null":return t+a+"null";case"array":return n+"Array.isArray("+t+")";case"object":return "("+n+t+s+"typeof "+t+a+'"object"'+s+o+"Array.isArray("+t+"))";case"integer":return "(typeof "+t+a+'"number"'+s+o+"("+t+" % 1)"+s+t+a+t+")";default:return "typeof "+t+a+'"'+e+'"'}}var ia=ua(["string","number","integer","boolean","null"]);function ua(e){for(var t={},r=0;r<e.length;r++)t[e[r]]=!0;return t}var la=/^[a-z$_][a-z$_0-9]*$/i,ha=/'|\\/g;function pa(e){return "number"==typeof e?"["+e+"]":la.test(e)?"."+e:"['"+ca(e)+"']"}function ca(e){return e.replace(ha,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}var fa=/else\s*{\s*}/g,da=/if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,ma=/if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;var va=/[^v.]errors/g,ya=/var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,ga=/var errors = 0;|var vErrors = null;/g,ba="return errors === 0;",Pa="validate.errors = null; return true;",wa=/if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,Ea="return data;",ja=/[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,Sa=/if \(rootData === undefined\) rootData = data;/;function Oa(e){return "'"+ca(e)+"'"}var ka=/^\/(?:[^~]|~0|~1)*$/,Ra=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function Da(e,t){return '""'==e?t:(e+" + "+t).replace(/' \+ '/g,"")}function _a(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function Ta(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}var xa=function(e){na.copy(e,this);};function $a(e,t){return e(t={exports:{}},t.exports),t.exports}var qa=$a(function(e){var t=e.exports=function(e,r,a){"function"==typeof r&&(a=r,r={}),function e(r,a,s,n,o,i,u,l,h){if(s&&"object"==typeof s&&!Array.isArray(s))for(var p in a(s,n,o,i,u,l,h),s){var c=s[p];if(Array.isArray(c)){if(p in t.arrayKeywords)for(var f=0;f<c.length;f++)e(r,a,c[f],n+"/"+p+"/"+f,o,n,p,s,f);}else if(p in t.propsKeywords){if(c&&"object"==typeof c)for(var d in c)e(r,a,c[d],n+"/"+p+"/"+d.replace(/~/g,"~0").replace(/\//g,"~1"),o,n,p,s,d);}else (p in t.keywords||r.allKeys&&!(p in t.skipKeywords))&&e(r,a,c,n+"/"+p,o,n,p,s);}}(r,a,e,"",e);};t.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0},t.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},t.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},t.skipKeywords={enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};}),Aa=ea&&$r||ea,Fa=Ua;function Ua(e,t,r){var a=this._refs[r];if("string"==typeof a){if(!this._refs[a])return Ua.call(this,e,t,a);a=this._refs[a];}if((a=a||this._schemas[r])instanceof xa)return Ha(a.schema,this._opts.inlineRefs)?a.schema:a.validate||this._compile(a);var s,n,o,i=Ca.call(this,t,r);return i&&(s=i.schema,t=i.root,o=i.baseId),s instanceof xa?n=s.validate||e.call(this,s.schema,t,void 0,o):void 0!==s&&(n=Ha(s,this._opts.inlineRefs)?s:e.call(this,s,t,void 0,o)),n}function Ca(e,t){var r=Aa.parse(t,!1,!0),a=Ba(r),s=za(this._getId(e.schema));if(a!==s){var n=Qa(a),o=this._refs[n];if("string"==typeof o)return function(e,t,r){var a=Ca.call(this,e,t);if(a){var s=a.schema,n=a.baseId;e=a.root;var o=this._getId(s);return o&&(n=Va(n,o)),La.call(this,r,n,s,e)}}.call(this,e,o,r);if(o instanceof xa)o.validate||this._compile(o),e=o;else {if(!((o=this._schemas[n])instanceof xa))return;if(o.validate||this._compile(o),n==Qa(t))return {schema:o,root:e,baseId:s};e=o;}if(!e.schema)return;s=za(this._getId(e.schema));}return La.call(this,r,s,e.schema,e)}Ua.normalizeId=Qa,Ua.fullPath=za,Ua.url=Va,Ua.ids=function(e){var t=Qa(this._getId(e)),r={"":t},a={"":za(t,!1)},s={},n=this;return qa(e,{allKeys:!0},function(e,t,o,i,u,l,h){if(""!==t){var p=n._getId(e),c=r[i],f=a[i]+"/"+u;if(void 0!==h&&(f+="/"+("number"==typeof h?h:na.escapeFragment(h))),"string"==typeof p){p=c=Qa(c?Aa.resolve(c,p):p);var d=n._refs[p];if("string"==typeof d&&(d=n._refs[d]),d&&d.schema){if(!sa(e,d.schema))throw new Error('id "'+p+'" resolves to more than one schema')}else if(p!=Qa(f))if("#"==p[0]){if(s[p]&&!sa(e,s[p]))throw new Error('id "'+p+'" resolves to more than one schema');s[p]=e;}else n._refs[p]=f;}r[t]=c,a[t]=f;}}),s},Ua.inlineRef=Ha,Ua.schema=Ca;var Na=na.toHash(["properties","patternProperties","enum","dependencies","definitions"]);function La(e,t,r,a){if(e.hash=e.hash||"","#/"==e.hash.slice(0,2)){for(var s=e.hash.split("/"),n=1;n<s.length;n++){var o=s[n];if(o){if(void 0===(r=r[o=na.unescapeFragment(o)]))break;var i;if(!Na[o]&&((i=this._getId(r))&&(t=Va(t,i)),r.$ref)){var u=Va(t,r.$ref),l=Ca.call(this,a,u);l&&(r=l.schema,a=l.root,t=l.baseId);}}}return void 0!==r&&r!==a.schema?{schema:r,root:a,baseId:t}:void 0}}var Ia=na.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]);function Ha(e,t){return !1!==t&&(void 0===t||!0===t?function e(t){var r;if(Array.isArray(t)){for(var a=0;a<t.length;a++)if("object"==typeof(r=t[a])&&!e(r))return !1}else for(var s in t){if("$ref"==s)return !1;if("object"==typeof(r=t[s])&&!e(r))return !1}return !0}(e):t?function e(t){var r,a=0;if(Array.isArray(t)){for(var s=0;s<t.length;s++)if("object"==typeof(r=t[s])&&(a+=e(r)),a==1/0)return 1/0}else for(var n in t){if("$ref"==n)return 1/0;if(Ia[n])a++;else if("object"==typeof(r=t[n])&&(a+=e(r)+1),a==1/0)return 1/0}return a}(e)<=t:void 0)}function za(e,t){return !1!==t&&(e=Qa(e)),Ba(Aa.parse(e,!1,!0))}function Ba(e){var t=e.protocol||"//"==e.href.slice(0,2)?"//":"";return (e.protocol||"")+t+(e.host||"")+(e.path||"")+"#"}var Ma=/#\/?$/;function Qa(e){return e?e.replace(Ma,""):""}function Va(e,t){return t=Qa(t),Aa.resolve(e,t)}var Ja={Validation:Ka(function(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0;}),MissingRef:Ka(Ya)};function Ya(e,t,r){this.message=r||Ya.message(e,t),this.missingRef=Fa.url(e,t),this.missingSchema=Fa.normalizeId(Fa.fullPath(this.missingRef));}function Ka(e){return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}Ya.message=function(e,t){return "can't resolve reference "+t+" from id "+e};var Ga=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var r,a="boolean"==typeof t.cycles&&t.cycles,s=t.cmp&&(r=t.cmp,function(e){return function(t,a){var s={key:t,value:e[t]},n={key:a,value:e[a]};return r(s,n)}}),n=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);var r,o;if(Array.isArray(t)){for(o="[",r=0;r<t.length;r++)r&&(o+=","),o+=e(t[r])||"null";return o+"]"}if(null===t)return "null";if(-1!==n.indexOf(t)){if(a)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var i=n.push(t)-1,u=Object.keys(t).sort(s&&s(t));for(o="",r=0;r<u.length;r++){var l=u[r],h=e(t[l]);h&&(o&&(o+=","),o+=JSON.stringify(l)+":"+h);}return n.splice(i,1),"{"+o+"}"}}(e)},Za=function(e,t,r){var a="",s=!0===e.schema.$async,n=e.util.schemaHasRulesExcept(e.schema,e.RULES.all,"$ref"),o=e.self._getId(e.schema);if(e.isTop){if(s){e.async=!0;var i="es7"==e.opts.async;e.yieldAwait=i?"await":"yield";}a+=" var validate = ",s?i?a+=" (async function ":("*"!=e.opts.async&&(a+="co.wrap"),a+="(function* "):a+=" (function ",a+=" (data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ",o&&(e.opts.sourceCode||e.opts.processCode)&&(a+=" /*# sourceURL="+o+" */ ");}if("boolean"==typeof e.schema||!n&&!e.schema.$ref){var u=e.level,l=e.dataLevel,h=e.schema["false schema"],p=e.schemaPath+e.util.getProperty("false schema"),c=e.errSchemaPath+"/false schema",f=!e.opts.allErrors,d="data"+(l||""),m="valid"+u;if(!1===e.schema){e.isTop?f=!0:a+=" var "+m+" = false; ",(Z=Z||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+("false schema")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'boolean schema is false' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),a+=" } "):a+=" {} ";var v=a;a=Z.pop(),!e.compositeRule&&f?e.async?a+=" throw new ValidationError(["+v+"]); ":a+=" validate.errors = ["+v+"]; return false; ":a+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}else e.isTop?a+=s?" return data; ":" validate.errors = null; return true; ":a+=" var "+m+" = true; ";return e.isTop&&(a+=" }); return validate; "),a}if(e.isTop){var y=e.isTop;u=e.level=0,l=e.dataLevel=0,d="data";e.rootId=e.resolve.fullPath(e.self._getId(e.root.schema)),e.baseId=e.baseId||e.rootId,delete e.isTop,e.dataPathArr=[void 0],a+=" var vErrors = null; ",a+=" var errors = 0;     ",a+=" if (rootData === undefined) rootData = data; ";}else {u=e.level,d="data"+((l=e.dataLevel)||"");if(o&&(e.baseId=e.resolve.url(e.baseId,o)),s&&!e.async)throw new Error("async schema in sync schema");a+=" var errs_"+u+" = errors;";}m="valid"+u,f=!e.opts.allErrors;var b="",P="",w=e.schema.type,E=Array.isArray(w);if(E&&1==w.length&&(w=w[0],E=!1),e.schema.$ref&&n){if("fail"==e.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+e.errSchemaPath+'" (see option extendRefs)');!0!==e.opts.extendRefs&&(n=!1,e.logger.warn('$ref: keywords ignored in schema at path "'+e.errSchemaPath+'"'));}if(w){if(e.opts.coerceTypes)var j=e.util.coerceToTypes(e.opts.coerceTypes,w);var S=e.RULES.types[w];if(j||E||!0===S||S&&!W(S)){p=e.schemaPath+".type",c=e.errSchemaPath+"/type",p=e.schemaPath+".type",c=e.errSchemaPath+"/type";var O=E?"checkDataTypes":"checkDataType";if(a+=" if ("+e.util[O](w,d,!0)+") { ",j){var k="dataType"+u,R="coerced"+u;a+=" var "+k+" = typeof "+d+"; ","array"==e.opts.coerceTypes&&(a+=" if ("+k+" == 'object' && Array.isArray("+d+")) "+k+" = 'array'; "),a+=" var "+R+" = undefined; ";var D="",_=j;if(_)for(var T,x=-1,$=_.length-1;x<$;)T=_[x+=1],x&&(a+=" if ("+R+" === undefined) { ",D+="}"),"array"==e.opts.coerceTypes&&"array"!=T&&(a+=" if ("+k+" == 'array' && "+d+".length == 1) { "+R+" = "+d+" = "+d+"[0]; "+k+" = typeof "+d+";  } "),"string"==T?a+=" if ("+k+" == 'number' || "+k+" == 'boolean') "+R+" = '' + "+d+"; else if ("+d+" === null) "+R+" = ''; ":"number"==T||"integer"==T?(a+=" if ("+k+" == 'boolean' || "+d+" === null || ("+k+" == 'string' && "+d+" && "+d+" == +"+d+" ","integer"==T&&(a+=" && !("+d+" % 1)"),a+=")) "+R+" = +"+d+"; "):"boolean"==T?a+=" if ("+d+" === 'false' || "+d+" === 0 || "+d+" === null) "+R+" = false; else if ("+d+" === 'true' || "+d+" === 1) "+R+" = true; ":"null"==T?a+=" if ("+d+" === '' || "+d+" === 0 || "+d+" === false) "+R+" = null; ":"array"==e.opts.coerceTypes&&"array"==T&&(a+=" if ("+k+" == 'string' || "+k+" == 'number' || "+k+" == 'boolean' || "+d+" == null) "+R+" = ["+d+"]; ");a+=" "+D+" if ("+R+" === undefined) {   ",(Z=Z||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+("type")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { type: '",a+=E?""+w.join(","):""+w,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=E?""+w.join(","):""+w,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+p+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),a+=" } "):a+=" {} ";v=a;a=Z.pop(),!e.compositeRule&&f?e.async?a+=" throw new ValidationError(["+v+"]); ":a+=" validate.errors = ["+v+"]; return false; ":a+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  ";var q=l?"data"+(l-1||""):"parentData",A=l?e.dataPathArr[l]:"parentDataProperty";a+=" "+d+" = "+R+"; ",l||(a+="if ("+q+" !== undefined)"),a+=" "+q+"["+A+"] = "+R+"; } ";}else {(Z=Z||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+("type")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { type: '",a+=E?""+w.join(","):""+w,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=E?""+w.join(","):""+w,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+p+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),a+=" } "):a+=" {} ";v=a;a=Z.pop(),!e.compositeRule&&f?e.async?a+=" throw new ValidationError(["+v+"]); ":a+=" validate.errors = ["+v+"]; return false; ":a+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}a+=" } ";}}if(e.schema.$ref&&!n)a+=" "+e.RULES.all.$ref.code(e,"$ref")+" ",f&&(a+=" } if (errors === ",a+=y?"0":"errs_"+u,a+=") { ",P+="}");else {e.opts.v5&&e.schema.patternGroups&&e.logger.warn('keyword "patternGroups" is deprecated and disabled. Use option patternGroups: true to enable.');var F=e.RULES;if(F)for(var U=-1,C=F.length-1;U<C;)if(W(S=F[U+=1])){if(S.type&&(a+=" if ("+e.util.checkDataType(S.type,d)+") { "),e.opts.useDefaults&&!e.compositeRule)if("object"==S.type&&e.schema.properties){h=e.schema.properties;var N=Object.keys(h);if(N)for(var L,I=-1,H=N.length-1;I<H;){if(void 0!==(B=h[L=N[I+=1]]).default)a+="  if ("+(Q=d+e.util.getProperty(L))+" === undefined) "+Q+" = ","shared"==e.opts.useDefaults?a+=" "+e.useDefault(B.default)+" ":a+=" "+JSON.stringify(B.default)+" ",a+="; ";}}else if("array"==S.type&&Array.isArray(e.schema.items)){var z=e.schema.items;if(z){x=-1;for(var B,M=z.length-1;x<M;){var Q;if(void 0!==(B=z[x+=1]).default)a+="  if ("+(Q=d+"["+x+"]")+" === undefined) "+Q+" = ","shared"==e.opts.useDefaults?a+=" "+e.useDefault(B.default)+" ":a+=" "+JSON.stringify(B.default)+" ",a+="; ";}}}var V=S.rules;if(V)for(var J,Y=-1,K=V.length-1;Y<K;)if(X(J=V[Y+=1])){var G=J.code(e,J.keyword,S.type);G&&(a+=" "+G+" ",f&&(b+="}"));}if(f&&(a+=" "+b+" ",b=""),S.type&&(a+=" } ",w&&w===S.type&&!j)){a+=" else { ";var Z;p=e.schemaPath+".type",c=e.errSchemaPath+"/type";(Z=Z||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+("type")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { type: '",a+=E?""+w.join(","):""+w,a+="' } ",!1!==e.opts.messages&&(a+=" , message: 'should be ",a+=E?""+w.join(","):""+w,a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+p+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),a+=" } "):a+=" {} ";v=a;a=Z.pop(),!e.compositeRule&&f?e.async?a+=" throw new ValidationError(["+v+"]); ":a+=" validate.errors = ["+v+"]; return false; ":a+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ";}f&&(a+=" if (errors === ",a+=y?"0":"errs_"+u,a+=") { ",P+="}");}}function W(e){for(var t=e.rules,r=0;r<t.length;r++)if(X(t[r]))return !0}function X(t){return void 0!==e.schema[t.keyword]||t.implements&&function(t){for(var r=t.implements,a=0;a<r.length;a++)if(void 0!==e.schema[r[a]])return !0}(t)}return f&&(a+=" "+P+" "),y?(s?(a+=" if (errors === 0) return data;           ",a+=" else throw new ValidationError(vErrors); "):(a+=" validate.errors = vErrors; ",a+=" return errors === 0;       "),a+=" }); return validate;"):a+=" var "+m+" = errors === errs_"+u+";",a=e.util.cleanUpCode(a),y&&(a=e.util.finalCleanUpCode(a,s)),a},Wa=Array.prototype.slice,Xa=es.default=es.co=es;function es(e){var t=this,r=Wa.call(arguments,1);return new Promise(function(a,s){if("function"==typeof e&&(e=e.apply(t,r)),!e||"function"!=typeof e.next)return a(e);function n(t){var r;try{r=e.next(t);}catch(e){return s(e)}i(r);}function o(t){var r;try{r=e.throw(t);}catch(e){return s(e)}i(r);}function i(e){if(e.done)return a(e.value);var r=ts.call(t,e.value);return r&&rs(r)?r.then(n,o):o(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "'+String(e.value)+'"'))}n();})}function ts(e){return e?rs(e)?e:function(e){var t=e.constructor;return !!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName||as(t.prototype))}(e)||as(e)?es.call(this,e):"function"==typeof e?function(e){var t=this;return new Promise(function(r,a){e.call(t,function(e,t){if(e)return a(e);arguments.length>2&&(t=Wa.call(arguments,1)),r(t);});})}.call(this,e):Array.isArray(e)?function(e){return Promise.all(e.map(ts,this))}.call(this,e):Object==e.constructor?function(e){for(var t=new e.constructor,r=Object.keys(e),a=[],s=0;s<r.length;s++){var n=r[s],o=ts.call(this,e[n]);o&&rs(o)?i(o,n):t[n]=e[n];}return Promise.all(a).then(function(){return t});function i(e,r){t[r]=void 0,a.push(e.then(function(e){t[r]=e;}));}}.call(this,e):e:e}function rs(e){return "function"==typeof e.then}function as(e){return "function"==typeof e.next&&"function"==typeof e.throw}es.wrap=function(e){return t.__generatorFunction__=e,t;function t(){return es.call(this,e.apply(this,arguments))}};var ss=na.ucs2length,ns=Ja.Validation,os=function e(t,r,a,s){var n=this,o=this._opts,i=[void 0],u={},l=[],h={},p=[],c={},f=[];r=r||{schema:t,refVal:i,refs:u};var d=function(e,t,r){var a=is.call(this,e,t,r);return a>=0?{index:a,compiling:!0}:(a=this._compilations.length,this._compilations[a]={schema:e,root:t,baseId:r},{index:a,compiling:!1})}.call(this,t,r,s);var m=this._compilations[d.index];if(d.compiling)return m.callValidate=function e(){var t=m.validate;var r=t.apply(null,arguments);e.errors=t.errors;return r};var v=this._formats;var y=this.RULES;try{var g=P(t,r,a,s);m.validate=g;var b=m.callValidate;return b&&(b.schema=g.schema,b.errors=null,b.refs=g.refs,b.refVal=g.refVal,b.root=g.root,b.$async=g.$async,o.sourceCode&&(b.source=g.source)),g}finally{(function(e,t,r){var a=is.call(this,e,t,r);a>=0&&this._compilations.splice(a,1);}).call(this,t,r,s);}function P(t,a,s,h){var c=!a||a&&a.schema==t;if(a.schema!=r.schema)return e.call(n,t,a,s,h);var d,m=!0===t.$async,g=Za({isTop:!0,schema:t,isRoot:c,baseId:h,root:a,schemaPath:"",errSchemaPath:"#",errorPath:'""',MissingRefError:Ja.MissingRef,RULES:y,validate:Za,util:na,resolve:Fa,resolveRef:w,usePattern:S,useDefault:O,useCustomRule:k,opts:o,formats:v,logger:n.logger,self:n});g=cs(i,hs)+cs(l,us)+cs(p,ls)+cs(f,ps)+g,o.processCode&&(g=o.processCode(g));try{var b=new Function("self","RULES","formats","root","refVal","defaults","customRules","co","equal","ucs2length","ValidationError",g);d=b(n,y,v,r,i,p,f,Xa,sa,ss,ns),i[0]=d;}catch(e){throw n.logger.error("Error compiling schema, function code:",g),e}return d.schema=t,d.errors=null,d.refs=u,d.refVal=i,d.root=c?d:a,m&&(d.$async=!0),!0===o.sourceCode&&(d.source={code:g,patterns:l,defaults:p}),d}function w(t,s,l){s=Fa.url(t,s);var h,p,c=u[s];if(void 0!==c)return j(h=i[c],p="refVal["+c+"]");if(!l&&r.refs){var f=r.refs[s];if(void 0!==f)return h=r.refVal[f],p=E(s,h),j(h,p)}p=E(s);var d=Fa.call(n,P,r,s);if(void 0===d){var m=a&&a[s];m&&(d=Fa.inlineRef(m,o.inlineRefs)?m:e.call(n,m,r,a,t));}if(void 0!==d)return function(e,t){var r=u[e];i[r]=t;}(s,d),j(d,p);!function(e){delete u[e];}(s);}function E(e,t){var r=i.length;return i[r]=t,u[e]=r,"refVal"+r}function j(e,t){return "object"==typeof e||"boolean"==typeof e?{code:t,schema:e,inline:!0}:{code:t,$async:e&&e.$async}}function S(e){var t=h[e];return void 0===t&&(t=h[e]=l.length,l[t]=e),"pattern"+t}function O(e){switch(typeof e){case"boolean":case"number":return ""+e;case"string":return na.toQuotedString(e);case"object":if(null===e)return "null";var t=Ga(e),r=c[t];return void 0===r&&(r=c[t]=p.length,p[r]=e),"default"+r}}function k(e,t,r,a){var s=e.definition.validateSchema;if(s&&!1!==n._opts.validateSchema){var i=s(t);if(!i){var u="keyword schema is invalid: "+n.errorsText(s.errors);if("log"!=n._opts.validateSchema)throw new Error(u);n.logger.error(u);}}var l,h=e.definition.compile,p=e.definition.inline,c=e.definition.macro;if(h)l=h.call(n,t,r,a);else if(c)l=c.call(n,t,r,a),!1!==o.validateSchema&&n.validateSchema(l,!0);else if(p)l=p.call(n,a,e.keyword,t,r);else if(!(l=e.definition.validate))return;if(void 0===l)throw new Error('custom keyword "'+e.keyword+'"failed to compile');var d=f.length;return f[d]=l,{code:"customRule"+d,validate:l}}};function is(e,t,r){for(var a=0;a<this._compilations.length;a++){var s=this._compilations[a];if(s.schema==e&&s.root==t&&s.baseId==r)return a}return -1}function us(e,t){return "var pattern"+e+" = new RegExp("+na.toQuotedString(t[e])+");"}function ls(e){return "var default"+e+" = defaults["+e+"];"}function hs(e,t){return void 0===t[e]?"":"var refVal"+e+" = refVal["+e+"];"}function ps(e){return "var customRule"+e+" = customRules["+e+"];"}function cs(e,t){if(!e.length)return "";for(var r="",a=0;a<e.length;a++)r+=t(a,e);return r}var fs=$a(function(e){var t=e.exports=function(){this._cache={};};t.prototype.put=function(e,t){this._cache[e]=t;},t.prototype.get=function(e){return this._cache[e]},t.prototype.del=function(e){delete this._cache[e];},t.prototype.clear=function(){this._cache={};};}),ds=/^\d\d\d\d-(\d\d)-(\d\d)$/,ms=[0,31,29,31,30,31,30,31,31,30,31,30,31],vs=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,ys=/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,gs=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,bs=/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,Ps=/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,ws=/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,Es=/^(?:\/(?:[^~/]|~0|~1)*)*$|^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,js=/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,Ss=Os;function Os(e){return e="full"==e?"full":"fast",na.copy(Os[e])}function ks(e){var t=e.match(ds);if(!t)return !1;var r=+t[1],a=+t[2];return r>=1&&r<=12&&a>=1&&a<=ms[r]}function Rs(e,t){var r=e.match(vs);if(!r)return !1;var a=r[1],s=r[2],n=r[3],o=r[5];return a<=23&&s<=59&&n<=59&&(!t||o)}Os.fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,uri:/^(?:[a-z][a-z0-9+-.]*)(?::|\/)\/?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,"uri-template":bs,url:Ps,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:ys,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:xs,uuid:ws,"json-pointer":Es,"relative-json-pointer":js},Os.full={date:ks,time:Rs,"date-time":function(e){var t=e.split(Ds);return 2==t.length&&ks(t[0])&&Rs(t[1],!0)},uri:function(e){return _s.test(e)&&gs.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":bs,url:Ps,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:function(e){return e.length<=255&&ys.test(e)},ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:xs,uuid:ws,"json-pointer":Es,"relative-json-pointer":js};var Ds=/t|\s/i;var _s=/\/|:/;var Ts=/[^\\]\\Z/;function xs(e){if(Ts.test(e))return !1;try{return !0}catch(e){return !1}}var $s=function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c=e.opts.$data&&i&&i.$data;c?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i;var f="maximum"==t,d=f?"exclusiveMaximum":"exclusiveMinimum",m=e.schema[d],v=e.opts.$data&&m&&m.$data,y=f?"<":">",g=f?">":"<",b=void 0;if(v){var P=e.util.getData(m.$data,o,e.dataPathArr),w="exclusive"+n,E="exclType"+n,j="exclIsNumber"+n,S="' + "+(R="op"+n)+" + '";s+=" var schemaExcl"+n+" = "+P+"; ",s+=" var "+w+"; var "+E+" = typeof "+(P="schemaExcl"+n)+"; if ("+E+" != 'boolean' && "+E+" != 'undefined' && "+E+" != 'number') { ";var O;b=d;(O=O||[]).push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(b||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(s+=" , message: '"+d+" should be boolean' "),e.opts.verbose&&(s+=" , schema: validate.schema"+u+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var k=s;s=O.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+k+"]); ":s+=" validate.errors = ["+k+"]; return false; ":s+=" var err = "+k+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } else if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+E+" == 'number' ? ( ("+w+" = "+a+" === undefined || "+P+" "+y+"= "+a+") ? "+p+" "+g+"= "+P+" : "+p+" "+g+" "+a+" ) : ( ("+w+" = "+P+" === true) ? "+p+" "+g+"= "+a+" : "+p+" "+g+" "+a+" ) || "+p+" !== "+p+") { var op"+n+" = "+w+" ? '"+y+"' : '"+y+"=';";}else {S=y;if((j="number"==typeof m)&&c){var R="'"+S+"'";s+=" if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" ( "+a+" === undefined || "+m+" "+y+"= "+a+" ? "+p+" "+g+"= "+m+" : "+p+" "+g+" "+a+" ) || "+p+" !== "+p+") { ";}else {j&&void 0===i?(w=!0,b=d,l=e.errSchemaPath+"/"+d,a=m,g+="="):(j&&(a=Math[f?"min":"max"](m,i)),m===(!j||a)?(w=!0,b=d,l=e.errSchemaPath+"/"+d,g+="="):(w=!1,S+="="));R="'"+S+"'";s+=" if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+p+" "+g+" "+a+" || "+p+" !== "+p+") { ";}}b=b||t,(O=O||[]).push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(b||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { comparison: "+R+", limit: "+a+", exclusive: "+w+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be "+S+" ",s+=c?"' + "+a:a+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=c?"validate.schema"+u:""+i,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";k=s;return s=O.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+k+"]); ":s+=" validate.errors = ["+k+"]; return false; ":s+=" var err = "+k+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",h&&(s+=" else { "),s},qs=function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c=e.opts.$data&&i&&i.$data;c?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i,s+="if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+p+".length "+("maxItems"==t?">":"<")+" "+a+") { ";var f=t,d=d||[];d.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxItems"==t?"more":"less",s+=" than ",s+=c?"' + "+a+" + '":""+i,s+=" items' "),e.opts.verbose&&(s+=" , schema:  ",s+=c?"validate.schema"+u:""+i,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var m=s;return s=d.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+m+"]); ":s+=" validate.errors = ["+m+"]; return false; ":s+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s},As=function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c=e.opts.$data&&i&&i.$data;c?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i;var f="maxLength"==t?">":"<";s+="if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),!1===e.opts.unicode?s+=" "+p+".length ":s+=" ucs2length("+p+") ",s+=" "+f+" "+a+") { ";var d=t,m=m||[];m.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(d||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT be ",s+="maxLength"==t?"longer":"shorter",s+=" than ",s+=c?"' + "+a+" + '":""+i,s+=" characters' "),e.opts.verbose&&(s+=" , schema:  ",s+=c?"validate.schema"+u:""+i,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var v=s;return s=m.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+v+"]); ":s+=" validate.errors = ["+v+"]; return false; ":s+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s},Fs=function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c=e.opts.$data&&i&&i.$data;c?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i,s+="if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" Object.keys("+p+").length "+("maxProperties"==t?">":"<")+" "+a+") { ";var f=t,d=d||[];d.push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxProperties"==t?"more":"less",s+=" than ",s+=c?"' + "+a+" + '":""+i,s+=" properties' "),e.opts.verbose&&(s+=" , schema:  ",s+=c?"validate.schema"+u:""+i,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var m=s;return s=d.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+m+"]); ":s+=" validate.errors = ["+m+"]; return false; ":s+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s},Us={$ref:function(e,t,r){var a,s,n=" ",o=e.level,i=e.dataLevel,u=e.schema[t],l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(i||""),c="valid"+o;if("#"==u||"#/"==u)e.isRoot?(a=e.async,s="validate"):(a=!0===e.root.schema.$async,s="root.refVal[0]");else {var f=e.resolveRef(e.baseId,u,e.isRoot);if(void 0===f){var d=e.MissingRefError.message(e.baseId,u);if("fail"==e.opts.missingRefs){e.logger.error(d),(g=g||[]).push(n),n="",!1!==e.createErrors?(n+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { ref: '"+e.util.escapeQuotes(u)+"' } ",!1!==e.opts.messages&&(n+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(u)+"' "),e.opts.verbose&&(n+=" , schema: "+e.util.toQuotedString(u)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),n+=" } "):n+=" {} ";var m=n;n=g.pop(),!e.compositeRule&&h?e.async?n+=" throw new ValidationError(["+m+"]); ":n+=" validate.errors = ["+m+"]; return false; ":n+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",h&&(n+=" if (false) { ");}else {if("ignore"!=e.opts.missingRefs)throw new e.MissingRefError(e.baseId,u,d);e.logger.warn(d),h&&(n+=" if (true) { ");}}else if(f.inline){var v=e.util.copy(e);v.level++;var y="valid"+v.level;v.schema=f.schema,v.schemaPath="",v.errSchemaPath=u,n+=" "+e.validate(v).replace(/validate\.schema/g,f.code)+" ",h&&(n+=" if ("+y+") { ");}else a=!0===f.$async,s=f.code;}if(s){var g;(g=g||[]).push(n),n="",e.opts.passContext?n+=" "+s+".call(this, ":n+=" "+s+"( ",n+=" "+p+", (dataPath || '')",'""'!=e.errorPath&&(n+=" + "+e.errorPath);var b=n+=" , "+(i?"data"+(i-1||""):"parentData")+" , "+(i?e.dataPathArr[i]:"parentDataProperty")+", rootData)  ";if(n=g.pop(),a){if(!e.async)throw new Error("async schema referenced by sync schema");h&&(n+=" var "+c+"; "),n+=" try { "+e.yieldAwait+" "+b+"; ",h&&(n+=" "+c+" = true; "),n+=" } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ",h&&(n+=" "+c+" = false; "),n+=" } ",h&&(n+=" if ("+c+") { ");}else n+=" if (!"+b+") { if (vErrors === null) vErrors = "+s+".errors; else vErrors = vErrors.concat("+s+".errors); errors = vErrors.length; } ",h&&(n+=" else { ");}return n},allOf:function(e,t,r){var a=" ",s=e.schema[t],n=e.schemaPath+e.util.getProperty(t),o=e.errSchemaPath+"/"+t,i=!e.opts.allErrors,u=e.util.copy(e),l="";u.level++;var h="valid"+u.level,p=u.baseId,c=!0,f=s;if(f)for(var d,m=-1,v=f.length-1;m<v;)d=f[m+=1],e.util.schemaHasRules(d,e.RULES.all)&&(c=!1,u.schema=d,u.schemaPath=n+"["+m+"]",u.errSchemaPath=o+"/"+m,a+="  "+e.validate(u)+" ",u.baseId=p,i&&(a+=" if ("+h+") { ",l+="}"));return i&&(a+=c?" if (true) { ":" "+l.slice(0,-1)+" "),a=e.util.cleanUpCode(a)},anyOf:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c="errs__"+s,f=e.util.copy(e),d="";f.level++;var m="valid"+f.level;if(o.every(function(t){return e.util.schemaHasRules(t,e.RULES.all)})){var v=f.baseId;a+=" var "+c+" = errors; var "+p+" = false;  ";var y=e.compositeRule;e.compositeRule=f.compositeRule=!0;var g=o;if(g)for(var b,P=-1,w=g.length-1;P<w;)b=g[P+=1],f.schema=b,f.schemaPath=i+"["+P+"]",f.errSchemaPath=u+"/"+P,a+="  "+e.validate(f)+" ",f.baseId=v,a+=" "+p+" = "+p+" || "+m+"; if (!"+p+") { ",d+="}";e.compositeRule=f.compositeRule=y,a+=" "+d+" if (!"+p+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should match some schema in anyOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&l&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),a+=" } else {  errors = "+c+"; if (vErrors !== null) { if ("+c+") vErrors.length = "+c+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } "),a=e.util.cleanUpCode(a);}else l&&(a+=" if (true) { ");return a},const:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c=e.opts.$data&&o&&o.$data;c&&(a+=" var schema"+s+" = "+e.util.getData(o.$data,n,e.dataPathArr)+"; "),c||(a+=" var schema"+s+" = validate.schema"+i+";"),a+="var "+p+" = equal("+h+", schema"+s+"); if (!"+p+") {   ";var f=f||[];f.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'const' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to constant' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var d=a;return a=f.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+d+"]); ":a+=" validate.errors = ["+d+"]; return false; ":a+=" var err = "+d+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",l&&(a+=" else { "),a},contains:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c="errs__"+s,f=e.util.copy(e);f.level++;var d="valid"+f.level,m="i"+s,v=f.dataLevel=e.dataLevel+1,y="data"+v,g=e.baseId,b=e.util.schemaHasRules(o,e.RULES.all);if(a+="var "+c+" = errors;var "+p+";",b){var P=e.compositeRule;e.compositeRule=f.compositeRule=!0,f.schema=o,f.schemaPath=i,f.errSchemaPath=u,a+=" var "+d+" = false; for (var "+m+" = 0; "+m+" < "+h+".length; "+m+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);var w=h+"["+m+"]";f.dataPathArr[v]=m;var E=e.validate(f);f.baseId=g,e.util.varOccurences(E,y)<2?a+=" "+e.util.varReplace(E,y,w)+" ":a+=" var "+y+" = "+w+"; "+E+" ",a+=" if ("+d+") break; }  ",e.compositeRule=f.compositeRule=P,a+="  if (!"+d+") {";}else a+=" if ("+h+".length == 0) {";var j=j||[];j.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'contains' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should contain a valid item' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var S=a;return a=j.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+S+"]); ":a+=" validate.errors = ["+S+"]; return false; ":a+=" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ",b&&(a+="  errors = "+c+"; if (vErrors !== null) { if ("+c+") vErrors.length = "+c+"; else vErrors = null; } "),e.opts.allErrors&&(a+=" } "),a=e.util.cleanUpCode(a)},dependencies:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="errs__"+s,c=e.util.copy(e),f="";c.level++;var d="valid"+c.level,m={},v={},y=e.opts.ownProperties;for(w in o){var g=o[w],b=Array.isArray(g)?v:m;b[w]=g;}a+="var "+p+" = errors;";var P=e.errorPath;for(var w in a+="var missing"+s+";",v)if((b=v[w]).length){if(a+=" if ( "+h+e.util.getProperty(w)+" !== undefined ",y&&(a+=" && Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(w)+"') "),l){a+=" && ( ";var E=b;if(E)for(var j=-1,S=E.length-1;j<S;)T=E[j+=1],j&&(a+=" || "),a+=" ( ( "+(A=h+(q=e.util.getProperty(T)))+" === undefined ",y&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(T)+"') "),a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?T:q)+") ) ";a+=")) {  ";var O="missing"+s,k="' + "+O+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(P,O,!0):P+" + "+O);var R=R||[];R.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+k+"', depsCount: "+b.length+", deps: '"+e.util.escapeQuotes(1==b.length?b[0]:b.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",1==b.length?a+="property "+e.util.escapeQuotes(b[0]):a+="properties "+e.util.escapeQuotes(b.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var D=a;a=R.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+D+"]); ":a+=" validate.errors = ["+D+"]; return false; ":a+=" var err = "+D+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";}else {a+=" ) { ";var _=b;if(_)for(var T,x=-1,$=_.length-1;x<$;){T=_[x+=1];var q=e.util.getProperty(T),A=(k=e.util.escapeQuotes(T),h+q);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(P,T,e.opts.jsonPointers)),a+=" if ( "+A+" === undefined ",y&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(T)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+k+"', depsCount: "+b.length+", deps: '"+e.util.escapeQuotes(1==b.length?b[0]:b.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",1==b.length?a+="property "+e.util.escapeQuotes(b[0]):a+="properties "+e.util.escapeQuotes(b.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";}}a+=" }   ",l&&(f+="}",a+=" else { ");}e.errorPath=P;var F=c.baseId;for(var w in m)g=m[w],e.util.schemaHasRules(g,e.RULES.all)&&(a+=" "+d+" = true; if ( "+h+e.util.getProperty(w)+" !== undefined ",y&&(a+=" && Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(w)+"') "),a+=") { ",c.schema=g,c.schemaPath=i+e.util.getProperty(w),c.errSchemaPath=u+"/"+e.util.escapeFragment(w),a+="  "+e.validate(c)+" ",c.baseId=F,a+=" }  ",l&&(a+=" if ("+d+") { ",f+="}"));return l&&(a+="   "+f+" if ("+p+" == errors) {"),a=e.util.cleanUpCode(a)},enum:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c=e.opts.$data&&o&&o.$data;c&&(a+=" var schema"+s+" = "+e.util.getData(o.$data,n,e.dataPathArr)+"; ");var f="i"+s,d="schema"+s;c||(a+=" var "+d+" = validate.schema"+i+";"),a+="var "+p+";",c&&(a+=" if (schema"+s+" === undefined) "+p+" = true; else if (!Array.isArray(schema"+s+")) "+p+" = false; else {"),a+=p+" = false;for (var "+f+"=0; "+f+"<"+d+".length; "+f+"++) if (equal("+h+", "+d+"["+f+"])) { "+p+" = true; break; }",c&&(a+="  }  "),a+=" if (!"+p+") {   ";var m=m||[];m.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { allowedValues: schema"+s+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var v=a;return a=m.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+v+"]); ":a+=" validate.errors = ["+v+"]; return false; ":a+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",l&&(a+=" else { "),a},format:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||"");if(!1===e.opts.format)return l&&(a+=" if (true) { "),a;var p,c=e.opts.$data&&o&&o.$data;c?(a+=" var schema"+s+" = "+e.util.getData(o.$data,n,e.dataPathArr)+"; ",p="schema"+s):p=o;var f=e.opts.unknownFormats,d=Array.isArray(f);if(c)a+=" var "+(m="format"+s)+" = formats["+p+"]; var "+(v="isObject"+s)+" = typeof "+m+" == 'object' && !("+m+" instanceof RegExp) && "+m+".validate; var "+(y="formatType"+s)+" = "+v+" && "+m+".type || 'string'; if ("+v+") { ",e.async&&(a+=" var async"+s+" = "+m+".async; "),a+=" "+m+" = "+m+".validate; } if (  ",c&&(a+=" ("+p+" !== undefined && typeof "+p+" != 'string') || "),a+=" (","ignore"!=f&&(a+=" ("+p+" && !"+m+" ",d&&(a+=" && self._opts.unknownFormats.indexOf("+p+") == -1 "),a+=") || "),a+=" ("+m+" && "+y+" == '"+r+"' && !(typeof "+m+" == 'function' ? ",e.async?a+=" (async"+s+" ? "+e.yieldAwait+" "+m+"("+h+") : "+m+"("+h+")) ":a+=" "+m+"("+h+") ",a+=" : "+m+".test("+h+"))))) {";else {var m;if(!(m=e.formats[o])){if("ignore"==f)return e.logger.warn('unknown format "'+o+'" ignored in schema at path "'+e.errSchemaPath+'"'),l&&(a+=" if (true) { "),a;if(d&&f.indexOf(o)>=0)return l&&(a+=" if (true) { "),a;throw new Error('unknown format "'+o+'" is used in schema at path "'+e.errSchemaPath+'"')}var v,y=(v="object"==typeof m&&!(m instanceof RegExp)&&m.validate)&&m.type||"string";if(v){var g=!0===m.async;m=m.validate;}if(y!=r)return l&&(a+=" if (true) { "),a;if(g){if(!e.async)throw new Error("async format in sync schema");var b="formats"+e.util.getProperty(o)+".validate";a+=" if (!("+e.yieldAwait+" "+b+"("+h+"))) { ";}else a+=" if (! ",b="formats"+e.util.getProperty(o),v&&(b+=".validate"),a+="function"==typeof m?" "+b+"("+h+") ":" "+b+".test("+h+") ",a+=") { ";}var P=P||[];P.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { format:  ",a+=c?""+p:""+e.util.toQuotedString(o),a+="  } ",!1!==e.opts.messages&&(a+=" , message: 'should match format \"",a+=c?"' + "+p+" + '":""+e.util.escapeQuotes(o),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=c?"validate.schema"+i:""+e.util.toQuotedString(o),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var w=a;return a=P.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+w+"]); ":a+=" validate.errors = ["+w+"]; return false; ":a+=" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",l&&(a+=" else { "),a},items:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c="errs__"+s,f=e.util.copy(e),d="";f.level++;var m="valid"+f.level,v="i"+s,y=f.dataLevel=e.dataLevel+1,g="data"+y,b=e.baseId;if(a+="var "+c+" = errors;var "+p+";",Array.isArray(o)){var P=e.schema.additionalItems;if(!1===P){a+=" "+p+" = "+h+".length <= "+o.length+"; ";var w=u;u=e.errSchemaPath+"/additionalItems",a+="  if (!"+p+") {   ";var E=E||[];E.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+o.length+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have more than "+o.length+" items' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var j=a;a=E.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+j+"]); ":a+=" validate.errors = ["+j+"]; return false; ":a+=" var err = "+j+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",u=w,l&&(d+="}",a+=" else { ");}var S=o;if(S)for(var O,k=-1,R=S.length-1;k<R;)if(O=S[k+=1],e.util.schemaHasRules(O,e.RULES.all)){a+=" "+m+" = true; if ("+h+".length > "+k+") { ";var D=h+"["+k+"]";f.schema=O,f.schemaPath=i+"["+k+"]",f.errSchemaPath=u+"/"+k,f.errorPath=e.util.getPathExpr(e.errorPath,k,e.opts.jsonPointers,!0),f.dataPathArr[y]=k;var _=e.validate(f);f.baseId=b,e.util.varOccurences(_,g)<2?a+=" "+e.util.varReplace(_,g,D)+" ":a+=" var "+g+" = "+D+"; "+_+" ",a+=" }  ",l&&(a+=" if ("+m+") { ",d+="}");}"object"==typeof P&&e.util.schemaHasRules(P,e.RULES.all)&&(f.schema=P,f.schemaPath=e.schemaPath+".additionalItems",f.errSchemaPath=e.errSchemaPath+"/additionalItems",a+=" "+m+" = true; if ("+h+".length > "+o.length+") {  for (var "+v+" = "+o.length+"; "+v+" < "+h+".length; "+v+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0),D=h+"["+v+"]",f.dataPathArr[y]=v,_=e.validate(f),f.baseId=b,e.util.varOccurences(_,g)<2?a+=" "+e.util.varReplace(_,g,D)+" ":a+=" var "+g+" = "+D+"; "+_+" ",l&&(a+=" if (!"+m+") break; "),a+=" } }  ",l&&(a+=" if ("+m+") { ",d+="}"));}else e.util.schemaHasRules(o,e.RULES.all)&&(f.schema=o,f.schemaPath=i,f.errSchemaPath=u,a+="  for (var "+v+" = 0; "+v+" < "+h+".length; "+v+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0),D=h+"["+v+"]",f.dataPathArr[y]=v,_=e.validate(f),f.baseId=b,e.util.varOccurences(_,g)<2?a+=" "+e.util.varReplace(_,g,D)+" ":a+=" var "+g+" = "+D+"; "+_+" ",l&&(a+=" if (!"+m+") break; "),a+=" }");return l&&(a+=" "+d+" if ("+c+" == errors) {"),a=e.util.cleanUpCode(a)},maximum:$s,minimum:$s,maxItems:qs,minItems:qs,maxLength:As,minLength:As,maxProperties:Fs,minProperties:Fs,multipleOf:function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c=e.opts.$data&&i&&i.$data;c?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i,s+="var division"+n+";if (",c&&(s+=" "+a+" !== undefined && ( typeof "+a+" != 'number' || "),s+=" (division"+n+" = "+p+" / "+a+", ",e.opts.multipleOfPrecision?s+=" Math.abs(Math.round(division"+n+") - division"+n+") > 1e-"+e.opts.multipleOfPrecision+" ":s+=" division"+n+" !== parseInt(division"+n+") ",s+=" ) ",c&&(s+="  )  "),s+=" ) {   ";var f=f||[];f.push(s),s="",!1!==e.createErrors?(s+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { multipleOf: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be multiple of ",s+=c?"' + "+a:a+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=c?"validate.schema"+u:""+i,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var d=s;return s=f.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+d+"]); ":s+=" validate.errors = ["+d+"]; return false; ":s+=" var err = "+d+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s},not:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="errs__"+s,c=e.util.copy(e);c.level++;var f="valid"+c.level;if(e.util.schemaHasRules(o,e.RULES.all)){c.schema=o,c.schemaPath=i,c.errSchemaPath=u,a+=" var "+p+" = errors;  ";var d,m=e.compositeRule;e.compositeRule=c.compositeRule=!0,c.createErrors=!1,c.opts.allErrors&&(d=c.opts.allErrors,c.opts.allErrors=!1),a+=" "+e.validate(c)+" ",c.createErrors=!0,d&&(c.opts.allErrors=d),e.compositeRule=c.compositeRule=m,a+=" if ("+f+") {   ";var v=v||[];v.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var y=a;a=v.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+y+"]); ":a+=" validate.errors = ["+y+"]; return false; ":a+=" var err = "+y+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  errors = "+p+"; if (vErrors !== null) { if ("+p+") vErrors.length = "+p+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } ");}else a+="  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l&&(a+=" if (false) { ");return a},oneOf:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c="errs__"+s,f=e.util.copy(e),d="";f.level++;var m="valid"+f.level;a+="var "+c+" = errors;var prevValid"+s+" = false;var "+p+" = false;";var v=f.baseId,y=e.compositeRule;e.compositeRule=f.compositeRule=!0;var g=o;if(g)for(var b,P=-1,w=g.length-1;P<w;)b=g[P+=1],e.util.schemaHasRules(b,e.RULES.all)?(f.schema=b,f.schemaPath=i+"["+P+"]",f.errSchemaPath=u+"/"+P,a+="  "+e.validate(f)+" ",f.baseId=v):a+=" var "+m+" = true; ",P&&(a+=" if ("+m+" && prevValid"+s+") "+p+" = false; else { ",d+="}"),a+=" if ("+m+") "+p+" = prevValid"+s+" = true;";return e.compositeRule=f.compositeRule=y,a+=d+"if (!"+p+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&l&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),a+="} else {  errors = "+c+"; if (vErrors !== null) { if ("+c+") vErrors.length = "+c+"; else vErrors = null; }",e.opts.allErrors&&(a+=" } "),a},pattern:function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c=e.opts.$data&&i&&i.$data;c?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i;var f=c?"(new RegExp("+a+"))":e.usePattern(i);s+="if ( ",c&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'string') || "),s+=" !"+f+".test("+p+") ) {   ";var d=d||[];d.push(s),s="",!1!==e.createErrors?(s+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { pattern:  ",s+=c?""+a:""+e.util.toQuotedString(i),s+="  } ",!1!==e.opts.messages&&(s+=" , message: 'should match pattern \"",s+=c?"' + "+a+" + '":""+e.util.escapeQuotes(i),s+="\"' "),e.opts.verbose&&(s+=" , schema:  ",s+=c?"validate.schema"+u:""+e.util.toQuotedString(i),s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var m=s;return s=d.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+m+"]); ":s+=" validate.errors = ["+m+"]; return false; ":s+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",h&&(s+=" else { "),s},properties:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c="errs__"+s,f=e.util.copy(e),d="";f.level++;var m="valid"+f.level,v="key"+s,y="idx"+s,g=f.dataLevel=e.dataLevel+1,b="data"+g,P="dataProperties"+s,w=Object.keys(o||{}),E=e.schema.patternProperties||{},j=Object.keys(E),S=e.schema.additionalProperties,O=w.length||j.length,k=!1===S,R="object"==typeof S&&Object.keys(S).length,D=e.opts.removeAdditional,_=k||R||D,T=e.opts.ownProperties,x=e.baseId,$=e.schema.required;if($&&(!e.opts.v5||!$.$data)&&$.length<e.opts.loopRequired)var q=e.util.toHash($);if(e.opts.patternGroups)var A=e.schema.patternGroups||{},F=Object.keys(A);if(a+="var "+c+" = errors;var "+m+" = true;",T&&(a+=" var "+P+" = undefined;"),_){if(a+=T?" "+P+" = "+P+" || Object.keys("+h+"); for (var "+y+"=0; "+y+"<"+P+".length; "+y+"++) { var "+v+" = "+P+"["+y+"]; ":" for (var "+v+" in "+h+") { ",O){if(a+=" var isAdditional"+s+" = !(false ",w.length)if(w.length>5)a+=" || validate.schema"+i+"["+v+"] ";else {var U=w;if(U)for(var C=-1,N=U.length-1;C<N;)X=U[C+=1],a+=" || "+v+" == "+e.util.toQuotedString(X)+" ";}if(j.length){var L=j;if(L)for(var I=-1,H=L.length-1;I<H;)ue=L[I+=1],a+=" || "+e.usePattern(ue)+".test("+v+") ";}if(e.opts.patternGroups&&F.length){var z=F;if(z){I=-1;for(var B=z.length-1;I<B;)ce=z[I+=1],a+=" || "+e.usePattern(ce)+".test("+v+") ";}}a+=" ); if (isAdditional"+s+") { ";}if("all"==D)a+=" delete "+h+"["+v+"]; ";else {var M=e.errorPath,Q="' + "+v+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers)),k)if(D)a+=" delete "+h+"["+v+"]; ";else {a+=" "+m+" = false; ";var V=u;u=e.errSchemaPath+"/additionalProperties",(we=we||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { additionalProperty: '"+Q+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have additional properties' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var J=a;a=we.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+J+"]); ":a+=" validate.errors = ["+J+"]; return false; ":a+=" var err = "+J+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u=V,l&&(a+=" break; ");}else if(R)if("failing"==D){a+=" var "+c+" = errors;  ";var Y=e.compositeRule;e.compositeRule=f.compositeRule=!0,f.schema=S,f.schemaPath=e.schemaPath+".additionalProperties",f.errSchemaPath=e.errSchemaPath+"/additionalProperties",f.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers);var K=h+"["+v+"]";f.dataPathArr[g]=v;var G=e.validate(f);f.baseId=x,e.util.varOccurences(G,b)<2?a+=" "+e.util.varReplace(G,b,K)+" ":a+=" var "+b+" = "+K+"; "+G+" ",a+=" if (!"+m+") { errors = "+c+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+h+"["+v+"]; }  ",e.compositeRule=f.compositeRule=Y;}else f.schema=S,f.schemaPath=e.schemaPath+".additionalProperties",f.errSchemaPath=e.errSchemaPath+"/additionalProperties",f.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers),K=h+"["+v+"]",f.dataPathArr[g]=v,G=e.validate(f),f.baseId=x,e.util.varOccurences(G,b)<2?a+=" "+e.util.varReplace(G,b,K)+" ":a+=" var "+b+" = "+K+"; "+G+" ",l&&(a+=" if (!"+m+") break; ");e.errorPath=M;}O&&(a+=" } "),a+=" }  ",l&&(a+=" if ("+m+") { ",d+="}");}var Z=e.opts.useDefaults&&!e.compositeRule;if(w.length){var W=w;if(W)for(var X,ee=-1,te=W.length-1;ee<te;){var re=o[X=W[ee+=1]];if(e.util.schemaHasRules(re,e.RULES.all)){var ae=e.util.getProperty(X),se=(K=h+ae,Z&&void 0!==re.default);if(f.schema=re,f.schemaPath=i+ae,f.errSchemaPath=u+"/"+e.util.escapeFragment(X),f.errorPath=e.util.getPath(e.errorPath,X,e.opts.jsonPointers),f.dataPathArr[g]=e.util.toQuotedString(X),G=e.validate(f),f.baseId=x,e.util.varOccurences(G,b)<2){G=e.util.varReplace(G,b,K);var ne=K;}else ne=b,a+=" var "+b+" = "+K+"; ";if(se)a+=" "+G+" ";else {if(q&&q[X]){a+=" if ( "+ne+" === undefined ",T&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(X)+"') "),a+=") { "+m+" = false; ",M=e.errorPath,V=u;var oe=e.util.escapeQuotes(X);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(M,X,e.opts.jsonPointers)),u=e.errSchemaPath+"/required",(we=we||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { missingProperty: '"+oe+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+oe+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",J=a,a=we.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+J+"]); ":a+=" validate.errors = ["+J+"]; return false; ":a+=" var err = "+J+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u=V,e.errorPath=M,a+=" } else { ";}else l?(a+=" if ( "+ne+" === undefined ",T&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(X)+"') "),a+=") { "+m+" = true; } else { "):(a+=" if ("+ne+" !== undefined ",T&&(a+=" &&   Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(X)+"') "),a+=" ) { ");a+=" "+G+" } ";}}l&&(a+=" if ("+m+") { ",d+="}");}}if(j.length){var ie=j;if(ie)for(var ue,le=-1,he=ie.length-1;le<he;)re=E[ue=ie[le+=1]],e.util.schemaHasRules(re,e.RULES.all)&&(f.schema=re,f.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(ue),f.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(ue),a+=T?" "+P+" = "+P+" || Object.keys("+h+"); for (var "+y+"=0; "+y+"<"+P+".length; "+y+"++) { var "+v+" = "+P+"["+y+"]; ":" for (var "+v+" in "+h+") { ",a+=" if ("+e.usePattern(ue)+".test("+v+")) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers),K=h+"["+v+"]",f.dataPathArr[g]=v,G=e.validate(f),f.baseId=x,e.util.varOccurences(G,b)<2?a+=" "+e.util.varReplace(G,b,K)+" ":a+=" var "+b+" = "+K+"; "+G+" ",l&&(a+=" if (!"+m+") break; "),a+=" } ",l&&(a+=" else "+m+" = true; "),a+=" }  ",l&&(a+=" if ("+m+") { ",d+="}"));}if(e.opts.patternGroups&&F.length){var pe=F;if(pe)for(var ce,fe=-1,de=pe.length-1;fe<de;){var me=A[ce=pe[fe+=1]];if(re=me.schema,e.util.schemaHasRules(re,e.RULES.all)){f.schema=re,f.schemaPath=e.schemaPath+".patternGroups"+e.util.getProperty(ce)+".schema",f.errSchemaPath=e.errSchemaPath+"/patternGroups/"+e.util.escapeFragment(ce)+"/schema",a+=" var pgPropCount"+s+" = 0;  ",a+=T?" "+P+" = "+P+" || Object.keys("+h+"); for (var "+y+"=0; "+y+"<"+P+".length; "+y+"++) { var "+v+" = "+P+"["+y+"]; ":" for (var "+v+" in "+h+") { ",a+=" if ("+e.usePattern(ce)+".test("+v+")) { pgPropCount"+s+"++; ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers),K=h+"["+v+"]",f.dataPathArr[g]=v,G=e.validate(f),f.baseId=x,e.util.varOccurences(G,b)<2?a+=" "+e.util.varReplace(G,b,K)+" ":a+=" var "+b+" = "+K+"; "+G+" ",l&&(a+=" if (!"+m+") break; "),a+=" } ",l&&(a+=" else "+m+" = true; "),a+=" }  ",l&&(a+=" if ("+m+") { ",d+="}");var ve=me.minimum,ye=me.maximum;if(void 0!==ve||void 0!==ye){if(a+=" var "+p+" = true; ",V=u,void 0!==ve){var ge=ve,be="minimum",Pe="less";a+=" "+p+" = pgPropCount"+s+" >= "+ve+"; ",u=e.errSchemaPath+"/patternGroups/minimum",a+="  if (!"+p+") {   ",(we=we||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'patternGroups' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { reason: '"+be+"', limit: "+ge+", pattern: '"+e.util.escapeQuotes(ce)+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have "+Pe+" than "+ge+' properties matching pattern "'+e.util.escapeQuotes(ce)+"\"' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",J=a,a=we.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+J+"]); ":a+=" validate.errors = ["+J+"]; return false; ":a+=" var err = "+J+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",void 0!==ye&&(a+=" else ");}var we;if(void 0!==ye)ge=ye,be="maximum",Pe="more",a+=" "+p+" = pgPropCount"+s+" <= "+ye+"; ",u=e.errSchemaPath+"/patternGroups/maximum",a+="  if (!"+p+") {   ",(we=we||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'patternGroups' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { reason: '"+be+"', limit: "+ge+", pattern: '"+e.util.escapeQuotes(ce)+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have "+Pe+" than "+ge+' properties matching pattern "'+e.util.escapeQuotes(ce)+"\"' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",J=a,a=we.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+J+"]); ":a+=" validate.errors = ["+J+"]; return false; ":a+=" var err = "+J+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ";u=V,l&&(a+=" if ("+p+") { ",d+="}");}}}}return l&&(a+=" "+d+" if ("+c+" == errors) {"),a=e.util.cleanUpCode(a)},propertyNames:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="errs__"+s,c=e.util.copy(e);c.level++;var f="valid"+c.level;if(e.util.schemaHasRules(o,e.RULES.all)){c.schema=o,c.schemaPath=i,c.errSchemaPath=u;var d="key"+s,m="idx"+s,v="i"+s,y="' + "+d+" + '",g="data"+(c.dataLevel=e.dataLevel+1),b="dataProperties"+s,P=e.opts.ownProperties,w=e.baseId;a+=" var "+p+" = errors; ",P&&(a+=" var "+b+" = undefined; "),a+=P?" "+b+" = "+b+" || Object.keys("+h+"); for (var "+m+"=0; "+m+"<"+b+".length; "+m+"++) { var "+d+" = "+b+"["+m+"]; ":" for (var "+d+" in "+h+") { ",a+=" var startErrs"+s+" = errors; ";var E=d,j=e.compositeRule;e.compositeRule=c.compositeRule=!0;var S=e.validate(c);c.baseId=w,e.util.varOccurences(S,g)<2?a+=" "+e.util.varReplace(S,g,E)+" ":a+=" var "+g+" = "+E+"; "+S+" ",e.compositeRule=c.compositeRule=j,a+=" if (!"+f+") { for (var "+v+"=startErrs"+s+"; "+v+"<errors; "+v+"++) { vErrors["+v+"].propertyName = "+d+"; }   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'propertyNames' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { propertyName: '"+y+"' } ",!1!==e.opts.messages&&(a+=" , message: 'property name \\'"+y+"\\' is invalid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&l&&(e.async?a+=" throw new ValidationError(vErrors); ":a+=" validate.errors = vErrors; return false; "),l&&(a+=" break; "),a+=" } }";}return l&&(a+="  if ("+p+" == errors) {"),a=e.util.cleanUpCode(a)},required:function(e,t,r){var a=" ",s=e.level,n=e.dataLevel,o=e.schema[t],i=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,l=!e.opts.allErrors,h="data"+(n||""),p="valid"+s,c=e.opts.$data&&o&&o.$data;c&&(a+=" var schema"+s+" = "+e.util.getData(o.$data,n,e.dataPathArr)+"; ");var f="schema"+s;if(!c)if(o.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var d=[],m=o;if(m)for(var v,y=-1,g=m.length-1;y<g;){v=m[y+=1];var b=e.schema.properties[v];b&&e.util.schemaHasRules(b,e.RULES.all)||(d[d.length]=v);}}else d=o;if(c||d.length){var P=e.errorPath,w=c||d.length>=e.opts.loopRequired,E=e.opts.ownProperties;if(l)if(a+=" var missing"+s+"; ",w){c||(a+=" var "+f+" = validate.schema"+i+"; ");var j="' + "+(_="schema"+s+"["+(R="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(P,_,e.opts.jsonPointers)),a+=" var "+p+" = true; ",c&&(a+=" if (schema"+s+" === undefined) "+p+" = true; else if (!Array.isArray(schema"+s+")) "+p+" = false; else {"),a+=" for (var "+R+" = 0; "+R+" < "+f+".length; "+R+"++) { "+p+" = "+h+"["+f+"["+R+"]] !== undefined ",E&&(a+=" &&   Object.prototype.hasOwnProperty.call("+h+", "+f+"["+R+"]) "),a+="; if (!"+p+") break; } ",c&&(a+="  }  "),a+="  if (!"+p+") {   ",(O=O||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+j+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var S=a;a=O.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+S+"]); ":a+=" validate.errors = ["+S+"]; return false; ":a+=" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ";}else {a+=" if ( ";var O,k=d;if(k)for(var R=-1,D=k.length-1;R<D;)x=k[R+=1],R&&(a+=" || "),a+=" ( ( "+(F=h+(A=e.util.getProperty(x)))+" === undefined ",E&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(x)+"') "),a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?x:A)+") ) ";a+=") {  ",j="' + "+(_="missing"+s)+" + '",e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(P,_,!0):P+" + "+_),(O=O||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+j+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",S=a,a=O.pop(),!e.compositeRule&&l?e.async?a+=" throw new ValidationError(["+S+"]); ":a+=" validate.errors = ["+S+"]; return false; ":a+=" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ";}else if(w){var _;c||(a+=" var "+f+" = validate.schema"+i+"; "),j="' + "+(_="schema"+s+"["+(R="i"+s)+"]")+" + '",e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(P,_,e.opts.jsonPointers)),c&&(a+=" if ("+f+" && !Array.isArray("+f+")) {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+j+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+f+" !== undefined) { "),a+=" for (var "+R+" = 0; "+R+" < "+f+".length; "+R+"++) { if ("+h+"["+f+"["+R+"]] === undefined ",E&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", "+f+"["+R+"]) "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+j+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",c&&(a+="  }  ");}else {var T=d;if(T)for(var x,$=-1,q=T.length-1;$<q;){x=T[$+=1];var A=e.util.getProperty(x),F=(j=e.util.escapeQuotes(x),h+A);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(P,x,e.opts.jsonPointers)),a+=" if ( "+F+" === undefined ",E&&(a+=" || ! Object.prototype.hasOwnProperty.call("+h+", '"+e.util.escapeQuotes(x)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { missingProperty: '"+j+"' } ",!1!==e.opts.messages&&(a+=" , message: '",e.opts._errorDataPathProperty?a+="is a required property":a+="should have required property \\'"+j+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+i+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";}}e.errorPath=P;}else l&&(a+=" if (true) {");return a},uniqueItems:function(e,t,r){var a,s=" ",n=e.level,o=e.dataLevel,i=e.schema[t],u=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,h=!e.opts.allErrors,p="data"+(o||""),c="valid"+n,f=e.opts.$data&&i&&i.$data;if(f?(s+=" var schema"+n+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",a="schema"+n):a=i,(i||f)&&!1!==e.opts.uniqueItems){f&&(s+=" var "+c+"; if ("+a+" === false || "+a+" === undefined) "+c+" = true; else if (typeof "+a+" != 'boolean') "+c+" = false; else { "),s+=" var "+c+" = true; if ("+p+".length > 1) { var i = "+p+".length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal("+p+"[i], "+p+"[j])) { "+c+" = false; break outer; } } } } ",f&&(s+="  }  "),s+=" if (!"+c+") {   ";var d=d||[];d.push(s),s="",!1!==e.createErrors?(s+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { i: i, j: j } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+u:""+i,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),s+=" } "):s+=" {} ";var m=s;s=d.pop(),!e.compositeRule&&h?e.async?s+=" throw new ValidationError(["+m+"]); ":s+=" validate.errors = ["+m+"]; return false; ":s+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",h&&(s+=" else { ");}else h&&(s+=" if (true) { ");return s},validate:Za},Cs=na.toHash,Ns=function(){var e=[{type:"number",rules:[{maximum:["exclusiveMaximum"]},{minimum:["exclusiveMinimum"]},"multipleOf","format"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","uniqueItems","contains","items"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","propertyNames",{properties:["additionalProperties","patternProperties"]}]},{rules:["$ref","const","enum","not","anyOf","oneOf","allOf"]}],t=["type"];return e.all=Cs(t),e.types=Cs(["number","integer","string","array","object","boolean","null"]),e.forEach(function(r){r.rules=r.rules.map(function(r){var a;if("object"==typeof r){var s=Object.keys(r)[0];a=r[s],r=s,a.forEach(function(r){t.push(r),e.all[r]=!0;});}return t.push(r),e.all[r]={keyword:r,code:Us[r],implements:a}}),r.type&&(e.types[r.type]=r);}),e.keywords=Cs(t.concat(["additionalItems","$schema","$id","id","title","description","default","definitions"])),e.custom={},e},Ls=["multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","additionalItems","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","additionalProperties","enum","format","const"],Is=function(e,t){for(var r=0;r<t.length;r++){e=JSON.parse(JSON.stringify(e));var a,s=t[r].split("/"),n=e;for(a=1;a<s.length;a++)n=n[s[a]];for(a=0;a<Ls.length;a++){var o=Ls[a],i=n[o];i&&(n[o]={anyOf:[i,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/$data.json#"}]});}}return e},Hs=function(e){var t=e._opts.defaultMeta,r="string"==typeof t?{$ref:t}:e.getSchema("http://json-schema.org/draft-06/schema")?{$ref:"http://json-schema.org/draft-06/schema"}:{};e.addKeyword("patternGroups",{metaSchema:{type:"object",additionalProperties:{type:"object",required:["schema"],properties:{maximum:{type:"integer",minimum:0},minimum:{type:"integer",minimum:0},schema:r},additionalProperties:!1}}}),e.RULES.all.properties.implements.push("patternGroups");},zs=Ja.MissingRef,Bs=function e(t,r,a){var s=this;if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");"function"==typeof r&&(a=r,r=void 0);var n=o(t).then(function(){var e=s._addSchema(t,void 0,r);return e.validate||function e(t){try{return s._compile(t)}catch(e){if(e instanceof zs)return function a(e){var a=e.missingSchema;if(u(a))throw new Error("Schema "+a+" is loaded but "+e.missingRef+" cannot be resolved");var n=s._loadingSchemas[a];n||(n=s._loadingSchemas[a]=s._opts.loadSchema(a)).then(i,i);return n.then(function(e){if(!u(a))return o(e).then(function(){u(a)||s.addSchema(e,a,void 0,r);})}).then(function(){return function e(t){try{return s._compile(t)}catch(e){if(e instanceof zs)return a(e);throw e}function a(a){var n=a.missingSchema;if(l(n))throw new Error("Schema "+n+" is loaded but "+a.missingRef+" cannot be resolved");var i=s._loadingSchemas[n];return i||(i=s._loadingSchemas[n]=s._opts.loadSchema(n)).then(u,u),i.then(function(e){if(!l(n))return o(e).then(function(){l(n)||s.addSchema(e,n,void 0,r);})}).then(function(){return e(t)});function u(){delete s._loadingSchemas[n];}function l(e){return s._refs[e]||s._schemas[e]}}}(t)});function i(){delete s._loadingSchemas[a];}function u(e){return s._refs[e]||s._schemas[e]}}(e);throw e}}(e)});a&&n.then(function(e){a(null,e);},a);return n;function o(t){var r=t.$schema;return r&&!s.getSchema(r)?e.call(s,{$ref:r},!0):Promise.resolve()}};var Ms=function(e,t,r){var a,s,n=" ",o=e.level,i=e.dataLevel,u=e.schema[t],l=e.schemaPath+e.util.getProperty(t),h=e.errSchemaPath+"/"+t,p=!e.opts.allErrors,c="data"+(i||""),f="valid"+o,d="errs__"+o,m=e.opts.$data&&u&&u.$data;m?(n+=" var schema"+o+" = "+e.util.getData(u.$data,i,e.dataPathArr)+"; ",s="schema"+o):s=u;var v,y,g,b,P,w="definition"+o,E=this.definition,j="";if(m&&E.$data){P="keywordValidate"+o;var S=E.validateSchema;n+=" var "+w+" = RULES.custom['"+t+"'].definition; var "+P+" = "+w+".validate;";}else {if(!(b=e.useCustomRule(this,u,e.schema,e)))return;s="validate.schema"+l,P=b.code,v=E.compile,y=E.inline,g=E.macro;}var O=P+".errors",k="i"+o,R="ruleErr"+o,D=E.async;if(D&&!e.async)throw new Error("async keyword in sync schema");if(y||g||(n+=O+" = null;"),n+="var "+d+" = errors;var "+f+";",m&&E.$data&&(j+="}",n+=" if ("+s+" === undefined) { "+f+" = true; } else { ",S&&(j+="}",n+=" "+f+" = "+w+".validateSchema("+s+"); if ("+f+") { ")),y)E.statements?n+=" "+b.validate+" ":n+=" "+f+" = "+b.validate+"; ";else if(g){var _=e.util.copy(e);j="";_.level++;var T="valid"+_.level;_.schema=b.validate,_.schemaPath="";var x=e.compositeRule;e.compositeRule=_.compositeRule=!0;var $=e.validate(_).replace(/validate\.schema/g,P);e.compositeRule=_.compositeRule=x,n+=" "+$;}else {(U=U||[]).push(n),n="",n+="  "+P+".call( ",e.opts.passContext?n+="this":n+="self",v||!1===E.schema?n+=" , "+c+" ":n+=" , "+s+" , "+c+" , validate.schema"+e.schemaPath+" ",n+=" , (dataPath || '')",'""'!=e.errorPath&&(n+=" + "+e.errorPath);var q=i?"data"+(i-1||""):"parentData",A=i?e.dataPathArr[i]:"parentDataProperty",F=n+=" , "+q+" , "+A+" , rootData )  ";n=U.pop(),!1===E.errors?(n+=" "+f+" = ",D&&(n+=""+e.yieldAwait),n+=F+"; "):n+=D?" var "+(O="customErrors"+o)+" = null; try { "+f+" = "+e.yieldAwait+F+"; } catch (e) { "+f+" = false; if (e instanceof ValidationError) "+O+" = e.errors; else throw e; } ":" "+O+" = null; "+f+" = "+F+"; ";}if(E.modifying&&(n+=" if ("+q+") "+c+" = "+q+"["+A+"];"),n+=""+j,E.valid)p&&(n+=" if (true) { ");else {var U;n+=" if ( ",void 0===E.valid?(n+=" !",n+=g?""+T:""+f):n+=" "+!E.valid+" ",n+=") { ",a=this.keyword,(U=U||[]).push(n),n="",(U=U||[]).push(n),n="",!1!==e.createErrors?(n+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { keyword: '"+this.keyword+"' } ",!1!==e.opts.messages&&(n+=" , message: 'should pass \""+this.keyword+"\" keyword validation' "),e.opts.verbose&&(n+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),n+=" } "):n+=" {} ";var C=n;n=U.pop(),!e.compositeRule&&p?e.async?n+=" throw new ValidationError(["+C+"]); ":n+=" validate.errors = ["+C+"]; return false; ":n+=" var err = "+C+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";var N=n;n=U.pop(),y?E.errors?"full"!=E.errors&&(n+="  for (var "+k+"="+d+"; "+k+"<errors; "+k+"++) { var "+R+" = vErrors["+k+"]; if ("+R+".dataPath === undefined) "+R+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+R+".schemaPath === undefined) { "+R+'.schemaPath = "'+h+'"; } ',e.opts.verbose&&(n+=" "+R+".schema = "+s+"; "+R+".data = "+c+"; "),n+=" } "):!1===E.errors?n+=" "+N+" ":(n+=" if ("+d+" == errors) { "+N+" } else {  for (var "+k+"="+d+"; "+k+"<errors; "+k+"++) { var "+R+" = vErrors["+k+"]; if ("+R+".dataPath === undefined) "+R+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+R+".schemaPath === undefined) { "+R+'.schemaPath = "'+h+'"; } ',e.opts.verbose&&(n+=" "+R+".schema = "+s+"; "+R+".data = "+c+"; "),n+=" } } "):g?(n+="   var err =   ",!1!==e.createErrors?(n+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(h)+" , params: { keyword: '"+this.keyword+"' } ",!1!==e.opts.messages&&(n+=" , message: 'should pass \""+this.keyword+"\" keyword validation' "),e.opts.verbose&&(n+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),n+=" } "):n+=" {} ",n+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&p&&(e.async?n+=" throw new ValidationError(vErrors); ":n+=" validate.errors = vErrors; return false; ")):!1===E.errors?n+=" "+N+" ":(n+=" if (Array.isArray("+O+")) { if (vErrors === null) vErrors = "+O+"; else vErrors = vErrors.concat("+O+"); errors = vErrors.length;  for (var "+k+"="+d+"; "+k+"<errors; "+k+"++) { var "+R+" = vErrors["+k+"]; if ("+R+".dataPath === undefined) "+R+".dataPath = (dataPath || '') + "+e.errorPath+";  "+R+'.schemaPath = "'+h+'";  ',e.opts.verbose&&(n+=" "+R+".schema = "+s+"; "+R+".data = "+c+"; "),n+=" } } else { "+N+" } "),n+=" } ",p&&(n+=" else { ");}return n},Qs=/^[a-z_$][a-z0-9_$-]*$/i,Vs=function(e,t){var r=this.RULES;if(r.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!Qs.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(t){if(t.macro&&void 0!==t.valid)throw new Error('"valid" option cannot be used with macro keywords');var a=t.type;if(Array.isArray(a)){var s,n=a.length;for(s=0;s<n;s++)l(a[s]);for(s=0;s<n;s++)u(e,a[s],t);}else a&&l(a),u(e,a,t);var o=!0===t.$data&&this._opts.$data;if(o&&!t.validate)throw new Error('$data support: "validate" function is not defined');var i=t.metaSchema;i&&(o&&(i={anyOf:[i,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/$data.json#"}]}),t.validateSchema=this.compile(i,!0));}function u(e,t,a){for(var s,n=0;n<r.length;n++){var o=r[n];if(o.type==t){s=o;break}}s||(s={type:t,rules:[]},r.push(s));var i={keyword:e,definition:a,custom:!0,code:Ms,implements:a.implements};s.rules.push(i),r.custom[e]=i;}function l(e){if(!r.types[e])throw new Error("Unknown type "+e)}return r.keywords[e]=r.all[e]=!0,this},Js=function(e){var t=this.RULES.custom[e];return t?t.definition:this.RULES.keywords[e]||!1},Ys=function(e){var t=this.RULES;delete t.keywords[e],delete t.all[e],delete t.custom[e];for(var r=0;r<t.length;r++)for(var a=t[r].rules,s=0;s<a.length;s++)if(a[s].keyword==e){a.splice(s,1);break}return this};var Ks="http://json-schema.org/draft-06/schema#",Gs="https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/$data.json#",Zs="Meta-schema for $data reference (JSON-schema extension proposal)",Ws=["$data"],Xs={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},en={$schema:Ks,$id:Gs,description:Zs,type:"object",required:Ws,properties:Xs,additionalProperties:!1},tn=Object.freeze({$schema:Ks,$id:Gs,description:Zs,type:"object",required:Ws,properties:Xs,additionalProperties:!1,default:en}),rn="http://json-schema.org/draft-06/schema#",an="http://json-schema.org/draft-06/schema#",sn="Core schema meta-schema",nn={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},on=["object","boolean"],un={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},title:{type:"string"},description:{type:"string"},default:{},examples:{type:"array",items:{}},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:{},enum:{type:"array",minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},ln={$schema:rn,$id:an,title:sn,definitions:nn,type:on,properties:un,default:{}},hn=Object.freeze({$schema:rn,$id:an,title:sn,definitions:nn,type:on,properties:un,default:ln}),pn=tn&&en||tn,cn=hn&&ln||hn,fn=yn;yn.prototype.validate=function(e,t){var r;if("string"==typeof e){if(!(r=this.getSchema(e)))throw new Error('no schema with key or ref "'+e+'"')}else {var a=this._addSchema(e);r=a.validate||this._compile(a);}var s=r(t);return !0===r.$async?"*"==this._opts.async?Xa(s):s:(this.errors=r.errors,s)},yn.prototype.compile=function(e,t){var r=this._addSchema(e,void 0,t);return r.validate||this._compile(r)},yn.prototype.addSchema=function(e,t,r,a){if(Array.isArray(e)){for(var s=0;s<e.length;s++)this.addSchema(e[s],void 0,r,a);return this}var n=this._getId(e);if(void 0!==n&&"string"!=typeof n)throw new Error("schema id must be string");return jn(this,t=Fa.normalizeId(t||n)),this._schemas[t]=this._addSchema(e,r,a,!0),this},yn.prototype.addMetaSchema=function(e,t,r){return this.addSchema(e,t,r,!0),this},yn.prototype.validateSchema=function(e,t){var r=e.$schema;if(void 0!==r&&"string"!=typeof r)throw new Error("$schema must be a string");if(!(r=r||this._opts.defaultMeta||(a=this,s=a._opts.meta,a._opts.defaultMeta="object"==typeof s?a._getId(s)||s:a.getSchema(dn)?dn:void 0,a._opts.defaultMeta)))return this.logger.warn("meta-schema not available"),this.errors=null,!0;var a,s;var n,o=this._formats.uri;this._formats.uri="function"==typeof o?this._schemaUriFormatFunc:this._schemaUriFormat;try{n=this.validate(r,e);}finally{this._formats.uri=o;}if(!n&&t){var i="schema is invalid: "+this.errorsText();if("log"!=this._opts.validateSchema)throw new Error(i);this.logger.error(i);}return n},yn.prototype.getSchema=function(e){var t=gn(this,e);switch(typeof t){case"object":return t.validate||this._compile(t);case"string":return this.getSchema(t);case"undefined":return function(e,t){var r=Fa.schema.call(e,{schema:{}},t);if(r){var a=r.schema,s=r.root,n=r.baseId,o=os.call(e,a,s,void 0,n);return e._fragments[t]=new xa({ref:t,fragment:!0,schema:a,root:s,baseId:n,validate:o}),o}}(this,e)}},yn.prototype.removeSchema=function(e){if(e instanceof RegExp)return bn(this,this._schemas,e),bn(this,this._refs,e),this;switch(typeof e){case"undefined":return bn(this,this._schemas),bn(this,this._refs),this._cache.clear(),this;case"string":var t=gn(this,e);return t&&this._cache.del(t.cacheKey),delete this._schemas[e],delete this._refs[e],this;case"object":var r=this._opts.serialize,a=r?r(e):e;this._cache.del(a);var s=this._getId(e);s&&(s=Fa.normalizeId(s),delete this._schemas[s],delete this._refs[s]);}return this},yn.prototype.addFormat=function(e,t){"string"==typeof t&&(t=new RegExp(t));return this._formats[e]=t,this},yn.prototype.errorsText=function(e,t){if(!(e=e||this.errors))return "No errors";for(var r=void 0===(t=t||{}).separator?", ":t.separator,a=void 0===t.dataVar?"data":t.dataVar,s="",n=0;n<e.length;n++){var o=e[n];o&&(s+=a+o.dataPath+" "+o.message+r);}return s.slice(0,-r.length)},yn.prototype._addSchema=function(e,t,r,a){if("object"!=typeof e&&"boolean"!=typeof e)throw new Error("schema should be object or boolean");var s=this._opts.serialize,n=s?s(e):e,o=this._cache.get(n);if(o)return o;a=a||!1!==this._opts.addUsedSchema;var i=Fa.normalizeId(this._getId(e));i&&a&&jn(this,i);var u,l=!1!==this._opts.validateSchema&&!t;l&&!(u=i&&i==Fa.normalizeId(e.$schema))&&this.validateSchema(e,!0);var h=Fa.ids.call(this,e),p=new xa({id:i,schema:e,localRefs:h,cacheKey:n,meta:r});"#"!=i[0]&&a&&(this._refs[i]=p);this._cache.put(n,p),l&&u&&this.validateSchema(e,!0);return p},yn.prototype._compile=function(e,t){if(e.compiling)return e.validate=s,s.schema=e.schema,s.errors=null,s.root=t||s,!0===e.schema.$async&&(s.$async=!0),s;var r,a;e.compiling=!0,e.meta&&(r=this._opts,this._opts=this._metaOpts);try{a=os.call(this,e.schema,t,e.localRefs);}finally{e.compiling=!1,e.meta&&(this._opts=r);}return e.validate=a,e.refs=a.refs,e.refVal=a.refVal,e.root=a.root,a;function s(){var t=e.validate,r=t.apply(null,arguments);return s.errors=t.errors,r}},yn.prototype.compileAsync=Bs,yn.prototype.addKeyword=Vs,yn.prototype.getKeyword=Js,yn.prototype.removeKeyword=Ys,yn.ValidationError=Ja.Validation,yn.MissingRefError=Ja.MissingRef,yn.$dataMetaSchema=Is;var dn="http://json-schema.org/draft-06/schema",mn=["removeAdditional","useDefaults","coerceTypes"],vn=["/properties"];function yn(e){if(!(this instanceof yn))return new yn(e);e=this._opts=na.copy(e)||{},function(e){var t=e._opts.logger;if(!1===t)e.logger={log:Sn,warn:Sn,error:Sn};else {if(void 0===t&&(t=console),!("object"==typeof t&&t.log&&t.warn&&t.error))throw new Error("logger must implement log, warn and error methods");e.logger=t;}}(this),this._schemas={},this._refs={},this._fragments={},this._formats=Ss(e.format);var t=this._schemaUriFormat=this._formats["uri-reference"];this._schemaUriFormatFunc=function(e){return t.test(e)},this._cache=e.cache||new fs,this._loadingSchemas={},this._compilations=[],this.RULES=Ns(),this._getId=function(e){switch(e.schemaId){case"$id":return wn;case"id":return Pn;default:return En}}(e),e.loopRequired=e.loopRequired||1/0,"property"==e.errorDataPath&&(e._errorDataPathProperty=!0),void 0===e.serialize&&(e.serialize=Ga),this._metaOpts=function(e){for(var t=na.copy(e._opts),r=0;r<mn.length;r++)delete t[mn[r]];return t}(this),e.formats&&function(e){for(var t in e._opts.formats){var r=e._opts.formats[t];e.addFormat(t,r);}}(this),function(e){var t;e._opts.$data&&(t=pn,e.addMetaSchema(t,t.$id,!0));if(!1===e._opts.meta)return;var r=cn;e._opts.$data&&(r=Is(r,vn));e.addMetaSchema(r,dn,!0),e._refs["http://json-schema.org/schema"]=dn;}(this),"object"==typeof e.meta&&this.addMetaSchema(e.meta),function(e){var t=e._opts.schemas;if(!t)return;if(Array.isArray(t))e.addSchema(t);else for(var r in t)e.addSchema(t[r],r);}(this),e.patternGroups&&Hs(this);}function gn(e,t){return t=Fa.normalizeId(t),e._schemas[t]||e._refs[t]||e._fragments[t]}function bn(e,t,r){for(var a in t){var s=t[a];s.meta||r&&!r.test(a)||(e._cache.del(s.cacheKey),delete t[a]);}}function Pn(e){return e.$id&&this.logger.warn("schema $id ignored",e.$id),e.id}function wn(e){return e.id&&this.logger.warn("schema id ignored",e.id),e.$id}function En(e){if(e.$id&&e.id&&e.$id!=e.id)throw new Error("schema $id is different from id");return e.$id||e.id}function jn(e,t){if(e._schemas[t]||e._refs[t])throw new Error('schema with key or id "'+t+'" already exists')}function Sn(){}function On(e){this.name="HARError",this.message="validation failed",this.errors=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error("validation failed").stack;}On.prototype=Error.prototype;var kn,Rn=On,Dn="afterRequest.json#",_n="http://json-schema.org/draft-06/schema#",Tn=["lastAccess","eTag","hitCount"],xn={expires:{type:"string",pattern:"^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?"},lastAccess:{type:"string",pattern:"^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?"},eTag:{type:"string"},hitCount:{type:"integer"},comment:{type:"string"}},$n={$id:Dn,$schema:_n,type:"object",optional:!0,required:Tn,properties:xn},qn=Object.freeze({$id:Dn,$schema:_n,type:"object",optional:!0,required:Tn,properties:xn,default:$n}),An="beforeRequest.json#",Fn="http://json-schema.org/draft-06/schema#",Un=["lastAccess","eTag","hitCount"],Cn={expires:{type:"string",pattern:"^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?"},lastAccess:{type:"string",pattern:"^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?"},eTag:{type:"string"},hitCount:{type:"integer"},comment:{type:"string"}},Nn={$id:An,$schema:Fn,type:"object",optional:!0,required:Un,properties:Cn},Ln=Object.freeze({$id:An,$schema:Fn,type:"object",optional:!0,required:Un,properties:Cn,default:Nn}),In="http://json-schema.org/draft-06/schema#",Hn=["name","version"],zn={name:{type:"string"},version:{type:"string"},comment:{type:"string"}},Bn={$id:"browser.json#",$schema:In,type:"object",required:Hn,properties:zn},Mn=Object.freeze({$id:"browser.json#",$schema:In,type:"object",required:Hn,properties:zn,default:Bn}),Qn="http://json-schema.org/draft-06/schema#",Vn={beforeRequest:{oneOf:[{type:"null"},{$ref:"beforeRequest.json#"}]},afterRequest:{oneOf:[{type:"null"},{$ref:"afterRequest.json#"}]},comment:{type:"string"}},Jn={$id:"cache.json#",$schema:Qn,properties:Vn},Yn=Object.freeze({$id:"cache.json#",$schema:Qn,properties:Vn,default:Jn}),Kn="http://json-schema.org/draft-06/schema#",Gn=["size","mimeType"],Zn={size:{type:"integer"},compression:{type:"integer"},mimeType:{type:"string"},text:{type:"string"},encoding:{type:"string"},comment:{type:"string"}},Wn={$id:"content.json#",$schema:Kn,type:"object",required:Gn,properties:Zn},Xn=Object.freeze({$id:"content.json#",$schema:Kn,type:"object",required:Gn,properties:Zn,default:Wn}),eo="http://json-schema.org/draft-06/schema#",to=["name","value"],ro={name:{type:"string"},value:{type:"string"},path:{type:"string"},domain:{type:"string"},expires:{type:["string","null"],format:"date-time"},httpOnly:{type:"boolean"},secure:{type:"boolean"},comment:{type:"string"}},ao={$id:"cookie.json#",$schema:eo,type:"object",required:to,properties:ro},so=Object.freeze({$id:"cookie.json#",$schema:eo,type:"object",required:to,properties:ro,default:ao}),no="http://json-schema.org/draft-06/schema#",oo=["name","version"],io={name:{type:"string"},version:{type:"string"},comment:{type:"string"}},uo={$id:"creator.json#",$schema:no,type:"object",required:oo,properties:io},lo=Object.freeze({$id:"creator.json#",$schema:no,type:"object",required:oo,properties:io,default:uo}),ho="http://json-schema.org/draft-06/schema#",po=["startedDateTime","time","request","response","cache","timings"],co={pageref:{type:"string"},startedDateTime:{type:"string",format:"date-time",pattern:"^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))"},time:{type:"number",min:0},request:{$ref:"request.json#"},response:{$ref:"response.json#"},cache:{$ref:"cache.json#"},timings:{$ref:"timings.json#"},serverIPAddress:{type:"string",oneOf:[{format:"ipv4"},{format:"ipv6"}]},connection:{type:"string"},comment:{type:"string"}},fo={$id:"entry.json#",$schema:ho,type:"object",optional:!0,required:po,properties:co},mo=Object.freeze({$id:"entry.json#",$schema:ho,type:"object",optional:!0,required:po,properties:co,default:fo}),vo="http://json-schema.org/draft-06/schema#",yo=["log"],go={log:{$ref:"log.json#"}},bo={$id:"har.json#",$schema:vo,type:"object",required:yo,properties:go},Po=Object.freeze({$id:"har.json#",$schema:vo,type:"object",required:yo,properties:go,default:bo}),wo="http://json-schema.org/draft-06/schema#",Eo=["name","value"],jo={name:{type:"string"},value:{type:"string"},comment:{type:"string"}},So={$id:"header.json#",$schema:wo,type:"object",required:Eo,properties:jo},Oo=Object.freeze({$id:"header.json#",$schema:wo,type:"object",required:Eo,properties:jo,default:So}),ko="http://json-schema.org/draft-06/schema#",Ro=["version","creator","entries"],Do={version:{type:"string"},creator:{$ref:"creator.json#"},browser:{$ref:"browser.json#"},pages:{type:"array",items:{$ref:"page.json#"}},entries:{type:"array",items:{$ref:"entry.json#"}},comment:{type:"string"}},_o={$id:"log.json#",$schema:ko,type:"object",required:Ro,properties:Do},To=Object.freeze({$id:"log.json#",$schema:ko,type:"object",required:Ro,properties:Do,default:_o}),xo="http://json-schema.org/draft-06/schema#",$o=["startedDateTime","id","title","pageTimings"],qo={startedDateTime:{type:"string",format:"date-time",pattern:"^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))"},id:{type:"string",unique:!0},title:{type:"string"},pageTimings:{$ref:"pageTimings.json#"},comment:{type:"string"}},Ao={$id:"page.json#",$schema:xo,type:"object",optional:!0,required:$o,properties:qo},Fo=Object.freeze({$id:"page.json#",$schema:xo,type:"object",optional:!0,required:$o,properties:qo,default:Ao}),Uo="http://json-schema.org/draft-06/schema#",Co={onContentLoad:{type:"number",min:-1},onLoad:{type:"number",min:-1},comment:{type:"string"}},No={$id:"pageTimings.json#",$schema:Uo,type:"object",properties:Co},Lo=Object.freeze({$id:"pageTimings.json#",$schema:Uo,type:"object",properties:Co,default:No}),Io="http://json-schema.org/draft-06/schema#",Ho=["mimeType"],zo={mimeType:{type:"string"},text:{type:"string"},params:{type:"array",required:["name"],properties:{name:{type:"string"},value:{type:"string"},fileName:{type:"string"},contentType:{type:"string"},comment:{type:"string"}}},comment:{type:"string"}},Bo={$id:"postData.json#",$schema:Io,type:"object",optional:!0,required:Ho,properties:zo},Mo=Object.freeze({$id:"postData.json#",$schema:Io,type:"object",optional:!0,required:Ho,properties:zo,default:Bo}),Qo="http://json-schema.org/draft-06/schema#",Vo=["name","value"],Jo={name:{type:"string"},value:{type:"string"},comment:{type:"string"}},Yo={$id:"query.json#",$schema:Qo,type:"object",required:Vo,properties:Jo},Ko=Object.freeze({$id:"query.json#",$schema:Qo,type:"object",required:Vo,properties:Jo,default:Yo}),Go="http://json-schema.org/draft-06/schema#",Zo=["method","url","httpVersion","cookies","headers","queryString","headersSize","bodySize"],Wo={method:{type:"string"},url:{type:"string",format:"uri"},httpVersion:{type:"string"},cookies:{type:"array",items:{$ref:"cookie.json#"}},headers:{type:"array",items:{$ref:"header.json#"}},queryString:{type:"array",items:{$ref:"query.json#"}},postData:{$ref:"postData.json#"},headersSize:{type:"integer"},bodySize:{type:"integer"},comment:{type:"string"}},Xo={$id:"request.json#",$schema:Go,type:"object",required:Zo,properties:Wo},ei=Object.freeze({$id:"request.json#",$schema:Go,type:"object",required:Zo,properties:Wo,default:Xo}),ti="http://json-schema.org/draft-06/schema#",ri=["status","statusText","httpVersion","cookies","headers","content","redirectURL","headersSize","bodySize"],ai={status:{type:"integer"},statusText:{type:"string"},httpVersion:{type:"string"},cookies:{type:"array",items:{$ref:"cookie.json#"}},headers:{type:"array",items:{$ref:"header.json#"}},content:{$ref:"content.json#"},redirectURL:{type:"string"},headersSize:{type:"integer"},bodySize:{type:"integer"},comment:{type:"string"}},si={$id:"response.json#",$schema:ti,type:"object",required:ri,properties:ai},ni=Object.freeze({$id:"response.json#",$schema:ti,type:"object",required:ri,properties:ai,default:si}),oi="http://json-schema.org/draft-06/schema#",ii=["send","wait","receive"],ui={dns:{type:"number",min:-1},connect:{type:"number",min:-1},blocked:{type:"number",min:-1},send:{type:"number",min:-1},wait:{type:"number",min:-1},receive:{type:"number",min:-1},ssl:{type:"number",min:-1},comment:{type:"string"}},li={$id:"timings.json#",$schema:oi,required:ii,properties:ui},hi=Object.freeze({$id:"timings.json#",$schema:oi,required:ii,properties:ui,default:li}),pi={afterRequest:qn&&$n||qn,beforeRequest:Ln&&Nn||Ln,browser:Mn&&Bn||Mn,cache:Yn&&Jn||Yn,content:Xn&&Wn||Xn,cookie:so&&ao||so,creator:lo&&uo||lo,entry:mo&&fo||mo,har:Po&&bo||Po,header:Oo&&So||Oo,log:To&&_o||To,page:Fo&&Ao||Fo,pageTimings:Lo&&No||Lo,postData:Mo&&Bo||Mo,query:Ko&&Yo||Ko,request:ei&&Xo||ei,response:ni&&si||ni,timings:hi&&li||hi};function ci(e,t,r){t=t||{};var a=(kn=kn||new fn({allErrors:!0,schemas:pi})).getSchema(e+".json"),s=a(t);return "function"==typeof r?r(s?null:new Rn(a.errors),s):s}var fi={afterRequest:function(e,t){return ci("afterRequest",e,t)},beforeRequest:function(e,t){return ci("beforeRequest",e,t)},browser:function(e,t){return ci("browser",e,t)},cache:function(e,t){return ci("cache",e,t)},content:function(e,t){return ci("content",e,t)},cookie:function(e,t){return ci("cookie",e,t)},creator:function(e,t){return ci("creator",e,t)},entry:function(e,t){return ci("entry",e,t)},har:function(e,t){return ci("har",e,t)},header:function(e,t){return ci("header",e,t)},log:function(e,t){return ci("log",e,t)},page:function(e,t){return ci("page",e,t)},pageTimings:function(e,t){return ci("pageTimings",e,t)},postData:function(e,t){return ci("postData",e,t)},query:function(e,t){return ci("query",e,t)},request:function(e,t){return ci("request",e,t)},response:function(e,t){return ci("response",e,t)},timings:function(e,t){return ci("timings",e,t)}},di=function(e,t){if(void 0===e[t.name])return e[t.name]=t.value,e;var r=[e[t.name],t.value];return e[t.name]=r,e},mi=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},vi=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),yi=function(){function e(t){mi(this,e);var r=this,a=at._extend({},t);this.requests=[],(a.log&&a.log.entries?a.log.entries:[{request:a}]).forEach(function(e){e.request.httpVersion=e.request.httpVersion||"HTTP/1.1",e.request.queryString=e.request.queryString||[],e.request.headers=e.request.headers||[],e.request.cookies=e.request.cookies||[],e.request.postData=e.request.postData||{},e.request.postData.mimeType=e.request.postData.mimeType||"application/octet-stream",e.request.bodySize=0,e.request.headersSize=0,e.request.postData.size=0,fi.request(e.request,function(t,a){if(!a)throw t;r.requests.push(r.prepare(e.request));});});}return vi(e,[{key:"_matchTarget",value:function(e,t){return !!ar.hasOwnProperty(e)&&("string"==typeof t&&"function"==typeof ar[e][t]?ar[e][t]:ar[e][ar[e].info.default])}},{key:"convert",value:function(e,t,r){!r&&t&&(r=t);var a=this._matchTarget(e,t);if(a){var s=this.requests.map(function(e){return a(e,r)});return 1===s.length?s[0]:s}return !1}},{key:"prepare",value:function(e){e.queryObj={},e.headersObj={},e.cookiesObj={},e.allHeaders={},e.postData.jsonObj=!1,e.postData.paramsObj=!1,e.queryString&&e.queryString.length&&(e.queryObj=e.queryString.reduce(di,{})),e.headers&&e.headers.length&&(e.headersObj=e.headers.reduceRight(function(e,t){return e[t.name.toLowerCase()]=t.value,e},{})),e.cookies&&e.cookies.length&&(e.cookiesObj=e.cookies.reduceRight(function(e,t){return e[t.name]=t.value,e},{}));var t=e.cookies.map(function(e){return encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)});switch(t.length&&(e.allHeaders.cookie=t.join("; ")),e.postData.mimeType){case"multipart/mixed":case"multipart/related":case"multipart/form-data":case"multipart/alternative":if(e.postData.text="",e.postData.mimeType="multipart/form-data",e.postData.params){var r=new sr;r._boundary="---011000010111000001101001",e.postData.params.forEach(function(e){r.append(e.name,e.value||"",{filename:e.fileName||null,contentType:e.contentType||null});}),e.postData.boundary=r.getBoundary(),e.headersObj["content-type"]="multipart/form-data; boundary="+r.getBoundary();}break;case"application/x-www-form-urlencoded":e.postData.params?(e.postData.paramsObj=e.postData.params.reduce(di,{}),e.postData.text=cr.stringify(e.postData.paramsObj)):e.postData.text="";break;case"text/json":case"text/x-json":case"application/json":case"application/x-json":if(e.postData.mimeType="application/json",e.postData.text)try{e.postData.jsonObj=JSON.parse(e.postData.text);}catch(t){e.postData.mimeType="text/plain";}}return e.allHeaders=at._extend(e.allHeaders,e.headersObj),e.uriObj=$r.parse(e.url,!0,!0),e.queryObj=at._extend(e.queryObj,e.uriObj.query),e.uriObj.query=null,e.uriObj.search=null,e.uriObj.path=e.uriObj.pathname,e.url=$r.format(e.uriObj),e.uriObj.query=e.queryObj,e.uriObj.search=cr.stringify(e.queryObj),e.uriObj.search&&(e.uriObj.path=e.uriObj.pathname+"?"+e.uriObj.search),e.fullUrl=$r.format(e.uriObj),e}},{key:"availableTargets",value:function(){return Object.keys(ar).map(function(e){var t=Object.assign({},ar[e].info),r=Object.keys(ar[e]).filter(function(e){return !~["info","index"].indexOf(e)}).map(function(t){return ar[e][t].info});return r.length&&(t.clients=r),t})}},{key:"extname",value:function(e){return ar[e]?ar[e].info.extname:""}}]),e}();e.default=yi,Object.defineProperty(e,"__esModule",{value:!0});});
	});

	var hardyHAR = /*@__PURE__*/getDefaultExportFromCjs(hardyhar);

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
	var Prism = (function (_self){

	// Private helper vars
	var lang = /\blang(?:uage)?-([\w-]+)\b/i;
	var uniqueId = 0;


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

				var clone, id;
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
				while (element && !lang.test(element.className)) {
					element = element.parentElement;
				}
				if (element) {
					return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
				}
				return 'none';
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

					var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
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
				_.languages.DFS(_.languages, function(key, value) {
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

						var property = o[i],
						    propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						}
						else if (propertyType === 'Array' && !visited[objId(property)]) {
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
		highlightAll: function(async, callback) {
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
		highlightAllUnder: function(container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; element = env.elements[i++];) {
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
		highlightElement: function(element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
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

				worker.onmessage = function(evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
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
		tokenize: function(text, grammar) {
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

				for (var i=0, callback; callback = callbacks[i++];) {
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

				var patternObj = patterns[j],
					inside = patternObj.inside,
					lookbehind = !!patternObj.lookbehind,
					greedy = !!patternObj.greedy,
					alias = patternObj.alias;

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
						if (!match) {
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

					var from = match.index,
						matchStr = match[0],
						before = str.slice(0, from),
						after = str.slice(from + matchStr.length);

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
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
							cause: token + ',' + j,
							reach: reach
						});
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
				var message = JSON.parse(evt.data),
					lang = message.language,
					code = message.code,
					immediateClose = message.immediateClose;

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

	})(_self);

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

	(function(Prism) {
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
				pattern: RegExp("\\$" + envVars),
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
						'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
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
							pattern: RegExp("(\\{)" + envVars),
							lookbehind: true,
							alias: 'constant'
						}
					}
				},
				/\$(?:\w+|[#?*!@$])/
			],
			// Escape sequences from echo and printf's manuals, and escaped quotes.
			'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
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
					pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
					lookbehind: true,
					alias: 'function'
				},
				{
					// b)
					pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
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
				pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
				inside: {
					'environment': {
						pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				},
				alias: 'variable',
				lookbehind: true
			},
			'string': [
				// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
				{
					pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
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
					pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
					lookbehind: true,
					greedy: true,
					inside: insideString
				}
			],
			'environment': {
				pattern: RegExp("\\$?" + envVars),
				alias: 'constant'
			},
			'variable': insideString.variable,
			'function': {
				pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
				lookbehind: true
			},
			'keyword': {
				pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
				lookbehind: true
			},
			// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
			'builtin': {
				pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
				lookbehind: true,
				// Alias added to make those easier to distinguish from strings.
				alias: 'class-name'
			},
			'boolean': {
				pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
				lookbehind: true
			},
			'file-descriptor': {
				pattern: /\B&\d\b/,
				alias: 'important'
			},
			'operator': {
				// Lots of redirections here, but not just that.
				pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
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
		for(var i = 0; i < toBeCopied.length; i++) {
			inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
		}

		Prism.languages.shell = Prism.languages.bash;
	})(Prism);

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
			pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: true,
			inside: {
				'punctuation': /[.\\]/
			}
		},
		'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(?:true|false)\b/,
		'function': /\w+(?=\()/,
		'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		'punctuation': /[{}[\];(),.:]/
	};

	Prism.languages.c = Prism.languages.extend('clike', {
		'comment': {
			pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
			greedy: true
		},
		'class-name': {
			pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
			lookbehind: true
		},
		'keyword': /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
		'function': /[a-z_]\w*(?=\s*\()/i,
		'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
		'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
	});

	Prism.languages.insertBefore('c', 'string', {
		'macro': {
			// allow for multiline macro definitions
			// spaces after the # character compile fine with gcc
			pattern: /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
			lookbehind: true,
			greedy: true,
			alias: 'property',
			inside: {
				'string': [
					{
						// highlight the path of the include statement as a string
						pattern: /^(#\s*include\s*)<[^>]+>/,
						lookbehind: true
					},
					Prism.languages.c['string']
				],
				'comment': Prism.languages.c['comment'],
				'macro-name': [
					{
						pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
						lookbehind: true
					},
					{
						pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
						lookbehind: true,
						alias: 'function'
					}
				],
				// highlight macro directives as keywords
				'directive': {
					pattern: /^(#\s*)[a-z]+/,
					lookbehind: true,
					alias: 'keyword'
				},
				'directive-hash': /^#/,
				'punctuation': /##|\\(?=[\r\n])/,
				'expression': {
					pattern: /\S[\s\S]*/,
					inside: Prism.languages.c
				}
			}
		},
		// highlight predefined macros as constants
		'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
	});

	delete Prism.languages.c['boolean'];

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
			typeDeclaration: 'class enum interface struct',
			// contextual keywords
			// ("var" and "dynamic" are missing because they are used like types)
			contextual: 'add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where',
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
				},
				{
					pattern: RegExp(character),
					greedy: true,
					alias: 'character'
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
					pattern: re(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
					inside: typeInside
				}
			],
			'keyword': keywords,
			// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
			'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
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
				pattern: re(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
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
					/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
					[typeDeclarationKeywords, genericName, name, typeExpression, keywords.source]
				),
				lookbehind: true,
				inside: {
					'keyword': keywords,
					'class-name': {
						pattern: RegExp(typeExpression),
						greedy: true,
						inside: typeInside
					},
					'punctuation': /,/
				}
			},
			'preprocessor': {
				pattern: /(^\s*)#.*/m,
				lookbehind: true,
				alias: 'property',
				inside: {
					// highlight preprocessor directives as keywords
					'directive': {
						pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
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
			]
		});

	}(Prism));

	Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;

	Prism.languages.go = Prism.languages.extend('clike', {
		'string': {
			pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
			greedy: true
		},
		'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
		'boolean': /\b(?:_|iota|nil|true|false)\b/,
		'number': /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
		'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
		'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/
	});
	delete Prism.languages.go['class-name'];

	(function (Prism) {

		var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

		// full package (optional) + parent classes (optional)
		var classNamePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

		// based on the java naming conventions
		var className = {
			pattern: RegExp(classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
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
			'class-name': [
				className,
				{
					// variables and parameters
					// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
					pattern: RegExp(classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=())])/.source),
					lookbehind: true,
					inside: className.inside
				}
			],
			'keyword': keywords,
			'function': [
				Prism.languages.clike.function,
				{
					pattern: /(\:\:\s*)[a-z_]\w*/,
					lookbehind: true
				}
			],
			'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
			'operator': {
				pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
				lookbehind: true
			}
		});

		Prism.languages.insertBefore('java', 'string', {
			'triple-quoted-string': {
				// http://openjdk.java.net/jeps/355#Description
				pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
				greedy: true,
				alias: 'string'
			}
		});

		Prism.languages.insertBefore('java', 'class-name', {
			'annotation': {
				pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
				lookbehind: true,
				alias: 'punctuation'
			},
			'generics': {
				pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
				inside: {
					'class-name': className,
					'keyword': keywords,
					'punctuation': /[<>(),.:]/,
					'operator': /[?&|]/
				}
			},
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

	Prism.languages.markup = {
		'comment': /<!--[\s\S]*?-->/,
		'prolog': /<\?[\s\S]+?\?>/,
		'doctype': {
			// https://www.w3.org/TR/xml/#NT-doctypedecl
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: true,
			inside: {
				'internal-subset': {
					pattern: /(\[)[\s\S]+(?=\]>$)/,
					lookbehind: true,
					greedy: true,
					inside: null // see below
				},
				'string': {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: true
				},
				'punctuation': /^<!|>$|[[\]]/,
				'doctype-tag': /^DOCTYPE/,
				'name': /[^\s<>'"]+/
			}
		},
		'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
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
				'attr-value': {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: {
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
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
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
				lookbehind: true
			}
		],
		'keyword': [
			{
				pattern: /((?:^|})\s*)(?:catch|finally)\b/,
				lookbehind: true
			},
			{
				pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
				lookbehind: true
			},
		],
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
		'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	});

	Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
			lookbehind: true,
			greedy: true,
			inside: {
				'regex-source': {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: true,
					alias: 'language-regex',
					inside: Prism.languages.regex
				},
				'regex-flags': /[a-z]+$/,
				'regex-delimiter': /^\/|\/$/
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
				pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
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
		'template-string': {
			pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
			greedy: true,
			inside: {
				'template-punctuation': {
					pattern: /^`|`$/,
					alias: 'string'
				},
				'interpolation': {
					pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
					lookbehind: true,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\${|}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});

	if (Prism.languages.markup) {
		Prism.languages.markup.tag.addInlined('script', 'javascript');
	}

	Prism.languages.js = Prism.languages.javascript;

	Prism.languages.ocaml = {
		'comment': /\(\*[\s\S]*?\*\)/,
		'string': [
			{
				pattern: /"(?:\\.|[^\\\r\n"])*"/,
				greedy: true
			},
			{
				pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
				greedy: true
			}
		],
		'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
		'directive': {
			pattern: /\B#\w+/,
			alias: 'important'
		},
		'label': {
			pattern: /\B~\w+/,
			alias: 'function'
		},
		'type-variable': {
			pattern: /\B'\w+/,
			alias: 'function'
		},
		'variant': {
			pattern: /`\w+/,
			alias: 'variable'
		},
		'module': {
			pattern: /\b[A-Z]\w+/,
			alias: 'variable'
		},
		// For the list of keywords and operators,
		// see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
		'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
		'boolean': /\b(?:false|true)\b/,
		// Custom operators are allowed
		'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
		'punctuation': /[(){}\[\]|.,:;]|\b_\b/
	};

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
						while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1)
							++i;

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
			/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
			/\b(?:null)\b/i,
		];
		var number = /\b0b[01]+\b|\b0x[\da-f]+\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+)(?:e[+-]?\d+)?/i;
		var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
		var punctuation = /[{}\[\](),:;]/;

		Prism.languages.php = {
			'delimiter': {
				pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
				alias: 'important'
			},
			'comment': comment,
			'variable': /\$+(?:\w+\b|(?={))/i,
			'package': {
				pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			'keyword': [
				{
					pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
					alias: 'type-casting',
					greedy: true,
					lookbehind: true
				},
				{
					pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
					alias: 'type-hint',
					greedy: true,
					lookbehind: true
				},
				{
					pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
					alias: 'type-hint',
					greedy: true,
					lookbehind: true
				},
				{
					pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
					alias: 'return-type',
					greedy: true,
					lookbehind: true
				},
				{
					pattern: /(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,
					alias: 'return-type',
					greedy: true,
					lookbehind: true
				},
				{
					pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
					alias: 'type-declaration',
					greedy: true
				},
				{
					pattern: /(\|\s*)(?:null|false)\b/i,
					alias: 'type-declaration',
					greedy: true,
					lookbehind: true
				},
				{
					pattern: /\b(?:parent|self|static)(?=\s*::)/i,
					alias: 'static-context',
					greedy: true
				},
				/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i
			],
			'argument-name': /\b[a-z_]\w*(?=\s*:(?!:))/i,
			'class-name': [
				{
					pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
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
			'function': /\w+\s*(?=\()/,
			'property': {
				pattern: /(->)[\w]+/,
				lookbehind: true
			},
			'number': number,
			'operator': operator,
			'punctuation': punctuation
		};

		var string_interpolation = {
			pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
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
					'interpolation': string_interpolation // See below
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
					'interpolation': string_interpolation // See below
				}
			}
		];

		Prism.languages.insertBefore('php', 'variable', {
			'string': string,
		});

		Prism.languages.insertBefore('php', 'variable', {
			'attribute': {
				pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/mi,
				greedy: true,
				inside: {
					'attribute-content': {
						pattern: /^(#\[)[\s\S]+(?=]$)/,
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
						pattern: /^#\[|]$/,
						alias: 'punctuation'
					}
				}
			},
		});

		Prism.hooks.add('before-tokenize', function(env) {
			if (!/<\?/.test(env.code)) {
				return;
			}

			var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/ig;
			Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
		});

		Prism.hooks.add('after-tokenize', function(env) {
			Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
		});

	}(Prism));

	Prism.languages.python = {
		'comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true
		},
		'string-interpolation': {
			pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
			greedy: true,
			inside: {
				'interpolation': {
					// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
					pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
					lookbehind: true,
					inside: {
						'format-spec': {
							pattern: /(:)[^:(){}]+(?=}$)/,
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
			pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
			greedy: true,
			alias: 'string'
		},
		'string': {
			pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
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
			pattern: /(^\s*)@\w+(?:\.\w+)*/im,
			lookbehind: true,
			alias: ['annotation', 'punctuation'],
			inside: {
				'punctuation': /\./
			}
		},
		'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
		'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
		'boolean': /\b(?:True|False|None)\b/,
		'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
		'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
		'punctuation': /[{}[\];(),.:]/
	};

	Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

	Prism.languages.py = Prism.languages.python;

	/**
	 * Original by Samuel Flores
	 *
	 * Adds the following new token classes:
	 *     constant, builtin, variable, symbol, regex
	 */
	(function (Prism) {
		Prism.languages.ruby = Prism.languages.extend('clike', {
			'comment': [
				/#.*/,
				{
					pattern: /^=begin\s[\s\S]*?^=end/m,
					greedy: true
				}
			],
			'class-name': {
				pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
				lookbehind: true,
				inside: {
					'punctuation': /[.\\]/
				}
			},
			'keyword': /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
		});

		var interpolation = {
			pattern: /#\{[^}]+\}/,
			inside: {
				'delimiter': {
					pattern: /^#\{|\}$/,
					alias: 'tag'
				},
				rest: Prism.languages.ruby
			}
		};

		delete Prism.languages.ruby.function;

		Prism.languages.insertBefore('ruby', 'keyword', {
			'regex': [
				{
					pattern: RegExp(/%r/.source + '(?:' + [
						/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/.source,
						/\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/.source,
						// Here we need to specifically allow interpolation
						/\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/.source,
						/\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/.source,
						/<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/.source
					].join('|') + ')'),
					greedy: true,
					inside: {
						'interpolation': interpolation
					}
				},
				{
					pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
					lookbehind: true,
					greedy: true
				}
			],
			'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
			'symbol': {
				pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
				lookbehind: true
			},
			'method-definition': {
				pattern: /(\bdef\s+)[\w.]+/,
				lookbehind: true,
				inside: {
					'function': /\w+$/,
					rest: Prism.languages.ruby
				}
			}
		});

		Prism.languages.insertBefore('ruby', 'number', {
			'builtin': /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
			'constant': /\b[A-Z]\w*(?:[?!]|\b)/
		});

		Prism.languages.ruby.string = [
			{
				pattern: RegExp(/%[qQiIwWxs]?/.source + '(?:' + [
					/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
					/\((?:[^()\\]|\\[\s\S])*\)/.source,
					// Here we need to specifically allow interpolation
					/\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source,
					/\[(?:[^\[\]\\]|\\[\s\S])*\]/.source,
					/<(?:[^<>\\]|\\[\s\S])*>/.source
				].join('|') + ')'),
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
				greedy: true,
				inside: {
					'interpolation': interpolation
				}
			}
		];

		Prism.languages.rb = Prism.languages.ruby;
	}(Prism));

	// issues: nested multiline comments
	Prism.languages.swift = Prism.languages.extend('clike', {
		'string': {
			pattern: /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
					inside: {
						delimiter: {
							pattern: /^\\\(|\)$/,
							alias: 'variable'
						}
						// See rest below
					}
				}
			}
		},
		'keyword': /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
		'number': /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
		'constant': /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
		'atrule': /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
		'builtin': /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
	});
	Prism.languages.swift['string'].inside['interpolation'].inside.rest = Prism.languages.swift;

	!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,lookbehind:!0,greedy:!0,inside:a}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,o=0;o<s.length;o++)i[s[o]]=e.languages.bash[s[o]];e.languages.shell=e.languages.bash;}(Prism);

	Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;

	!function(a){var e=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,/\b(?:null)\b/i],i=/\b0b[01]+\b|\b0x[\da-f]+\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+)(?:e[+-]?\d+)?/i,n=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,s=/[{}\[\](),:;]/;a.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:e,variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},keyword:[{pattern:/(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:null|false)\b/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i],"argument-name":/\b[a-z_]\w*(?=\s*:(?!:))/i,"class-name":[{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:/\w+\s*(?=\()/,property:{pattern:/(->)[\w]+/,lookbehind:!0},number:i,operator:n,punctuation:s};var l={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,lookbehind:!0,inside:a.languages.php},r=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:l}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:l}}];a.languages.insertBefore("php","variable",{string:r}),a.languages.insertBefore("php","variable",{attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=]$)/,lookbehind:!0,inside:{comment:e,string:r,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:i,operator:n,punctuation:s}},delimiter:{pattern:/^#\[|]$/,alias:"punctuation"}}}}),a.hooks.add("before-tokenize",function(e){if(/<\?/.test(e.code)){a.languages["markup-templating"].buildPlaceholders(e,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi);}}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"php");});}(Prism);

	Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete Prism.languages.go["class-name"];

	!function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],"class-name":{pattern:/(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.languages.ruby}};delete e.languages.ruby.function,e.languages.insertBefore("ruby","keyword",{regex:[{pattern:RegExp("%r(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}","\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}","<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|")+")"),greedy:!0,inside:{interpolation:n}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{function:/\w+$/,rest:e.languages.ruby}}}),e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:RegExp("%[qQiIwWxs]?(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","\\((?:[^()\\\\]|\\\\[^])*\\)","\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}","\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]","<(?:[^<>\\\\]|\\\\[^])*>"].join("|")+")"),greedy:!0,inside:{interpolation:n}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:n}}],e.languages.rb=e.languages.ruby;}(Prism);

	Prism.languages.ocaml={comment:/\(\*[\s\S]*?\*\)/,string:[{pattern:/"(?:\\.|[^\\\r\n"])*"/,greedy:!0},{pattern:/(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,greedy:!0}],number:/\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,directive:{pattern:/\B#\w+/,alias:"important"},label:{pattern:/\B~\w+/,alias:"function"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"variable"},module:{pattern:/\b[A-Z]\w+/,alias:"variable"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,operator:/:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/[(){}\[\]|.,:;]|\b_\b/};

	!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",a={pattern:RegExp(n+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[a,{pattern:RegExp(n+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=())])"),lookbehind:!0,inside:a.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}});}(Prism);

	Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python;

	Prism.languages.swift=Prism.languages.extend("clike",{string:{pattern:/("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),Prism.languages.swift.string.inside.interpolation.inside.rest=Prism.languages.swift;

	!function(s){function a(e,s){return e.replace(/<<(\d+)>>/g,function(e,n){return "(?:"+s[+n]+")"})}function t(e,n,s){return RegExp(a(e,n),s||"")}function e(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,function(){return "(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var n="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i="class enum interface struct",r="add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return "\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(i),p=RegExp(l(n+" "+i+" "+r+" "+o)),c=l(i+" "+r+" "+o),u=l(n+" "+i+" "+o),g=e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=e("\\((?:[^()]|<<self>>)*\\)",2),h="@?\\b[A-Za-z_]\\w*\\b",f=a("<<0>>(?:\\s*<<1>>)?",[h,g]),m=a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[c,f]),k="\\[\\s*(?:,\\s*)*\\]",y=a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[m,k]),w=a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[a("\\(<<0>>+(?:,<<0>>+)+\\)",[a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,k])]),m,k]),v={keyword:p,punctuation:/[<>()?,.:[\]]/},x="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",$='"(?:\\\\.|[^\\\\"\r\n])*"';s.languages.csharp=s.languages.extend("clike",{string:[{pattern:t("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:t("(^|[^@$\\\\])<<0>>",[$]),lookbehind:!0,greedy:!0},{pattern:RegExp(x),greedy:!0,alias:"character"}],"class-name":[{pattern:t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:v},{pattern:t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[h,w]),lookbehind:!0,inside:v},{pattern:t("(\\busing\\s+)<<0>>(?=\\s*=)",[h]),lookbehind:!0},{pattern:t("(\\b<<0>>\\s+)<<1>>",[d,f]),lookbehind:!0,inside:v},{pattern:t("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:v},{pattern:t("(\\bwhere\\s+)<<0>>",[h]),lookbehind:!0},{pattern:t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:v},{pattern:t("\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[w,u,h]),inside:v}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),s.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),s.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t("([(,]\\s*)<<0>>(?=\\s*:)",[h]),lookbehind:!0,alias:"punctuation"}}),s.languages.insertBefore("csharp","class-name",{namespace:{pattern:t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[w,m]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:t("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[w]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:t("<<0>>\\s*<<1>>(?=\\s*\\()",[h,g]),inside:{function:t("^<<0>>",[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:v}}},"type-list":{pattern:t("\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,f,h,w,p.source]),lookbehind:!0,inside:{keyword:p,"class-name":{pattern:RegExp(w),greedy:!0,inside:v},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var _=$+"|"+x,B=a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[_]),E=e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[B]),2),R="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",P=a("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,E]);s.languages.insertBefore("csharp","class-name",{attribute:{pattern:t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[R,P]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t("^<<0>>(?=\\s*:)",[R]),alias:"keyword"},"attribute-arguments":{pattern:t("\\(<<0>>*\\)",[E]),inside:s.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var z=":[^}\r\n]+",S=e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[B]),2),j=a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[S,z]),A=e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[_]),2),F=a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[A,z]);function U(e,n){return {interpolation:{pattern:t("((?:^|[^{])(?:\\{\\{)*)<<0>>",[e]),lookbehind:!0,inside:{"format-string":{pattern:t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[n,z]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:s.languages.csharp}}},string:/[\s\S]+/}}s.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[j]),lookbehind:!0,greedy:!0,inside:U(j,S)},{pattern:t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[F]),lookbehind:!0,greedy:!0,inside:U(F,A)}]});}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp;

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var CodeSnippet = /*#__PURE__*/function (_React$Component) {
	  babelHelpers.inherits(CodeSnippet, _React$Component);

	  var _super = _createSuper$1(CodeSnippet);

	  function CodeSnippet(props) {
	    babelHelpers.classCallCheck(this, CodeSnippet);
	    return _super.call(this, props);
	  }

	  babelHelpers.createClass(CodeSnippet, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          har = _this$props.har,
	          target = _this$props.target,
	          client = _this$props.client,
	          prismLanguage = _this$props.prismLanguage; // loadLanguages([prismLanguage])
	      // TODO: httpsnippet should expose isLanguageSupported() method
	      // TODO: httpsnippet and prism should have mappings for single language prop

	      var code = new hardyHAR(har).convert(target, client);
	      var codeHTML = {
	        __html: prismCore.highlight(code, prismCore.languages[prismLanguage], prismLanguage)
	      };
	      return /*#__PURE__*/React__default['default'].createElement("pre", {
	        className: "language-".concat(this.props.prismLanguage)
	      }, /*#__PURE__*/React__default['default'].createElement("code", {
	        className: "language-".concat(this.props.prismLanguage),
	        dangerouslySetInnerHTML: codeHTML
	      }));
	    }
	  }]);
	  return CodeSnippet;
	}(React__default['default'].Component);
	CodeSnippet.propTypes = {
	  har: PropTypes__default['default'].object.isRequired,
	  target: PropTypes__default['default'].string.isRequired,
	  client: PropTypes__default['default'].string,
	  prismLanguage: PropTypes__default['default'].string.isRequired
	};

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	var CodeSnippetWidget = /*#__PURE__*/function (_React$Component) {
	  babelHelpers.inherits(CodeSnippetWidget, _React$Component);

	  var _super = _createSuper(CodeSnippetWidget);

	  function CodeSnippetWidget(props) {
	    var _this;

	    babelHelpers.classCallCheck(this, CodeSnippetWidget);
	    _this = _super.call(this, props);
	    _this.clickHandler = _this.clickHandler.bind(babelHelpers.assertThisInitialized(_this));
	    _this.state = {
	      active: 0
	    };
	    return _this;
	  }

	  babelHelpers.createClass(CodeSnippetWidget, [{
	    key: "getSnippetKey",
	    value: function getSnippetKey(snippet) {
	      return "".concat(snippet.target).concat(snippet.client ? "-".concat(snippet.client) : "");
	    }
	  }, {
	    key: "clickHandler",
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.setState({
	        active: e.target.id
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      this.props.har;
	      return /*#__PURE__*/React__default['default'].createElement("div", {
	        className: "tabs-component"
	      }, /*#__PURE__*/React__default['default'].createElement("div", {
	        className: "tabs-component-body"
	      }, /*#__PURE__*/React__default['default'].createElement("ul", {
	        role: "tablist",
	        className: "tabs-component-tabs"
	      }, this.props.snippets.map(function (snippet, index) {
	        var key = _this2.getSnippetKey(snippet);

	        return /*#__PURE__*/React__default['default'].createElement("li", {
	          role: "presentation",
	          className: "tabs-component-tab" + (index == _this2.state.active ? " is-active" : ""),
	          key: index
	        }, /*#__PURE__*/React__default['default'].createElement("a", {
	          "aria-controls": "#".concat(key),
	          "aria-selected": "true",
	          role: "tab",
	          className: "tabs-component-tab-a",
	          id: index,
	          href: "#".concat(key),
	          onClick: _this2.clickHandler
	        }, snippet.target));
	      })), /*#__PURE__*/React__default['default'].createElement("div", {
	        className: "tabs-component-panels"
	      }, this.props.snippets.filter(function (snippet, index) {
	        return index == _this2.state.active;
	      }).map(function (snippet) {
	        var key = _this2.getSnippetKey(snippet);

	        return /*#__PURE__*/React__default['default'].createElement("section", {
	          role: "tabpanel",
	          id: "#".concat(key),
	          key: "#".concat(key)
	        }, /*#__PURE__*/React__default['default'].createElement(CodeSnippet, babelHelpers["extends"]({
	          har: _this2.props.har
	        }, snippet)));
	      }))));
	    }
	  }]);
	  return CodeSnippetWidget;
	}(React__default['default'].Component);

	babelHelpers.defineProperty(CodeSnippetWidget, "propTypes", {
	  har: PropTypes__default['default'].object.isRequired,
	  snippets: PropTypes__default['default'].array.isRequired
	});

	var index = {
	  CodeSnippet: CodeSnippet,
	  CodeSnippetWidget: CodeSnippetWidget
	};

	return index;

})));
