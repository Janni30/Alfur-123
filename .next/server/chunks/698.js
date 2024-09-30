"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        width: 960,
                                        height: 720,
                                        src: "https://www.youtube.com/embed/BS4TUd7FJSg",
                                        title: "Fantastic surfing the Best. Very nice video.",
                                        frameBorder: 0,
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        allowFullScreen: ""
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,external_react_.useState)(false);
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://youtu.be")) {
                    console.log("hi");
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(8603);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/footer/DefaultFooter.js


const DefaultFooter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-middle style-two",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-bg",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-2 mb-4 mb-md-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "widget widgets-company-info",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget widget-nav-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "widget-title",
                                                    children: "QUICK LINKS"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-quick-link-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "footer-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/",
                                                                    children: "Home"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/about",
                                                                    children: "About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/contact",
                                                                    children: "Contact Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/service",
                                                                    children: "Service"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-2 mb-4 mb-md-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget widget-nav-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "widget-title",
                                                children: "COURSES"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "menu-quick-link-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-menu",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Tajweed"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Quran"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Arabic"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Arabic UAE"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-4 d-flex flex-column mb-4 mb-md-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "container",
                                        style: {
                                            position: "relative",
                                            textAlign: "center",
                                            color: "white"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "d-flex justify-content-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/pattern-4.png",
                                                    alt: "",
                                                    height: 370
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "centered ",
                                                    style: {
                                                        position: "absolute",
                                                        top: "5%",
                                                        padding: "20px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo.png",
                                                            alt: "logo",
                                                            height: 55,
                                                            style: {
                                                                display: "block",
                                                                marginLeft: "30px"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            style: {
                                                                color: "white",
                                                                marginLeft: "-17px"
                                                            },
                                                            children: "  Start by breaking down complex topics into smaller, manageable parts to understand them better.Start by breaking down complex topics into smaller, manageable parts to understand them better."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "follow-company-icon pt-10",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "social-icon-color",
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "bi bi-facebook"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "social-icon-color2",
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "bi bi-instagram"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "social-icon-color1",
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "bi bi-twitter"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-4 p-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "widget-title",
                                                    children: "Address"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "UK +44 20 4577 1227"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "USA +1 85 5442 3380"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "123 Street Name, City, Country"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "Email: contact@alfurqan.academy"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "subscribe_form",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "email",
                                                    name: "email",
                                                    id: "email",
                                                    className: "form-control",
                                                    required: "",
                                                    "data-error": "Please enter your email",
                                                    placeholder: "Enter E-Mail"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    type: "submit",
                                                    className: "btn",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bi bi-send-check"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-shape",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/resource/red-dot.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-thumb1 bounce-animate2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/resource/all-shape.png",
                                        alt: ""
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-bottom-area d-flex align-items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row d-flex align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "consen-logo",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            color: "white"
                                        },
                                        children: [
                                            "   \xa9 2024 ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: "logo",
                                                    height: 35
                                                })
                                            }),
                                            " all rights reserved."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4 d-flex justify-content-end"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4 d-flex justify-content-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom-content",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-bottom-content-copy",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: {
                                                color: "#e63946"
                                            },
                                            children: "Designed By BlackstoneInfomatics"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_DefaultFooter = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layout/footer/Footer1.js


