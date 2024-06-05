"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [103],
  {
    72212: (e, t, o) => {
      o.d(t, { A: () => n });
      var r = o(67784);
      const n = (0, o(34535).Ay)(r.A)((e) => {
        let { theme: t } = e;
        return {
          marginY: "5px",
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            fontSize: "16px",
            border: "2px solid #858585",
          },
          "& .MuiInputBase-input": { margin: "0px" },
          "& .MuiFormLabel-root": {
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
            padding: "2px 10px",
            borderRadius: "25px",
          },
        };
      });
    },
    97069: (e, t, o) => {
      o.d(t, { A: () => i });
      var r = o(24858),
        n = o(70579);
      function i(e) {
        let { children: t, onSubmit: o, methods: i } = e;
        return (0, n.jsx)(r.Op, {
          ...i,
          children: (0, n.jsx)("form", {
            onSubmit: o,
            style: { height: "100%" },
            children: t,
          }),
        });
      }
    },
    4350: (e, t, o) => {
      o.d(t, { B: () => A });
      var r = o(24858),
        n = o(81673),
        i = o(65043),
        a = o(9634),
        s = o(96446),
        c = o(70579);
      const d = (0, i.forwardRef)((e, t) => {
        let { disabledEffect: o = !1, effect: r = "blur", sx: n, ...i } = e;
        const d = (0, c.jsx)(s.A, {
          component: a.LazyLoadImage,
          wrapperClassName: "wrapper",
          effect: o ? void 0 : r,
          placeholderSrc: o ? "./assets/transparent.png" : "./assets/placeholder.svg",
          sx: { width: 1, height: 1, objectFit: "cover" },
          ...i,
        });
        return (0, c.jsx)(s.A, {
          ref: t,
          component: "span",
          sx: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
            "& .wrapper": { width: 1, height: 1, backgroundSize: "cover !important" },
            ...n,
          },
          children: d,
        });
      });
      function l(e) {
        let { file: t } = e;
        if (!t) return null;
        const o = "string" === typeof t ? t : t.preview;
        return (0, c.jsx)(d, {
          alt: "avatar",
          src: o,
          sx: {
            zIndex: 8,
            overflow: "hidden",
            borderRadius: "50%",
            position: "absolute",
            width: "calc(100% - 16px)",
            height: "calc(100% - 16px)",
          },
        });
      }
      var u = o(19337),
        h = o(85865),
        g = o(34535),
        p = o(90310),
        x = o(83340);
      const m = (0, g.Ay)("div")((e) => {
          let { theme: t } = e;
          return {
            width: 144,
            height: 144,
            margin: "auto",
            display: "flex",
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "50%",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            border: "1px dashed ".concat((0, p.X4)(t.palette.grey[500], 0.32)),
          };
        }),
        f = (0, g.Ay)("div")((e) => {
          let { theme: t } = e;
          return {
            zIndex: 7,
            display: "flex",
            borderRadius: "50%",
            position: "absolute",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "calc(100% - 16px)",
            height: "calc(100% - 16px)",
            color: t.palette.text.disabled,
            backgroundColor: t.palette.background.neutral,
            transition: t.transitions.create("opacity", {
              easing: t.transitions.easing.easeInOut,
              duration: t.transitions.duration.shorter,
            }),
          };
        });
      function v(e) {
        let { error: t, file: o, disabled: r, helperText: n, sx: i, ...a } = e;
        const {
            getRootProps: s,
            getInputProps: d,
            isDragActive: g,
            isDragReject: v,
          } = (0, u.VB)({ multiple: !1, disabled: r, ...a }),
          A = !!o,
          y = v || !!t;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(m, {
              ...s(),
              sx: {
                ...(g && { opacity: 0.72 }),
                ...(y && {
                  borderColor: "error.light",
                  ...(A && { bgcolor: "error.lighter" }),
                }),
                ...(r && { opacity: 0.48, pointerEvents: "none" }),
                ...(A && { "&:hover": { "& .placeholder": { opacity: 1 } } }),
                ...i,
              },
              children: [
                (0, c.jsx)("input", { ...d() }),
                A && (0, c.jsx)(l, { file: o }),
                (0, c.jsxs)(f, {
                  className: "placeholder",
                  sx: {
                    border: "2px solid #858585",
                    "&:hover": { opacity: 0.72 },
                    ...(A && {
                      zIndex: 9,
                      opacity: 0,
                      color: "common.white",
                      bgcolor: (e) => (0, p.X4)(e.palette.grey[900], 0.64),
                    }),
                    ...(y && { color: "error.main", bgcolor: "error.lighter" }),
                  },
                  children: [
                    (0, c.jsx)(x._, {}),
                    (0, c.jsx)(h.A, {
                      variant: "caption",
                      children: o ? "Update photo" : "Upload photo",
                    }),
                  ],
                }),
              ],
            }),
            n && n,
          ],
        });
      }
      function A(e) {
        let { name: t, ...o } = e;
        const { control: i } = (0, r.xW)();
        return (0, c.jsx)(r.xI, {
          name: t,
          control: i,
          render: (e) => {
            let {
              field: r,
              fieldState: { error: i },
            } = e;
            return (0, c.jsxs)("div", {
              children: [
                (0, c.jsx)(v, {
                  name: t,
                  accept: { "image/*": [] },
                  error: !!i,
                  file: r.value,
                  ...o,
                }),
                !!i &&
                  (0, c.jsx)(n.A, {
                    error: !0,
                    sx: { px: 2, textAlign: "center" },
                    children: i.message,
                  }),
              ],
            });
          },
        });
      }
    },
    18594: (e, t, o) => {
      o.d(t, { o3: () => s, Ay: () => r.A });
      o(4350);
      var r = o(97069),
        n = o(24858),
        i = o(72212),
        a = o(70579);
      function s(e) {
        let { name: t, helperText: o, ...r } = e;
        const { control: s } = (0, n.xW)();
        return (0, a.jsx)(n.xI, {
          name: t,
          control: s,
          render: (e) => {
            let {
              field: t,
              fieldState: { error: n },
            } = e;
            return (0, a.jsx)(i.A, {
              ...t,
              fullWidth: !0,
              value: "number" === typeof t.value && 0 === t.value ? "" : t.value,
              error: !!n,
              helperText: n ? (null === n || void 0 === n ? void 0 : n.message) : o,
              ...r,
            });
          },
        });
      }
    },
    79103: (e, t, o) => {
      o.r(t), o.d(t, { default: () => y });
      var r = o(65043),
        n = o(96446),
        i = o(85865),
        a = o(66176),
        s = o(18594),
        c = o(67254),
        d = o(88911),
        l = o(72812),
        u = o(83003),
        h = o(24858),
        g = o(53563),
        p = o(18403),
        x = o(80899),
        m = o(72212),
        f = o(70579);
      function v(e) {
        let { keyName: t = "", inputs: o = [], ...n } = e;
        const i = (0, r.useRef)(null),
          { control: a } = (0, h.xW)();
        return (0, f.jsx)(d.A, {
          direction: "row",
          spacing: 2,
          justifyContent: "center",
          ref: i,
          children: o.map((e, o) =>
            (0, f.jsx)(
              h.xI,
              {
                name: "".concat(t).concat(o + 1),
                control: a,
                render: (e) => {
                  let {
                    field: r,
                    fieldState: { error: i },
                  } = e;
                  return (0, f.jsx)(m.A, {
                    ...r,
                    error: !!i,
                    autoFocus: 0 === o,
                    placeholder: "-",
                    onChange: (e) => {
                      ((e, o) => {
                        const { maxLength: r, value: n, name: i } = e.target,
                          a = i.replace(t, ""),
                          s = Number(a),
                          c = document.querySelector(
                            "input[name=".concat(t).concat(s + 1, "]")
                          );
                        n.length > r && (e.target.value = n[0]),
                          n.length >= r && s < 6 && null !== c && c.focus(),
                          o(e);
                      })(e, r.onChange);
                    },
                    onFocus: (e) => e.currentTarget.select(),
                    InputProps: {
                      sx: {
                        width: { xs: 36, sm: 56 },
                        height: { xs: 36, sm: 56 },
                        "& input": { p: 0, textAlign: "center" },
                      },
                    },
                    inputProps: { maxLength: 1, type: "number" },
                    ...n,
                  });
                },
              },
              e
            )
          ),
        });
      }
      const A = () => {
          const { isLoading: e } = (0, u.d4)((e) => e.auth),
            t = (0, u.wA)(),
            { email: o } = (0, u.d4)((e) => e.auth),
            r = x
              .Ik()
              .shape({
                code1: x.Yj().required("Code is required"),
                code2: x.Yj().required("Code is required"),
                code3: x.Yj().required("Code is required"),
                code4: x.Yj().required("Code is required"),
                code5: x.Yj().required("Code is required"),
                code6: x.Yj().required("Code is required"),
              }),
            n = (0, h.mN)({
              mode: "onChange",
              resolver: (0, p.t)(r),
              defaultValues: {
                code1: "",
                code2: "",
                code3: "",
                code4: "",
                code5: "",
                code6: "",
              },
            }),
            {
              reset: a,
              handleSubmit: m,
              formState: { errors: A },
            } = n;
          return (0, f.jsxs)(s.Ay, {
            methods: n,
            onSubmit: m(async (e) => {
              try {
                t(
                  (0, g.EP)({
                    email: o,
                    otp: ""
                      .concat(e.code1)
                      .concat(e.code2)
                      .concat(e.code3)
                      .concat(e.code4)
                      .concat(e.code5)
                      .concat(e.code6),
                  })
                ),
                  a();
              } catch (r) {
                console.error(r);
              }
            }),
            children: [
              !!A.afterSubmit &&
                (0, f.jsx)(c.A, { severity: "error", children: A.afterSubmit.message }),
              (0, f.jsx)(d.A, {
                direction: "row",
                spacing: 0.5,
                children: (0, f.jsx)(i.A, {
                  variant: "body2",
                  color: "#fff",
                  children: "Input your code OTP",
                }),
              }),
              (0, f.jsx)(d.A, {
                spacing: 2,
                sx: { marginY: 2 },
                children: (0, f.jsx)(v, {
                  keyName: "code",
                  inputs: ["code1", "code2", "code3", "code4", "code5", "code6"],
                }),
              }),
              (0, f.jsx)(d.A, {
                alignItems: "center",
                sx: { mb: 2 },
                children: (0, f.jsx)(i.A, {
                  component: "div",
                  sx: {
                    color: "#fff",
                    typography: "caption",
                    textAlign: "center",
                    fontSize: "13px",
                  },
                  children: "Check your email from inbox or spam to input code!",
                }),
              }),
              (0, f.jsx)(l.A, {
                fullWidth: !0,
                color: "inherit",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: e,
                sx: {
                  bgcolor: "#f7bd00",
                  color: "#252525",
                  "&:hover": { bgcolor: "#CECECF", color: "#252525" },
                },
                children: "SUBMIT",
              }),
            ],
          });
        },
        y = () =>
          (0, f.jsx)(n.A, {
            sx: {
              flexGrow: 1,
              height: "90dvh",
              width: "100%",
              display: { xs: "initial", md: "flex" },
            },
            children: (0, f.jsx)(n.A, {
              sx: {
                width: "100%",
                mt: { xs: "15%", md: "inherit" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: (0, f.jsx)(a.P.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, amount: 0.5 },
                transition: { delay: 0.2, duration: 0.5 },
                variants: {
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                },
                children: (0, f.jsxs)(n.A, {
                  sx: {
                    width: "400px",
                    padding: "20px",
                    backdropFilter: "brightness(60%)",
                    borderRadius: "25px",
                  },
                  children: [
                    (0, f.jsx)(i.A, {
                      fontWeight: "900",
                      variant: "h4",
                      sx: { mb: "1.5rem", color: "#fff" },
                      children: "Verify your Account",
                    }),
                    (0, f.jsx)(A, {}),
                  ],
                }),
              }),
            }),
          });
    },
    72812: (e, t, o) => {
      o.d(t, { A: () => j });
      var r = o(98587),
        n = o(58168),
        i = o(65043),
        a = o(6803),
        s = o(45879),
        c = o(68606),
        d = o(34535),
        l = o(72876),
        u = o(78977),
        h = o(74221),
        g = o(81637),
        p = o(22018),
        x = o(32400);
      function m(e) {
        return (0, x.Ay)("MuiLoadingButton", e);
      }
      const f = (0, o(57056).A)("MuiLoadingButton", [
        "root",
        "loading",
        "loadingIndicator",
        "loadingIndicatorCenter",
        "loadingIndicatorStart",
        "loadingIndicatorEnd",
        "endIconLoadingEnd",
        "startIconLoadingStart",
      ]);
      var v = o(70579);
      const A = [
          "children",
          "disabled",
          "id",
          "loading",
          "loadingIndicator",
          "loadingPosition",
          "variant",
        ],
        y = (0, d.Ay)(u.A, {
          shouldForwardProp: (e) =>
            ((e) =>
              "ownerState" !== e &&
              "theme" !== e &&
              "sx" !== e &&
              "as" !== e &&
              "classes" !== e)(e) || "classes" === e,
          name: "MuiLoadingButton",
          slot: "Root",
          overridesResolver: (e, t) => [
            t.root,
            t.startIconLoadingStart && {
              ["& .".concat(f.startIconLoadingStart)]: t.startIconLoadingStart,
            },
            t.endIconLoadingEnd && {
              ["& .".concat(f.endIconLoadingEnd)]: t.endIconLoadingEnd,
            },
          ],
        })((e) => {
          let { ownerState: t, theme: o } = e;
          return (0, n.A)(
            {
              ["& ."
                .concat(f.startIconLoadingStart, ", & .")
                .concat(f.endIconLoadingEnd)]: {
                transition: o.transitions.create(["opacity"], {
                  duration: o.transitions.duration.short,
                }),
                opacity: 0,
              },
            },
            "center" === t.loadingPosition && {
              transition: o.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: o.transitions.duration.short }
              ),
              ["&.".concat(f.loading)]: { color: "transparent" },
            },
            "start" === t.loadingPosition &&
              t.fullWidth && {
                ["& ."
                  .concat(f.startIconLoadingStart, ", & .")
                  .concat(f.endIconLoadingEnd)]: {
                  transition: o.transitions.create(["opacity"], {
                    duration: o.transitions.duration.short,
                  }),
                  opacity: 0,
                  marginRight: -8,
                },
              },
            "end" === t.loadingPosition &&
              t.fullWidth && {
                ["& ."
                  .concat(f.startIconLoadingStart, ", & .")
                  .concat(f.endIconLoadingEnd)]: {
                  transition: o.transitions.create(["opacity"], {
                    duration: o.transitions.duration.short,
                  }),
                  opacity: 0,
                  marginLeft: -8,
                },
              }
          );
        }),
        b = (0, d.Ay)("span", {
          name: "MuiLoadingButton",
          slot: "LoadingIndicator",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [
              t.loadingIndicator,
              t["loadingIndicator".concat((0, a.A)(o.loadingPosition))],
            ];
          },
        })((e) => {
          let { theme: t, ownerState: o } = e;
          return (0, n.A)(
            { position: "absolute", visibility: "visible", display: "flex" },
            "start" === o.loadingPosition &&
              ("outlined" === o.variant || "contained" === o.variant) && {
                left: "small" === o.size ? 10 : 14,
              },
            "start" === o.loadingPosition && "text" === o.variant && { left: 6 },
            "center" === o.loadingPosition && {
              left: "50%",
              transform: "translate(-50%)",
              color: (t.vars || t).palette.action.disabled,
            },
            "end" === o.loadingPosition &&
              ("outlined" === o.variant || "contained" === o.variant) && {
                right: "small" === o.size ? 10 : 14,
              },
            "end" === o.loadingPosition && "text" === o.variant && { right: 6 },
            "start" === o.loadingPosition &&
              o.fullWidth && { position: "relative", left: -10 },
            "end" === o.loadingPosition &&
              o.fullWidth && { position: "relative", right: -10 }
          );
        }),
        j = i.forwardRef(function (e, t) {
          const o = i.useContext(h.A),
            d = (0, p.A)(o, e),
            u = (0, l.A)({ props: d, name: "MuiLoadingButton" }),
            {
              children: x,
              disabled: f = !1,
              id: j,
              loading: I = !1,
              loadingIndicator: w,
              loadingPosition: S = "center",
              variant: k = "text",
            } = u,
            C = (0, r.A)(u, A),
            P = (0, s.A)(j),
            L =
              null != w
                ? w
                : (0, v.jsx)(g.A, { "aria-labelledby": P, color: "inherit", size: 16 }),
            R = (0, n.A)({}, u, {
              disabled: f,
              loading: I,
              loadingIndicator: L,
              loadingPosition: S,
              variant: k,
            }),
            M = ((e) => {
              const { loading: t, loadingPosition: o, classes: r } = e,
                i = {
                  root: ["root", t && "loading"],
                  startIcon: [t && "startIconLoading".concat((0, a.A)(o))],
                  endIcon: [t && "endIconLoading".concat((0, a.A)(o))],
                  loadingIndicator: [
                    "loadingIndicator",
                    t && "loadingIndicator".concat((0, a.A)(o)),
                  ],
                },
                s = (0, c.A)(i, m, r);
              return (0, n.A)({}, r, s);
            })(R),
            z = I
              ? (0, v.jsx)(b, {
                  className: M.loadingIndicator,
                  ownerState: R,
                  children: L,
                })
              : null;
          return (0,
          v.jsxs)(y, (0, n.A)({ disabled: f || I, id: P, ref: t }, C, { variant: k, classes: M, ownerState: R, children: ["end" === R.loadingPosition ? x : z, "end" === R.loadingPosition ? z : x] }));
        });
    },
    81637: (e, t, o) => {
      o.d(t, { A: () => z });
      var r = o(57528),
        n = o(98587),
        i = o(58168),
        a = o(65043),
        s = o(58387),
        c = o(68606),
        d = o(83290),
        l = o(6803),
        u = o(72876),
        h = o(34535),
        g = o(57056),
        p = o(32400);
      function x(e) {
        return (0, p.Ay)("MuiCircularProgress", e);
      }
      (0, g.A)("MuiCircularProgress", [
        "root",
        "determinate",
        "indeterminate",
        "colorPrimary",
        "colorSecondary",
        "svg",
        "circle",
        "circleDeterminate",
        "circleIndeterminate",
        "circleDisableShrink",
      ]);
      var m,
        f,
        v,
        A,
        y = o(70579);
      const b = [
        "className",
        "color",
        "disableShrink",
        "size",
        "style",
        "thickness",
        "value",
        "variant",
      ];
      let j, I, w, S;
      const k = 44,
        C = (0, d.i7)(
          j ||
            (j =
              m ||
              (m = (0, r.A)([
                "\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n",
              ])))
        ),
        P = (0, d.i7)(
          I ||
            (I =
              f ||
              (f = (0, r.A)([
                "\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n",
              ])))
        ),
        L = (0, h.Ay)("span", {
          name: "MuiCircularProgress",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [t.root, t[o.variant], t["color".concat((0, l.A)(o.color))]];
          },
        })(
          (e) => {
            let { ownerState: t, theme: o } = e;
            return (0, i.A)(
              { display: "inline-block" },
              "determinate" === t.variant && {
                transition: o.transitions.create("transform"),
              },
              "inherit" !== t.color && { color: (o.vars || o).palette[t.color].main }
            );
          },
          (e) => {
            let { ownerState: t } = e;
            return (
              "indeterminate" === t.variant &&
              (0, d.AH)(
                w ||
                  (w =
                    v ||
                    (v = (0, r.A)([
                      "\n      animation: ",
                      " 1.4s linear infinite;\n    ",
                    ]))),
                C
              )
            );
          }
        ),
        R = (0, h.Ay)("svg", {
          name: "MuiCircularProgress",
          slot: "Svg",
          overridesResolver: (e, t) => t.svg,
        })({ display: "block" }),
        M = (0, h.Ay)("circle", {
          name: "MuiCircularProgress",
          slot: "Circle",
          overridesResolver: (e, t) => {
            const { ownerState: o } = e;
            return [
              t.circle,
              t["circle".concat((0, l.A)(o.variant))],
              o.disableShrink && t.circleDisableShrink,
            ];
          },
        })(
          (e) => {
            let { ownerState: t, theme: o } = e;
            return (0, i.A)(
              { stroke: "currentColor" },
              "determinate" === t.variant && {
                transition: o.transitions.create("stroke-dashoffset"),
              },
              "indeterminate" === t.variant && {
                strokeDasharray: "80px, 200px",
                strokeDashoffset: 0,
              }
            );
          },
          (e) => {
            let { ownerState: t } = e;
            return (
              "indeterminate" === t.variant &&
              !t.disableShrink &&
              (0, d.AH)(
                S ||
                  (S =
                    A ||
                    (A = (0, r.A)([
                      "\n      animation: ",
                      " 1.4s ease-in-out infinite;\n    ",
                    ]))),
                P
              )
            );
          }
        ),
        z = a.forwardRef(function (e, t) {
          const o = (0, u.A)({ props: e, name: "MuiCircularProgress" }),
            {
              className: r,
              color: a = "primary",
              disableShrink: d = !1,
              size: h = 40,
              style: g,
              thickness: p = 3.6,
              value: m = 0,
              variant: f = "indeterminate",
            } = o,
            v = (0, n.A)(o, b),
            A = (0, i.A)({}, o, {
              color: a,
              disableShrink: d,
              size: h,
              thickness: p,
              value: m,
              variant: f,
            }),
            j = ((e) => {
              const { classes: t, variant: o, color: r, disableShrink: n } = e,
                i = {
                  root: ["root", o, "color".concat((0, l.A)(r))],
                  svg: ["svg"],
                  circle: [
                    "circle",
                    "circle".concat((0, l.A)(o)),
                    n && "circleDisableShrink",
                  ],
                };
              return (0, c.A)(i, x, t);
            })(A),
            I = {},
            w = {},
            S = {};
          if ("determinate" === f) {
            const e = 2 * Math.PI * ((k - p) / 2);
            (I.strokeDasharray = e.toFixed(3)),
              (S["aria-valuenow"] = Math.round(m)),
              (I.strokeDashoffset = "".concat((((100 - m) / 100) * e).toFixed(3), "px")),
              (w.transform = "rotate(-90deg)");
          }
          return (0,
          y.jsx)(L, (0, i.A)({ className: (0, s.A)(j.root, r), style: (0, i.A)({ width: h, height: h }, w, g), ownerState: A, ref: t, role: "progressbar" }, S, v, { children: (0, y.jsx)(R, { className: j.svg, ownerState: A, viewBox: "".concat(22, " ").concat(22, " ").concat(k, " ").concat(k), children: (0, y.jsx)(M, { className: j.circle, style: I, ownerState: A, cx: k, cy: k, r: (k - p) / 2, fill: "none", strokeWidth: p }) }) }));
        });
    },
  },
]);
//# sourceMappingURL=103.a7b3cf81.chunk.js.map
