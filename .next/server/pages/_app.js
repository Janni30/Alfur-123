(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/ConsenHead.js


const ConsenHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "x-ua-compatible",
                content: "ie=edge"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Alfurqan"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "56x56",
                href: "assets/images/fav-icon/fav.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/bootstrap.min.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/animate.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/animated-text.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/all.min.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/flaticon.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/theme-default.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/meanmenu.min.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/owl.transitions.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "venobox/venobox.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/bootstrap-icons.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/style.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/magnific-popup.css",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "assets/css/responsive.css",
                type: "text/css",
                media: "all"
            })
        ]
    });
};
/* harmony default export */ const src_ConsenHead = (ConsenHead);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
;// CONCATENATED MODULE: ./pages/_app.js





 // Import AOS styles
const App = ({ Component , pageProps  })=>{
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        // Initialize AOS
        external_aos_default().init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
        // Set a timeout to simulate loading
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 1500);
        // Cleanup the timer if the component is unmounted
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(src_ConsenHead, {}),
            !loading && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7116));
module.exports = __webpack_exports__;

})();