const Footer1 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "footer-middle",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "subscribe-area",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "row ",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-6 col-md-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "subscribe-title",
                                            children: /*#__PURE__*/ _jsx("h1", {
                                                children: "Subscribe to our Newsletter"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "col-lg-6 col-md-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                action: "https://formspree.io/f/myyleorq",
                                                method: "POST",
                                                id: "dreamit-form",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "subscribe_form",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "email",
                                                                name: "email",
                                                                id: "email",
                                                                className: "form-control",
                                                                required: "",
                                                                "data-error": "Please enter your email",
                                                                placeholder: "Enter Your Email"
                                                            }),
                                                            /*#__PURE__*/ _jsx("button", {
                                                                type: "submit",
                                                                className: "btn",
                                                                children: "Subscribe"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "subscribe_form_send"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                id: "status"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "subscribe-shape",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "subscribe-thumb bounce-animate5",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/small-dot.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "subscribe-thumb1",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/big-dot.png",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "footer-bg",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-4 col-sm-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget widgets-company-info mb-4 mb-lg-0",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "company-info-desc pr-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "widget-title",
                                                            children: " About Us "
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: "Busines Consulting is optimize standing manufactured products and installation synergy. Professionally predominat why professional business"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "follow-company-icon",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-facebook"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color2",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-instagram",
                                                                    children: " "
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color1",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-twitter"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("a", {
                                                            className: "social-icon-color3",
                                                            href: "#",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "bi bi-youtube"
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-2 col-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget widget-nav-menu",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: "Company"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "menu-quick-link-content",
                                                    children: /*#__PURE__*/ _jsxs("ul", {
                                                        className: "footer-menu",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Home "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Pricing "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Career "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: "  Contact "
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-3 col-6",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "widget widget-nav-menu",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "widget-title",
                                                    children: " Services "
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "menu-quick-link-content",
                                                    children: /*#__PURE__*/ _jsxs("ul", {
                                                        className: "footer-menu",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Strategy & Planing "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Consumer Market "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Data Analysis "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Corporate Finance "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: " Market Research "
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-lg-3 col-sm-6",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            id: "em-recent-post-widget",
                                            className: "mt-5 mt-sm-0",
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "single-widget-item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h4", {
                                                        className: "widget-title",
                                                        children: "Popular Posts"
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "recent-post-item active",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "recent-post-image",
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        width: 80,
                                                                        height: 80,
                                                                        src: "assets/images/resource/footer1.png",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "recent-post-text",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h6", {
                                                                        children: /*#__PURE__*/ _jsx("a", {
                                                                            href: "#",
                                                                            children: "How To Plugin Install WP server?"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "rcomment",
                                                                        children: "Dec 12, 2023"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "recent-post-item",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "recent-post-image",
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ _jsx("img", {
                                                                        width: 80,
                                                                        height: 80,
                                                                        src: "assets/images/resource/footer2.png",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "recent-post-text",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("h6", {
                                                                        children: /*#__PURE__*/ _jsx("a", {
                                                                            href: "#",
                                                                            children: "Top 10 Most Usefull Google Extansion"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "rcomment",
                                                                        children: "Dec 15, 2023"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "foorer-shape",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "footer-thumb",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/red-dot.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "footer-thumb1 bounce-animate2",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/resource/all-shape.png",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "footer-bottom-area d-flex align-items-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "consen-logo",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        legacyBehavior: true,
                                        href: "/",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            className: "logo_thumb",
                                            title: "consen",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "assets/images/logo.png",
                                                alt: "logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-8",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "footer-bottom-content",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "footer-bottom-content-copy",
                                        children: /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                "\xa9 2023 ",
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "Consen"
                                                }),
                                                " all rights reserved. Design By Dream-IT."
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer1 = ((/* unused pure expression or super */ null && (Footer1)));

;// CONCATENATED MODULE: ./src/layout/footer/Footer3.js

const Footer3 = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "footer-middle new-style",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "footer-bg",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget widgets-company-info mb-4 mb-lg-0",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "footer-new-logo",
                                            children: /*#__PURE__*/ _jsx("img", {
                                                src: "assets/images/logo.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "company-info-desc",
                                            children: /*#__PURE__*/ _jsx("p", {
                                                children: "Energistically repurpose standards services into whereas productivate Rapidiously morph best"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "follow-company-icon",
                                            children: [
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-facebook"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color2",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-instagram",
                                                            children: " "
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color1",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-twitter"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("a", {
                                                    className: "social-icon-color3",
                                                    href: "#",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "bi bi-youtube"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget widget-nav-menu one",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title",
                                            children: "Explor"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "menu-quick-link-content",
                                            children: /*#__PURE__*/ _jsxs("ul", {
                                                className: "footer-menu",
                                                children: [
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " About Us "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Our Service"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Portfolio "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Contact Us "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Career "
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "widget widget-nav-menu",
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "widget-title",
                                            children: " Userful Links "
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "menu-quick-link-content",
                                            children: /*#__PURE__*/ _jsxs("ul", {
                                                className: "footer-menu",
                                                children: [
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Partners "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Testimonials "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Word Process "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " Insights "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: " FAQ "
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    id: "em-recent-post-widget",
                                    className: "mt-5 mt-sm-0",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "single-widget-item",
                                            children: /*#__PURE__*/ _jsx("h4", {
                                                className: "widget-title",
                                                children: "Get In Touch"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "widget-location",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    children: "Contacts"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "+880 392 (4560) 290"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "example@gmail.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "widget-location",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    children: "Locations"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "602/B, Uttara, Sandigo-USA"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "footer-bottom-area d-flex align-items-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "row d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-md-7",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "footer-bottom-content",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "footer-bottom-content-copy",
                                        children: /*#__PURE__*/ _jsx("p", {
                                            children: "Copyright \xa9 Consen all rights reserved."
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "footer-bottom-menu",
                                    children: /*#__PURE__*/ _jsxs("ul", {
                                        children: [
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "Privacy Policy "
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsx("a", {
                                                    href: "#",
                                                    children: "Services"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer3 = ((/* unused pure expression or super */ null && (Footer3)));

;// CONCATENATED MODULE: ./src/layout/footer/Footer.js




const Footer = ({ footer  })=>{
    switch(footer){
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_DefaultFooter, {});
    }
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/layout/header/Menus.js


const Menus_DaskTopMenusMenus = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "nav_scroll",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "/",
                    children: [
                        "Home",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "/about",
                    children: [
                        "About Us",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        children: [
                            "Courses",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-angle-down"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "sub-menus courses-menu-horizontal ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "col",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/arabic",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/2.png",
                                                    alt: "Tajweed",
                                                    width: 200,
                                                    className: "p-20 align-middle justify-center ml-40"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-20 text-center",
                                                    children: "Tajweed Masterclass"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "col",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/quran",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/3.png",
                                                    alt: "",
                                                    width: 200,
                                                    className: "p-20 align-middle justify-center ml-40"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-20 text-center",
                                                    children: "Qur'an Memorization"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "col",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/tajweed",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/img/1.png",
                                                    alt: "",
                                                    width: 200,
                                                    className: "p-20 align-middle justify-center ml-40"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-20 text-center",
                                                    children: "Learn Arabic Language "
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    legacyBehavior: true,
                    href: "/pricing",
                    children: "Pricing"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    legacyBehavior: true,
                    href: "/contact",
                    children: "Contact"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layout/header/DefaultHeader.js



const DefaultHeader = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        id: "sticky-header",
        className: "consen_nav_manu header____",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "logo",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "logo_img",
                                        title: "Al",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/logo.png",
                                            alt: "logo"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "main_sticky",
                                        title: "consen",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "assets/images/logo.png",
                                            alt: "logo",
                                            width: 180
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-9 pl-0 pr-0",
                        children: /*#__PURE__*/ _jsxs("nav", {
                            className: "consen_menu",
                            children: [
                                /*#__PURE__*/ _jsx(DaskTopMenusMenus, {}),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "header-button",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        legacyBehavior: true,
                                        href: "/contact",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            children: "Students Trial"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_DefaultHeader = ((/* unused pure expression or super */ null && (DefaultHeader)));

;// CONCATENATED MODULE: ./src/layout/header/Header2.js




const Header2 = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header_top_menu d-flex align-items-center mt-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row d-flex align-items-cente",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8 col-sm-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header_top_menu_address"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-sm-4 pr-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header_top_menu_icon text-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "FOLLOW US"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header_top_menu_icon_inner",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-dribbble"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bi bi-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "sticky-header",
                className: "consen_nav_manu style-two header____",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row header-bg align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "logo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "logo_img",
                                                title: "consen",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: "logo",
                                                    width: 200
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "main_sticky",
                                                title: "consen",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: "logo",
                                                    width: 200
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-9 pl-0 pr-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "consen_menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Menus_DaskTopMenusMenus, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "",
                                                children: "Request a Quote"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `xs-sidebar-group info-group ${toggle ? "isActive" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "xs-overlay xs-bg-black",
                        onClick: ()=>setToggle(false)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "xs-sidebar-widget",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sidebar-widget-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "widget-heading",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "close-side-widget",
                                        onClick: ()=>setToggle(false),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-times-circle"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sidebar-textwidget",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "sidebar-info-contents",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content-inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "nav-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo.png",
                                                            alt: "logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: "About Us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text",
                                                            children: "The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#",
                                                            className: "theme-btn btn-style-two",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Consultation"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-heart"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "contact-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: "Contact Info"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "list-style-one",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "icon flaticon-email"
                                                                        }),
                                                                        "Chicago 12, Melborne City, USA"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "bi bi-telephone-inbound"
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        "(+001) 123-456-7890"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-geo-alt"
                                                                            })
                                                                        }),
                                                                        "Example @gmail.com"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "bi bi-clock"
                                                                            })
                                                                        }),
                                                                        "Week Days: 09.00 to 18.00 Sunday: Closed"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "social-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-instagram"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "linkedin",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "youtube",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/layout/header/Header.js



const Header = ({ header  })=>{
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header2, {});
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(LandingHeader, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header2, {});
    }
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/header/MobileMenu.js



const MobileMenu = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)("");
    const [subMenus, setSubMenus] = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeBtn = (value)=>value === activeMenu ? "-" : "+", activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        }, setSub = (value, motherMenu)=>motherMenu === activeMenu && value == subMenus ? setSubMenus("") : setSubMenus(value), activeSub = (value)=>value === subMenus ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mobile-menu-area d-sm-block d-md-block d-lg-none header____",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mobile-menu mean-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mean-bar",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#nav",
                            className: `meanmenu-reveal ${toggle ? "meanclose" : ""}`,
                            onClick: ()=>setToggle(!toggle),
                            children: toggle ? "X" : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "mean-nav",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "nav_scroll",
                                style: {
                                    display: toggle ? "block" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "Home "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/about",
                                            children: "About Us "
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "Courses "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "sub-menu",
                                                style: activeLi("Services"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/tajweed",
                                                            children: "Tajweed MasterClass"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/quran",
                                                            children: "Qur'an Memorization"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/arabic",
                                                            children: "Learn Arabic Language"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "mean-expand",
                                                href: "#",
                                                onClick: ()=>activeMenuSet("Services"),
                                                style: {
                                                    fontSize: 18
                                                },
                                                children: activeBtn("Services")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/pricing",
                                            children: "Pricing"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mean-last",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mean-push"
                })
            ]
        })
    });
};
/* harmony default export */ const header_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/layout/ScrollTop.js



const ScrollTop = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* scrollTopFun */.h1)();
    }, []);
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "scroll-area",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "top-wrap",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "go-top-btn-wraper",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "go-top go-top-button",
                    onClick: ()=>scrollTop(),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-arrow-up"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-arrow-up"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_ScrollTop = (ScrollTop);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ children , header , footer  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* animation */.oQ)();
        (0,utils/* stickyNav */.h4)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {
                header: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_MobileMenu, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {
                footer: footer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_ScrollTop, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JV": () => (/* binding */ calender),
/* harmony export */   "h1": () => (/* binding */ scrollTopFun),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".header____");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("sticky");
                } else {
                    stick.classList.remove("sticky");
                }
            }
        }
    });
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
const scrollTopFun = ()=>{
    let scrollUp = document.querySelector(".go-top-button"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st > 110) {
            scrollUp.classList.add("active");
        } else {
            scrollUp.classList.remove("active");
        }
    });
};
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const calender = ()=>{
    var curDate = new Date().getDate();
    var curMonth = new Date().getMonth();
    var curYear = new Date().getFullYear();
    var startDay = new Date(curYear, curMonth, 1).getDay();
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var noofdays = [
        "31",
        "29",
        "31",
        "30",
        "31",
        "30",
        "31",
        "31",
        "30",
        "31",
        "30",
        "31"
    ];
    var prevMonth = noofdays[curMonth - 1];
    if (curMonth == 11) {
        prevMonth = noofdays[0];
    } else if (curMonth == 0) {
        prevMonth = noofdays[11];
    }
    var totalDays = noofdays[curMonth];
    var counter = 0;
    var precounter = prevMonth - (startDay - 1);
    var rightbox = 6;
    var flag = true;
    if (document.querySelector(".curr-month")) {
        document.querySelector(".curr-month b").innerHTML = months[curMonth];
        if (!document.querySelector(".all-date ul li")) {
            for(var i = 0; i < 42; i++){
                if (i >= startDay) {
                    counter++;
                    if (counter > totalDays) {
                        counter = 1;
                        flag = false;
                    }
                    if (flag === true) {
                        document.querySelector(".all-date ul").insertAdjacentHTML("beforeend", '<li class="monthdate">' + counter + "</li>");
                    } else {
                        document.querySelector(".all-date ul").insertAdjacentHTML("beforeend", '<li style="opacity:.8">' + counter + "</li>");
                    }
                } else {
                    document.querySelector(".all-date ul").insertAdjacentHTML("beforeend", '<li style="opacity:.8">' + precounter + "</li>");
                    precounter++;
                }
                if (i == rightbox) {
                    console.log(document.querySelectorAll(".all-date ul li")[rightbox]);
                    document.querySelectorAll(".all-date ul li")[rightbox].classList.add("b-right");
                    rightbox = rightbox + 7;
                }
                if (i > 34) {
                    document.querySelectorAll(".all-date ul li")[i].classList.add("b-bottom");
                }
                if (curDate) {
                    setTimeout(()=>{
                        document.querySelectorAll(".all-date ul li")[curDate + 2].classList.add("current_date");
                    }, 500);
                }
            }
        }
    }
};


/***/ })

};
;