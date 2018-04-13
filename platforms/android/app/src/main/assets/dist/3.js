// { "framework": "Vue"} 

webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zwwill on 2017/8/27.
 */

var utilFunc = {
    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        });
    },
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = './index.html?page=';
        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

exports.default = utilFunc;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(34)
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
__vue_options__.__file = "E:\\prj-nodjs\\node-quant-app\\src\\assets\\views\\my.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43df3029"
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

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "fbs": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "1000",
    "marginBottom": "-1000"
  },
  "scroller": {
    "marginBottom": "90"
  },
  "ml-ipx": {
    "marginBottom": "140"
  },
  "cell-button": {
    "marginBottom": "18"
  },
  "header": {
    "height": "380"
  },
  "h-ipx": {
    "height": "420"
  },
  "header-bg": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "500",
    "width": "750"
  },
  "bg2": {
    "top": "500"
  },
  "bg3": {
    "top": "1000"
  },
  "i-photo": {
    "position": "absolute",
    "bottom": "60",
    "left": "30",
    "height": "130",
    "width": "130",
    "borderRadius": "130"
  },
  "i-name": {
    "position": "absolute",
    "bottom": "120",
    "left": "190",
    "height": "50",
    "width": "300",
    "fontSize": "38",
    "color": "#ffffff"
  },
  "b-tlt": {
    "position": "absolute",
    "bottom": "70",
    "left": "190",
    "height": "40",
    "width": "350",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "i-tag": {
    "width": "30",
    "height": "30",
    "fontSize": "24",
    "paddingTop": "2",
    "marginRight": "6",
    "borderRadius": "4"
  },
  "tag-e": {
    "width": "32",
    "height": "32"
  },
  "tag-v8": {
    "color": "#ffffff",
    "backgroundColor": "#b29e75",
    "textAlign": "center"
  },
  "txt-tag": {
    "color": "#b4a078",
    "flex": 1,
    "height": "40",
    "fontSize": "28",
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "b-qrcode": {
    "position": "absolute",
    "bottom": "80",
    "right": "40",
    "height": "80",
    "width": "80",
    "borderRadius": "70",
    "textAlign": "center",
    "fontSize": "40",
    "paddingTop": "18",
    "color": "#ffffff",
    "backgroundColor": "rgba(255,255,255,0.3)"
  },
  "s-box": {
    "paddingLeft": "26",
    "backgroundColor": "#ffffff"
  },
  "box-tlt": {
    "height": "94"
  },
  "box-txt": {
    "fontSize": "26",
    "paddingTop": "34",
    "color": "#333333"
  },
  "i-box-in": {
    "position": "absolute",
    "top": "34",
    "right": "30",
    "color": "#333333"
  },
  "box-line": {
    "height": "132",
    "display": "flex",
    "paddingRight": "30",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "i-box-l": {
    "width": "130",
    "height": "132"
  },
  "i-box-icon": {
    "fontSize": "50",
    "textAlign": "center",
    "paddingTop": "15",
    "height": "79",
    "paddingBottom": "10",
    "color": "#666666"
  },
  "i-box-tlt": {
    "fontSize": "26",
    "textAlign": "center",
    "color": "#666666"
  },
  "line-serve": {
    "paddingTop": "20",
    "height": "150"
  },
  "border-bottom": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(0,0,0,0.15)"
  },
  "i-c-orange": {
    "color": "#ff744d"
  },
  "i-c-yellow": {
    "color": "#f6a121"
  },
  "i-c-blue": {
    "color": "#689de5"
  }
}

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Header = __webpack_require__(31);

var _Header2 = _interopRequireDefault(_Header);

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


var navigator = weex.requireModule('navigator');
var binding = weex.requireModule('bindingx');
exports.default = {
    data: function data() {
        return {};
    },

    components: {
        'header5': _Header2.default
    },
    mounted: function mounted() {
        this.headerBgBinding();
    },
    beforeDestroy: function beforeDestroy() {
        this.headerBgBindingDestory();
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        },
        jumpNative: function jumpNative(_url) {
            navigator.push({
                url: _url,
                animated: "true"
            });
        },
        headerBgBinding: function headerBgBinding() {

            var self = this,
                scroller = self.$refs.contentScroller.ref,
                headerBg = self.$refs.headerBg.ref;

            var bindingResult = binding && binding.bind({
                eventType: 'scroll',
                anchor: scroller,
                props: [{
                    element: headerBg,
                    property: 'transform.scale',
                    expression: {
                        origin: 'y<0?(1-y/500):(1+y/500)'
                    }
                }, {
                    element: headerBg,
                    property: 'transform.translateY',
                    expression: {
                        origin: '-y/2'
                    }
                }]
            }, function (e) {});
            self.gesToken = bindingResult.token;
        },
        headerBgBindingDestory: function headerBgBindingDestory() {
            var self = this;
            if (self.gesToken != 0) {
                binding.unbind({
                    eventType: 'scroll',
                    token: self.gesToken
                });
                self.gesToken = 0;
            }
        }
    }
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* template */
var __vue_template__ = __webpack_require__(33)
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
__vue_options__.__file = "E:\\prj-nodjs\\node-quant-app\\src\\assets\\components\\Header4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9decfb20"
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

/***/ 32:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "0",
    "paddingTop": "44",
    "display": "flex",
    "backgroundColor": "#000000",
    "opacity": 0
  }
}

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('header5'), _c('image', {
    ref: "headerBg",
    staticClass: ["header-bg"],
    attrs: {
      "resize": "cover",
      "src": "http://cdn.zwwill.com/yanxuan/imgs/bg5.png"
    }
  }), _c('scroller', {
    ref: "contentScroller",
    class: ['scroller', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : ''],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    class: ['header', _vm.isIpx && _vm.isIpx() ? 'h-ipx' : ''],
    on: {
      "click": function($event) {
        _vm.jumpWeb('http://m.you.163.com/ucenter')
      }
    }
  }, [_c('image', {
    staticClass: ["i-photo"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/885e3901d0a3501362530435d76bebb3.jpg"
    }
  }), _c('text', {
    staticClass: ["i-name"]
  }, [_vm._v("zwwill7")]), _vm._m(0), _c('text', {
    staticClass: ["b-qrcode", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["fbs"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["box-line", "line-serve", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://id.163.com/gj/m/')
      }
    }
  }, [_vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)]), _c('div', {
    staticClass: ["box-line", "line-serve", "border-bottom"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('https://gj.reg.163.com/faq/')
      }
    }
  }, [_vm._m(7), _vm._m(8), _vm._m(9), _vm._m(10)]), _c('div', {
    staticClass: ["box-line", "line-serve"],
    on: {
      "click": function($event) {
        _vm.jumpWeb('http%3A%2F%2Fm.you.163.com%2Fhelp%23%2F%3F_k%3Dyn4ucc')
      }
    }
  }, [_vm._m(11), _vm._m(12), _vm._m(13), _vm._m(14)])]), _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_vm._m(15), _c('div', {
    staticClass: ["box-line", "line-serve"]
  }, [_c('div', {
    staticClass: ["i-box-l"],
    on: {
      "click": function($event) {
        _vm.jumpNative('http://cdn.zwwill.com/justdo8/jsbundles/index.js')
      }
    }
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"],
    staticStyle: {
      color: "#00ad00"
    }
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("Just Do 8")])])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b-tlt"]
  }, [_c('image', {
    staticClass: ["i-tag", "tag-e"],
    attrs: {
      "resize": "contain",
      "src": "http://yanxuan.nosdn.127.net/3dc6e876620bb84a5dac3deb6ecd4916.png"
    }
  }), _c('text', {
    staticClass: ["i-tag", "tag-v8", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt-tag"]
  }, [_vm._v("品质生活家")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["s-box", "cell-button"]
  }, [_c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("我的订单")]), _c('text', {
    staticClass: ["i-box-in", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["box-line"]
  }, [_c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("待付款")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("待发货")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("已发货")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("待评价")])]), _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("退换/售后")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"]
  }, [_vm._v("我的服务")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("拼团订单")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("邀请好友")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("优惠券")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("优先购")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("礼品卡")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("会员")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-orange"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("足迹")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-yellow"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("收藏")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("客服")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("帮助")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["i-box-l"]
  }, [_c('text', {
    staticClass: ["i-box-icon", "iconfont", "i-c-blue"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["i-box-tlt"]
  }, [_vm._v("设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box-tlt", "border-bottom"]
  }, [_c('text', {
    staticClass: ["box-txt"],
    staticStyle: {
      color: "#f00"
    }
  }, [_vm._v("Weex项目外链「可能一去无回，慎入」")])])
}]}
module.exports.render._withStripped = true

/***/ })

});