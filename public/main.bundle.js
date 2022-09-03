/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS),
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "ErrorFactory": () => (/* binding */ ErrorFactory),
/* harmony export */   "FirebaseError": () => (/* binding */ FirebaseError),
/* harmony export */   "MAX_VALUE_MILLIS": () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   "RANDOM_FACTOR": () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   "Sha1": () => (/* binding */ Sha1),
/* harmony export */   "areCookiesEnabled": () => (/* binding */ areCookiesEnabled),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "assertionError": () => (/* binding */ assertionError),
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64Decode": () => (/* binding */ base64Decode),
/* harmony export */   "base64Encode": () => (/* binding */ base64Encode),
/* harmony export */   "base64urlEncodeWithoutPadding": () => (/* binding */ base64urlEncodeWithoutPadding),
/* harmony export */   "calculateBackoffMillis": () => (/* binding */ calculateBackoffMillis),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "createMockUserToken": () => (/* binding */ createMockUserToken),
/* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "errorPrefix": () => (/* binding */ errorPrefix),
/* harmony export */   "extractQuerystring": () => (/* binding */ extractQuerystring),
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "getModularInstance": () => (/* binding */ getModularInstance),
/* harmony export */   "getUA": () => (/* binding */ getUA),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isBrowserExtension": () => (/* binding */ isBrowserExtension),
/* harmony export */   "isElectron": () => (/* binding */ isElectron),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isIndexedDBAvailable": () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   "isMobileCordova": () => (/* binding */ isMobileCordova),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isNodeSdk": () => (/* binding */ isNodeSdk),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isUWP": () => (/* binding */ isUWP),
/* harmony export */   "isValidFormat": () => (/* binding */ isValidFormat),
/* harmony export */   "isValidTimestamp": () => (/* binding */ isValidTimestamp),
/* harmony export */   "issuedAtTime": () => (/* binding */ issuedAtTime),
/* harmony export */   "jsonEval": () => (/* binding */ jsonEval),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "ordinal": () => (/* binding */ ordinal),
/* harmony export */   "querystring": () => (/* binding */ querystring),
/* harmony export */   "querystringDecode": () => (/* binding */ querystringDecode),
/* harmony export */   "safeGet": () => (/* binding */ safeGet),
/* harmony export */   "stringLength": () => (/* binding */ stringLength),
/* harmony export */   "stringToByteArray": () => (/* binding */ stringToByteArray),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "validateArgCount": () => (/* binding */ validateArgCount),
/* harmony export */   "validateCallback": () => (/* binding */ validateCallback),
/* harmony export */   "validateContextObject": () => (/* binding */ validateContextObject),
/* harmony export */   "validateIndexedDBOpenable": () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   "validateNamespace": () => (/* binding */ validateNamespace)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({ 
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow: hidden;\n}\n\n#header {\n    border: 1px solid black;\n    padding: 20px;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: flex-start;\n}\n\n#content {\n    border: 1px solid red;\n    display: flex;\n    flex: 1 1 auto;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    min-width: 100%;\n    min-height:75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3em;\n}\n\n.project:hover {\n    background-color: rgb(221, 221, 221);\n}\n\n.active {\n    background-color: rgb(255, 212, 212);\n    font-weight: bold;\n}\n\n#content #projects {\n    border: 2px solid purple;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n    max-width: 25%;\n}\n\n#content #todos {\n    border: 2px solid green;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\n.todo-item {\n    margin: 20px;\n    border: 1px solid slategray;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.todo-item-left {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-item input {\n    margin-left: auto;\n    margin-right: 100px;\n    margin-top: 80px;\n    -webkit-appearance: none;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 20px;\n}\n\n.todo-item input:hover {\n    background-color: rgb(195, 195, 195);\n}\n\n#footer {\n    border: 1px solid green;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,wBAAwB;IACxB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    overflow: hidden;\n}\n\n#header {\n    border: 1px solid black;\n    padding: 20px;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: flex-start;\n}\n\n#content {\n    border: 1px solid red;\n    display: flex;\n    flex: 1 1 auto;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    min-width: 100%;\n    min-height:75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.3em;\n}\n\n.project:hover {\n    background-color: rgb(221, 221, 221);\n}\n\n.active {\n    background-color: rgb(255, 212, 212);\n    font-weight: bold;\n}\n\n#content #projects {\n    border: 2px solid purple;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n    max-width: 25%;\n}\n\n#content #todos {\n    border: 2px solid green;\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\n.todo-item {\n    margin: 20px;\n    border: 1px solid slategray;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.todo-item-left {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-item input {\n    margin-left: auto;\n    margin-right: 100px;\n    margin-top: 80px;\n    -webkit-appearance: none;\n    border: 1px solid black;\n    border-radius: 3px;\n    padding: 20px;\n}\n\n.todo-item input:hover {\n    background-color: rgb(195, 195, 195);\n}\n\n#footer {\n    border: 1px solid green;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   "_clearComponents": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   "_components": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   "_getProvider": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   "_registerComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
/* harmony export */   "getApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   "getApps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
/* harmony export */   "initializeApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
/* harmony export */   "onLog": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
/* harmony export */   "registerVersion": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");



var name = "firebase";
var version = "9.6.6";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ "./src/items.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const Todo = (() => {
    const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default')
    const item1 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Ben', 'About work', 'Jan 29th', '3')
    const item2 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Jane', 'About school', 'Jan 28th', '1')
    const item3 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Vadym', 'About family', 'Jan 27th', '2')
    defaultProject.addItem(item1)
    defaultProject.addItem(item2)
    defaultProject.addItem(item3)
    // A list of projectFactory objects, which are basically lists of items.
    // Sp, it's a 2D list.
    let _projectList = [defaultProject]

    // Click on a particular proj, loop thru its items, and create an elem for each
    const _showItems = (e) => {
        const itemContainer = document.getElementById('todos')
        const projID = e.target.dataset.index
        const project = _projectList[projID]
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            console.log(itemElem.lastChild)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const _deleteItems = () => {
        const itemContainer = document.getElementById('todos')
        while (itemContainer.firstChild) {
            itemContainer.removeChild(itemContainer.lastChild)
        }
    }

    // Loop through _projectList, give each proj elem an ID and append to container.
    const showProjects = () => {
        const projContainer = document.getElementById('projects')
        _projectList.forEach((proj, i) => {
            const projectElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(proj, i)

            // Make the first project active and show its items
            if (i == 0) {
                projectElem.classList.add('active')
                projectElem.addEventListener('click', makeProjectActive)
                const itemContainer = document.getElementById('todos')
                const items = proj.getItems()
                items.forEach((item, i) => {
                    const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
                    itemElem.lastChild.addEventListener('click', removeItem)
                    itemContainer.appendChild(itemElem)
                })
            }
            projContainer.appendChild(projectElem)
        })
    }

    const makeProject = () => {
        // Make a project internally
        const name = prompt('Give me a project name.')
        const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(name)
        _projectList.push(project)

        // Make all projects inactive
        const projects = document.querySelectorAll('.project')
        projects.forEach((proj) => proj.classList.remove('active'))

        // Figure out project's id and make a project DOM
        const projContainer = document.getElementById('projects')
        let projID = 0
        if (projContainer.lastChild) {
            projID = +projContainer.lastChild.dataset.index + 1
        }
        const projElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(project, projID)
        projElem.classList.add('active')
        projElem.addEventListener('click', makeProjectActive)
        projContainer.appendChild(projElem)

        // Delete items from prev proj
        _deleteItems()
    }

    const removeProject = () => {
        // Find active proj, delete its DOM and push out of _projectList,
        const proj = document.querySelector('.active')
        const projID = proj.dataset.index
        _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.deleteProject(projID)
        _projectList.splice(projID, 1)
        _deleteItems()

        // Make the last project active
        const projContainer = document.getElementById('projects')
        const projectElem = projContainer.lastChild
        projectElem.classList.add('active')

        // Show active project's items
        const projectID = projectElem.dataset.index
        const project = _projectList[projectID]
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    // Make all projects inactive and activate this project
    const makeProjectActive = (e) => {
        // Make all projects inactive
        const projects = document.querySelectorAll('.project')
        projects.forEach((proj) => proj.classList.remove('active'))

        // Activate this project
        e.target.classList.add('active')

        // Delete items from prev proj
        _deleteItems()

        // Show items for this project
        _showItems(e)
    }

    // Find an item's id, delete its DOM and push out of _itemList
    const removeItem = (e) => {
        // Find a project's id and its obj in _projectList
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        // Item's ID
        const itemID = e.target.parentNode.id

        // Delete item from project and from DOM
        // (I chose to refresh elements to give them appropriate IDs)
        project.removeItem(itemID)
        // itemDOM.deleteItem(itemID);

        _deleteItems()
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const makeItem = () => {
        // Find active project
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        // Ask user about item's props
        const title = prompt('Title of the to-do item: ')
        const description = prompt('Description: ')
        const dueDate = prompt('Due Date:')
        const priority = prompt('Priority: ')

        // Make an item and add it to the project
        const item = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)(title, description, dueDate, priority)
        project.addItem(item)

        // Make item's DOM elem and add it to the page
        // Use last item's id + 1 as this new item's id
        const itemContainer = document.getElementById('todos')
        let itemID = 0
        if (itemContainer.lastChild) {
            itemID = itemContainer.lastChild.id + 1
        }
        const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, itemID)
        itemElem.lastChild.addEventListener('click', removeItem)
        itemContainer.appendChild(itemElem)
    }

    return {
        makeProject,
        removeProject,
        makeItem,
        removeItem,
        makeProjectActive,
        showProjects,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

// Ok, there's a lot to say.

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.

// Thirdly, I can make proper forms to make projects and items.

// Fourthly, it would be cool to do some input validation.

// Fifthly, it would be nice to be able to edit your projects and items.

// If there's no project name given, it shouldn't be created.
// Ultimately, ^ comes down to input validation

// Store projects in localStorage

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemFactory": () => (/* binding */ itemFactory),
/* harmony export */   "itemDOM": () => (/* binding */ itemDOM)
/* harmony export */ });
const itemFactory = (title, description, dueDate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;

    const setTitle = (newTitle) => _title = newTitle;
    const setDescription = (newDescription) => _description = newDescription;
    const setDueDate = (newDate) => _dueDate = newDate;
    const setPriority = (newPriority) => _priority = newPriority;

    return { getTitle, getDescription, getDueDate, getPriority,
             setTitle, setDescription, setDueDate, setPriority }

};

const itemDOM = (() => {
    const createItem = (item, i) => {
        const container = document.createElement('div');
        container.classList.add('todo-item');
        container.id = i;

        const todoLeft = document.createElement('div');
        todoLeft.classList.add("todo-item-left");

        const title = document.createElement('p');
        title.classList.add('todo-item-title');
        title.textContent = item.getTitle();
        todoLeft.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('todo-item-description');
        description.textContent = item.getDescription();
        todoLeft.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.classList.add('todo-item-duedate');
        dueDate.textContent = item.getDueDate();
        todoLeft.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.classList.add('todo-item-priority');
        priority.textContent = item.getPriority();
        todoLeft.appendChild(priority);

        container.appendChild(todoLeft)

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        container.appendChild(checkbox);

        return container;
    }

    const deleteItem = (id) => {
        const todos = document.getElementById('todos');
        const item = document.getElementById(id);
        todos.removeChild(item);
    }

    return { createItem, deleteItem }

})();



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM)
/* harmony export */ });
const projectFactory = (name) => {
    const _name = name
    const _itemList = []

    const getName = () => _name
    const setName = (newName) => (_name = newName)

    const getItems = () => _itemList
    const addItem = (item) => _itemList.push(item)
    const removeItem = (position) => _itemList.splice(position, 1)

    return { getName, setName, getItems, addItem, removeItem }
}

const projectDOM = (() => {
    const createProject = (project, id) => {
        const container = document.createElement('div')
        container.classList.add('project')
        container.setAttribute('data-index', id)

        const title = document.createElement('p')
        title.classList.add('project-title')
        title.textContent = project.getName()
        container.appendChild(title)

        return container
    }

    const deleteProject = (id) => {
        const projects = document.getElementById('projects')
        const project = document.querySelector(`div[data-index="${id}"]`)
        projects.removeChild(project)
    }

    return { createProject, deleteProject }
})()




/***/ }),

/***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* binding */ DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* binding */ _addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* binding */ _addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* binding */ _apps),
/* harmony export */   "_clearComponents": () => (/* binding */ _clearComponents),
/* harmony export */   "_components": () => (/* binding */ _components),
/* harmony export */   "_getProvider": () => (/* binding */ _getProvider),
/* harmony export */   "_registerComponent": () => (/* binding */ _registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* binding */ _removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* binding */ deleteApp),
/* harmony export */   "getApp": () => (/* binding */ getApp),
/* harmony export */   "getApps": () => (/* binding */ getApps),
/* harmony export */   "initializeApp": () => (/* binding */ initializeApp),
/* harmony export */   "onLog": () => (/* binding */ onLog),
/* harmony export */   "registerVersion": () => (/* binding */ registerVersion),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");





/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

const name$o = "@firebase/app";
const version$1 = "0.7.16";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');

const name$n = "@firebase/app-compat";

const name$m = "@firebase/analytics-compat";

const name$l = "@firebase/analytics";

const name$k = "@firebase/app-check-compat";

const name$j = "@firebase/app-check";

const name$i = "@firebase/auth";

const name$h = "@firebase/auth-compat";

const name$g = "@firebase/database";

const name$f = "@firebase/database-compat";

const name$e = "@firebase/functions";

const name$d = "@firebase/functions-compat";

const name$c = "@firebase/installations";

const name$b = "@firebase/installations-compat";

const name$a = "@firebase/messaging";

const name$9 = "@firebase/messaging-compat";

const name$8 = "@firebase/performance";

const name$7 = "@firebase/performance-compat";

const name$6 = "@firebase/remote-config";

const name$5 = "@firebase/remote-config-compat";

const name$4 = "@firebase/storage";

const name$3 = "@firebase/storage-compat";

const name$2 = "@firebase/firestore";

const name$1 = "@firebase/firestore-compat";

