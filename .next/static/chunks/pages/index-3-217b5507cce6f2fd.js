(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{7194:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-3",function(){return l(4344)}])},4564:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.suspense=function(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e},s.NoSSR=function(e){let{children:s}=e;return s},(0,l(2648).Z)(l(7294));var a=l(2983)},7645:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){let l=r.default,i={loading:e=>{let{error:s,isLoading:l,pastDelay:a}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=a({},i,e)),i=a({},i,s);let n=i.loader,c=()=>null!=n?n().then(t):Promise.resolve(t(()=>null));return i.loadableGenerated&&delete(i=a({},i,i.loadableGenerated)).loadableGenerated,"boolean"!=typeof i.ssr||i.ssr||(delete i.webpack,delete i.modules),l(a({},i,{loader:c}))};var a=l(6495).Z,i=l(2648).Z;i(l(7294));var r=i(l(4588));function t(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},3644:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var a=(0,l(2648).Z)(l(7294));let i=a.default.createContext(null);s.LoadableContext=i},4588:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=l(932).Z,i=l(6495).Z,r=(0,l(2648).Z)(l(7294)),t=l(4564),n=l(3644);let c=[],d=[],o=!1;function h(e){let s=e(),l={loading:!0,loaded:null,error:null};return l.promise=s.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class m{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:s}=this;e.loading&&("number"==typeof s.delay&&(0===s.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},s.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,s){this._loadFn=e,this._opts=s,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function x(e){return function(e,s){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},s),i=null;function c(){if(!i){let s=new m(e,l);i={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return i.promise()}if(l.lazy=r.default.lazy(a(function*(){if(l.ssr&&i){let e=i.getCurrentValue(),s=yield e.loaded;if(s)return s}return yield l.loader()})),!o){let e=l.webpack?l.webpack():l.modules;e&&d.push(s=>{for(let l of e)if(-1!==s.indexOf(l))return c()})}function h(e){!function(){c();let e=r.default.useContext(n.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(s=>{e(s)})}();let s=l.loading,a=r.default.createElement(s,{isLoading:!0,pastDelay:!0,error:null}),i=l.ssr?r.default.Fragment:t.NoSSR,d=l.lazy;return r.default.createElement(r.default.Suspense,{fallback:a},r.default.createElement(i,null,r.default.createElement(d,Object.assign({},e))))}return h.preload=()=>c(),h.displayName="LoadableComponent",h}(h,e)}function j(e,s){let l=[];for(;e.length;){let a=e.pop();l.push(a(s))}return Promise.all(l).then(()=>{if(e.length)return j(e,s)})}x.preloadAll=()=>new Promise((e,s)=>{j(c).then(e,s)}),x.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(s=>{let l=()=>(o=!0,s());j(d,e).then(l,l)})},window.__NEXT_PRELOADREADY=x.preloadReady,s.default=x},4344:function(e,s,l){"use strict";l.r(s);var a=l(5893),i=l(9925),r=l(4264),t=l(7717),n=l(9698),c=l(8544),d=l(5152),o=l.n(d),h=l(1664),m=l.n(h),x=l(2546);let j=o()(()=>Promise.all([l.e(391),l.e(83)]).then(l.bind(l,83)),{loadableGenerated:{webpack:()=>[83]},ssr:!1}),u=()=>(0,a.jsxs)(n.Z,{header:3,footer:3,children:[(0,a.jsxs)(x.tq,{...c.rm,className:"banner-list",children:[(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"banner-area d-flex align-items-center",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-lg-7 col-md-12",children:[(0,a.jsxs)("div",{className:"banner-content",children:[(0,a.jsx)("h3",{children:" FOR YOUR BUSINES SOLUTIONS"}),(0,a.jsx)("h1",{children:" Recruit the Best"}),(0,a.jsx)("h1",{children:" Employees"}),(0,a.jsx)("p",{children:" Shared time the best human Resource Management "})]}),(0,a.jsx)("div",{className:"banner-button",children:(0,a.jsx)(m(),{legacyBehavior:!0,href:"/service",children:(0,a.jsx)("a",{children:" Discover More "})})})]}),(0,a.jsxs)("div",{className:"col-lg-5 col-md-6 ",children:[(0,a.jsx)("div",{className:"banner-year-thumb rotateme",children:(0,a.jsx)("img",{src:"assets/images/slider/banner-sp.png",alt:!0})}),(0,a.jsx)("div",{className:"banner-thumb",children:(0,a.jsx)("img",{src:"assets/images/slider/banner-img.png",alt:!0})})]})]})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"banner-area style-two d-flex align-items-center",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-lg-7 col-md-12",children:[(0,a.jsxs)("div",{className:"banner-content",children:[(0,a.jsx)("h3",{children:" FOR YOUR BUSINES SOLUTIONS"}),(0,a.jsx)("h1",{children:" Recruit the Best"}),(0,a.jsx)("h1",{children:" Employees"}),(0,a.jsx)("p",{children:" Shared time the best human Resource Management "})]}),(0,a.jsx)("div",{className:"banner-button",children:(0,a.jsx)(m(),{legacyBehavior:!0,href:"/service",children:(0,a.jsx)("a",{children:" Discover More "})})})]}),(0,a.jsxs)("div",{className:"col-lg-5 col-md-6 ",children:[(0,a.jsx)("div",{className:"banner-year-thumb rotateme",children:(0,a.jsx)("img",{src:"assets/images/slider/banner-sp.png",alt:!0})}),(0,a.jsx)("div",{className:"banner-thumb",children:(0,a.jsx)("img",{src:"assets/images/slider/banner-img2.png",alt:!0})})]})]})})})})]}),(0,a.jsx)("div",{className:"feature-area new-style",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"single-feature",children:[(0,a.jsx)("div",{className:"single-feature-icon",children:(0,a.jsx)("img",{src:"assets/images/resource/fv1.png",alt:!0})}),(0,a.jsxs)("div",{className:"single-feature-content",children:[(0,a.jsx)("h3",{children:"01"}),(0,a.jsx)("h2",{children:"Live Chat Platforms"})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"single-feature",children:[(0,a.jsx)("div",{className:"single-feature-icon",children:(0,a.jsx)("img",{src:"assets/images/resource/fv2.png",alt:!0})}),(0,a.jsxs)("div",{className:"single-feature-content",children:[(0,a.jsx)("h3",{children:"02"}),(0,a.jsx)("h2",{children:"Ask Now Professionals"})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"single-feature",children:[(0,a.jsx)("div",{className:"single-feature-icon",children:(0,a.jsx)("img",{src:"assets/images/resource/fv3.png",alt:!0})}),(0,a.jsxs)("div",{className:"single-feature-content",children:[(0,a.jsx)("h3",{children:"03"}),(0,a.jsx)("h2",{children:"Get Technical Supports"})]})]})})]})})}),(0,a.jsx)("div",{className:"about-area new-style",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"about-thumb",children:(0,a.jsx)("img",{src:"assets/images/about/about3.png",alt:!0})})}),(0,a.jsxs)("div",{className:"col-lg-6",children:[(0,a.jsxs)("div",{className:"consen-section-title",children:[(0,a.jsx)("h5",{children:" ABOUT OUR COMPANY"}),(0,a.jsx)("h2",{children:" We Execuite Our Ideas From"}),(0,a.jsxs)("h2",{children:[" ","The Start to ",(0,a.jsx)("span",{children:" Finishes "})]}),(0,a.jsxs)("p",{className:"about-text2 pt-3",children:[" ","Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override digital divide with additional clickthroughs"]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-8",children:[(0,a.jsxs)("div",{className:"about-icon-box pt-3",children:[(0,a.jsx)("div",{className:"about-icon-thumb",children:(0,a.jsx)("img",{src:"assets/images/about/ab1.png",alt:!0})}),(0,a.jsxs)("div",{className:"about-box-content",children:[(0,a.jsx)("h2",{children:"Manage Tech Services"}),(0,a.jsx)("p",{children:"Ballpark value added activity to the override digital divide with"})]})]}),(0,a.jsxs)("div",{className:"about-icon-box border-non",children:[(0,a.jsx)("div",{className:"about-icon-thumb",children:(0,a.jsx)("img",{src:"assets/images/about/ab2.png",alt:!0})}),(0,a.jsxs)("div",{className:"about-box-content",children:[(0,a.jsx)("h2",{children:"Worldwide Networks"}),(0,a.jsx)("p",{children:"Ballpark value added activity to the override digital divide with"})]})]})]}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"awoard-thumb pt-3",children:(0,a.jsx)("img",{src:"assets/images/about/awoard.jpg",alt:!0})})})]}),(0,a.jsx)("div",{className:"abouts-button",children:(0,a.jsx)("div",{className:"new-button",children:(0,a.jsx)(m(),{legacyBehavior:!0,href:"/about",children:(0,a.jsx)("a",{children:"Discover More"})})})})]})]})})}),(0,a.jsx)("div",{className:"service-area new-style",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"consen-section-title upper text-center mb-40",children:[(0,a.jsx)("h5",{children:" OUR SERVICES"}),(0,a.jsx)("h2",{children:" Amazing IT Solutions we Provide"}),(0,a.jsxs)("h2",{children:[" ","That We ",(0,a.jsx)("span",{children:" Stand Behind "})]})]})})}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"single-service-box",children:[(0,a.jsx)("div",{className:"service-box-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/sr1.jpg",alt:!0})}),(0,a.jsx)("div",{className:"service-icon-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/srv1.png",alt:!0})}),(0,a.jsxs)("div",{className:"service-content",children:[(0,a.jsx)("h2",{children:"Product Development"}),(0,a.jsx)("p",{children:"Capitalize low hanging fruit to identify beta test. Override digital"}),(0,a.jsx)(m(),{legacyBehavior:!0,href:"/service",children:(0,a.jsx)("a",{children:"Read More"})})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"single-service-box",children:[(0,a.jsx)("div",{className:"service-box-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/sr2.jpg",alt:!0})}),(0,a.jsx)("div",{className:"service-icon-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/srv2.png",alt:!0})}),(0,a.jsxs)("div",{className:"service-content",children:[(0,a.jsx)("h2",{children:"Marketing Strategy"}),(0,a.jsx)("p",{children:"Capitalize low hanging fruit to identify beta test. Override digital"}),(0,a.jsx)(m(),{legacyBehavior:!0,href:"/service",children:(0,a.jsx)("a",{children:"Read More"})})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"single-service-box",children:[(0,a.jsx)("div",{className:"service-box-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/sr3.jpg",alt:!0})}),(0,a.jsx)("div",{className:"service-icon-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/srv3.png",alt:!0})}),(0,a.jsxs)("div",{className:"service-content",children:[(0,a.jsx)("h2",{children:"Corporate Solutions"}),(0,a.jsx)("p",{children:"Capitalize low hanging fruit to identify beta test. Override digital"}),(0,a.jsx)(m(),{legacyBehavior:!0,href:"/service",children:(0,a.jsx)("a",{children:"Read More"})})]})]})})]})]})}),(0,a.jsx)("div",{className:"skill-area style-two",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsxs)("div",{className:"extra-animation-div",children:[(0,a.jsxs)("div",{className:"consen-section-title white",children:[(0,a.jsx)("h5",{children:"POPULAR SKILLS"}),(0,a.jsx)("h2",{children:" We Are Professionals And "}),(0,a.jsxs)("h2",{children:[" ","more ",(0,a.jsx)("span",{children:"Experiences"})]})]}),(0,a.jsx)("div",{className:"dreamit-smart-title pt-2",children:(0,a.jsx)("p",{className:"slill-text",children:"Continually generate 2.0 communities and client-focused products. In synergize strategic manufactured products whereas levera."})})]}),(0,a.jsx)(t.Z,{})]}),(0,a.jsx)("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1",children:[(0,a.jsx)("img",{src:"assets/images/resource/skill.png",alt:!0}),(0,a.jsx)("div",{className:"skill-thumb-content",children:(0,a.jsxs)("div",{className:"skill-title",children:[(0,a.jsxs)("h3",{className:"counter",children:[" ",(0,a.jsx)(i.Z,{end:17})," "]}),(0,a.jsx)("span",{children:"+"}),(0,a.jsx)("h5",{children:" YEARS EXPERIENCE "})]})})]})})]})})}),(0,a.jsx)("div",{className:"call-do-action-area",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-lg-12",children:[(0,a.jsxs)("div",{className:"consen-section-title white upper text-center mb-40",children:[(0,a.jsx)("h5",{children:" CONACT US"}),(0,a.jsx)("h2",{children:" High Quality Services And Products"}),(0,a.jsxs)("h2",{children:[" ","That We Stand ",(0,a.jsx)("span",{children:" Behind "})]})]}),(0,a.jsx)("div",{className:"new-button text-center",children:(0,a.jsx)(m(),{legacyBehavior:!0,href:"/contact",children:(0,a.jsx)("a",{children:"Contact US Now"})})})]})})})}),(0,a.jsx)("div",{className:"portfolio-area",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)(j,{})})}),(0,a.jsx)("div",{className:"testimonial-area new-style",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-6",children:[(0,a.jsxs)("div",{className:"consen-section-title pb-40",children:[(0,a.jsx)("h5",{children:"TESTIMONIALS"}),(0,a.jsx)("h2",{children:" What Say Customers "}),(0,a.jsxs)("h2",{children:[" ","About ",(0,a.jsx)("span",{children:"Company"})]})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"testi_list owl-carousel",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"single-testimonial",children:[(0,a.jsx)("div",{className:"testimonial-icon-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/testi-icon.png",alt:!0})}),(0,a.jsxs)("div",{className:"testimonial-ratting",children:[(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"far fa-star"})]}),(0,a.jsxs)("div",{className:"testimonial-content",children:[(0,a.jsx)("div",{className:"testimonial-text",children:(0,a.jsx)("p",{children:"Proactively leverage existing robust imperatives standards compliant this paradigms. Competently formulate excellent experiences withoutlicks-and it mortar methodologies. Seamlessly enhance technically sound e-business tactical communities holisticly coordinate."})}),(0,a.jsxs)("div",{className:"testimonial-title",children:[(0,a.jsx)("h2",{children:"John M. Alexon"}),(0,a.jsx)("span",{children:"UX Designer"})]})]})]})})})})]}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"testimonial-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/testi-img.png",alt:!0})})})]})})}),(0,a.jsx)("div",{className:"faq-area new-style",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6"}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"tab_container",children:[(0,a.jsxs)("div",{className:"consen-section-title white pb-40 mb-1",children:[(0,a.jsx)("h5",{children:" FREEQUENTLY ASKED QUESTION "}),(0,a.jsxs)("h2",{children:[" ","Freequently Asked ",(0,a.jsx)("span",{children:" Question "})]})]}),(0,a.jsx)(r.Z,{})]})})]})})}),(0,a.jsx)("div",{className:"brand-section new-style",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)(x.tq,{...c.Gy,className:"brand-list2 owl-carousel",children:[(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br1.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br2.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br3.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br4.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br1.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br2.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br3.png",alt:!0})})})}),(0,a.jsx)(x.o5,{children:(0,a.jsx)("div",{className:"brand-single-box",children:(0,a.jsx)("div",{className:"brand-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/br4.png",alt:!0})})})})]})})})}),(0,a.jsx)("div",{className:"blog-area new-style",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row align-items-center mb-40",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"consen-section-title upper text-center",children:[(0,a.jsx)("h5",{children:"NEWS & BLOGS"}),(0,a.jsx)("h2",{children:" Latest Blogs Post "})]})})}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)(x.tq,{...c.v3,className:"blog-list owl-carousel",children:[(0,a.jsx)(x.o5,{children:(0,a.jsxs)("div",{className:"single-blog-box",children:[(0,a.jsxs)("div",{className:"single-blog-thumb",children:[(0,a.jsx)("img",{src:"assets/images/resource/bl1.jpg",alt:!0}),(0,a.jsx)("div",{className:"blog-top-button",children:(0,a.jsx)("a",{href:"#",children:" GRAPHIC "})})]}),(0,a.jsxs)("div",{className:"em-blog-content",children:[(0,a.jsxs)("div",{className:"meta-blog-text",children:[(0,a.jsx)("a",{href:"#",children:"Consen"}),(0,a.jsx)("span",{children:"August 25, 2023"})]}),(0,a.jsx)("div",{className:"em-blog-title",children:(0,a.jsxs)("h2",{children:[" ",(0,a.jsx)(m(),{legacyBehavior:!0,href:"/blog-details",children:(0,a.jsxs)("a",{children:["7+ Use Artificial Intelligence that will blow mind"," "]})})," "]})}),(0,a.jsx)("div",{className:"em-blog-text",children:(0,a.jsxs)("p",{children:["There are many variations of passages of Lorem Ipsum available, but the"," "]})})]})]})}),(0,a.jsx)(x.o5,{children:(0,a.jsxs)("div",{className:"single-blog-box",children:[(0,a.jsxs)("div",{className:"single-blog-thumb",children:[(0,a.jsx)("img",{src:"assets/images/resource/bl2.jpg",alt:!0}),(0,a.jsx)("div",{className:"blog-top-button",children:(0,a.jsx)("a",{href:"#",children:" DEVELOPMENT "})})]}),(0,a.jsxs)("div",{className:"em-blog-content",children:[(0,a.jsxs)("div",{className:"meta-blog-text",children:[(0,a.jsx)("a",{href:"#",children:"Consen"}),(0,a.jsx)("span",{children:"August 18, 2023"})]}),(0,a.jsx)("div",{className:"em-blog-title",children:(0,a.jsxs)("h2",{children:[" ",(0,a.jsx)(m(),{legacyBehavior:!0,href:"/blog-details",children:(0,a.jsx)("a",{children:"Grow your appraisal skills and real estate career?"})})," "]})}),(0,a.jsx)("div",{className:"em-blog-text",children:(0,a.jsxs)("p",{children:["There are many variations of passages of Lorem Ipsum available, but the"," "]})})]})]})}),(0,a.jsx)(x.o5,{children:(0,a.jsxs)("div",{className:"single-blog-box",children:[(0,a.jsxs)("div",{className:"single-blog-thumb",children:[(0,a.jsx)("img",{src:"assets/images/resource/bl3.jpg",alt:!0}),(0,a.jsx)("div",{className:"blog-top-button",children:(0,a.jsx)("a",{href:"#",children:" DESIGN "})})]}),(0,a.jsxs)("div",{className:"em-blog-content",children:[(0,a.jsxs)("div",{className:"meta-blog-text",children:[(0,a.jsx)("a",{href:"#",children:"Consen"}),(0,a.jsx)("span",{children:"August 14, 2023"})]}),(0,a.jsx)("div",{className:"em-blog-title",children:(0,a.jsxs)("h2",{children:[" ",(0,a.jsx)(m(),{legacyBehavior:!0,href:"/blog-details",children:(0,a.jsx)("a",{children:" 29 Real Estate Blogs Every Realtor Should Read"})})]})}),(0,a.jsx)("div",{className:"em-blog-text",children:(0,a.jsxs)("p",{children:["There are many variations of passages of Lorem Ipsum available, but the"," "]})})]})]})}),(0,a.jsx)(x.o5,{children:(0,a.jsxs)("div",{className:"single-blog-box",children:[(0,a.jsxs)("div",{className:"single-blog-thumb",children:[(0,a.jsx)("img",{src:"assets/images/resource/bl1.jpg",alt:!0}),(0,a.jsx)("div",{className:"blog-top-button",children:(0,a.jsx)("a",{href:"#",children:" GRAPHIC "})})]}),(0,a.jsxs)("div",{className:"em-blog-content",children:[(0,a.jsxs)("div",{className:"meta-blog-text",children:[(0,a.jsx)("a",{href:"#",children:"Consen"}),(0,a.jsx)("span",{children:"August 25, 2023"})]}),(0,a.jsx)("div",{className:"em-blog-title",children:(0,a.jsxs)("h2",{children:[" ",(0,a.jsx)(m(),{legacyBehavior:!0,href:"/blog-details",children:(0,a.jsxs)("a",{children:["7+ Use Artificial Intelligence that will blow mind"," "]})})," "]})}),(0,a.jsx)("div",{className:"em-blog-text",children:(0,a.jsxs)("p",{children:["There are many variations of passages of Lorem Ipsum available, but the"," "]})})]})]})}),(0,a.jsx)(x.o5,{children:(0,a.jsxs)("div",{className:"single-blog-box",children:[(0,a.jsxs)("div",{className:"single-blog-thumb",children:[(0,a.jsx)("img",{src:"assets/images/resource/bl3.jpg",alt:!0}),(0,a.jsx)("div",{className:"blog-top-button",children:(0,a.jsx)("a",{href:"#",children:" DESIGN "})})]}),(0,a.jsxs)("div",{className:"em-blog-content",children:[(0,a.jsxs)("div",{className:"meta-blog-text",children:[(0,a.jsx)("a",{href:"#",children:"Consen"}),(0,a.jsx)("span",{children:"August 14, 2023"})]}),(0,a.jsx)("div",{className:"em-blog-title",children:(0,a.jsxs)("h2",{children:[" ",(0,a.jsx)(m(),{legacyBehavior:!0,href:"/blog-details",children:(0,a.jsx)("a",{children:" 29 Real Estate Blogs Every Realtor Should Read"})})]})}),(0,a.jsx)("div",{className:"em-blog-text",children:(0,a.jsxs)("p",{children:["There are many variations of passages of Lorem Ipsum available, but the"," "]})})]})]})}),(0,a.jsx)(x.o5,{children:(0,a.jsxs)("div",{className:"single-blog-box",children:[(0,a.jsxs)("div",{className:"single-blog-thumb",children:[(0,a.jsx)("img",{src:"assets/images/resource/bl2.jpg",alt:!0}),(0,a.jsx)("div",{className:"blog-top-button",children:(0,a.jsx)("a",{href:"#",children:" DEVELOPMENT "})})]}),(0,a.jsxs)("div",{className:"em-blog-content",children:[(0,a.jsxs)("div",{className:"meta-blog-text",children:[(0,a.jsx)("a",{href:"#",children:"Consen"}),(0,a.jsx)("span",{children:"August 18, 2023"})]}),(0,a.jsx)("div",{className:"em-blog-title",children:(0,a.jsxs)("h2",{children:[" ",(0,a.jsx)(m(),{legacyBehavior:!0,href:"/blog-details",children:(0,a.jsx)("a",{children:"Grow your appraisal skills and real estate career?"})})," "]})}),(0,a.jsx)("div",{className:"em-blog-text",children:(0,a.jsxs)("p",{children:["There are many variations of passages of Lorem Ipsum available, but the"," "]})})]})]})})]})})]})}),(0,a.jsx)("div",{className:"subscribes-area new-style",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row sub-bgmn align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-6 p-0",children:(0,a.jsx)("div",{className:"sub-left-thumb",children:(0,a.jsx)("img",{src:"assets/images/resource/sub-img.jpg",alt:!0})})}),(0,a.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,a.jsxs)("div",{className:"subscribe-right-bx",children:[(0,a.jsx)("div",{className:"subscribe-title",children:(0,a.jsx)("h1",{children:"Subscribe our Newsletter"})}),(0,a.jsx)("form",{onSubmit:e=>e.preventDefault(),action:"https://formspree.io/f/myyleorq",method:"POST",id:"dreamit-form",children:(0,a.jsxs)("div",{className:"subscribe_form",children:[(0,a.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",required:!0,"data-error":"Please enter your email",placeholder:"Enter Your Email"}),(0,a.jsx)("button",{type:"submit",className:"btn",children:"Subscribe"})]})}),(0,a.jsx)("div",{id:"status"})]})}),(0,a.jsx)("div",{className:"col-lg-2"})]})})})]});s.default=u},9925:function(e,s,l){"use strict";var a=l(5893),i=l(7857),r=l(3082),t=l.n(r);let n=e=>{let{end:s,decimals:l,tag:r}=e;return(0,a.jsx)(i.ZP,{end:s||100,duration:3,decimals:l||0,children:e=>{let{countUpRef:l,start:i}=e;return(0,a.jsx)(t(),{onChange:i,delayedCall:!0,children:(0,a.jsx)("em",{className:"counter","data-from":"0","data-to":s,ref:l,children:"count"})})}})};s.Z=n},4264:function(e,s,l){"use strict";var a=l(5893),i=l(7294),r=l(7691);let t=[{id:1,title:"Is the class schedule suitable for me?",content:"Yes, our class schedule is flexible, allowing you to choose times that work best for you."},{id:2,title:"How do I begin?",content:"Simply register on our website, and you'll receive an email with all the details to get started."},{id:3,title:"Are these classes pre-recorded?",content:"No, all our classes are live, offering real-time interaction with instructors."},{id:4,title:"Where is the headquarter of your business?",content:"Our headquarters are located in Coimbatore, India, but we operate globally."}],n=()=>{let[e,s]=(0,i.useState)(t[0].id);return(0,a.jsx)("div",{id:"tab1",className:"tab_content",children:(0,a.jsx)(r.Z,{defaultActiveKey:t[0].id,as:"ul",className:"accordion",children:t.map(l=>(0,a.jsxs)("li",{children:[(0,a.jsx)(r.Z.Toggle,{as:"a",eventKey:l.id,onClick:()=>s(l.id==e?null:l.id),className:l.id==e?"active":"",children:(0,a.jsxs)("span",{children:[" ",l.title," "]})}),(0,a.jsx)(r.Z.Collapse,{eventKey:l.id,children:(0,a.jsx)("p",{children:l.content})})]},l.id))})})};s.Z=n},7717:function(e,s,l){"use strict";var a=l(5893);let i=()=>(0,a.jsxs)("div",{className:"prossess-ber-plugin pt-20",children:[(0,a.jsx)("span",{className:"prosses-bar",children:"Business Strategy"}),(0,a.jsxs)("div",{id:"bar1",className:"barfiller",children:[(0,a.jsx)("div",{className:"tipWrap",style:{display:"inline"},children:(0,a.jsx)("span",{className:"tip",style:{left:"65%",transition:"left 7s ease-in-out 0s"},children:"65%"})}),(0,a.jsx)("span",{className:"fill","data-percentage":65,style:{background:"rgb(22, 181, 151)",width:"65%",transition:"width 7s ease-in-out 0s"}})]}),(0,a.jsx)("span",{className:"prosses-bar",children:"Technology Consulting"}),(0,a.jsxs)("div",{id:"bar2",className:"barfiller",children:[(0,a.jsx)("div",{className:"tipWrap",style:{display:"inline"},children:(0,a.jsx)("span",{className:"tip",style:{left:"90%",transition:"left 7s ease-in-out 0s"},children:"90%"})}),(0,a.jsx)("span",{className:"fill my-class","data-percentage":90,style:{background:"rgb(22, 181, 151)",width:"90%",transition:"width 7s ease-in-out 0s"}})]}),(0,a.jsx)("span",{className:"prosses-bar",children:"Product Development"}),(0,a.jsxs)("div",{id:"bar3",className:"barfiller",children:[(0,a.jsx)("div",{className:"tipWrap",style:{display:"inline"},children:(0,a.jsx)("span",{className:"tip",style:{left:"80%",transition:"left 7s ease-in-out 0s"},children:"80%"})}),(0,a.jsx)("span",{className:"fill my-class2","data-percentage":80,style:{background:"rgb(22, 181, 151)",width:"80%",transition:"width 7s ease-in-out 0s"}})]})]});s.Z=i},8544:function(e,s,l){"use strict";l.d(s,{Gy:function(){return r},Il:function(){return i},rm:function(){return n},v3:function(){return t}});var a=l(9360);a.ZP.use([a.Gk,a.tl,a.W_,a.xW,a.pt,a.rj,a.gI,a.oM]);let i={loop:!0,autoplay:!0,speed:500,breakpoints:{0:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3,spaceBetween:30},992:{slidesPerView:5,spaceBetween:30}}},r={loop:!0,autoplay:!0,speed:500,breakpoints:{0:{slidesPerView:1,spaceBetween:30},400:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3,spaceBetween:30},992:{slidesPerView:4,spaceBetween:30}}},t={loop:!0,autoplay:!0,speed:500,pagination:{el:".owl-dots",clickable:!0},breakpoints:{0:{slidesPerView:1,spaceBetween:30},768:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:30}}},n={loop:!0,autoplay:!0,speed:500}},5152:function(e,s,l){e.exports=l(7645)}},function(e){e.O(0,[664,829,691,655,698,774,888,179],function(){return e(e.s=7194)}),_N_E=e.O()}]);