import * as E from "react";
import pe, { useState as A, useEffect as V, createContext as _t, useMemo as Ve, useContext as z, useCallback as U, useReducer as gl, forwardRef as vi, useLayoutEffect as bl, useRef as ce, Component as xl, Fragment as Vn, useId as ia } from "react";
import { createPortal as yl } from "react-dom";
function wl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} }, tn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l = pe, Sl = Symbol.for("react.element"), Cl = Symbol.for("react.fragment"), El = Object.prototype.hasOwnProperty, kl = _l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ml = { key: !0, ref: !0, __self: !0, __source: !0 };
function bi(e, t, r) {
  var a, n = {}, o = null, s = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (a in t)
    El.call(t, a) && !Ml.hasOwnProperty(a) && (n[a] = t[a]);
  if (e && e.defaultProps)
    for (a in t = e.defaultProps, t)
      n[a] === void 0 && (n[a] = t[a]);
  return { $$typeof: Sl, type: e, key: o, ref: s, props: n, _owner: kl.current };
}
tn.Fragment = Cl;
tn.jsx = bi;
tn.jsxs = bi;
gi.exports = tn;
var l = gi.exports;
const jl = (e, t) => {
  const r = e[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((a, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
function xi(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number")
    a += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = xi(e[t])) && (a && (a += " "), a += r);
    else
      for (t in e)
        e[t] && (a && (a += " "), a += t);
  return a;
}
function W() {
  for (var e, t, r = 0, a = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = xi(e)) && (a && (a += " "), a += t);
  return a;
}
function Al(e, t = {}) {
  const [r, a] = A(!1), [n, o] = A(null), [s, i] = A(), { onCompleted: u, onError: c } = t;
  return V(() => {
    a(!0), (async () => {
      try {
        const f = (await jl(/* @__PURE__ */ Object.assign({ "../assets/icons/arrow-down.svg": () => import("./arrow-down-1f26ff81.mjs"), "../assets/icons/arrow-left.svg": () => import("./arrow-left-9b5f6cdd.mjs"), "../assets/icons/arrow-right.svg": () => import("./arrow-right-a99c6f10.mjs"), "../assets/icons/arrow-up.svg": () => import("./arrow-up-92de1e9e.mjs"), "../assets/icons/check-circle.svg": () => import("./check-circle-4164e44f.mjs"), "../assets/icons/chevron-down.svg": () => import("./chevron-down-25bde8e8.mjs"), "../assets/icons/chevron-left.svg": () => import("./chevron-left-7f13de0d.mjs"), "../assets/icons/chevron-right.svg": () => import("./chevron-right-61f00dc7.mjs"), "../assets/icons/chevron-up.svg": () => import("./chevron-up-dc754fc8.mjs"), "../assets/icons/close.svg": () => import("./close-ff0a074f.mjs"), "../assets/icons/crown.svg": () => import("./crown-61273c7c.mjs"), "../assets/icons/laptop.svg": () => import("./laptop-b92c0a96.mjs"), "../assets/icons/lock-locked.svg": () => import("./lock-locked-9027cab7.mjs"), "../assets/icons/lock-unlocked.svg": () => import("./lock-unlocked-e20b113b.mjs"), "../assets/icons/magnifying-glass.svg": () => Promise.resolve().then(() => ep), "../assets/icons/menu-horizontal.svg": () => import("./menu-horizontal-67ef3e24.mjs"), "../assets/icons/mobile.svg": () => import("./mobile-9dd5b4fd.mjs"), "../assets/icons/single-user-fill.svg": () => Promise.resolve().then(() => xm), "../assets/icons/single-user-neutral-block.svg": () => import("./single-user-neutral-block-f01ed3f5.mjs"), "../assets/icons/trash.svg": () => import("./trash-41dbd228.mjs"), "../assets/icons/user-add.svg": () => import("./user-add-e97b5d57.mjs"), "../assets/icons/warning.svg": () => import("./warning-7e7d011b.mjs") }), `../assets/icons/${e}.svg`)).ReactComponent;
        o(() => f), u == null || u(e, f);
      } catch (f) {
        c == null || c(f), i(() => f);
      } finally {
        a(() => !1);
      }
    })();
  }, [e, u, c]), { error: s, loading: r, SvgComponent: n };
}
const we = ({ name: e, size: t = "md", colorClass: r = "text-black", className: a = "" }) => {
  const { SvgComponent: n } = Al(e);
  let o = "";
  if (!o)
    switch (t) {
      case "xs":
        o = "w-3 h-3";
        break;
      case "sm":
        o = "w-4 h-4";
        break;
      case "lg":
        o = "w-8 h-8";
        break;
      case "xl":
        o = "w-10 h-10";
        break;
      default:
        o = "w-5 h-5";
        break;
    }
  return o = W(
    o,
    r
  ), n ? /* @__PURE__ */ l.jsx(n, { className: `${o} ${a}` }) : null;
}, ie = ({
  size: e = "md",
  label: t = "",
  icon: r = "",
  iconColorClass: a = "text-black",
  color: n = "clear",
  fullWidth: o,
  link: s,
  disabled: i,
  onClick: u,
  className: c = "",
  ...d
}) => {
  n || (n = "clear");
  let f = "";
  switch (f += " transition whitespace-nowrap flex items-center justify-center rounded-sm text-sm", f += s && n !== "clear" && n !== "black" || !s && n !== "clear" ? " font-bold" : " font-semibold", f += s ? "" : `${e === "sm" ? " px-3 h-7 " : " px-4 h-[34px] "}`, n) {
    case "black":
      f += s ? " text-black hover:text-grey-800" : " bg-black text-white hover:bg-grey-900";
      break;
    case "grey":
      f += s ? " text-black hover:text-grey-800" : " bg-grey-100 text-black hover:!bg-grey-300";
      break;
    case "green":
      f += s ? " text-green hover:text-green-400" : " bg-green text-white hover:bg-green-400";
      break;
    case "red":
      f += s ? " text-red hover:text-red-400" : " bg-red text-white hover:bg-red-400";
      break;
    case "white":
      f += s ? " text-white hover:text-white" : " bg-white text-black";
      break;
    default:
      f += s ? " text-black hover:text-grey-800" : " text-black hover:bg-grey-200";
      break;
  }
  return f += o && !s ? " w-full" : "", f += i ? " opacity-40" : " cursor-pointer", f += ` ${c}`, /* @__PURE__ */ l.jsxs(
    "button",
    {
      className: f,
      disabled: i,
      type: "button",
      onClick: u,
      ...d,
      children: [
        r && /* @__PURE__ */ l.jsx(we, { colorClass: a, name: r, size: e === "sm" ? "sm" : "md" }),
        t
      ]
    }
  );
};
function sa() {
  let e = window.location.pathname, t = e.substr(0, e.search("/ghost/")), r = `${t}/ghost/`, a = `${t}/ghost/assets/`, n = `${t}/ghost/api/admin`;
  return { adminRoot: r, assetRoot: a, apiRoot: n };
}
function Aa(e) {
  const t = /* @__PURE__ */ new Date(), r = { timeZone: e };
  return t.toLocaleString("en-US", r);
}
function Rt(e, t) {
  var r;
  return (r = e == null ? void 0 : e.find((a) => a.value === t)) == null ? void 0 : r.label;
}
function yi(e = "") {
  var n, o;
  let t = new RegExp(/(\p{L}{1})\p{L}+/, "gu"), r = [...e.matchAll(t)];
  return ((((n = r.shift()) == null ? void 0 : n[1]) || "") + (((o = r.pop()) == null ? void 0 : o[1]) || "")).toUpperCase();
}
function oa(e) {
  let a = 0;
  for (var n = 0; n < e.length; n++)
    a = e.charCodeAt(n) + ((a << 5) - a);
  return "hsl(" + a % 360 + ", 70%, 40%)";
}
function ct(e) {
  const t = ["API", "CTA", "RSS"];
  return e.replace(/^[a-z]/, (r) => r.toUpperCase()).replace(/_/g, " ").replace(new RegExp(`\\b(${t.join("|")})\\b`, "ig"), (r) => r.toUpperCase());
}
function ve(e, t) {
  return t.map((r) => {
    var a;
    return (a = e == null ? void 0 : e.find((n) => n.key === r)) == null ? void 0 : a.value;
  });
}
function Fl(e) {
  return e.roles.some((t) => t.name === "Owner");
}
function Ol(e) {
  return e.roles.some((t) => t.name === "Administrator");
}
function Il(e) {
  let t = document.getElementById("iframeDownload");
  t || (t = document.createElement("iframe"), t.id = "iframeDownload", t.style.display = "none", document.body.append(t)), t.setAttribute("src", e);
}
function wi({ ghostVersion: e }) {
  const { apiRoot: t } = sa();
  function r(n, o = {}) {
    const s = `${t}${n}`, i = {
      "app-pragma": "no-cache",
      "x-ghost-version": e
    }, u = (o == null ? void 0 : o.headers) || {
      "Content-Type": "application/json"
    };
    return fetch(s, {
      headers: {
        ...i,
        ...u
      },
      method: "GET",
      mode: "cors",
      credentials: "include",
      ...o
    });
  }
  return {
    settings: {
      browse: async () => await (await r("/settings/?group=site,theme,private,members,portal,newsletter,email,amp,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura", {})).json(),
      edit: async (n) => {
        const o = JSON.stringify({
          settings: n
        });
        return await (await r("/settings/", {
          method: "PUT",
          body: o
        })).json();
      }
    },
    users: {
      browse: async () => await (await r("/users/?limit=all&include=roles", {})).json(),
      currentUser: async () => (await (await r("/users/me/", {})).json()).users[0],
      edit: async (n) => {
        const o = JSON.stringify({
          users: [n]
        });
        return await (await r(`/users/${n.id}/?include=roles`, {
          method: "PUT",
          body: o
        })).json();
      },
      updatePassword: async ({ newPassword: n, confirmNewPassword: o, userId: s, oldPassword: i }) => {
        const u = JSON.stringify({
          password: [{
            user_id: s,
            oldPassword: i || "",
            newPassword: n,
            ne2Password: o
          }]
        });
        return await (await r("/users/password/", {
          method: "PUT",
          body: u
        })).json();
      },
      delete: async (n) => await (await r(`/users/${n}/`, {
        method: "DELETE"
      })).json(),
      makeOwner: async (n) => {
        const o = JSON.stringify({
          owner: [{
            id: n
          }]
        });
        return await (await r("/users/owner/", {
          method: "PUT",
          body: o
        })).json();
      }
    },
    roles: {
      browse: async (n) => {
        const o = (n == null ? void 0 : n.queryParams) || {};
        o.limit = "all";
        const s = Object.keys((n == null ? void 0 : n.queryParams) || {}).map((c) => `${c}=${n == null ? void 0 : n.queryParams[c]}`).join("&");
        return await (await r(`/roles/?${s}`, {})).json();
      }
    },
    site: {
      browse: async () => await (await r("/site/", {})).json()
    },
    images: {
      upload: async ({ file: n }) => {
        const o = new FormData();
        return o.append("file", n), o.append("purpose", "image"), await (await r("/images/upload/", {
          method: "POST",
          body: o,
          headers: {}
        })).json();
      }
    },
    invites: {
      browse: async () => await (await r("/invites/", {})).json(),
      add: async ({ email: n, roleId: o }) => {
        const s = JSON.stringify({
          invites: [{
            email: n,
            role_id: o,
            expires: null,
            status: null,
            token: null
          }]
        });
        return await (await r("/invites/", {
          method: "POST",
          body: s
        })).json();
      },
      delete: async (n) => {
        await r(`/invites/${n}/`, {
          method: "DELETE"
        });
      }
    },
    customThemeSettings: {
      browse: async () => await (await r("/custom_theme_settings/")).json(),
      edit: async (n) => await (await r("/custom_theme_settings/", {
        method: "PUT",
        body: JSON.stringify({ custom_theme_settings: n })
      })).json()
    },
    latestPost: {
      browse: async () => await (await r("/posts/?filter=status%3Apublished&order=published_at%20DESC&limit=1&fields=id,url")).json()
    },
    tiers: {
      browse: async () => {
        const n = encodeURIComponent("type:paid+active:true");
        return await (await r(`/tiers/?filter=${n}&limit=all`)).json();
      }
    },
    labels: {
      browse: async () => await (await r("/labels/?limit=all")).json()
    },
    offers: {
      browse: async () => await (await r("/offers/?limit=all")).json()
    },
    themes: {
      browse: async () => await (await r("/themes/")).json(),
      activate: async (n) => await (await r(`/themes/${n}/activate/`, {
        method: "PUT"
      })).json(),
      delete: async (n) => {
        await r(`/themes/${n}/`, {
          method: "DELETE"
        });
      },
      install: async (n) => await (await r(`/themes/install/?source=github&ref=${encodeURIComponent(n)}`, {
        method: "POST"
      })).json(),
      upload: async ({ file: n }) => {
        const o = new FormData();
        return o.append("file", n), await (await r("/themes/upload/", {
          method: "POST",
          body: o,
          headers: {}
        })).json();
      }
    }
  };
}
const se = _t({
  api: wi({ ghostVersion: "" }),
  fileService: null
}), Pl = ({ children: e, ghostVersion: t }) => {
  const r = Ve(() => wi({ ghostVersion: t }), [t]), a = Ve(() => ({
    uploadImage: async (n) => (await r.images.upload({ file: n })).images[0].url
  }), [r]);
  return /* @__PURE__ */ l.jsx(se.Provider, { value: {
    api: r,
    fileService: a
  }, children: e });
}, Dl = () => z(se), nn = () => Dl().api, la = _t({
  roles: [],
  assignableRoles: []
}), Tl = ({ children: e }) => {
  const { api: t } = z(se), [r, a] = A([]), [n, o] = A([]);
  return V(() => {
    (async () => {
      try {
        const i = await t.roles.browse(), u = await t.roles.browse({
          queryParams: {
            permissions: "assign"
          }
        });
        a(i.roles), o(u.roles);
      } catch {
      }
    })();
  }, [t]), /* @__PURE__ */ l.jsx(la.Provider, { value: {
    roles: r,
    assignableRoles: n
  }, children: e });
}, rn = _t({
  settings: null,
  siteData: null,
  saveSettings: async () => []
});
function Fa(e) {
  return e.map((t) => {
    if (t.key === "facebook" && t.value) {
      const r = t.value;
      let [, a] = r.match(/(\S+)/) || [];
      return {
        key: t.key,
        value: `https://www.facebook.com/${a}`
      };
    }
    if (t.key === "twitter" && t.value) {
      const r = t.value;
      let [, a] = r.match(/@?([^/]*)/) || [];
      return {
        key: t.key,
        value: `https://twitter.com/${a}`
      };
    }
    return {
      key: t.key,
      value: t.value
    };
  });
}
function $l(e) {
  return e.map((t) => {
    if (t.key === "facebook" && t.value) {
      const r = t.value;
      let [, a] = r.match(/(?:https:\/\/)(?:www\.)(?:facebook\.com)\/(?:#!\/)?(\w+\/?\S+)/mi) || [];
      return {
        key: t.key,
        value: a
      };
    }
    if (t.key === "twitter" && t.value) {
      const r = t.value;
      let [, a] = r.match(/(?:https:\/\/)(?:twitter\.com)\/(?:#!\/)?@?([^/]*)/) || [];
      return {
        key: t.key,
        value: `@${a}`
      };
    }
    return {
      key: t.key,
      value: t.value
    };
  });
}
const Nl = ({ children: e }) => {
  const { api: t } = z(se), [r, a] = A(null), [n, o] = A(null);
  V(() => {
    (async () => {
      try {
        const u = await t.settings.browse(), c = await t.site.browse();
        a(Fa(u.settings)), o(c.site);
      } catch {
      }
    })();
  }, [t]);
  const s = U(async (i) => {
    try {
      i = $l(i);
      const u = await t.settings.edit(i), c = Fa(u.settings);
      return a(c), c;
    } catch {
      return [];
    }
  }, [t]);
  return /* @__PURE__ */ l.jsx(rn.Provider, { value: {
    settings: r,
    saveSettings: s,
    siteData: n
  }, children: e });
}, _i = _t({
  users: [],
  invites: [],
  currentUser: null,
  setInvites: () => {
  },
  setUsers: () => {
  }
}), Rl = ({ children: e }) => {
  const { api: t } = z(se), [r, a] = A([]), [n, o] = A([]), [s, i] = A(null);
  V(() => {
    (async () => {
      try {
        const d = await t.users.browse(), f = await t.users.currentUser(), p = await t.invites.browse();
        a(d.users), i(f), o(p.invites);
      } catch {
      }
    })();
  }, [t]);
  const u = U(async (c) => {
    try {
      const d = await t.users.edit(c);
      a((f) => f.map((p) => p.id === c.id ? d.users[0] : p));
    } catch {
    }
  }, [t]);
  return /* @__PURE__ */ l.jsx(_i.Provider, { value: {
    users: r,
    invites: n,
    currentUser: s,
    updateUser: u,
    setInvites: o,
    setUsers: a
  }, children: e });
}, Ll = ({ children: e }) => /* @__PURE__ */ l.jsx(Nl, { children: /* @__PURE__ */ l.jsx(Rl, { children: /* @__PURE__ */ l.jsx(Tl, { children: e }) }) }), vt = ({ color: e }) => /* @__PURE__ */ l.jsx("hr", { className: `border-${e || "grey-300"}` }), Y = ({
  level: e,
  children: t,
  styles: r = "",
  grey: a,
  separator: n,
  useLabelTag: o,
  className: s = "",
  ...i
}) => {
  e || (e = 1);
  const u = `${o ? "label" : `h${e}`}`;
  r += e === 6 || o ? ` block text-2xs font-semibold uppercase tracking-wide ${a && "text-grey-700"}` : " ";
  const c = pe.createElement(u, { className: r + " " + s, key: "heading-elem", ...i }, t);
  if (n) {
    let d = !e || e === 1 ? 2 : 1, f = e === 6 ? 2 : 3;
    return /* @__PURE__ */ l.jsxs("div", { className: `gap-${d} mb-${f} flex flex-col`, children: [
      c,
      /* @__PURE__ */ l.jsx(vt, {})
    ] });
  } else
    return c;
};
var te = globalThis && globalThis.__assign || function() {
  return te = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, te.apply(this, arguments);
}, Vl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, jn = Symbol("NiceModalId"), ua = {}, at = pe.createContext(ua), Si = pe.createContext(null), Te = {}, gt = {}, Bl = 0, it = function() {
  throw new Error("No dispatch method detected, did you embed your app with NiceModal.Provider?");
}, zl = function() {
  return "_nice_modal_" + Bl++;
}, Ci = function(e, t) {
  var r, a, n;
  switch (e === void 0 && (e = ua), t.type) {
    case "nice-modal/show": {
      var o = t.payload, s = o.modalId, i = o.args;
      return te(te({}, e), (r = {}, r[s] = te(te({}, e[s]), {
        id: s,
        args: i,
        // If modal is not mounted, mount it first then make it visible.
        // There is logic inside HOC wrapper to make it visible after its first mount.
        // This mechanism ensures the entering transition.
        visible: !!gt[s],
        delayVisible: !gt[s]
      }), r));
    }
    case "nice-modal/hide": {
      var s = t.payload.modalId;
      return e[s] ? te(te({}, e), (a = {}, a[s] = te(te({}, e[s]), { visible: !1 }), a)) : e;
    }
    case "nice-modal/remove": {
      var s = t.payload.modalId, u = te({}, e);
      return delete u[s], u;
    }
    case "nice-modal/set-flags": {
      var c = t.payload, s = c.modalId, d = c.flags;
      return te(te({}, e), (n = {}, n[s] = te(te({}, e[s]), d), n));
    }
    default:
      return e;
  }
};
function Ul(e, t) {
  return {
    type: "nice-modal/show",
    payload: {
      modalId: e,
      args: t
    }
  };
}
function Hl(e, t) {
  return {
    type: "nice-modal/set-flags",
    payload: {
      modalId: e,
      flags: t
    }
  };
}
function Gl(e) {
  return {
    type: "nice-modal/hide",
    payload: {
      modalId: e
    }
  };
}
function ql(e) {
  return {
    type: "nice-modal/remove",
    payload: {
      modalId: e
    }
  };
}
var De = {}, Qe = {}, ca = function(e) {
  return typeof e == "string" ? e : (e[jn] || (e[jn] = zl()), e[jn]);
};
function Ei(e, t) {
  var r = ca(e);
  if (typeof e != "string" && !Te[r] && an(r, e), it(Ul(r, t)), !De[r]) {
    var a, n, o = new Promise(function(s, i) {
      a = s, n = i;
    });
    De[r] = {
      resolve: a,
      reject: n,
      promise: o
    };
  }
  return De[r].promise;
}
function ki(e) {
  var t = ca(e);
  if (it(Gl(t)), delete De[t], !Qe[t]) {
    var r, a, n = new Promise(function(o, s) {
      r = o, a = s;
    });
    Qe[t] = {
      resolve: r,
      reject: a,
      promise: n
    };
  }
  return Qe[t].promise;
}
var Mi = function(e) {
  it(ql(e)), delete De[e], delete Qe[e];
}, Wl = function(e, t) {
  it(Hl(e, t));
};
function He(e, t) {
  var r = z(at), a = z(Si), n = null, o = e && typeof e != "string";
  if (e ? n = ca(e) : n = a, !n)
    throw new Error("No modal id found in NiceModal.useModal.");
  var s = n;
  V(function() {
    o && !Te[s] && an(s, e, t);
  }, [o, s, e, t]);
  var i = r[s], u = U(function(g) {
    return Ei(s, g);
  }, [s]), c = U(function() {
    return ki(s);
  }, [s]), d = U(function() {
    return Mi(s);
  }, [s]), f = U(function(g) {
    var b;
    (b = De[s]) === null || b === void 0 || b.resolve(g), delete De[s];
  }, [s]), p = U(function(g) {
    var b;
    (b = De[s]) === null || b === void 0 || b.reject(g), delete De[s];
  }, [s]), m = U(function(g) {
    var b;
    (b = Qe[s]) === null || b === void 0 || b.resolve(g), delete Qe[s];
  }, [s]);
  return {
    id: s,
    args: i == null ? void 0 : i.args,
    visible: !!(i != null && i.visible),
    keepMounted: !!(i != null && i.keepMounted),
    show: u,
    hide: c,
    remove: d,
    resolve: f,
    reject: p,
    resolveHide: m
  };
}
var Zl = function(e) {
  return function(t) {
    var r, a = t.defaultVisible, n = t.keepMounted, o = t.id, s = Vl(t, ["defaultVisible", "keepMounted", "id"]), i = He(o), u = i.args, c = i.show, d = z(at), f = !!d[o];
    V(function() {
      return a && c(), gt[o] = !0, function() {
        delete gt[o];
      };
    }, [o, c, a]), V(function() {
      n && Wl(o, { keepMounted: !0 });
    }, [o, n]);
    var p = (r = d[o]) === null || r === void 0 ? void 0 : r.delayVisible;
    return V(function() {
      p && c(u);
    }, [p, u, c]), f ? pe.createElement(
      Si.Provider,
      { value: o },
      pe.createElement(e, te({}, s, u))
    ) : null;
  };
}, an = function(e, t, r) {
  Te[e] ? Te[e].props = r : Te[e] = { comp: t, props: r };
}, Yl = function(e) {
  delete Te[e];
}, ji = function() {
  var e = z(at), t = Object.keys(e).filter(function(a) {
    return !!e[a];
  });
  t.forEach(function(a) {
    if (!Te[a] && !gt[a]) {
      console.warn("No modal found for id: " + a + ". Please check the id or if it is registered or declared via JSX.");
      return;
    }
  });
  var r = t.filter(function(a) {
    return Te[a];
  }).map(function(a) {
    return te({ id: a }, Te[a]);
  });
  return pe.createElement(pe.Fragment, null, r.map(function(a) {
    return pe.createElement(a.comp, te({ key: a.id, id: a.id }, a.props));
  }));
}, Kl = function(e) {
  var t = e.children, r = gl(Ci, ua), a = r[0];
  return it = r[1], pe.createElement(
    at.Provider,
    { value: a },
    t,
    pe.createElement(ji, null)
  );
}, Jl = function(e) {
  var t = e.children, r = e.dispatch, a = e.modals;
  return !r || !a ? pe.createElement(Kl, null, t) : (it = r, pe.createElement(
    at.Provider,
    { value: a },
    t,
    pe.createElement(ji, null)
  ));
}, Xl = function(e) {
  var t = e.id, r = e.component;
  return V(function() {
    return an(t, r), function() {
      Yl(t);
    };
  }, [t, r]), null;
}, Ql = function(e) {
  return {
    visible: e.visible,
    onOk: function() {
      return e.hide();
    },
    onCancel: function() {
      return e.hide();
    },
    afterClose: function() {
      e.resolveHide(), e.keepMounted || e.remove();
    }
  };
}, eu = function(e) {
  return {
    visible: e.visible,
    onClose: function() {
      return e.hide();
    },
    afterVisibleChange: function(t) {
      t || e.resolveHide(), !t && !e.keepMounted && e.remove();
    }
  };
}, tu = function(e) {
  return {
    open: e.visible,
    onClose: function() {
      return e.hide();
    },
    onExited: function() {
      e.resolveHide(), !e.keepMounted && e.remove();
    }
  };
}, nu = function(e) {
  return {
    show: e.visible,
    onHide: function() {
      return e.hide();
    },
    onExited: function() {
      e.resolveHide(), !e.keepMounted && e.remove();
    }
  };
}, de = {
  Provider: Jl,
  ModalDef: Xl,
  NiceModalContext: at,
  create: Zl,
  register: an,
  show: Ei,
  hide: ki,
  remove: Mi,
  useModal: He,
  reducer: Ci,
  antdModal: Ql,
  antdDrawer: eu,
  muiDialog: tu,
  bootstrapDialog: nu
};
const Re = ({ children: e, color: t, className: r, ...a }) => e ? /* @__PURE__ */ l.jsx("span", { className: `mt-1 inline-block text-xs ${t ? `text-${t}` : "text-grey-700"} ${r}`, ...a, children: e }) : null;
function Ze(e) {
  return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ze(e);
}
function ru(e, t) {
  if (Ze(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (Ze(a) !== "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ai(e) {
  var t = ru(e, "string");
  return Ze(t) === "symbol" ? t : String(t);
}
function mt(e, t, r) {
  return t = Ai(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Oa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oa(Object(r), !0).forEach(function(a) {
      mt(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oa(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function au(e) {
  if (Array.isArray(e))
    return e;
}
function iu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a, n, o, s, i = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (a = o.call(r)).done) && (i.push(a.value), i.length !== t); u = !0)
          ;
    } catch (d) {
      c = !0, n = d;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (c)
          throw n;
      }
    }
    return i;
  }
}
function Bn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function Fi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Bn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Bn(e, t);
  }
}
function su() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $e(e, t) {
  return au(e) || iu(e, t) || Fi(e, t) || su();
}
function ou(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, o;
  for (o = 0; o < a.length; o++)
    n = a[o], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function st(e, t) {
  if (e == null)
    return {};
  var r = ou(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      a = o[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
var lu = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function uu(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, a = e.defaultMenuIsOpen, n = a === void 0 ? !1 : a, o = e.defaultValue, s = o === void 0 ? null : o, i = e.inputValue, u = e.menuIsOpen, c = e.onChange, d = e.onInputChange, f = e.onMenuClose, p = e.onMenuOpen, m = e.value, g = st(e, lu), b = A(i !== void 0 ? i : r), h = $e(b, 2), v = h[0], x = h[1], w = A(u !== void 0 ? u : n), _ = $e(w, 2), M = _[0], k = _[1], y = A(m !== void 0 ? m : s), S = $e(y, 2), C = S[0], T = S[1], N = U(function(be, Ce) {
    typeof c == "function" && c(be, Ce), T(be);
  }, [c]), Z = U(function(be, Ce) {
    var Ee;
    typeof d == "function" && (Ee = d(be, Ce)), x(Ee !== void 0 ? Ee : be);
  }, [d]), re = U(function() {
    typeof p == "function" && p(), k(!0);
  }, [p]), O = U(function() {
    typeof f == "function" && f(), k(!1);
  }, [f]), $ = i !== void 0 ? i : v, K = u !== void 0 ? u : M, oe = m !== void 0 ? m : C;
  return D(D({}, g), {}, {
    inputValue: $,
    menuIsOpen: K,
    onChange: N,
    onInputChange: Z,
    onMenuClose: O,
    onMenuOpen: re,
    value: oe
  });
}
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, P.apply(this, arguments);
}
function cu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ia(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Ai(a.key), a);
  }
}
function du(e, t, r) {
  return t && Ia(e.prototype, t), r && Ia(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function zn(e, t) {
  return zn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, zn(e, t);
}
function fu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && zn(e, t);
}
function Wt(e) {
  return Wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wt(e);
}
function pu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hu(e, t) {
  if (t && (Ze(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mu(e);
}
function vu(e) {
  var t = pu();
  return function() {
    var a = Wt(e), n;
    if (t) {
      var o = Wt(this).constructor;
      n = Reflect.construct(a, arguments, o);
    } else
      n = a.apply(this, arguments);
    return hu(this, n);
  };
}
function gu(e) {
  if (Array.isArray(e))
    return Bn(e);
}
function bu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function xu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oi(e) {
  return gu(e) || bu(e) || Fi(e) || xu();
}
function yu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function wu(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _u = /* @__PURE__ */ function() {
  function e(r) {
    var a = this;
    this._insertTag = function(n) {
      var o;
      a.tags.length === 0 ? a.insertionPoint ? o = a.insertionPoint.nextSibling : a.prepend ? o = a.container.firstChild : o = a.before : o = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(n, o), a.tags.push(n);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(wu(this));
    var n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = yu(n);
      try {
        o.insertRule(a, o.cssRules.length);
      } catch {
      }
    } else
      n.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ue = "-ms-", Zt = "-moz-", R = "-webkit-", Ii = "comm", da = "rule", fa = "decl", Su = "@import", Pi = "@keyframes", Cu = "@layer", Eu = Math.abs, sn = String.fromCharCode, ku = Object.assign;
function Mu(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0;
}
function Di(e) {
  return e.trim();
}
function ju(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function L(e, t, r) {
  return e.replace(t, r);
}
function Un(e, t) {
  return e.indexOf(t);
}
function ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function bt(e, t, r) {
  return e.slice(t, r);
}
function je(e) {
  return e.length;
}
function pa(e) {
  return e.length;
}
function It(e, t) {
  return t.push(e), e;
}
function Au(e, t) {
  return e.map(t).join("");
}
var on = 1, tt = 1, Ti = 0, me = 0, X = 0, ot = "";
function ln(e, t, r, a, n, o, s) {
  return { value: e, root: t, parent: r, type: a, props: n, children: o, line: on, column: tt, length: s, return: "" };
}
function dt(e, t) {
  return ku(ln("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Fu() {
  return X;
}
function Ou() {
  return X = me > 0 ? ae(ot, --me) : 0, tt--, X === 10 && (tt = 1, on--), X;
}
function he() {
  return X = me < Ti ? ae(ot, me++) : 0, tt++, X === 10 && (tt = 1, on++), X;
}
function Fe() {
  return ae(ot, me);
}
function Lt() {
  return me;
}
function St(e, t) {
  return bt(ot, e, t);
}
function xt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $i(e) {
  return on = tt = 1, Ti = je(ot = e), me = 0, [];
}
function Ni(e) {
  return ot = "", e;
}
function Vt(e) {
  return Di(St(me - 1, Hn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Iu(e) {
  for (; (X = Fe()) && X < 33; )
    he();
  return xt(e) > 2 || xt(X) > 3 ? "" : " ";
}
function Pu(e, t) {
  for (; --t && he() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97); )
    ;
  return St(e, Lt() + (t < 6 && Fe() == 32 && he() == 32));
}
function Hn(e) {
  for (; he(); )
    switch (X) {
      case e:
        return me;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hn(X);
        break;
      case 40:
        e === 41 && Hn(e);
        break;
      case 92:
        he();
        break;
    }
  return me;
}
function Du(e, t) {
  for (; he() && e + X !== 47 + 10; )
    if (e + X === 42 + 42 && Fe() === 47)
      break;
  return "/*" + St(t, me - 1) + "*" + sn(e === 47 ? e : he());
}
function Tu(e) {
  for (; !xt(Fe()); )
    he();
  return St(e, me);
}
function $u(e) {
  return Ni(Bt("", null, null, null, [""], e = $i(e), 0, [0], e));
}
function Bt(e, t, r, a, n, o, s, i, u) {
  for (var c = 0, d = 0, f = s, p = 0, m = 0, g = 0, b = 1, h = 1, v = 1, x = 0, w = "", _ = n, M = o, k = a, y = w; h; )
    switch (g = x, x = he()) {
      case 40:
        if (g != 108 && ae(y, f - 1) == 58) {
          Un(y += L(Vt(x), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Vt(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Iu(g);
        break;
      case 92:
        y += Pu(Lt() - 1, 7);
        continue;
      case 47:
        switch (Fe()) {
          case 42:
          case 47:
            It(Nu(Du(he(), Lt()), t, r), u);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * b:
        i[c++] = je(y) * v;
      case 125 * b:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            v == -1 && (y = L(y, /\f/g, "")), m > 0 && je(y) - f && It(m > 32 ? Da(y + ";", a, r, f - 1) : Da(L(y, " ", "") + ";", a, r, f - 2), u);
            break;
          case 59:
            y += ";";
          default:
            if (It(k = Pa(y, t, r, c, d, n, i, w, _ = [], M = [], f), o), x === 123)
              if (d === 0)
                Bt(y, t, k, k, _, o, f, i, M);
              else
                switch (p === 99 && ae(y, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bt(e, k, k, a && It(Pa(e, k, k, 0, 0, n, i, w, n, _ = [], f), M), n, M, f, i, a ? _ : M);
                    break;
                  default:
                    Bt(y, k, k, k, [""], M, 0, i, M);
                }
        }
        c = d = m = 0, b = v = 1, w = y = "", f = s;
        break;
      case 58:
        f = 1 + je(y), m = g;
      default:
        if (b < 1) {
          if (x == 123)
            --b;
          else if (x == 125 && b++ == 0 && Ou() == 125)
            continue;
        }
        switch (y += sn(x), x * b) {
          case 38:
            v = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            i[c++] = (je(y) - 1) * v, v = 1;
            break;
          case 64:
            Fe() === 45 && (y += Vt(he())), p = Fe(), d = f = je(w = y += Tu(Lt())), x++;
            break;
          case 45:
            g === 45 && je(y) == 2 && (b = 0);
        }
    }
  return o;
}
function Pa(e, t, r, a, n, o, s, i, u, c, d) {
  for (var f = n - 1, p = n === 0 ? o : [""], m = pa(p), g = 0, b = 0, h = 0; g < a; ++g)
    for (var v = 0, x = bt(e, f + 1, f = Eu(b = s[g])), w = e; v < m; ++v)
      (w = Di(b > 0 ? p[v] + " " + x : L(x, /&\f/g, p[v]))) && (u[h++] = w);
  return ln(e, t, r, n === 0 ? da : i, u, c, d);
}
function Nu(e, t, r) {
  return ln(e, t, r, Ii, sn(Fu()), bt(e, 2, -2), 0);
}
function Da(e, t, r, a) {
  return ln(e, t, r, fa, bt(e, 0, a), bt(e, a + 1, -1), a);
}
function et(e, t) {
  for (var r = "", a = pa(e), n = 0; n < a; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Ru(e, t, r, a) {
  switch (e.type) {
    case Cu:
      if (e.children.length)
        break;
    case Su:
    case fa:
      return e.return = e.return || e.value;
    case Ii:
      return "";
    case Pi:
      return e.return = e.value + "{" + et(e.children, a) + "}";
    case da:
      e.value = e.props.join(",");
  }
  return je(r = et(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
function Lu(e) {
  var t = pa(e);
  return function(r, a, n, o) {
    for (var s = "", i = 0; i < t; i++)
      s += e[i](r, a, n, o) || "";
    return s;
  };
}
function Vu(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Bu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var zu = function(t, r, a) {
  for (var n = 0, o = 0; n = o, o = Fe(), n === 38 && o === 12 && (r[a] = 1), !xt(o); )
    he();
  return St(t, me);
}, Uu = function(t, r) {
  var a = -1, n = 44;
  do
    switch (xt(n)) {
      case 0:
        n === 38 && Fe() === 12 && (r[a] = 1), t[a] += zu(me - 1, r, a);
        break;
      case 2:
        t[a] += Vt(n);
        break;
      case 4:
        if (n === 44) {
          t[++a] = Fe() === 58 ? "&\f" : "", r[a] = t[a].length;
          break;
        }
      default:
        t[a] += sn(n);
    }
  while (n = he());
  return t;
}, Hu = function(t, r) {
  return Ni(Uu($i(t), r));
}, Ta = /* @__PURE__ */ new WeakMap(), Gu = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, a = t.parent, n = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ta.get(a)) && !n) {
      Ta.set(t, !0);
      for (var o = [], s = Hu(r, o), i = a.props, u = 0, c = 0; u < s.length; u++)
        for (var d = 0; d < i.length; d++, c++)
          t.props[c] = o[u] ? s[u].replace(/&\f/g, i[d]) : i[d] + " " + s[u];
    }
  }
}, qu = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ri(e, t) {
  switch (Mu(e, t)) {
    case 5103:
      return R + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return R + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + Zt + e + ue + e + e;
    case 6828:
    case 4268:
      return R + e + ue + e + e;
    case 6165:
      return R + e + ue + "flex-" + e + e;
    case 5187:
      return R + e + L(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + ue + "flex-$1$2") + e;
    case 5443:
      return R + e + ue + "flex-item-" + L(e, /flex-|-self/, "") + e;
    case 4675:
      return R + e + ue + "flex-line-pack" + L(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return R + e + ue + L(e, "shrink", "negative") + e;
    case 5292:
      return R + e + ue + L(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + L(e, "-grow", "") + R + e + ue + L(e, "grow", "positive") + e;
    case 4554:
      return R + L(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return L(L(L(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return L(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return L(L(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return L(e, /(.+)-inline(.+)/, R + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (je(e) - 1 - t > 6)
        switch (ae(e, t + 1)) {
          case 109:
            if (ae(e, t + 4) !== 45)
              break;
          case 102:
            return L(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + Zt + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Un(e, "stretch") ? Ri(L(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ae(e, je(e) - 3 - (~Un(e, "!important") && 10))) {
        case 107:
          return L(e, ":", ":" + R) + e;
        case 101:
          return L(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + R + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + ue + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return R + e + ue + L(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + ue + L(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + ue + L(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return R + e + ue + e + e;
  }
  return e;
}
var Wu = function(t, r, a, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fa:
        t.return = Ri(t.value, t.length);
        break;
      case Pi:
        return et([dt(t, {
          value: L(t.value, "@", "@" + R)
        })], n);
      case da:
        if (t.length)
          return Au(t.props, function(o) {
            switch (ju(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return et([dt(t, {
                  props: [L(o, /:(read-\w+)/, ":" + Zt + "$1")]
                })], n);
              case "::placeholder":
                return et([dt(t, {
                  props: [L(o, /:(plac\w+)/, ":" + R + "input-$1")]
                }), dt(t, {
                  props: [L(o, /:(plac\w+)/, ":" + Zt + "$1")]
                }), dt(t, {
                  props: [L(o, /:(plac\w+)/, ue + "input-$1")]
                })], n);
            }
            return "";
          });
    }
}, Zu = [Wu], Yu = function(t) {
  var r = t.key;
  if (r === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(b) {
      var h = b.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var n = t.stylisPlugins || Zu, o = {}, s, i = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(b) {
      for (var h = b.getAttribute("data-emotion").split(" "), v = 1; v < h.length; v++)
        o[h[v]] = !0;
      i.push(b);
    }
  );
  var u, c = [Gu, qu];
  {
    var d, f = [Ru, Vu(function(b) {
      d.insert(b);
    })], p = Lu(c.concat(n, f)), m = function(h) {
      return et($u(h), p);
    };
    u = function(h, v, x, w) {
      d = x, m(h ? h + "{" + v.styles + "}" : v.styles), w && (g.inserted[v.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new _u({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(i), g;
}, Li = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne = typeof Symbol == "function" && Symbol.for, ma = ne ? Symbol.for("react.element") : 60103, ha = ne ? Symbol.for("react.portal") : 60106, un = ne ? Symbol.for("react.fragment") : 60107, cn = ne ? Symbol.for("react.strict_mode") : 60108, dn = ne ? Symbol.for("react.profiler") : 60114, fn = ne ? Symbol.for("react.provider") : 60109, pn = ne ? Symbol.for("react.context") : 60110, va = ne ? Symbol.for("react.async_mode") : 60111, mn = ne ? Symbol.for("react.concurrent_mode") : 60111, hn = ne ? Symbol.for("react.forward_ref") : 60112, vn = ne ? Symbol.for("react.suspense") : 60113, Ku = ne ? Symbol.for("react.suspense_list") : 60120, gn = ne ? Symbol.for("react.memo") : 60115, bn = ne ? Symbol.for("react.lazy") : 60116, Ju = ne ? Symbol.for("react.block") : 60121, Xu = ne ? Symbol.for("react.fundamental") : 60117, Qu = ne ? Symbol.for("react.responder") : 60118, ec = ne ? Symbol.for("react.scope") : 60119;
function ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ma:
        switch (e = e.type, e) {
          case va:
          case mn:
          case un:
          case dn:
          case cn:
          case vn:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case pn:
              case hn:
              case bn:
              case gn:
              case fn:
                return e;
              default:
                return t;
            }
        }
      case ha:
        return t;
    }
  }
}
function Vi(e) {
  return ge(e) === mn;
}
B.AsyncMode = va;
B.ConcurrentMode = mn;
B.ContextConsumer = pn;
B.ContextProvider = fn;
B.Element = ma;
B.ForwardRef = hn;
B.Fragment = un;
B.Lazy = bn;
B.Memo = gn;
B.Portal = ha;
B.Profiler = dn;
B.StrictMode = cn;
B.Suspense = vn;
B.isAsyncMode = function(e) {
  return Vi(e) || ge(e) === va;
};
B.isConcurrentMode = Vi;
B.isContextConsumer = function(e) {
  return ge(e) === pn;
};
B.isContextProvider = function(e) {
  return ge(e) === fn;
};
B.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ma;
};
B.isForwardRef = function(e) {
  return ge(e) === hn;
};
B.isFragment = function(e) {
  return ge(e) === un;
};
B.isLazy = function(e) {
  return ge(e) === bn;
};
B.isMemo = function(e) {
  return ge(e) === gn;
};
B.isPortal = function(e) {
  return ge(e) === ha;
};
B.isProfiler = function(e) {
  return ge(e) === dn;
};
B.isStrictMode = function(e) {
  return ge(e) === cn;
};
B.isSuspense = function(e) {
  return ge(e) === vn;
};
B.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === un || e === mn || e === dn || e === cn || e === vn || e === Ku || typeof e == "object" && e !== null && (e.$$typeof === bn || e.$$typeof === gn || e.$$typeof === fn || e.$$typeof === pn || e.$$typeof === hn || e.$$typeof === Xu || e.$$typeof === Qu || e.$$typeof === ec || e.$$typeof === Ju);
};
B.typeOf = ge;
Li.exports = B;
var tc = Li.exports, Bi = tc, nc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, rc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zi = {};
zi[Bi.ForwardRef] = nc;
zi[Bi.Memo] = rc;
var ac = !0;
function ic(e, t, r) {
  var a = "";
  return r.split(" ").forEach(function(n) {
    e[n] !== void 0 ? t.push(e[n] + ";") : a += n + " ";
  }), a;
}
var Ui = function(t, r, a) {
  var n = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ac === !1) && t.registered[n] === void 0 && (t.registered[n] = r.styles);
}, sc = function(t, r, a) {
  Ui(t, r, a);
  var n = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + n : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function oc(e) {
  for (var t = 0, r, a = 0, n = e.length; n >= 4; ++a, n -= 4)
    r = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(a) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var lc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, uc = /[A-Z]|^ms/g, cc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Hi = function(t) {
  return t.charCodeAt(1) === 45;
}, $a = function(t) {
  return t != null && typeof t != "boolean";
}, An = /* @__PURE__ */ Bu(function(e) {
  return Hi(e) ? e : e.replace(uc, "-$&").toLowerCase();
}), Na = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(cc, function(a, n, o) {
          return Ae = {
            name: n,
            styles: o,
            next: Ae
          }, n;
        });
  }
  return lc[t] !== 1 && !Hi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function yt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Ae = {
          name: r.name,
          styles: r.styles,
          next: Ae
        }, r.name;
      if (r.styles !== void 0) {
        var a = r.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ae = {
              name: a.name,
              styles: a.styles,
              next: Ae
            }, a = a.next;
        var n = r.styles + ";";
        return n;
      }
      return dc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = Ae, s = r(e);
        return Ae = o, yt(e, t, s);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var i = t[r];
  return i !== void 0 ? i : r;
}
function dc(e, t, r) {
  var a = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      a += yt(e, t, r[n]) + ";";
  else
    for (var o in r) {
      var s = r[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? a += o + "{" + t[s] + "}" : $a(s) && (a += An(o) + ":" + Na(o, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var i = 0; i < s.length; i++)
          $a(s[i]) && (a += An(o) + ":" + Na(o, s[i]) + ";");
      else {
        var u = yt(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            a += An(o) + ":" + u + ";";
            break;
          }
          default:
            a += o + "{" + u + "}";
        }
      }
    }
  return a;
}
var Ra = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ae, Gi = function(t, r, a) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var n = !0, o = "";
  Ae = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (n = !1, o += yt(a, r, s)) : o += s[0];
  for (var i = 1; i < t.length; i++)
    o += yt(a, r, t[i]), n && (o += s[i]);
  Ra.lastIndex = 0;
  for (var u = "", c; (c = Ra.exec(o)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    c[1];
  var d = oc(o) + u;
  return {
    name: d,
    styles: o,
    next: Ae
  };
}, fc = function(t) {
  return t();
}, pc = E["useInsertionEffect"] ? E["useInsertionEffect"] : !1, mc = pc || fc, ga = {}.hasOwnProperty, qi = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Yu({
    key: "css"
  }) : null
);
qi.Provider;
var hc = function(t) {
  return /* @__PURE__ */ vi(function(r, a) {
    var n = z(qi);
    return t(r, n, a);
  });
}, vc = /* @__PURE__ */ E.createContext({}), Gn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gc = function(t, r) {
  var a = {};
  for (var n in r)
    ga.call(r, n) && (a[n] = r[n]);
  return a[Gn] = t, a;
}, bc = function(t) {
  var r = t.cache, a = t.serialized, n = t.isStringTag;
  return Ui(r, a, n), mc(function() {
    return sc(r, a, n);
  }), null;
}, xc = /* @__PURE__ */ hc(function(e, t, r) {
  var a = e.css;
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var n = e[Gn], o = [a], s = "";
  typeof e.className == "string" ? s = ic(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var i = Gi(o, void 0, E.useContext(vc));
  s += t.key + "-" + i.name;
  var u = {};
  for (var c in e)
    ga.call(e, c) && c !== "css" && c !== Gn && (u[c] = e[c]);
  return u.ref = r, u.className = s, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(bc, {
    cache: t,
    serialized: i,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ E.createElement(n, u));
}), yc = xc, I = function(t, r) {
  var a = arguments;
  if (r == null || !ga.call(r, "css"))
    return E.createElement.apply(void 0, a);
  var n = a.length, o = new Array(n);
  o[0] = yc, o[1] = gc(t, r);
  for (var s = 2; s < n; s++)
    o[s] = a[s];
  return E.createElement.apply(null, o);
};
function ba() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Gi(t);
}
var wc = function() {
  var t = ba.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function _c(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function Sc(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
const Cc = ["top", "right", "bottom", "left"];
Cc.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function Oe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wi(e) {
  return Oe(e).getComputedStyle(e);
}
function Zi(e) {
  return e instanceof Oe(e).Node;
}
function Yi(e) {
  return Zi(e) ? (e.nodeName || "").toLowerCase() : "";
}
function xa(e) {
  return e instanceof Oe(e).HTMLElement;
}
function We(e) {
  return e instanceof Oe(e).Element;
}
function La(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Oe(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ki(e) {
  const { overflow: t, overflowX: r, overflowY: a, display: n } = Wi(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !["inline", "contents"].includes(n);
}
function Ec() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function kc(e) {
  return ["html", "body", "#document"].includes(Yi(e));
}
const Yt = Math.round;
function Mc(e) {
  const t = Wi(e);
  let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const n = xa(e), o = n ? e.offsetWidth : r, s = n ? e.offsetHeight : a, i = Yt(r) !== o || Yt(a) !== s;
  return i && (r = o, a = s), { width: r, height: a, fallback: i };
}
function Ji(e) {
  return We(e) ? e : e.contextElement;
}
const Xi = { x: 1, y: 1 };
function Fn(e) {
  const t = Ji(e);
  if (!xa(t))
    return Xi;
  const r = t.getBoundingClientRect(), { width: a, height: n, fallback: o } = Mc(t);
  let s = (o ? Yt(r.width) : r.width) / a, i = (o ? Yt(r.height) : r.height) / n;
  return s && Number.isFinite(s) || (s = 1), i && Number.isFinite(i) || (i = 1), { x: s, y: i };
}
const Va = { x: 0, y: 0 };
function jc(e, t, r) {
  var a, n;
  if (t === void 0 && (t = !0), !Ec())
    return Va;
  const o = e ? Oe(e) : window;
  return !r || t && r !== o ? Va : { x: ((a = o.visualViewport) == null ? void 0 : a.offsetLeft) || 0, y: ((n = o.visualViewport) == null ? void 0 : n.offsetTop) || 0 };
}
function Ba(e, t, r, a) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = Ji(e);
  let s = Xi;
  t && (a ? We(a) && (s = Fn(a)) : s = Fn(e));
  const i = jc(o, r, a);
  let u = (n.left + i.x) / s.x, c = (n.top + i.y) / s.y, d = n.width / s.x, f = n.height / s.y;
  if (o) {
    const p = Oe(o), m = a && We(a) ? Oe(a) : a;
    let g = p.frameElement;
    for (; g && a && m !== p; ) {
      const b = Fn(g), h = g.getBoundingClientRect(), v = getComputedStyle(g);
      h.x += (g.clientLeft + parseFloat(v.paddingLeft)) * b.x, h.y += (g.clientTop + parseFloat(v.paddingTop)) * b.y, u *= b.x, c *= b.y, d *= b.x, f *= b.y, u += h.x, c += h.y, g = Oe(g).frameElement;
    }
  }
  return Sc({ width: d, height: f, x: u, y: c });
}
function Ac(e) {
  return ((Zi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fc(e) {
  if (Yi(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || La(e) && e.host || Ac(e);
  return La(t) ? t.host : t;
}
function Qi(e) {
  const t = Fc(e);
  return kc(t) ? t.ownerDocument.body : xa(t) && Ki(t) ? t : Qi(t);
}
function zt(e, t) {
  var r;
  t === void 0 && (t = []);
  const a = Qi(e), n = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Oe(a);
  return n ? t.concat(o, o.visualViewport || [], Ki(a) ? a : []) : t.concat(a, zt(a));
}
function Oc(e, t, r, a) {
  a === void 0 && (a = {});
  const { ancestorScroll: n = !0, ancestorResize: o = !0, elementResize: s = !0, animationFrame: i = !1 } = a, u = n || o ? [...We(e) ? zt(e) : e.contextElement ? zt(e.contextElement) : [], ...zt(t)] : [];
  u.forEach((p) => {
    const m = !We(p) && p.toString().includes("V");
    !n || i && !m || p.addEventListener("scroll", r, { passive: !0 }), o && p.addEventListener("resize", r);
  });
  let c, d = null;
  s && (d = new ResizeObserver(() => {
    r();
  }), We(e) && !i && d.observe(e), We(e) || !e.contextElement || i || d.observe(e.contextElement), d.observe(t));
  let f = i ? Ba(e) : null;
  return i && function p() {
    const m = Ba(e);
    !f || m.x === f.x && m.y === f.y && m.width === f.width && m.height === f.height || r(), f = m, c = requestAnimationFrame(p);
  }(), r(), () => {
    var p;
    u.forEach((m) => {
      n && m.removeEventListener("scroll", r), o && m.removeEventListener("resize", r);
    }), (p = d) == null || p.disconnect(), d = null, i && cancelAnimationFrame(c);
  };
}
var qn = bl, Ic = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Kt = function() {
};
function Pc(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function Dc(e, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    a[n - 2] = arguments[n];
  var o = [].concat(a);
  if (t && e)
    for (var s in t)
      t.hasOwnProperty(s) && t[s] && o.push("".concat(Pc(e, s)));
  return o.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var za = function(t) {
  return Uc(t) ? t.filter(Boolean) : Ze(t) === "object" && t !== null ? [t] : [];
}, es = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = st(t, Ic);
  return D({}, r);
}, J = function(t, r, a) {
  var n = t.cx, o = t.getStyles, s = t.getClassNames, i = t.className;
  return {
    css: o(r, t),
    className: n(a ?? {}, s(r, t), i)
  };
};
function xn(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Tc(e) {
  return xn(e) ? window.innerHeight : e.clientHeight;
}
function ts(e) {
  return xn(e) ? window.pageYOffset : e.scrollTop;
}
function Jt(e, t) {
  if (xn(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function $c(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", a = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var n = e; n = n.parentElement; )
    if (t = getComputedStyle(n), !(r && t.position === "static") && a.test(t.overflow + t.overflowY + t.overflowX))
      return n;
  return document.documentElement;
}
function Nc(e, t, r, a) {
  return r * ((e = e / a - 1) * e * e + 1) + t;
}
function Pt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Kt, n = ts(e), o = t - n, s = 10, i = 0;
  function u() {
    i += s;
    var c = Nc(i, n, o, r);
    Jt(e, c), i < r ? window.requestAnimationFrame(u) : a(e);
  }
  u();
}
function Ua(e, t) {
  var r = e.getBoundingClientRect(), a = t.getBoundingClientRect(), n = t.offsetHeight / 3;
  a.bottom + n > r.bottom ? Jt(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + n, e.scrollHeight)) : a.top - n < r.top && Jt(e, Math.max(t.offsetTop - n, 0));
}
function Rc(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function Ha() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Lc() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var ns = !1, Vc = {
  get passive() {
    return ns = !0;
  }
}, Dt = typeof window < "u" ? window : {};
Dt.addEventListener && Dt.removeEventListener && (Dt.addEventListener("p", Kt, Vc), Dt.removeEventListener("p", Kt, !1));
var Bc = ns;
function zc(e) {
  return e != null;
}
function Uc(e) {
  return Array.isArray(e);
}
function Tt(e, t, r) {
  return e ? t : r;
}
var Hc = function(t) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    a[n - 1] = arguments[n];
  var o = Object.entries(t).filter(function(s) {
    var i = $e(s, 1), u = i[0];
    return !a.includes(u);
  });
  return o.reduce(function(s, i) {
    var u = $e(i, 2), c = u[0], d = u[1];
    return s[c] = d, s;
  }, {});
};
function Gc(e) {
  var t = e.maxHeight, r = e.menuEl, a = e.minHeight, n = e.placement, o = e.shouldScroll, s = e.isFixedPosition, i = e.controlHeight, u = $c(r), c = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent)
    return c;
  var d = u.getBoundingClientRect(), f = d.height, p = r.getBoundingClientRect(), m = p.bottom, g = p.height, b = p.top, h = r.offsetParent.getBoundingClientRect(), v = h.top, x = s ? window.innerHeight : Tc(u), w = ts(u), _ = parseInt(getComputedStyle(r).marginBottom, 10), M = parseInt(getComputedStyle(r).marginTop, 10), k = v - M, y = x - b, S = k + w, C = f - w - b, T = m - x + w + _, N = w + b - M, Z = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (y >= g)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (C >= g && !s)
        return o && Pt(u, T, Z), {
          placement: "bottom",
          maxHeight: t
        };
      if (!s && C >= a || s && y >= a) {
        o && Pt(u, T, Z);
        var re = s ? y - _ : C - _;
        return {
          placement: "bottom",
          maxHeight: re
        };
      }
      if (n === "auto" || s) {
        var O = t, $ = s ? k : S;
        return $ >= a && (O = Math.min($ - _ - i, t)), {
          placement: "top",
          maxHeight: O
        };
      }
      if (n === "bottom")
        return o && Jt(u, T), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (k >= g)
        return {
          placement: "top",
          maxHeight: t
        };
      if (S >= g && !s)
        return o && Pt(u, N, Z), {
          placement: "top",
          maxHeight: t
        };
      if (!s && S >= a || s && k >= a) {
        var K = t;
        return (!s && S >= a || s && k >= a) && (K = s ? k - M : S - M), o && Pt(u, N, Z), {
          placement: "top",
          maxHeight: K
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return c;
}
function qc(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var rs = function(t) {
  return t === "auto" ? "bottom" : t;
}, Wc = function(t, r) {
  var a, n = t.placement, o = t.theme, s = o.borderRadius, i = o.spacing, u = o.colors;
  return D((a = {
    label: "menu"
  }, mt(a, qc(n), "100%"), mt(a, "position", "absolute"), mt(a, "width", "100%"), mt(a, "zIndex", 1), a), r ? {} : {
    backgroundColor: u.neutral0,
    borderRadius: s,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: i.menuGutter,
    marginTop: i.menuGutter
  });
}, as = /* @__PURE__ */ _t(null), Zc = function(t) {
  var r = t.children, a = t.minMenuHeight, n = t.maxMenuHeight, o = t.menuPlacement, s = t.menuPosition, i = t.menuShouldScrollIntoView, u = t.theme, c = z(as) || {}, d = c.setPortalPlacement, f = ce(null), p = A(n), m = $e(p, 2), g = m[0], b = m[1], h = A(null), v = $e(h, 2), x = v[0], w = v[1], _ = u.spacing.controlHeight;
  return qn(function() {
    var M = f.current;
    if (M) {
      var k = s === "fixed", y = i && !k, S = Gc({
        maxHeight: n,
        menuEl: M,
        minHeight: a,
        placement: o,
        shouldScroll: y,
        isFixedPosition: k,
        controlHeight: _
      });
      b(S.maxHeight), w(S.placement), d == null || d(S.placement);
    }
  }, [n, o, s, i, a, d, _]), r({
    ref: f,
    placerProps: D(D({}, t), {}, {
      placement: x || rs(o),
      maxHeight: g
    })
  });
}, Yc = function(t) {
  var r = t.children, a = t.innerRef, n = t.innerProps;
  return I("div", P({}, J(t, "menu", {
    menu: !0
  }), {
    ref: a
  }, n), r);
}, Kc = Yc, Jc = function(t, r) {
  var a = t.maxHeight, n = t.theme.spacing.baseUnit;
  return D({
    maxHeight: a,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: n,
    paddingTop: n
  });
}, Xc = function(t) {
  var r = t.children, a = t.innerProps, n = t.innerRef, o = t.isMulti;
  return I("div", P({}, J(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": o
  }), {
    ref: n
  }, a), r);
}, is = function(t, r) {
  var a = t.theme, n = a.spacing.baseUnit, o = a.colors;
  return D({
    textAlign: "center"
  }, r ? {} : {
    color: o.neutral40,
    padding: "".concat(n * 2, "px ").concat(n * 3, "px")
  });
}, Qc = is, ed = is, ss = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", P({}, J(t, "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), a), r);
};
ss.defaultProps = {
  children: "No options"
};
var os = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", P({}, J(t, "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), a), r);
};
os.defaultProps = {
  children: "Loading..."
};
var td = function(t) {
  var r = t.rect, a = t.offset, n = t.position;
  return {
    left: r.left,
    position: n,
    top: a,
    width: r.width,
    zIndex: 1
  };
}, nd = function(t) {
  var r = t.appendTo, a = t.children, n = t.controlElement, o = t.innerProps, s = t.menuPlacement, i = t.menuPosition, u = ce(null), c = ce(null), d = A(rs(s)), f = $e(d, 2), p = f[0], m = f[1], g = Ve(function() {
    return {
      setPortalPlacement: m
    };
  }, []), b = A(null), h = $e(b, 2), v = h[0], x = h[1], w = U(function() {
    if (n) {
      var y = Rc(n), S = i === "fixed" ? 0 : window.pageYOffset, C = y[p] + S;
      (C !== (v == null ? void 0 : v.offset) || y.left !== (v == null ? void 0 : v.rect.left) || y.width !== (v == null ? void 0 : v.rect.width)) && x({
        offset: C,
        rect: y
      });
    }
  }, [n, i, p, v == null ? void 0 : v.offset, v == null ? void 0 : v.rect.left, v == null ? void 0 : v.rect.width]);
  qn(function() {
    w();
  }, [w]);
  var _ = U(function() {
    typeof c.current == "function" && (c.current(), c.current = null), n && u.current && (c.current = Oc(n, u.current, w, {
      elementResize: "ResizeObserver" in window
    }));
  }, [n, w]);
  qn(function() {
    _();
  }, [_]);
  var M = U(function(y) {
    u.current = y, _();
  }, [_]);
  if (!r && i !== "fixed" || !v)
    return null;
  var k = I("div", P({
    ref: M
  }, J(D(D({}, t), {}, {
    offset: v.offset,
    position: i,
    rect: v.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), o), a);
  return I(as.Provider, {
    value: g
  }, r ? /* @__PURE__ */ yl(k, r) : k);
}, rd = function(t) {
  var r = t.isDisabled, a = t.isRtl;
  return {
    label: "container",
    direction: a ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, ad = function(t) {
  var r = t.children, a = t.innerProps, n = t.isDisabled, o = t.isRtl;
  return I("div", P({}, J(t, "container", {
    "--is-disabled": n,
    "--is-rtl": o
  }), a), r);
}, id = function(t, r) {
  var a = t.theme.spacing, n = t.isMulti, o = t.hasValue, s = t.selectProps.controlShouldRenderValue;
  return D({
    alignItems: "center",
    display: n && o && s ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(a.baseUnit / 2, "px ").concat(a.baseUnit * 2, "px")
  });
}, sd = function(t) {
  var r = t.children, a = t.innerProps, n = t.isMulti, o = t.hasValue;
  return I("div", P({}, J(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": n,
    "value-container--has-value": o
  }), a), r);
}, od = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, ld = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", P({}, J(t, "indicatorsContainer", {
    indicators: !0
  }), a), r);
}, Ga, ud = ["size"], cd = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, ls = function(t) {
  var r = t.size, a = st(t, ud);
  return I("svg", P({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: cd
  }, a));
}, ya = function(t) {
  return I(ls, P({
    size: 20
  }, t), I("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, us = function(t) {
  return I(ls, P({
    size: 20
  }, t), I("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, cs = function(t, r) {
  var a = t.isFocused, n = t.theme, o = n.spacing.baseUnit, s = n.colors;
  return D({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: a ? s.neutral60 : s.neutral20,
    padding: o * 2,
    ":hover": {
      color: a ? s.neutral80 : s.neutral40
    }
  });
}, dd = cs, fd = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", P({}, J(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), a), r || I(us, null));
}, pd = cs, md = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", P({}, J(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), a), r || I(ya, null));
}, hd = function(t, r) {
  var a = t.isDisabled, n = t.theme, o = n.spacing.baseUnit, s = n.colors;
  return D({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: a ? s.neutral10 : s.neutral20,
    marginBottom: o * 2,
    marginTop: o * 2
  });
}, vd = function(t) {
  var r = t.innerProps;
  return I("span", P({}, r, J(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, gd = wc(Ga || (Ga = _c([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), bd = function(t, r) {
  var a = t.isFocused, n = t.size, o = t.theme, s = o.colors, i = o.spacing.baseUnit;
  return D({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: n,
    lineHeight: 1,
    marginRight: n,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: a ? s.neutral60 : s.neutral20,
    padding: i * 2
  });
}, On = function(t) {
  var r = t.delay, a = t.offset;
  return I("span", {
    css: /* @__PURE__ */ ba({
      animation: "".concat(gd, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: a ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, ds = function(t) {
  var r = t.innerProps, a = t.isRtl;
  return I("div", P({}, J(t, "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), I(On, {
    delay: 0,
    offset: a
  }), I(On, {
    delay: 160,
    offset: !0
  }), I(On, {
    delay: 320,
    offset: !a
  }));
};
ds.defaultProps = {
  size: 4
};
var xd = function(t, r) {
  var a = t.isDisabled, n = t.isFocused, o = t.theme, s = o.colors, i = o.borderRadius, u = o.spacing;
  return D({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: u.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: a ? s.neutral5 : s.neutral0,
    borderColor: a ? s.neutral10 : n ? s.primary : s.neutral20,
    borderRadius: i,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: n ? "0 0 0 1px ".concat(s.primary) : void 0,
    "&:hover": {
      borderColor: n ? s.primary : s.neutral30
    }
  });
}, yd = function(t) {
  var r = t.children, a = t.isDisabled, n = t.isFocused, o = t.innerRef, s = t.innerProps, i = t.menuIsOpen;
  return I("div", P({
    ref: o
  }, J(t, "control", {
    control: !0,
    "control--is-disabled": a,
    "control--is-focused": n,
    "control--menu-is-open": i
  }), s), r);
}, wd = yd, _d = ["data"], Sd = function(t, r) {
  var a = t.theme.spacing;
  return r ? {} : {
    paddingBottom: a.baseUnit * 2,
    paddingTop: a.baseUnit * 2
  };
}, Cd = function(t) {
  var r = t.children, a = t.cx, n = t.getStyles, o = t.getClassNames, s = t.Heading, i = t.headingProps, u = t.innerProps, c = t.label, d = t.theme, f = t.selectProps;
  return I("div", P({}, J(t, "group", {
    group: !0
  }), u), I(s, P({}, i, {
    selectProps: f,
    theme: d,
    getStyles: n,
    getClassNames: o,
    cx: a
  }), c), I("div", null, r));
}, Ed = function(t, r) {
  var a = t.theme, n = a.colors, o = a.spacing;
  return D({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: n.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: o.baseUnit * 3,
    paddingRight: o.baseUnit * 3,
    textTransform: "uppercase"
  });
}, kd = function(t) {
  var r = es(t);
  r.data;
  var a = st(r, _d);
  return I("div", P({}, J(t, "groupHeading", {
    "group-heading": !0
  }), a));
}, Md = Cd, jd = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Ad = function(t, r) {
  var a = t.isDisabled, n = t.value, o = t.theme, s = o.spacing, i = o.colors;
  return D(D({
    visibility: a ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: n ? "translateZ(0)" : ""
  }, Fd), r ? {} : {
    margin: s.baseUnit / 2,
    paddingBottom: s.baseUnit / 2,
    paddingTop: s.baseUnit / 2,
    color: i.neutral80
  });
}, fs = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, Fd = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": D({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, fs)
}, Od = function(t) {
  return D({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, fs);
}, Id = function(t) {
  var r = t.cx, a = t.value, n = es(t), o = n.innerRef, s = n.isDisabled, i = n.isHidden, u = n.inputClassName, c = st(n, jd);
  return I("div", P({}, J(t, "input", {
    "input-container": !0
  }), {
    "data-value": a || ""
  }), I("input", P({
    className: r({
      input: !0
    }, u),
    ref: o,
    style: Od(i),
    disabled: s
  }, c)));
}, Pd = Id, Dd = function(t, r) {
  var a = t.theme, n = a.spacing, o = a.borderRadius, s = a.colors;
  return D({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: s.neutral10,
    borderRadius: o / 2,
    margin: n.baseUnit / 2
  });
}, Td = function(t, r) {
  var a = t.theme, n = a.borderRadius, o = a.colors, s = t.cropWithEllipsis;
  return D({
    overflow: "hidden",
    textOverflow: s || s === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: n / 2,
    color: o.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, $d = function(t, r) {
  var a = t.theme, n = a.spacing, o = a.borderRadius, s = a.colors, i = t.isFocused;
  return D({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: o / 2,
    backgroundColor: i ? s.dangerLight : void 0,
    paddingLeft: n.baseUnit,
    paddingRight: n.baseUnit,
    ":hover": {
      backgroundColor: s.dangerLight,
      color: s.danger
    }
  });
}, ps = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", a, r);
}, Nd = ps, Rd = ps;
function Ld(e) {
  var t = e.children, r = e.innerProps;
  return I("div", P({
    role: "button"
  }, r), t || I(ya, {
    size: 14
  }));
}
var Vd = function(t) {
  var r = t.children, a = t.components, n = t.data, o = t.innerProps, s = t.isDisabled, i = t.removeProps, u = t.selectProps, c = a.Container, d = a.Label, f = a.Remove;
  return I(c, {
    data: n,
    innerProps: D(D({}, J(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": s
    })), o),
    selectProps: u
  }, I(d, {
    data: n,
    innerProps: D({}, J(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: u
  }, r), I(f, {
    data: n,
    innerProps: D(D({}, J(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, i),
    selectProps: u
  }));
}, Bd = Vd, zd = function(t, r) {
  var a = t.isDisabled, n = t.isFocused, o = t.isSelected, s = t.theme, i = s.spacing, u = s.colors;
  return D({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: o ? u.primary : n ? u.primary25 : "transparent",
    color: a ? u.neutral20 : o ? u.neutral0 : "inherit",
    padding: "".concat(i.baseUnit * 2, "px ").concat(i.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: a ? void 0 : o ? u.primary : u.primary50
    }
  });
}, Ud = function(t) {
  var r = t.children, a = t.isDisabled, n = t.isFocused, o = t.isSelected, s = t.innerRef, i = t.innerProps;
  return I("div", P({}, J(t, "option", {
    option: !0,
    "option--is-disabled": a,
    "option--is-focused": n,
    "option--is-selected": o
  }), {
    ref: s,
    "aria-disabled": a
  }, i), r);
}, Hd = Ud, Gd = function(t, r) {
  var a = t.theme, n = a.spacing, o = a.colors;
  return D({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: o.neutral50,
    marginLeft: n.baseUnit / 2,
    marginRight: n.baseUnit / 2
  });
}, qd = function(t) {
  var r = t.children, a = t.innerProps;
  return I("div", P({}, J(t, "placeholder", {
    placeholder: !0
  }), a), r);
}, Wd = qd, Zd = function(t, r) {
  var a = t.isDisabled, n = t.theme, o = n.spacing, s = n.colors;
  return D({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: a ? s.neutral40 : s.neutral80,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Yd = function(t) {
  var r = t.children, a = t.isDisabled, n = t.innerProps;
  return I("div", P({}, J(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": a
  }), n), r);
}, Kd = Yd, ms = {
  ClearIndicator: md,
  Control: wd,
  DropdownIndicator: fd,
  DownChevron: us,
  CrossIcon: ya,
  Group: Md,
  GroupHeading: kd,
  IndicatorsContainer: ld,
  IndicatorSeparator: vd,
  Input: Pd,
  LoadingIndicator: ds,
  Menu: Kc,
  MenuList: Xc,
  MenuPortal: nd,
  LoadingMessage: os,
  NoOptionsMessage: ss,
  MultiValue: Bd,
  MultiValueContainer: Nd,
  MultiValueLabel: Rd,
  MultiValueRemove: Ld,
  Option: Hd,
  Placeholder: Wd,
  SelectContainer: ad,
  SingleValue: Kd,
  ValueContainer: sd
}, Jd = function(t) {
  return D(D({}, ms), t.components);
}, qa = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Xd(e, t) {
  return !!(e === t || qa(e) && qa(t));
}
function Qd(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Xd(e[r], t[r]))
      return !1;
  return !0;
}
function ef(e, t) {
  t === void 0 && (t = Qd);
  var r = null;
  function a() {
    for (var n = [], o = 0; o < arguments.length; o++)
      n[o] = arguments[o];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var s = e.apply(this, n);
    return r = {
      lastResult: s,
      lastArgs: n,
      lastThis: this
    }, s;
  }
  return a.clear = function() {
    r = null;
  }, a;
}
var tf = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, nf = function(t) {
  return I("span", P({
    css: tf
  }, t));
}, Wa = nf, rf = {
  guidance: function(t) {
    var r = t.isSearchable, a = t.isMulti, n = t.isDisabled, o = t.tabSelectsValue, s = t.context;
    switch (s) {
      case "menu":
        return "Use Up and Down to choose options".concat(n ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(t["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(a ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var r = t.action, a = t.label, n = a === void 0 ? "" : a, o = t.labels, s = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(n, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(o.length > 1 ? "s" : "", " ").concat(o.join(","), ", selected.");
      case "select-option":
        return s ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, a = t.focused, n = t.options, o = t.label, s = o === void 0 ? "" : o, i = t.selectValue, u = t.isDisabled, c = t.isSelected, d = function(g, b) {
      return g && g.length ? "".concat(g.indexOf(b) + 1, " of ").concat(g.length) : "";
    };
    if (r === "value" && i)
      return "value ".concat(s, " focused, ").concat(d(i, a), ".");
    if (r === "menu") {
      var f = u ? " disabled" : "", p = "".concat(c ? "selected" : "focused").concat(f);
      return "option ".concat(s, " ").concat(p, ", ").concat(d(n, a), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, a = t.resultsMessage;
    return "".concat(a).concat(r ? " for search term " + r : "", ".");
  }
}, af = function(t) {
  var r = t.ariaSelection, a = t.focusedOption, n = t.focusedValue, o = t.focusableOptions, s = t.isFocused, i = t.selectValue, u = t.selectProps, c = t.id, d = u.ariaLiveMessages, f = u.getOptionLabel, p = u.inputValue, m = u.isMulti, g = u.isOptionDisabled, b = u.isSearchable, h = u.menuIsOpen, v = u.options, x = u.screenReaderStatus, w = u.tabSelectsValue, _ = u["aria-label"], M = u["aria-live"], k = Ve(function() {
    return D(D({}, rf), d || {});
  }, [d]), y = Ve(function() {
    var O = "";
    if (r && k.onChange) {
      var $ = r.option, K = r.options, oe = r.removedValue, be = r.removedValues, Ce = r.value, Ee = function(ye) {
        return Array.isArray(ye) ? null : ye;
      }, Ie = oe || $ || Ee(Ce), ee = Ie ? f(Ie) : "", le = K || be || void 0, ke = le ? le.map(f) : [], Me = D({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Ie && g(Ie, i),
        label: ee,
        labels: ke
      }, r);
      O = k.onChange(Me);
    }
    return O;
  }, [r, k, g, i, f]), S = Ve(function() {
    var O = "", $ = a || n, K = !!(a && i && i.includes(a));
    if ($ && k.onFocus) {
      var oe = {
        focused: $,
        label: f($),
        isDisabled: g($, i),
        isSelected: K,
        options: o,
        context: $ === a ? "menu" : "value",
        selectValue: i
      };
      O = k.onFocus(oe);
    }
    return O;
  }, [a, n, f, g, k, o, i]), C = Ve(function() {
    var O = "";
    if (h && v.length && k.onFilter) {
      var $ = x({
        count: o.length
      });
      O = k.onFilter({
        inputValue: p,
        resultsMessage: $
      });
    }
    return O;
  }, [o, p, h, k, v, x]), T = Ve(function() {
    var O = "";
    if (k.guidance) {
      var $ = n ? "value" : h ? "menu" : "input";
      O = k.guidance({
        "aria-label": _,
        context: $,
        isDisabled: a && g(a, i),
        isMulti: m,
        isSearchable: b,
        tabSelectsValue: w
      });
    }
    return O;
  }, [_, a, n, m, g, b, h, k, i, w]), N = "".concat(S, " ").concat(C, " ").concat(T), Z = I(Vn, null, I("span", {
    id: "aria-selection"
  }, y), I("span", {
    id: "aria-context"
  }, N)), re = (r == null ? void 0 : r.action) === "initial-input-focus";
  return I(Vn, null, I(Wa, {
    id: c
  }, re && Z), I(Wa, {
    "aria-live": M,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, s && !re && Z));
}, sf = af, Wn = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], of = new RegExp("[" + Wn.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), hs = {};
for (var In = 0; In < Wn.length; In++)
  for (var Pn = Wn[In], Dn = 0; Dn < Pn.letters.length; Dn++)
    hs[Pn.letters[Dn]] = Pn.base;
var vs = function(t) {
  return t.replace(of, function(r) {
    return hs[r];
  });
}, lf = ef(vs), Za = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, uf = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, cf = function(t) {
  return function(r, a) {
    if (r.data.__isNew__)
      return !0;
    var n = D({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: uf,
      trim: !0,
      matchFrom: "any"
    }, t), o = n.ignoreCase, s = n.ignoreAccents, i = n.stringify, u = n.trim, c = n.matchFrom, d = u ? Za(a) : a, f = u ? Za(i(r)) : i(r);
    return o && (d = d.toLowerCase(), f = f.toLowerCase()), s && (d = lf(d), f = vs(f)), c === "start" ? f.substr(0, d.length) === d : f.indexOf(d) > -1;
  };
}, df = ["innerRef"];
function ff(e) {
  var t = e.innerRef, r = st(e, df), a = Hc(r, "onExited", "in", "enter", "exit", "appear");
  return I("input", P({
    ref: t
  }, a, {
    css: /* @__PURE__ */ ba({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var pf = function(t) {
  t.preventDefault(), t.stopPropagation();
};
function mf(e) {
  var t = e.isEnabled, r = e.onBottomArrive, a = e.onBottomLeave, n = e.onTopArrive, o = e.onTopLeave, s = ce(!1), i = ce(!1), u = ce(0), c = ce(null), d = U(function(h, v) {
    if (c.current !== null) {
      var x = c.current, w = x.scrollTop, _ = x.scrollHeight, M = x.clientHeight, k = c.current, y = v > 0, S = _ - M - w, C = !1;
      S > v && s.current && (a && a(h), s.current = !1), y && i.current && (o && o(h), i.current = !1), y && v > S ? (r && !s.current && r(h), k.scrollTop = _, C = !0, s.current = !0) : !y && -v > w && (n && !i.current && n(h), k.scrollTop = 0, C = !0, i.current = !0), C && pf(h);
    }
  }, [r, a, n, o]), f = U(function(h) {
    d(h, h.deltaY);
  }, [d]), p = U(function(h) {
    u.current = h.changedTouches[0].clientY;
  }, []), m = U(function(h) {
    var v = u.current - h.changedTouches[0].clientY;
    d(h, v);
  }, [d]), g = U(function(h) {
    if (h) {
      var v = Bc ? {
        passive: !1
      } : !1;
      h.addEventListener("wheel", f, v), h.addEventListener("touchstart", p, v), h.addEventListener("touchmove", m, v);
    }
  }, [m, p, f]), b = U(function(h) {
    h && (h.removeEventListener("wheel", f, !1), h.removeEventListener("touchstart", p, !1), h.removeEventListener("touchmove", m, !1));
  }, [m, p, f]);
  return V(function() {
    if (t) {
      var h = c.current;
      return g(h), function() {
        b(h);
      };
    }
  }, [t, g, b]), function(h) {
    c.current = h;
  };
}
var Ya = ["boxSizing", "height", "overflow", "paddingRight", "position"], Ka = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function Ja(e) {
  e.preventDefault();
}
function Xa(e) {
  e.stopPropagation();
}
function Qa() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function ei() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var ti = !!(typeof window < "u" && window.document && window.document.createElement), ft = 0, Xe = {
  capture: !1,
  passive: !1
};
function hf(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, a = r === void 0 ? !0 : r, n = ce({}), o = ce(null), s = U(function(u) {
    if (ti) {
      var c = document.body, d = c && c.style;
      if (a && Ya.forEach(function(g) {
        var b = d && d[g];
        n.current[g] = b;
      }), a && ft < 1) {
        var f = parseInt(n.current.paddingRight, 10) || 0, p = document.body ? document.body.clientWidth : 0, m = window.innerWidth - p + f || 0;
        Object.keys(Ka).forEach(function(g) {
          var b = Ka[g];
          d && (d[g] = b);
        }), d && (d.paddingRight = "".concat(m, "px"));
      }
      c && ei() && (c.addEventListener("touchmove", Ja, Xe), u && (u.addEventListener("touchstart", Qa, Xe), u.addEventListener("touchmove", Xa, Xe))), ft += 1;
    }
  }, [a]), i = U(function(u) {
    if (ti) {
      var c = document.body, d = c && c.style;
      ft = Math.max(ft - 1, 0), a && ft < 1 && Ya.forEach(function(f) {
        var p = n.current[f];
        d && (d[f] = p);
      }), c && ei() && (c.removeEventListener("touchmove", Ja, Xe), u && (u.removeEventListener("touchstart", Qa, Xe), u.removeEventListener("touchmove", Xa, Xe)));
    }
  }, [a]);
  return V(function() {
    if (t) {
      var u = o.current;
      return s(u), function() {
        i(u);
      };
    }
  }, [t, s, i]), function(u) {
    o.current = u;
  };
}
var vf = function() {
  return document.activeElement && document.activeElement.blur();
}, gf = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function bf(e) {
  var t = e.children, r = e.lockEnabled, a = e.captureEnabled, n = a === void 0 ? !0 : a, o = e.onBottomArrive, s = e.onBottomLeave, i = e.onTopArrive, u = e.onTopLeave, c = mf({
    isEnabled: n,
    onBottomArrive: o,
    onBottomLeave: s,
    onTopArrive: i,
    onTopLeave: u
  }), d = hf({
    isEnabled: r
  }), f = function(m) {
    c(m), d(m);
  };
  return I(Vn, null, r && I("div", {
    onClick: vf,
    css: gf
  }), t(f));
}
var xf = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, yf = function(t) {
  var r = t.name, a = t.onFocus;
  return I("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: a,
    css: xf,
    value: "",
    onChange: function() {
    }
  });
}, wf = yf, _f = function(t) {
  return t.label;
}, Sf = function(t) {
  return t.label;
}, Cf = function(t) {
  return t.value;
}, Ef = function(t) {
  return !!t.isDisabled;
}, kf = {
  clearIndicator: pd,
  container: rd,
  control: xd,
  dropdownIndicator: dd,
  group: Sd,
  groupHeading: Ed,
  indicatorsContainer: od,
  indicatorSeparator: hd,
  input: Ad,
  loadingIndicator: bd,
  loadingMessage: ed,
  menu: Wc,
  menuList: Jc,
  menuPortal: td,
  multiValue: Dd,
  multiValueLabel: Td,
  multiValueRemove: $d,
  noOptionsMessage: Qc,
  option: zd,
  placeholder: Gd,
  singleValue: Zd,
  valueContainer: id
}, Mf = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, jf = 4, gs = 4, Af = 38, Ff = gs * 2, Of = {
  baseUnit: gs,
  controlHeight: Af,
  menuGutter: Ff
}, Tn = {
  borderRadius: jf,
  colors: Mf,
  spacing: Of
}, If = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Ha(),
  captureMenuScroll: !Ha(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: cf(),
  formatGroupLabel: _f,
  getOptionLabel: Sf,
  getOptionValue: Cf,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Ef,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Lc(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var r = t.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function ni(e, t, r, a) {
  var n = ws(e, t, r), o = _s(e, t, r), s = ys(e, t), i = Xt(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: n,
    isSelected: o,
    label: s,
    value: i,
    index: a
  };
}
function bs(e, t) {
  return e.options.map(function(r, a) {
    if ("options" in r) {
      var n = r.options.map(function(s, i) {
        return ni(e, s, t, i);
      }).filter(function(s) {
        return ri(e, s);
      });
      return n.length > 0 ? {
        type: "group",
        data: r,
        options: n,
        index: a
      } : void 0;
    }
    var o = ni(e, r, t, a);
    return ri(e, o) ? o : void 0;
  }).filter(zc);
}
function xs(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, Oi(r.options.map(function(a) {
      return a.data;
    }))) : t.push(r.data), t;
  }, []);
}
function Pf(e, t) {
  return xs(bs(e, t));
}
function ri(e, t) {
  var r = e.inputValue, a = r === void 0 ? "" : r, n = t.data, o = t.isSelected, s = t.label, i = t.value;
  return (!Cs(e) || !o) && Ss(e, {
    label: s,
    value: i,
    data: n
  }, a);
}
function Df(e, t) {
  var r = e.focusedValue, a = e.selectValue, n = a.indexOf(r);
  if (n > -1) {
    var o = t.indexOf(r);
    if (o > -1)
      return r;
    if (n < t.length)
      return t[n];
  }
  return null;
}
function Tf(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var ys = function(t, r) {
  return t.getOptionLabel(r);
}, Xt = function(t, r) {
  return t.getOptionValue(r);
};
function ws(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function _s(e, t, r) {
  if (r.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var a = Xt(e, t);
  return r.some(function(n) {
    return Xt(e, n) === a;
  });
}
function Ss(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var Cs = function(t) {
  var r = t.hideSelectedOptions, a = t.isMulti;
  return r === void 0 ? a : r;
}, $f = 1, Es = /* @__PURE__ */ function(e) {
  fu(r, e);
  var t = vu(r);
  function r(a) {
    var n;
    if (cu(this, r), n = t.call(this, a), n.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    }, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.instancePrefix = "", n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.controlRef = null, n.getControlRef = function(i) {
      n.controlRef = i;
    }, n.focusedOptionRef = null, n.getFocusedOptionRef = function(i) {
      n.focusedOptionRef = i;
    }, n.menuListRef = null, n.getMenuListRef = function(i) {
      n.menuListRef = i;
    }, n.inputRef = null, n.getInputRef = function(i) {
      n.inputRef = i;
    }, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(i, u) {
      var c = n.props, d = c.onChange, f = c.name;
      u.name = f, n.ariaOnChange(i, u), d(i, u);
    }, n.setValue = function(i, u, c) {
      var d = n.props, f = d.closeMenuOnSelect, p = d.isMulti, m = d.inputValue;
      n.onInputChange("", {
        action: "set-value",
        prevInputValue: m
      }), f && (n.setState({
        inputIsHiddenAfterUpdate: !p
      }), n.onMenuClose()), n.setState({
        clearFocusValueOnUpdate: !0
      }), n.onChange(i, {
        action: u,
        option: c
      });
    }, n.selectOption = function(i) {
      var u = n.props, c = u.blurInputOnSelect, d = u.isMulti, f = u.name, p = n.state.selectValue, m = d && n.isOptionSelected(i, p), g = n.isOptionDisabled(i, p);
      if (m) {
        var b = n.getOptionValue(i);
        n.setValue(p.filter(function(h) {
          return n.getOptionValue(h) !== b;
        }), "deselect-option", i);
      } else if (!g)
        d ? n.setValue([].concat(Oi(p), [i]), "select-option", i) : n.setValue(i, "select-option");
      else {
        n.ariaOnChange(i, {
          action: "select-option",
          option: i,
          name: f
        });
        return;
      }
      c && n.blurInput();
    }, n.removeValue = function(i) {
      var u = n.props.isMulti, c = n.state.selectValue, d = n.getOptionValue(i), f = c.filter(function(m) {
        return n.getOptionValue(m) !== d;
      }), p = Tt(u, f, f[0] || null);
      n.onChange(p, {
        action: "remove-value",
        removedValue: i
      }), n.focusInput();
    }, n.clearValue = function() {
      var i = n.state.selectValue;
      n.onChange(Tt(n.props.isMulti, [], null), {
        action: "clear",
        removedValues: i
      });
    }, n.popValue = function() {
      var i = n.props.isMulti, u = n.state.selectValue, c = u[u.length - 1], d = u.slice(0, u.length - 1), f = Tt(i, d, d[0] || null);
      n.onChange(f, {
        action: "pop-value",
        removedValue: c
      });
    }, n.getValue = function() {
      return n.state.selectValue;
    }, n.cx = function() {
      for (var i = arguments.length, u = new Array(i), c = 0; c < i; c++)
        u[c] = arguments[c];
      return Dc.apply(void 0, [n.props.classNamePrefix].concat(u));
    }, n.getOptionLabel = function(i) {
      return ys(n.props, i);
    }, n.getOptionValue = function(i) {
      return Xt(n.props, i);
    }, n.getStyles = function(i, u) {
      var c = n.props.unstyled, d = kf[i](u, c);
      d.boxSizing = "border-box";
      var f = n.props.styles[i];
      return f ? f(d, u) : d;
    }, n.getClassNames = function(i, u) {
      var c, d;
      return (c = (d = n.props.classNames)[i]) === null || c === void 0 ? void 0 : c.call(d, u);
    }, n.getElementId = function(i) {
      return "".concat(n.instancePrefix, "-").concat(i);
    }, n.getComponents = function() {
      return Jd(n.props);
    }, n.buildCategorizedOptions = function() {
      return bs(n.props, n.state.selectValue);
    }, n.getCategorizedOptions = function() {
      return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
    }, n.buildFocusableOptions = function() {
      return xs(n.buildCategorizedOptions());
    }, n.getFocusableOptions = function() {
      return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
    }, n.ariaOnChange = function(i, u) {
      n.setState({
        ariaSelection: D({
          value: i
        }, u)
      });
    }, n.onMenuMouseDown = function(i) {
      i.button === 0 && (i.stopPropagation(), i.preventDefault(), n.focusInput());
    }, n.onMenuMouseMove = function(i) {
      n.blockOptionHover = !1;
    }, n.onControlMouseDown = function(i) {
      if (!i.defaultPrevented) {
        var u = n.props.openMenuOnClick;
        n.state.isFocused ? n.props.menuIsOpen ? i.target.tagName !== "INPUT" && i.target.tagName !== "TEXTAREA" && n.onMenuClose() : u && n.openMenu("first") : (u && (n.openAfterFocus = !0), n.focusInput()), i.target.tagName !== "INPUT" && i.target.tagName !== "TEXTAREA" && i.preventDefault();
      }
    }, n.onDropdownIndicatorMouseDown = function(i) {
      if (!(i && i.type === "mousedown" && i.button !== 0) && !n.props.isDisabled) {
        var u = n.props, c = u.isMulti, d = u.menuIsOpen;
        n.focusInput(), d ? (n.setState({
          inputIsHiddenAfterUpdate: !c
        }), n.onMenuClose()) : n.openMenu("first"), i.preventDefault();
      }
    }, n.onClearIndicatorMouseDown = function(i) {
      i && i.type === "mousedown" && i.button !== 0 || (n.clearValue(), i.preventDefault(), n.openAfterFocus = !1, i.type === "touchend" ? n.focusInput() : setTimeout(function() {
        return n.focusInput();
      }));
    }, n.onScroll = function(i) {
      typeof n.props.closeMenuOnScroll == "boolean" ? i.target instanceof HTMLElement && xn(i.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(i) && n.props.onMenuClose();
    }, n.onCompositionStart = function() {
      n.isComposing = !0;
    }, n.onCompositionEnd = function() {
      n.isComposing = !1;
    }, n.onTouchStart = function(i) {
      var u = i.touches, c = u && u.item(0);
      c && (n.initialTouchX = c.clientX, n.initialTouchY = c.clientY, n.userIsDragging = !1);
    }, n.onTouchMove = function(i) {
      var u = i.touches, c = u && u.item(0);
      if (c) {
        var d = Math.abs(c.clientX - n.initialTouchX), f = Math.abs(c.clientY - n.initialTouchY), p = 5;
        n.userIsDragging = d > p || f > p;
      }
    }, n.onTouchEnd = function(i) {
      n.userIsDragging || (n.controlRef && !n.controlRef.contains(i.target) && n.menuListRef && !n.menuListRef.contains(i.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
    }, n.onControlTouchEnd = function(i) {
      n.userIsDragging || n.onControlMouseDown(i);
    }, n.onClearIndicatorTouchEnd = function(i) {
      n.userIsDragging || n.onClearIndicatorMouseDown(i);
    }, n.onDropdownIndicatorTouchEnd = function(i) {
      n.userIsDragging || n.onDropdownIndicatorMouseDown(i);
    }, n.handleInputChange = function(i) {
      var u = n.props.inputValue, c = i.currentTarget.value;
      n.setState({
        inputIsHiddenAfterUpdate: !1
      }), n.onInputChange(c, {
        action: "input-change",
        prevInputValue: u
      }), n.props.menuIsOpen || n.onMenuOpen();
    }, n.onInputFocus = function(i) {
      n.props.onFocus && n.props.onFocus(i), n.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
    }, n.onInputBlur = function(i) {
      var u = n.props.inputValue;
      if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
        n.inputRef.focus();
        return;
      }
      n.props.onBlur && n.props.onBlur(i), n.onInputChange("", {
        action: "input-blur",
        prevInputValue: u
      }), n.onMenuClose(), n.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, n.onOptionHover = function(i) {
      n.blockOptionHover || n.state.focusedOption === i || n.setState({
        focusedOption: i
      });
    }, n.shouldHideSelectedOptions = function() {
      return Cs(n.props);
    }, n.onValueInputFocus = function(i) {
      i.preventDefault(), i.stopPropagation(), n.focus();
    }, n.onKeyDown = function(i) {
      var u = n.props, c = u.isMulti, d = u.backspaceRemovesValue, f = u.escapeClearsValue, p = u.inputValue, m = u.isClearable, g = u.isDisabled, b = u.menuIsOpen, h = u.onKeyDown, v = u.tabSelectsValue, x = u.openMenuOnFocus, w = n.state, _ = w.focusedOption, M = w.focusedValue, k = w.selectValue;
      if (!g && !(typeof h == "function" && (h(i), i.defaultPrevented))) {
        switch (n.blockOptionHover = !0, i.key) {
          case "ArrowLeft":
            if (!c || p)
              return;
            n.focusValue("previous");
            break;
          case "ArrowRight":
            if (!c || p)
              return;
            n.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (p)
              return;
            if (M)
              n.removeValue(M);
            else {
              if (!d)
                return;
              c ? n.popValue() : m && n.clearValue();
            }
            break;
          case "Tab":
            if (n.isComposing || i.shiftKey || !b || !v || !_ || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            x && n.isOptionSelected(_, k))
              return;
            n.selectOption(_);
            break;
          case "Enter":
            if (i.keyCode === 229)
              break;
            if (b) {
              if (!_ || n.isComposing)
                return;
              n.selectOption(_);
              break;
            }
            return;
          case "Escape":
            b ? (n.setState({
              inputIsHiddenAfterUpdate: !1
            }), n.onInputChange("", {
              action: "menu-close",
              prevInputValue: p
            }), n.onMenuClose()) : m && f && n.clearValue();
            break;
          case " ":
            if (p)
              return;
            if (!b) {
              n.openMenu("first");
              break;
            }
            if (!_)
              return;
            n.selectOption(_);
            break;
          case "ArrowUp":
            b ? n.focusOption("up") : n.openMenu("last");
            break;
          case "ArrowDown":
            b ? n.focusOption("down") : n.openMenu("first");
            break;
          case "PageUp":
            if (!b)
              return;
            n.focusOption("pageup");
            break;
          case "PageDown":
            if (!b)
              return;
            n.focusOption("pagedown");
            break;
          case "Home":
            if (!b)
              return;
            n.focusOption("first");
            break;
          case "End":
            if (!b)
              return;
            n.focusOption("last");
            break;
          default:
            return;
        }
        i.preventDefault();
      }
    }, n.instancePrefix = "react-select-" + (n.props.instanceId || ++$f), n.state.selectValue = za(a.value), a.menuIsOpen && n.state.selectValue.length) {
      var o = n.buildFocusableOptions(), s = o.indexOf(n.state.selectValue[0]);
      n.state.focusedOption = o[s];
    }
    return n;
  }
  return du(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Ua(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props, s = o.isDisabled, i = o.menuIsOpen, u = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (u && !s && n.isDisabled || // ensure focus is on the Input when the menu opens
      u && i && !n.menuIsOpen) && this.focusInput(), u && s && !n.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !u && !s && n.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Ua(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(n, o) {
      this.props.onInputChange(n, o);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(n) {
      var o = this, s = this.state, i = s.selectValue, u = s.isFocused, c = this.buildFocusableOptions(), d = n === "first" ? 0 : c.length - 1;
      if (!this.props.isMulti) {
        var f = c.indexOf(i[0]);
        f > -1 && (d = f);
      }
      this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: c[d]
      }, function() {
        return o.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(n) {
      var o = this.state, s = o.selectValue, i = o.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var u = s.indexOf(i);
        i || (u = -1);
        var c = s.length - 1, d = -1;
        if (s.length) {
          switch (n) {
            case "previous":
              u === 0 ? d = 0 : u === -1 ? d = c : d = u - 1;
              break;
            case "next":
              u > -1 && u < c && (d = u + 1);
              break;
          }
          this.setState({
            inputIsHidden: d !== -1,
            focusedValue: s[d]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", o = this.props.pageSize, s = this.state.focusedOption, i = this.getFocusableOptions();
      if (i.length) {
        var u = 0, c = i.indexOf(s);
        s || (c = -1), n === "up" ? u = c > 0 ? c - 1 : i.length - 1 : n === "down" ? u = (c + 1) % i.length : n === "pageup" ? (u = c - o, u < 0 && (u = 0)) : n === "pagedown" ? (u = c + o, u > i.length - 1 && (u = i.length - 1)) : n === "last" && (u = i.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: i[u],
          focusedValue: null
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Tn) : D(D({}, Tn), this.props.theme) : Tn;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var n = this.clearValue, o = this.cx, s = this.getStyles, i = this.getClassNames, u = this.getValue, c = this.selectOption, d = this.setValue, f = this.props, p = f.isMulti, m = f.isRtl, g = f.options, b = this.hasValue();
      return {
        clearValue: n,
        cx: o,
        getStyles: s,
        getClassNames: i,
        getValue: u,
        hasValue: b,
        isMulti: p,
        isRtl: m,
        options: g,
        selectOption: c,
        selectProps: f,
        setValue: d,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var n = this.state.selectValue;
      return n.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var n = this.props, o = n.isClearable, s = n.isMulti;
      return o === void 0 ? s : o;
    }
  }, {
    key: "isOptionDisabled",
    value: function(n, o) {
      return ws(this.props, n, o);
    }
  }, {
    key: "isOptionSelected",
    value: function(n, o) {
      return _s(this.props, n, o);
    }
  }, {
    key: "filterOption",
    value: function(n, o) {
      return Ss(this.props, n, o);
    }
  }, {
    key: "formatOptionLabel",
    value: function(n, o) {
      if (typeof this.props.formatOptionLabel == "function") {
        var s = this.props.inputValue, i = this.state.selectValue;
        return this.props.formatOptionLabel(n, {
          context: o,
          inputValue: s,
          selectValue: i
        });
      } else
        return this.getOptionLabel(n);
    }
  }, {
    key: "formatGroupLabel",
    value: function(n) {
      return this.props.formatGroupLabel(n);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var n = this.props, o = n.isDisabled, s = n.isSearchable, i = n.inputId, u = n.inputValue, c = n.tabIndex, d = n.form, f = n.menuIsOpen, p = n.required, m = this.getComponents(), g = m.Input, b = this.state, h = b.inputIsHidden, v = b.ariaSelection, x = this.commonProps, w = i || this.getElementId("input"), _ = D(D(D({
          "aria-autocomplete": "list",
          "aria-expanded": f,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": p,
          role: "combobox"
        }, f && {
          "aria-controls": this.getElementId("listbox"),
          "aria-owns": this.getElementId("listbox")
        }), !s && {
          "aria-readonly": !0
        }), this.hasValue() ? (v == null ? void 0 : v.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return s ? /* @__PURE__ */ E.createElement(g, P({}, x, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: w,
          innerRef: this.getInputRef,
          isDisabled: o,
          isHidden: h,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: c,
          form: d,
          type: "text",
          value: u
        }, _)) : /* @__PURE__ */ E.createElement(ff, P({
          id: w,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Kt,
          onFocus: this.onInputFocus,
          disabled: o,
          tabIndex: c,
          inputMode: "none",
          form: d,
          value: ""
        }, _));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var n = this, o = this.getComponents(), s = o.MultiValue, i = o.MultiValueContainer, u = o.MultiValueLabel, c = o.MultiValueRemove, d = o.SingleValue, f = o.Placeholder, p = this.commonProps, m = this.props, g = m.controlShouldRenderValue, b = m.isDisabled, h = m.isMulti, v = m.inputValue, x = m.placeholder, w = this.state, _ = w.selectValue, M = w.focusedValue, k = w.isFocused;
      if (!this.hasValue() || !g)
        return v ? null : /* @__PURE__ */ E.createElement(f, P({}, p, {
          key: "placeholder",
          isDisabled: b,
          isFocused: k,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), x);
      if (h)
        return _.map(function(S, C) {
          var T = S === M, N = "".concat(n.getOptionLabel(S), "-").concat(n.getOptionValue(S));
          return /* @__PURE__ */ E.createElement(s, P({}, p, {
            components: {
              Container: i,
              Label: u,
              Remove: c
            },
            isFocused: T,
            isDisabled: b,
            key: N,
            index: C,
            removeProps: {
              onClick: function() {
                return n.removeValue(S);
              },
              onTouchEnd: function() {
                return n.removeValue(S);
              },
              onMouseDown: function(re) {
                re.preventDefault();
              }
            },
            data: S
          }), n.formatOptionLabel(S, "value"));
        });
      if (v)
        return null;
      var y = _[0];
      return /* @__PURE__ */ E.createElement(d, P({}, p, {
        data: y,
        isDisabled: b
      }), this.formatOptionLabel(y, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var n = this.getComponents(), o = n.ClearIndicator, s = this.commonProps, i = this.props, u = i.isDisabled, c = i.isLoading, d = this.state.isFocused;
      if (!this.isClearable() || !o || u || !this.hasValue() || c)
        return null;
      var f = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ E.createElement(o, P({}, s, {
        innerProps: f,
        isFocused: d
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var n = this.getComponents(), o = n.LoadingIndicator, s = this.commonProps, i = this.props, u = i.isDisabled, c = i.isLoading, d = this.state.isFocused;
      if (!o || !c)
        return null;
      var f = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ E.createElement(o, P({}, s, {
        innerProps: f,
        isDisabled: u,
        isFocused: d
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var n = this.getComponents(), o = n.DropdownIndicator, s = n.IndicatorSeparator;
      if (!o || !s)
        return null;
      var i = this.commonProps, u = this.props.isDisabled, c = this.state.isFocused;
      return /* @__PURE__ */ E.createElement(s, P({}, i, {
        isDisabled: u,
        isFocused: c
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var n = this.getComponents(), o = n.DropdownIndicator;
      if (!o)
        return null;
      var s = this.commonProps, i = this.props.isDisabled, u = this.state.isFocused, c = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ E.createElement(o, P({}, s, {
        innerProps: c,
        isDisabled: i,
        isFocused: u
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var n = this, o = this.getComponents(), s = o.Group, i = o.GroupHeading, u = o.Menu, c = o.MenuList, d = o.MenuPortal, f = o.LoadingMessage, p = o.NoOptionsMessage, m = o.Option, g = this.commonProps, b = this.state.focusedOption, h = this.props, v = h.captureMenuScroll, x = h.inputValue, w = h.isLoading, _ = h.loadingMessage, M = h.minMenuHeight, k = h.maxMenuHeight, y = h.menuIsOpen, S = h.menuPlacement, C = h.menuPosition, T = h.menuPortalTarget, N = h.menuShouldBlockScroll, Z = h.menuShouldScrollIntoView, re = h.noOptionsMessage, O = h.onMenuScrollToTop, $ = h.onMenuScrollToBottom;
      if (!y)
        return null;
      var K = function(le, ke) {
        var Me = le.type, xe = le.data, ye = le.isDisabled, qe = le.isSelected, Je = le.label, En = le.value, jt = b === xe, At = ye ? void 0 : function() {
          return n.onOptionHover(xe);
        }, kn = ye ? void 0 : function() {
          return n.selectOption(xe);
        }, Ft = "".concat(n.getElementId("option"), "-").concat(ke), Mn = {
          id: Ft,
          onClick: kn,
          onMouseMove: At,
          onMouseOver: At,
          tabIndex: -1
        };
        return /* @__PURE__ */ E.createElement(m, P({}, g, {
          innerProps: Mn,
          data: xe,
          isDisabled: ye,
          isSelected: qe,
          key: Ft,
          label: Je,
          type: Me,
          value: En,
          isFocused: jt,
          innerRef: jt ? n.getFocusedOptionRef : void 0
        }), n.formatOptionLabel(le.data, "menu"));
      }, oe;
      if (this.hasOptions())
        oe = this.getCategorizedOptions().map(function(ee) {
          if (ee.type === "group") {
            var le = ee.data, ke = ee.options, Me = ee.index, xe = "".concat(n.getElementId("group"), "-").concat(Me), ye = "".concat(xe, "-heading");
            return /* @__PURE__ */ E.createElement(s, P({}, g, {
              key: xe,
              data: le,
              options: ke,
              Heading: i,
              headingProps: {
                id: ye,
                data: ee.data
              },
              label: n.formatGroupLabel(ee.data)
            }), ee.options.map(function(qe) {
              return K(qe, "".concat(Me, "-").concat(qe.index));
            }));
          } else if (ee.type === "option")
            return K(ee, "".concat(ee.index));
        });
      else if (w) {
        var be = _({
          inputValue: x
        });
        if (be === null)
          return null;
        oe = /* @__PURE__ */ E.createElement(f, g, be);
      } else {
        var Ce = re({
          inputValue: x
        });
        if (Ce === null)
          return null;
        oe = /* @__PURE__ */ E.createElement(p, g, Ce);
      }
      var Ee = {
        minMenuHeight: M,
        maxMenuHeight: k,
        menuPlacement: S,
        menuPosition: C,
        menuShouldScrollIntoView: Z
      }, Ie = /* @__PURE__ */ E.createElement(Zc, P({}, g, Ee), function(ee) {
        var le = ee.ref, ke = ee.placerProps, Me = ke.placement, xe = ke.maxHeight;
        return /* @__PURE__ */ E.createElement(u, P({}, g, Ee, {
          innerRef: le,
          innerProps: {
            onMouseDown: n.onMenuMouseDown,
            onMouseMove: n.onMenuMouseMove,
            id: n.getElementId("listbox")
          },
          isLoading: w,
          placement: Me
        }), /* @__PURE__ */ E.createElement(bf, {
          captureEnabled: v,
          onTopArrive: O,
          onBottomArrive: $,
          lockEnabled: N
        }, function(ye) {
          return /* @__PURE__ */ E.createElement(c, P({}, g, {
            innerRef: function(Je) {
              n.getMenuListRef(Je), ye(Je);
            },
            isLoading: w,
            maxHeight: xe,
            focusedOption: b
          }), oe);
        }));
      });
      return T || C === "fixed" ? /* @__PURE__ */ E.createElement(d, P({}, g, {
        appendTo: T,
        controlElement: this.controlRef,
        menuPlacement: S,
        menuPosition: C
      }), Ie) : Ie;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var n = this, o = this.props, s = o.delimiter, i = o.isDisabled, u = o.isMulti, c = o.name, d = o.required, f = this.state.selectValue;
      if (d && !this.hasValue() && !i)
        return /* @__PURE__ */ E.createElement(wf, {
          name: c,
          onFocus: this.onValueInputFocus
        });
      if (!(!c || i))
        if (u)
          if (s) {
            var p = f.map(function(b) {
              return n.getOptionValue(b);
            }).join(s);
            return /* @__PURE__ */ E.createElement("input", {
              name: c,
              type: "hidden",
              value: p
            });
          } else {
            var m = f.length > 0 ? f.map(function(b, h) {
              return /* @__PURE__ */ E.createElement("input", {
                key: "i-".concat(h),
                name: c,
                type: "hidden",
                value: n.getOptionValue(b)
              });
            }) : /* @__PURE__ */ E.createElement("input", {
              name: c,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ E.createElement("div", null, m);
          }
        else {
          var g = f[0] ? this.getOptionValue(f[0]) : "";
          return /* @__PURE__ */ E.createElement("input", {
            name: c,
            type: "hidden",
            value: g
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var n = this.commonProps, o = this.state, s = o.ariaSelection, i = o.focusedOption, u = o.focusedValue, c = o.isFocused, d = o.selectValue, f = this.getFocusableOptions();
      return /* @__PURE__ */ E.createElement(sf, P({}, n, {
        id: this.getElementId("live-region"),
        ariaSelection: s,
        focusedOption: i,
        focusedValue: u,
        isFocused: c,
        selectValue: d,
        focusableOptions: f
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.getComponents(), o = n.Control, s = n.IndicatorsContainer, i = n.SelectContainer, u = n.ValueContainer, c = this.props, d = c.className, f = c.id, p = c.isDisabled, m = c.menuIsOpen, g = this.state.isFocused, b = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ E.createElement(i, P({}, b, {
        className: d,
        innerProps: {
          id: f,
          onKeyDown: this.onKeyDown
        },
        isDisabled: p,
        isFocused: g
      }), this.renderLiveRegion(), /* @__PURE__ */ E.createElement(o, P({}, b, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: p,
        isFocused: g,
        menuIsOpen: m
      }), /* @__PURE__ */ E.createElement(u, P({}, b, {
        isDisabled: p
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ E.createElement(s, P({}, b, {
        isDisabled: p
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, o) {
      var s = o.prevProps, i = o.clearFocusValueOnUpdate, u = o.inputIsHiddenAfterUpdate, c = o.ariaSelection, d = o.isFocused, f = o.prevWasFocused, p = n.options, m = n.value, g = n.menuIsOpen, b = n.inputValue, h = n.isMulti, v = za(m), x = {};
      if (s && (m !== s.value || p !== s.options || g !== s.menuIsOpen || b !== s.inputValue)) {
        var w = g ? Pf(n, v) : [], _ = i ? Df(o, v) : null, M = Tf(o, w);
        x = {
          selectValue: v,
          focusedOption: M,
          focusedValue: _,
          clearFocusValueOnUpdate: !1
        };
      }
      var k = u != null && n !== s ? {
        inputIsHidden: u,
        inputIsHiddenAfterUpdate: void 0
      } : {}, y = c, S = d && f;
      return d && !S && (y = {
        value: Tt(h, v, v[0] || null),
        options: v,
        action: "initial-input-focus"
      }, S = !f), (c == null ? void 0 : c.action) === "initial-input-focus" && (y = null), D(D(D({}, x), k), {}, {
        prevProps: n,
        ariaSelection: y,
        prevWasFocused: S
      });
    }
  }]), r;
}(xl);
Es.defaultProps = If;
var Nf = /* @__PURE__ */ vi(function(e, t) {
  var r = uu(e);
  return /* @__PURE__ */ E.createElement(Es, P({
    ref: t
  }, r));
}), Rf = Nf;
const Lf = (e) => {
  switch (e) {
    case "black":
      return "bg-black text-white";
    case "grey":
      return "bg-grey-300 text-black";
    case "green":
      return "bg-green-500 text-white";
    case "pink":
      return "bg-pink-500 text-white";
    default:
      return "";
  }
}, ks = ({
  title: e = "",
  clearBg: t = !1,
  error: r = !1,
  placeholder: a,
  color: n = "grey",
  hint: o = "",
  options: s,
  defaultValues: i,
  onChange: u,
  ...c
}) => {
  const d = {
    control: `w-full cursor-pointer appearance-none min-h-[40px] border-b ${!t && "bg-grey-75 px-[10px]"} py-2 outline-none ${r ? "border-red" : "border-grey-500 hover:border-grey-700"} ${e && !t && "mt-2"}`,
    valueContainer: "gap-1",
    placeHolder: "text-grey-600",
    menu: "shadow py-2 rounded-b z-50 bg-white",
    option: "hover:cursor-pointer hover:bg-grey-100 px-3 py-[6px]",
    multiValue: (p) => `rounded-sm items-center text-[14px] py-px pl-2 pr-1 gap-1.5 ${Lf(p || n)}`,
    noOptionsMessage: "p-3 text-grey-600",
    groupHeading: "py-[6px] px-3 text-2xs font-semibold uppercase tracking-wide text-grey-700"
  }, f = (p) => /* @__PURE__ */ l.jsx(ms.DropdownIndicator, { ...p, children: /* @__PURE__ */ l.jsx("div", { className: `absolute top-[14px] block h-2 w-2 rotate-45 border-[1px] border-l-0 border-t-0 border-grey-900 content-[''] ${t ? "right-0" : "right-4"} ` }) });
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
    e && /* @__PURE__ */ l.jsx(Y, { grey: !!i, useLabelTag: !0, children: e }),
    /* @__PURE__ */ l.jsx(
      Rf,
      {
        classNames: {
          menuList: () => "z-50",
          valueContainer: () => d.valueContainer,
          control: () => d.control,
          placeholder: () => d.placeHolder,
          menu: () => d.menu,
          option: () => d.option,
          multiValue: ({ data: p }) => d.multiValue(p.color),
          noOptionsMessage: () => d.noOptionsMessage,
          groupHeading: () => d.groupHeading
        },
        closeMenuOnSelect: !1,
        components: { DropdownIndicator: f },
        defaultValue: i,
        isClearable: !1,
        options: s,
        placeholder: a || "",
        isMulti: !0,
        unstyled: !0,
        onChange: u,
        ...c
      }
    ),
    o && /* @__PURE__ */ l.jsx(Re, { color: r ? "red" : "", children: o })
  ] });
}, ze = ({
  title: e,
  prompt: t,
  options: r,
  onSelect: a,
  error: n,
  hint: o,
  defaultSelectedOption: s,
  clearBg: i = !0,
  containerClassName: u,
  selectClassName: c,
  optionClassName: d,
  unstyled: f
}) => {
  const p = ia(), [m, g] = A(s);
  V(() => {
    s && g(s);
  }, [s]);
  const b = (_) => {
    const M = _.target.value;
    g(M), a(M);
  };
  let h = "";
  f || (h = W(
    "relative w-full after:pointer-events-none",
    "after:absolute after:block after:h-2 after:w-2 after:rotate-45 after:border-[1px] after:border-l-0 after:border-t-0 after:border-grey-900 after:content-['']",
    "after:top-[14px]",
    i ? "after:right-0" : "after:right-4"
  )), h = W(
    h,
    u
  );
  let v = "";
  f || (v = W(
    "h-10 w-full cursor-pointer appearance-none border-b py-2 pr-5 outline-none",
    !i && "bg-grey-75 px-[10px]",
    n ? "border-red" : "border-grey-500 hover:border-grey-700 focus:border-black",
    e && !i && "mt-2"
  )), v = W(
    v,
    c
  );
  const x = d, w = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e && /* @__PURE__ */ l.jsx(Y, { grey: !!(m || !t), htmlFor: p, useLabelTag: !0, children: e }),
    /* @__PURE__ */ l.jsx("div", { className: h, children: /* @__PURE__ */ l.jsxs("select", { className: v, id: p, value: m, onChange: b, children: [
      t && /* @__PURE__ */ l.jsx("option", { className: x, value: "", children: t }),
      r.map((_) => /* @__PURE__ */ l.jsx(
        "option",
        {
          className: x,
          value: _.value,
          children: _.label
        },
        _.value
      ))
    ] }) }),
    o && /* @__PURE__ */ l.jsx(Re, { color: n ? "red" : "", children: o })
  ] });
  return f ? w : /* @__PURE__ */ l.jsx("div", { children: w });
}, wt = ({ buttons: e, link: t, className: r }) => /* @__PURE__ */ l.jsx("div", { className: `flex items-center ${t ? "gap-5" : "gap-3"} ${r}`, children: e.map(({ key: a, ...n }) => /* @__PURE__ */ l.jsx(ie, { link: t, ...n }, a)) }), Vf = ({ title: e, description: t, children: r }) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
  (e || t) && /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsx(Y, { level: 5, children: e }),
    t && /* @__PURE__ */ l.jsx("p", { className: "mt-0.5 max-w-lg text-sm", children: t })
  ] }),
  r
] }), Q = ({
  navid: e,
  testId: t,
  title: r,
  description: a,
  isEditing: n,
  saveState: o,
  customHeader: s,
  customButtons: i,
  children: u,
  hideEditButton: c,
  alwaysShowSaveButton: d = !0,
  border: f = !0,
  styles: p,
  onEditingChange: m,
  onSave: g,
  onCancel: b
}) => {
  const h = () => {
    m == null || m(!0);
  }, v = () => {
    b == null || b(), m == null || m(!1);
  }, x = () => {
    g == null || g();
  };
  o === "unsaved" ? p += " border-green" : n ? p += " border-grey-300" : p += " border-grey-200";
  let w = [];
  if (c)
    o === "saved" && w.push(
      {
        label: "Saved",
        key: "edit",
        color: "green",
        onClick: h
      }
    );
  else {
    let M = "Edit";
    o === "saved" && (M = "Saved"), w.push(
      {
        label: M,
        key: "edit",
        color: "green",
        onClick: h
      }
    );
  }
  let _ = [
    {
      label: "Cancel",
      key: "cancel",
      onClick: v
    }
  ];
  if (o === "unsaved" || d) {
    let M = "Save";
    o === "saving" && (M = "Saving..."), _.push(
      {
        label: M,
        key: "save",
        color: "green",
        onClick: x
      }
    );
  }
  return /* @__PURE__ */ l.jsxs("div", { className: `relative flex flex-col gap-6 rounded ${f && "border p-5 md:p-7"} ${p}`, "data-testid": t, children: [
    /* @__PURE__ */ l.jsx("div", { className: "absolute top-[-60px]", id: e && e }),
    s || /* @__PURE__ */ l.jsx(Vf, { description: a, title: r, children: i || m && /* @__PURE__ */ l.jsx(wt, { buttons: n ? _ : w, link: !0 }) }),
    u
  ] });
}, Bf = ({ heading: e, value: t, hint: r, ...a }) => /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", ...a, children: [
  e && /* @__PURE__ */ l.jsx(Y, { grey: !0, level: 6, children: e }),
  /* @__PURE__ */ l.jsx("div", { className: `flex items-center ${e && "mt-1"}`, children: t }),
  r && /* @__PURE__ */ l.jsx("p", { className: "mt-1 text-xs", children: r })
] }), G = ({ columns: e, values: t, children: r, className: a }) => {
  let n = "flex flex-col gap-x-6 gap-y-7";
  return e === 2 && (n = "grid grid-cols-2 gap-x-8 gap-y-6"), n += ` ${a}`, /* @__PURE__ */ l.jsxs("div", { className: n, children: [
    t && t.map(({ key: o, ...s }) => /* @__PURE__ */ l.jsx(Bf, { ...s }, o)),
    r
  ] });
}, Ms = ({ initialState: e, onSave: t }) => {
  const [r, a] = A(e), [n, o] = A("");
  return V(() => {
    n === "saved" && setTimeout(() => {
      o((i) => i === "saved" ? "" : i);
    }, 2e3);
  }, [n]), {
    formState: r,
    saveState: n,
    handleSave: async () => {
      n === "unsaved" && (o("saving"), await t(), o("saved"));
    },
    updateForm(i) {
      a(i), o("unsaved");
    },
    reset() {
      a(e), o("");
    }
  };
}, _e = () => {
  const e = ce(null), { siteData: t, settings: r, saveSettings: a } = z(rn) || {}, [n, o] = A(!1), { formState: s, saveState: i, handleSave: u, updateForm: c, reset: d } = Ms({
    initialState: r || [],
    onSave: async () => {
      await (a == null ? void 0 : a(f())), o(!1);
    }
  });
  V(() => {
    n && e.current && e.current.focus();
  }, [n]), V(() => {
    (!n || i === "saving") && d();
  }, [r]);
  const f = () => {
    var b;
    return (b = s == null ? void 0 : s.filter((h) => h.dirty)) == null ? void 0 : b.map((h) => ({
      key: h.key,
      value: h.value
    }));
  };
  return {
    localSettings: s,
    isEditing: n,
    saveState: i,
    focusRef: e,
    siteData: t,
    handleSave: u,
    handleCancel: () => {
      d(), o(!1);
    },
    updateSetting: (b, h) => {
      c((v) => v.map((x) => x.key === b ? { ...x, value: h, dirty: !0 } : x));
    },
    handleEditingChange: (b) => {
      o(b);
    }
  };
}, ai = [{
  label: "Whoever has access to the post",
  value: "visibility"
}, {
  label: "All members",
  value: "all-members"
}, {
  label: "Paid-members only",
  value: "paid-only"
}, {
  label: "Specific people",
  value: "segment"
}, {
  label: "Usually nobody",
  value: "none"
}], zf = [{
  label: "Free members",
  value: "status:free",
  color: "green"
}, {
  label: "Paid members",
  value: "status:-free",
  color: "pink"
}];
function Uf({
  defaultEmailRecipients: e,
  defaultEmailRecipientsFilter: t
}) {
  return e === "filter" ? t === "status:free,status:-free" ? "all-members" : t === "status:-free" ? "paid-only" : t === null ? "none" : "segment" : e;
}
const Hf = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    handleEditingChange: s
  } = _e(), [i, u] = ve(e, [
    "editor_default_email_recipients",
    "editor_default_email_recipients_filter"
  ]), [c, d] = A(Uf({
    defaultEmailRecipients: i,
    defaultEmailRecipientsFilter: u
  })), { api: f } = z(se), [p, m] = A([]), [g, b] = A([]), [h, v] = A([]);
  V(() => {
    f.tiers.browse().then((C) => {
      m(C.tiers);
    }), f.labels.browse().then((C) => {
      b(C.labels);
    }), f.offers.browse().then((C) => {
      v(C.offers);
    });
  }, [f]);
  const x = (C) => {
    ["visibility", "disabled"].includes(C) ? (o("editor_default_email_recipients", C), o("editor_default_email_recipients_filter", null)) : o("editor_default_email_recipients", "filter"), C === "all-members" && o("editor_default_email_recipients_filter", "status:free,status:-free"), C === "paid-only" && o("editor_default_email_recipients_filter", "status:-free"), C === "none" && o("editor_default_email_recipients_filter", null), d(C);
  }, w = [
    {
      options: zf
    },
    {
      label: "Active Tiers",
      options: p.filter(({ active: C }) => C).map((C) => ({ value: C.id, label: C.name, color: "black" }))
    },
    {
      label: "Archived Tiers",
      options: p.filter(({ active: C }) => !C).map((C) => ({ value: C.id, label: C.name, color: "black" }))
    },
    {
      label: "Labels",
      options: g.map((C) => ({ value: `label:${C.slug}`, label: C.name, color: "grey" }))
    },
    {
      label: "Offers",
      options: h.map((C) => ({ value: `offer_redemptions:${C.id}`, label: C.name, color: "black" }))
    }
  ], _ = (u == null ? void 0 : u.split(",")) || [], M = w.flatMap(({ options: C }) => C).filter(({ value: C }) => _.includes(C)), k = (C) => {
    const T = C == null ? void 0 : C.map(({ value: N }) => N).join(",");
    o("editor_default_email_recipients_filter", T);
  }, y = /* @__PURE__ */ l.jsx(
    G,
    {
      values: [
        {
          heading: "Default Newsletter recipients",
          key: "default-recipients",
          value: Rt(ai, c)
        }
      ]
    }
  ), S = /* @__PURE__ */ l.jsxs(G, { columns: 1, children: [
    /* @__PURE__ */ l.jsx(
      ze,
      {
        defaultSelectedOption: c,
        hint: "Who should be able to subscribe to your site?",
        options: ai,
        title: "Default Newsletter recipients",
        onSelect: (C) => {
          x(C);
        }
      }
    ),
    c === "segment" && /* @__PURE__ */ l.jsx(
      ks,
      {
        defaultValues: M,
        options: w.filter((C) => C.options.length > 0),
        title: "Select tiers",
        clearBg: !0,
        onChange: k
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "When you publish new content, who do you usually want to send it to?",
      isEditing: t,
      navid: "default-recipients",
      saveState: r,
      testId: "default-recipients",
      title: "Default recipients",
      onCancel: n,
      onEditingChange: s,
      onSave: a,
      children: t ? S : y
    }
  );
}, Gf = ({ icon: e, iconColorClass: t, children: r }) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ l.jsx(we, { colorClass: t, name: e, size: "sm" }),
  r
] }), Zn = ({ href: e, color: t, className: r, children: a, ...n }) => {
  t || (t = "green");
  let o = t === "black" ? `transition text-black hover:text-black-700 ${r}` : `text-${t} hover:text-${t}-400 ${r}`;
  return /* @__PURE__ */ l.jsx("a", { className: o, href: e, ...n, children: a });
}, H = ({
  type: e = "text",
  inputRef: t,
  title: r,
  hideTitle: a,
  value: n,
  error: o,
  placeholder: s,
  hint: i,
  clearBg: u = !0,
  onChange: c,
  onBlur: d,
  className: f = "",
  maxLength: p,
  ...m
}) => {
  const g = ia();
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
    r && /* @__PURE__ */ l.jsx(Y, { className: a ? "sr-only" : "", grey: !!n, htmlFor: g, useLabelTag: !0, children: r }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        ref: t,
        className: W(
          "h-10 border-b py-2",
          u ? "bg-transparent" : "bg-grey-75 px-[10px]",
          o ? "border-red" : "border-grey-500 hover:border-grey-700 focus:border-black",
          r && !a && !u && "mt-2",
          f
        ),
        defaultValue: n,
        id: g,
        maxLength: p,
        placeholder: s,
        type: e,
        onBlur: d,
        onChange: c,
        ...m
      }
    ),
    i && /* @__PURE__ */ l.jsx(Re, { color: o ? "red" : "", children: i })
  ] });
}, qf = [
  { label: "🇺🇸 US", value: "https://api.mailgun.net/v3" },
  { label: "🇪🇺 EU", value: "https://api.eu.mailgun.net/v3" }
], Wf = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    handleEditingChange: s
  } = _e(), [i, u, c] = ve(e, [
    "mailgun_base_url",
    "mailgun_domain",
    "mailgun_api_key"
  ]), f = u && c ? [
    {
      key: "status",
      value: /* @__PURE__ */ l.jsx(Gf, { icon: "check-circle", iconColorClass: "text-green", children: "Mailgun is set up" })
    }
  ] : [
    {
      heading: "Status",
      key: "status",
      value: "Mailgun is not set up"
    }
  ], p = /* @__PURE__ */ l.jsx(
    G,
    {
      columns: 1,
      values: f
    }
  ), m = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    "Find your Mailgun API keys ",
    /* @__PURE__ */ l.jsx(Zn, { href: "https://app.mailgun.com/app/account/security/api_keys", rel: "noopener noreferrer", target: "_blank", children: "here" })
  ] }), g = /* @__PURE__ */ l.jsx(G, { children: /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-[120px_auto] gap-x-3 gap-y-6", children: [
    /* @__PURE__ */ l.jsx(
      ze,
      {
        defaultSelectedOption: i,
        options: qf,
        title: "Mailgun region",
        onSelect: (h) => {
          o("mailgun_base_url", h);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
      {
        title: "Mailgun domain",
        value: u,
        onChange: (h) => {
          o("mailgun_domain", h.target.value);
        }
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ l.jsx(
      H,
      {
        hint: m,
        title: "Mailgun private API key",
        type: "password",
        value: c,
        onChange: (h) => {
          o("mailgun_api_key", h.target.value);
        }
      }
    ) })
  ] }) }), b = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    "The Mailgun API is used for bulk email newsletter delivery. ",
    /* @__PURE__ */ l.jsx(Zn, { href: "https://ghost.org/docs/faq/mailgun-newsletters/", target: "_blank", children: "Why is this required?" })
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: b,
      isEditing: t,
      navid: "mailgun",
      saveState: r,
      testId: "mailgun",
      title: "Mailgun",
      onCancel: n,
      onEditingChange: s,
      onSave: a,
      children: t ? g : p
    }
  );
}, js = ({ title: e, sticky: t = !1 }) => {
  let r = "pb-4 text-2xs font-semibold uppercase tracking-wide text-grey-700 z-10 ";
  return t && (r += " sticky top-0 -mt-4 pt-4 bg-white"), /* @__PURE__ */ l.jsx("h2", { className: r, children: e });
}, yn = ({ title: e, children: t }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  e && /* @__PURE__ */ l.jsx(js, { sticky: !0, title: e }),
  t && /* @__PURE__ */ l.jsx("div", { className: "mb-[100px] flex flex-col gap-9", children: t })
] }), Zf = () => /* @__PURE__ */ l.jsxs(yn, { title: "Email newsletters", children: [
  /* @__PURE__ */ l.jsx(Hf, {}),
  /* @__PURE__ */ l.jsx(Wf, {})
] }), As = ({ id: e, onUpload: t, children: r, style: a, ...n }) => {
  const o = (s) => {
    var u;
    const i = (u = s.target.files) == null ? void 0 : u[0];
    i && (t == null || t(i));
  };
  return /* @__PURE__ */ l.jsxs("label", { htmlFor: e, style: a, ...n, children: [
    /* @__PURE__ */ l.jsx("input", { id: e, type: "file", hidden: !0, onChange: o }),
    typeof r == "string" ? /* @__PURE__ */ l.jsx("div", { className: "inline-flex h-[34px] cursor-pointer items-center justify-center rounded px-4 text-sm font-semibold hover:bg-grey-100", children: r }) : r
  ] });
}, Ue = ({
  id: e,
  children: t,
  width: r = "100%",
  height: a = "120px",
  imageURL: n,
  imageFit: o = "cover",
  imageContainerClassName: s,
  imageClassName: i,
  fileUploadClassName: u,
  deleteButtonClassName: c,
  deleteButtonContent: d,
  imageBWCheckedBg: f = !1,
  unstyled: p = !1,
  onUpload: m,
  onDelete: g
}) => {
  if (p || (s = W(
    "group relative flex justify-center",
    s
  ), i = W(
    o === "cover" && "object-cover",
    o === "contain" && "object-contain",
    o === "fill" && "object-fill",
    o === "scale-down" && "object-scale-down",
    o === "none" && "object-scale-down",
    i
  ), u = W(
    "flex cursor-pointer items-center justify-center rounded border border-grey-100 bg-grey-75 p-3 text-sm font-semibold text-grey-800 hover:text-black",
    u
  ), c = W(
    "invisible absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-[rgba(0,0,0,0.75)] text-white hover:bg-black group-hover:!visible",
    c
  )), d = d || /* @__PURE__ */ l.jsx(we, { colorClass: "text-white", name: "trash", size: "sm" }), n) {
    let b = /* @__PURE__ */ l.jsxs("div", { className: s, style: {
      width: p ? "" : r,
      height: p ? "" : a
    }, children: [
      /* @__PURE__ */ l.jsx("img", { alt: "", className: i, src: n, style: {
        width: p ? "" : r || "100%",
        height: p ? "" : a || "auto"
      } }),
      /* @__PURE__ */ l.jsx("button", { className: c, type: "button", onClick: g, children: d })
    ] });
    if (f) {
      const h = "#ddd", v = "#f9f9f9";
      b = /* @__PURE__ */ l.jsx("div", { style: {
        backgroundImage: `
                        linear-gradient(45deg, ${h} 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, ${h} 75%),
                        linear-gradient(45deg, transparent 75%, ${h} 75%),
                        linear-gradient(45deg, ${h} 25%, ${v} 25%)
                    `,
        backgroundSize: "32px 32px",
        backgroundPosition: "0 0, 0 0, -16px -16px, 16px 16px"
      }, children: b });
    }
    return b;
  } else
    return /* @__PURE__ */ l.jsx(As, { className: u, id: e, style: {
      width: p ? "" : r,
      height: p ? "" : a
    }, onUpload: m, children: t });
}, wa = ({
  inputRef: e,
  title: t,
  value: r,
  rows: a = 3,
  maxLength: n,
  resize: o = "none",
  error: s,
  placeholder: i,
  hint: u,
  clearBg: c = !0,
  onChange: d,
  ...f
}) => {
  const p = ia();
  let m = `border-b ${c ? "bg-transparent" : "bg-grey-75 px-[10px]"} py-2 ${s ? "border-red" : "border-grey-500 hover:border-grey-700 focus:border-black"} ${t && !c && "mt-2"}`;
  switch (o) {
    case "both":
      m += " resize ";
      break;
    case "vertical":
      m += " resize-y ";
      break;
    case "horizontal":
      m += " resize-x ";
      break;
    case "none":
      m += " resize-none ";
      break;
    default:
      m += " resize ";
      break;
  }
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
    t && /* @__PURE__ */ l.jsx(Y, { grey: !!r, htmlFor: p, useLabelTag: !0, children: t }),
    /* @__PURE__ */ l.jsx(
      "textarea",
      {
        ref: e,
        className: m,
        defaultValue: r,
        id: p,
        maxLength: n,
        placeholder: i,
        rows: a,
        onChange: d,
        ...f
      }
    ),
    u && /* @__PURE__ */ l.jsx(Re, { color: s ? "red" : "", children: u }),
    n && /* @__PURE__ */ l.jsxs(Re, { children: [
      "Max length is ",
      n
    ] })
  ] });
}, Yf = (e) => /* @__PURE__ */ E.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("title", null, "social-facebook"), /* @__PURE__ */ E.createElement("path", { d: "M20 40.004c11.046 0 20-8.955 20-20 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 11.045 8.954 20 20 20z", fill: "#1977F3" }), /* @__PURE__ */ E.createElement("path", { d: "m27.785 25.785.886-5.782h-5.546V16.25c0-1.58.773-3.125 3.26-3.125h2.522V8.204s-2.29-.39-4.477-.39c-4.568 0-7.555 2.767-7.555 7.781v4.408h-5.08v5.782h5.08v13.976a20.08 20.08 0 0 0 3.125.242c1.063 0 2.107-.085 3.125-.242V25.785h4.66z", fill: "#fff" })), Kf = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    focusRef: a,
    handleSave: n,
    handleCancel: o,
    updateSetting: s,
    handleEditingChange: i
  } = _e(), { fileService: u } = z(se), [
    c,
    d,
    f,
    p,
    m
  ] = ve(e, ["og_title", "og_description", "og_image", "title", "description"]), g = (_) => {
    s("og_title", _.target.value);
  }, b = (_) => {
    s("og_description", _.target.value);
  }, h = async (_) => {
    const M = await u.uploadImage(_);
    s("og_image", M);
  }, v = () => {
    s("og_image", "");
  }, x = /* @__PURE__ */ l.jsx(l.Fragment, {}), w = /* @__PURE__ */ l.jsxs("div", { className: "mx-[52px]", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(Yf, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("div", { className: "mb-1 font-semibold leading-none text-grey-900", children: p }),
        /* @__PURE__ */ l.jsx("div", { className: "leading-none text-grey-700", children: "2h" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx("div", { className: "mb-2 h-3 w-full rounded bg-grey-200" }),
      /* @__PURE__ */ l.jsx("div", { className: "mb-4 h-3 w-3/5 rounded bg-grey-200" }),
      /* @__PURE__ */ l.jsxs(G, { className: "overflow-hidden rounded-md border border-grey-300", children: [
        /* @__PURE__ */ l.jsx(
          Ue,
          {
            fileUploadClassName: "flex cursor-pointer items-center justify-center rounded rounded-b-none border border-grey-100 border-b-0 bg-grey-75 p-3 text-sm font-semibold text-grey-800 hover:text-black",
            height: "300px",
            id: "facebook-image",
            imageURL: f,
            onDelete: v,
            onUpload: h,
            children: "Upload Facebook image"
          }
        ),
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-x-6 gap-y-7 px-4 pb-7", children: [
          /* @__PURE__ */ l.jsx(
            H,
            {
              clearBg: !0,
              inputRef: a,
              placeholder: p,
              title: "Facebook title",
              value: c,
              onChange: g
            }
          ),
          /* @__PURE__ */ l.jsx(
            wa,
            {
              clearBg: !0,
              placeholder: m,
              rows: 2,
              title: "Facebook description",
              value: d,
              onChange: b
            }
          )
        ] })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ l.jsxs(
    Q,
    {
      description: "Customize structured data of your site",
      isEditing: t,
      navid: "facebook",
      saveState: r,
      testId: "facebook",
      title: "Facebook card",
      onCancel: o,
      onEditingChange: i,
      onSave: n,
      children: [
        x,
        t ? w : null
      ]
    }
  );
}, Se = ({ id: e, size: t, direction: r, label: a, hint: n, separator: o, error: s, checked: i, onChange: u }) => {
  let c = "", d = "";
  switch (t) {
    case "sm":
      c = " h-3 w-5 after:h-2 after:w-2 checked:after:ml-[1.0rem]", d = "mt-[-5.5px]";
      break;
    case "lg":
      c = " h-5 w-8 after:h-4 after:w-4 checked:after:ml-[1.4rem]", d = "mt-[-1px]";
      break;
    default:
      c = " min-w-[28px] h-4 w-7 after:h-3 after:w-3 checked:after:ml-[1.4rem]", d = "mt-[-3px]";
      break;
  }
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: `group flex items-start gap-2 ${r === "rtl" && "justify-between"} ${o && "pb-2"}`, children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          checked: i,
          className: `appearance-none rounded-full bg-grey-300 transition after:absolute after:ml-0.5 after:mt-0.5 after:rounded-full after:border-none after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green checked:after:absolute checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer group-hover:bg-grey-400 checked:group-hover:bg-green-600 ${c} ${r === "rtl" && " order-2"}`,
          id: e,
          role: "switch",
          type: "checkbox",
          onChange: u
        }
      ),
      a && /* @__PURE__ */ l.jsxs("label", { className: `flex flex-col hover:cursor-pointer ${r === "rtl" && "order-1"} ${d}`, htmlFor: e, children: [
        /* @__PURE__ */ l.jsx("span", { children: a }),
        n && /* @__PURE__ */ l.jsx("span", { className: `text-xs ${s ? "text-red" : "text-grey-700"}`, children: n })
      ] })
    ] }),
    (o || s) && /* @__PURE__ */ l.jsx(vt, { color: s ? "red" : "" })
  ] });
}, Jf = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    handleEditingChange: s
  } = _e(), [i, u] = ve(e, ["is_private", "password"]), c = (g) => {
    o("is_private", g.target.checked);
  }, d = (g) => {
    o("password", g.target.value);
  }, f = /* @__PURE__ */ l.jsx(
    G,
    {
      values: [
        {
          key: "private",
          value: i ? /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ l.jsx(we, { colorClass: "text-yellow", name: "lock-locked", size: "sm" }),
            /* @__PURE__ */ l.jsx("span", { children: "Your site is password protected" })
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-1 text-grey-900", children: [
            /* @__PURE__ */ l.jsx(we, { colorClass: "text-black", name: "lock-unlocked", size: "sm" }),
            /* @__PURE__ */ l.jsx("span", { children: "Your site is not password protected" })
          ] })
        }
      ]
    }
  ), p = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    "A private RSS feed is available at ",
    /* @__PURE__ */ l.jsx(Zn, { href: "http://localhost:2368/51aa059ba6eb50c24c14047d4255ac/rss", children: "http://localhost:2368/51aa059ba6eb50c24c14047d4255ac/rss" })
  ] }), m = /* @__PURE__ */ l.jsxs(G, { children: [
    /* @__PURE__ */ l.jsx(
      Se,
      {
        checked: i,
        direction: "rtl",
        hint: "All search engine optimization and social features will be disabled.",
        id: "enable-password-protection",
        label: "Enable password protection",
        onChange: c
      }
    ),
    i && /* @__PURE__ */ l.jsx(
      H,
      {
        hint: p,
        placeholder: "Enter password",
        title: "Site password",
        value: u,
        hideTitle: !0,
        onChange: d
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "Enable protection with a simple shared password.",
      isEditing: t,
      navid: "locksite",
      saveState: r,
      testId: "locksite",
      title: "Make site private",
      onCancel: n,
      onEditingChange: s,
      onSave: a,
      children: t ? m : f
    }
  );
}, Xf = (e) => /* @__PURE__ */ E.createElement("svg", { fill: "none", viewBox: "0 0 92 31", ...e }, /* @__PURE__ */ E.createElement("title", null, "google"), /* @__PURE__ */ E.createElement("path", { d: "M39.15 15.898c0 4.303-3.378 7.473-7.525 7.473s-7.526-3.17-7.526-7.473c0-4.334 3.38-7.474 7.526-7.474 4.147 0 7.526 3.14 7.526 7.474zm-3.294 0c0-2.69-1.958-4.529-4.231-4.529-2.273 0-4.231 1.84-4.231 4.529 0 2.662 1.958 4.528 4.231 4.528 2.273 0 4.231-1.87 4.231-4.528z", fill: "#EA4335" }), /* @__PURE__ */ E.createElement("path", { d: "M55.386 15.898c0 4.303-3.379 7.473-7.526 7.473-4.146 0-7.526-3.17-7.526-7.473 0-4.33 3.38-7.474 7.526-7.474 4.147 0 7.526 3.14 7.526 7.474zm-3.294 0c0-2.69-1.959-4.529-4.232-4.529s-4.231 1.84-4.231 4.529c0 2.662 1.958 4.528 4.231 4.528 2.273 0 4.232-1.87 4.232-4.528z", fill: "#FBBC05" }), /* @__PURE__ */ E.createElement("path", { d: "M70.945 8.875v13.418c0 5.52-3.267 7.774-7.13 7.774-3.636 0-5.825-2.423-6.65-4.404l2.868-1.19c.511 1.217 1.763 2.652 3.779 2.652 2.472 0 4.004-1.52 4.004-4.38V21.67h-.115c-.737.906-2.158 1.698-3.95 1.698-3.751 0-7.188-3.255-7.188-7.443 0-4.22 3.437-7.501 7.188-7.501 1.789 0 3.21.792 3.95 1.671h.115V8.88h3.129v-.004zm-2.895 7.05c0-2.632-1.763-4.556-4.005-4.556-2.273 0-4.177 1.924-4.177 4.556 0 2.604 1.904 4.501 4.177 4.501 2.242 0 4.005-1.897 4.005-4.501z", fill: "#4285F4" }), /* @__PURE__ */ E.createElement("path", { d: "M76.103 1.01v21.903H72.89V1.011h3.213z", fill: "#34A853" }), /* @__PURE__ */ E.createElement("path", { d: "M88.624 18.357l2.558 1.699c-.826 1.216-2.815 3.312-6.251 3.312-4.262 0-7.445-3.282-7.445-7.474 0-4.444 3.21-7.473 7.076-7.473 3.893 0 5.798 3.086 6.42 4.754l.341.85-10.028 4.137c.768 1.5 1.962 2.264 3.636 2.264 1.678 0 2.841-.822 3.693-2.069zm-7.87-2.688l6.703-2.774c-.368-.933-1.478-1.583-2.783-1.583-1.674 0-4.005 1.472-3.92 4.357z", fill: "#EA4335" }), /* @__PURE__ */ E.createElement("path", { d: "M11.936 13.953v-3.17h10.726c.105.552.159 1.206.159 1.914 0 2.378-.653 5.32-2.757 7.416-2.046 2.123-4.66 3.255-8.124 3.255-6.42 0-11.818-5.21-11.818-11.605C.122 5.368 5.52.158 11.94.158c3.551 0 6.081 1.389 7.982 3.198l-2.246 2.237c-1.363-1.273-3.21-2.264-5.74-2.264-4.688 0-8.354 3.764-8.354 8.434s3.666 8.434 8.354 8.434c3.041 0 4.773-1.216 5.882-2.322.9-.896 1.492-2.176 1.725-3.925l-7.607.003z", fill: "#4285F4" })), Fs = (e) => /* @__PURE__ */ E.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ E.createElement("path", { d: "M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", transform: "translate(-3.056 4.62) rotate(-23.025)" }), /* @__PURE__ */ E.createElement("path", { d: "M16.221 16.22L23.25 23.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Qf = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0wLjc1MCA5LjgxMiBBOS4wNjMgOS4wNjMgMCAxIDAgMTguODc2IDkuODEyIEE5LjA2MyA5LjA2MyAwIDEgMCAwLjc1MCA5LjgxMiBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wNTYgNC42Mikgcm90YXRlKC0yMy4wMjUpIj48L3BhdGg+PHBhdGggZD0iTTE2LjIyMSAxNi4yMkwyMy4yNSAyMy4yNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvc3ZnPg==", ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Fs,
  default: Qf
}, Symbol.toStringTag, { value: "Module" })), tp = ({
  title: e,
  description: t,
  icon: r,
  url: a
}) => {
  const n = a == null ? void 0 : a.replace(/\/$/, ""), o = n == null ? void 0 : n.replace(/^https?:\/\//, "").replace(/\/?$/, "");
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsx(Y, { grey: !0, level: 6, children: "Search engine result preview" }),
    /* @__PURE__ */ l.jsxs("div", { className: "mt-3 flex items-center", children: [
      /* @__PURE__ */ l.jsx("div", { className: "basis-", children: /* @__PURE__ */ l.jsx(Xf, { className: "mr-7 h-7" }) }),
      /* @__PURE__ */ l.jsx("div", { className: "grow", children: /* @__PURE__ */ l.jsx("div", { className: "flex w-full items-center justify-end rounded-full bg-white p-3 px-4 shadow", children: /* @__PURE__ */ l.jsx(Fs, { className: "h-4 w-4 text-blue-600", style: { strokeWidth: "2px" } }) }) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex items-center gap-2 border-t border-grey-200 pt-4", children: [
      /* @__PURE__ */ l.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-grey-200", style: {
        backgroundImage: r ? `url(${r})` : "none"
      } }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col text-sm", children: [
        /* @__PURE__ */ l.jsx("span", { children: o }),
        /* @__PURE__ */ l.jsx("span", { className: "-mt-0.5 inline-block text-xs text-grey-600", children: n })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "mt-1 flex flex-col", children: [
      /* @__PURE__ */ l.jsx("span", { className: "text-lg text-[#1a0dab]", children: e }),
      /* @__PURE__ */ l.jsx("span", { className: "text-sm text-grey-900", children: t })
    ] })
  ] });
}, np = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    siteData: a,
    focusRef: n,
    handleSave: o,
    handleCancel: s,
    updateSetting: i,
    handleEditingChange: u
  } = _e(), [c, d, f, p] = ve(e, ["meta_title", "meta_description", "title", "description"]), m = (h) => {
    i("meta_title", h.target.value);
  }, g = (h) => {
    i("meta_description", h.target.value);
  }, b = /* @__PURE__ */ l.jsxs(G, { children: [
    /* @__PURE__ */ l.jsx(
      H,
      {
        hint: "Recommended: 70 characters",
        inputRef: n,
        placeholder: f,
        title: "Meta title",
        value: c,
        onChange: m
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
      {
        hint: "Recommended: 156 characters",
        placeholder: p,
        title: "Meta description",
        value: d,
        onChange: g
      }
    )
  ] });
  return /* @__PURE__ */ l.jsxs(
    Q,
    {
      description: "Extra content for search engines",
      isEditing: t,
      navid: "metadata",
      saveState: r,
      testId: "metadata",
      title: "Metadata",
      onCancel: s,
      onEditingChange: u,
      onSave: o,
      children: [
        /* @__PURE__ */ l.jsx(
          tp,
          {
            description: d || p,
            icon: a == null ? void 0 : a.icon,
            title: c || f,
            url: a == null ? void 0 : a.url
          }
        ),
        t ? b : null
      ]
    }
  );
}, rp = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    focusRef: s,
    handleEditingChange: i
  } = _e(), [u] = ve(e, ["locale"]), c = (m) => {
    o("locale", m.target.value);
  }, d = /* @__PURE__ */ l.jsx(G, { values: [
    {
      heading: "Site language",
      key: "site-language",
      value: u
    }
  ] }), f = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    "Default: English (",
    /* @__PURE__ */ l.jsx("strong", { children: "en" }),
    "); find out more about",
    /* @__PURE__ */ l.jsx("a", { className: "text-green-400", href: "https://ghost.org/docs/faq/translation/", rel: "noopener noreferrer", target: "_blank", children: " using Ghost in other languages" })
  ] }), p = /* @__PURE__ */ l.jsx(G, { columns: 1, children: /* @__PURE__ */ l.jsx(
    H,
    {
      hint: f,
      inputRef: s,
      placeholder: "Site language",
      title: "Site language",
      value: u,
      onChange: c
    }
  ) });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "Set the language/locale which is used on your site",
      isEditing: t,
      navid: "publication-language",
      saveState: r,
      testId: "publication-language",
      title: "Publication Language",
      onCancel: n,
      onEditingChange: i,
      onSave: a,
      children: t ? p : d
    }
  );
};
var Yn = { exports: {} }, Kn = { exports: {} }, Jn = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(a) {
    var n = typeof a == "string" || a instanceof String;
    if (!n)
      throw new TypeError("This library (validator.js) validates strings only");
  }
  e.exports = t.default;
})(Jn, Jn.exports);
var F = Jn.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), s = Date.parse(s), isNaN(s) ? null : new Date(s);
  }
  e.exports = t.default;
})(Kn, Kn.exports);
var _a = Kn.exports, Xn = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), parseFloat(s);
  }
  e.exports = t.default;
})(Xn, Xn.exports);
var Os = Xn.exports, Qn = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    return (0, a.default)(s), parseInt(s, i || 10);
  }
  e.exports = t.default;
})(Qn, Qn.exports);
var ap = Qn.exports, er = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    return (0, a.default)(s), i ? s === "1" || s === "true" : s !== "0" && s !== "false" && s !== "";
  }
  e.exports = t.default;
})(er, er.exports);
var ip = er.exports, tr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    return (0, a.default)(s), s === i;
  }
  e.exports = t.default;
})(tr, tr.exports);
var sp = tr.exports, nr = { exports: {} }, rr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  };
  t.default = a;
  function a(n) {
    return (typeof n > "u" ? "undefined" : r(n)) === "object" && n !== null ? typeof n.toString == "function" ? n = n.toString() : n = "[object Object]" : (n === null || typeof n > "u" || isNaN(n) && !n.length) && (n = ""), String(n);
  }
  e.exports = t.default;
})(rr, rr.exports);
var Sa = rr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = Sa, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u, c) {
    return (0, a.default)(u), u.indexOf((0, o.default)(c)) >= 0;
  }
  e.exports = t.default;
})(nr, nr.exports);
var op = nr.exports, ar = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i, u) {
    return (0, a.default)(s), Object.prototype.toString.call(i) !== "[object RegExp]" && (i = new RegExp(i, u)), i.test(s);
  }
  e.exports = t.default;
})(ar, ar.exports);
var lp = ar.exports, ir = { exports: {} }, sr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments[1];
    for (var o in n)
      typeof a[o] > "u" && (a[o] = n[o]);
    return a;
  }
  e.exports = t.default;
})(sr, sr.exports);
var Ct = sr.exports, or = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  };
  t.default = s;
  var a = F, n = o(a);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i, u) {
    (0, n.default)(i);
    var c = void 0, d = void 0;
    (typeof u > "u" ? "undefined" : r(u)) === "object" ? (c = u.min || 0, d = u.max) : (c = arguments[1], d = arguments[2]);
    var f = encodeURI(i).split(/%..|./).length - 1;
    return f >= c && (typeof d > "u" || f <= d);
  }
  e.exports = t.default;
})(or, or.exports);
var Is = or.exports, lr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u;
  var r = F, a = s(r), n = Ct, o = s(n);
  function s(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var i = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1
  };
  function u(c, d) {
    (0, a.default)(c), d = (0, o.default)(d, i), d.allow_trailing_dot && c[c.length - 1] === "." && (c = c.substring(0, c.length - 1));
    var f = c.split(".");
    if (d.require_tld) {
      var p = f.pop();
      if (!f.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(p) || /[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(p))
        return !1;
    }
    for (var m, g = 0; g < f.length; g++)
      if (m = f[g], d.allow_underscores && (m = m.replace(/_/g, "")), !/^[a-z\u00a1-\uffff0-9-]+$/i.test(m) || /[\uff01-\uff5e]/.test(m) || m[0] === "-" || m[m.length - 1] === "-")
        return !1;
    return !0;
  }
  e.exports = t.default;
})(lr, lr.exports);
var Ca = lr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = v;
  var r = F, a = d(r), n = Ct, o = d(n), s = Is, i = d(s), u = Ca, c = d(u);
  function d(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var f = {
    allow_display_name: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0
  }, p = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i, m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, b = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  function v(x, w) {
    if ((0, a.default)(x), w = (0, o.default)(w, f), w.require_display_name || w.allow_display_name) {
      var _ = x.match(p);
      if (_)
        x = _[1];
      else if (w.require_display_name)
        return !1;
    }
    var M = x.split("@"), k = M.pop(), y = M.join("@"), S = k.toLowerCase();
    if ((S === "gmail.com" || S === "googlemail.com") && (y = y.replace(/\./g, "").toLowerCase()), !(0, i.default)(y, { max: 64 }) || !(0, i.default)(k, { max: 254 }) || !(0, c.default)(k, { require_tld: w.require_tld }))
      return !1;
    if (y[0] === '"')
      return y = y.slice(1, y.length - 1), w.allow_utf8_local_part ? h.test(y) : g.test(y);
    for (var C = w.allow_utf8_local_part ? b : m, T = y.split("."), N = 0; N < T.length; N++)
      if (!C.test(T[N]))
        return !1;
    return !0;
  }
  e.exports = t.default;
})(ir, ir.exports);
var Ps = ir.exports, ur = { exports: {} }, cr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = n(r);
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var o = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/, s = /^[0-9A-F]{1,4}$/i;
  function i(u) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if ((0, a.default)(u), c = String(c), c) {
      if (c === "4") {
        if (!o.test(u))
          return !1;
        var d = u.split(".").sort(function(h, v) {
          return h - v;
        });
        return d[3] <= 255;
      } else if (c === "6") {
        var f = u.split(":"), p = !1, m = i(f[f.length - 1], 4), g = m ? 7 : 8;
        if (f.length > g)
          return !1;
        if (u === "::")
          return !0;
        u.substr(0, 2) === "::" ? (f.shift(), f.shift(), p = !0) : u.substr(u.length - 2) === "::" && (f.pop(), f.pop(), p = !0);
        for (var b = 0; b < f.length; ++b)
          if (f[b] === "" && b > 0 && b < f.length - 1) {
            if (p)
              return !1;
            p = !0;
          } else if (!(m && b === f.length - 1)) {
            if (!s.test(f[b]))
              return !1;
          }
        return p ? f.length >= 1 : f.length === g;
      }
    } else
      return i(u, 4) || i(u, 6);
    return !1;
  }
  e.exports = t.default;
})(cr, cr.exports);
var Ds = cr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = b;
  var r = F, a = d(r), n = Ca, o = d(n), s = Ds, i = d(s), u = Ct, c = d(u);
  function d(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var f = {
    protocols: ["http", "https", "ftp"],
    require_tld: !0,
    require_protocol: !1,
    require_host: !0,
    require_valid_protocol: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_protocol_relative_urls: !1
  }, p = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function m(h) {
    return Object.prototype.toString.call(h) === "[object RegExp]";
  }
  function g(h, v) {
    for (var x = 0; x < v.length; x++) {
      var w = v[x];
      if (h === w || m(w) && w.test(h))
        return !0;
    }
    return !1;
  }
  function b(h, v) {
    if ((0, a.default)(h), !h || h.length >= 2083 || /[\s<>]/.test(h) || h.indexOf("mailto:") === 0)
      return !1;
    v = (0, c.default)(v, f);
    var x = void 0, w = void 0, _ = void 0, M = void 0, k = void 0, y = void 0, S = void 0, C = void 0;
    if (S = h.split("#"), h = S.shift(), S = h.split("?"), h = S.shift(), S = h.split("://"), S.length > 1) {
      if (x = S.shift(), v.require_valid_protocol && v.protocols.indexOf(x) === -1)
        return !1;
    } else {
      if (v.require_protocol)
        return !1;
      v.allow_protocol_relative_urls && h.substr(0, 2) === "//" && (S[0] = h.substr(2));
    }
    if (h = S.join("://"), S = h.split("/"), h = S.shift(), h === "" && !v.require_host)
      return !0;
    if (S = h.split("@"), S.length > 1 && (w = S.shift(), w.indexOf(":") >= 0 && w.split(":").length > 2))
      return !1;
    M = S.join("@"), y = null, C = null;
    var T = M.match(p);
    return T ? (_ = "", C = T[1], y = T[2] || null) : (S = M.split(":"), _ = S.shift(), S.length && (y = S.join(":"))), !(y !== null && (k = parseInt(y, 10), !/^[0-9]+$/.test(y) || k <= 0 || k > 65535) || !(0, i.default)(_) && !(0, o.default)(_, v) && (!C || !(0, i.default)(C, 6)) && _ !== "localhost" || (_ = _ || C, v.host_whitelist && !g(_, v.host_whitelist)) || v.host_blacklist && g(_, v.host_blacklist));
  }
  e.exports = t.default;
})(ur, ur.exports);
var up = ur.exports, dr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(dr, dr.exports);
var cp = dr.exports, fr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), ["true", "false", "1", "0"].indexOf(s) >= 0;
  }
  e.exports = t.default;
})(fr, fr.exports);
var dp = fr.exports, pr = { exports: {} }, Ye = {};
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
var nt = Ye.alpha = {
  "en-US": /^[A-Z]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "nl-NL": /^[A-ZÉËÏÓÖÜ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
}, rt = Ye.alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nl-NL": /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
}, ii = Ye.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var $n, Nn = 0; Nn < ii.length; Nn++)
  $n = "en-" + ii[Nn], nt[$n] = nt["en-US"], rt[$n] = rt["en-US"];
nt["pt-BR"] = nt["pt-PT"];
rt["pt-BR"] = rt["pt-PT"];
var si = Ye.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var Rn, Ln = 0; Ln < si.length; Ln++)
  Rn = "ar-" + si[Ln], nt[Rn] = nt.ar, rt[Rn] = rt.ar;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = o(r), n = Ye;
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    if ((0, a.default)(i), u in n.alpha)
      return n.alpha[u].test(i);
    throw new Error("Invalid locale '" + u + "'");
  }
  e.exports = t.default;
})(pr, pr.exports);
var fp = pr.exports, mr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = o(r), n = Ye;
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    if ((0, a.default)(i), u in n.alphanumeric)
      return n.alphanumeric[u].test(i);
    throw new Error("Invalid locale '" + u + "'");
  }
  e.exports = t.default;
})(mr, mr.exports);
var pp = mr.exports, hr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[-+]?[0-9]+$/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(hr, hr.exports);
var mp = hr.exports, vr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), s === s.toLowerCase();
  }
  e.exports = t.default;
})(vr, vr.exports);
var hp = vr.exports, gr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), s === s.toUpperCase();
  }
  e.exports = t.default;
})(gr, gr.exports);
var vp = gr.exports, br = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[\x00-\x7F]+$/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(br, br.exports);
var gp = br.exports, lt = {};
Object.defineProperty(lt, "__esModule", {
  value: !0
});
lt.fullWidth = void 0;
lt.default = _p;
var bp = F, xp = yp(bp);
function yp(e) {
  return e && e.__esModule ? e : { default: e };
}
var wp = lt.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function _p(e) {
  return (0, xp.default)(e), wp.test(e);
}
var ut = {};
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.halfWidth = void 0;
ut.default = Mp;
var Sp = F, Cp = Ep(Sp);
function Ep(e) {
  return e && e.__esModule ? e : { default: e };
}
var kp = ut.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function Mp(e) {
  return (0, Cp.default)(e), kp.test(e);
}
var xr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = lt, o = ut;
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u) {
    return (0, a.default)(u), n.fullWidth.test(u) && o.halfWidth.test(u);
  }
  e.exports = t.default;
})(xr, xr.exports);
var jp = xr.exports, yr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /[^\x00-\x7F]/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(yr, yr.exports);
var Ap = yr.exports, wr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(wr, wr.exports);
var Fp = wr.exports, _r = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = n(r);
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var o = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, s = /^[-+]?[0-9]+$/;
  function i(u, c) {
    (0, a.default)(u), c = c || {};
    var d = c.hasOwnProperty("allow_leading_zeroes") && !c.allow_leading_zeroes ? o : s, f = !c.hasOwnProperty("min") || u >= c.min, p = !c.hasOwnProperty("max") || u <= c.max, m = !c.hasOwnProperty("lt") || u < c.lt, g = !c.hasOwnProperty("gt") || u > c.gt;
    return d.test(u) && f && p && m && g;
  }
  e.exports = t.default;
})(_r, _r.exports);
var Op = _r.exports, Sr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;
  function s(i, u) {
    return (0, a.default)(i), u = u || {}, i === "" || i === "." ? !1 : o.test(i) && (!u.hasOwnProperty("min") || i >= u.min) && (!u.hasOwnProperty("max") || i <= u.max) && (!u.hasOwnProperty("lt") || i < u.lt) && (!u.hasOwnProperty("gt") || i > u.gt);
  }
  e.exports = t.default;
})(Sr, Sr.exports);
var Ip = Sr.exports, Cr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;
  function s(i) {
    return (0, a.default)(i), i !== "" && o.test(i);
  }
  e.exports = t.default;
})(Cr, Cr.exports);
var Pp = Cr.exports, Er = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[0-9A-F]+$/i;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(Er, Er.exports);
var Ts = Er.exports, kr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = Os, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u, c) {
    return (0, a.default)(u), (0, o.default)(u) % parseInt(c, 10) === 0;
  }
  e.exports = t.default;
})(kr, kr.exports);
var Dp = kr.exports, Mr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(Mr, Mr.exports);
var Tp = Mr.exports, jr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(jr, jr.exports);
var $p = jr.exports, Ar = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[a-f0-9]{32}$/;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(Ar, Ar.exports);
var Np = Ar.exports, Fr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  };
  t.default = s;
  var a = F, n = o(a);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    (0, n.default)(i);
    try {
      var u = JSON.parse(i);
      return !!u && (typeof u > "u" ? "undefined" : r(u)) === "object";
    } catch {
    }
    return !1;
  }
  e.exports = t.default;
})(Fr, Fr.exports);
var Rp = Fr.exports, Or = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), s.length === 0;
  }
  e.exports = t.default;
})(Or, Or.exports);
var Lp = Or.exports, Ir = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  };
  t.default = s;
  var a = F, n = o(a);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i, u) {
    (0, n.default)(i);
    var c = void 0, d = void 0;
    (typeof u > "u" ? "undefined" : r(u)) === "object" ? (c = u.min || 0, d = u.max) : (c = arguments[1], d = arguments[2]);
    var f = i.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], p = i.length - f.length;
    return p >= c && (typeof d > "u" || p <= d);
  }
  e.exports = t.default;
})(Ir, Ir.exports);
var Vp = Ir.exports, Pr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = {
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };
  function s(i) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
    (0, a.default)(i);
    var c = o[u];
    return c && c.test(i);
  }
  e.exports = t.default;
})(Pr, Pr.exports);
var Bp = Pr.exports, Dr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = Ts, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u) {
    return (0, a.default)(u), (0, o.default)(u) && u.length === 24;
  }
  e.exports = t.default;
})(Dr, Dr.exports);
var zp = Dr.exports, Tr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = _a, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, a.default)(u);
    var d = (0, o.default)(c), f = (0, o.default)(u);
    return !!(f && d && f > d);
  }
  e.exports = t.default;
})(Tr, Tr.exports);
var Up = Tr.exports, $r = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = _a, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, a.default)(u);
    var d = (0, o.default)(c), f = (0, o.default)(u);
    return !!(f && d && f < d);
  }
  e.exports = t.default;
})($r, $r.exports);
var Hp = $r.exports, Nr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  };
  t.default = u;
  var a = F, n = i(a), o = Sa, s = i(o);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function u(c, d) {
    (0, n.default)(c);
    var f = void 0;
    if (Object.prototype.toString.call(d) === "[object Array]") {
      var p = [];
      for (f in d)
        ({}).hasOwnProperty.call(d, f) && (p[f] = (0, s.default)(d[f]));
      return p.indexOf(c) >= 0;
    } else {
      if ((typeof d > "u" ? "undefined" : r(d)) === "object")
        return d.hasOwnProperty(c);
      if (d && typeof d.indexOf == "function")
        return d.indexOf(c) >= 0;
    }
    return !1;
  }
  e.exports = t.default;
})(Nr, Nr.exports);
var Gp = Nr.exports, Rr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
  function s(i) {
    (0, a.default)(i);
    var u = i.replace(/[- ]+/g, "");
    if (!o.test(u))
      return !1;
    for (var c = 0, d = void 0, f = void 0, p = void 0, m = u.length - 1; m >= 0; m--)
      d = u.substring(m, m + 1), f = parseInt(d, 10), p ? (f *= 2, f >= 10 ? c += f % 10 + 1 : c += f) : c += f, p = !p;
    return !!(c % 10 === 0 && u);
  }
  e.exports = t.default;
})(Rr, Rr.exports);
var qp = Rr.exports, Lr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
  function s(i) {
    if ((0, a.default)(i), !o.test(i))
      return !1;
    for (var u = i.replace(/[A-Z]/g, function(g) {
      return parseInt(g, 36);
    }), c = 0, d = void 0, f = void 0, p = !0, m = u.length - 2; m >= 0; m--)
      d = u.substring(m, m + 1), f = parseInt(d, 10), p ? (f *= 2, f >= 10 ? c += f + 1 : c += f) : c += f, p = !p;
    return parseInt(i.substr(i.length - 1), 10) === (1e4 - c) % 10;
  }
  e.exports = t.default;
})(Lr, Lr.exports);
var Wp = Lr.exports, Vr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = u;
  var r = F, a = n(r);
  function n(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var o = /^(?:[0-9]{9}X|[0-9]{10})$/, s = /^(?:[0-9]{13})$/, i = [1, 3];
  function u(c) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if ((0, a.default)(c), d = String(d), !d)
      return u(c, 10) || u(c, 13);
    var f = c.replace(/[\s-]+/g, ""), p = 0, m = void 0;
    if (d === "10") {
      if (!o.test(f))
        return !1;
      for (m = 0; m < 9; m++)
        p += (m + 1) * f.charAt(m);
      if (f.charAt(9) === "X" ? p += 10 * 10 : p += 10 * f.charAt(9), p % 11 === 0)
        return !!f;
    } else if (d === "13") {
      if (!s.test(f))
        return !1;
      for (m = 0; m < 12; m++)
        p += i[m % 2] * f.charAt(m);
      if (f.charAt(12) - (10 - p % 10) % 10 === 0)
        return !!f;
    }
    return !1;
  }
  e.exports = t.default;
})(Vr, Vr.exports);
var Zp = Vr.exports, Br = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = "^\\d{4}-?\\d{3}[\\dX]$";
  function s(i) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, a.default)(i);
    var c = o;
    if (c = u.require_hyphen ? c.replace("?", "") : c, c = u.case_sensitive ? new RegExp(c) : new RegExp(c, "i"), !c.test(i))
      return !1;
    var d = i.replace("-", ""), f = 8, p = 0, m = !0, g = !1, b = void 0;
    try {
      for (var h = d[Symbol.iterator](), v; !(m = (v = h.next()).done); m = !0) {
        var x = v.value, w = x.toUpperCase() === "X" ? 10 : +x;
        p += w * f, --f;
      }
    } catch (_) {
      g = !0, b = _;
    } finally {
      try {
        !m && h.return && h.return();
      } finally {
        if (g)
          throw b;
      }
    }
    return p % 11 === 0;
  }
  e.exports = t.default;
})(Br, Br.exports);
var Yp = Br.exports, zr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = {
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "de-DE": /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
    "da-DK": /^(\+?45)?(\d{8})$/,
    "el-GR": /^(\+?30)?(69\d{8})$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
    "en-IN": /^(\+?91|0)?[789]\d{9}$/,
    "en-KE": /^(\+?254|0)?[7]\d{8}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)2\d{7,9}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "es-ES": /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    "fi-FI": /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "he-IL": /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
    "hu-HU": /^(\+?36)(20|30|70)\d{7}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "id-ID": /^(\+?62|0[1-9])[\s|\d]+$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ja-JP": /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
    "ms-MY": /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "nl-BE": /^(\+?32|0)4?\d{8}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "ro-RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
    "en-PK": /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "vi-VN": /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
    "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/
  };
  o["en-CA"] = o["en-US"], o["fr-BE"] = o["nl-BE"], o["zh-HK"] = o["en-HK"];
  function s(i, u) {
    return (0, a.default)(i), u in o ? o[u].test(i) : u === "any" ? !!Object.values(o).find(function(c) {
      return c.test(i);
    }) : !1;
  }
  e.exports = t.default;
})(zr, zr.exports);
var Kp = zr.exports, Ur = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = c;
  var r = Ct, a = s(r), n = F, o = s(n);
  function s(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function i(d) {
    var f = "(\\" + d.symbol.replace(/\./g, "\\.") + ")" + (d.require_symbol ? "" : "?"), p = "-?", m = "[1-9]\\d*", g = "[1-9]\\d{0,2}(\\" + d.thousands_separator + "\\d{3})*", b = ["0", m, g], h = "(" + b.join("|") + ")?", v = "(\\" + d.decimal_separator + "\\d{2})?", x = h + v;
    return d.allow_negatives && !d.parens_for_negatives && (d.negative_sign_after_digits ? x += p : d.negative_sign_before_digits && (x = p + x)), d.allow_negative_sign_placeholder ? x = "( (?!\\-))?" + x : d.allow_space_after_symbol ? x = " ?" + x : d.allow_space_after_digits && (x += "( (?!$))?"), d.symbol_after_digits ? x += f : x = f + x, d.allow_negatives && (d.parens_for_negatives ? x = "(\\(" + x + "\\)|" + x + ")" : d.negative_sign_before_digits || d.negative_sign_after_digits || (x = p + x)), new RegExp("^(?!-? )(?=.*\\d)" + x + "$");
  }
  var u = {
    symbol: "$",
    require_symbol: !1,
    allow_space_after_symbol: !1,
    symbol_after_digits: !1,
    allow_negatives: !0,
    parens_for_negatives: !1,
    negative_sign_before_digits: !1,
    negative_sign_after_digits: !1,
    allow_negative_sign_placeholder: !1,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_space_after_digits: !1
  };
  function c(d, f) {
    return (0, o.default)(d), f = (0, a.default)(f, u), i(f).test(d);
  }
  e.exports = t.default;
})(Ur, Ur.exports);
var Jp = Ur.exports, Et = {};
Object.defineProperty(Et, "__esModule", {
  value: !0
});
Et.iso8601 = void 0;
Et.default = function(e) {
  return (0, Qp.default)(e), tm.test(e);
};
var Xp = F, Qp = em(Xp);
function em(e) {
  return e && e.__esModule ? e : { default: e };
}
var tm = Et.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, Hr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /[^A-Z0-9+\/=]/i;
  function s(i) {
    (0, a.default)(i);
    var u = i.length;
    if (!u || u % 4 !== 0 || o.test(i))
      return !1;
    var c = i.indexOf("=");
    return c === -1 || c === u - 1 || c === u - 2 && i[u - 1] === "=";
  }
  e.exports = t.default;
})(Hr, Hr.exports);
var nm = Hr.exports, Gr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = F, a = n(r);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i;
  function s(i) {
    return (0, a.default)(i), o.test(i);
  }
  e.exports = t.default;
})(Gr, Gr.exports);
var rm = Gr.exports, qr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    (0, a.default)(s);
    var u = i ? new RegExp("^[" + i + "]+", "g") : /^\s+/g;
    return s.replace(u, "");
  }
  e.exports = t.default;
})(qr, qr.exports);
var $s = qr.exports, Wr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    (0, a.default)(s);
    for (var u = i ? new RegExp("[" + i + "]") : /\s/, c = s.length - 1; c >= 0 && u.test(s[c]); )
      c--;
    return c < s.length ? s.substr(0, c + 1) : s;
  }
  e.exports = t.default;
})(Wr, Wr.exports);
var Ns = Wr.exports, Zr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = Ns, a = s(r), n = $s, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u, c) {
    return (0, a.default)((0, o.default)(u, c), c);
  }
  e.exports = t.default;
})(Zr, Zr.exports);
var am = Zr.exports, Yr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
  }
  e.exports = t.default;
})(Yr, Yr.exports);
var im = Yr.exports, Kr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s) {
    return (0, a.default)(s), s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#96;/g, "`");
  }
  e.exports = t.default;
})(Kr, Kr.exports);
var sm = Kr.exports, Jr = { exports: {} }, Xr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    return (0, a.default)(s), s.replace(new RegExp("[" + i + "]+", "g"), "");
  }
  e.exports = t.default;
})(Xr, Xr.exports);
var Rs = Xr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var r = F, a = s(r), n = Rs, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function i(u, c) {
    (0, a.default)(u);
    var d = c ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, o.default)(u, d);
  }
  e.exports = t.default;
})(Jr, Jr.exports);
var om = Jr.exports, Qr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    return (0, a.default)(s), s.replace(new RegExp("[^" + i + "]+", "g"), "");
  }
  e.exports = t.default;
})(Qr, Qr.exports);
var lm = Qr.exports, ea = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = F, a = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o(s, i) {
    (0, a.default)(s);
    for (var u = s.length - 1; u >= 0; u--)
      if (i.indexOf(s[u]) === -1)
        return !1;
    return !0;
  }
  e.exports = t.default;
})(ea, ea.exports);
var um = ea.exports, ta = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = Ps, a = s(r), n = Ct, o = s(n);
  function s(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var i = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: !0,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: !0,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: !0,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: !0,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: !0,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: !0,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: !0,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: !0
  }, u = ["icloud.com", "me.com"], c = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], d = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
  function f(p, m) {
    if (m = (0, o.default)(m, i), !(0, a.default)(p))
      return !1;
    var g = p.split("@"), b = g.pop(), h = g.join("@"), v = [h, b];
    if (v[1] = v[1].toLowerCase(), v[1] === "gmail.com" || v[1] === "googlemail.com") {
      if (m.gmail_remove_subaddress && (v[0] = v[0].split("+")[0]), m.gmail_remove_dots && (v[0] = v[0].replace(/\./g, "")), !v[0].length)
        return !1;
      (m.all_lowercase || m.gmail_lowercase) && (v[0] = v[0].toLowerCase()), v[1] = m.gmail_convert_googlemaildotcom ? "gmail.com" : v[1];
    } else if (~u.indexOf(v[1])) {
      if (m.icloud_remove_subaddress && (v[0] = v[0].split("+")[0]), !v[0].length)
        return !1;
      (m.all_lowercase || m.icloud_lowercase) && (v[0] = v[0].toLowerCase());
    } else if (~c.indexOf(v[1])) {
      if (m.outlookdotcom_remove_subaddress && (v[0] = v[0].split("+")[0]), !v[0].length)
        return !1;
      (m.all_lowercase || m.outlookdotcom_lowercase) && (v[0] = v[0].toLowerCase());
    } else if (~d.indexOf(v[1])) {
      if (m.yahoo_remove_subaddress) {
        var x = v[0].split("-");
        v[0] = x.length > 1 ? x.slice(0, -1).join("-") : x[0];
      }
      if (!v[0].length)
        return !1;
      (m.all_lowercase || m.yahoo_lowercase) && (v[0] = v[0].toLowerCase());
    } else
      m.all_lowercase && (v[0] = v[0].toLowerCase());
    return v.join("@");
  }
  e.exports = t.default;
})(ta, ta.exports);
var cm = ta.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = _a, a = j(r), n = Os, o = j(n), s = ap, i = j(s), u = ip, c = j(u), d = sp, f = j(d), p = op, m = j(p), g = lp, b = j(g), h = Ps, v = j(h), x = up, w = j(x), _ = cp, M = j(_), k = Ds, y = j(k), S = Ca, C = j(S), T = dp, N = j(T), Z = fp, re = j(Z), O = pp, $ = j(O), K = mp, oe = j(K), be = hp, Ce = j(be), Ee = vp, Ie = j(Ee), ee = gp, le = j(ee), ke = lt, Me = j(ke), xe = ut, ye = j(xe), qe = jp, Je = j(qe), En = Ap, jt = j(En), At = Fp, kn = j(At), Ft = Op, Mn = j(Ft), Ks = Ip, Js = j(Ks), Xs = Pp, Qs = j(Xs), eo = Ts, to = j(eo), no = Dp, ro = j(no), ao = Tp, io = j(ao), so = $p, oo = j(so), lo = Np, uo = j(lo), co = Rp, fo = j(co), po = Lp, mo = j(po), ho = Vp, vo = j(ho), go = Is, bo = j(go), xo = Bp, yo = j(xo), wo = zp, _o = j(wo), So = Up, Co = j(So), Eo = Hp, ko = j(Eo), Mo = Gp, jo = j(Mo), Ao = qp, Fo = j(Ao), Oo = Wp, Io = j(Oo), Po = Zp, Do = j(Po), To = Yp, $o = j(To), No = Kp, Ro = j(No), Lo = Jp, Vo = j(Lo), Bo = Et, zo = j(Bo), Uo = nm, Ho = j(Uo), Go = rm, qo = j(Go), Wo = $s, Zo = j(Wo), Yo = Ns, Ko = j(Yo), Jo = am, Xo = j(Jo), Qo = im, el = j(Qo), tl = sm, nl = j(tl), rl = om, al = j(rl), il = lm, sl = j(il), ol = Rs, ll = j(ol), ul = um, cl = j(ul), dl = cm, fl = j(dl), pl = Sa, ml = j(pl);
  function j(Ot) {
    return Ot && Ot.__esModule ? Ot : { default: Ot };
  }
  var hl = "7.2.0", vl = {
    version: hl,
    toDate: a.default,
    toFloat: o.default,
    toInt: i.default,
    toBoolean: c.default,
    equals: f.default,
    contains: m.default,
    matches: b.default,
    isEmail: v.default,
    isURL: w.default,
    isMACAddress: M.default,
    isIP: y.default,
    isFQDN: C.default,
    isBoolean: N.default,
    isAlpha: re.default,
    isAlphanumeric: $.default,
    isNumeric: oe.default,
    isLowercase: Ce.default,
    isUppercase: Ie.default,
    isAscii: le.default,
    isFullWidth: Me.default,
    isHalfWidth: ye.default,
    isVariableWidth: Je.default,
    isMultibyte: jt.default,
    isSurrogatePair: kn.default,
    isInt: Mn.default,
    isFloat: Js.default,
    isDecimal: Qs.default,
    isHexadecimal: to.default,
    isDivisibleBy: ro.default,
    isHexColor: io.default,
    isISRC: oo.default,
    isMD5: uo.default,
    isJSON: fo.default,
    isEmpty: mo.default,
    isLength: vo.default,
    isByteLength: bo.default,
    isUUID: yo.default,
    isMongoId: _o.default,
    isAfter: Co.default,
    isBefore: ko.default,
    isIn: jo.default,
    isCreditCard: Fo.default,
    isISIN: Io.default,
    isISBN: Do.default,
    isISSN: $o.default,
    isMobilePhone: Ro.default,
    isCurrency: Vo.default,
    isISO8601: zo.default,
    isBase64: Ho.default,
    isDataURI: qo.default,
    ltrim: Zo.default,
    rtrim: Ko.default,
    trim: Xo.default,
    escape: el.default,
    unescape: nl.default,
    stripLow: al.default,
    whitelist: sl.default,
    blacklist: ll.default,
    isWhitelisted: cl.default,
    normalizeEmail: fl.default,
    toString: ml.default
  };
  t.default = vl, e.exports = t.default;
})(Yn, Yn.exports);
var dm = Yn.exports;
const Qt = /* @__PURE__ */ wl(dm);
function oi(e) {
  const t = "The URL must be in a format like https://www.facebook.com/yourPage";
  if (!e)
    return "";
  if (e = e.replace(/(https?:\/\/)?(www\.)?facebook\.com/i, ""), e.match(/^(http|\/\/)/i))
    throw new Error(t);
  if (e = e.replace(/^\//, ""), e = `https://www.facebook.com/${e}`, !Qt.isURL(e))
    throw new Error(t);
  return e;
}
function li(e) {
  if (!e)
    return "";
  if (e.match(/(?:twitter\.com\/)(\S+)/) || e.match(/([a-z\d.]+)/i)) {
    let t = [];
    if (e.match(/(?:twitter\.com\/)(\S+)/) ? [, t] = e.match(/(?:twitter\.com\/)(\S+)/) : [t] = e.match(/([^/]+)\/?$/mi), t.match(/^(http|www)|(\/)/) || !t.match(/^[a-z\d._]{1,15}$/mi)) {
      const r = t.match(/^[a-z\d._]{1,15}$/mi) ? "The URL must be in a format like https://twitter.com/yourUsername" : "Your Username is not a valid Twitter Username";
      throw new Error(r);
    }
    return `https://twitter.com/${t}`;
  } else {
    const t = "The URL must be in a format like https://twitter.com/yourUsername";
    throw new Error(t);
  }
}
const fm = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    focusRef: s,
    handleEditingChange: i
  } = _e(), [u, c] = A({}), d = ce(null), [f, p] = ve(e, ["facebook", "twitter"]), m = /* @__PURE__ */ l.jsx(
    G,
    {
      values: [
        {
          heading: "URL of your publication's Facebook Page",
          key: "facebook",
          value: f
        },
        {
          heading: "URL of your TWITTER PROFILE",
          key: "twitter",
          value: p
        }
      ]
    }
  ), g = (h, v) => {
    o(v === "facebook" ? "facebook" : "twitter", h.target.value);
  }, b = /* @__PURE__ */ l.jsxs(G, { children: [
    /* @__PURE__ */ l.jsx(
      H,
      {
        error: !!u.facebook,
        hint: u.facebook,
        inputRef: s,
        placeholder: "https://www.facebook.com/ghost",
        title: "URL of your publication's Facebook Page",
        value: f,
        onBlur: (h) => {
          try {
            const v = oi(h.target.value);
            o("facebook", v), s.current && (s.current.value = v);
          } catch {
          }
        },
        onChange: (h) => {
          g(h, "facebook");
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
      {
        error: !!u.twitter,
        hint: u.twitter,
        inputRef: d,
        placeholder: "https://twitter.com/ghost",
        title: "URL of your Twitter profile",
        value: p,
        onBlur: (h) => {
          try {
            const v = li(h.target.value);
            o("twitter", v), d.current && (d.current.value = v);
          } catch {
          }
        },
        onChange: (h) => {
          g(h, "twitter");
        }
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "Link your social accounts for full structured data and rich card support",
      isEditing: t,
      navid: "social-accounts",
      saveState: r,
      testId: "social-accounts",
      title: "Social accounts",
      onCancel: n,
      onEditingChange: i,
      onSave: () => {
        const h = {};
        try {
          oi(f);
        } catch (v) {
          h.facebook = v == null ? void 0 : v.message;
        }
        try {
          li(p);
        } catch (v) {
          h.twitter = v == null ? void 0 : v.message;
        }
        c(h), Object.keys(h).length === 0 && a();
      },
      children: t ? b : m
    }
  );
};
var pm = [{
  name: "Pacific/Pago_Pago",
  label: "(GMT -11:00) Midway Island, Samoa"
}, {
  name: "Pacific/Honolulu",
  label: "(GMT -10:00) Hawaii"
}, {
  name: "America/Anchorage",
  label: "(GMT -9:00) Alaska"
}, {
  name: "America/Tijuana",
  label: "(GMT -8:00) Chihuahua, La Paz, Mazatlan"
}, {
  name: "America/Los_Angeles",
  label: "(GMT -8:00) Pacific Time (US & Canada); Tijuana"
}, {
  name: "America/Phoenix",
  label: "(GMT -7:00) Arizona"
}, {
  name: "America/Denver",
  label: "(GMT -7:00) Mountain Time (US & Canada)"
}, {
  name: "America/Costa_Rica",
  label: "(GMT -6:00) Central America"
}, {
  name: "America/Chicago",
  label: "(GMT -6:00) Central Time (US & Canada)"
}, {
  name: "America/Mexico_City",
  label: "(GMT -6:00) Guadalajara, Mexico City, Monterrey"
}, {
  name: "America/Regina",
  label: "(GMT -6:00) Saskatchewan"
}, {
  name: "America/Bogota",
  label: "(GMT -5:00) Bogota, Lima, Quito"
}, {
  name: "America/New_York",
  label: "(GMT -5:00) Eastern Time (US & Canada)"
}, {
  name: "America/Fort_Wayne",
  label: "(GMT -5:00) Indiana (East)"
}, {
  name: "America/Caracas",
  label: "(GMT -4:00) Caracas, La Paz"
}, {
  name: "America/Halifax",
  label: "(GMT -4:00) Atlantic Time (Canada); Greenland"
}, {
  name: "America/Santiago",
  label: "(GMT -4:00) Santiago"
}, {
  name: "America/St_Johns",
  label: "(GMT -3:30) Newfoundland"
}, {
  name: "America/Argentina/Buenos_Aires",
  label: "(GMT -3:00) Buenos Aires, Brasilia, Georgetown"
}, {
  name: "America/Noronha",
  label: "(GMT -2:00) Fernando de Noronha"
}, {
  name: "Atlantic/Azores",
  label: "(GMT -1:00) Azores"
}, {
  name: "Atlantic/Cape_Verde",
  label: "(GMT -1:00) Cape Verde Is."
}, {
  name: "Etc/UTC",
  label: "(GMT) UTC"
}, {
  name: "Africa/Casablanca",
  label: "(GMT +0:00) Casablanca, Monrovia"
}, {
  name: "Europe/Dublin",
  label: "(GMT +0:00) Dublin, Edinburgh, London"
}, {
  name: "Europe/Amsterdam",
  label: "(GMT +1:00) Amsterdam, Berlin, Rome, Stockholm, Vienna"
}, {
  name: "Europe/Prague",
  label: "(GMT +1:00) Belgrade, Bratislava, Budapest, Prague"
}, {
  name: "Europe/Paris",
  label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris"
}, {
  name: "Europe/Warsaw",
  label: "(GMT +1:00) Sarajevo, Skopje, Warsaw, Zagreb"
}, {
  name: "Africa/Lagos",
  label: "(GMT +1:00) West Central Africa"
}, {
  name: "Europe/Istanbul",
  label: "(GMT +2:00) Athens, Beirut, Bucharest, Istanbul"
}, {
  name: "Africa/Cairo",
  label: "(GMT +2:00) Cairo, Egypt"
}, {
  name: "Africa/Maputo",
  label: "(GMT +2:00) Harare"
}, {
  name: "Europe/Kyiv",
  label: "(GMT +2:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
}, {
  name: "Asia/Jerusalem",
  label: "(GMT +2:00) Jerusalem"
}, {
  name: "Africa/Johannesburg",
  label: "(GMT +2:00) Pretoria"
}, {
  name: "Asia/Baghdad",
  label: "(GMT +3:00) Baghdad"
}, {
  name: "Asia/Riyadh",
  label: "(GMT +3:00) Kuwait, Nairobi, Riyadh"
}, {
  name: "Europe/Moscow",
  label: "(GMT +3:00) Moscow, St. Petersburg, Volgograd"
}, {
  name: "Asia/Tehran",
  label: "(GMT +3:30) Tehran"
}, {
  name: "Asia/Dubai",
  label: "(GMT +4:00) Abu Dhabi, Muscat"
}, {
  name: "Asia/Baku",
  label: "(GMT +4:00) Baku, Tbilisi, Yerevan"
}, {
  name: "Asia/Kabul",
  label: "(GMT +4:30) Kabul"
}, {
  name: "Asia/Karachi",
  label: "(GMT +5:00) Islamabad, Karachi, Tashkent"
}, {
  name: "Asia/Yekaterinburg",
  label: "(GMT +5:00) Yekaterinburg"
}, {
  name: "Asia/Kolkata",
  label: "(GMT +5:30) Chennai, Calcutta, Mumbai, New Delhi"
}, {
  name: "Asia/Kathmandu",
  label: "(GMT +5:45) Katmandu"
}, {
  name: "Asia/Almaty",
  label: "(GMT +6:00) Almaty, Novosibirsk"
}, {
  name: "Asia/Dhaka",
  label: "(GMT +6:00) Astana, Dhaka, Sri Jayawardenepura"
}, {
  name: "Asia/Rangoon",
  label: "(GMT +6:30) Rangoon"
}, {
  name: "Asia/Bangkok",
  label: "(GMT +7:00) Bangkok, Hanoi, Jakarta"
}, {
  name: "Asia/Krasnoyarsk",
  label: "(GMT +7:00) Krasnoyarsk"
}, {
  name: "Asia/Hong_Kong",
  label: "(GMT +8:00) Beijing, Chongqing, Hong Kong, Urumqi"
}, {
  name: "Asia/Irkutsk",
  label: "(GMT +8:00) Irkutsk, Ulaan Bataar"
}, {
  name: "Asia/Singapore",
  label: "(GMT +8:00) Kuala Lumpur, Perth, Singapore, Taipei"
}, {
  name: "Asia/Tokyo",
  label: "(GMT +9:00) Osaka, Sapporo, Tokyo"
}, {
  name: "Asia/Seoul",
  label: "(GMT +9:00) Seoul"
}, {
  name: "Asia/Yakutsk",
  label: "(GMT +9:00) Yakutsk"
}, {
  name: "Australia/Adelaide",
  label: "(GMT +9:30) Adelaide"
}, {
  name: "Australia/Darwin",
  label: "(GMT +9:30) Darwin"
}, {
  name: "Australia/Brisbane",
  label: "(GMT +10:00) Brisbane, Guam, Port Moresby"
}, {
  name: "Australia/Sydney",
  label: "(GMT +10:00) Canberra, Hobart, Melbourne, Sydney, Vladivostok"
}, {
  name: "Asia/Magadan",
  label: "(GMT +11:00) Magadan, Soloman Is., New Caledonia"
}, {
  name: "Pacific/Auckland",
  label: "(GMT +12:00) Auckland, Wellington"
}, {
  name: "Pacific/Fiji",
  label: "(GMT +12:00) Fiji, Kamchatka, Marshall Is."
}, {
  name: "Pacific/Kwajalein",
  label: "(GMT +12:00) International Date Line West"
}];
const ui = ({ timezone: e }) => {
  const [t, r] = A(Aa(e));
  return V(() => {
    const a = setInterval(() => {
      r(Aa(e));
    }, 1e3);
    return () => {
      clearInterval(a);
    };
  }, [e]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    "The local time here is currently ",
    t
  ] });
}, mm = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    handleEditingChange: s
  } = _e(), [i] = ve(e, ["timezone"]), u = pm.map((p) => ({
    value: p.name,
    label: p.label
  })), c = (p) => {
    o("timezone", p);
  }, d = /* @__PURE__ */ l.jsx(G, { values: [
    {
      key: "site-timezone",
      value: i,
      hint: /* @__PURE__ */ l.jsx(ui, { timezone: i })
    }
  ] }), f = /* @__PURE__ */ l.jsx(G, { columns: 1, children: /* @__PURE__ */ l.jsx(
    ze,
    {
      defaultSelectedOption: i,
      hint: /* @__PURE__ */ l.jsx(ui, { timezone: i }),
      options: u,
      title: "Site timezone",
      onSelect: c
    }
  ) });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "Set the time and date of your publication, used for all published posts",
      isEditing: t,
      navid: "timezone",
      saveState: r,
      testId: "timezone",
      title: "Site timezone",
      onCancel: n,
      onEditingChange: s,
      onSave: a,
      children: t ? f : d
    }
  );
}, hm = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    focusRef: a,
    handleSave: n,
    handleCancel: o,
    updateSetting: s,
    handleEditingChange: i
  } = _e(), [u, c] = ve(e, ["title", "description"]), d = (g) => {
    s("title", g.target.value);
  }, f = (g) => {
    s("description", g.target.value);
  }, p = /* @__PURE__ */ l.jsx(
    G,
    {
      columns: 2,
      values: [
        {
          heading: "Site title",
          key: "site-title",
          value: u
        },
        {
          heading: "Site description",
          key: "site-description",
          value: c
        }
      ]
    }
  ), m = /* @__PURE__ */ l.jsxs(G, { children: [
    /* @__PURE__ */ l.jsx(
      H,
      {
        hint: "The name of your site",
        inputRef: a,
        placeholder: "Site title",
        title: "Site title",
        value: u,
        onChange: d
      }
    ),
    /* @__PURE__ */ l.jsx(
      wa,
      {
        hint: "A short description, used in your theme, meta data and search results",
        placeholder: "Site description",
        title: "Site description",
        value: c,
        onChange: f
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "The details used to identify your publication around the web",
      isEditing: t,
      navid: "title-and-description",
      saveState: r,
      testId: "title-and-description",
      title: "Title & description",
      onCancel: o,
      onEditingChange: i,
      onSave: n,
      children: t ? m : p
    }
  );
}, vm = (e) => /* @__PURE__ */ E.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("title", null, "social-twitter"), /* @__PURE__ */ E.createElement("circle", { cx: 20, cy: 20, r: 20, fill: "#51B1EF" }), /* @__PURE__ */ E.createElement("path", { d: "M30.905 14.268a8.63 8.63 0 0 1-2.49.686 4.36 4.36 0 0 0 1.902-2.403 8.602 8.602 0 0 1-2.753 1.054c-3.512-3.488-8.463.13-7.396 3.969a12.284 12.284 0 0 1-8.942-4.543c-1.228 2.093-.428 4.667 1.343 5.798a4.31 4.31 0 0 1-1.965-.544v.055a4.35 4.35 0 0 0 3.48 4.263 4.569 4.569 0 0 1-1.964.074 4.367 4.367 0 0 0 4.053 3.023c-1.918 1.46-4.146 2.062-6.42 1.798 9.793 5.767 19.029-1.783 18.998-10.417 0-.187-.004-.374-.012-.561a9 9 0 0 0 2.166-2.248", fill: "#fff" })), gm = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    focusRef: a,
    handleSave: n,
    handleCancel: o,
    updateSetting: s,
    handleEditingChange: i
  } = _e(), { fileService: u } = z(se), [
    c,
    d,
    f,
    p,
    m
  ] = ve(e, ["twitter_title", "twitter_description", "twitter_image", "title", "description"]), g = (_) => {
    s("twitter_title", _.target.value);
  }, b = (_) => {
    s("twitter_description", _.target.value);
  }, h = async (_) => {
    try {
      const M = await u.uploadImage(_);
      s("twitter_image", M);
    } catch {
    }
  }, v = () => {
    s("twitter_image", "");
  }, x = /* @__PURE__ */ l.jsx(l.Fragment, {}), w = /* @__PURE__ */ l.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ l.jsx("div", { className: "pt-1", children: /* @__PURE__ */ l.jsx(vm, { className: "-mb-1 h-10 w-10" }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "mr-[52px] w-full", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ l.jsx("span", { className: "mr-1 font-semibold text-grey-900", children: p }),
        /* @__PURE__ */ l.jsx("span", { className: "text-grey-700", children: "· 2h" })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "mb-2 h-3 w-full rounded bg-grey-200" }),
      /* @__PURE__ */ l.jsx("div", { className: "mb-4 h-3 w-3/5 rounded bg-grey-200" }),
      /* @__PURE__ */ l.jsxs(G, { className: "overflow-hidden rounded-md border border-grey-300", children: [
        /* @__PURE__ */ l.jsx(
          Ue,
          {
            fileUploadClassName: "flex cursor-pointer items-center justify-center rounded rounded-b-none border border-grey-100 border-b-0 bg-grey-75 p-3 text-sm font-semibold text-grey-800 hover:text-black",
            height: "300px",
            id: "twitter-image",
            imageURL: f,
            onDelete: v,
            onUpload: h,
            children: "Upload Twitter image"
          }
        ),
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-x-6 gap-y-7 px-4 pb-7", children: [
          /* @__PURE__ */ l.jsx(
            H,
            {
              clearBg: !0,
              inputRef: a,
              placeholder: p,
              title: "Twitter title",
              value: c,
              onChange: g
            }
          ),
          /* @__PURE__ */ l.jsx(
            wa,
            {
              clearBg: !0,
              placeholder: m,
              rows: 2,
              title: "Twitter description",
              value: d,
              onChange: b
            }
          )
        ] })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ l.jsxs(
    Q,
    {
      description: "Customize structured data of your site",
      isEditing: t,
      navid: "twitter",
      saveState: r,
      testId: "twitter",
      title: "Twitter card",
      onCancel: o,
      onEditingChange: i,
      onSave: n,
      children: [
        x,
        t ? w : null
      ]
    }
  );
}, Ls = (e) => /* @__PURE__ */ E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", height: 16, width: 16, ...e }, /* @__PURE__ */ E.createElement("g", { id: "user-single-neutral--close-geometric-human-person-single-up-user" }, /* @__PURE__ */ E.createElement("path", { id: "Union", fill: "currentColor", fillRule: "evenodd", d: "M10.5 3.5C10.5 5.433 8.93295 7 6.99995 7C5.06695 7 3.49995 5.433 3.49995 3.5C3.49995 1.567 5.06695 0 6.99995 0C8.93295 0 10.5 1.567 10.5 3.5ZM0.320435 13.4C1.21244 10.56 3.86563 8.50003 6.99996 8.50003C10.1343 8.50003 12.7875 10.56 13.6795 13.4C13.7751 13.7044 13.537 14 13.2179 14H0.781996C0.462883 14 0.224811 13.7044 0.320435 13.4Z", clipRule: "evenodd" }))), bm = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48ZyBpZD0idXNlci1zaW5nbGUtbmV1dHJhbC0tY2xvc2UtZ2VvbWV0cmljLWh1bWFuLXBlcnNvbi1zaW5nbGUtdXAtdXNlciI+PHBhdGggaWQ9IlVuaW9uIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMy41QzEwLjUgNS40MzMgOC45MzI5NSA3IDYuOTk5OTUgN0M1LjA2Njk1IDcgMy40OTk5NSA1LjQzMyAzLjQ5OTk1IDMuNUMzLjQ5OTk1IDEuNTY3IDUuMDY2OTUgMCA2Ljk5OTk1IDBDOC45MzI5NSAwIDEwLjUgMS41NjcgMTAuNSAzLjVaTTAuMzIwNDM1IDEzLjRDMS4yMTI0NCAxMC41NiAzLjg2NTYzIDguNTAwMDMgNi45OTk5NiA4LjUwMDAzQzEwLjEzNDMgOC41MDAwMyAxMi43ODc1IDEwLjU2IDEzLjY3OTUgMTMuNEMxMy43NzUxIDEzLjcwNDQgMTMuNTM3IDE0IDEzLjIxNzkgMTRIMC43ODE5OTZDMC40NjI4ODMgMTQgMC4yMjQ4MTEgMTMuNzA0NCAwLjMyMDQzNSAxMy40WiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ls,
  default: bm
}, Symbol.toStringTag, { value: "Module" })), Ea = ({ image: e, label: t, labelColor: r, bgColor: a, size: n, className: o }) => {
  let s = "", i = " -mb-2 ";
  switch (n) {
    case "sm":
      s = " w-7 h-7 text-sm ";
      break;
    case "lg":
      s = " w-12 h-12 text-xl ";
      break;
    case "xl":
      s = " w-16 h-16 text-2xl ", i = " -mb-3 ";
      break;
    default:
      s = " w-10 h-10 text-md ";
      break;
  }
  return e ? /* @__PURE__ */ l.jsx("img", { alt: "", className: `inline-flex items-center justify-center rounded-full object-cover font-semibold ${s} ${o && o}`, src: e }) : t ? /* @__PURE__ */ l.jsx("div", { className: `${r && `text-${r}`} inline-flex items-center justify-center rounded-full p-2 font-semibold ${s} ${o && o}`, style: a ? { backgroundColor: a } : {}, children: t }) : /* @__PURE__ */ l.jsx("div", { className: `inline-flex items-center justify-center overflow-hidden rounded-full bg-grey-100 p-1 font-semibold ${s} ${o && o}`, children: /* @__PURE__ */ l.jsx(Ls, { className: `${i} h-full w-full  text-grey-300` }) });
}, ym = ({
  shiftY: e,
  footerBgColorClass: t = "bg-white",
  contentBgColorClass: r = "bg-white",
  height: a = 96,
  children: n
}) => {
  const o = W(
    "w-100 sticky bottom-[-24px] z-[9997] m-0 box-border p-0"
  ), s = e ? `calc(${e} - 24px)` : "-24px", i = `${a + 24}px`, u = W(
    "sticky z-[9998] block h-[24px]",
    r
  ), c = "0", d = W(
    "sticky z-[9999] mb-[-24px] flex items-center justify-between",
    // 'min-h-[48px]',
    "h-[96px]",
    t
  ), f = "0", p = `${a}px`, m = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", g = e ? `calc(${e} + ${a - 24}px)` : `${a - 24}px`;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: o,
      style: {
        bottom: s,
        height: i
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: u,
            style: {
              bottom: c
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: d,
            style: {
              bottom: f,
              height: p
            },
            children: n
          }
        ),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: m,
            style: {
              bottom: g
            }
          }
        )
      ]
    }
  );
}, kt = ({
  size: e = "md",
  testId: t,
  title: r,
  okLabel: a = "OK",
  cancelLabel: n = "Cancel",
  footer: o,
  leftButtonLabel: s,
  noPadding: i = !1,
  onOk: u,
  okColor: c = "black",
  onCancel: d,
  children: f,
  backDrop: p = !0,
  backDropClick: m = !0,
  stickyFooter: g = !1,
  scrolling: b = !0
}) => {
  const h = He();
  let v = [];
  o || (n && v.push({
    key: "cancel-modal",
    label: n,
    onClick: d || (() => {
      h.remove();
    })
  }), a && v.push({
    key: "ok-modal",
    label: a,
    color: c,
    className: "min-w-[80px]",
    onClick: u
  }));
  let x = W(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden rounded bg-white shadow-xl",
    b ? "overflow-y-auto" : "overflow-y-hidden"
  ), w = W("fixed inset-0 z-40 h-[100vh] w-[100vw]"), _ = "";
  switch (e) {
    case "sm":
      x += " max-w-[480px] ", w += " p-[8vmin]", _ = "p-8";
      break;
    case "md":
      x += " max-w-[720px] ", w += " p-[8vmin]", _ = "p-8";
      break;
    case "lg":
      x += " max-w-[1020px] ", w += " p-[4vmin]", _ = "p-8";
      break;
    case "xl":
      x += " max-w-[1240px] ", w += " p-[3vmin]", _ = "p-10";
      break;
    case "full":
      x += " h-full ", w += " p-[2vmin]", _ = "p-10";
      break;
    case "bleed":
      x += " h-full ", _ = "p-10";
      break;
    default:
      w += " p-[8vmin]", _ = "p-8";
      break;
  }
  i && (_ = "p-0");
  let M = W(
    `${_} ${g ? "py-6" : "pt-0"}`,
    "flex w-full items-center justify-between"
  ), k = W(
    _,
    (e === "full" || e === "bleed") && "grow"
  );
  const y = (T) => {
    T.target === T.currentTarget && m && h.remove();
  }, S = typeof e == "number" ? {
    width: e + "px"
  } : {};
  let C;
  return o ? C = o : o === !1 ? k += " pb-0 " : C = /* @__PURE__ */ l.jsxs("div", { className: M, children: [
    /* @__PURE__ */ l.jsx("div", { children: s && /* @__PURE__ */ l.jsx(ie, { label: s, link: !0 }) }),
    /* @__PURE__ */ l.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ l.jsx(wt, { buttons: v }) })
  ] }), C = g ? /* @__PURE__ */ l.jsx(ym, { height: 84, children: C }) : /* @__PURE__ */ l.jsx(l.Fragment, { children: C }), /* @__PURE__ */ l.jsxs("div", { className: w, id: "modal-backdrop", onClick: y, children: [
    /* @__PURE__ */ l.jsx("div", { className: W(
      "pointer-events-none fixed inset-0 z-0",
      p && "bg-[rgba(98,109,121,0.15)] backdrop-blur-[3px]"
    ) }),
    /* @__PURE__ */ l.jsxs("section", { className: x, "data-testid": t, style: S, children: [
      /* @__PURE__ */ l.jsx("div", { className: k, children: /* @__PURE__ */ l.jsxs("div", { className: "h-full", children: [
        r && /* @__PURE__ */ l.jsx(Y, { level: 4, children: r }),
        f
      ] }) }),
      C
    ] })
  ] });
}, Vs = ({ id: e, title: t, options: r, onSelect: a, error: n, hint: o, defaultSelectedOption: s, separator: i }) => {
  const [u, c] = A(s);
  V(() => {
    s && c(s);
  }, [s]);
  const d = (f) => {
    const p = f.target.value;
    c(p), a(p);
  };
  return /* @__PURE__ */ l.jsxs("div", { children: [
    /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col gap-2 ${i && "pb-2"}`, children: [
      t && /* @__PURE__ */ l.jsx(Y, { level: 6, children: t }),
      r.map((f) => /* @__PURE__ */ l.jsxs("label", { className: `flex cursor-pointer items-start ${t && "-mb-1 mt-1"}`, htmlFor: f.value, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            checked: u === f.value,
            className: "relative float-left mt-[3px] h-4 w-4 min-w-[16px] appearance-none rounded-full border-2 border-solid border-grey-300 after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-green checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-green checked:after:bg-green checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:outline-none focus:ring-0 checked:focus:border-green dark:border-grey-600 dark:checked:border-green dark:checked:after:border-green dark:checked:after:bg-green dark:checked:focus:border-green",
            id: f.value,
            name: e,
            type: "radio",
            value: f.value,
            onChange: d
          }
        ),
        /* @__PURE__ */ l.jsxs("div", { className: `ml-2 flex flex-col ${f.hint && "mb-2"}`, children: [
          /* @__PURE__ */ l.jsx("span", { className: `inline-block text-md ${f.hint && "-mb-1"}`, children: f.label }),
          f.hint && /* @__PURE__ */ l.jsx(Re, { children: f.hint })
        ] })
      ] }, f.value)),
      o && /* @__PURE__ */ l.jsx(Re, { color: n ? "red" : "", children: o })
    ] }),
    (i || n) && /* @__PURE__ */ l.jsx(vt, { color: n ? "red" : "" })
  ] });
};
function wm(e, t) {
  const r = t.find((a) => a.name.toLowerCase() === (e == null ? void 0 : e.toLowerCase()));
  return (r == null ? void 0 : r.id) || "";
}
const Bs = () => {
  const { roles: e, assignableRoles: t } = z(la);
  return {
    roles: e,
    assignableRoles: t,
    getRoleId: wm
  };
};
function ht(e, t) {
  return e.filter((r) => r.roles.find((a) => a.name === t));
}
function _m(e) {
  return ht(e, "Owner")[0];
}
const wn = () => {
  const { users: e, currentUser: t, updateUser: r, invites: a, setInvites: n, setUsers: o } = z(_i), { roles: s } = z(la), i = _m(e), u = ht(e, "Administrator"), c = ht(e, "Editor"), d = ht(e, "Author"), f = ht(e, "Contributor"), p = a == null ? void 0 : a.map((m) => {
    let g = s.find((b) => m.role_id === b.id);
    return {
      ...m,
      role: g == null ? void 0 : g.name
    };
  });
  return {
    users: e,
    ownerUser: i,
    adminUsers: u,
    editorUsers: c,
    authorUsers: d,
    contributorUsers: f,
    currentUser: t,
    invites: p,
    updateUser: r,
    setInvites: n,
    setUsers: o
  };
};
let Sm = { data: "" }, Cm = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || Sm, Em = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, km = /\/\*[^]*?\*\/|  +/g, ci = /\n+/g, Be = (e, t) => {
  let r = "", a = "", n = "";
  for (let o in e) {
    let s = e[o];
    o[0] == "@" ? o[1] == "i" ? r = o + " " + s + ";" : a += o[1] == "f" ? Be(s, o) : o + "{" + Be(s, o[1] == "k" ? "" : t) + "}" : typeof s == "object" ? a += Be(s, t ? t.replace(/([^,])+/g, (i) => o.replace(/(^:.*)|([^,])+/g, (u) => /&/.test(u) ? u.replace(/&/g, i) : i ? i + " " + u : u)) : o) : s != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), n += Be.p ? Be.p(o, s) : o + ":" + s + ";");
  }
  return r + (t && n ? t + "{" + n + "}" : n) + a;
}, Pe = {}, zs = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e)
      t += r + zs(e[r]);
    return t;
  }
  return e;
}, Mm = (e, t, r, a, n) => {
  let o = zs(e), s = Pe[o] || (Pe[o] = ((u) => {
    let c = 0, d = 11;
    for (; c < u.length; )
      d = 101 * d + u.charCodeAt(c++) >>> 0;
    return "go" + d;
  })(o));
  if (!Pe[s]) {
    let u = o !== e ? e : ((c) => {
      let d, f, p = [{}];
      for (; d = Em.exec(c.replace(km, "")); )
        d[4] ? p.shift() : d[3] ? (f = d[3].replace(ci, " ").trim(), p.unshift(p[0][f] = p[0][f] || {})) : p[0][d[1]] = d[2].replace(ci, " ").trim();
      return p[0];
    })(e);
    Pe[s] = Be(n ? { ["@keyframes " + s]: u } : u, r ? "" : "." + s);
  }
  let i = r && Pe.g ? Pe.g : null;
  return r && (Pe.g = Pe[s]), ((u, c, d, f) => {
    f ? c.data = c.data.replace(f, u) : c.data.indexOf(u) === -1 && (c.data = d ? u + c.data : c.data + u);
  })(Pe[s], t, a, i), s;
}, jm = (e, t, r) => e.reduce((a, n, o) => {
  let s = t[o];
  if (s && s.call) {
    let i = s(r), u = i && i.props && i.props.className || /^go/.test(i) && i;
    s = u ? "." + u : i && typeof i == "object" ? i.props ? "" : Be(i, "") : i === !1 ? "" : i;
  }
  return a + n + (s ?? "");
}, "");
function _n(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return Mm(r.unshift ? r.raw ? jm(r, [].slice.call(arguments, 1), t.p) : r.reduce((a, n) => Object.assign(a, n && n.call ? n(t.p) : n), {}) : r, Cm(t.target), t.g, t.o, t.k);
}
let Us, na, ra;
_n.bind({ g: 1 });
let Le = _n.bind({ k: 1 });
function Am(e, t, r, a) {
  Be.p = t, Us = e, na = r, ra = a;
}
function Ge(e, t) {
  let r = this || {};
  return function() {
    let a = arguments;
    function n(o, s) {
      let i = Object.assign({}, o), u = i.className || n.className;
      r.p = Object.assign({ theme: na && na() }, i), r.o = / *go\d+/.test(u), i.className = _n.apply(r, a) + (u ? " " + u : ""), t && (i.ref = s);
      let c = e;
      return e[0] && (c = i.as || e, delete i.as), ra && c[0] && ra(i), Us(c, i);
    }
    return t ? t(n) : n;
  };
}
var Fm = (e) => typeof e == "function", en = (e, t) => Fm(e) ? e(t) : e, Om = (() => {
  let e = 0;
  return () => (++e).toString();
})(), Hs = (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), Im = 20, Ut = /* @__PURE__ */ new Map(), Pm = 1e3, di = (e) => {
  if (Ut.has(e))
    return;
  let t = setTimeout(() => {
    Ut.delete(e), Ke({ type: 4, toastId: e });
  }, Pm);
  Ut.set(e, t);
}, Dm = (e) => {
  let t = Ut.get(e);
  t && clearTimeout(t);
}, aa = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Im) };
    case 1:
      return t.toast.id && Dm(t.toast.id), { ...e, toasts: e.toasts.map((o) => o.id === t.toast.id ? { ...o, ...t.toast } : o) };
    case 2:
      let { toast: r } = t;
      return e.toasts.find((o) => o.id === r.id) ? aa(e, { type: 1, toast: r }) : aa(e, { type: 0, toast: r });
    case 3:
      let { toastId: a } = t;
      return a ? di(a) : e.toasts.forEach((o) => {
        di(o.id);
      }), { ...e, toasts: e.toasts.map((o) => o.id === a || a === void 0 ? { ...o, visible: !1 } : o) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let n = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + n })) };
  }
}, Ht = [], Gt = { toasts: [], pausedAt: void 0 }, Ke = (e) => {
  Gt = aa(Gt, e), Ht.forEach((t) => {
    t(Gt);
  });
}, Tm = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, $m = (e = {}) => {
  let [t, r] = A(Gt);
  V(() => (Ht.push(r), () => {
    let n = Ht.indexOf(r);
    n > -1 && Ht.splice(n, 1);
  }), [t]);
  let a = t.toasts.map((n) => {
    var o, s;
    return { ...e, ...e[n.type], ...n, duration: n.duration || ((o = e[n.type]) == null ? void 0 : o.duration) || (e == null ? void 0 : e.duration) || Tm[n.type], style: { ...e.style, ...(s = e[n.type]) == null ? void 0 : s.style, ...n.style } };
  });
  return { ...t, toasts: a };
}, Nm = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || Om() }), Mt = (e) => (t, r) => {
  let a = Nm(t, e, r);
  return Ke({ type: 2, toast: a }), a.id;
}, fe = (e, t) => Mt("blank")(e, t);
fe.error = Mt("error");
fe.success = Mt("success");
fe.loading = Mt("loading");
fe.custom = Mt("custom");
fe.dismiss = (e) => {
  Ke({ type: 3, toastId: e });
};
fe.remove = (e) => Ke({ type: 4, toastId: e });
fe.promise = (e, t, r) => {
  let a = fe.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return e.then((n) => (fe.success(en(t.success, n), { id: a, ...r, ...r == null ? void 0 : r.success }), n)).catch((n) => {
    fe.error(en(t.error, n), { id: a, ...r, ...r == null ? void 0 : r.error });
  }), e;
};
var Rm = (e, t) => {
  Ke({ type: 1, toast: { id: e, height: t } });
}, Lm = () => {
  Ke({ type: 5, time: Date.now() });
}, Vm = (e) => {
  let { toasts: t, pausedAt: r } = $m(e);
  V(() => {
    if (r)
      return;
    let o = Date.now(), s = t.map((i) => {
      if (i.duration === 1 / 0)
        return;
      let u = (i.duration || 0) + i.pauseDuration - (o - i.createdAt);
      if (u < 0) {
        i.visible && fe.dismiss(i.id);
        return;
      }
      return setTimeout(() => fe.dismiss(i.id), u);
    });
    return () => {
      s.forEach((i) => i && clearTimeout(i));
    };
  }, [t, r]);
  let a = U(() => {
    r && Ke({ type: 6, time: Date.now() });
  }, [r]), n = U((o, s) => {
    let { reverseOrder: i = !1, gutter: u = 8, defaultPosition: c } = s || {}, d = t.filter((m) => (m.position || c) === (o.position || c) && m.height), f = d.findIndex((m) => m.id === o.id), p = d.filter((m, g) => g < f && m.visible).length;
    return d.filter((m) => m.visible).slice(...i ? [p + 1] : [0, p]).reduce((m, g) => m + (g.height || 0) + u, 0);
  }, [t]);
  return { toasts: t, handlers: { updateHeight: Rm, startPause: Lm, endPause: a, calculateOffset: n } };
}, Bm = Le`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, zm = Le`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Um = Le`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, Hm = Ge("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Bm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${zm} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Um} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Gm = Le`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, qm = Ge("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Gm} 1s linear infinite;
`, Wm = Le`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Zm = Le`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Ym = Ge("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Wm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Zm} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Km = Ge("div")`
  position: absolute;
`, Jm = Ge("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Xm = Le`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Qm = Ge("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xm} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, eh = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: a } = e;
  return t !== void 0 ? typeof t == "string" ? E.createElement(Qm, null, t) : t : r === "blank" ? null : E.createElement(Jm, null, E.createElement(qm, { ...a }), r !== "loading" && E.createElement(Km, null, r === "error" ? E.createElement(Hm, { ...a }) : E.createElement(Ym, { ...a })));
}, th = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, nh = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, rh = "0%{opacity:0;} 100%{opacity:1;}", ah = "0%{opacity:1;} 100%{opacity:0;}", ih = Ge("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, sh = Ge("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, oh = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [a, n] = Hs() ? [rh, ah] : [th(r), nh(r)];
  return { animation: t ? `${Le(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Le(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, lh = E.memo(({ toast: e, position: t, style: r, children: a }) => {
  let n = e.height ? oh(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = E.createElement(eh, { toast: e }), s = E.createElement(sh, { ...e.ariaProps }, en(e.message, e));
  return E.createElement(ih, { className: e.className, style: { ...n, ...r, ...e.style } }, typeof a == "function" ? a({ icon: o, message: s }) : E.createElement(E.Fragment, null, o, s));
});
Am(E.createElement);
var uh = ({ id: e, className: t, style: r, onHeightUpdate: a, children: n }) => {
  let o = E.useCallback((s) => {
    if (s) {
      let i = () => {
        let u = s.getBoundingClientRect().height;
        a(e, u);
      };
      i(), new MutationObserver(i).observe(s, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [e, a]);
  return E.createElement("div", { ref: o, className: t, style: r }, n);
}, ch = (e, t) => {
  let r = e.includes("top"), a = r ? { top: 0 } : { bottom: 0 }, n = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: Hs() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (r ? 1 : -1)}px)`, ...a, ...n };
}, dh = _n`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, $t = 16, fh = ({ reverseOrder: e, position: t = "top-center", toastOptions: r, gutter: a, children: n, containerStyle: o, containerClassName: s }) => {
  let { toasts: i, handlers: u } = Vm(r);
  return E.createElement("div", { style: { position: "fixed", zIndex: 9999, top: $t, left: $t, right: $t, bottom: $t, pointerEvents: "none", ...o }, className: s, onMouseEnter: u.startPause, onMouseLeave: u.endPause }, i.map((c) => {
    let d = c.position || t, f = u.calculateOffset(c, { reverseOrder: e, gutter: a, defaultPosition: t }), p = ch(d, f);
    return E.createElement(uh, { id: c.id, key: c.id, onHeightUpdate: u.updateHeight, className: c.visible ? dh : "", style: p }, c.type === "custom" ? en(c.message, c) : n ? n(c) : E.createElement(lh, { toast: c, position: d }));
  }));
};
const ph = ({
  t: e,
  children: t,
  props: r
}) => {
  let a = "flex w-[300px] items-start justify-between rounded py-3 px-4 text-sm font-medium text-white gap-6 z-[90] ";
  switch (e.visible ? a += " animate-toaster-in" : a += " animate-toaster-out", r == null ? void 0 : r.type) {
    case "success":
      a += " bg-black", r.icon = r.icon || "check-circle";
      break;
    case "error":
      a += " bg-red", r.icon = r.icon || "warning";
      break;
    default:
      a += " bg-black";
      break;
  }
  return /* @__PURE__ */ l.jsxs("div", { className: a, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-3", children: [
      (r == null ? void 0 : r.icon) && (typeof r.icon == "string" ? /* @__PURE__ */ l.jsx("div", { className: "mt-0.5", children: /* @__PURE__ */ l.jsx(we, { className: "grow", colorClass: r.type === "success" ? "text-green" : "text-white", name: r.icon, size: "sm" }) }) : r.icon),
      t
    ] }),
    /* @__PURE__ */ l.jsx("button", { className: "cursor-pointer", type: "button", onClick: () => {
      fe.dismiss(e.id);
    }, children: /* @__PURE__ */ l.jsx("div", { className: "mt-1", children: /* @__PURE__ */ l.jsx(we, { colorClass: "text-white", name: "close", size: "xs" }) }) })
  ] });
}, Ne = ({
  message: e,
  type: t = "neutral",
  icon: r = "",
  options: a = {
    position: "bottom-left",
    duration: 5e3
  }
}) => {
  a.position || (a.position = "bottom-left"), fe.custom(
    (n) => /* @__PURE__ */ l.jsx(ph, { props: {
      type: t,
      icon: r
    }, t: n, children: e }),
    {
      ...a
    }
  );
}, mh = de.create(() => {
  const { api: e } = z(se), { roles: t, assignableRoles: r, getRoleId: a } = Bs(), { invites: n, setInvites: o } = wn(), s = ce(null), [i, u] = A(""), [c, d] = A(""), [f, p] = A("contributor"), [m, g] = A({});
  V(() => {
    s.current && s.current.focus();
  }, []), V(() => {
    c === "saved" && setTimeout(() => {
      d("");
    }, 2e3);
  }, [c]);
  let b = "Send invitation now";
  c === "saving" ? b = "Sending..." : c === "saved" ? b = "Invite sent!" : c === "error" && (b = "Retry");
  const h = async () => {
    if (c !== "saving") {
      if (!Qt.isEmail(i)) {
        g({
          email: "Please enter a valid email address."
        });
        return;
      }
      d("saving");
      try {
        const w = await e.invites.add({
          email: i,
          roleId: a(f, t)
        });
        o([...n, w.invites[0]]), d("saved"), Ne({
          message: `Invitation successfully sent to ${i}`,
          type: "success"
        });
      } catch {
        d("error"), Ne({
          message: `Failed to send invitation to ${i}`,
          type: "error"
        });
        return;
      }
    }
  }, x = [
    {
      hint: "Can create and edit their own posts, but cannot publish. An Editor needs to approve and publish for them.",
      label: "Contributor",
      value: "contributor"
    },
    {
      hint: "A trusted user who can create, edit and publish their own posts, but can’t modify others.",
      label: "Author",
      value: "author"
    },
    {
      hint: "Can invite and manage other Authors and Contributors, as well as edit and publish any posts on the site.",
      label: "Editor",
      value: "editor"
    },
    {
      hint: "Trusted staff user who should be able to manage all content and users, as well as site settings and options.",
      label: "Administrator",
      value: "administrator"
    }
  ].filter((w) => r.some((_) => _.name === w.label));
  return /* @__PURE__ */ l.jsx(
    kt,
    {
      cancelLabel: "",
      okLabel: b,
      size: 540,
      title: "Invite a new staff user",
      onOk: h,
      children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-6 py-4", children: [
        /* @__PURE__ */ l.jsx("p", { children: "Send an invitation for a new person to create a staff account on your site, and select a role that matches what you’d like them to be able to do." }),
        /* @__PURE__ */ l.jsx(
          H,
          {
            clearBg: !0,
            error: !!m.email,
            hint: m.email,
            inputRef: s,
            placeholder: "jamie@example.com",
            title: "Email address",
            value: i,
            onChange: (w) => {
              u(w.target.value);
            }
          }
        ),
        /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(
          Vs,
          {
            defaultSelectedOption: "contributor",
            id: "role",
            options: x,
            separator: !0,
            title: "Role",
            onSelect: (w) => {
              p(w);
            }
          }
        ) })
      ] })
    }
  );
}), ka = ({ title: e, titleSeparator: t, children: r, hint: a, hintSeparator: n }) => (t = t === void 0 ? !0 : t, n = n === void 0 ? !0 : n, /* @__PURE__ */ l.jsxs("section", { children: [
  e && /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ l.jsx(Y, { grey: !0, level: 6, children: e }),
    t && /* @__PURE__ */ l.jsx(vt, {})
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", children: r }),
  a && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    n && /* @__PURE__ */ l.jsx(vt, {}),
    /* @__PURE__ */ l.jsx(Re, { children: a })
  ] })
] })), Ma = ({ id: e, title: t, detail: r, action: a, hideActions: n, avatar: o, separator: s, onClick: i }) => {
  const u = (c) => {
    i == null || i(c);
  };
  return s = s === void 0 ? !0 : s, /* @__PURE__ */ l.jsxs("div", { className: `group flex items-center justify-between hover:bg-gradient-to-r hover:from-white hover:to-grey-50 ${s ? "border-b border-grey-100 last-of-type:border-none" : ""}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: `flex grow items-center gap-3 ${i && "cursor-pointer"}`, onClick: u, children: [
      o && o,
      /* @__PURE__ */ l.jsxs("div", { className: `flex grow flex-col pr-6 ${s ? "py-3" : "py-2"}`, id: e, children: [
        /* @__PURE__ */ l.jsx("span", { children: t }),
        r && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-grey-700", children: r })
      ] })
    ] }),
    a && /* @__PURE__ */ l.jsx("div", { className: `px-6 ${s ? "py-3" : "py-2"} ${n ? "invisible group-hover:visible" : ""}`, children: a })
  ] });
}, Gs = ({ icon: e, children: t }) => /* @__PURE__ */ l.jsxs("div", { className: "my-10 flex flex-col items-center gap-1 text-sm text-grey-600", children: [
  e && /* @__PURE__ */ l.jsx(we, { className: "stroke-[1px]", colorClass: "text-grey-500", name: e, size: "lg" }),
  t
] }), Sn = ({
  tabs: e,
  onTabChange: t,
  defaultSelected: r,
  border: a = !0,
  width: n = "normal"
}) => {
  e.length !== 0 && r === void 0 && (r = e[0].id);
  const [o, s] = A(r);
  if (e.length === 0)
    return /* @__PURE__ */ l.jsx(l.Fragment, {});
  const i = (c) => {
    const d = c.currentTarget.id;
    s(d), t == null || t(d);
  }, u = W(
    "flex",
    n === "narrow" && "gap-3",
    n === "normal" && "gap-5",
    n === "wide" && "gap-7",
    a && "border-b border-grey-300"
  );
  return /* @__PURE__ */ l.jsxs("section", { children: [
    /* @__PURE__ */ l.jsx("div", { className: u, role: "tablist", children: e.map((c) => /* @__PURE__ */ l.jsx(
      "button",
      {
        "aria-selected": o === c.id,
        className: W(
          "-m-b-px cursor-pointer appearance-none py-1 text-sm transition-all after:invisible after:block after:h-px after:overflow-hidden after:font-bold after:text-transparent after:content-[attr(title)]",
          a && "border-b-[3px]",
          o === c.id && a ? "border-black" : "border-transparent hover:border-grey-500",
          o === c.id && "font-bold"
        ),
        id: c.id,
        role: "tab",
        title: c.title,
        type: "button",
        onClick: i,
        children: c.title
      },
      c.id
    )) }),
    e.map((c) => /* @__PURE__ */ l.jsx(l.Fragment, { children: c.contents && /* @__PURE__ */ l.jsx("div", { className: `${o === c.id ? "block" : "hidden"}`, role: "tabpanel", children: /* @__PURE__ */ l.jsx("div", { children: c.contents }) }, c.id) }))
  ] });
}, hh = ({
  title: e = "Are you sure?",
  prompt: t,
  cancelLabel: r = "Cancel",
  okLabel: a = "OK",
  okRunningLabel: n = "...",
  okColor: o = "black",
  onCancel: s,
  onOk: i,
  customFooter: u
}) => {
  const c = He(), [d, f] = A("");
  return /* @__PURE__ */ l.jsx(
    kt,
    {
      backDropClick: !1,
      cancelLabel: r,
      footer: u,
      okColor: o,
      okLabel: d === "running" ? n : a,
      size: 540,
      title: e,
      onCancel: s,
      onOk: async () => {
        f("running"), await (i == null ? void 0 : i(c)), f("");
      },
      children: /* @__PURE__ */ l.jsx("div", { className: "py-4 leading-9", children: t })
    }
  );
}, qt = de.create(hh), vh = ({ trigger: e, items: t, position: r, className: a }) => {
  const [n, o] = A(!1);
  let s = "absolute z-40 mt-2 min-w-[160px] w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none";
  const i = () => {
    o(!n);
  }, u = (c) => {
    c.target === c.currentTarget && o(!1);
  };
  switch (r) {
    case "left":
      s += " right-0 ";
      break;
    case "right":
      s += " left-0 ";
      break;
    default:
      s += " left-0 ";
      break;
  }
  return s += n ? "block" : "hidden", /* @__PURE__ */ l.jsxs("div", { className: `relative inline-block ${a}`, children: [
    /* @__PURE__ */ l.jsx("div", { className: `fixed inset-0 z-40 ${n ? "block" : "hidden"}`, onClick: u }),
    /* @__PURE__ */ l.jsx("div", { className: "relative z-50", onClick: i, children: e }),
    /* @__PURE__ */ l.jsx("div", { "aria-labelledby": "menu-button", "aria-orientation": "vertical", className: s, role: "menu", children: /* @__PURE__ */ l.jsx("div", { className: "py-1", role: "none", children: t.map((c) => /* @__PURE__ */ l.jsx("button", { className: "block w-full cursor-pointer px-4 py-2 text-left text-sm text-grey-900 hover:bg-grey-100", type: "button", onClick: c.onClick, children: c.label }, c.id)) }) })
  ] });
}, Cn = ({ children: e }) => /* @__PURE__ */ l.jsx(Y, { level: 4, children: e }), gh = ({ user: e, setUserData: t }) => {
  const { roles: r } = Bs();
  return Fl(e) ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Y, { level: 6, children: "Role" }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex h-[295px] flex-col items-center justify-center gap-3 bg-grey-75 px-10 py-20 text-center text-sm text-grey-800", children: [
      /* @__PURE__ */ l.jsx(we, { colorClass: "text-grey-800", name: "crown", size: "lg" }),
      "This user is the owner of the site. To change their role, you need to transfer the ownership first."
    ] })
  ] }) : /* @__PURE__ */ l.jsx(
    Vs,
    {
      defaultSelectedOption: e.roles[0].name.toLowerCase(),
      id: "role",
      options: [
        {
          hint: "Can create and edit their own posts, but cannot publish. An Editor needs to approve and publish for them.",
          label: "Contributor",
          value: "contributor"
        },
        {
          hint: "A trusted user who can create, edit and publish their own posts, but can’t modify others.",
          label: "Author",
          value: "author"
        },
        {
          hint: "Can invite and manage other Authors and Contributors, as well as edit and publish any posts on the site.",
          label: "Editor",
          value: "editor"
        },
        {
          hint: "Trusted staff user who should be able to manage all content and users, as well as site settings and options.",
          label: "Administrator",
          value: "administrator"
        }
      ],
      title: "Role",
      onSelect: (a) => {
        const n = r == null ? void 0 : r.find((o) => o.name.toLowerCase() === a.toLowerCase());
        n && (t == null || t({ ...e, roles: [n] }));
      }
    }
  );
}, bh = ({ errors: e, user: t, setUserData: r }) => /* @__PURE__ */ l.jsxs(G, { children: [
  /* @__PURE__ */ l.jsx(
    H,
    {
      hint: "Use real name so people can recognize you",
      title: "Full name",
      value: t.name,
      onChange: (a) => {
        r == null || r({ ...t, name: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    H,
    {
      error: !!(e != null && e.email),
      hint: (e == null ? void 0 : e.email) || "",
      title: "Email",
      value: t.email,
      onChange: (a) => {
        r == null || r({ ...t, email: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(gh, { setUserData: r, user: t })
] }), xh = ({ errors: e, user: t, setUserData: r }) => /* @__PURE__ */ l.jsx(
  Q,
  {
    border: !1,
    customHeader: /* @__PURE__ */ l.jsx(Cn, { children: "Basic info" }),
    title: "Basic",
    children: /* @__PURE__ */ l.jsx(bh, { errors: e, setUserData: r, user: t })
  }
), yh = ({ errors: e, user: t, setUserData: r }) => /* @__PURE__ */ l.jsxs(G, { children: [
  /* @__PURE__ */ l.jsx(
    H,
    {
      hint: "https://example.com/author",
      title: "Slug",
      value: t.slug,
      onChange: (a) => {
        r == null || r({ ...t, slug: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    H,
    {
      title: "Location",
      value: t.location,
      onChange: (a) => {
        r == null || r({ ...t, location: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    H,
    {
      error: !!(e != null && e.url),
      hint: (e == null ? void 0 : e.url) || "",
      title: "Website",
      value: t.website,
      onChange: (a) => {
        r == null || r({ ...t, website: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    H,
    {
      title: "Facebook profile",
      value: t.facebook,
      onChange: (a) => {
        r == null || r({ ...t, facebook: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    H,
    {
      title: "Twitter profile",
      value: t.twitter,
      onChange: (a) => {
        r == null || r({ ...t, twitter: a.target.value });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    H,
    {
      hint: "Recommended: 200 characters.",
      title: "Bio",
      value: t.bio,
      onChange: (a) => {
        r == null || r({ ...t, bio: a.target.value });
      }
    }
  )
] }), wh = ({ errors: e, user: t, setUserData: r }) => /* @__PURE__ */ l.jsx(
  Q,
  {
    border: !1,
    customHeader: /* @__PURE__ */ l.jsx(Cn, { children: "Details" }),
    title: "Details",
    children: /* @__PURE__ */ l.jsx(yh, { errors: e, setUserData: r, user: t })
  }
), _h = ({ user: e, setUserData: t }) => /* @__PURE__ */ l.jsxs(G, { children: [
  /* @__PURE__ */ l.jsx(
    Se,
    {
      checked: e.comment_notifications,
      direction: "rtl",
      hint: "Every time a member comments on one of your posts",
      id: "comments",
      label: "Comments",
      onChange: (r) => {
        t == null || t({ ...e, comment_notifications: r.target.checked });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    Se,
    {
      checked: e.free_member_signup_notification,
      direction: "rtl",
      hint: "Every time a new free member signs up",
      id: "new-signups",
      label: "New signups",
      onChange: (r) => {
        t == null || t({ ...e, free_member_signup_notification: r.target.checked });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    Se,
    {
      checked: e.paid_subscription_started_notification,
      direction: "rtl",
      hint: "Every time a member starts a new paid subscription",
      id: "new-paid-members",
      label: "New paid members",
      onChange: (r) => {
        t == null || t({ ...e, paid_subscription_started_notification: r.target.checked });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    Se,
    {
      checked: e.paid_subscription_canceled_notification,
      direction: "rtl",
      hint: "Every time a member cancels their paid subscription",
      id: "paid-member-cancellations",
      label: "Paid member cancellations",
      onChange: (r) => {
        t == null || t({ ...e, paid_subscription_canceled_notification: r.target.checked });
      }
    }
  ),
  /* @__PURE__ */ l.jsx(
    Se,
    {
      checked: e.milestone_notifications,
      direction: "rtl",
      hint: "Occasional summaries of your audience & revenue growth",
      id: "milestones",
      label: "Milestones",
      onChange: (r) => {
        t == null || t({ ...e, milestone_notifications: r.target.checked });
      }
    }
  )
] }), Sh = ({ user: e, setUserData: t }) => /* @__PURE__ */ l.jsx(
  Q,
  {
    border: !1,
    customHeader: /* @__PURE__ */ l.jsx(Cn, { children: "Email notifications" }),
    title: "Email notifications",
    children: /* @__PURE__ */ l.jsx(_h, { setUserData: t, user: e })
  }
);
function Ch({ password: e, confirmPassword: t }) {
  const r = {};
  return e !== t && (r.newPassword = "Your new passwords do not match", r.confirmNewPassword = "Your new passwords do not match"), e.length < 10 && (r.newPassword = "Password must be at least 10 characters"), r;
}
const Eh = ({ user: e }) => {
  const [t, r] = A(!1), [a, n] = A(""), [o, s] = A(""), [i, u] = A(""), [c, d] = A({}), f = ce(null), p = ce(null), { api: m } = z(se);
  V(() => {
    i === "saved" && setTimeout(() => {
      u(""), r(!1);
    }, 2500);
  }, [i]);
  const g = () => {
    r(!0);
  }, b = /* @__PURE__ */ l.jsx(
    ie,
    {
      color: "grey",
      label: "Change password",
      onClick: g
    }
  );
  let h = "Change password";
  i === "saving" ? h = "Updating..." : i === "saved" ? h = "Updated" : i === "error" && (h = "Retry");
  const v = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      H,
      {
        error: !!c.newPassword,
        hint: c.newPassword,
        inputRef: f,
        title: "New password",
        type: "password",
        value: "",
        onChange: (x) => {
          n(x.target.value);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
      {
        error: !!c.confirmNewPassword,
        hint: c.confirmNewPassword,
        inputRef: p,
        title: "Verify password",
        type: "password",
        value: "",
        onChange: (x) => {
          s(x.target.value);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      ie,
      {
        color: "red",
        label: h,
        onClick: async () => {
          u("saving");
          const x = Ch({ password: a, confirmPassword: o });
          if (d(x), Object.keys(x).length > 0) {
            n(""), s(""), f.current && (f.current.value = ""), p.current && (p.current.value = ""), u("");
            return;
          }
          try {
            await m.users.updatePassword({
              newPassword: a,
              confirmNewPassword: o,
              oldPassword: "",
              userId: e == null ? void 0 : e.id
            }), u("saved");
          } catch {
            u("error");
          }
        }
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      border: !1,
      customHeader: /* @__PURE__ */ l.jsx(Cn, { children: "Password" }),
      title: "Password",
      children: t ? v : b
    }
  );
}, kh = () => /* @__PURE__ */ l.jsx("div", { className: "flex h-8 cursor-pointer items-center justify-center rounded bg-[rgba(0,0,0,0.75)] px-3 opacity-80 hover:opacity-100", children: /* @__PURE__ */ l.jsx(we, { colorClass: "text-white", name: "menu-horizontal", size: "sm" }) }), Mh = ({ user: e, updateUser: t }) => {
  const { api: r } = z(se), { users: a, setUsers: n, ownerUser: o } = wn(), [s, i] = A(e), [u, c] = A(""), [d, f] = A({}), { fileService: p } = z(se), m = He(), g = (S) => {
    let C = "This user will no longer be able to log in but their posts will be kept.";
    S.status === "inactive" && (C = "This user will be able to log in again and will have the same permissions they had previously."), de.show(qt, {
      title: "Are you sure you want to suspend this user?",
      prompt: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("strong", { children: "WARNING:" }),
        " ",
        C
      ] }),
      okLabel: S.status === "inactive" ? "Un-suspend" : "Suspend",
      okRunningLabel: S.status === "inactive" ? "Un-suspending..." : "Suspending...",
      okColor: "red",
      onOk: async (T) => {
        const N = {
          ...S,
          status: S.status === "inactive" ? "active" : "inactive"
        }, re = (await r.users.edit(N)).users[0];
        n((O) => O.map(($) => $.id === re.id ? re : $)), i(N), T == null || T.remove(), Ne({
          message: S.status === "inactive" ? "User un-suspended" : "User suspended",
          type: "success"
        });
      }
    });
  }, b = (S, { owner: C }) => {
    de.show(qt, {
      title: "Are you sure you want to delete this user?",
      prompt: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs("p", { className: "mb-3", children: [
          /* @__PURE__ */ l.jsx("span", { className: "font-bold", children: S.name || S.email }),
          " will be permanently deleted and all their posts will be automatically assigned to the ",
          /* @__PURE__ */ l.jsx("span", { className: "font-bold", children: C.name }),
          "."
        ] }),
        /* @__PURE__ */ l.jsxs("p", { children: [
          "To make these easy to find in the future, each post will be given an internal tag of ",
          /* @__PURE__ */ l.jsxs("span", { className: "font-bold", children: [
            "#",
            e.slug
          ] })
        ] })
      ] }),
      okLabel: "Delete user",
      okColor: "red",
      onOk: async (T) => {
        await r.users.delete(S == null ? void 0 : S.id);
        const N = a.filter((Z) => Z.id !== S.id);
        n(N), T == null || T.remove(), m == null || m.remove(), Ne({
          message: "User deleted",
          type: "success"
        });
      }
    });
  }, h = () => {
    de.show(qt, {
      title: "Transfer Ownership",
      prompt: "Are you sure you want to transfer the ownership of this blog? You will not be able to undo this action.",
      okLabel: "Yep — I'm sure",
      okColor: "red",
      onOk: async (S) => {
        const C = await r.users.makeOwner(e.id);
        n(C.users), S == null || S.remove(), Ne({
          message: "Ownership transferred",
          type: "success"
        });
      }
    });
  }, v = async (S, C) => {
    try {
      const T = await p.uploadImage(C);
      switch (S) {
        case "cover_image":
          i == null || i((N) => ({ ...N, cover_image: T }));
          break;
        case "profile_image":
          i == null || i((N) => ({ ...N, profile_image: T }));
          break;
      }
    } catch {
    }
  }, x = (S) => {
    switch (S) {
      case "cover_image":
        i == null || i((C) => ({ ...C, cover_image: "" }));
        break;
      case "profile_image":
        i == null || i((C) => ({ ...C, profile_image: "" }));
        break;
    }
  };
  let w = (s == null ? void 0 : s.status) === "inactive" ? "Un-suspend user" : "Suspend user", _ = [];
  Ol(s) && _.push({
    id: "make-owner",
    label: "Make owner",
    onClick: h
  }), _ = _.concat([
    {
      id: "delete-user",
      label: "Delete user",
      onClick: () => {
        b(e, { owner: o });
      }
    },
    {
      id: "suspend-user",
      label: w,
      onClick: () => {
        g(s);
      }
    },
    {
      id: "view-user-activity",
      label: "View user activity",
      onClick: () => {
      }
    }
  ]);
  let M = u === "saved" ? "Saved" : "Save";
  u === "saving" && (M = "Saving..."), V(() => {
    u === "saved" && setTimeout(() => {
      c("");
    }, 2e3);
  }, [u]);
  const k = "absolute right-[104px] bottom-12 bg-[rgba(0,0,0,0.75)] rounded text-sm text-white flex items-center justify-center px-3 h-8 opacity-80 hover:opacity-100 transition cursor-pointer font-medium z-10", y = s.status === "inactive" ? " (Suspended)" : "";
  return /* @__PURE__ */ l.jsx(
    kt,
    {
      backDropClick: !1,
      cancelLabel: "Close",
      okLabel: M,
      size: "lg",
      stickyFooter: !0,
      onOk: async () => {
        if (c("saving"), !Qt.isEmail(s.email)) {
          f == null || f((S) => ({ ...S, email: "Please enter a valid email address" })), c("");
          return;
        }
        if (!Qt.isURL(s.url)) {
          f == null || f((S) => ({ ...S, url: "Please enter a valid URL" })), c("");
          return;
        }
        await (t == null ? void 0 : t(s)), c("saved");
      },
      children: /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative -mx-12 -mt-12 rounded-t bg-gradient-to-tr from-grey-900 to-black", children: [
          /* @__PURE__ */ l.jsx(
            Ue,
            {
              deleteButtonClassName: k,
              deleteButtonContent: "Delete cover image",
              fileUploadClassName: k,
              height: s.cover_image ? "100%" : "32px",
              id: "cover-image",
              imageClassName: "w-full h-full object-cover",
              imageContainerClassName: "absolute inset-0 bg-cover group bg-center rounded-t overflow-hidden",
              imageURL: s.cover_image || "",
              unstyled: !0,
              onDelete: () => {
                x("cover_image");
              },
              onUpload: (S) => {
                v("cover_image", S);
              },
              children: "Upload cover image"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "absolute bottom-12 right-12", children: /* @__PURE__ */ l.jsx(vh, { items: _, position: "left", trigger: /* @__PURE__ */ l.jsx(kh, {}) }) }),
          /* @__PURE__ */ l.jsxs("div", { className: "relative flex items-center gap-4 px-12 pb-7 pt-60", children: [
            /* @__PURE__ */ l.jsx(
              Ue,
              {
                deleteButtonClassName: "invisible absolute -right-2 -top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.75)] text-white hover:bg-black group-hover:!visible",
                deleteButtonContent: /* @__PURE__ */ l.jsx(we, { colorClass: "text-white", name: "trash", size: "sm" }),
                fileUploadClassName: "rounded-full bg-black flex items-center justify-center opacity-80 transition hover:opacity-100 -ml-2 cursor-pointer h-[80px] w-[80px]",
                id: "avatar",
                imageClassName: "w-full h-full object-cover rounded-full",
                imageContainerClassName: "relative group bg-cover bg-center -ml-2 h-[80px] w-[80px]",
                imageURL: s.profile_image,
                unstyled: !0,
                width: "80px",
                onDelete: () => {
                  x("profile_image");
                },
                onUpload: (S) => {
                  v("profile_image", S);
                },
                children: /* @__PURE__ */ l.jsx(we, { colorClass: "text-white", name: "user-add", size: "lg" })
              }
            ),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsxs(Y, { styles: "text-white", children: [
                e.name,
                y
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "text-md font-semibold capitalize text-white", children: e.roles[0].name.toLowerCase() })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "mt-10 grid grid-cols-2 gap-x-12 gap-y-20", children: [
          /* @__PURE__ */ l.jsx(xh, { errors: d, setUserData: i, user: s }),
          /* @__PURE__ */ l.jsx(wh, { errors: d, setUserData: i, user: s }),
          /* @__PURE__ */ l.jsx(Sh, { setUserData: i, user: s }),
          /* @__PURE__ */ l.jsx(Eh, { user: s })
        ] })
      ] })
    }
  );
}, qs = de.create(Mh), jh = ({ user: e, updateUser: t }) => {
  const r = () => {
    de.show(qs, { user: e, updateUser: t });
  };
  return e ? /* @__PURE__ */ l.jsxs("div", { className: "group flex gap-3 hover:cursor-pointer", onClick: r, children: [
    /* @__PURE__ */ l.jsx(Ea, { bgColor: oa(e.name ? e.name : e.email), image: e.profile_image, label: yi(e.name), labelColor: "white", size: "lg" }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ l.jsxs("span", { children: [
        e.name,
        " — ",
        /* @__PURE__ */ l.jsx("strong", { children: "Owner" }),
        " ",
        /* @__PURE__ */ l.jsx("span", { className: "invisible ml-2 inline-block text-sm font-bold text-green group-hover:visible", children: "Edit" })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "text-xs text-grey-700", children: e.email })
    ] })
  ] }) : null;
}, Nt = ({ users: e, updateUser: t }) => {
  const r = (a) => {
    de.show(qs, { user: a, updateUser: t });
  };
  return !e || !e.length ? /* @__PURE__ */ l.jsx(Gs, { icon: "single-user-neutral-block", children: "No users found." }) : /* @__PURE__ */ l.jsx(ka, { children: e.map((a) => {
    let n = a.name || "";
    return a.status === "inactive" && (n = `${n} (Suspended)`), /* @__PURE__ */ l.jsx(
      Ma,
      {
        action: /* @__PURE__ */ l.jsx(ie, { color: "green", label: "Edit", link: !0, onClick: () => r(a) }),
        avatar: /* @__PURE__ */ l.jsx(Ea, { bgColor: oa(a.name ? a.name : a.email), image: a.profile_image, label: yi(a.name), labelColor: "white" }),
        detail: a.email,
        hideActions: !0,
        id: `list-item-${a.id}`,
        title: n,
        onClick: () => r(a)
      },
      a.id
    );
  }) });
}, Ah = ({ invite: e }) => {
  const { api: t } = z(se), { setInvites: r } = wn(), [a, n] = A(""), [o, s] = A("");
  let i = "Revoke";
  a === "progress" && (i = "Revoking...");
  let u = "Resend";
  return o === "progress" && (u = "Resending..."), /* @__PURE__ */ l.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ l.jsx(
      ie,
      {
        color: "red",
        label: i,
        link: !0,
        onClick: async () => {
          n("progress"), await t.invites.delete(e.id);
          const c = await t.invites.browse();
          r(c.invites), n(""), Ne({
            message: `Invitation revoked(${e.email})`,
            type: "success"
          });
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      ie,
      {
        className: "ml-2",
        color: "green",
        label: u,
        link: !0,
        onClick: async () => {
          s("progress"), await t.invites.delete(e.id), await t.invites.add({
            email: e.email,
            roleId: e.role_id
          });
          const c = await t.invites.browse();
          r(c.invites), s(""), Ne({
            message: `Invitation resent!(${e.email})`,
            type: "success"
          });
        }
      }
    )
  ] });
}, Fh = ({ users: e }) => !e || !e.length ? /* @__PURE__ */ l.jsx(Gs, { icon: "single-user-neutral-block", children: "No users found." }) : /* @__PURE__ */ l.jsx(ka, { children: e.map((t) => /* @__PURE__ */ l.jsx(
  Ma,
  {
    action: /* @__PURE__ */ l.jsx(Ah, { invite: t }),
    avatar: /* @__PURE__ */ l.jsx(Ea, { bgColor: oa(t.email), image: "", label: "", labelColor: "white" }),
    detail: t.role,
    hideActions: !0,
    id: `list-item-${t.id}`,
    title: t.email,
    onClick: () => {
    }
  },
  t.id
)) }), Oh = () => {
  const {
    ownerUser: e,
    adminUsers: t,
    editorUsers: r,
    authorUsers: a,
    contributorUsers: n,
    invites: o,
    updateUser: s
  } = wn(), i = () => {
    de.show(mh);
  }, u = /* @__PURE__ */ l.jsx(ie, { color: "green", label: "Invite users", link: !0, onClick: () => {
    i();
  } }), c = [
    {
      id: "users-admins",
      title: "Administrators",
      contents: /* @__PURE__ */ l.jsx(Nt, { updateUser: s, users: t })
    },
    {
      id: "users-editors",
      title: "Editors",
      contents: /* @__PURE__ */ l.jsx(Nt, { updateUser: s, users: r })
    },
    {
      id: "users-authors",
      title: "Authors",
      contents: /* @__PURE__ */ l.jsx(Nt, { updateUser: s, users: a })
    },
    {
      id: "users-contributors",
      title: "Contributors",
      contents: /* @__PURE__ */ l.jsx(Nt, { updateUser: s, users: n })
    },
    {
      id: "users-invited",
      title: "Invited",
      contents: /* @__PURE__ */ l.jsx(Fh, { updateUser: s, users: o })
    }
  ];
  return /* @__PURE__ */ l.jsxs(
    Q,
    {
      customButtons: u,
      navid: "users",
      title: "Users and permissions",
      children: [
        /* @__PURE__ */ l.jsx(jh, { updateUser: s, user: e }),
        /* @__PURE__ */ l.jsx(Sn, { tabs: c })
      ]
    }
  );
}, Ih = () => /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(yn, { title: "General", children: [
  /* @__PURE__ */ l.jsx(hm, {}),
  /* @__PURE__ */ l.jsx(mm, {}),
  /* @__PURE__ */ l.jsx(rp, {}),
  /* @__PURE__ */ l.jsx(np, {}),
  /* @__PURE__ */ l.jsx(gm, {}),
  /* @__PURE__ */ l.jsx(Kf, {}),
  /* @__PURE__ */ l.jsx(fm, {}),
  /* @__PURE__ */ l.jsx(Jf, {}),
  /* @__PURE__ */ l.jsx(Oh, {})
] }) }), fi = [
  { value: "all", label: "Anyone can sign up" },
  { value: "invite", label: "Only people I invite" },
  { value: "none", label: "Nobody" }
], pi = [
  { value: "public", label: "Public" },
  { value: "members", label: "Members only" },
  { value: "paid", label: "Paid-members only" },
  { value: "tiers", label: "Specific tiers" }
], mi = [
  { value: "all", label: "All members" },
  { value: "paid", label: "Paid-members only" },
  { value: "off", label: "Nobody" }
], Ph = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    handleEditingChange: s
  } = _e(), [i, u, c, d] = ve(e, [
    "members_signup_access",
    "default_content_visibility",
    "default_content_visibility_tiers",
    "comments_enabled"
  ]), f = Rt(fi, i), p = Rt(pi, u), m = Rt(mi, d), { api: g } = z(se), [b, h] = A([]);
  V(() => {
    g.tiers.browse().then((y) => {
      h(y.tiers);
    });
  }, [g]);
  const v = [
    {
      label: "Active Tiers",
      options: b.filter(({ active: y }) => y).map((y) => ({ value: y.id, label: y.name }))
    },
    {
      label: "Archived Tiers",
      options: b.filter(({ active: y }) => !y).map((y) => ({ value: y.id, label: y.name }))
    }
  ], x = JSON.parse(c || "[]"), w = v.flatMap((y) => y.options).filter((y) => x.includes(y.value)), _ = (y) => {
    const S = y.map((C) => C.value);
    o("default_content_visibility_tiers", JSON.stringify(S));
  }, M = /* @__PURE__ */ l.jsx(
    G,
    {
      values: [
        {
          heading: "Subscription access",
          key: "subscription-access",
          value: f
        },
        {
          heading: "Default post access",
          key: "default-post-access",
          value: p
        },
        {
          heading: "Commenting",
          key: "commenting",
          value: m
        }
      ]
    }
  ), k = /* @__PURE__ */ l.jsxs(G, { columns: 1, children: [
    /* @__PURE__ */ l.jsx(
      ze,
      {
        defaultSelectedOption: i,
        hint: "Who should be able to subscribe to your site?",
        options: fi,
        title: "Subscription access",
        onSelect: (y) => {
          o("members_signup_access", y);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      ze,
      {
        defaultSelectedOption: u,
        hint: "When a new post is created, who should have access?",
        options: pi,
        title: "Default post access",
        onSelect: (y) => {
          o("default_content_visibility", y);
        }
      }
    ),
    u === "tiers" && /* @__PURE__ */ l.jsx(
      ks,
      {
        color: "black",
        defaultValues: w,
        options: v.filter((y) => y.options.length > 0),
        title: "Select tiers",
        clearBg: !0,
        onChange: _
      }
    ),
    /* @__PURE__ */ l.jsx(
      ze,
      {
        defaultSelectedOption: d,
        hint: "Who can comment on posts?",
        options: mi,
        title: "Commenting",
        onSelect: (y) => {
          o("comments_enabled", y);
        }
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      description: "Set up default access options for subscription and posts",
      isEditing: t,
      navid: "access",
      saveState: r,
      testId: "access",
      title: "Access",
      onCancel: n,
      onEditingChange: s,
      onSave: a,
      children: t ? k : M
    }
  );
}, Dh = () => {
  const {
    localSettings: e,
    isEditing: t,
    saveState: r,
    handleSave: a,
    handleCancel: n,
    updateSetting: o,
    handleEditingChange: s
  } = _e(), [i, u, c, d] = ve(e, [
    "email_track_opens",
    "email_track_clicks",
    "members_track_sources",
    "outbound_link_tagging"
  ]), f = (m, g) => {
    o(m, g.target.checked), s(!0);
  }, p = /* @__PURE__ */ l.jsxs(G, { columns: 2, children: [
    /* @__PURE__ */ l.jsx(
      Se,
      {
        checked: i,
        direction: "rtl",
        hint: "Record when a member opens an email",
        id: "newsletter-opens",
        label: "Newsletter opens",
        onChange: (m) => {
          f("email_track_opens", m);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      Se,
      {
        checked: u,
        direction: "rtl",
        hint: "Record when a member clicks on any link in an email",
        id: "newsletter-clicks",
        label: "Newsletter clicks",
        onChange: (m) => {
          f("email_track_clicks", m);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      Se,
      {
        checked: c,
        direction: "rtl",
        hint: "Track the traffic sources and posts that drive the most member growth",
        id: "member-sources",
        label: "Member sources",
        onChange: (m) => {
          f("members_track_sources", m);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      Se,
      {
        checked: d,
        direction: "rtl",
        hint: "Make it easier for other sites to track the traffic you send them in their analytics",
        id: "outbound-links",
        label: "Outbound link tagging",
        onChange: (m) => {
          f("outbound_link_tagging", m);
        }
      }
    )
  ] });
  return /* @__PURE__ */ l.jsxs(
    Q,
    {
      description: "Decide what data you collect from your members",
      hideEditButton: !0,
      isEditing: t,
      navid: "analytics",
      saveState: r,
      testId: "analytics",
      title: "Analytics",
      onCancel: n,
      onEditingChange: s,
      onSave: a,
      children: [
        p,
        /* @__PURE__ */ l.jsx("div", { className: "mt-1", children: /* @__PURE__ */ l.jsx(ie, { color: "green", label: "Export analytics", link: !0 }) })
      ]
    }
  );
}, Th = () => /* @__PURE__ */ l.jsxs(yn, { title: "Membership", children: [
  /* @__PURE__ */ l.jsx(Ph, {}),
  /* @__PURE__ */ l.jsx(Dh, {})
] }), $h = ({ values: e, updateSetting: t }) => {
  const { fileService: r } = z(se);
  return /* @__PURE__ */ l.jsx("div", { className: "mt-7", children: /* @__PURE__ */ l.jsxs(G, { children: [
    /* @__PURE__ */ l.jsx(
      H,
      {
        clearBg: !0,
        hint: "Used in your theme, meta data and search results",
        title: "Site description",
        value: e.description,
        onChange: (a) => t("description", a.target.value)
      },
      "site-description"
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ l.jsx(Y, { grey: !0, level: 6, children: "Accent color" }),
      /* @__PURE__ */ l.jsx("div", { className: "relative max-w-[70px]", children: /* @__PURE__ */ l.jsx(
        H,
        {
          className: "text-right",
          clearBg: !0,
          maxLength: 7,
          type: "color",
          value: e.accentColor,
          onChange: (a) => t("accent_color", a.target.value)
        },
        "accent-color"
      ) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: `flex justify-between ${e.icon ? "items-start " : "items-end"}`, children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx(Y, { grey: !!e.icon, level: 6, children: "Publication icon" }),
        /* @__PURE__ */ l.jsx(Re, { className: "mr-5 max-w-[160px]", children: "A square, social icon, at least 60x60px" })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ l.jsx(
        Ue,
        {
          deleteButtonClassName: "!top-1 !right-1",
          height: e.icon ? "66px" : "36px",
          id: "logo",
          imageBWCheckedBg: !0,
          imageURL: e.icon || "",
          width: e.icon ? "66px" : "150px",
          onDelete: () => t("icon", null),
          onUpload: async (a) => {
            t("icon", await r.uploadImage(a));
          },
          children: "Upload icon"
        }
      ) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx(Y, { className: "mb-2", grey: !!e.logo, level: 6, children: "Publication logo" }),
      /* @__PURE__ */ l.jsx(
        Ue,
        {
          deleteButtonClassName: "!top-1 !right-1",
          height: "80px",
          id: "logo",
          imageBWCheckedBg: !0,
          imageFit: "contain",
          imageURL: e.logo || "",
          onDelete: () => t("logo", null),
          onUpload: async (a) => {
            t("logo", await r.uploadImage(a));
          },
          children: "Upload logo"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx(Y, { className: "mb-2", level: 6, children: "Publication cover" }),
      /* @__PURE__ */ l.jsx(
        Ue,
        {
          deleteButtonClassName: "!top-1 !right-1",
          height: "180px",
          id: "cover",
          imageURL: e.coverImage || "",
          onDelete: () => t("cover_image", null),
          onUpload: async (a) => {
            t("cover_image", await r.uploadImage(a));
          },
          children: "Upload cover"
        }
      )
    ] })
  ] }) });
};
function Nh({
  description: e,
  accentColor: t,
  icon: r,
  logo: a,
  coverImage: n,
  themeSettings: o
}) {
  const s = new URLSearchParams();
  s.append("c", t), s.append("d", e), s.append("icon", r), s.append("logo", a), s.append("cover", n);
  const i = {};
  return o.forEach((u) => {
    i[u.key] = u.value;
  }), s.append("custom", JSON.stringify(i)), s.toString();
}
const Rh = ({ settings: e, url: t }) => {
  const r = ce(null);
  return V(() => {
    t && fetch(t, {
      method: "POST",
      headers: {
        "Content-Type": "text/html;charset=utf-8",
        "x-ghost-preview": Nh({
          ...e
        }),
        Accept: "text/plain",
        mode: "cors",
        credentials: "include"
      }
    }).then((a) => a.text()).then((a) => {
      var p, m, g;
      const n = "html { pointer-events: none; }", s = new DOMParser().parseFromString(a, "text/html"), i = s.querySelector("style"), u = i.innerHTML;
      i.innerHTML = `${u}

${n}`;
      let d = (s.doctype ? new XMLSerializer().serializeToString(s.doctype) : "") + s.documentElement.outerHTML;
      const f = r.current;
      f && ((p = f.contentDocument) == null || p.open(), (m = f.contentDocument) == null || m.write(d), (g = f.contentDocument) == null || g.close());
    }).catch(() => {
    });
  }, [t, e]), /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
    "iframe",
    {
      ref: r,
      "data-testid": "theme-preview",
      height: "100%",
      title: "Site Preview",
      width: "100%"
    }
  ) });
}, Lh = ({ setting: e, setSetting: t }) => {
  const { fileService: r } = z(se), a = async (n) => {
    const o = await r.uploadImage(n);
    t(o);
  };
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ l.jsx(
        H,
        {
          title: ct(e.key),
          value: e.value || "",
          onChange: (n) => t(n.target.value)
        }
      );
    case "boolean":
      return /* @__PURE__ */ l.jsx(
        Se,
        {
          direction: "rtl",
          id: `theme-setting-${e.key}`,
          label: ct(e.key),
          onChange: (n) => t(n.target.checked)
        }
      );
    case "select":
      return /* @__PURE__ */ l.jsx(
        ze,
        {
          defaultSelectedOption: e.value,
          options: e.options.map((n) => ({ label: n, value: n })),
          title: ct(e.key),
          onSelect: (n) => t(n)
        }
      );
    case "color":
      return /* @__PURE__ */ l.jsx(
        H,
        {
          title: ct(e.key),
          type: "color",
          value: e.value || "",
          onChange: (n) => t(n.target.value)
        }
      );
    case "image":
      return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Y, { useLabelTag: !0, children: ct(e.key) }),
        /* @__PURE__ */ l.jsx(
          Ue,
          {
            height: e.value ? "100px" : "32px",
            id: "cover-image",
            imageURL: e.value || "",
            onDelete: () => t(null),
            onUpload: (n) => a(n),
            children: "Upload image"
          }
        )
      ] });
  }
}, Vh = ({ settings: e, updateSetting: t }) => /* @__PURE__ */ l.jsx(G, { className: "mt-7", children: e.map((r) => /* @__PURE__ */ l.jsx(Lh, { setSetting: (a) => t({ ...r, value: a }), setting: r }, r.key)) }), Bh = ({
  size: e = "md",
  toolbarLeft: t = "",
  toolbarCenter: r = "",
  toolbarRight: a = "",
  toolbarClasses: n = ""
}) => {
  let o;
  switch (e) {
    case "sm":
      o = "h-[32px] p-2";
      break;
    case "md":
      o = "h-[48px] px-3 py-5";
      break;
    case "lg":
      o = "h-[74px] px-3 py-5";
      break;
  }
  const s = e === "sm" ? "w-[6px] h-[6px]" : "w-[10px] h-[10px]", i = e === "sm" ? 36 : 56;
  let u = e === "sm" ? "gap-[5px] " : "gap-2 ";
  u += `w-[${i}px]`;
  const c = /* @__PURE__ */ l.jsxs("div", { className: `absolute left-5 flex h-full items-center ${u}`, children: [
    /* @__PURE__ */ l.jsx("div", { className: `rounded-full bg-grey-500 ${s}` }),
    /* @__PURE__ */ l.jsx("div", { className: `rounded-full bg-grey-500 ${s}` }),
    /* @__PURE__ */ l.jsx("div", { className: `rounded-full bg-grey-500 ${s}` })
  ] });
  return /* @__PURE__ */ l.jsxs("header", { className: `relative flex items-center justify-center bg-grey-50 ${o} ${n}`, children: [
    t ? /* @__PURE__ */ l.jsx("div", { className: "absolute left-5 flex h-full items-center", children: t }) : c,
    /* @__PURE__ */ l.jsx("div", { className: "flex grow justify-center", children: typeof r == "string" ? /* @__PURE__ */ l.jsx("span", { className: "text-sm font-bold", children: r }) : /* @__PURE__ */ l.jsx(l.Fragment, { children: r }) }),
    a && /* @__PURE__ */ l.jsx("div", { className: "absolute right-5 flex h-full items-center", children: a })
  ] });
}, Ws = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "flex h-[775px] w-[380px] flex-col rounded-3xl bg-white p-2 shadow-xl", children: /* @__PURE__ */ l.jsx("div", { className: "w-100 h-100 grow overflow-auto rounded-2xl border border-grey-100", children: e }) }), zh = ({
  testId: e,
  title: t,
  size: r = "full",
  sidebar: a = "",
  preview: n,
  cancelLabel: o = "Cancel",
  okLabel: s = "OK",
  okColor: i = "black",
  previewToolbar: u = !0,
  previewToolbarURLs: c,
  selectedURL: d,
  previewToolbarTabs: f,
  defaultTab: p,
  buttonsDisabled: m,
  sidebarButtons: g,
  sidebarHeader: b,
  sidebarPadding: h = !0,
  onCancel: v,
  onOk: x,
  onSelectURL: w,
  onSelectDesktopView: _,
  onSelectMobileView: M
}) => {
  const k = He();
  let y = [];
  const [S, C] = A("desktop");
  if (S === "mobile" && (n = /* @__PURE__ */ l.jsx(Ws, { children: n })), u) {
    let T = /* @__PURE__ */ l.jsx(l.Fragment, {});
    c ? T = /* @__PURE__ */ l.jsx(ze, { defaultSelectedOption: d, options: c, onSelect: w || (() => {
    }) }) : f && (T = /* @__PURE__ */ l.jsx(
      Sn,
      {
        border: !1,
        defaultSelected: p,
        tabs: f,
        width: "wide",
        onTabChange: w
      }
    ));
    const N = "text-grey-500", Z = /* @__PURE__ */ l.jsx(
      wt,
      {
        buttons: [
          {
            icon: "laptop",
            link: !0,
            size: "sm",
            iconColorClass: S === "desktop" ? "text-black" : N,
            onClick: _ || (() => {
              C("desktop");
            })
          },
          {
            icon: "mobile",
            link: !0,
            size: "sm",
            iconColorClass: S === "mobile" ? "text-black" : N,
            onClick: M || (() => {
              C("mobile");
            })
          }
        ]
      }
    );
    n = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Bh,
        {
          size: "lg",
          toolbarCenter: /* @__PURE__ */ l.jsx(l.Fragment, {}),
          toolbarLeft: T,
          toolbarRight: Z
        }
      ),
      /* @__PURE__ */ l.jsx("div", { className: "flex h-full grow items-center justify-center bg-grey-50 text-sm text-grey-400", children: n })
    ] });
  }
  return g || (y.push({
    key: "cancel-modal",
    label: o,
    onClick: v || (() => {
      k.remove();
    }),
    disabled: m
  }), y.push({
    key: "ok-modal",
    label: s,
    color: i,
    className: "min-w-[80px]",
    onClick: x,
    disabled: m
  })), /* @__PURE__ */ l.jsx(
    kt,
    {
      footer: !1,
      noPadding: !0,
      size: r,
      testId: e,
      title: "",
      children: /* @__PURE__ */ l.jsxs("div", { className: "flex h-full grow", children: [
        /* @__PURE__ */ l.jsx("div", { className: "flex grow flex-col", children: n }),
        a && /* @__PURE__ */ l.jsxs("div", { className: "flex h-full basis-[400px] flex-col border-l border-grey-100", children: [
          b || /* @__PURE__ */ l.jsxs("div", { className: "flex max-h-[74px] items-start justify-between gap-3 px-7 py-5", children: [
            /* @__PURE__ */ l.jsx(Y, { className: "mt-1", level: 4, children: t }),
            g || /* @__PURE__ */ l.jsx(wt, { buttons: y })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: `grow ${h && "p-7 pt-0"} flex flex-col justify-between overflow-y-auto`, children: a })
        ] })
      ] })
    }
  );
}, Uh = ({
  brandSettings: e,
  updateBrandSetting: t,
  themeSettingSections: r,
  updateThemeSetting: a,
  onTabChange: n
}) => {
  const o = [
    {
      id: "brand",
      title: "Brand",
      contents: /* @__PURE__ */ l.jsx($h, { updateSetting: t, values: e })
    },
    ...r.map(({ id: s, title: i, settings: u }) => ({
      id: s,
      title: i,
      contents: /* @__PURE__ */ l.jsx(Vh, { settings: u, updateSetting: a })
    }))
  ];
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx("div", { className: "p-7", children: /* @__PURE__ */ l.jsx(Sn, { tabs: o, onTabChange: n }) }) });
};
function hi(e) {
  const t = new URL(e.url), r = t.pathname.endsWith("/") ? t.pathname : `${t.pathname}/`;
  return `${t.origin}${r}`;
}
const Hh = () => {
  const e = He(), { api: t } = z(se), { settings: r, siteData: a, saveSettings: n } = z(rn), [o, s] = A([]), [i, u] = A(null), [c, d] = A("home");
  V(() => {
    t.customThemeSettings.browse().then((O) => {
      s(O.custom_theme_settings);
    });
  }, [t]), V(() => {
    t.latestPost.browse().then((O) => {
      u(O.posts[0]);
    });
  }, [t]);
  const {
    formState: f,
    saveState: p,
    handleSave: m,
    updateForm: g
  } = Ms({
    initialState: {
      settings: r,
      themeSettings: o
    },
    onSave: async () => {
      if (f.themeSettings.some((O) => O.dirty)) {
        const O = await t.customThemeSettings.edit(f.themeSettings);
        s(O.custom_theme_settings), g(($) => ({ ...$, themeSettings: O.custom_theme_settings }));
      }
      if (f.settings.some((O) => O.dirty)) {
        const O = await n(f.settings.filter(($) => $.dirty));
        g(($) => ({ ...$, settings: O }));
      }
    }
  }), b = (O, $) => {
    g((K) => ({ ...K, settings: K.settings.map((oe) => oe.key === O ? { ...oe, value: $, dirty: !0 } : oe) }));
  }, h = (O) => {
    g(($) => ({ ...$, themeSettings: o.map((K) => K.key === O.key ? { ...O, dirty: !0 } : K) }));
  }, [v, x, w, _, M] = ve(f.settings, ["description", "accent_color", "icon", "logo", "cover_image"]), k = o.reduce((O, $) => {
    const K = $.group === "homepage" || $.group === "post" ? $.group : "site-wide";
    return {
      ...O,
      [K]: (O[K] || []).concat($)
    };
  }, {}), y = Object.entries(k).map(([O, $]) => ({
    id: O,
    settings: $ || [],
    title: O === "site-wide" ? "Site wide" : O === "homepage" ? "Homepage" : "Post"
  }));
  let S = [];
  i && (S = [
    { id: "homepage", title: "Homepage" },
    { id: "post", title: "Post" }
  ]);
  const C = (O) => {
    S.length && d(O);
  }, T = (O) => {
    d(O === "post" && i ? "post" : "home");
  };
  let N = hi(a);
  switch (c) {
    case "homepage":
      N = hi(a);
      break;
    case "post":
      N = i.url;
      break;
  }
  const Z = /* @__PURE__ */ l.jsx(
    Rh,
    {
      settings: {
        description: v,
        accentColor: x,
        icon: w,
        logo: _,
        coverImage: M,
        themeSettings: o
      },
      url: N
    }
  ), re = /* @__PURE__ */ l.jsx(
    Uh,
    {
      brandSettings: { description: v, accentColor: x, icon: w, logo: _, coverImage: M },
      themeSettingSections: y,
      updateBrandSetting: b,
      updateThemeSetting: h,
      onTabChange: T
    }
  );
  return /* @__PURE__ */ l.jsx(
    zh,
    {
      buttonsDisabled: p === "saving",
      defaultTab: "homepage",
      okLabel: p === "saved" ? "Saved" : p === "saving" ? "Saving..." : "Save and close",
      preview: Z,
      previewToolbarTabs: S,
      sidebar: re,
      sidebarPadding: !1,
      size: "full",
      testId: "design-modal",
      title: "Design",
      onCancel: () => {
        p === "unsaved" ? de.show(qt, {
          title: "Are you sure you want to leave this page?",
          prompt: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("p", { children: "Hey there! It looks like you didn‘t save the changes you made." }),
            /* @__PURE__ */ l.jsx("p", { children: "Save before you go!" })
          ] }),
          okLabel: "Leave",
          okColor: "red",
          onOk: (O) => {
            O == null || O.remove(), e.remove();
          },
          cancelLabel: "Stay"
        }) : e.remove();
      },
      onOk: async () => {
        await m(), e.remove();
      },
      onSelectURL: C
    }
  );
}, Gh = de.create(Hh), qh = () => {
  const e = () => {
    de.show(Gh);
  };
  return /* @__PURE__ */ l.jsx(
    Q,
    {
      customButtons: /* @__PURE__ */ l.jsx(ie, { color: "green", label: "Customize", link: !0, onClick: e }),
      description: "Customize the look and feel of your site",
      navid: "branding-and-design",
      testId: "design",
      title: "Branding and design"
    }
  );
};
function ja(e) {
  return e.active;
}
function Zs(e) {
  return e.name === "casper";
}
function Wh(e) {
  return !Zs(e) && !ja(e);
}
function Zh(e) {
  var r;
  let t = ((r = e.package) == null ? void 0 : r.name) || e.name;
  return Zs(e) ? t += " (default)" : t += ` (${e.name})`, ja(e) && (t += " (active)"), t;
}
function Yh(e) {
  var t;
  return ((t = e.package) == null ? void 0 : t.version) || "1.0";
}
const Kh = ({
  theme: e,
  themes: t,
  updateThemes: r
}) => {
  const a = nn(), n = async () => {
    const c = (await a.themes.activate(e.name)).themes[0], d = t.map((f) => f.name === c.name ? c : {
      ...f,
      active: !1
    });
    r(d);
  }, o = async () => {
    await a.themes.delete(e.name);
    const u = t.filter((c) => c.name !== e.name);
    r(u);
  }, s = async () => {
    const { apiRoot: u } = sa();
    Il(`${u}/themes/${e.name}/download`);
  };
  let i = [];
  return Wh(e) && i.push(
    /* @__PURE__ */ l.jsx(
      ie,
      {
        color: "red",
        label: "Delete",
        link: !0,
        onClick: o
      },
      "delete"
    )
  ), ja(e) || i.push(
    /* @__PURE__ */ l.jsx(
      ie,
      {
        className: "ml-2",
        color: "green",
        label: "Activate",
        link: !0,
        onClick: n
      },
      "activate"
    )
  ), i.push(
    /* @__PURE__ */ l.jsx(
      ie,
      {
        className: "ml-2",
        color: "green",
        label: "Download",
        link: !0,
        onClick: s
      },
      "download"
    )
  ), /* @__PURE__ */ l.jsx("div", { className: "flex gap-2", children: i });
}, Jh = ({
  themes: e,
  setThemes: t
}) => /* @__PURE__ */ l.jsx(
  ka,
  {
    title: "Installed themes",
    children: e.map((r) => {
      const a = Zh(r), n = Yh(r);
      return /* @__PURE__ */ l.jsx(
        Ma,
        {
          action: /* @__PURE__ */ l.jsx(
            Kh,
            {
              theme: r,
              themes: e,
              updateThemes: t
            }
          ),
          detail: n,
          id: `theme-${r.name}`,
          title: a
        },
        r.name
      );
    })
  }
), Xh = ({
  themes: e,
  setThemes: t
}) => /* @__PURE__ */ l.jsxs("div", { className: "p-[8vmin] pt-5", children: [
  /* @__PURE__ */ l.jsx(Y, { children: "Installed themes" }),
  /* @__PURE__ */ l.jsx("div", { className: "mt-5", children: /* @__PURE__ */ l.jsx(
    Jh,
    {
      setThemes: t,
      themes: e
    }
  ) })
] }), Qh = ({
  onSelectTheme: e
}) => {
  const { assetRoot: t } = sa(), r = [{
    name: "Casper",
    category: "Blog",
    previewUrl: "https://demo.ghost.io/",
    ref: "default",
    image: "img/themes/Casper.png"
  }, {
    name: "Headline",
    category: "News",
    url: "https://github.com/TryGhost/Headline",
    previewUrl: "https://headline.ghost.io",
    ref: "TryGhost/Headline",
    image: "img/themes/Headline.png"
  }, {
    name: "Edition",
    category: "Newsletter",
    url: "https://github.com/TryGhost/Edition",
    previewUrl: "https://edition.ghost.io/",
    ref: "TryGhost/Edition",
    image: "img/themes/Edition.png"
  }, {
    name: "Solo",
    category: "Blog",
    url: "https://github.com/TryGhost/Solo",
    previewUrl: "https://solo.ghost.io",
    ref: "TryGhost/Solo",
    image: "img/themes/Solo.png"
  }, {
    name: "Taste",
    category: "Blog",
    url: "https://github.com/TryGhost/Taste",
    previewUrl: "https://taste.ghost.io",
    ref: "TryGhost/Taste",
    image: "img/themes/Taste.png"
  }, {
    name: "Episode",
    category: "Podcast",
    url: "https://github.com/TryGhost/Episode",
    previewUrl: "https://episode.ghost.io",
    ref: "TryGhost/Episode",
    image: "img/themes/Episode.png"
  }, {
    name: "Digest",
    category: "Newsletter",
    url: "https://github.com/TryGhost/Digest",
    previewUrl: "https://digest.ghost.io/",
    ref: "TryGhost/Digest",
    image: "img/themes/Digest.png"
  }, {
    name: "Bulletin",
    category: "Newsletter",
    url: "https://github.com/TryGhost/Bulletin",
    previewUrl: "https://bulletin.ghost.io/",
    ref: "TryGhost/Bulletin",
    image: "img/themes/Bulletin.png"
  }, {
    name: "Alto",
    category: "Blog",
    url: "https://github.com/TryGhost/Alto",
    previewUrl: "https://alto.ghost.io",
    ref: "TryGhost/Alto",
    image: "img/themes/Alto.png"
  }, {
    name: "Dope",
    category: "Magazine",
    url: "https://github.com/TryGhost/Dope",
    previewUrl: "https://dope.ghost.io",
    ref: "TryGhost/Dope",
    image: "img/themes/Dope.png"
  }, {
    name: "Wave",
    category: "Podcast",
    url: "https://github.com/TryGhost/Wave",
    previewUrl: "https://wave.ghost.io",
    ref: "TryGhost/Wave",
    image: "img/themes/Wave.png"
  }, {
    name: "Edge",
    category: "Photography",
    url: "https://github.com/TryGhost/Edge",
    previewUrl: "https://edge.ghost.io",
    ref: "TryGhost/Edge",
    image: "img/themes/Edge.png"
  }, {
    name: "Dawn",
    category: "Newsletter",
    url: "https://github.com/TryGhost/Dawn",
    previewUrl: "https://dawn.ghost.io/",
    ref: "TryGhost/Dawn",
    image: "img/themes/Dawn.png"
  }, {
    name: "Ease",
    category: "Documentation",
    url: "https://github.com/TryGhost/Ease",
    previewUrl: "https://ease.ghost.io",
    ref: "TryGhost/Ease",
    image: "img/themes/Ease.png"
  }, {
    name: "Ruby",
    category: "Magazine",
    url: "https://github.com/TryGhost/Ruby",
    previewUrl: "https://ruby.ghost.io",
    ref: "TryGhost/Ruby",
    image: "img/themes/Ruby.png"
  }, {
    name: "London",
    category: "Photography",
    url: "https://github.com/TryGhost/London",
    previewUrl: "https://london.ghost.io",
    ref: "TryGhost/London",
    image: "img/themes/London.png"
  }, {
    name: "Journal",
    category: "Newsletter",
    url: "https://github.com/TryGhost/Journal",
    previewUrl: "https://journal.ghost.io/",
    ref: "TryGhost/Journal",
    image: "img/themes/Journal.png"
  }];
  return /* @__PURE__ */ l.jsxs("div", { className: "h-[calc(100vh-74px-40px)] overflow-y-auto overflow-x-hidden p-[8vmin] pt-5", children: [
    /* @__PURE__ */ l.jsx(Y, { children: "Themes" }),
    /* @__PURE__ */ l.jsx("div", { className: "mt-[6vmin] grid grid-cols-1 gap-[6vmin] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: r.map((a) => /* @__PURE__ */ l.jsxs("div", { className: "flex cursor-pointer flex-col gap-3", onClick: () => {
      e == null || e(a);
    }, children: [
      /* @__PURE__ */ l.jsx("div", { className: "w-full bg-grey-100 shadow-md transition-all duration-500 hover:scale-[1.05]", children: /* @__PURE__ */ l.jsx(
        "img",
        {
          alt: "Headline Theme",
          className: "h-full w-full object-contain",
          src: `${t}/${a.image}`
        }
      ) }),
      /* @__PURE__ */ l.jsxs("div", { className: "mt-3", children: [
        /* @__PURE__ */ l.jsx(Y, { level: 4, children: a.name }),
        /* @__PURE__ */ l.jsx("span", { className: "text-sm text-grey-700", children: a.category })
      ] })
    ] }, a.name)) })
  ] });
}, Ys = ({
  left: e,
  center: t,
  right: r,
  sticky: a = !0,
  containerClassName: n,
  children: o
}) => {
  const s = W(
    "z-50 h-[74px] p-5 px-7",
    !o && "flex items-center justify-between gap-3",
    a && "sticky top-0",
    n
  );
  if (!o) {
    if (e) {
      const i = W(
        "flex flex-auto items-center",
        r && t && "basis-1/3",
        (r && !t || !r && t) && "basis-1/2"
      );
      e = /* @__PURE__ */ l.jsx("div", { className: i, children: e });
    }
    if (t) {
      const i = W(
        "flex flex-auto items-center justify-center",
        e && r && "basis-1/3",
        (e && !r || !e && r) && "basis-1/2"
      );
      t = /* @__PURE__ */ l.jsx("div", { className: i, children: t });
    }
    if (r) {
      const i = W(
        "flex flex-auto items-center justify-end",
        e && t && "basis-1/3",
        (e && !t || !e && t) && "basis-1/2"
      );
      r = /* @__PURE__ */ l.jsx("div", { className: i, children: r });
    }
  }
  return /* @__PURE__ */ l.jsx("div", { className: s, children: o || /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e,
    t,
    r
  ] }) });
}, ev = ({ items: e }) => {
  const t = e.length;
  let r = 0;
  return /* @__PURE__ */ l.jsx("div", { className: "flex items-center gap-2 text-sm", children: e.map((a) => {
    const n = r === t - 1 ? /* @__PURE__ */ l.jsx("span", { className: "font-bold", children: a.label }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: ` text-sm ${a.onClick && "-mx-1 cursor-pointer rounded-sm px-1 py-px hover:bg-grey-100"}`,
          type: "button",
          onClick: a.onClick,
          children: a.label
        },
        `bc-${r}`
      ),
      /* @__PURE__ */ l.jsx("span", { children: "→" })
    ] });
    return r = r + 1, n;
  }) });
}, tv = ({
  selectedTheme: e,
  onBack: t,
  themeInstalled: r,
  installButtonLabel: a,
  onInstall: n
}) => {
  const [o, s] = A("desktop");
  if (!e)
    return null;
  const i = /* @__PURE__ */ l.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l.jsx(
    ev,
    {
      items: [
        { label: "Official themes", onClick: t },
        { label: e.name }
      ]
    }
  ) }), u = /* @__PURE__ */ l.jsxs("div", { className: "flex justify-end gap-8", children: [
    /* @__PURE__ */ l.jsx(
      wt,
      {
        buttons: [
          {
            icon: "laptop",
            iconColorClass: o === "desktop" ? "text-black" : "text-grey-500",
            link: !0,
            size: "sm",
            onClick: () => {
              s("desktop");
            }
          },
          {
            icon: "mobile",
            iconColorClass: o === "mobile" ? "text-black" : "text-grey-500",
            link: !0,
            size: "sm",
            onClick: () => {
              s("mobile");
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      ie,
      {
        color: "green",
        disabled: r,
        label: a,
        onClick: n
      }
    )
  ] });
  return /* @__PURE__ */ l.jsxs("div", { className: "absolute inset-0 z-[100]", children: [
    /* @__PURE__ */ l.jsx(Ys, { containerClassName: "bg-grey-50 z-[100]", left: i, right: u, sticky: !1 }),
    /* @__PURE__ */ l.jsx("div", { className: "flex h-[calc(100%-74px)] grow flex-col items-center justify-center bg-grey-50", children: o === "desktop" ? /* @__PURE__ */ l.jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: e == null ? void 0 : e.previewUrl,
        title: "Theme preview"
      }
    ) : /* @__PURE__ */ l.jsx(Ws, { children: /* @__PURE__ */ l.jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: e == null ? void 0 : e.previewUrl,
        title: "Theme preview"
      }
    ) }) })
  ] });
};
function nv(e) {
  const [t, r] = A(null), [a, n] = A(null), [o, s] = A(!0), i = U(async () => {
    try {
      s(!0);
      const c = await e();
      r(c);
    } catch (c) {
      n(c == null ? void 0 : c.message);
    } finally {
      s(!1);
    }
  }, [e]);
  return V(() => {
    i();
  }, [i]), {
    data: t,
    error: a,
    isLoading: o,
    refetch: async () => {
      s(!0), await i();
    }
  };
}
function rv() {
  const e = nn(), [t, r] = A([]), { data: a, error: n, isLoading: o } = nv(e.themes.browse);
  return V(() => {
    a && r(a.themes);
  }, [a]), {
    themes: t,
    error: n,
    isLoading: o,
    setThemes: r
  };
}
const av = ({
  setCurrentTab: e,
  modal: t,
  themes: r,
  setThemes: a
}) => {
  const n = nn(), o = /* @__PURE__ */ l.jsx(
    Sn,
    {
      border: !1,
      tabs: [
        { id: "official", title: "Official themes" },
        { id: "installed", title: "Installed" }
      ],
      onTabChange: (i) => {
        e(i);
      }
    }
  ), s = /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ l.jsx(As, { id: "theme-uplaod", onUpload: async (i) => {
      const c = (await n.themes.upload({ file: i })).themes[0];
      a([...r, c]), Ne({
        message: `Theme uploaded - ${c.name}`
      });
    }, children: "Upload theme" }),
    /* @__PURE__ */ l.jsx(
      ie,
      {
        className: "min-w-[75px]",
        color: "black",
        label: "OK",
        onClick: () => {
          t.remove();
        }
      }
    )
  ] });
  return /* @__PURE__ */ l.jsx(Ys, { containerClassName: "bg-white", left: o, right: s });
}, iv = ({
  currentTab: e,
  onSelectTheme: t,
  themes: r,
  setThemes: a
}) => {
  switch (e) {
    case "official":
      return /* @__PURE__ */ l.jsx(Qh, { onSelectTheme: t });
    case "installed":
      return /* @__PURE__ */ l.jsx(
        Xh,
        {
          setThemes: a,
          themes: r
        }
      );
  }
  return null;
}, sv = de.create(() => {
  const [e, t] = A("official"), [r, a] = A(null), [n, o] = A("desktop"), s = He(), { themes: i, setThemes: u } = rv(), c = nn(), d = (m) => {
    a(m);
  };
  let f, p;
  return r && (f = i.find((m) => m.name.toLowerCase() === r.name.toLowerCase()), p = async () => {
    const g = (await c.themes.install(r.ref)).themes[0];
    u([
      ...i.map((b) => ({ ...b, active: !1 })),
      g
    ]), Ne({
      message: `Theme installed - ${g.name}`
    }), t("installed");
  }), /* @__PURE__ */ l.jsx(
    kt,
    {
      cancelLabel: "",
      footer: !1,
      noPadding: !0,
      scrolling: e !== "official",
      size: "full",
      title: "",
      children: /* @__PURE__ */ l.jsx("div", { className: "flex h-full justify-between", children: /* @__PURE__ */ l.jsxs("div", { className: "grow", children: [
        r && /* @__PURE__ */ l.jsx(
          tv,
          {
            installButtonLabel: f != null && f.active ? "Activated" : f ? "Installed" : `Install ${r == null ? void 0 : r.name}`,
            selectedTheme: r,
            themeInstalled: !!f,
            onBack: () => {
              a(null);
            },
            onInstall: p
          }
        ),
        /* @__PURE__ */ l.jsx(
          av,
          {
            modal: s,
            previewMode: n,
            selectedTheme: r,
            setCurrentTab: t,
            setPreviewMode: o,
            setSelectedTheme: a,
            setThemes: u,
            themes: i
          }
        ),
        /* @__PURE__ */ l.jsx(
          iv,
          {
            currentTab: e,
            setThemes: u,
            themes: i,
            onSelectTheme: d
          }
        )
      ] }) })
    }
  );
}), ov = () => /* @__PURE__ */ l.jsx(
  Q,
  {
    customButtons: /* @__PURE__ */ l.jsx(ie, { color: "green", label: "Manage themes", link: !0, onClick: () => {
      de.show(sv);
    } }),
    description: "Change or upload themes",
    navid: "theme",
    testId: "theme",
    title: "Theme"
  }
), lv = () => /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(yn, { title: "Site", children: [
  /* @__PURE__ */ l.jsx(ov, {}),
  /* @__PURE__ */ l.jsx(qh, {})
] }) }), uv = () => {
  const { settings: e } = z(rn) || {};
  return e ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Ih, {}),
    /* @__PURE__ */ l.jsx(lv, {}),
    /* @__PURE__ */ l.jsx(Th, {}),
    /* @__PURE__ */ l.jsx(Zf, {})
  ] }) : /* @__PURE__ */ l.jsx("div", { className: "flex h-full flex-col items-center justify-center", children: /* @__PURE__ */ l.jsx("div", { className: "text-center text-2xl font-bold", children: "Loading..." }) });
}, q = ({
  title: e,
  navid: t = "",
  onClick: r = () => {
  }
}) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx("button", { className: "block px-0 py-1 text-sm", name: t, type: "button", onClick: r, children: e }) }), pt = ({ title: e, children: t }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  e && /* @__PURE__ */ l.jsx(js, { title: e }),
  t && /* @__PURE__ */ l.jsx("ul", { className: "mb-10 mt-[-8px]", children: t })
] }), cv = () => {
  const e = (t) => {
    const r = document.getElementById(t.currentTarget.name);
    r && r.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "hidden md:!visible md:!block md:h-[calc(100vh-5vmin-84px)] md:w-[300px] md:overflow-y-scroll md:pt-[32px]", children: [
    /* @__PURE__ */ l.jsxs(pt, { title: "General", children: [
      /* @__PURE__ */ l.jsx(q, { navid: "title-and-description", title: "Title and description", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "timezone", title: "Timezone", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "publication-language", title: "Publication language", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "metadata", title: "Meta data", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "twitter", title: "Twitter card", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "facebook", title: "Facebook card", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "social-accounts", title: "Social accounts", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "locksite", title: "Make this site private", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "users", title: "Users and permissions", onClick: e })
    ] }),
    /* @__PURE__ */ l.jsxs(pt, { title: "Site", children: [
      /* @__PURE__ */ l.jsx(q, { navid: "theme", title: "Theme", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "branding-and-design", title: "Branding and design", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "navigation", title: "Navigation", onClick: e })
    ] }),
    /* @__PURE__ */ l.jsxs(pt, { title: "Membership", children: [
      /* @__PURE__ */ l.jsx(q, { navid: "portal", title: "Portal", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "access", title: "Access", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "tiers", title: "Tiers", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "analytics", title: "Analytics", onClick: e })
    ] }),
    /* @__PURE__ */ l.jsxs(pt, { title: "Email newsletters", children: [
      /* @__PURE__ */ l.jsx(q, { navid: "newsletter-sending", title: "Newsletter sending", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "newsletters", title: "Newsletters", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "default-recipients", title: "Default recipients", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "mailgun", title: "Mailgun settings", onClick: e })
    ] }),
    /* @__PURE__ */ l.jsxs(pt, { title: "Advanced", children: [
      /* @__PURE__ */ l.jsx(q, { navid: "integrations", title: "Integrations", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "code-injection", title: "Code injection", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "labs", title: "Labs", onClick: e }),
      /* @__PURE__ */ l.jsx(q, { navid: "history", title: "History", onClick: e })
    ] })
  ] });
};
function pv({ ghostVersion: e }) {
  return /* @__PURE__ */ l.jsx(Pl, { ghostVersion: e, children: /* @__PURE__ */ l.jsx(Ll, { children: /* @__PURE__ */ l.jsxs("div", { className: "admin-x-settings", children: [
    /* @__PURE__ */ l.jsx(fh, {}),
    /* @__PURE__ */ l.jsxs(de.Provider, { children: [
      /* @__PURE__ */ l.jsx("div", { className: "fixed left-6 top-4", children: /* @__PURE__ */ l.jsx(ie, { label: "← Done", link: !0, onClick: () => window.history.back() }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "mx-auto flex max-w-[1080px] flex-col px-[5vmin] py-[12vmin] md:flex-row md:items-start md:gap-x-10 md:py-[8vmin]", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative min-w-[240px] grow-0 md:fixed md:top-[8vmin] md:basis-[240px]", children: [
          /* @__PURE__ */ l.jsx("div", { className: "h-[84px]", children: /* @__PURE__ */ l.jsx(Y, { children: "Settings" }) }),
          /* @__PURE__ */ l.jsx("div", { className: "relative mt-[-32px] w-[240px] overflow-x-hidden after:absolute after:inset-x-0 after:top-0 after:block after:h-[40px] after:bg-gradient-to-b after:from-white after:to-transparent after:content-['']", children: /* @__PURE__ */ l.jsx(cv, {}) })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "flex-auto pt-[3vmin] md:ml-[280px] md:pt-[84px]", children: /* @__PURE__ */ l.jsx(uv, {}) })
      ] })
    ] })
  ] }) }) });
}
export {
  pv as AdminXApp
};
//# sourceMappingURL=admin-x-settings.js.map