const name = "firebase";
const version = "9.6.6";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    ["bad-app-name" /* BAD_APP_NAME */]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) &&
            (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    const name = app.name;
    if (_apps.has(name)) {
        _apps.delete(name);
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
    }
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentContainer": () => (/* binding */ ComponentContainer),
/* harmony export */   "Provider": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch (_a) {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_a) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
/* harmony export */   "setUserLogHandler": () => (/* binding */ setUserLogHandler)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach(inst => {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                    .map(arg => {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(arg => arg)
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpZfGLPjdZcKX74ONk00vtfkT_vPwPhs",
  authDomain: "todolist-50a02.firebaseapp.com",
  projectId: "todolist-50a02",
  storageBucket: "todolist-50a02.appspot.com",
  messagingSenderId: "292619457611",
  appId: "1:292619457611:web:17ad2efeb848f7cf41e9ce"
};

// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);

window.onload = _interface__WEBPACK_IMPORTED_MODULE_1__["default"].showProjects

const createProjBtn = document.getElementById('create-project')
createProjBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_1__["default"].makeProject)

const createItemBtn = document.getElementById('create-item')
createItemBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_1__["default"].makeItem)

const removeProjectBtn = document.getElementById('remove-project')
removeProjectBtn.addEventListener('click', _interface__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBTTtBQUNyQixlQUFlLHFCQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaUJBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhLEdBQUcsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCLElBQUksU0FBUyxHQUFHLFNBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsSUFBSTtBQUN2RCxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsTUFBTSxJQUFJOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWEsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUJBQXlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUSxVQUFVLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrekI7QUFDbHpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMTJEQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQixpQkFBaUIsb0JBQW9CLDZCQUE2Qix3QkFBd0IsdUJBQXVCLEdBQUcsYUFBYSw4QkFBOEIsb0JBQW9CLHFCQUFxQixvQkFBb0Isa0NBQWtDLEdBQUcsY0FBYyw0QkFBNEIsb0JBQW9CLHFCQUFxQixHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QixHQUFHLGNBQWMsc0JBQXNCLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIsR0FBRyxvQkFBb0IsMkNBQTJDLEdBQUcsYUFBYSwyQ0FBMkMsd0JBQXdCLEdBQUcsd0JBQXdCLCtCQUErQixvQkFBb0IsNkJBQTZCLHFCQUFxQixxQkFBcUIsR0FBRyxxQkFBcUIsOEJBQThCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEdBQUcsZ0JBQWdCLG1CQUFtQixrQ0FBa0Msb0JBQW9CLGtDQUFrQyw4QkFBOEIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixHQUFHLHNCQUFzQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwrQkFBK0IsOEJBQThCLHlCQUF5QixvQkFBb0IsR0FBRyw0QkFBNEIsMkNBQTJDLEdBQUcsYUFBYSw4QkFBOEIsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsd0JBQXdCLHVCQUF1QixHQUFHLGFBQWEsOEJBQThCLG9CQUFvQixxQkFBcUIsb0JBQW9CLGtDQUFrQyxHQUFHLGNBQWMsNEJBQTRCLG9CQUFvQixxQkFBcUIsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsR0FBRyxjQUFjLHNCQUFzQixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEdBQUcsb0JBQW9CLDJDQUEyQyxHQUFHLGFBQWEsMkNBQTJDLHdCQUF3QixHQUFHLHdCQUF3QiwrQkFBK0Isb0JBQW9CLDZCQUE2QixxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLDhCQUE4QixvQkFBb0IsNkJBQTZCLHFCQUFxQixHQUFHLGdCQUFnQixtQkFBbUIsa0NBQWtDLG9CQUFvQixrQ0FBa0MsOEJBQThCLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsR0FBRyxzQkFBc0Isd0JBQXdCLDBCQUEwQix1QkFBdUIsK0JBQStCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLEdBQUcsNEJBQTRCLDJDQUEyQyxHQUFHLGFBQWEsOEJBQThCLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUN2ckk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmdEO0FBQ2xCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQWU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEM7QUFDUzs7QUFFdkQ7QUFDQSwyQkFBMkIseURBQWM7QUFDekMsa0JBQWtCLG1EQUFXO0FBQzdCLGtCQUFrQixtREFBVztBQUM3QixrQkFBa0IsbURBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtEQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQWM7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrREFBd0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQXdCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFrQjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsbURBQVc7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRSxHQUFHO0FBQ3JFO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDK0I7QUFDdUI7QUFDbEM7QUFDVjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixHQUFHLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFNOztBQUV6Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLHNDQUFzQyxTQUFTO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGNBQWM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0EsOERBQThELFNBQVM7QUFDdkUsaUVBQWlFLFNBQVM7QUFDMUUsNkRBQTZELFNBQVM7QUFDdEUsb0VBQW9FLFNBQVM7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFZOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMERBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHFCQUFxQjtBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLG1DQUFtQyxpRUFBaUU7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLFlBQVkseURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTtBQUNBLDBCQUEwQixtRUFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQ0FBaUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUSxrQkFBa0IsUUFBUTtBQUM3RTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFTLElBQUksUUFBUSxvQkFBb0Isa0JBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFhO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJSO0FBQzNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqbEIwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvREFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCLGVBQWUsVUFBVTtBQUMxRjtBQUNBO0FBQ0EseUNBQXlDLFdBQVc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHdDQUF3QztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxHQUFHLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0NBQWtDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdCQUFnQixtQ0FBbUMsVUFBVTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUQ7QUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3haQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLEtBQUssY0FBYztBQUNuRDtBQUNBO0FBQ0Esc0ZBQXNGLFFBQVE7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEQ7QUFDNUQ7Ozs7Ozs7VUMxTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ1U7O0FBRTlCO0FBQzZDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwyREFBYTs7QUFFekIsZ0JBQWdCLCtEQUFpQjs7QUFFakM7QUFDQSx3Q0FBd0MsOERBQWdCOztBQUV4RDtBQUNBLHdDQUF3QywyREFBYTs7QUFFckQ7QUFDQSwyQ0FBMkMsZ0VBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL2Rpc3QvaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvbG9nZ2VyL2Rpc3QvZXNtL2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEZpcmViYXNlIGNvbnN0YW50cy4gIFNvbWUgb2YgdGhlc2UgKEBkZWZpbmVzKSBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBjb21waWxlLXRpbWUuXHJcbiAqL1xyXG5jb25zdCBDT05TVEFOVFMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgY2xpZW50IE5vZGUuanMgU0RLLlxyXG4gICAgICovXHJcbiAgICBOT0RFX0NMSUVOVDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgQWRtaW4gTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQURNSU46IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlYmFzZSBTREsgVmVyc2lvblxyXG4gICAgICovXHJcbiAgICBTREtfVkVSU0lPTjogJyR7SlNDT1JFX1ZFUlNJT059J1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBwcm92aWRlZCBhc3NlcnRpb24gaXMgZmFsc3lcclxuICovXHJcbmNvbnN0IGFzc2VydCA9IGZ1bmN0aW9uIChhc3NlcnRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmICghYXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgYXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3dpbmcuXHJcbiAqL1xyXG5jb25zdCBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IEVycm9yKCdGaXJlYmFzZSBEYXRhYmFzZSAoJyArXHJcbiAgICAgICAgQ09OU1RBTlRTLlNES19WRVJTSU9OICtcclxuICAgICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcclxuICAgICAgICBtZXNzYWdlKTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkkMSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICBjb25zdCBvdXQgPSBbXTtcclxuICAgIGxldCBwID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmXHJcbiAgICAgICAgICAgIGkgKyAxIDwgc3RyLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XHJcbiAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBQYWlyXHJcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKChjICYgMHgwM2ZmKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNmZik7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcbi8qKlxyXG4gKiBUdXJucyBhbiBhcnJheSBvZiBudW1iZXJzIGludG8gdGhlIHN0cmluZyBnaXZlbiBieSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGVcclxuICogY2hhcmFjdGVycyB0byB3aGljaCB0aGUgbnVtYmVycyBjb3JyZXNwb25kLlxyXG4gKiBAcGFyYW0gYnl0ZXMgQXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgY2hhcmFjdGVycy5cclxuICogQHJldHVybiBTdHJpbmdpZmljYXRpb24gb2YgdGhlIGFycmF5LlxyXG4gKi9cclxuY29uc3QgYnl0ZUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbiAoYnl0ZXMpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICBjb25zdCBvdXQgPSBbXTtcclxuICAgIGxldCBwb3MgPSAwLCBjID0gMDtcclxuICAgIHdoaWxlIChwb3MgPCBieXRlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBjMSA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICBpZiAoYzEgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYzEgPiAxOTEgJiYgYzEgPCAyMjQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYzEgPiAyMzkgJiYgYzEgPCAzNjUpIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGMzID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBjb25zdCBjNCA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgdSA9ICgoKGMxICYgNykgPDwgMTgpIHwgKChjMiAmIDYzKSA8PCAxMikgfCAoKGMzICYgNjMpIDw8IDYpIHwgKGM0ICYgNjMpKSAtXHJcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKHUgPj4gMTApKTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCArICh1ICYgMTAyMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGMzID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xyXG59O1xyXG4vLyBXZSBkZWZpbmUgaXQgYXMgYW4gb2JqZWN0IGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNsYXNzIGJlY2F1c2UgYSBjbGFzcyBjb21waWxlZCBkb3duIHRvIGVzNSBjYW4ndFxyXG4vLyBiZSB0cmVlc2hha2VkLiBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTY5MVxyXG4vLyBTdGF0aWMgbG9va3VwIG1hcHMsIGxhemlseSBwb3B1bGF0ZWQgYnkgaW5pdF8oKVxyXG5jb25zdCBiYXNlNjQgPSB7XHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gY2hhcmFjdGVycy5cclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gd2Vic2FmZSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIHdlYnNhZmUgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQsIHNoYXJlZCBiZXR3ZWVuXHJcbiAgICAgKiBFTkNPREVEX1ZBTFMgYW5kIEVOQ09ERURfVkFMU19XRUJTQUZFXHJcbiAgICAgKi9cclxuICAgIEVOQ09ERURfVkFMU19CQVNFOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArICcwMTIzNDU2Nzg5JyxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQuIFZhbHVlIDY0ICg9KSBpcyBzcGVjaWFsOyBpdCBtZWFucyBcIm5vdGhpbmcuXCJcclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICcrLz0nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIHdlYnNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKi9cclxuICAgIGdldCBFTkNPREVEX1ZBTFNfV0VCU0FGRSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICctXy4nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGF0b2IgYW5kIGJ0b2EgZnVuY3Rpb25zLiBUaGlzIGV4dGVuc2lvblxyXG4gICAgICogc3RhcnRlZCBhdCBNb3ppbGxhIGJ1dCBpcyBub3cgaW1wbGVtZW50ZWQgYnkgbWFueSBicm93c2Vycy4gV2UgdXNlIHRoZVxyXG4gICAgICogQVNTVU1FXyogdmFyaWFibGVzIHRvIGF2b2lkIHB1bGxpbmcgaW4gdGhlIGZ1bGwgdXNlcmFnZW50IGRldGVjdGlvbiBsaWJyYXJ5XHJcbiAgICAgKiBidXQgc3RpbGwgYWxsb3dpbmcgdGhlIHN0YW5kYXJkIHBlci1icm93c2VyIGNvbXBpbGF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIEhBU19OQVRJVkVfU1VQUE9SVDogdHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicsXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1lbmNvZGUgYW4gYXJyYXkgb2YgYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFuIGFycmF5IG9mIGJ5dGVzIChudW1iZXJzIHdpdGhcclxuICAgICAqICAgICB2YWx1ZSBpbiBbMCwgMjU1XSkgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgQm9vbGVhbiBpbmRpY2F0aW5nIHdlIHNob3VsZCB1c2UgdGhlXHJcbiAgICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZUJ5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2VuY29kZUJ5dGVBcnJheSB0YWtlcyBhbiBhcnJheSBhcyBhIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRfKCk7XHJcbiAgICAgICAgY29uc3QgYnl0ZVRvQ2hhck1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF87XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMSA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpICsgMSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZTIgPSBoYXZlQnl0ZTIgPyBpbnB1dFtpICsgMV0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpICsgMiA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBpbnB1dFtpICsgMl0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRCeXRlMSA9IGJ5dGUxID4+IDI7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMSAmIDB4MDMpIDw8IDQpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBsZXQgb3V0Qnl0ZTMgPSAoKGJ5dGUyICYgMHgwZikgPDwgMikgfCAoYnl0ZTMgPj4gNik7XHJcbiAgICAgICAgICAgIGxldCBvdXRCeXRlNCA9IGJ5dGUzICYgMHgzZjtcclxuICAgICAgICAgICAgaWYgKCFoYXZlQnl0ZTMpIHtcclxuICAgICAgICAgICAgICAgIG91dEJ5dGU0ID0gNjQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhdmVCeXRlMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dEJ5dGUzID0gNjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMV0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTJdLCBieXRlVG9DaGFyTWFwW291dEJ5dGUzXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlNF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQSBzdHJpbmcgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgSWYgdHJ1ZSwgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlU3RyaW5nKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcclxuICAgICAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXHJcbiAgICAgICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidG9hKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5JDEoaW5wdXQpLCB3ZWJTYWZlKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcclxuICAgICAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXHJcbiAgICAgICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdG9iKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ5dGVBcnJheVRvU3RyaW5nKHRoaXMuZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQsIHdlYlNhZmUpKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogSW4gYmFzZS02NCBkZWNvZGluZywgZ3JvdXBzIG9mIGZvdXIgY2hhcmFjdGVycyBhcmUgY29udmVydGVkIGludG8gdGhyZWVcclxuICAgICAqIGJ5dGVzLiAgSWYgdGhlIGVuY29kZXIgZGlkIG5vdCBhcHBseSBwYWRkaW5nLCB0aGUgaW5wdXQgbGVuZ3RoIG1heSBub3RcclxuICAgICAqIGJlIGEgbXVsdGlwbGUgb2YgNC5cclxuICAgICAqXHJcbiAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBsYXN0IGdyb3VwIHdpbGwgaGF2ZSBmZXdlciB0aGFuIDQgY2hhcmFjdGVycywgYW5kXHJcbiAgICAgKiBwYWRkaW5nIHdpbGwgYmUgaW5mZXJyZWQuICBJZiB0aGUgZ3JvdXAgaGFzIG9uZSBvciB0d28gY2hhcmFjdGVycywgaXQgZGVjb2Rlc1xyXG4gICAgICogdG8gb25lIGJ5dGUuICBJZiB0aGUgZ3JvdXAgaGFzIHRocmVlIGNoYXJhY3RlcnMsIGl0IGRlY29kZXMgdG8gdHdvIGJ5dGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dCB0byBkZWNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBUcnVlIGlmIHdlIHNob3VsZCB1c2UgdGhlIHdlYi1zYWZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBieXRlcyByZXByZXNlbnRpbmcgdGhlIGRlY29kZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0XygpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJUb0J5dGVNYXAgPSB3ZWJTYWZlXHJcbiAgICAgICAgICAgID8gdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV9cclxuICAgICAgICAgICAgOiB0aGlzLmNoYXJUb0J5dGVNYXBfO1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOykge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDA7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgY29uc3QgaGF2ZUJ5dGUzID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTQgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMSk7XHJcbiAgICAgICAgICAgIGlmIChieXRlMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZ1xyXG4gKi9cclxuY29uc3QgYmFzZTY0RW5jb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgY29uc3QgdXRmOEJ5dGVzID0gc3RyaW5nVG9CeXRlQXJyYXkkMShzdHIpO1xyXG4gICAgcmV0dXJuIGJhc2U2NC5lbmNvZGVCeXRlQXJyYXkodXRmOEJ5dGVzLCB0cnVlKTtcclxufTtcclxuLyoqXHJcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZyAod2l0aG91dCBcIi5cIiBwYWRkaW5nIGluIHRoZSBlbmQpLlxyXG4gKiBlLmcuIFVzZWQgaW4gSlNPTiBXZWIgVG9rZW4gKEpXVCkgcGFydHMuXHJcbiAqL1xyXG5jb25zdCBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFVzZSBiYXNlNjR1cmwgZW5jb2RpbmcgYW5kIHJlbW92ZSBwYWRkaW5nIGluIHRoZSBlbmQgKGRvdCBjaGFyYWN0ZXJzKS5cclxuICAgIHJldHVybiBiYXNlNjRFbmNvZGUoc3RyKS5yZXBsYWNlKC9cXC4vZywgJycpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXHJcbiAqXHJcbiAqIE5PVEU6IERPIE5PVCB1c2UgdGhlIGdsb2JhbCBhdG9iKCkgZnVuY3Rpb24gLSBpdCBkb2VzIE5PVCBzdXBwb3J0IHRoZVxyXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cclxuICpcclxuICogQHBhcmFtIHN0ciBUbyBiZSBkZWNvZGVkXHJcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXHJcbiAqL1xyXG5jb25zdCBiYXNlNjREZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBiYXNlNjQuZGVjb2RlU3RyaW5nKHN0ciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Jhc2U2NERlY29kZSBmYWlsZWQ6ICcsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEbyBhIGRlZXAtY29weSBvZiBiYXNpYyBKYXZhU2NyaXB0IE9iamVjdHMgb3IgQXJyYXlzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcENvcHkodmFsdWUpIHtcclxuICAgIHJldHVybiBkZWVwRXh0ZW5kKHVuZGVmaW5lZCwgdmFsdWUpO1xyXG59XHJcbi8qKlxyXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0IChyZWN1cnNpdmVseSBhbGxvd3MgZXh0ZW5zaW9uXHJcbiAqIG9mIE9iamVjdHMgYW5kIEFycmF5cykuICBTY2FsYXIgdmFsdWVzIGluIHRoZSB0YXJnZXQgYXJlIG92ZXItd3JpdHRlbi5cclxuICogSWYgdGFyZ2V0IGlzIHVuZGVmaW5lZCwgYW4gb2JqZWN0IG9mIHRoZSBhcHByb3ByaWF0ZSB0eXBlIHdpbGwgYmUgY3JlYXRlZFxyXG4gKiAoYW5kIHJldHVybmVkKS5cclxuICpcclxuICogV2UgcmVjdXJzaXZlbHkgY29weSBhbGwgY2hpbGQgcHJvcGVydGllcyBvZiBwbGFpbiBPYmplY3RzIGluIHRoZSBzb3VyY2UtIHNvXHJcbiAqIHRoYXQgbmFtZXNwYWNlLSBsaWtlIGRpY3Rpb25hcmllcyBhcmUgbWVyZ2VkLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIHRhcmdldCBjYW4gYmUgYSBmdW5jdGlvbiwgaW4gd2hpY2ggY2FzZSB0aGUgcHJvcGVydGllcyBpblxyXG4gKiB0aGUgc291cmNlIE9iamVjdCBhcmUgY29waWVkIG9udG8gaXQgYXMgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIEZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBOb3RlOiB3ZSBkb24ndCBtZXJnZSBfX3Byb3RvX18gdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoc291cmNlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBEYXRlOlxyXG4gICAgICAgICAgICAvLyBUcmVhdCBEYXRlcyBsaWtlIHNjYWxhcnM7IGlmIHRoZSB0YXJnZXQgZGF0ZSBvYmplY3QgaGFkIGFueSBjaGlsZFxyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIC0gdGhleSB3aWxsIGJlIGxvc3QhXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHNvdXJjZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICAgIC8vIEFsd2F5cyBjb3B5IHRoZSBhcnJheSBzb3VyY2UgYW5kIG92ZXJ3cml0ZSB0aGUgdGFyZ2V0LlxyXG4gICAgICAgICAgICB0YXJnZXQgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gTm90IGEgcGxhaW4gT2JqZWN0IC0gdHJlYXQgaXQgYXMgYSBzY2FsYXIuXHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XHJcbiAgICAgICAgLy8gdXNlIGlzVmFsaWRLZXkgdG8gZ3VhcmQgYWdhaW5zdCBwcm90b3R5cGUgcG9sbHV0aW9uLiBTZWUgaHR0cHM6Ly9zbnlrLmlvL3Z1bG4vU05ZSy1KUy1MT0RBU0gtNDUwMjAyXHJcbiAgICAgICAgaWYgKCFzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkgfHwgIWlzVmFsaWRLZXkocHJvcCkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xyXG4gICAgcmV0dXJuIGtleSAhPT0gJ19fcHJvdG9fXyc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRGVmZXJyZWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXHJcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xyXG4gICAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvciwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVNb2NrVXNlclRva2VuKHRva2VuLCBwcm9qZWN0SWQpIHtcclxuICAgIGlmICh0b2tlbi51aWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nKTtcclxuICAgIH1cclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSBcIm5vbmVcIiBhcyB0aGUgYWxnb3JpdGhtLlxyXG4gICAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgICAgIGFsZzogJ25vbmUnLFxyXG4gICAgICAgIHR5cGU6ICdKV1QnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCB8fCAnZGVtby1wcm9qZWN0JztcclxuICAgIGNvbnN0IGlhdCA9IHRva2VuLmlhdCB8fCAwO1xyXG4gICAgY29uc3Qgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XHJcbiAgICBpZiAoIXN1Yikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vY2tVc2VyVG9rZW4gbXVzdCBjb250YWluICdzdWInIG9yICd1c2VyX2lkJyBmaWVsZCFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7IFxyXG4gICAgICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xyXG4gICAgICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCwgYXVkOiBwcm9qZWN0LCBpYXQsIGV4cDogaWF0ICsgMzYwMCwgYXV0aF90aW1lOiBpYXQsIHN1YiwgdXNlcl9pZDogc3ViLCBmaXJlYmFzZToge1xyXG4gICAgICAgICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgaWRlbnRpdGllczoge31cclxuICAgICAgICB9IH0sIHRva2VuKTtcclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSB0aGUgZW1wdHkgc3RyaW5nIGFzIGEgc2lnbmF0dXJlLlxyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gJyc7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLFxyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSxcclxuICAgICAgICBzaWduYXR1cmVcclxuICAgIF0uam9pbignLicpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIG5hdmlnYXRvci51c2VyQWdlbnQgc3RyaW5nIG9yICcnIGlmIGl0J3Mgbm90IGRlZmluZWQuXHJcbiAqIEByZXR1cm4gdXNlciBhZ2VudCBzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldFVBKCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvclsndXNlckFnZW50J107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cclxuICpcclxuICogRGVsaWJlcmF0ZWx5IGRvZXMgbm90IHJlbHkgb24gY2hlY2tpbmcgYGZpbGU6Ly9gIFVSTHMgKGFzIHRoaXMgZmFpbHMgUGhvbmVHYXBcclxuICogaW4gdGhlIFJpcHBsZSBlbXVsYXRvcikgbm9yIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseVxyXG4gKiB3YWl0IGZvciBhIGNhbGxiYWNrLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNNb2JpbGVDb3Jkb3ZhKCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgU2V0dGluZyB1cCBhbiBicm9hZGx5IGFwcGxpY2FibGUgaW5kZXggc2lnbmF0dXJlIGZvciBXaW5kb3dcclxuICAgICAgICAvLyBqdXN0IHRvIGRlYWwgd2l0aCB0aGlzIGNhc2Ugd291bGQgcHJvYmFibHkgYmUgYSBiYWQgaWRlYS5cclxuICAgICAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxyXG4gICAgICAgIC9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KGdldFVBKCkpKTtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IE5vZGUuanMuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBOb2RlLmpzIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxyXG4gKi9cclxuLy8gTm9kZSBkZXRlY3Rpb24gbG9naWMgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2lsaWFrYW4vZGV0ZWN0LW5vZGUvXHJcbmZ1bmN0aW9uIGlzTm9kZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBCcm93c2VyIEVudmlyb25tZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZjtcclxufVxyXG5mdW5jdGlvbiBpc0Jyb3dzZXJFeHRlbnNpb24oKSB7XHJcbiAgICBjb25zdCBydW50aW1lID0gdHlwZW9mIGNocm9tZSA9PT0gJ29iamVjdCdcclxuICAgICAgICA/IGNocm9tZS5ydW50aW1lXHJcbiAgICAgICAgOiB0eXBlb2YgYnJvd3NlciA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyBicm93c2VyLnJ1bnRpbWVcclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gdHlwZW9mIHJ1bnRpbWUgPT09ICdvYmplY3QnICYmIHJ1bnRpbWUuaWQgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IFJlYWN0IE5hdGl2ZS5cclxuICpcclxuICogQHJldHVybiB0cnVlIGlmIFJlYWN0TmF0aXZlIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZSgpIHtcclxuICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yWydwcm9kdWN0J10gPT09ICdSZWFjdE5hdGl2ZScpO1xyXG59XHJcbi8qKiBEZXRlY3RzIEVsZWN0cm9uIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzRWxlY3Ryb24oKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdFbGVjdHJvbi8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIEludGVybmV0IEV4cGxvcmVyLiAqL1xyXG5mdW5jdGlvbiBpc0lFKCkge1xyXG4gICAgY29uc3QgdWEgPSBnZXRVQSgpO1xyXG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ01TSUUgJykgPj0gMCB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpID49IDA7XHJcbn1cclxuLyoqIERldGVjdHMgVW5pdmVyc2FsIFdpbmRvd3MgUGxhdGZvcm0gYXBwcy4gKi9cclxuZnVuY3Rpb24gaXNVV1AoKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpdCdzIHRoZSBOb2RlIFNESyBidWlsZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzTm9kZVNkaygpIHtcclxuICAgIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XHJcbn1cclxuLyoqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBTYWZhcmkuICovXHJcbmZ1bmN0aW9uIGlzU2FmYXJpKCkge1xyXG4gICAgcmV0dXJuICghaXNOb2RlKCkgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdTYWZhcmknKSAmJlxyXG4gICAgICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKSk7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0luZGV4ZWREQkF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgaW5kZXhlZERCID09PSAnb2JqZWN0JztcclxufVxyXG4vKipcclxuICogVGhpcyBtZXRob2QgdmFsaWRhdGVzIGJyb3dzZXIvc3cgY29udGV4dCBmb3IgaW5kZXhlZERCIGJ5IG9wZW5pbmcgYSBkdW1teSBpbmRleGVkREIgZGF0YWJhc2UgYW5kIHJlamVjdFxyXG4gKiBpZiBlcnJvcnMgb2NjdXIgZHVyaW5nIHRoZSBkYXRhYmFzZSBvcGVuIG9wZXJhdGlvbi5cclxuICpcclxuICogQHRocm93cyBleGNlcHRpb24gaWYgY3VycmVudCBicm93c2VyL3N3IGNvbnRleHQgY2FuJ3QgcnVuIGlkYi5vcGVuIChleDogU2FmYXJpIGlmcmFtZSwgRmlyZWZveFxyXG4gKiBwcml2YXRlIGJyb3dzaW5nKVxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHByZUV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgREJfQ0hFQ0tfTkFNRSA9ICd2YWxpZGF0ZS1icm93c2VyLWNvbnRleHQtZm9yLWluZGV4ZWRkYi1hbmFseXRpY3MtbW9kdWxlJztcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNlbGYuaW5kZXhlZERCLm9wZW4oREJfQ0hFQ0tfTkFNRSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXN1bHQuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBkYXRhYmFzZSBvbmx5IHdoZW4gaXQgZG9lc24ndCBwcmUtZXhpc3RcclxuICAgICAgICAgICAgICAgIGlmICghcHJlRXhpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShEQl9DSEVDS19OQU1FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJlRXhpc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCgoX2EgPSByZXF1ZXN0LmVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZSkgfHwgJycpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICpcclxuICogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHRydWUgaWYgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxyXG4gKi9cclxuZnVuY3Rpb24gYXJlQ29va2llc0VuYWJsZWQoKSB7XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuLyoqXHJcbiAqIFBvbHlmaWxsIGZvciBgZ2xvYmFsVGhpc2Agb2JqZWN0LlxyXG4gKiBAcmV0dXJucyB0aGUgYGdsb2JhbFRoaXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGVudmlyb25tZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdC4nKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBTdGFuZGFyZGl6ZWQgRmlyZWJhc2UgRXJyb3IuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiAgIC8vIFR5cGVzY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcclxuICogICB0eXBlIEVyciA9XHJcbiAqICAgICAndW5rbm93bicgfFxyXG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXHJcbiAqICAgICA7XHJcbiAqXHJcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcclxuICogICAvLyBhdC1lbnVtIHtzdHJpbmd9XHJcbiAqICAgdmFyIEVyciA9IHtcclxuICogICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICogICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICogICB9XHJcbiAqXHJcbiAqICAgbGV0IGVycm9yczogTWFwPEVyciwgc3RyaW5nPiA9IHtcclxuICogICAgICdnZW5lcmljLWVycm9yJzogXCJVbmtub3duIGVycm9yXCIsXHJcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcclxuICogICB9O1xyXG4gKlxyXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXHJcbiAqICAgbGV0IGVycm9yID0gbmV3IEVycm9yRmFjdG9yeTxFcnI+KCdzZXJ2aWNlJywgJ1NlcnZpY2UnLCBlcnJvcnMpO1xyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuR0VORVJJQyk7XHJcbiAqICAgLi4uXHJcbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcclxuICogICAuLi5cclxuICogICAvLyBTZXJ2aWNlOiBDb3VsZCBub3QgZmlsZSBmaWxlOiBmb28udHh0IChzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kKS5cclxuICpcclxuICogICBjYXRjaCAoZSkge1xyXG4gKiAgICAgYXNzZXJ0KGUubWVzc2FnZSA9PT0gXCJDb3VsZCBub3QgZmluZCBmaWxlOiBmb28udHh0LlwiKTtcclxuICogICAgIGlmIChlLmNvZGUgPT09ICdzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kJykge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCByZWFkIGZpbGU6IFwiICsgZVsnZmlsZSddKTtcclxuICogICAgIH1cclxuICogICB9XHJcbiAqL1xyXG5jb25zdCBFUlJPUl9OQU1FID0gJ0ZpcmViYXNlRXJyb3InO1xyXG4vLyBCYXNlZCBvbiBjb2RlIGZyb206XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0N1c3RvbV9FcnJvcl9UeXBlc1xyXG5jbGFzcyBGaXJlYmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogVGhlIGVycm9yIGNvZGUgZm9yIHRoaXMgZXJyb3IuICovXHJcbiAgICBjb2RlLCBtZXNzYWdlLCBcclxuICAgIC8qKiBDdXN0b20gZGF0YSBmb3IgdGhpcyBlcnJvci4gKi9cclxuICAgIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRGF0YSA9IGN1c3RvbURhdGE7XHJcbiAgICAgICAgLyoqIFRoZSBjdXN0b20gbmFtZSBmb3IgYWxsIEZpcmViYXNlRXJyb3JzLiAqL1xyXG4gICAgICAgIHRoaXMubmFtZSA9IEVSUk9SX05BTUU7XHJcbiAgICAgICAgLy8gRml4IEZvciBFUzVcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBGaXJlYmFzZUVycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSBmb3Igd2hlcmUgb3VyIGVycm9yIHdhcyB0aHJvd24uXHJcbiAgICAgICAgLy8gT25seSBhdmFpbGFibGUgb24gVjguXHJcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XHJcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRXJyb3JGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsIHNlcnZpY2VOYW1lLCBlcnJvcnMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBzZXJ2aWNlTmFtZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcclxuICAgIH1cclxuICAgIGNyZWF0ZShjb2RlLCAuLi5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tRGF0YSA9IGRhdGFbMF0gfHwge307XHJcbiAgICAgICAgY29uc3QgZnVsbENvZGUgPSBgJHt0aGlzLnNlcnZpY2V9LyR7Y29kZX1gO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lcnJvcnNbY29kZV07XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRlbXBsYXRlID8gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBjdXN0b21EYXRhKSA6ICdFcnJvcic7XHJcbiAgICAgICAgLy8gU2VydmljZSBOYW1lOiBFcnJvciBtZXNzYWdlIChzZXJ2aWNlL2NvZGUpLlxyXG4gICAgICAgIGNvbnN0IGZ1bGxNZXNzYWdlID0gYCR7dGhpcy5zZXJ2aWNlTmFtZX06ICR7bWVzc2FnZX0gKCR7ZnVsbENvZGV9KS5gO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEZpcmViYXNlRXJyb3IoZnVsbENvZGUsIGZ1bGxNZXNzYWdlLCBjdXN0b21EYXRhKTtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShQQVRURVJOLCAoXywga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBTdHJpbmcodmFsdWUpIDogYDwke2tleX0/PmA7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBQQVRURVJOID0gL1xce1xcJChbXn1dKyl9L2c7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBFdmFsdWF0ZXMgYSBKU09OIHN0cmluZyBpbnRvIGEgamF2YXNjcmlwdCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgY29udGFpbmluZyBKU09OLlxyXG4gKiBAcmV0dXJuIHsqfSBUaGUgamF2YXNjcmlwdCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgSlNPTi5cclxuICovXHJcbmZ1bmN0aW9uIGpzb25FdmFsKHN0cikge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBKU09OIHJlcHJlc2VudGluZyBhIGphdmFzY3JpcHQgb2JqZWN0LlxyXG4gKiBAcGFyYW0geyp9IGRhdGEgSmF2YXNjcmlwdCBvYmplY3QgdG8gYmUgc3RyaW5naWZpZWQuXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEpTT04gY29udGVudHMgb2YgdGhlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeShkYXRhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBpbnRvIGNvbnN0aXR1ZW50IHBhcnRzLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIHdpdGggaW52YWxpZCAvIGluY29tcGxldGUgY2xhaW1zIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBsZXQgaGVhZGVyID0ge30sIGNsYWltcyA9IHt9LCBkYXRhID0ge30sIHNpZ25hdHVyZSA9ICcnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgaGVhZGVyID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzBdKSB8fCAnJyk7XHJcbiAgICAgICAgY2xhaW1zID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzFdKSB8fCAnJyk7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gcGFydHNbMl07XHJcbiAgICAgICAgZGF0YSA9IGNsYWltc1snZCddIHx8IHt9O1xyXG4gICAgICAgIGRlbGV0ZSBjbGFpbXNbJ2QnXTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7IH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIGNsYWltcyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHNpZ25hdHVyZVxyXG4gICAgfTtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgdGltZS1iYXNlZCBjbGFpbXMuIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlXHJcbiAqIHRva2VuIGlzIHdpdGhpbiB0aGUgdGltZSB3aW5kb3cgYXV0aG9yaXplZCBieSB0aGUgJ25iZicgKG5vdC1iZWZvcmUpIGFuZCAnaWF0JyAoaXNzdWVkLWF0KSBjbGFpbXMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzVmFsaWRUaW1lc3RhbXAgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgY29uc3Qgbm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgbGV0IHZhbGlkU2luY2UgPSAwLCB2YWxpZFVudGlsID0gMDtcclxuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ25iZicpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ25iZiddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ2lhdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdleHAnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFVudGlsID0gY2xhaW1zWydleHAnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRva2VuIHdpbGwgZXhwaXJlIGFmdGVyIDI0aCBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgIHZhbGlkVW50aWwgPSB2YWxpZFNpbmNlICsgODY0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICghIW5vdyAmJlxyXG4gICAgICAgICEhdmFsaWRTaW5jZSAmJlxyXG4gICAgICAgICEhdmFsaWRVbnRpbCAmJlxyXG4gICAgICAgIG5vdyA+PSB2YWxpZFNpbmNlICYmXHJcbiAgICAgICAgbm93IDw9IHZhbGlkVW50aWwpO1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCByZXR1cm5zIGl0cyBpc3N1ZWQgYXQgdGltZSBpZiB2YWxpZCwgbnVsbCBvdGhlcndpc2UuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gbnVsbCBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzc3VlZEF0VGltZSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgY29uc3QgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgIHJldHVybiBjbGFpbXNbJ2lhdCddO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGZvcm1hdC4gRXhwZWN0cyBhIHZhbGlkIGlzc3VlZC1hdCB0aW1lLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBpc1ZhbGlkRm9ybWF0ID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlKHRva2VuKSwgY2xhaW1zID0gZGVjb2RlZC5jbGFpbXM7XHJcbiAgICByZXR1cm4gISFjbGFpbXMgJiYgdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKTtcclxufTtcclxuLyoqXHJcbiAqIEF0dGVtcHRzIHRvIHBlZXIgaW50byBhbiBhdXRoIHRva2VuIGFuZCBkZXRlcm1pbmUgaWYgaXQncyBhbiBhZG1pbiBhdXRoIHRva2VuIGJ5IGxvb2tpbmcgYXQgdGhlIGNsYWltcyBwb3J0aW9uLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBpc0FkbWluID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIHJldHVybiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXNbJ2FkbWluJ10gPT09IHRydWU7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcclxufVxyXG5mdW5jdGlvbiBzYWZlR2V0KG9iaiwga2V5KSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBtYXAob2JqLCBmbiwgY29udGV4dE9iaikge1xyXG4gICAgY29uc3QgcmVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICByZXNba2V5XSA9IGZuLmNhbGwoY29udGV4dE9iaiwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbi8qKlxyXG4gKiBEZWVwIGVxdWFsIHR3byBvYmplY3RzLiBTdXBwb3J0IEFycmF5cyBhbmQgT2JqZWN0cy5cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcclxuICAgICAgICBpZiAoIWJLZXlzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYVByb3AgPSBhW2tdO1xyXG4gICAgICAgIGNvbnN0IGJQcm9wID0gYltrXTtcclxuICAgICAgICBpZiAoaXNPYmplY3QoYVByb3ApICYmIGlzT2JqZWN0KGJQcm9wKSkge1xyXG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChhUHJvcCwgYlByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYVByb3AgIT09IGJQcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgYktleXMpIHtcclxuICAgICAgICBpZiAoIWFLZXlzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xyXG4gICAgcmV0dXJuIHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWVyeXN0cmluZy1mb3JtYXR0ZWQgc3RyaW5nIChlLmcuICZhcmc9dmFsJmFyZzI9dmFsMikgZnJvbSBhXHJcbiAqIHBhcmFtcyBvYmplY3QgKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqIE5vdGU6IFlvdSBtdXN0IHByZXBlbmQgaXQgd2l0aCA/IHdoZW4gYWRkaW5nIGl0IHRvIGEgVVJMLlxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnlzdHJpbmdQYXJhbXMpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnlzdHJpbmdQYXJhbXMpKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goYXJyYXlWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyYXlWYWwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxyXG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nKSB7XHJcbiAgICBjb25zdCBvYmogPSB7fTtcclxuICAgIGNvbnN0IHRva2VucyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcclxuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gdG9rZW4uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxyXG4gKi9cclxuZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5c3RyaW5nKHVybCkge1xyXG4gICAgY29uc3QgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XHJcbiAgICBpZiAoIXF1ZXJ5U3RhcnQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmcmFnbWVudFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnLCBxdWVyeVN0YXJ0KTtcclxuICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQsIGZyYWdtZW50U3RhcnQgPiAwID8gZnJhZ21lbnRTdGFydCA6IHVuZGVmaW5lZCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxyXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxyXG4gKiBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTgwLTMvZmlwczE4MC0zX2ZpbmFsLnBkZi5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqICAgdmFyIHNoYTEgPSBuZXcgc2hhMSgpO1xyXG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcclxuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XHJcbiAqXHJcbiAqIFBlcmZvcm1hbmNlOlxyXG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xyXG4gKiAgIEZpcmVmb3ggMTY6ICB+MjUwIE1iaXQvc1xyXG4gKlxyXG4gKi9cclxuLyoqXHJcbiAqIFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaCBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogVGhlIHByb3BlcnRpZXMgZGVjbGFyZWQgaGVyZSBhcmUgZGlzY3Vzc2VkIGluIHRoZSBhYm92ZSBhbGdvcml0aG0gZG9jdW1lbnQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZmluYWxcclxuICogQHN0cnVjdFxyXG4gKi9cclxuY2xhc3MgU2hhMSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIb2xkcyB0aGUgcHJldmlvdXMgdmFsdWVzIG9mIGFjY3VtdWxhdGVkIHZhcmlhYmxlcyBhLWUgaW4gdGhlIGNvbXByZXNzX1xyXG4gICAgICAgICAqIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFpbl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGJ1ZmZlciBob2xkaW5nIHRoZSBwYXJ0aWFsbHkgY29tcHV0ZWQgaGFzaCByZXN1bHQuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJ1Zl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBvZiA4MCBieXRlcywgZWFjaCBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgaGFzaGVkLiAgUmVmZXJyZWQgdG9cclxuICAgICAgICAgKiBhcyB0aGUgbWVzc2FnZSBzY2hlZHVsZSBpbiB0aGUgZG9jcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuV18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBkYXRhIG5lZWRlZCB0byBwYWQgbWVzc2FnZXMgbGVzcyB0aGFuIDY0IGJ5dGVzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wYWRfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnRvdGFsXyA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSA1MTIgLyA4O1xyXG4gICAgICAgIHRoaXMucGFkX1swXSA9IDEyODtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmxvY2tTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWRfW2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAweDY3NDUyMzAxO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzFdID0gMHhlZmNkYWI4OTtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9IDB4OThiYWRjZmU7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAweDEwMzI1NDc2O1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzRdID0gMHhjM2QyZTFmMDtcclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjb21wcmVzcyBoZWxwZXIgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnVmIEJsb2NrIHRvIGNvbXByZXNzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjb21wcmVzc18oYnVmLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9mZnNldCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBXID0gdGhpcy5XXztcclxuICAgICAgICAvLyBnZXQgMTYgYmlnIGVuZGlhbiB3b3Jkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8odXNlcik6IFtidWcgODE0MDEyMl0gUmVjZW50IHZlcnNpb25zIG9mIFNhZmFyaSBmb3IgTWFjIE9TIGFuZCBpT1NcclxuICAgICAgICAgICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBkdXJpbmcgSklUIGNvbXBpbGF0aW9uLiAgV2UgaGF2ZSBjb2RlIHRoYXQgZGVwZW5kcyBoZWF2aWx5IG9uIFNIQS0xIGZvclxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdG5lc3MgYW5kIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgYnVnLCBzbyBJJ3ZlIHJlbW92ZWQgYWxsIHVzZXNcclxuICAgICAgICAgICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY2hhbmdlIG9uY2UgdGhlIFNhZmFyaSBidWdcclxuICAgICAgICAgICAgICAgIC8vIChodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA5MDM2KSBoYXMgYmVlbiBmaXhlZCBhbmRcclxuICAgICAgICAgICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQpIDw8IDI0KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAxKSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMikgPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWYuY2hhckNvZGVBdChvZmZzZXQgKyAzKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDFdIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0ICsgMl0gPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleHBhbmQgdG8gODAgd29yZHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMTY7IGkgPCA4MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xyXG4gICAgICAgICAgICBXW2ldID0gKCh0IDw8IDEpIHwgKHQgPj4+IDMxKSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYSA9IHRoaXMuY2hhaW5fWzBdO1xyXG4gICAgICAgIGxldCBiID0gdGhpcy5jaGFpbl9bMV07XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNoYWluX1syXTtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuY2hhaW5fWzNdO1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5jaGFpbl9bNF07XHJcbiAgICAgICAgbGV0IGYsIGs7XHJcbiAgICAgICAgLy8gVE9ETyh1c2VyKTogVHJ5IHRvIHVucm9sbCB0aGlzIGxvb3AgdG8gc3BlZWQgdXAgdGhlIGNvbXB1dGF0aW9uLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA8IDQwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGQgXiAoYiAmIChjIF4gZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDVhODI3OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gKGIgJiBjKSB8IChkICYgKGIgfCBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4OGYxYmJjZGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweGNhNjJjMWQ2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGUgPSBkO1xyXG4gICAgICAgICAgICBkID0gYztcclxuICAgICAgICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgYiA9IGE7XHJcbiAgICAgICAgICAgIGEgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9ICh0aGlzLmNoYWluX1swXSArIGEpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9ICh0aGlzLmNoYWluX1syXSArIGMpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9ICh0aGlzLmNoYWluX1szXSArIGQpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcclxuICAgIH1cclxuICAgIHVwZGF0ZShieXRlcywgbGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gVE9ETyhqb2hubGVueik6IHRpZ2h0ZW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBhbmQgcmVtb3ZlIHRoaXMgY2hlY2tcclxuICAgICAgICBpZiAoYnl0ZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZW5ndGggPSBieXRlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aE1pbnVzQmxvY2sgPSBsZW5ndGggLSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgLy8gVXNpbmcgbG9jYWwgaW5zdGVhZCBvZiBtZW1iZXIgdmFyaWFibGVzIGdpdmVzIH41JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYuXHJcbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy5idWZfO1xyXG4gICAgICAgIGxldCBpbmJ1ZiA9IHRoaXMuaW5idWZfO1xyXG4gICAgICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXHJcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIG5vIGRhdGEgaW4gdGhlIGJsb2NrIHRvIHRvcCB1cCwgd2UgY2FuIGRpcmVjdGx5IHByb2Nlc3MgdGhlXHJcbiAgICAgICAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXHJcbiAgICAgICAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIGRhdGEgaXMgcHJvdmlkZWQgaW4gbGFyZ2UgY2h1bmtzIChvciBpbiBtdWx0aXBsZXMgb2YgNjQgYnl0ZXMpLlxyXG4gICAgICAgICAgICBpZiAoaW5idWYgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGxlbmd0aE1pbnVzQmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhieXRlcywgbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcclxuICAgICAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKiogQG92ZXJyaWRlICovXHJcbiAgICBkaWdlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZGlnZXN0ID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsQml0cyA9IHRoaXMudG90YWxfICogODtcclxuICAgICAgICAvLyBBZGQgcGFkIDB4ODAgMHgwMCouXHJcbiAgICAgICAgaWYgKHRoaXMuaW5idWZfIDwgNTYpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCA1NiAtIHRoaXMuaW5idWZfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgIyBiaXRzLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJsb2NrU2l6ZSAtIDE7IGkgPj0gNTY7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1Zl9baV0gPSB0b3RhbEJpdHMgJiAyNTU7XHJcbiAgICAgICAgICAgIHRvdGFsQml0cyAvPSAyNTY7IC8vIERvbid0IHVzZSBiaXQtc2hpZnRpbmcgaGVyZSFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wcmVzc18odGhpcy5idWZfKTtcclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDI0OyBqID49IDA7IGogLT0gOCkge1xyXG4gICAgICAgICAgICAgICAgZGlnZXN0W25dID0gKHRoaXMuY2hhaW5fW2ldID4+IGopICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgKytuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWdlc3Q7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcclxuICogVGhlbmFibGUpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICogICAgIGFzIGEgcHJveHkuXHJcbiAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZShleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgY29uc3QgcHJveHkgPSBuZXcgT2JzZXJ2ZXJQcm94eShleGVjdXRvciwgb25Ob09ic2VydmVycyk7XHJcbiAgICByZXR1cm4gcHJveHkuc3Vic2NyaWJlLmJpbmQocHJveHkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnQgZmFuLW91dCBmb3IgYW55IG51bWJlciBvZiBPYnNlcnZlcnMgYXR0YWNoZWQgdmlhIGEgc3Vic2NyaWJlXHJcbiAqIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgT2JzZXJ2ZXJQcm94eSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxyXG4gICAgICogICAgIGFzIGEgcHJveHkuXHJcbiAgICAgKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gTWljcm8tdGFzayBzY2hlZHVsaW5nIGJ5IGNhbGxpbmcgdGFzay50aGVuKCkuXHJcbiAgICAgICAgdGhpcy50YXNrID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSBvbk5vT2JzZXJ2ZXJzO1xyXG4gICAgICAgIC8vIENhbGwgdGhlIGV4ZWN1dG9yIGFzeW5jaHJvbm91c2x5IHNvIHN1YnNjcmliZXJzIHRoYXQgYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJzY3JpYmUgZnVuY3Rpb25cclxuICAgICAgICAvLyBjYW4gc3RpbGwgcmVjZWl2ZSB0aGUgdmVyeSBmaXJzdCB2YWx1ZSBnZW5lcmF0ZWQgaW4gdGhlIGV4ZWN1dG9yLlxyXG4gICAgICAgIHRoaXMudGFza1xyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4ZWN1dG9yKHRoaXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihlcnJvcikge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZShlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBhbiBPYnNlcnZlciB0byB0aGUgZmFuLW91dCBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5Y2hyb25vdXNseSB0byB0aGVpclxyXG4gICAgICogICBjYWxsIHRvIHN1YnNjcmliZSgpLlxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xyXG4gICAgICAgIGxldCBvYnNlcnZlcjtcclxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBlcnJvciA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9ic2VydmVyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBc3NlbWJsZSBhbiBPYnNlcnZlciBvYmplY3Qgd2hlbiBwYXNzZWQgYXMgY2FsbGJhY2sgZnVuY3Rpb25zLlxyXG4gICAgICAgIGlmIChpbXBsZW1lbnRzQW55TWV0aG9kcyhuZXh0T3JPYnNlcnZlciwgW1xyXG4gICAgICAgICAgICAnbmV4dCcsXHJcbiAgICAgICAgICAgICdlcnJvcicsXHJcbiAgICAgICAgICAgICdjb21wbGV0ZSdcclxuICAgICAgICBdKSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBuZXh0T3JPYnNlcnZlcixcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLm5leHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0ID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVuc3ViID0gdGhpcy51bnN1YnNjcmliZU9uZS5iaW5kKHRoaXMsIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBzdWJzY3JpYmUgdG8gYSB0ZXJtaW5hdGVkIE9ic2VydmFibGUgLSB3ZVxyXG4gICAgICAgIC8vIGp1c3QgcmVzcG9uZCB0byB0aGUgT2JzZXJ2ZXIgd2l0aCB0aGUgZmluYWwgZXJyb3Igb3IgY29tcGxldGVcclxuICAgICAgICAvLyBldmVudC5cclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbmFsRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IodGhpcy5maW5hbEVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICByZXR1cm4gdW5zdWI7XHJcbiAgICB9XHJcbiAgICAvLyBVbnN1YnNjcmliZSBpcyBzeW5jaHJvbm91cyAtIHdlIGd1YXJhbnRlZSB0aGF0IG5vIGV2ZW50cyBhcmUgc2VudCB0b1xyXG4gICAgLy8gYW55IHVuc3Vic2NyaWJlZCBPYnNlcnZlci5cclxuICAgIHVuc3Vic2NyaWJlT25lKGkpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9ic2VydmVyc1tpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2ldO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyQ291bnQgPT09IDAgJiYgdGhpcy5vbk5vT2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvckVhY2hPYnNlcnZlcihmbikge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyBBbHJlYWR5IGNsb3NlZCBieSBwcmV2aW91cyBldmVudC4uLi5qdXN0IGVhdCB0aGUgYWRkaXRpb25hbCB2YWx1ZXMuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2luY2Ugc2VuZE9uZSBjYWxscyBhc3luY2hyb25vdXNseSAtIHRoZXJlIGlzIG5vIGNoYW5jZSB0aGF0XHJcbiAgICAgICAgLy8gdGhpcy5vYnNlcnZlcnMgd2lsbCBiZWNvbWUgdW5kZWZpbmVkLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kT25lKGksIGZuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDYWxsIHRoZSBPYnNlcnZlciB2aWEgb25lIG9mIGl0J3MgY2FsbGJhY2sgZnVuY3Rpb24uIFdlIGFyZSBjYXJlZnVsIHRvXHJcbiAgICAvLyBjb25maXJtIHRoYXQgdGhlIG9ic2VydmUgaGFzIG5vdCBiZWVuIHVuc3Vic2NyaWJlZCBzaW5jZSB0aGlzIGFzeW5jaHJvbm91c1xyXG4gICAgLy8gZnVuY3Rpb24gaGFkIGJlZW4gcXVldWVkLlxyXG4gICAgc2VuZE9uZShpLCBmbikge1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGNhbGxiYWNrIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vYnNlcnZlcnNbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBmbih0aGlzLm9ic2VydmVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBleGNlcHRpb25zIHJhaXNlZCBpbiBPYnNlcnZlcnMgb3IgbWlzc2luZyBtZXRob2RzIG9mIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsb3NlKGVycikge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZXJyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbEVycm9yID0gZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcm94eSBpcyBubyBsb25nZXIgbmVlZGVkIC0gZ2FyYmFnZSBjb2xsZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcclxuZnVuY3Rpb24gYXN5bmMoZm4sIG9uRXJyb3IpIHtcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgb2JqZWN0IHBhc3NlZCBpbiBpbXBsZW1lbnRzIGFueSBvZiB0aGUgbmFtZWQgbWV0aG9kcy5cclxuICovXHJcbmZ1bmN0aW9uIGltcGxlbWVudHNBbnlNZXRob2RzKG9iaiwgbWV0aG9kcykge1xyXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcclxuICAgICAgICBpZiAobWV0aG9kIGluIG9iaiAmJiB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIG5vb3AoKSB7XHJcbiAgICAvLyBkbyBub3RoaW5nXHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQgZm9yIGEgcHVibGljIGZ1bmN0aW9uLlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgaXQgZmFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIG1pbkNvdW50IFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXHJcbiAqIEBwYXJhbSBtYXhDb3VudCBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnQgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXHJcbiAqIEBwYXJhbSBhcmdDb3VudCBUaGUgYWN0dWFsIG51bWJlciBvZiBhcmd1bWVudHMgcHJvdmlkZWQuXHJcbiAqL1xyXG5jb25zdCB2YWxpZGF0ZUFyZ0NvdW50ID0gZnVuY3Rpb24gKGZuTmFtZSwgbWluQ291bnQsIG1heENvdW50LCBhcmdDb3VudCkge1xyXG4gICAgbGV0IGFyZ0Vycm9yO1xyXG4gICAgaWYgKGFyZ0NvdW50IDwgbWluQ291bnQpIHtcclxuICAgICAgICBhcmdFcnJvciA9ICdhdCBsZWFzdCAnICsgbWluQ291bnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhcmdDb3VudCA+IG1heENvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSBtYXhDb3VudCA9PT0gMCA/ICdub25lJyA6ICdubyBtb3JlIHRoYW4gJyArIG1heENvdW50O1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBmbk5hbWUgK1xyXG4gICAgICAgICAgICAnIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoICcgK1xyXG4gICAgICAgICAgICBhcmdDb3VudCArXHJcbiAgICAgICAgICAgIChhcmdDb3VudCA9PT0gMSA/ICcgYXJndW1lbnQuJyA6ICcgYXJndW1lbnRzLicpICtcclxuICAgICAgICAgICAgJyBFeHBlY3RzICcgK1xyXG4gICAgICAgICAgICBhcmdFcnJvciArXHJcbiAgICAgICAgICAgICcuJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHRvIHByZWZpeCBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGZhaWxlZCBhcmd1bWVudCB2YWxpZGF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIGFyZ05hbWUgVGhlIG5hbWUgb2YgdGhlIGFyZ3VtZW50XHJcbiAqIEByZXR1cm4gVGhlIHByZWZpeCB0byBhZGQgdG8gdGhlIGVycm9yIHRocm93biBmb3IgdmFsaWRhdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGVycm9yUHJlZml4KGZuTmFtZSwgYXJnTmFtZSkge1xyXG4gICAgcmV0dXJuIGAke2ZuTmFtZX0gZmFpbGVkOiAke2FyZ05hbWV9IGFyZ3VtZW50IGA7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBmbk5hbWVcclxuICogQHBhcmFtIGFyZ3VtZW50TnVtYmVyXHJcbiAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICogQHBhcmFtIG9wdGlvbmFsXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWVzcGFjZShmbk5hbWUsIG5hbWVzcGFjZSwgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy9UT0RPOiBJIHNob3VsZCBkbyBtb3JlIHZhbGlkYXRpb24gaGVyZS4gV2Ugb25seSBhbGxvdyBjZXJ0YWluIGNoYXJzIGluIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgJ25hbWVzcGFjZScpICsgJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBuYW1lc3BhY2UuJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDYWxsYmFjayhmbk5hbWUsIGFyZ3VtZW50TmFtZSwgXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmNhbGxiYWNrLCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi4nKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRPYmplY3QoZm5OYW1lLCBhcmd1bWVudE5hbWUsIGNvbnRleHQsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBjb250ZXh0IG9iamVjdC4nKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBDb2RlIG9yaWdpbmFsbHkgY2FtZSBmcm9tIGdvb2cuY3J5cHQuc3RyaW5nVG9VdGY4Qnl0ZUFycmF5LCBidXQgZm9yIHNvbWUgcmVhc29uIHRoZXlcclxuLy8gYXV0b21hdGljYWxseSByZXBsYWNlZCAnXFxyXFxuJyB3aXRoICdcXG4nLCBhbmQgdGhleSBkaWRuJ3QgaGFuZGxlIHN1cnJvZ2F0ZSBwYWlycyxcclxuLy8gc28gaXQncyBiZWVuIG1vZGlmaWVkLlxyXG4vLyBOb3RlIHRoYXQgbm90IGFsbCBVbmljb2RlIGNoYXJhY3RlcnMgYXBwZWFyIGFzIHNpbmdsZSBjaGFyYWN0ZXJzIGluIEphdmFTY3JpcHQgc3RyaW5ncy5cclxuLy8gZnJvbUNoYXJDb2RlIHJldHVybnMgdGhlIFVURi0xNiBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciAtIHNvIHNvbWUgVW5pY29kZSBjaGFyYWN0ZXJzXHJcbi8vIHVzZSAyIGNoYXJhY3RlcnMgaW4gSmF2YXNjcmlwdC4gIEFsbCA0LWJ5dGUgVVRGLTggY2hhcmFjdGVycyBiZWdpbiB3aXRoIGEgZmlyc3RcclxuLy8gY2hhcmFjdGVyIGluIHRoZSByYW5nZSAweEQ4MDAgLSAweERCRkYgKHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzby1jYWxsZWQgc3Vycm9nYXRlXHJcbi8vIHBhaXIpLlxyXG4vLyBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjEuM1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICovXHJcbmNvbnN0IHN0cmluZ1RvQnl0ZUFycmF5ID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgY29uc3Qgb3V0ID0gW107XHJcbiAgICBsZXQgcCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgLy8gSXMgdGhpcyB0aGUgbGVhZCBzdXJyb2dhdGUgaW4gYSBzdXJyb2dhdGUgcGFpcj9cclxuICAgICAgICBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgY29uc3QgaGlnaCA9IGMgLSAweGQ4MDA7IC8vIHRoZSBoaWdoIDEwIGJpdHMuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgYXNzZXJ0KGkgPCBzdHIubGVuZ3RoLCAnU3Vycm9nYXRlIHBhaXIgbWlzc2luZyB0cmFpbCBzdXJyb2dhdGUuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IHN0ci5jaGFyQ29kZUF0KGkpIC0gMHhkYzAwOyAvLyB0aGUgbG93IDEwIGJpdHMuXHJcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKGhpZ2ggPDwgMTApICsgbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCA2NTUzNikge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogQ2FsY3VsYXRlIGxlbmd0aCB3aXRob3V0IGFjdHVhbGx5IGNvbnZlcnRpbmc7IHVzZWZ1bCBmb3IgZG9pbmcgY2hlYXBlciB2YWxpZGF0aW9uLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbmNvbnN0IHN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGxldCBwID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIHArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgcCArPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xyXG4gICAgICAgICAgICAvLyBMZWFkIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyLiAgVGhlIHBhaXIgdG9nZXRoZXIgd2lsbCB0YWtlIDQgYnl0ZXMgdG8gcmVwcmVzZW50LlxyXG4gICAgICAgICAgICBwICs9IDQ7XHJcbiAgICAgICAgICAgIGkrKzsgLy8gc2tpcCB0cmFpbCBzdXJyb2dhdGUuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHA7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBleHBvbmVudGlhbGx5IGluY3JlYXNlLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMgPSAxMDAwO1xyXG4vKipcclxuICogVGhlIGZhY3RvciB0byBiYWNrb2ZmIGJ5LlxyXG4gKiBTaG91bGQgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SID0gMjtcclxuLyoqXHJcbiAqIFRoZSBtYXhpbXVtIG1pbGxpc2Vjb25kcyB0byBpbmNyZWFzZSB0by5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxuY29uc3QgTUFYX1ZBTFVFX01JTExJUyA9IDQgKiA2MCAqIDYwICogMTAwMDsgLy8gRm91ciBob3VycywgbGlrZSBpT1MgYW5kIEFuZHJvaWQuXHJcbi8qKlxyXG4gKiBUaGUgcGVyY2VudGFnZSBvZiBiYWNrb2ZmIHRpbWUgdG8gcmFuZG9taXplIGJ5LlxyXG4gKiBTZWVcclxuICogaHR0cDovL2dvL3NhZmUtY2xpZW50LWJlaGF2aW9yI3N0ZXAtMS1kZXRlcm1pbmUtdGhlLWFwcHJvcHJpYXRlLXJldHJ5LWludGVydmFsLXRvLWhhbmRsZS1zcGlrZS10cmFmZmljXHJcbiAqIGZvciBjb250ZXh0LlxyXG4gKlxyXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXHJcbiAqL1xyXG5jb25zdCBSQU5ET01fRkFDVE9SID0gMC41O1xyXG4vKipcclxuICogQmFzZWQgb24gdGhlIGJhY2tvZmYgbWV0aG9kIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWxpYnJhcnkvYmxvYi9tYXN0ZXIvY2xvc3VyZS9nb29nL21hdGgvZXhwb25lbnRpYWxiYWNrb2ZmLmpzLlxyXG4gKiBFeHRyYWN0ZWQgaGVyZSBzbyB3ZSBkb24ndCBuZWVkIHRvIHBhc3MgbWV0YWRhdGEgYW5kIGEgc3RhdGVmdWwgRXhwb25lbnRpYWxCYWNrb2ZmIG9iamVjdCBhcm91bmQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzKGJhY2tvZmZDb3VudCwgaW50ZXJ2YWxNaWxsaXMgPSBERUZBVUxUX0lOVEVSVkFMX01JTExJUywgYmFja29mZkZhY3RvciA9IERFRkFVTFRfQkFDS09GRl9GQUNUT1IpIHtcclxuICAgIC8vIENhbGN1bGF0ZXMgYW4gZXhwb25lbnRpYWxseSBpbmNyZWFzaW5nIHZhbHVlLlxyXG4gICAgLy8gRGV2aWF0aW9uOiBjYWxjdWxhdGVzIHZhbHVlIGZyb20gY291bnQgYW5kIGEgY29uc3RhbnQgaW50ZXJ2YWwsIHNvIHdlIG9ubHkgbmVlZCB0byBzYXZlIHZhbHVlXHJcbiAgICAvLyBhbmQgY291bnQgdG8gcmVzdG9yZSBzdGF0ZS5cclxuICAgIGNvbnN0IGN1cnJCYXNlVmFsdWUgPSBpbnRlcnZhbE1pbGxpcyAqIE1hdGgucG93KGJhY2tvZmZGYWN0b3IsIGJhY2tvZmZDb3VudCk7XHJcbiAgICAvLyBBIHJhbmRvbSBcImZ1enpcIiB0byBhdm9pZCB3YXZlcyBvZiByZXRyaWVzLlxyXG4gICAgLy8gRGV2aWF0aW9uOiByYW5kb21GYWN0b3IgaXMgcmVxdWlyZWQuXHJcbiAgICBjb25zdCByYW5kb21XYWl0ID0gTWF0aC5yb3VuZChcclxuICAgIC8vIEEgZnJhY3Rpb24gb2YgdGhlIGJhY2tvZmYgdmFsdWUgdG8gYWRkL3N1YnRyYWN0LlxyXG4gICAgLy8gRGV2aWF0aW9uOiBjaGFuZ2VzIG11bHRpcGxpY2F0aW9uIG9yZGVyIHRvIGltcHJvdmUgcmVhZGFiaWxpdHkuXHJcbiAgICBSQU5ET01fRkFDVE9SICpcclxuICAgICAgICBjdXJyQmFzZVZhbHVlICpcclxuICAgICAgICAvLyBBIHJhbmRvbSBmbG9hdCAocm91bmRlZCB0byBpbnQgYnkgTWF0aC5yb3VuZCBhYm92ZSkgaW4gdGhlIHJhbmdlIFstMSwgMV0uIERldGVybWluZXNcclxuICAgICAgICAvLyBpZiB3ZSBhZGQgb3Igc3VidHJhY3QuXHJcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICpcclxuICAgICAgICAyKTtcclxuICAgIC8vIExpbWl0cyBiYWNrb2ZmIHRvIG1heCB0byBhdm9pZCBlZmZlY3RpdmVseSBwZXJtYW5lbnQgYmFja29mZi5cclxuICAgIHJldHVybiBNYXRoLm1pbihNQVhfVkFMVUVfTUlMTElTLCBjdXJyQmFzZVZhbHVlICsgcmFuZG9tV2FpdCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGUgRW5nbGlzaCBvcmRpbmFsIGxldHRlcnMgYWZ0ZXIgYSBudW1iZXJcclxuICovXHJcbmZ1bmN0aW9uIG9yZGluYWwoaSkge1xyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaSkpIHtcclxuICAgICAgICByZXR1cm4gYCR7aX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGkgKyBpbmRpY2F0b3IoaSk7XHJcbn1cclxuZnVuY3Rpb24gaW5kaWNhdG9yKGkpIHtcclxuICAgIGkgPSBNYXRoLmFicyhpKTtcclxuICAgIGNvbnN0IGNlbnQgPSBpICUgMTAwO1xyXG4gICAgaWYgKGNlbnQgPj0gMTAgJiYgY2VudCA8PSAyMCkge1xyXG4gICAgICAgIHJldHVybiAndGgnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVjID0gaSAlIDEwO1xyXG4gICAgaWYgKGRlYyA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiAnc3QnO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlYyA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAnbmQnO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlYyA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiAncmQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICd0aCc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TW9kdWxhckluc3RhbmNlKHNlcnZpY2UpIHtcclxuICAgIGlmIChzZXJ2aWNlICYmIHNlcnZpY2UuX2RlbGVnYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UuX2RlbGVnYXRlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgQ09OU1RBTlRTLCBEZWZlcnJlZCwgRXJyb3JGYWN0b3J5LCBGaXJlYmFzZUVycm9yLCBNQVhfVkFMVUVfTUlMTElTLCBSQU5ET01fRkFDVE9SLCBTaGExLCBhcmVDb29raWVzRW5hYmxlZCwgYXNzZXJ0LCBhc3NlcnRpb25FcnJvciwgYXN5bmMsIGJhc2U2NCwgYmFzZTY0RGVjb2RlLCBiYXNlNjRFbmNvZGUsIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nLCBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzLCBjb250YWlucywgY3JlYXRlTW9ja1VzZXJUb2tlbiwgY3JlYXRlU3Vic2NyaWJlLCBkZWNvZGUsIGRlZXBDb3B5LCBkZWVwRXF1YWwsIGRlZXBFeHRlbmQsIGVycm9yUHJlZml4LCBleHRyYWN0UXVlcnlzdHJpbmcsIGdldEdsb2JhbCwgZ2V0TW9kdWxhckluc3RhbmNlLCBnZXRVQSwgaXNBZG1pbiwgaXNCcm93c2VyLCBpc0Jyb3dzZXJFeHRlbnNpb24sIGlzRWxlY3Ryb24sIGlzRW1wdHksIGlzSUUsIGlzSW5kZXhlZERCQXZhaWxhYmxlLCBpc01vYmlsZUNvcmRvdmEsIGlzTm9kZSwgaXNOb2RlU2RrLCBpc1JlYWN0TmF0aXZlLCBpc1NhZmFyaSwgaXNVV1AsIGlzVmFsaWRGb3JtYXQsIGlzVmFsaWRUaW1lc3RhbXAsIGlzc3VlZEF0VGltZSwganNvbkV2YWwsIG1hcCwgb3JkaW5hbCwgcXVlcnlzdHJpbmcsIHF1ZXJ5c3RyaW5nRGVjb2RlLCBzYWZlR2V0LCBzdHJpbmdMZW5ndGgsIHN0cmluZ1RvQnl0ZUFycmF5LCBzdHJpbmdpZnksIHZhbGlkYXRlQXJnQ291bnQsIHZhbGlkYXRlQ2FsbGJhY2ssIHZhbGlkYXRlQ29udGV4dE9iamVjdCwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgdmFsaWRhdGVOYW1lc3BhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6NzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjEyLCAyMTIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2NvbnRlbnQgI3Byb2plY3RzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxufVxcblxcbiNjb250ZW50ICN0b2RvcyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9kby1pdGVtLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1pdGVtIGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnRvZG8taXRlbSBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6NzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjEyLCAyMTIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2NvbnRlbnQgI3Byb2plY3RzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxufVxcblxcbiNjb250ZW50ICN0b2RvcyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2xhdGVncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9kby1pdGVtLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1pdGVtIGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnRvZG8taXRlbSBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjkuNi42XCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfSBmcm9tICcuL2l0ZW1zJ1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfSBmcm9tICcuL3Byb2plY3RzJ1xuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdEZWZhdWx0JylcbiAgICBjb25zdCBpdGVtMSA9IGl0ZW1GYWN0b3J5KCdDYWxsIEJlbicsICdBYm91dCB3b3JrJywgJ0phbiAyOXRoJywgJzMnKVxuICAgIGNvbnN0IGl0ZW0yID0gaXRlbUZhY3RvcnkoJ0NhbGwgSmFuZScsICdBYm91dCBzY2hvb2wnLCAnSmFuIDI4dGgnLCAnMScpXG4gICAgY29uc3QgaXRlbTMgPSBpdGVtRmFjdG9yeSgnQ2FsbCBWYWR5bScsICdBYm91dCBmYW1pbHknLCAnSmFuIDI3dGgnLCAnMicpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMSlcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0yKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTMpXG4gICAgLy8gQSBsaXN0IG9mIHByb2plY3RGYWN0b3J5IG9iamVjdHMsIHdoaWNoIGFyZSBiYXNpY2FsbHkgbGlzdHMgb2YgaXRlbXMuXG4gICAgLy8gU3AsIGl0J3MgYSAyRCBsaXN0LlxuICAgIGxldCBfcHJvamVjdExpc3QgPSBbZGVmYXVsdFByb2plY3RdXG5cbiAgICAvLyBDbGljayBvbiBhIHBhcnRpY3VsYXIgcHJvaiwgbG9vcCB0aHJ1IGl0cyBpdGVtcywgYW5kIGNyZWF0ZSBhbiBlbGVtIGZvciBlYWNoXG4gICAgY29uc3QgX3Nob3dJdGVtcyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbUVsZW0ubGFzdENoaWxkKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgX2RlbGV0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgd2hpbGUgKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBfcHJvamVjdExpc3QsIGdpdmUgZWFjaCBwcm9qIGVsZW0gYW4gSUQgYW5kIGFwcGVuZCB0byBjb250YWluZXIuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbiAgICAgICAgX3Byb2plY3RMaXN0LmZvckVhY2goKHByb2osIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2osIGkpXG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIGZpcnN0IHByb2plY3QgYWN0aXZlIGFuZCBzaG93IGl0cyBpdGVtc1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IHByb2ouZ2V0SXRlbXMoKVxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIHByb2plY3QgaW50ZXJuYWxseVxuICAgICAgICBjb25zdCBuYW1lID0gcHJvbXB0KCdHaXZlIG1lIGEgcHJvamVjdCBuYW1lLicpXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShuYW1lKVxuICAgICAgICBfcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxuXG4gICAgICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgcHJvamVjdCdzIGlkIGFuZCBtYWtlIGEgcHJvamVjdCBET01cbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGxldCBwcm9qSUQgPSAwXG4gICAgICAgIGlmIChwcm9qQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvaklEID0gK3Byb2pDb250YWluZXIubGFzdENoaWxkLmRhdGFzZXQuaW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvamVjdCwgcHJvaklEKVxuICAgICAgICBwcm9qRWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBwcm9qRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VQcm9qZWN0QWN0aXZlKVxuICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtKVxuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYWN0aXZlIHByb2osIGRlbGV0ZSBpdHMgRE9NIGFuZCBwdXNoIG91dCBvZiBfcHJvamVjdExpc3QsXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvai5kYXRhc2V0LmluZGV4XG4gICAgICAgIHByb2plY3RET00uZGVsZXRlUHJvamVjdChwcm9qSUQpXG4gICAgICAgIF9wcm9qZWN0TGlzdC5zcGxpY2UocHJvaklELCAxKVxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuXG4gICAgICAgIC8vIE1ha2UgdGhlIGxhc3QgcHJvamVjdCBhY3RpdmVcbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvakNvbnRhaW5lci5sYXN0Q2hpbGRcbiAgICAgICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAvLyBTaG93IGFjdGl2ZSBwcm9qZWN0J3MgaXRlbXNcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdEVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2plY3RJRF1cbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZSBhbmQgYWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgY29uc3QgbWFrZVByb2plY3RBY3RpdmUgPSAoZSkgPT4ge1xuICAgICAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcblxuICAgICAgICAvLyBBY3RpdmF0ZSB0aGlzIHByb2plY3RcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAvLyBEZWxldGUgaXRlbXMgZnJvbSBwcmV2IHByb2pcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcblxuICAgICAgICAvLyBTaG93IGl0ZW1zIGZvciB0aGlzIHByb2plY3RcbiAgICAgICAgX3Nob3dJdGVtcyhlKVxuICAgIH1cblxuICAgIC8vIEZpbmQgYW4gaXRlbSdzIGlkLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX2l0ZW1MaXN0XG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYSBwcm9qZWN0J3MgaWQgYW5kIGl0cyBvYmogaW4gX3Byb2plY3RMaXN0XG4gICAgICAgIGNvbnN0IHByb2pFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2pFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdXG5cbiAgICAgICAgLy8gSXRlbSdzIElEXG4gICAgICAgIGNvbnN0IGl0ZW1JRCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcblxuICAgICAgICAvLyBEZWxldGUgaXRlbSBmcm9tIHByb2plY3QgYW5kIGZyb20gRE9NXG4gICAgICAgIC8vIChJIGNob3NlIHRvIHJlZnJlc2ggZWxlbWVudHMgdG8gZ2l2ZSB0aGVtIGFwcHJvcHJpYXRlIElEcylcbiAgICAgICAgcHJvamVjdC5yZW1vdmVJdGVtKGl0ZW1JRClcbiAgICAgICAgLy8gaXRlbURPTS5kZWxldGVJdGVtKGl0ZW1JRCk7XG5cbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSXRlbSA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qRWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuXG4gICAgICAgIC8vIEFzayB1c2VyIGFib3V0IGl0ZW0ncyBwcm9wc1xuICAgICAgICBjb25zdCB0aXRsZSA9IHByb21wdCgnVGl0bGUgb2YgdGhlIHRvLWRvIGl0ZW06ICcpXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdEZXNjcmlwdGlvbjogJylcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHByb21wdCgnRHVlIERhdGU6JylcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5OiAnKVxuXG4gICAgICAgIC8vIE1ha2UgYW4gaXRlbSBhbmQgYWRkIGl0IHRvIHRoZSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICBwcm9qZWN0LmFkZEl0ZW0oaXRlbSlcblxuICAgICAgICAvLyBNYWtlIGl0ZW0ncyBET00gZWxlbSBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gICAgICAgIC8vIFVzZSBsYXN0IGl0ZW0ncyBpZCArIDEgYXMgdGhpcyBuZXcgaXRlbSdzIGlkXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBsZXQgaXRlbUlEID0gMFxuICAgICAgICBpZiAoaXRlbUNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGl0ZW1JRCA9IGl0ZW1Db250YWluZXIubGFzdENoaWxkLmlkICsgMVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGl0ZW1JRClcbiAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgbWFrZUl0ZW0sXG4gICAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICAgIG1ha2VQcm9qZWN0QWN0aXZlLFxuICAgICAgICBzaG93UHJvamVjdHMsXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvXG5cbi8vIE9rLCB0aGVyZSdzIGEgbG90IHRvIHNheS5cblxuLy8gRmlyc3Qgb2YgYWxsLCBJIGhhdmUgYSBsb3Qgb2YgcmVwZXRpdGl2ZSBjb2RlLlxuLy8gQWxtb3N0IGFsbCBvZiB0aGUgZnVuY3Rpb25zIGhhdmUgcGFydHMgdGhhdCByZXBlYXQgZWFjaCBvdGhlci5cbi8vIFRoYXQgaXMgZWFzaWx5IGZpeGFibGUuXG5cbi8vIFNlY29uZGx5LCBJIGNhbiBjdXN0b21pemUgQ1NTIHByb3Blcmx5LlxuXG4vLyBUaGlyZGx5LCBJIGNhbiBtYWtlIHByb3BlciBmb3JtcyB0byBtYWtlIHByb2plY3RzIGFuZCBpdGVtcy5cblxuLy8gRm91cnRobHksIGl0IHdvdWxkIGJlIGNvb2wgdG8gZG8gc29tZSBpbnB1dCB2YWxpZGF0aW9uLlxuXG4vLyBGaWZ0aGx5LCBpdCB3b3VsZCBiZSBuaWNlIHRvIGJlIGFibGUgdG8gZWRpdCB5b3VyIHByb2plY3RzIGFuZCBpdGVtcy5cblxuLy8gSWYgdGhlcmUncyBubyBwcm9qZWN0IG5hbWUgZ2l2ZW4sIGl0IHNob3VsZG4ndCBiZSBjcmVhdGVkLlxuLy8gVWx0aW1hdGVseSwgXiBjb21lcyBkb3duIHRvIGlucHV0IHZhbGlkYXRpb25cblxuLy8gU3RvcmUgcHJvamVjdHMgaW4gbG9jYWxTdG9yYWdlIiwiY29uc3QgaXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RGF0ZSkgPT4gX2R1ZURhdGUgPSBuZXdEYXRlO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksXG4gICAgICAgICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSB9XG5cbn07XG5cbmNvbnN0IGl0ZW1ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUl0ZW0gPSAoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tbGVmdFwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWR1ZWRhdGUnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RHVlRGF0ZSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5nZXRQcmlvcml0eSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MZWZ0KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRvZG9zLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfVxuXG59KSgpO1xuXG5leHBvcnQgeyBpdGVtRmFjdG9yeSwgaXRlbURPTSB9IiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZVxuICAgIGNvbnN0IF9pdGVtTGlzdCA9IFtdXG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gX25hbWVcbiAgICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IChfbmFtZSA9IG5ld05hbWUpXG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IF9pdGVtTGlzdFxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4gX2l0ZW1MaXN0LnB1c2goaXRlbSlcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHBvc2l0aW9uKSA9PiBfaXRlbUxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKVxuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgc2V0TmFtZSwgZ2V0SXRlbXMsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfVxufVxuXG5jb25zdCBwcm9qZWN0RE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QsIGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGlkKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1pbmRleD1cIiR7aWR9XCJdYClcbiAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvamVjdClcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH1cbn0pKClcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlciwgc2V0VXNlckxvZ0hhbmRsZXIsIHNldExvZ0xldmVsIGFzIHNldExvZ0xldmVsJDEgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgZGVlcEVxdWFsIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuZXhwb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIC8vIEluIGluaXRpYWwgaW1wbGVtZW50YXRpb24sIHRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgaW5zdGFsbGF0aW9ucyBvblxyXG4gICAgLy8gYXV0aCB0b2tlbiByZWZyZXNoLCBhbmQgaW5zdGFsbGF0aW9ucyB3aWxsIHNlbmQgdGhpcyBzdHJpbmcuXHJcbiAgICBnZXRQbGF0Zm9ybUluZm9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXJzID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXJzKCk7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHByb3ZpZGVycyBhbmQgZ2V0IGxpYnJhcnkvdmVyc2lvbiBwYWlycyBmcm9tIGFueSB0aGF0IGFyZVxyXG4gICAgICAgIC8vIHZlcnNpb24gY29tcG9uZW50cy5cclxuICAgICAgICByZXR1cm4gcHJvdmlkZXJzXHJcbiAgICAgICAgICAgIC5tYXAocHJvdmlkZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHByb3ZpZGVyLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3NlcnZpY2UubGlicmFyeX0vJHtzZXJ2aWNlLnZlcnNpb259YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihsb2dTdHJpbmcgPT4gbG9nU3RyaW5nKVxyXG4gICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvdmlkZXIgY2hlY2sgaWYgdGhpcyBwcm92aWRlciBwcm92aWRlcyBhIFZlcnNpb25TZXJ2aWNlXHJcbiAqXHJcbiAqIE5PVEU6IFVzaW5nIFByb3ZpZGVyPCdhcHAtdmVyc2lvbic+IGlzIGEgaGFjayB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm92aWRlclxyXG4gKiBwcm92aWRlcyBWZXJzaW9uU2VydmljZS4gVGhlIHByb3ZpZGVyIGlzIG5vdCBuZWNlc3NhcmlseSBhICdhcHAtdmVyc2lvbidcclxuICogcHJvdmlkZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpO1xyXG4gICAgcmV0dXJuIChjb21wb25lbnQgPT09IG51bGwgfHwgY29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb25lbnQudHlwZSkgPT09IFwiVkVSU0lPTlwiIC8qIFZFUlNJT04gKi87XHJcbn1cblxuY29uc3QgbmFtZSRvID0gXCJAZmlyZWJhc2UvYXBwXCI7XG5jb25zdCB2ZXJzaW9uJDEgPSBcIjAuNy4xNlwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdAZmlyZWJhc2UvYXBwJyk7XG5cbmNvbnN0IG5hbWUkbiA9IFwiQGZpcmViYXNlL2FwcC1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRtID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGwgPSBcIkBmaXJlYmFzZS9hbmFseXRpY3NcIjtcblxuY29uc3QgbmFtZSRrID0gXCJAZmlyZWJhc2UvYXBwLWNoZWNrLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGogPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2tcIjtcblxuY29uc3QgbmFtZSRpID0gXCJAZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBuYW1lJGggPSBcIkBmaXJlYmFzZS9hdXRoLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGcgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBuYW1lJGYgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRlID0gXCJAZmlyZWJhc2UvZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUkZCA9IFwiQGZpcmViYXNlL2Z1bmN0aW9ucy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRjID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuXG5jb25zdCBuYW1lJGIgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGEgPSBcIkBmaXJlYmFzZS9tZXNzYWdpbmdcIjtcblxuY29uc3QgbmFtZSQ5ID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDggPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZVwiO1xuXG5jb25zdCBuYW1lJDcgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ2ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZ1wiO1xuXG5jb25zdCBuYW1lJDUgPSBcIkBmaXJlYmFzZS9yZW1vdGUtY29uZmlnLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDQgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IG5hbWUkMyA9IFwiQGZpcmViYXNlL3N0b3JhZ2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkMiA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBuYW1lJDEgPSBcIkBmaXJlYmFzZS9maXJlc3RvcmUtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUgPSBcImZpcmViYXNlXCI7XG5jb25zdCB2ZXJzaW9uID0gXCI5LjYuNlwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGRlZmF1bHQgYXBwIG5hbWVcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcclxuY29uc3QgUExBVEZPUk1fTE9HX1NUUklORyA9IHtcclxuICAgIFtuYW1lJG9dOiAnZmlyZS1jb3JlJyxcclxuICAgIFtuYW1lJG5dOiAnZmlyZS1jb3JlLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRsXTogJ2ZpcmUtYW5hbHl0aWNzJyxcclxuICAgIFtuYW1lJG1dOiAnZmlyZS1hbmFseXRpY3MtY29tcGF0JyxcclxuICAgIFtuYW1lJGpdOiAnZmlyZS1hcHAtY2hlY2snLFxyXG4gICAgW25hbWUka106ICdmaXJlLWFwcC1jaGVjay1jb21wYXQnLFxyXG4gICAgW25hbWUkaV06ICdmaXJlLWF1dGgnLFxyXG4gICAgW25hbWUkaF06ICdmaXJlLWF1dGgtY29tcGF0JyxcclxuICAgIFtuYW1lJGddOiAnZmlyZS1ydGRiJyxcclxuICAgIFtuYW1lJGZdOiAnZmlyZS1ydGRiLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRlXTogJ2ZpcmUtZm4nLFxyXG4gICAgW25hbWUkZF06ICdmaXJlLWZuLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRjXTogJ2ZpcmUtaWlkJyxcclxuICAgIFtuYW1lJGJdOiAnZmlyZS1paWQtY29tcGF0JyxcclxuICAgIFtuYW1lJGFdOiAnZmlyZS1mY20nLFxyXG4gICAgW25hbWUkOV06ICdmaXJlLWZjbS1jb21wYXQnLFxyXG4gICAgW25hbWUkOF06ICdmaXJlLXBlcmYnLFxyXG4gICAgW25hbWUkN106ICdmaXJlLXBlcmYtY29tcGF0JyxcclxuICAgIFtuYW1lJDZdOiAnZmlyZS1yYycsXHJcbiAgICBbbmFtZSQ1XTogJ2ZpcmUtcmMtY29tcGF0JyxcclxuICAgIFtuYW1lJDRdOiAnZmlyZS1nY3MnLFxyXG4gICAgW25hbWUkM106ICdmaXJlLWdjcy1jb21wYXQnLFxyXG4gICAgW25hbWUkMl06ICdmaXJlLWZzdCcsXHJcbiAgICBbbmFtZSQxXTogJ2ZpcmUtZnN0LWNvbXBhdCcsXHJcbiAgICAnZmlyZS1qcyc6ICdmaXJlLWpzJyxcclxuICAgIFtuYW1lXTogJ2ZpcmUtanMtYWxsJ1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBfYXBwcyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIFJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5jb25zdCBfY29tcG9uZW50cyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhcHAuY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCAke2FwcC5uYW1lfWAsIGUpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgYXBwLmNvbnRhaW5lci5hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCB0byByZWdpc3RlclxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX3JlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lO1xyXG4gICAgaWYgKF9jb21wb25lbnRzLmhhcyhjb21wb25lbnROYW1lKSkge1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfS5gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBfY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcclxuICAgIC8vIGFkZCB0aGUgY29tcG9uZW50IHRvIGV4aXN0aW5nIGFwcCBpbnN0YW5jZXNcclxuICAgIGZvciAoY29uc3QgYXBwIG9mIF9hcHBzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRoZSBwcm92aWRlciBmb3IgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9nZXRQcm92aWRlcihhcHAsIG5hbWUpIHtcclxuICAgIHJldHVybiBhcHAuY29udGFpbmVyLmdldFByb3ZpZGVyKG5hbWUpO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2VBcHAgaW5zdGFuY2VcclxuICogQHBhcmFtIG5hbWUgLSBzZXJ2aWNlIG5hbWVcclxuICogQHBhcmFtIGluc3RhbmNlSWRlbnRpZmllciAtIHNlcnZpY2UgaW5zdGFuY2UgaWRlbnRpZmllciBpbiBjYXNlIHRoZSBzZXJ2aWNlIHN1cHBvcnRzIG11bHRpcGxlIGluc3RhbmNlc1xyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UoYXBwLCBuYW1lLCBpbnN0YW5jZUlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgIF9nZXRQcm92aWRlcihhcHAsIG5hbWUpLmNsZWFySW5zdGFuY2UoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxufVxyXG4vKipcclxuICogVGVzdCBvbmx5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2NsZWFyQ29tcG9uZW50cygpIHtcclxuICAgIF9jb21wb25lbnRzLmNsZWFyKCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgRVJST1JTID0ge1xyXG4gICAgW1wibm8tYXBwXCIgLyogTk9fQVBQICovXTogXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXHJcbiAgICAgICAgJ2NhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKScsXHJcbiAgICBbXCJiYWQtYXBwLW5hbWVcIiAvKiBCQURfQVBQX05BTUUgKi9dOiBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9XCIsXHJcbiAgICBbXCJkdXBsaWNhdGUtYXBwXCIgLyogRFVQTElDQVRFX0FQUCAqL106IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0cyB3aXRoIGRpZmZlcmVudCBvcHRpb25zIG9yIGNvbmZpZ1wiLFxyXG4gICAgW1wiYXBwLWRlbGV0ZWRcIiAvKiBBUFBfREVMRVRFRCAqL106IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcclxuICAgIFtcImludmFsaWQtYXBwLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9BUFBfQVJHVU1FTlQgKi9dOiAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xyXG4gICAgICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcclxuICAgIFtcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi9dOiAnRmlyc3QgYXJndW1lbnQgdG8gYG9uTG9nYCBtdXN0IGJlIG51bGwgb3IgYSBmdW5jdGlvbi4nXHJcbn07XHJcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KCdhcHAnLCAnRmlyZWJhc2UnLCBFUlJPUlMpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBGaXJlYmFzZUFwcEltcGwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID1cclxuICAgICAgICAgICAgY29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ2FwcCcsICgpID0+IHRoaXMsIFwiUFVCTElDXCIgLyogUFVCTElDICovKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCh2YWwpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuICAgIGdldCBjb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGdldCBpc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlZDtcclxuICAgIH1cclxuICAgIHNldCBpc0RlbGV0ZWQodmFsKSB7XHJcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxyXG4gICAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrRGVzdHJveWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1kZWxldGVkXCIgLyogQVBQX0RFTEVURUQgKi8sIHsgYXBwTmFtZTogdGhpcy5fbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBjdXJyZW50IFNESyB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jb25zdCBTREtfVkVSU0lPTiA9IHZlcnNpb247XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAob3B0aW9ucywgcmF3Q29uZmlnID0ge30pIHtcclxuICAgIGlmICh0eXBlb2YgcmF3Q29uZmlnICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSByYXdDb25maWc7XHJcbiAgICAgICAgcmF3Q29uZmlnID0geyBuYW1lIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHsgbmFtZTogREVGQVVMVF9FTlRSWV9OQU1FLCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ6IGZhbHNlIH0sIHJhd0NvbmZpZyk7XHJcbiAgICBjb25zdCBuYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8ICFuYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJiYWQtYXBwLW5hbWVcIiAvKiBCQURfQVBQX05BTUUgKi8sIHtcclxuICAgICAgICAgICAgYXBwTmFtZTogU3RyaW5nKG5hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKTtcclxuICAgIGlmIChleGlzdGluZ0FwcCkge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgYXBwIGlmIG9wdGlvbnMgYW5kIGNvbmZpZyBkZWVwIGVxdWFsIHRoZSBvbmVzIGluIHRoZSBleGlzdGluZyBhcHAuXHJcbiAgICAgICAgaWYgKGRlZXBFcXVhbChvcHRpb25zLCBleGlzdGluZ0FwcC5vcHRpb25zKSAmJlxyXG4gICAgICAgICAgICBkZWVwRXF1YWwoY29uZmlnLCBleGlzdGluZ0FwcC5jb25maWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0FwcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZHVwbGljYXRlLWFwcFwiIC8qIERVUExJQ0FURV9BUFAgKi8sIHsgYXBwTmFtZTogbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpO1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcclxuICAgIF9hcHBzLnNldChuYW1lLCBuZXdBcHApO1xyXG4gICAgcmV0dXJuIG5ld0FwcDtcclxufVxyXG4vKipcclxuICogUmV0cmlldmVzIGEge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxyXG4gKlxyXG4gKiBXaGVuIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cywgdGhlIGRlZmF1bHQgYXBwIGlzIHJldHVybmVkLiBXaGVuIGFuIGFwcCBuYW1lXHJcbiAqIGlzIHByb3ZpZGVkLCB0aGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhhdCBuYW1lIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBBbiBleGNlcHRpb24gaXMgdGhyb3duIGlmIHRoZSBhcHAgYmVpbmcgcmV0cmlldmVkIGhhcyBub3QgeWV0IGJlZW5cclxuICogaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogLy8gUmV0dXJuIHRoZSBkZWZhdWx0IGFwcFxyXG4gKiBjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogLy8gUmV0dXJuIGEgbmFtZWQgYXBwXHJcbiAqIGNvbnN0IG90aGVyQXBwID0gZ2V0QXBwKFwib3RoZXJBcHBcIik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSAtIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGFwcCB0byByZXR1cm4uIElmIG5vIG5hbWUgaXNcclxuICogICBwcm92aWRlZCwgdGhlIGRlZmF1bHQgaXMgYFwiW0RFRkFVTFRdXCJgLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3ZpZGVkIGFwcCBuYW1lLlxyXG4gKiAgIElmIG5vIGFwcCBuYW1lIGlzIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEFwcChuYW1lID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICBjb25zdCBhcHAgPSBfYXBwcy5nZXQobmFtZSk7XHJcbiAgICBpZiAoIWFwcCkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwXCIgLyogTk9fQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwO1xyXG59XHJcbi8qKlxyXG4gKiBBIChyZWFkLW9ubHkpIGFycmF5IG9mIGFsbCBpbml0aWFsaXplZCBhcHBzLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBcHBzKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oX2FwcHMudmFsdWVzKCkpO1xyXG59XHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoaXMgYXBwIHVudXNhYmxlIGFuZCBmcmVlcyB0aGUgcmVzb3VyY2VzIG9mIGFsbCBhc3NvY2lhdGVkXHJcbiAqIHNlcnZpY2VzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGRlbGV0ZUFwcChhcHApXHJcbiAqICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcclxuICogICB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFwcChhcHApIHtcclxuICAgIGNvbnN0IG5hbWUgPSBhcHAubmFtZTtcclxuICAgIGlmIChfYXBwcy5oYXMobmFtZSkpIHtcclxuICAgICAgICBfYXBwcy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXBwLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZ2V0UHJvdmlkZXJzKClcclxuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiBwcm92aWRlci5kZWxldGUoKSkpO1xyXG4gICAgICAgIGFwcC5pc0RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSBsaWJyYXJ5J3MgbmFtZSBhbmQgdmVyc2lvbiBmb3IgcGxhdGZvcm0gbG9nZ2luZyBwdXJwb3Nlcy5cclxuICogQHBhcmFtIGxpYnJhcnkgLSBOYW1lIG9mIDFwIG9yIDNwIGxpYnJhcnkgKGUuZy4gZmlyZXN0b3JlLCBhbmd1bGFyZmlyZSlcclxuICogQHBhcmFtIHZlcnNpb24gLSBDdXJyZW50IHZlcnNpb24gb2YgdGhhdCBsaWJyYXJ5LlxyXG4gKiBAcGFyYW0gdmFyaWFudCAtIEJ1bmRsZSB2YXJpYW50LCBlLmcuLCBub2RlLCBybiwgZXRjLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlclZlcnNpb24obGlicmFyeUtleU9yTmFtZSwgdmVyc2lvbiwgdmFyaWFudCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgLy8gVE9ETzogV2UgY2FuIHVzZSB0aGlzIGNoZWNrIHRvIHdoaXRlbGlzdCBzdHJpbmdzIHdoZW4vaWYgd2Ugc2V0IHVwXHJcbiAgICAvLyBhIGdvb2Qgd2hpdGVsaXN0IHN5c3RlbS5cclxuICAgIGxldCBsaWJyYXJ5ID0gKF9hID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbGlicmFyeUtleU9yTmFtZTtcclxuICAgIGlmICh2YXJpYW50KSB7XHJcbiAgICAgICAgbGlicmFyeSArPSBgLSR7dmFyaWFudH1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlicmFyeU1pc21hdGNoID0gbGlicmFyeS5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgY29uc3QgdmVyc2lvbk1pc21hdGNoID0gdmVyc2lvbi5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICBjb25zdCB3YXJuaW5nID0gW1xyXG4gICAgICAgICAgICBgVW5hYmxlIHRvIHJlZ2lzdGVyIGxpYnJhcnkgXCIke2xpYnJhcnl9XCIgd2l0aCB2ZXJzaW9uIFwiJHt2ZXJzaW9ufVwiOmBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKGBsaWJyYXJ5IG5hbWUgXCIke2xpYnJhcnl9XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoICYmIHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goJ2FuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcucHVzaChgdmVyc2lvbiBuYW1lIFwiJHt2ZXJzaW9ufVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZy5qb2luKCcgJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KGAke2xpYnJhcnl9LXZlcnNpb25gLCAoKSA9PiAoeyBsaWJyYXJ5LCB2ZXJzaW9uIH0pLCBcIlZFUlNJT05cIiAvKiBWRVJTSU9OICovKSk7XHJcbn1cclxuLyoqXHJcbiAqIFNldHMgbG9nIGhhbmRsZXIgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxyXG4gKiBAcGFyYW0gbG9nQ2FsbGJhY2sgLSBBbiBvcHRpb25hbCBjdXN0b20gbG9nIGhhbmRsZXIgdGhhdCBleGVjdXRlcyB1c2VyIGNvZGUgd2hlbmV2ZXJcclxuICogdGhlIEZpcmViYXNlIFNESyBtYWtlcyBhIGxvZ2dpbmcgY2FsbC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gb25Mb2cobG9nQ2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgIGlmIChsb2dDYWxsYmFjayAhPT0gbnVsbCAmJiB0eXBlb2YgbG9nQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi8pO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlckxvZ0hhbmRsZXIobG9nQ2FsbGJhY2ssIG9wdGlvbnMpO1xyXG59XHJcbi8qKlxyXG4gKiBTZXRzIGxvZyBsZXZlbCBmb3IgYWxsIEZpcmViYXNlIFNES3MuXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCBhcmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBpbmZvYCwgZXJyb3JzIGFyZSBsb2dnZWQsIGJ1dCBgZGVidWdgIGFuZFxyXG4gKiBgdmVyYm9zZWAgbG9ncyBhcmUgbm90KS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWwpIHtcclxuICAgIHNldExvZ0xldmVsJDEobG9nTGV2ZWwpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHModmFyaWFudCkge1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ3BsYXRmb3JtLWxvZ2dlcicsIGNvbnRhaW5lciA9PiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbChjb250YWluZXIpLCBcIlBSSVZBVEVcIiAvKiBQUklWQVRFICovKSk7XHJcbiAgICAvLyBSZWdpc3RlciBgYXBwYCBwYWNrYWdlLlxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUkbywgdmVyc2lvbiQxLCB2YXJpYW50KTtcclxuICAgIC8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTUsIGVzbTIwMTcsIGNqczUsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXHJcbiAgICByZWdpc3RlclZlcnNpb24obmFtZSRvLCB2ZXJzaW9uJDEsICdlc20yMDE3Jyk7XHJcbiAgICAvLyBSZWdpc3RlciBwbGF0Zm9ybSBTREsgaWRlbnRpZmllciAobm8gdmVyc2lvbikuXHJcbiAgICByZWdpc3RlclZlcnNpb24oJ2ZpcmUtanMnLCAnJyk7XHJcbn1cblxuLyoqXHJcbiAqIEZpcmViYXNlIEFwcFxyXG4gKlxyXG4gKiBAcmVtYXJrcyBUaGlzIHBhY2thZ2UgY29vcmRpbmF0ZXMgdGhlIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IEZpcmViYXNlIGNvbXBvbmVudHNcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqL1xyXG5yZWdpc3RlckNvcmVDb21wb25lbnRzKCcnKTtcblxuZXhwb3J0IHsgU0RLX1ZFUlNJT04sIERFRkFVTFRfRU5UUllfTkFNRSBhcyBfREVGQVVMVF9FTlRSWV9OQU1FLCBfYWRkQ29tcG9uZW50LCBfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQsIF9hcHBzLCBfY2xlYXJDb21wb25lbnRzLCBfY29tcG9uZW50cywgX2dldFByb3ZpZGVyLCBfcmVnaXN0ZXJDb21wb25lbnQsIF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UsIGRlbGV0ZUFwcCwgZ2V0QXBwLCBnZXRBcHBzLCBpbml0aWFsaXplQXBwLCBvbkxvZywgcmVnaXN0ZXJWZXJzaW9uLCBzZXRMb2dMZXZlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsImltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG4vKipcclxuICogQ29tcG9uZW50IGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxyXG4gKi9cclxuY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBwdWJsaWMgc2VydmljZSBuYW1lLCBlLmcuIGFwcCwgYXV0aCwgZmlyZXN0b3JlLCBkYXRhYmFzZVxyXG4gICAgICogQHBhcmFtIGluc3RhbmNlRmFjdG9yeSBTZXJ2aWNlIGZhY3RvcnkgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBwdWJsaWMgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gdHlwZSB3aGV0aGVyIHRoZSBzZXJ2aWNlIHByb3ZpZGVkIGJ5IHRoZSBjb21wb25lbnQgaXMgcHVibGljIG9yIHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5zdGFuY2VGYWN0b3J5LCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlRmFjdG9yeSA9IGluc3RhbmNlRmFjdG9yeTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm9wZXJ0aWVzIHRvIGJlIGFkZGVkIHRvIHRoZSBzZXJ2aWNlIG5hbWVzcGFjZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc2VydmljZVByb3BzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTW9kZSA9IFwiTEFaWVwiIC8qIExBWlkgKi87XHJcbiAgICAgICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXRJbnN0YW50aWF0aW9uTW9kZShtb2RlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTW9kZSA9IG1vZGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRNdWx0aXBsZUluc3RhbmNlcyhtdWx0aXBsZUluc3RhbmNlcykge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBtdWx0aXBsZUluc3RhbmNlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldFNlcnZpY2VQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMub25JbnN0YW5jZUNyZWF0ZWQgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGVyIGZvciBpbnN0YW5jZSBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gJ2F1dGgnLCAnYXV0aC1pbnRlcm5hbCdcclxuICogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIGlzIGFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2VcclxuICovXHJcbmNsYXNzIFByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBIHByb3ZpZGVyIGNhbiBwcm92aWRlIG11bGl0cGxlIGluc3RhbmNlcyBvZiBhIHNlcnZpY2VcclxuICAgICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIGdldChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5oYXMobm9ybWFsaXplZElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBkZWZlcnJlZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgdGhlIHNlcnZpY2UgaWYgaXQgY2FuIGJlIGF1dG8taW5pdGlhbGl6ZWRcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyBnZXQoKSwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgcmV0dXJuIHRoZSB1bnJlc29sdmVkIHByb21pc2UgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmdldChub3JtYWxpemVkSWRlbnRpZmllcikucHJvbWlzZTtcclxuICAgIH1cclxuICAgIGdldEltbWVkaWF0ZShvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaWRlbnRpZmllcik7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uYWwgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3B0aW9uYWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBhIGNvbXBvbmVudCBpcyBub3QgaW5pdGlhbGl6ZWQgYW5kIHNob3VsZC9jYW4gbm90IGJlIGF1dG8taW5pdGlhbGl6ZWQgYXQgdGhlIG1vbWVudCwgcmV0dXJuIG51bGwgaWYgdGhlIG9wdGlvbmFsIGZsYWcgaXMgc2V0LCBvciB0aHJvd1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFNlcnZpY2UgJHt0aGlzLm5hbWV9IGlzIG5vdCBhdmFpbGFibGVgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENvbXBvbmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICBzZXRDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC5uYW1lICE9PSB0aGlzLm5hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1pc21hdGNoaW5nIENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmb3IgUHJvdmlkZXIgJHt0aGlzLm5hbWV9LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvbXBvbmVudCBmb3IgJHt0aGlzLm5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlkZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgLy8gcmV0dXJuIGVhcmx5IHdpdGhvdXQgYXR0ZW1wdGluZyB0byBpbml0aWFsaXplIHRoZSBjb21wb25lbnQgaWYgdGhlIGNvbXBvbmVudCByZXF1aXJlcyBleHBsaWNpdCBpbml0aWFsaXphdGlvbiAoY2FsbGluZyBgUHJvdmlkZXIuaW5pdGlhbGl6ZSgpYClcclxuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSBzZXJ2aWNlIGlzIGVhZ2VyLCBpbml0aWFsaXplIHRoZSBkZWZhdWx0IGluc3RhbmNlXHJcbiAgICAgICAgaWYgKGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHsgaW5zdGFuY2VJZGVudGlmaWVyOiBERUZBVUxUX0VOVFJZX05BTUUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgZm9yIGFuIGVhZ2VyIENvbXBvbmVudCB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyB0aGUgZWFnZXJcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemF0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlIGEgZmF0YWwgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbnZlc3RpZ2F0ZSBpZiB3ZSBuZWVkIHRvIG1ha2UgaXQgY29uZmlndXJhYmxlLCBiZWNhdXNlIHNvbWUgY29tcG9uZW50IG1heSB3YW50IHRvIGNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yIGluIHRoaXMgY2FzZT9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDcmVhdGUgc2VydmljZSBpbnN0YW5jZXMgZm9yIHRoZSBwZW5kaW5nIHByb21pc2VzIGFuZCByZXNvbHZlIHRoZW1cclxuICAgICAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxyXG4gICAgICAgIC8vIGFuZCBhbGwgcHJvbWlzZXMgd2l0aCByZXNvbHZlIHdpdGggaXQgcmVnYXJkbGVzcyBvZiB0aGUgaWRlbnRpZmllci5cclxuICAgICAgICBmb3IgKGNvbnN0IFtpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlRGVmZXJyZWRdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIGBnZXRPckluaXRpYWxpemVTZXJ2aWNlKClgIHNob3VsZCBhbHdheXMgcmV0dXJuIGEgdmFsaWQgaW5zdGFuY2Ugc2luY2UgYSBjb21wb25lbnQgaXMgZ3VhcmFudGVlZC4gdXNlICEgdG8gbWFrZSB0eXBlc2NyaXB0IGhhcHB5LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IGxlYXZlIHRoZSBwcm9taXNlIHVucmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckluc3RhbmNlKGlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuZGVsZXRlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgIH1cclxuICAgIC8vIGFwcC5kZWxldGUoKSB3aWxsIGNhbGwgdGhpcyBtZXRob2Qgb24gZXZlcnkgcHJvdmlkZXIgdG8gZGVsZXRlIHRoZSBzZXJ2aWNlc1xyXG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIG1hcmsgdGhlIHByb3ZpZGVyIGFzIGRlbGV0ZWQ/XHJcbiAgICBhc3luYyBkZWxldGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIC4uLnNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ0lOVEVSTkFMJyBpbiBzZXJ2aWNlKSAvLyBsZWdhY3kgc2VydmljZXNcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAubWFwKHNlcnZpY2UgPT4gc2VydmljZS5JTlRFUk5BTC5kZWxldGUoKSksXHJcbiAgICAgICAgICAgIC4uLnNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ19kZWxldGUnIGluIHNlcnZpY2UpIC8vIG1vZHVsYXJpemVkIHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgLm1hcChzZXJ2aWNlID0+IHNlcnZpY2UuX2RlbGV0ZSgpKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgaXNDb21wb25lbnRTZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpc0luaXRpYWxpemVkKGlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuaGFzKGlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0T3B0aW9ucyhpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5nZXQoaWRlbnRpZmllcikgfHwge307XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKG9wdHMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHsgb3B0aW9ucyA9IHt9IH0gPSBvcHRzO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0cy5pbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke3RoaXMubmFtZX0oJHtub3JtYWxpemVkSWRlbnRpZmllcn0pIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvbXBvbmVudCAke3RoaXMubmFtZX0gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgeWV0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllcixcclxuICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlc29sdmUgYW55IHBlbmRpbmcgcHJvbWlzZSB3YWl0aW5nIGZvciB0aGUgc2VydmljZSBpbnN0YW5jZVxyXG4gICAgICAgIGZvciAoY29uc3QgW2luc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2VEZWZlcnJlZF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkSWRlbnRpZmllciA9PT0gbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkICBhZnRlciB0aGUgcHJvdmlkZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYnkgY2FsbGluZyBwcm92aWRlci5pbml0aWFsaXplKCkuXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBTWU5DSFJPTk9VU0xZLCBzbyBpdCBzaG91bGQgbm90IGV4ZWN1dGUgYW55IGxvbmdydW5uaW5nIHRhc2tzIGluIG9yZGVyIHRvIG5vdCBibG9jayB0aGUgcHJvZ3JhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBbiBvcHRpb25hbCBpbnN0YW5jZSBpZGVudGlmaWVyXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVucmVnaXN0ZXIgdGhlIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIG9uSW5pdChjYWxsYmFjaywgaWRlbnRpZmllcikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ2FsbGJhY2tzID0gKF9hID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbmV3IFNldCgpO1xyXG4gICAgICAgIGV4aXN0aW5nQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3Muc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBleGlzdGluZ0NhbGxiYWNrcyk7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChub3JtYWxpemVkSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXhpc3RpbmdJbnN0YW5jZSwgbm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBleGlzdGluZ0NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZSBvbkluaXQgY2FsbGJhY2tzIHN5bmNocm9ub3VzbHlcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSB0aGUgc2VydmljZSBpbnN0YW5jZWBcclxuICAgICAqL1xyXG4gICAgaW52b2tlT25Jbml0Q2FsbGJhY2tzKGluc3RhbmNlLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGluc3RhbmNlLCBpZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5pdCBjYWxsYmFja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyA9IHt9IH0pIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlICYmIHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jb21wb25lbnQuaW5zdGFuY2VGYWN0b3J5KHRoaXMuY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGluc3RhbmNlSWRlbnRpZmllciksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEludm9rZSBvbkluaXQgbGlzdGVuZXJzLlxyXG4gICAgICAgICAgICAgKiBOb3RlIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkIGlzIGRpZmZlcmVudCwgd2hpY2ggaXMgdXNlZCBieSB0aGUgY29tcG9uZW50IGNyZWF0b3IsXHJcbiAgICAgICAgICAgICAqIHdoaWxlIG9uSW5pdCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQgYnkgY29uc3VtZXJzIG9mIHRoZSBwcm92aWRlci5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuaW52b2tlT25Jbml0Q2FsbGJhY2tzKGluc3RhbmNlLCBpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3JkZXIgaXMgaW1wb3J0YW50XHJcbiAgICAgICAgICAgICAqIG9uSW5zdGFuY2VDcmVhdGVkKCkgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7IHdoaWNoXHJcbiAgICAgICAgICAgICAqIG1ha2VzIGBpc0luaXRpYWxpemVkKClgIHJldHVybiB0cnVlLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKHRoaXMuY29udGFpbmVyLCBpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllcjsgLy8gYXNzdW1lIG11bHRpcGxlIGluc3RhbmNlcyBhcmUgc3VwcG9ydGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHByb3ZpZGVkLlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3VsZEF1dG9Jbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiAoISF0aGlzLmNvbXBvbmVudCAmJlxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSAhPT0gXCJFWFBMSUNJVFwiIC8qIEVYUExJQ0lUICovKTtcclxuICAgIH1cclxufVxyXG4vLyB1bmRlZmluZWQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc2VydmljZSBmYWN0b3J5IGZvciB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyKSB7XHJcbiAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gREVGQVVMVF9FTlRSWV9OQU1FID8gdW5kZWZpbmVkIDogaWRlbnRpZmllcjtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSA9PT0gXCJFQUdFUlwiIC8qIEVBR0VSICovO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDb21wb25lbnRDb250YWluZXIgdGhhdCBwcm92aWRlcyBQcm92aWRlcnMgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXHJcbiAqL1xyXG5jbGFzcyBDb21wb25lbnRDb250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBiZWluZyBhZGRlZFxyXG4gICAgICogQHBhcmFtIG92ZXJ3cml0ZSBXaGVuIGEgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQsXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XHJcbiAgICAgKiBwcm92aWRlciB3aXRoIHRoZSBuZXcgY29tcG9uZW50LiBJdCBjYW4gYmUgdXNlZnVsIGluIHRlc3RzIHdoZXJlIHlvdSB3YW50IHRvIHVzZSBkaWZmZXJlbnQgbW9ja3NcclxuICAgICAqIGZvciBkaWZmZXJlbnQgdGVzdHMuXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxyXG4gICAgICovXHJcbiAgICBhZGRDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCAke3RoaXMubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdmlkZXIuc2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBhZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2V0UHJvdmlkZXIgcHJvdmlkZXMgYSB0eXBlIHNhZmUgaW50ZXJmYWNlIHdoZXJlIGl0IGNhbiBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgZmllbGQgbmFtZVxyXG4gICAgICogcHJlc2VudCBpbiBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlLlxyXG4gICAgICpcclxuICAgICAqIEZpcmViYXNlIFNES3MgcHJvdmlkaW5nIHNlcnZpY2VzIHNob3VsZCBleHRlbmQgTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZSB0byByZWdpc3RlclxyXG4gICAgICogdGhlbXNlbHZlcy5cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvdmlkZXIobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgUHJvdmlkZXIgZm9yIGEgc2VydmljZSB0aGF0IGhhc24ndCByZWdpc3RlcmVkIHdpdGggRmlyZWJhc2VcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBQcm92aWRlcihuYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnByb3ZpZGVycy5zZXQobmFtZSwgcHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiBwcm92aWRlcjtcclxuICAgIH1cclxuICAgIGdldFByb3ZpZGVycygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnByb3ZpZGVycy52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIsIFByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcclxuICovXHJcbmNvbnN0IGluc3RhbmNlcyA9IFtdO1xyXG4vKipcclxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xyXG4gKiBzaWxlbmNlIHRoZSBsb2dzIGFsdG9nZXRoZXIuXHJcbiAqXHJcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XHJcbiAqIERFQlVHIDwgVkVSQk9TRSA8IElORk8gPCBXQVJOIDwgRVJST1JcclxuICpcclxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBJTkZPYCwgZXJyb3JzIHdpbGwgc3RpbGwgYmUgbG9nZ2VkLCBidXQgYERFQlVHYCBhbmRcclxuICogYFZFUkJPU0VgIGxvZ3Mgd2lsbCBub3QpXHJcbiAqL1xyXG52YXIgTG9nTGV2ZWw7XHJcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiREVCVUdcIl0gPSAwXSA9IFwiREVCVUdcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiVkVSQk9TRVwiXSA9IDFdID0gXCJWRVJCT1NFXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIklORk9cIl0gPSAyXSA9IFwiSU5GT1wiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXQVJOXCJdID0gM10gPSBcIldBUk5cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRVJST1JcIl0gPSA0XSA9IFwiRVJST1JcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiU0lMRU5UXCJdID0gNV0gPSBcIlNJTEVOVFwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG5jb25zdCBsZXZlbFN0cmluZ1RvRW51bSA9IHtcclxuICAgICdkZWJ1Zyc6IExvZ0xldmVsLkRFQlVHLFxyXG4gICAgJ3ZlcmJvc2UnOiBMb2dMZXZlbC5WRVJCT1NFLFxyXG4gICAgJ2luZm8nOiBMb2dMZXZlbC5JTkZPLFxyXG4gICAgJ3dhcm4nOiBMb2dMZXZlbC5XQVJOLFxyXG4gICAgJ2Vycm9yJzogTG9nTGV2ZWwuRVJST1IsXHJcbiAgICAnc2lsZW50JzogTG9nTGV2ZWwuU0lMRU5UXHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgbGV2ZWxcclxuICovXHJcbmNvbnN0IGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxyXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXHJcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAqL1xyXG5jb25zdCBDb25zb2xlTWV0aG9kID0ge1xyXG4gICAgW0xvZ0xldmVsLkRFQlVHXTogJ2xvZycsXHJcbiAgICBbTG9nTGV2ZWwuVkVSQk9TRV06ICdsb2cnLFxyXG4gICAgW0xvZ0xldmVsLklORk9dOiAnaW5mbycsXHJcbiAgICBbTG9nTGV2ZWwuV0FSTl06ICd3YXJuJyxcclxuICAgIFtMb2dMZXZlbC5FUlJPUl06ICdlcnJvcidcclxufTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBoYW5kbGVyIHdpbGwgZm9yd2FyZCBERUJVRywgVkVSQk9TRSwgSU5GTywgV0FSTiwgYW5kIEVSUk9SXHJcbiAqIG1lc3NhZ2VzIG9uIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uc29sZSBjb3VudGVycGFydHMgKGlmIHRoZSBsb2cgbWV0aG9kXHJcbiAqIGlzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBsb2cgbGV2ZWwpXHJcbiAqL1xyXG5jb25zdCBkZWZhdWx0TG9nSGFuZGxlciA9IChpbnN0YW5jZSwgbG9nVHlwZSwgLi4uYXJncykgPT4ge1xyXG4gICAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgIGNvbnN0IG1ldGhvZCA9IENvbnNvbGVNZXRob2RbbG9nVHlwZV07XHJcbiAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgY29uc29sZVttZXRob2RdKGBbJHtub3d9XSAgJHtpbnN0YW5jZS5uYW1lfTpgLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIGxvZyBhIG1lc3NhZ2Ugd2l0aCBhbiBpbnZhbGlkIGxvZ1R5cGUgKHZhbHVlOiAke2xvZ1R5cGV9KWApO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cclxuICAgICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBkZWZhdWx0TG9nTGV2ZWw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1haW4gKGludGVybmFsKSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKiBDYW4gYmUgc2V0IHRvIGEgbmV3IGZ1bmN0aW9uIGluIGludGVybmFsIHBhY2thZ2UgY29kZSBidXQgbm90IGJ5IHVzZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IGRlZmF1bHRMb2dIYW5kbGVyO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYXB0dXJlIHRoZSBjdXJyZW50IGluc3RhbmNlIGZvciBsYXRlciB1c2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldCBsb2dMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nTGV2ZWwodmFsKSB7XHJcbiAgICAgICAgaWYgKCEodmFsIGluIExvZ0xldmVsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIFwiJHt2YWx9XCIgYXNzaWduZWQgdG8gXFxgbG9nTGV2ZWxcXGBgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvLyBXb3JrYXJvdW5kIGZvciBzZXR0ZXIvZ2V0dGVyIGhhdmluZyB0byBiZSB0aGUgc2FtZSB0eXBlLlxyXG4gICAgc2V0TG9nTGV2ZWwodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IGxldmVsU3RyaW5nVG9FbnVtW3ZhbF0gOiB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcclxuICAgIH1cclxuICAgIHNldCBsb2dIYW5kbGVyKHZhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGFzc2lnbmVkIHRvIGBsb2dIYW5kbGVyYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldCB1c2VyTG9nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckxvZ0hhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlckxvZ0hhbmRsZXIodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmdW5jdGlvbnMgYmVsb3cgYXJlIGFsbCBiYXNlZCBvbiB0aGUgYGNvbnNvbGVgIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBkZWJ1ZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgbG9nKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJlxyXG4gICAgICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLlZFUkJPU0UsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgaW5mbyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5JTkZPLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIHdhcm4oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICBlcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XHJcbiAgICBpbnN0YW5jZXMuZm9yRWFjaChpbnN0ID0+IHtcclxuICAgICAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGluc3RhbmNlcykge1xyXG4gICAgICAgIGxldCBjdXN0b21Mb2dMZXZlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xyXG4gICAgICAgICAgICBjdXN0b21Mb2dMZXZlbCA9IGxldmVsU3RyaW5nVG9FbnVtW29wdGlvbnMubGV2ZWxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxldmVsLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXJnc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoaWdub3JlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYXJnID0+IGFyZylcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCAhPT0gbnVsbCAmJiBjdXN0b21Mb2dMZXZlbCAhPT0gdm9pZCAwID8gY3VzdG9tTG9nTGV2ZWwgOiBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nZ2VyLCBzZXRMb2dMZXZlbCwgc2V0VXNlckxvZ0hhbmRsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9pbnRlcmZhY2UnXG5cbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QXRwWmZHTFBqZFpjS1g3NE9OazAwdnRma1RfdlB3UGhzXCIsXG4gIGF1dGhEb21haW46IFwidG9kb2xpc3QtNTBhMDIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ0b2RvbGlzdC01MGEwMlwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRvZG9saXN0LTUwYTAyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI5MjYxOTQ1NzYxMVwiLFxuICBhcHBJZDogXCIxOjI5MjYxOTQ1NzYxMTp3ZWI6MTdhZDJlZmViODQ4ZjdjZjQxZTljZVwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxud2luZG93Lm9ubG9hZCA9IFRvZG8uc2hvd1Byb2plY3RzXG5cbmNvbnN0IGNyZWF0ZVByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKVxuY3JlYXRlUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRvZG8ubWFrZVByb2plY3QpXG5cbmNvbnN0IGNyZWF0ZUl0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWl0ZW0nKVxuY3JlYXRlSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRvZG8ubWFrZUl0ZW0pXG5cbmNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLXByb2plY3QnKVxucmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRvZG8ucmVtb3ZlUHJvamVjdClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9