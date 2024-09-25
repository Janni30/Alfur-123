"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 1429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



const faqsData = [
    {
        id: 1,
        title: "Is the ?",
        content: "Yes, our class schedule is flexible, allowing you to choose times that work best for you."
    },
    {
        id: 2,
        title: "How do I begin?",
        content: "Simply register on our website, and you'll receive an email with all the details to get started."
    },
    {
        id: 3,
        title: "Are these classes pre-recorded?",
        content: "No, all our classes are live, offering real-time interaction with instructors."
    },
    {
        id: 4,
        title: "Where is the headquarter of your business?",
        content: "Our headquarters are located in Coimbatore, India, but we operate globally."
    }
];
const Faqs1 = ()=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(faqsData[0].id);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "tab1",
        className: "tab_content",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
            defaultActiveKey: faqsData[0].id,
            as: "ul",
            className: "accordion",
            children: faqsData.map((faq)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion.Toggle, {
                            as: "a",
                            eventKey: faq.id,
                            onClick: ()=>setActive(faq.id == active ? null : faq.id),
                            className: faq.id == active ? "active" : "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    " ",
                                    faq.title,
                                    " "
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion.Collapse, {
                            eventKey: faq.id,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: faq.content
                            })
                        })
                    ]
                }, faq.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faqs1);


/***/ })

};
;