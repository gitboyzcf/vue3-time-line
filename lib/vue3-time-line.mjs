(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".windowListItem[data-v-35f19113]{width:100%;height:30px;position:relative;border-bottom:1px solid rgb(153,153,153);-webkit-user-select:none;user-select:none}.windowListItem.active[data-v-35f19113]{background-color:var(--427ddd57)}.windowListItem .order[data-v-35f19113]{position:absolute;width:30px;height:30px;display:flex;justify-content:center;align-items:center;color:#fff;border-right:1px solid rgb(153,153,153)}.timeLineContainer[data-v-55d6c60f]{width:100%;height:100%;cursor:pointer;display:flex;flex-direction:column}.timeLineContainer .canvas[data-v-55d6c60f]{flex-grow:0;flex-shrink:0}.timeLineContainer .windowList[data-v-55d6c60f]{width:100%;height:100%;overflow:auto;overflow-x:hidden;border-top:1px solid rgb(153,153,153);display:flex;flex-direction:column}.timeLineContainer .windowList[data-v-55d6c60f]::-webkit-scrollbar{display:none}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { useCssVars as De, ref as ce, reactive as Te, onMounted as Me, openBlock as le, createElementBlock as de, normalizeClass as Le, createElementVNode as ge, toDisplayString as Ce, nextTick as ye, computed as oe, watch as Oe, onBeforeUnmount as Ie, normalizeStyle as Re, withModifiers as ke, Fragment as He, renderList as Ye, createBlock as Ze, createCommentVNode as Ee } from "vue";
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Se = { exports: {} };
(function(a, Y) {
  (function(W, n) {
    a.exports = n();
  })(We, function() {
    var W = 1e3, n = 6e4, O = 36e5, k = "millisecond", L = "second", p = "minute", e = "hour", g = "day", b = "week", I = "month", te = "quarter", Z = "year", B = "date", D = "Invalid Date", N = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, H = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(l) {
      var s = ["th", "st", "nd", "rd"], i = l % 100;
      return "[" + l + (s[(i - 20) % 10] || s[i] || s[0]) + "]";
    } }, E = function(l, s, i) {
      var u = String(l);
      return !u || u.length >= s ? l : "" + Array(s + 1 - u.length).join(i) + l;
    }, X = { s: E, z: function(l) {
      var s = -l.utcOffset(), i = Math.abs(s), u = Math.floor(i / 60), r = i % 60;
      return (s <= 0 ? "+" : "-") + E(u, 2, "0") + ":" + E(r, 2, "0");
    }, m: function l(s, i) {
      if (s.date() < i.date())
        return -l(i, s);
      var u = 12 * (i.year() - s.year()) + (i.month() - s.month()), r = s.clone().add(u, I), m = i - r < 0, d = s.clone().add(u + (m ? -1 : 1), I);
      return +(-(u + (i - r) / (m ? r - d : d - r)) || 0);
    }, a: function(l) {
      return l < 0 ? Math.ceil(l) || 0 : Math.floor(l);
    }, p: function(l) {
      return { M: I, y: Z, w: b, d: g, D: B, h: e, m: p, s: L, ms: k, Q: te }[l] || String(l || "").toLowerCase().replace(/s$/, "");
    }, u: function(l) {
      return l === void 0;
    } }, P = "en", A = {};
    A[P] = w;
    var se = "$isDayjsObject", ae = function(l) {
      return l instanceof F || !(!l || !l[se]);
    }, ne = function l(s, i, u) {
      var r;
      if (!s)
        return P;
      if (typeof s == "string") {
        var m = s.toLowerCase();
        A[m] && (r = m), i && (A[m] = i, r = m);
        var d = s.split("-");
        if (!r && d.length > 1)
          return l(d[0]);
      } else {
        var v = s.name;
        A[v] = s, r = v;
      }
      return !u && r && (P = r), r || !u && P;
    }, y = function(l, s) {
      if (ae(l))
        return l.clone();
      var i = typeof s == "object" ? s : {};
      return i.date = l, i.args = arguments, new F(i);
    }, f = X;
    f.l = ne, f.i = ae, f.w = function(l, s) {
      return y(l, { locale: s.$L, utc: s.$u, x: s.$x, $offset: s.$offset });
    };
    var F = function() {
      function l(i) {
        this.$L = ne(i.locale, null, !0), this.parse(i), this.$x = this.$x || i.x || {}, this[se] = !0;
      }
      var s = l.prototype;
      return s.parse = function(i) {
        this.$d = function(u) {
          var r = u.date, m = u.utc;
          if (r === null)
            return /* @__PURE__ */ new Date(NaN);
          if (f.u(r))
            return /* @__PURE__ */ new Date();
          if (r instanceof Date)
            return new Date(r);
          if (typeof r == "string" && !/Z$/i.test(r)) {
            var d = r.match(N);
            if (d) {
              var v = d[2] - 1 || 0, M = (d[7] || "0").substring(0, 3);
              return m ? new Date(Date.UTC(d[1], v, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, M)) : new Date(d[1], v, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, M);
            }
          }
          return new Date(r);
        }(i), this.init();
      }, s.init = function() {
        var i = this.$d;
        this.$y = i.getFullYear(), this.$M = i.getMonth(), this.$D = i.getDate(), this.$W = i.getDay(), this.$H = i.getHours(), this.$m = i.getMinutes(), this.$s = i.getSeconds(), this.$ms = i.getMilliseconds();
      }, s.$utils = function() {
        return f;
      }, s.isValid = function() {
        return this.$d.toString() !== D;
      }, s.isSame = function(i, u) {
        var r = y(i);
        return this.startOf(u) <= r && r <= this.endOf(u);
      }, s.isAfter = function(i, u) {
        return y(i) < this.startOf(u);
      }, s.isBefore = function(i, u) {
        return this.endOf(u) < y(i);
      }, s.$g = function(i, u, r) {
        return f.u(i) ? this[u] : this.set(r, i);
      }, s.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, s.valueOf = function() {
        return this.$d.getTime();
      }, s.startOf = function(i, u) {
        var r = this, m = !!f.u(u) || u, d = f.p(i), v = function(G, R) {
          var U = f.w(r.$u ? Date.UTC(r.$y, R, G) : new Date(r.$y, R, G), r);
          return m ? U : U.endOf(g);
        }, M = function(G, R) {
          return f.w(r.toDate()[G].apply(r.toDate("s"), (m ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), r);
        }, _ = this.$W, x = this.$M, $ = this.$D, z = "set" + (this.$u ? "UTC" : "");
        switch (d) {
          case Z:
            return m ? v(1, 0) : v(31, 11);
          case I:
            return m ? v(1, x) : v(0, x + 1);
          case b:
            var j = this.$locale().weekStart || 0, J = (_ < j ? _ + 7 : _) - j;
            return v(m ? $ - J : $ + (6 - J), x);
          case g:
          case B:
            return M(z + "Hours", 0);
          case e:
            return M(z + "Minutes", 1);
          case p:
            return M(z + "Seconds", 2);
          case L:
            return M(z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, s.endOf = function(i) {
        return this.startOf(i, !1);
      }, s.$set = function(i, u) {
        var r, m = f.p(i), d = "set" + (this.$u ? "UTC" : ""), v = (r = {}, r[g] = d + "Date", r[B] = d + "Date", r[I] = d + "Month", r[Z] = d + "FullYear", r[e] = d + "Hours", r[p] = d + "Minutes", r[L] = d + "Seconds", r[k] = d + "Milliseconds", r)[m], M = m === g ? this.$D + (u - this.$W) : u;
        if (m === I || m === Z) {
          var _ = this.clone().set(B, 1);
          _.$d[v](M), _.init(), this.$d = _.set(B, Math.min(this.$D, _.daysInMonth())).$d;
        } else
          v && this.$d[v](M);
        return this.init(), this;
      }, s.set = function(i, u) {
        return this.clone().$set(i, u);
      }, s.get = function(i) {
        return this[f.p(i)]();
      }, s.add = function(i, u) {
        var r, m = this;
        i = Number(i);
        var d = f.p(u), v = function(x) {
          var $ = y(m);
          return f.w($.date($.date() + Math.round(x * i)), m);
        };
        if (d === I)
          return this.set(I, this.$M + i);
        if (d === Z)
          return this.set(Z, this.$y + i);
        if (d === g)
          return v(1);
        if (d === b)
          return v(7);
        var M = (r = {}, r[p] = n, r[e] = O, r[L] = W, r)[d] || 1, _ = this.$d.getTime() + i * M;
        return f.w(_, this);
      }, s.subtract = function(i, u) {
        return this.add(-1 * i, u);
      }, s.format = function(i) {
        var u = this, r = this.$locale();
        if (!this.isValid())
          return r.invalidDate || D;
        var m = i || "YYYY-MM-DDTHH:mm:ssZ", d = f.z(this), v = this.$H, M = this.$m, _ = this.$M, x = r.weekdays, $ = r.months, z = r.meridiem, j = function(R, U, q, ie) {
          return R && (R[U] || R(u, m)) || q[U].slice(0, ie);
        }, J = function(R) {
          return f.s(v % 12 || 12, R, "0");
        }, G = z || function(R, U, q) {
          var ie = R < 12 ? "AM" : "PM";
          return q ? ie.toLowerCase() : ie;
        };
        return m.replace(H, function(R, U) {
          return U || function(q) {
            switch (q) {
              case "YY":
                return String(u.$y).slice(-2);
              case "YYYY":
                return f.s(u.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return f.s(_ + 1, 2, "0");
              case "MMM":
                return j(r.monthsShort, _, $, 3);
              case "MMMM":
                return j($, _);
              case "D":
                return u.$D;
              case "DD":
                return f.s(u.$D, 2, "0");
              case "d":
                return String(u.$W);
              case "dd":
                return j(r.weekdaysMin, u.$W, x, 2);
              case "ddd":
                return j(r.weekdaysShort, u.$W, x, 3);
              case "dddd":
                return x[u.$W];
              case "H":
                return String(v);
              case "HH":
                return f.s(v, 2, "0");
              case "h":
                return J(1);
              case "hh":
                return J(2);
              case "a":
                return G(v, M, !0);
              case "A":
                return G(v, M, !1);
              case "m":
                return String(M);
              case "mm":
                return f.s(M, 2, "0");
              case "s":
                return String(u.$s);
              case "ss":
                return f.s(u.$s, 2, "0");
              case "SSS":
                return f.s(u.$ms, 3, "0");
              case "Z":
                return d;
            }
            return null;
          }(R) || d.replace(":", "");
        });
      }, s.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, s.diff = function(i, u, r) {
        var m, d = this, v = f.p(u), M = y(i), _ = (M.utcOffset() - this.utcOffset()) * n, x = this - M, $ = function() {
          return f.m(d, M);
        };
        switch (v) {
          case Z:
            m = $() / 12;
            break;
          case I:
            m = $();
            break;
          case te:
            m = $() / 3;
            break;
          case b:
            m = (x - _) / 6048e5;
            break;
          case g:
            m = (x - _) / 864e5;
            break;
          case e:
            m = x / O;
            break;
          case p:
            m = x / n;
            break;
          case L:
            m = x / W;
            break;
          default:
            m = x;
        }
        return r ? m : f.a(m);
      }, s.daysInMonth = function() {
        return this.endOf(I).$D;
      }, s.$locale = function() {
        return A[this.$L];
      }, s.locale = function(i, u) {
        if (!i)
          return this.$L;
        var r = this.clone(), m = ne(i, u, !0);
        return m && (r.$L = m), r;
      }, s.clone = function() {
        return f.w(this.$d, this);
      }, s.toDate = function() {
        return new Date(this.valueOf());
      }, s.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, s.toISOString = function() {
        return this.$d.toISOString();
      }, s.toString = function() {
        return this.$d.toUTCString();
      }, l;
    }(), ue = F.prototype;
    return y.prototype = ue, [["$ms", k], ["$s", L], ["$m", p], ["$H", e], ["$W", g], ["$M", I], ["$y", Z], ["$D", B]].forEach(function(l) {
      ue[l[1]] = function(s) {
        return this.$g(s, l[0], l[1]);
      };
    }), y.extend = function(l, s) {
      return l.$i || (l(s, F, y), l.$i = !0), y;
    }, y.locale = ne, y.isDayjs = ae, y.unix = function(l) {
      return y(1e3 * l);
    }, y.en = A[P], y.Ls = A, y.p = {}, y;
  });
})(Se);
var Ae = Se.exports;
const K = /* @__PURE__ */ Pe(Ae);
const _e = (a, Y) => {
  const W = a.__vccOpts || a;
  for (const [n, O] of Y)
    W[n] = O;
  return W;
}, Be = { class: "order" }, Ne = /* @__PURE__ */ Object.assign({ name: "WindowListItem" }, {
  __name: "WindowListItem",
  props: {
    index: {
      type: Number
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    totalMS: {
      type: Number
    },
    startTimestamp: {
      type: Number
    },
    width: {
      type: Number
    },
    active: {
      type: Boolean,
      default: !1
    },
    multiSegmentActiveColor: {
      type: String,
      default: "#333"
    }
  },
  emits: ["click", "click_window_timeSegments"],
  setup(a, { expose: Y, emit: W }) {
    De((D) => ({
      "427ddd57": D.multiSegment
    }));
    const n = a, O = W, k = ce(null), L = ce(null), p = Te({
      height: 0,
      ctx: null
    }), e = () => {
      let { height: D } = k.value.getBoundingClientRect();
      p.height = D - 1, L.value.width = n.width, L.value.height = p.height, p.ctx = L.value.getContext("2d");
    }, g = (D, N) => {
      if (!n.data.timeSegments || n.data.timeSegments.length <= 0)
        return;
      const H = n.width / n.totalMS;
      n.data.timeSegments.forEach((w) => {
        if (w.beginTime <= n.startTimestamp + n.totalMS && w.endTime >= n.startTimestamp) {
          p.ctx.beginPath();
          let E = (w.beginTime - n.startTimestamp) * H, X;
          E < 0 ? (E = 0, X = (w.endTime - n.startTimestamp) * H) : X = (w.endTime - w.beginTime) * H;
          let P = w.startRatio === void 0 ? 0.6 : w.startRatio, A = w.endRatio === void 0 ? 0.9 : w.endRatio;
          N ? p.ctx.rect(
            E,
            p.height * P,
            X,
            p.height * (A - P)
          ) : (p.ctx.fillStyle = w.color, p.ctx.fillRect(
            E,
            p.height * P,
            X,
            p.height * (A - P)
          )), D && D(w);
        }
      });
    }, b = () => {
      p.ctx.clearRect(0, 0, n.width, p.height);
    }, I = () => {
      ye(() => {
        b(), g();
      });
    }, te = (D) => {
      O("click", D);
      let { left: N, top: H } = k.value.getBoundingClientRect(), w = D.clientX - N, E = D.clientY - H, X = Z(w, E);
      X.length > 0 && O("click_window_timeSegments", X, n.index, n.data);
    }, Z = (D, N) => {
      if (!n.data.timeSegments || n.data.timeSegments.length <= 0)
        return [];
      let H = [];
      return g((w) => {
        p.ctx.isPointInPath(D, N) && H.push(w);
      }, !0), H;
    }, B = () => k.value ? k.value.getBoundingClientRect() : null;
    return Me(() => {
      e(), g();
    }), Y({
      draw: I,
      getRect: B
    }), (D, N) => (le(), de("div", {
      class: Le(["windowListItem", { active: a.active }]),
      ref_key: "windowListItem",
      ref: k,
      onClick: te
    }, [
      ge("span", Be, Ce(a.index + 1), 1),
      ge("canvas", {
        class: "windowListItemCanvas",
        ref_key: "canvas",
        ref: L
      }, null, 512)
    ], 2));
  }
}), Xe = /* @__PURE__ */ _e(Ne, [["__scopeId", "data-v-35f19113"]]), we = 60 * 60 * 1e3, ee = [0.5, 1, 2, 6, 12, 24, 72, 360, 720, 8760, 87600], ve = [1 / 60, 1 / 60, 2 / 60, 1 / 6, 0.25, 0.5, 1, 4, 4, 720, 7200], pe = [
  1 / 20,
  1 / 30,
  1 / 20,
  1 / 3,
  0.5,
  2,
  4,
  4,
  4,
  720,
  7200
], je = [
  () => !0,
  (a) => a.getMinutes() % 5 === 0,
  (a) => a.getMinutes() % 10 === 0,
  (a) => a.getMinutes() === 0 || a.getMinutes() === 30,
  (a) => a.getMinutes() === 0,
  (a) => a.getHours() % 2 === 0 && a.getMinutes() === 0,
  (a) => a.getHours() % 3 === 0 && a.getMinutes() === 0,
  (a) => a.getHours() % 12 === 0 && a.getMinutes() === 0,
  () => !1,
  () => !0,
  () => !0
], Ue = [
  () => !0,
  (a) => a.getMinutes() % 5 === 0,
  (a) => a.getMinutes() % 10 === 0,
  (a) => a.getMinutes() === 0 || a.getMinutes() === 30,
  (a) => a.getHours() % 2 === 0 && a.getMinutes() === 0,
  (a) => a.getHours() % 4 === 0 && a.getMinutes() === 0,
  (a) => a.getHours() % 3 === 0 && a.getMinutes() === 0,
  (a) => a.getHours() % 12 === 0 && a.getMinutes() === 0,
  () => !1,
  () => !0,
  () => !0
];
const Fe = /* @__PURE__ */ Object.assign({ name: "TimeLine" }, {
  __name: "TimeLine",
  props: {
    // 初始时间，中点所在的时间，默认为当天0点
    initTime: {
      type: [Number, String],
      default: ""
    },
    // 显示预览的时间范围，即中间刻度所允许的时间范围
    /*
        {
          start: '2020-12-19 18:30:00',// 允许显示的最小时间
          end: '2021-01-20 10:0:00'// 允许显示的最大时间
        }
      */
    timeRange: {
      type: Object,
      default() {
        return {};
      }
    },
    // 初始的时间分辨率
    initZoomIndex: {
      type: Number,
      default: 5
      // 24小时
    },
    // 是否显示中间的竖线
    showCenterLine: {
      type: Boolean,
      default: !0
    },
    // 中间竖线的样式
    centerLineStyle: {
      type: Object,
      default() {
        return {
          width: 2,
          color: "#fff"
        };
      }
    },
    // 日期时间文字颜色
    textColor: {
      type: String,
      default: "rgba(151,158,167,1)"
    },
    // 鼠标滑过显示的时间文字颜色
    hoverTextColor: {
      type: String,
      default: "rgb(194, 202, 215)"
    },
    // 时间线段颜色
    lineColor: {
      type: String,
      default: "rgba(151,158,167,1)"
    },
    // 时间线段高度占时间轴高度的比例
    lineHeightRatio: {
      type: Object,
      default() {
        return {
          date: 0.3,
          // 0点时的日期线段高度
          time: 0.2,
          // 显示时间的线段高度
          none: 0.1,
          // 不显示时间的线段高度
          hover: 0.3
          // 鼠标滑过时显示的时间段高度
        };
      }
    },
    // 鼠标滑过时是否显示实时所在的时间
    showHoverTime: {
      type: Boolean,
      default: !0
    },
    // 格式化鼠标滑过时间
    hoverTimeFormat: {
      type: Function
    },
    // 要显示的时间颜色段
    /*
        {
          beginTime: new Date('2021-01-19 14:30:00').getTime(),// 起始时间戳
          endTime: new Date('2021-01-20 18:00:00').getTime(),// 结束时间戳
          color: '#FA3239',// 颜色
          startRatio: 0.65,// 高度的起始比例，即top=时间轴高度*startRatio
          endRatio: 0.9// 高度的结束比例，即bottom=时间轴高度*endRatio
        }
      */
    timeSegments: {
      type: Array,
      default: () => []
    },
    // 时间轴背景颜色
    backgroundColor: {
      type: String,
      default: "#262626"
    },
    // 多时间轴选中背景颜色
    multiSegmentActiveColor: {
      type: String
    },
    // 是否允许切换分辨率
    enableZoom: {
      type: Boolean,
      default: !0
    },
    // 是否允许拖动
    enableDrag: {
      type: Boolean,
      default: !0
    },
    // 多轴窗口列表，如果窗口数量大于1的话可以配置此项，会显示和窗口对应数量的时间轴，只有一个窗口的话请直接使用基本时间轴
    /*
        {
            name: '窗口1',
            timeSegments: [
                {
                    name: '窗口1的时间段1',
                    beginTime: new Date('2021-01-13 10:00:00').getTime(),
                    endTime: new Date('2021-01-14 23:00:00').getTime(),
                    color: '#FA3239',
                    startRatio: 0.1,
                    endRatio: 0.9
                },
                {
                    name: '窗口1的时间段2',
                    beginTime: new Date('2021-01-12 18:00:00').getTime(),
                    endTime: new Date('2021-01-13 00:00:00').getTime(),
                    color: '#00AEFF',
                    startRatio: 0.1,
                    endRatio: 0.9
                }
            ]
        },
      */
    windowList: {
      type: Array,
      default: () => []
    },
    // 当显示windowList时的基础时间轴高度
    baseTimeLineHeight: {
      type: Number,
      default: 50
    },
    // 初始选中的窗口时间轴
    initSelectWindowTimeLineIndex: {
      type: Number,
      default: -1
    },
    // 是否是手机端
    isMobile: {
      type: Boolean,
      default: !1
    },
    // 鼠标按下和松开的距离小于该值认为是点击事件
    maxClickDistance: {
      type: Number,
      default: 3
    },
    // 绘制时间段时对计算出来的坐标进行四舍五入，可以防止相连的时间段绘制出来有间隔的问题
    roundWidthTimeSegments: {
      type: Boolean,
      default: !0
    },
    // 自定义显示哪些时间
    customShowTime: {
      type: Function
    },
    // 0点处是否显示日期
    showDateAtZero: {
      type: Boolean,
      default: !0
    },
    // 扩展ZOOM列表，这个数组的数据会追加到内部的ZOOM数组，对应的zoomIndex往后累加即可，内部一共有11个zoom，那么你追加了一项，对应的zoomIndex为11，因为是从零开始计数
    // 数组类型，数组的每一项为：
    /*
        {
          zoom: 26,// 时间分辨率，整个时间轴表示的时间范围，单位：小时
          zoomHourGrid: 0.5,// 时间分辨率对应的每格小时数，即时间轴上最小格代表多少小时
          mobileZoomHourGrid: 2, // 手机模式下时间分辨率对应的每格小时数，如果不用适配手机端，可以不用设置
        }
      */
    // 同时你需要传递customShowTime属性来自定义控制时间显示，否则会报错，因为内置的规则只有11个
    extendZOOM: {
      type: Array,
      default() {
        return [];
      }
    },
    // 格式化时间轴显示时间
    formatTime: {
      type: Function
    }
  },
  emits: [
    "timeChange",
    "mousedown",
    "dragTimeChange",
    "mouseup",
    "click_timeSegments",
    "click_timeline",
    "change_window_time_line",
    "click_window_timeSegments"
  ],
  setup(a, { expose: Y, emit: W }) {
    const n = a, O = W, k = ce(null), L = ce(null), p = ce([]), e = Te({
      width: 0,
      height: 0,
      ctx: null,
      currentZoomIndex: 0,
      currentTime: 0,
      startTimestamp: 0,
      mousedown: !1,
      mousedownX: 0,
      mousedownY: 0,
      mousedownCacheStartTimestamp: 0,
      showWindowList: !1,
      windowListInner: [],
      mousemoveX: -1,
      watchTimeList: []
    });
    n.extendZOOM.forEach((t) => {
      ee.push(t.zoom), ve.push(t.zoomHourGrid), pe.push(t.mobileZoomHourGrid);
    });
    const g = oe(() => ee[e.currentZoomIndex] * we), b = oe(() => {
      let t = {};
      return n.timeRange.start && (t.start = typeof n.timeRange.start == "number" ? n.timeRange.start : new Date(n.timeRange.start).getTime()), n.timeRange.end && (t.end = typeof n.timeRange.end == "number" ? n.timeRange.end : new Date(n.timeRange.end).getTime()), t;
    }), I = oe(() => n.isMobile ? pe : ve), te = oe(() => n.isMobile ? Ue : je), Z = oe(() => e.currentZoomIndex === 9), B = oe(() => e.currentZoomIndex === 10), D = () => {
      e.windowListInner = n.windowList.map((t, o) => ({
        ...t,
        active: n.initSelectWindowTimeLineIndex === o
      })), e.currentZoomIndex = n.initZoomIndex >= 0 && n.initZoomIndex < ee.length ? n.initZoomIndex : 5, e.startTimestamp = (n.initTime ? typeof n.initTime == "number" ? n.initTime : new Date(n.initTime).getTime() : new Date(K().format("YYYY-MM-DD 00:00:00")).getTime()) - g.value / 2, N();
    }, N = () => {
      let t = g.value / 2, o = e.startTimestamp + t;
      b.value.start && o < b.value.start && (e.startTimestamp = b.value.start - t), b.value.end && o > b.value.end && (e.startTimestamp = b.value.end - t);
    }, H = () => {
      let { width: t, height: o } = k.value.getBoundingClientRect();
      e.width = t, e.height = n.windowList.length > 1 ? n.baseTimeLineHeight : o, L.value.width = e.width, L.value.height = e.height, e.ctx = L.value.getContext("2d"), e.showWindowList = !0;
    }, w = () => {
      se(), P(), X(), e.currentTime = e.startTimestamp + g.value / 2, O("timeChange", e.currentTime);
      try {
        p.value.forEach((t) => {
          t.draw();
        });
      } catch (t) {
        console.error(t);
      }
      E();
    }, E = () => {
      e.watchTimeList.forEach((t) => {
        if (t.time < e.startTimestamp || t.time > e.startTimestamp + g.value)
          t.callback(-1, -1);
        else {
          let o = (t.time - e.startTimestamp) * (e.width / g.value), c = 0, { left: h, top: S } = L.value.getBoundingClientRect();
          if (t.windowTimeLineIndex !== -1 && n.windowList.length > 1 && t.windowTimeLineIndex >= 0 && t.windowTimeLineIndex < n.windowList.length) {
            let T = p.value[t.windowTimeLineIndex].getRect();
            c = T ? T.top : S;
          } else
            c = S;
          t.callback(o + h, c);
        }
      });
    }, X = () => {
      if (!n.showCenterLine)
        return;
      e.ctx.beginPath();
      let { width: t, color: o } = n.centerLineStyle, c = e.width / 2;
      j(c, 0, c, e.height, t, o);
    }, P = () => {
      e.ctx.beginPath();
      let t = ee[e.currentZoomIndex] / I.value[e.currentZoomIndex], o = I.value[e.currentZoomIndex] * we, c = e.width / t, h = o - e.startTimestamp % o, S = h / o * c;
      for (let T = 0; T < t; T++) {
        let C = e.startTimestamp + h + T * o, V = 0;
        B.value ? V = C - (/* @__PURE__ */ new Date(`${K(C).format("YYYY")}-01-01 00:00:00`)).getTime() : Z.value && (V = C - (/* @__PURE__ */ new Date(
          `${K(C).format("YYYY")}-${K(C).format(
            "MM"
          )}-01 00:00:00`
        )).getTime());
        let Q = S + T * c - V / o * c, he = C - V, re = 0, fe = new Date(he);
        n.showDateAtZero && fe.getHours() === 0 && fe.getMinutes() === 0 ? (re = e.height * (n.lineHeightRatio.date === void 0 ? 0.3 : n.lineHeightRatio.date), e.ctx.fillStyle = n.textColor, e.ctx.fillText(z(he), Q - 13, re + 15)) : A(fe) ? (re = e.height * (n.lineHeightRatio.time === void 0 ? 0.2 : n.lineHeightRatio.time), e.ctx.fillStyle = n.textColor, e.ctx.fillText(z(he), Q - 13, re + 15)) : re = e.height * (n.lineHeightRatio.none === void 0 ? 0.1 : n.lineHeightRatio.none), j(Q, 0, Q, re, 1, n.lineColor);
      }
    }, A = (t) => {
      if (n.customShowTime) {
        let o = n.customShowTime(t, e.currentZoomIndex);
        if (o === !0)
          return !0;
        if (o === !1)
          return !1;
      }
      return te.value[e.currentZoomIndex](t);
    }, se = (t, o) => {
      const c = e.width / g.value;
      n.timeSegments.forEach((h) => {
        if (h.beginTime <= e.startTimestamp + g.value) {
          let S = h.endTime >= e.startTimestamp;
          e.ctx.beginPath();
          let T = (h.beginTime - e.startTimestamp) * c, C;
          T < 0 ? (T = 0, C = S ? (h.endTime - e.startTimestamp) * c : 1) : C = S ? (h.endTime - h.beginTime) * c : 1;
          let V = h.startRatio === void 0 ? 0.6 : h.startRatio, Q = h.endRatio === void 0 ? 0.9 : h.endRatio;
          n.roundWidthTimeSegments && (T = Math.round(T), C = Math.round(C)), C = Math.max(1, C), o ? e.ctx.rect(
            T,
            e.height * V,
            C,
            e.height * (Q - V)
          ) : (e.ctx.fillStyle = h.color, e.ctx.fillRect(
            T,
            e.height * V,
            C,
            e.height * (Q - V)
          )), t && t(h);
        }
      });
    }, ae = (t) => {
      n.isMobile && (t = t.touches[0], y(t));
    }, ne = (t) => {
      n.isMobile || y(t);
    }, y = (t) => {
      let o = x(t);
      t.target.style.cursor = "grabbing", e.mousedownX = o[0], e.mousedownY = o[1], e.mousedown = !0, e.mousedownCacheStartTimestamp = e.startTimestamp, O("mousedown", t);
    };
    let f = (t) => {
      n.isMobile && (t = t.touches[0], ue(t));
    }, F = (t) => {
      n.isMobile || ue(t);
    };
    const ue = (t) => {
      t.target.style.cursor = "pointer";
      let o = x(t);
      const c = () => {
        e.mousedown = !1, e.mousedownX = 0, e.mousedownY = 0, e.mousedownCacheStartTimestamp = 0;
      };
      if (Math.abs(o[0] - e.mousedownX) <= n.maxClickDistance && Math.abs(o[1] - e.mousedownY) <= n.maxClickDistance) {
        c(), M(...o);
        return;
      }
      e.mousedown && n.enableDrag ? (c(), O("dragTimeChange", e.currentTime)) : c(), O("mouseup", t);
    }, l = (t) => {
      n.isMobile && (t = t.touches[0], i(t));
    }, s = (t) => {
      n.isMobile || i(t);
    }, i = (t) => {
      let o = x(t)[0];
      e.mousemoveX = o, e.mousedown && n.enableDrag ? r(o) : n.showHoverTime && m(o);
    }, u = () => {
      e.mousemoveX = -1;
    }, r = (t) => {
      if (!n.enableDrag)
        return;
      const o = e.width / g.value;
      let c = t - e.mousedownX, h = g.value / 2, S = e.mousedownCacheStartTimestamp - Math.round(c / o), T = S + h;
      b.value.start && T < b.value.start && (S = b.value.start - h), b.value.end && T > b.value.end && (S = b.value.end - h), e.startTimestamp = S, $(e.width, e.height), w();
    }, m = (t, o) => {
      const c = e.width / g.value;
      let h = e.startTimestamp + t / c;
      o || ($(e.width, e.height), w());
      let S = e.height * (n.lineHeightRatio.hover === void 0 ? 0.3 : n.lineHeightRatio.hover);
      j(t, 0, t, S, 1, n.lineColor), e.ctx.fillStyle = n.hoverTextColor;
      let T = n.hoverTimeFormat ? n.hoverTimeFormat(h) : K(h).format("YYYY-MM-DD HH:mm:ss"), C = e.ctx.measureText(T).width;
      e.ctx.fillText(T, t - C / 2, S + 20);
    }, d = () => {
      $(e.width, e.height), w();
    }, v = (t) => {
      if (!n.enableZoom)
        return;
      let o = window.event || t, c = Math.max(-1, Math.min(1, o.wheelDelta || -o.detail));
      c < 0 ? e.currentZoomIndex + 1 >= ee.length - 1 ? e.currentZoomIndex = ee.length - 1 : e.currentZoomIndex++ : c > 0 && (e.currentZoomIndex - 1 <= 0 ? e.currentZoomIndex = 0 : e.currentZoomIndex--), $(e.width, e.height), e.startTimestamp = e.currentTime - g.value / 2, w();
    }, M = (t, o) => {
      const c = e.width / g.value;
      let h = e.startTimestamp + t / c, S = K(h).format("YYYY-MM-DD HH:mm:ss"), T = _(t, o);
      T && T.length > 0 ? O("click_timeSegments", T, h, S, t) : be(h, S, t);
    }, _ = (t, o) => {
      let c = [];
      return se((h) => {
        e.ctx.isPointInPath(t, o) && c.push(h);
      }, !0), c;
    }, x = (t) => {
      if (!k.value || !t)
        return [0, 0];
      let { left: o, top: c } = k.value.getBoundingClientRect();
      return [t.clientX - o, t.clientY - c];
    }, $ = (t, o) => {
      e.ctx.clearRect(0, 0, t, o);
    }, z = (t) => {
      let o = K(t), c = "";
      return n.formatTime && (c = n.formatTime(o)), c || (B.value ? o.format("YYYY") : Z.value ? o.format("YYYY-MM") : o.hour() === 0 && o.minute() === 0 && o.millisecond() === 0 ? o.format("MM-DD") : o.format("HH:mm"));
    }, j = (t, o, c, h, S = 1, T = "#fff") => {
      e.ctx.beginPath(), e.ctx.strokeStyle = T, e.ctx.lineWidth = S, e.ctx.moveTo(t, o), e.ctx.lineTo(c, h), e.ctx.stroke();
    }, J = () => {
      ye(() => {
        $(e.width, e.height), G(), D(), H(), w();
      });
    }, G = () => {
      e.width = 0, e.height = 0, e.ctx = null, e.currentZoomIndex = 0, e.currentTime = 0, e.startTimestamp = 0, e.mousedown = !1, e.mousedownX = 0, e.mousedownCacheStartTimestamp = 0;
    }, R = (t) => {
      if (e.mousedown)
        return;
      let o = typeof t == "number" ? t : new Date(t).getTime();
      e.startTimestamp = o - g.value / 2, N(), $(e.width, e.height), w(), e.mousemoveX !== -1 && !n.isMobile && m(e.mousemoveX, !0);
    }, U = (t, o, c) => {
      O("click_window_timeSegments", t, o, c);
    }, q = (t) => {
      e.currentZoomIndex = t >= 0 && t < ee.length ? t : 5, $(e.width, e.height), e.startTimestamp = e.currentTime - g.value / 2, w();
    }, ie = (t) => {
      e.windowListInner.forEach((o) => {
        o.active = !1;
      }), e.windowListInner[t].active = !0, O("change_window_time_line", t, e.windowListInner[t]);
    }, xe = (t, o, c) => {
      !t || !o || e.watchTimeList.push({
        time: typeof t == "number" ? t : new Date(t).getTime(),
        callback: o,
        windowTimeLineIndex: typeof c == "number" ? c - 1 : -1
      });
    }, $e = () => {
      E();
    };
    let me = () => {
      H(), w();
      try {
        p.value.forEach((t) => {
          t.init();
        });
      } catch (t) {
        console.error(t);
      }
    };
    const be = (...t) => {
      O("click_timeline", ...t);
    };
    return Oe(() => n.timeSegments, J, { deep: !0 }), Me(() => {
      D(), H(), w(), F = F.bind(this), me = me.bind(this), f = f.bind(this), n.isMobile ? window.addEventListener("touchend", f) : window.addEventListener("mouseup", F), window.addEventListener("resize", me);
    }), Ie(() => {
      n.isMobile ? window.removeEventListener("touchend", f) : window.removeEventListener("mouseup", F), window.removeEventListener("resize", me);
    }), Y({
      setTime: R,
      setZoom: q,
      watchTime: xe,
      reRender: J
    }), (t, o) => (le(), de("div", {
      class: "timeLineContainer",
      ref_key: "timeLineContainer",
      ref: k,
      style: Re({
        backgroundColor: a.backgroundColor
      }),
      onTouchstart: ae,
      onTouchmove: l,
      onMousedown: ne,
      onMouseout: d,
      onMousemove: s,
      onMouseleave: u
    }, [
      ge("canvas", {
        class: "canvas",
        ref_key: "canvas",
        ref: L,
        onMousewheel: ke(v, ["stop", "prevent"])
      }, null, 544),
      e.showWindowList && a.windowList && a.windowList.length > 1 ? (le(), de("div", {
        key: 0,
        class: "windowList",
        ref: "windowList",
        onScroll: $e
      }, [
        (le(!0), de(He, null, Ye(e.windowListInner, (c, h) => (le(), Ze(Xe, {
          ref_for: !0,
          ref_key: "WindowListItemRef",
          ref: p,
          key: h,
          index: h,
          data: c,
          totalMS: g.value,
          startTimestamp: e.startTimestamp,
          width: e.width,
          active: c.active,
          multiSegmentActiveColor: a.multiSegmentActiveColor,
          onClick_window_timeSegments: U,
          onClick: (S) => ie(h)
        }, null, 8, ["index", "data", "totalMS", "startTimestamp", "width", "active", "multiSegmentActiveColor", "onClick"]))), 128))
      ], 544)) : Ee("", !0)
    ], 36));
  }
}), ze = /* @__PURE__ */ _e(Fe, [["__scopeId", "data-v-55d6c60f"]]), Ve = {
  install(a, Y) {
    const W = Y != null && Y.comName ? Y == null ? void 0 : Y.comName : "TimeLine";
    a.component(W, ze);
  }
};
export {
  Ve as default
};
