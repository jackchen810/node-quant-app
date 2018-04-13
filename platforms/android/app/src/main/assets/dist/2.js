// { "framework": "Vue"} 

webpackJsonp([2],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(38)
)

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(51)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\prj-nodjs\\node-quant-app\\src\\assets\\views\\topic.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-465fb77c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "113",
    "marginBottom": "90"
  },
  "cell-button": {
    "paddingBottom": "18"
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(3);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(1);

var _refresh2 = _interopRequireDefault(_refresh);

var _Block = __webpack_require__(43);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(47);

var _Block4 = _interopRequireDefault(_Block3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    data: function data() {
        return {
            topics: [],
            articles: []
        };
    },

    components: {
        'header2': _Header2.default,
        'refresher': _refresh2.default,
        'block-4': _Block2.default,
        'block-5': _Block4.default
    },
    created: function created() {
        var _this = this;

        this.GET('api/topic/index', function (res) {
            var result = res.data.result;
            _this.topics = result['topics'];
        });
        this.GET('api/topic/articles', function (res) {
            var result = res.data.result;
            _this.articles = result['articles'];
        });
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        },
        onloadmore: function onloadmore() {
            var _this2 = this;

            setTimeout(function () {
                var _articles;

                (_articles = _this2.articles).push.apply(_articles, _toConsumableArray(_this2.articles));
            }, 100);
        }
    }
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\prj-nodjs\\node-quant-app\\src\\assets\\components\\Block4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-246ae22e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "tp-box": {
    "height": "200",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row"
  },
  "i-tp": {
    "width": "275",
    "height": "150",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "tp-img": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "275",
    "height": "150",
    "borderRadius": "10",
    "backgroundColor": "#f4f4f4"
  },
  "tp-name": {
    "fontSize": "28",
    "marginLeft": "20",
    "marginRight": "20",
    "marginTop": "57",
    "overflow": "hidden",
    "textAlign": "center",
    "color": "#ffffff",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["topics"],
    data: function data() {
        return {};
    },

    methods: {}
};

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["tp-box"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.topics), function(i) {
    return _c('div', {
      staticClass: ["i-tp"]
    }, [_c('image', {
      staticClass: ["tp-img"],
      attrs: {
        "resize": "cover",
        "src": i.img
      }
    }), _c('text', {
      staticClass: ["tp-name"]
    }, [_vm._v(_vm._s(i.name))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\prj-nodjs\\node-quant-app\\src\\assets\\components\\Block5.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2478f9af"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingTop": "15",
    "paddingBottom": "15"
  },
  "auther-box": {
    "height": "75",
    "paddingTop": "10",
    "paddingLeft": "25",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "auther-img": {
    "height": "58",
    "width": "58",
    "borderRadius": "58"
  },
  "auther-name": {
    "flex": 1,
    "fontSize": "26",
    "height": "58",
    "paddingLeft": "20",
    "paddingTop": "10"
  },
  "img-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "main-img": {
    "flex": 1,
    "height": "380"
  },
  "sub-imgs-box": {
    "width": "190",
    "height": "380"
  },
  "sub-img": {
    "height": "188",
    "width": "190",
    "marginLeft": "3",
    "marginBottom": "3"
  },
  "tlt-box": {
    "height": "80",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "tlt": {
    "fontSize": "34",
    "flex": 1,
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "price": {
    "fontSize": "34",
    "color": "#b4282d",
    "paddingLeft": "10"
  },
  "info": {
    "fontSize": "26",
    "paddingLeft": "20",
    "paddingRight": "20",
    "overflow": "hidden",
    "lines": 2,
    "textOverflow": "ellipsis",
    "color": "#666666"
  }
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["article", "url"],
    data: function data() {
        return {};
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        }
    }
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        _vm.jumpWeb(_vm.url)
      }
    }
  }, [_c('div', {
    staticClass: ["auther-box"]
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.autherImg
    }
  }), _c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.article.auther))])]), _c('div', {
    staticClass: ["img-box"]
  }, [(typeof _vm.article.img == 'string') ? [_c('image', {
    staticClass: ["main-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img
    }
  })] : (typeof _vm.article.img == 'object' && _vm.article.img.length >= 3) ? [_c('image', {
    staticClass: ["main-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img[0]
    }
  }), _c('div', {
    staticClass: ["sub-imgs-box"]
  }, [_c('image', {
    staticClass: ["sub-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img[1]
    }
  }), _c('image', {
    staticClass: ["sub-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img[2]
    }
  })])] : _vm._e()], 2), _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.article.tlt))]), (_vm.article.price) ? _c('text', {
    staticClass: ["price"]
  }, [_vm._v(_vm._s(_vm.article.price) + "元起")]) : _vm._e()]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.article.info))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "专题"
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "300"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["cell-button"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('http://m.you.163.com/topic/v1/look/list')
      }
    }
  }, [_c('block-4', {
    attrs: {
      "topics": _vm.topics
    }
  })], 1), _vm._l((_vm.articles), function(ar) {
    return _c('div', {
      staticClass: ["cell-button"]
    }, [_c('block-5', {
      attrs: {
        "article": ar,
        "url": ""
      }
    })], 1)
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

});