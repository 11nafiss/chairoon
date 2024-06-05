"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [779],
  {
    18986: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(96446);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return { flexGrow: 1, height: "90dvh", width: "100%" };
      });
    },
    88780: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(19252);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };
      });
    },
    87476: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(39336);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return { marginBottom: "20px", width: "100%", border: "1px solid #f7bd00" };
      });
    },
    29539: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(67784);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          height: "35px",
          "& .MuiInputBase-root": {
            padding: "2px",
            backgroundColor: "white",
            fontSize: "14px",
            border: "2px solid #858585",
          },
          "& .MuiInputBase-input": { padding: "5px" },
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
    83535: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(72221);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          width: "100%",
          height: "35px",
          "& .MuiSelect-select": {
            padding: "3px",
            fontSize: "14px",
            border: "2px solid #858585",
          },
          "& .MuiInputBase-input": { padding: "6px" },
        };
      });
    },
    55174: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(96446);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        };
      });
    },
    16722: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(51292);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return { fontSize: "12px", fontWeight: 600 };
      });
    },
    56861: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(96446);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return { overflowY: "scroll", height: "100%", width: "100%" };
      });
    },
    62385: (e, n, t) => {
      t.d(n, { A: () => o });
      var r = t(34535),
        i = t(24056);
      const o = (0, r.Ay)(i.A)((e) => {
        let { theme: n } = e;
        return {
          alignItems: "start",
          fontSize: "16px",
          borderLeft: "2px solid black",
          borderRadius: "0",
          paddingLeft: "15px",
          marginBottom: "5px",
          "&:hover": { color: "#f7bd00" },
        };
      });
    },
    83464: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(78977);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          width: "100%",
          fontSize: "14px",
          gap: "3px",
          height: "30px",
          padding: "0px",
          display: "flex",
          alignItems: "center",
        };
      });
    },
    23613: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(78977);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          width: "100%",
          backgroundColor: "#f7bd00",
          color: "#252525",
          "&:hover": { backgroundColor: "#d3d4de" },
          gridColumn: "span 4",
          height: "40px",
        };
      });
    },
    97069: (e, n, t) => {
      t.d(n, { A: () => o });
      var r = t(24858),
        i = t(70579);
      function o(e) {
        let { children: n, onSubmit: t, methods: o } = e;
        return (0, i.jsx)(r.Op, {
          ...o,
          children: (0, i.jsx)("form", {
            onSubmit: t,
            style: { height: "100%" },
            children: n,
          }),
        });
      }
    },
    62076: (e, n, t) => {
      t.d(n, { A: () => a });
      var r = t(24858),
        i = t(29539),
        o = t(70579);
      function a(e) {
        let { name: n, helperText: t, ...a } = e;
        const { control: s } = (0, r.xW)();
        return (0, o.jsx)(r.xI, {
          name: n,
          control: s,
          render: (e) => {
            let {
              field: n,
              fieldState: { error: r },
            } = e;
            return (0, o.jsx)(i.A, {
              ...n,
              fullWidth: !0,
              value: "number" === typeof n.value && 0 === n.value ? "" : n.value,
              error: !!r,
              helperText: r ? (null === r || void 0 === r ? void 0 : r.message) : t,
              ...a,
            });
          },
        });
      }
    },
    4350: (e, n, t) => {
      t.d(n, { B: () => f });
      var r = t(24858),
        i = t(81673),
        o = t(65043),
        a = t(9634),
        s = t(96446),
        l = t(70579);
      const d = (0, o.forwardRef)((e, n) => {
        let { disabledEffect: t = !1, effect: r = "blur", sx: i, ...o } = e;
        const d = (0, l.jsx)(s.A, {
          component: a.LazyLoadImage,
          wrapperClassName: "wrapper",
          effect: t ? void 0 : r,
          placeholderSrc: t ? "./assets/transparent.png" : "./assets/placeholder.svg",
          sx: { width: 1, height: 1, objectFit: "cover" },
          ...o,
        });
        return (0, l.jsx)(s.A, {
          ref: n,
          component: "span",
          sx: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
            "& .wrapper": { width: 1, height: 1, backgroundSize: "cover !important" },
            ...i,
          },
          children: d,
        });
      });
      function c(e) {
        let { file: n } = e;
        if (!n) return null;
        const t = "string" === typeof n ? n : n.preview;
        return (0, l.jsx)(d, {
          alt: "avatar",
          src: t,
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
      var x = t(19337),
        h = t(85865),
        u = t(34535),
        p = t(90310),
        m = t(83340);
      const A = (0, u.Ay)("div")((e) => {
          let { theme: n } = e;
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
            border: "1px dashed ".concat((0, p.X4)(n.palette.grey[500], 0.32)),
          };
        }),
        j = (0, u.Ay)("div")((e) => {
          let { theme: n } = e;
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
            color: n.palette.text.disabled,
            backgroundColor: n.palette.background.neutral,
            transition: n.transitions.create("opacity", {
              easing: n.transitions.easing.easeInOut,
              duration: n.transitions.duration.shorter,
            }),
          };
        });
      function g(e) {
        let { error: n, file: t, disabled: r, helperText: i, sx: o, ...a } = e;
        const {
            getRootProps: s,
            getInputProps: d,
            isDragActive: u,
            isDragReject: g,
          } = (0, x.VB)({ multiple: !1, disabled: r, ...a }),
          f = !!t,
          v = g || !!n;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(A, {
              ...s(),
              sx: {
                ...(u && { opacity: 0.72 }),
                ...(v && {
                  borderColor: "error.light",
                  ...(f && { bgcolor: "error.lighter" }),
                }),
                ...(r && { opacity: 0.48, pointerEvents: "none" }),
                ...(f && { "&:hover": { "& .placeholder": { opacity: 1 } } }),
                ...o,
              },
              children: [
                (0, l.jsx)("input", { ...d() }),
                f && (0, l.jsx)(c, { file: t }),
                (0, l.jsxs)(j, {
                  className: "placeholder",
                  sx: {
                    border: "2px solid #858585",
                    "&:hover": { opacity: 0.72 },
                    ...(f && {
                      zIndex: 9,
                      opacity: 0,
                      color: "common.white",
                      bgcolor: (e) => (0, p.X4)(e.palette.grey[900], 0.64),
                    }),
                    ...(v && { color: "error.main", bgcolor: "error.lighter" }),
                  },
                  children: [
                    (0, l.jsx)(m._, {}),
                    (0, l.jsx)(h.A, {
                      variant: "caption",
                      children: t ? "Update photo" : "Upload photo",
                    }),
                  ],
                }),
              ],
            }),
            i && i,
          ],
        });
      }
      function f(e) {
        let { name: n, ...t } = e;
        const { control: o } = (0, r.xW)();
        return (0, l.jsx)(r.xI, {
          name: n,
          control: o,
          render: (e) => {
            let {
              field: r,
              fieldState: { error: o },
            } = e;
            return (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(g, {
                  name: n,
                  accept: { "image/*": [] },
                  error: !!o,
                  file: r.value,
                  ...t,
                }),
                !!o &&
                  (0, l.jsx)(i.A, {
                    error: !0,
                    sx: { px: 2, textAlign: "center" },
                    children: o.message,
                  }),
              ],
            });
          },
        });
      }
    },
    48824: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(88911);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          height: "95%",
          width: "inherit",
          justifyContent: "center",
          flexDirection: "row",
        };
      });
    },
    73576: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(88911);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return { width: "100%", height: "100%", flexDirection: "column" };
      });
    },
    47122: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(88911);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return { width: "100%", flexDirection: "row" };
      });
    },
    72360: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(85865);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          fontSize: "20px",
          fontWeight: 600,
          "&:first-letter": { textTransform: "capitalize" },
        };
      });
    },
    66317: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(96446);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          backgroundColor: "#fff",
          borderRadius: "25px",
          aspectRatio: "3/2",
          width: "100%",
          padding: "20px",
          overflow: "hidden",
        };
      });
    },
    69263: (e, n, t) => {
      t.d(n, { A: () => i });
      var r = t(96446);
      const i = (0, t(34535).Ay)(r.A)((e) => {
        let { theme: n } = e;
        return {
          backgroundColor: "#fff",
          borderRadius: "25px",
          aspectRatio: "9/16",
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          padding: "20px",
          height: "100%",
        };
      });
    },
    12779: (e, n, t) => {
      t.r(n), t.d(n, { default: () => me });
      var r = t(65043),
        i = t(18986),
        o = t(88780),
        a = t(48824),
        s = t(69263),
        l = t(66317),
        d = t(73576),
        c = t(72360),
        x = t(69869),
        h = t(96446),
        u = t(62385),
        p = t(23613),
        m = t(83003),
        A = t(73216),
        j = t(47122),
        g = t(55174),
        f = t(97069),
        v = t(24858),
        b = t(63326),
        y = t(4350),
        w = t(32143),
        C = t(62076),
        D = t(16722),
        S = t(72812),
        M = t(32005),
        k = t(83535),
        N = t(60446),
        B = t.n(N),
        z = t(58390),
        Y = t(79761),
        I = t(89302),
        T = t(60376),
        E = t.n(T),
        R = (t(70399), t(30064)),
        L = t.n(R),
        F = t(70579);
      const U = (e) => {
        let { activeTab: n, index: t, onNext: i } = e;
        const o = (0, m.wA)(),
          [a, s] = (0, r.useState)();
        console.log("\ud83d\ude80 ~ FormPersonal ~ file:", a);
        const { currentUser: l } = (0, m.d4)((e) => e.app),
          x = {
            firstName: null === l || void 0 === l ? void 0 : l.firstName,
            lastName: null === l || void 0 === l ? void 0 : l.lastName,
            username: null === l || void 0 === l ? void 0 : l.username,
            headline: null === l || void 0 === l ? void 0 : l.headline,
            gender: null === l || void 0 === l ? void 0 : l.gender,
            religion: null === l || void 0 === l ? void 0 : l.religion,
            birthday: B()(null === l || void 0 === l ? void 0 : l.birthday),
            city: null === l || void 0 === l ? void 0 : l.city,
            country: null === l || void 0 === l ? void 0 : l.country,
            profileWeb: (l.profileWeb || []).map((e) => ({
              linkName: e.linkName,
              linkUrl: e.linkUrl,
            })),
            skills: null === l || void 0 === l ? void 0 : l.skills,
            about: null === l || void 0 === l ? void 0 : l.about,
          },
          u = (0, v.mN)({ defaultValues: x }),
          { control: p, setValue: A, handleSubmit: N } = u,
          T = (0, r.useCallback)(
            (e) => {
              const n = e[0];
              s(n);
              const t = Object.assign(n, { preview: URL.createObjectURL(n) });
              n && A("avatar", t, { shouldValidate: !0 });
            },
            [A]
          );
        return (0, F.jsx)("div", {
          role: "tabpanel",
          hidden: n !== t,
          id: "vertical-tabpanel-".concat(t),
          "aria-labelledby": "vertical-tab-".concat(t),
          style: { height: "100%" },
          children:
            n === t &&
            (0, F.jsx)(f.A, {
              methods: u,
              onSubmit: N(async (e) => {
                try {
                  console.log("DATA", e),
                    await o(
                      (0, b.Kg)({
                        firstName: e.firstName,
                        lastName: e.lastName,
                        username: e.username,
                        headline: e.headline,
                        gender: e.gender,
                        religion: e.religion,
                        birthday: e.birthday,
                        city: e.city,
                        country: e.country,
                        profileWeb: [{ linkName: e.linkName, linkUrl: e.linkUrl }],
                        skills: e.skills,
                        about: e.about,
                      })
                    ),
                    L()
                      .fire({
                        title: "Are you sure?",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Yes, Save it!",
                      })
                      .then((e) => {
                        e.isConfirmed && i();
                      });
                } catch (n) {
                  console.error(n),
                    L().fire({
                      title: "Error!",
                      text: "An error occurred while updating!",
                      icon: "error",
                    });
                }
              }),
              children: (0, F.jsxs)(d.A, {
                gap: 2,
                children: [
                  (0, F.jsx)(c.A, { children: "Personal Info" }),
                  (0, F.jsx)(h.A, {
                    sx: { overflowY: "scroll", height: "100%" },
                    children: (0, F.jsxs)(g.A, {
                      gap: 2,
                      children: [
                        (0, F.jsx)(h.A, {
                          sx: { gridColumn: "span 4", gridRow: "span 2" },
                          children: (0, F.jsx)(y.B, {
                            name: "avatar",
                            maxSize: 3145728,
                            onDrop: T,
                          }),
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "First Name" }),
                            (0, F.jsx)(C.A, { name: "firstName" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Last Name" }),
                            (0, F.jsx)(C.A, { name: "lastName" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 8" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Headline" }),
                            (0, F.jsx)(C.A, { name: "headline" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Username" }),
                            (0, F.jsx)(C.A, { name: "username" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Gender" }),
                            (0, F.jsx)(v.xI, {
                              name: "gender",
                              control: p,
                              render: (e) => {
                                let {
                                  field: n,
                                  fieldState: { error: t },
                                } = e;
                                return (0, F.jsx)(k.A, {
                                  ...n,
                                  fullWidth: !0,
                                  value: n.value,
                                  error: !!t,
                                  children: M.E2.map((e, n) =>
                                    (0, F.jsx)(w.A, { value: e, children: e }, n)
                                  ),
                                });
                              },
                            }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Religion" }),
                            (0, F.jsx)(v.xI, {
                              name: "religion",
                              control: p,
                              render: (e) => {
                                let {
                                  field: n,
                                  fieldState: { error: t },
                                } = e;
                                return (0, F.jsx)(k.A, {
                                  ...n,
                                  fullWidth: !0,
                                  value: n.value,
                                  error: !!t,
                                  children: M.Gq.map((e, n) =>
                                    (0, F.jsx)(w.A, { value: e, children: e }, n)
                                  ),
                                });
                              },
                            }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Birthday" }),
                            (0, F.jsx)(v.xI, {
                              name: "birthday",
                              control: p,
                              render: (e) => {
                                let {
                                  field: { onChange: n, value: t },
                                  fieldState: { error: r },
                                } = e;
                                return (0, F.jsx)(z.$, {
                                  dateAdapter: I.R,
                                  children: (0, F.jsx)(Y.l, {
                                    fullWidth: !0,
                                    name: "birthday",
                                    value: t,
                                    onChange: (e) => {
                                      n(e);
                                    },
                                    variant: "inline",
                                    autoOk: !0,
                                    format: "DD/MM/YYYY",
                                    sx: {
                                      "& .MuiInputBase-root": {
                                        border: "2px solid #858585",
                                      },
                                      "& .MuiInputBase-input": {
                                        padding: "7px 8px",
                                        fontSize: "14px",
                                      },
                                    },
                                  }),
                                });
                              },
                            }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "City" }),
                            (0, F.jsx)(C.A, { name: "city" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Country" }),
                            (0, F.jsx)(C.A, { name: "country" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 4" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Link Name" }),
                            (0, F.jsx)(C.A, { name: "linkName" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 8" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Link Url" }),
                            (0, F.jsx)(C.A, { name: "linkUrl" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 12" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Your Skills" }),
                            (0, F.jsx)(v.xI, {
                              name: "skills",
                              control: p,
                              render: (e) => {
                                let {
                                  field: { onChange: n, value: t },
                                  fieldState: { error: r },
                                } = e;
                                return (0, F.jsx)(E(), {
                                  value: t,
                                  onChange: (e) => {
                                    n(e);
                                  },
                                  inputProps: { placeholder: "Type and click enter" },
                                  onlyUnique: !0,
                                });
                              },
                            }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 12" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Your Description" }),
                            (0, F.jsx)(C.A, {
                              name: "about",
                              type: "text",
                              multiline: !0,
                              minRows: 3,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, F.jsx)(j.A, {
                    justifyContent: "end",
                    sx: { mb: "10px" },
                    children: (0, F.jsx)(S.A, {
                      color: "primary",
                      size: "large",
                      type: "submit",
                      variant: "contained",
                      sx: { height: "40px", width: "150px" },
                      children: "Save",
                    }),
                  }),
                ],
              }),
            }),
        });
      };
      var O = t(27015),
        P = t(44204),
        W = t(83464),
        Z = t(87476),
        K = t(56861);
      const V = (e) => {
          let { activeTab: n, index: t, onNext: i } = e;
          const o = (0, m.wA)(),
            { currentUser: a } = (0, m.d4)((e) => e.app),
            [s, l] = (0, r.useState)([0]),
            x = {
              experiences: (a.experiences || []).map((e) => ({
                companyName: e.companyName,
                positionTitle: e.positionTitle,
                employmentType: e.employmentType,
                location: e.location,
                startDate: B()(e.startDate),
                endDate: B()(e.endDate),
                description: e.description,
              })),
            },
            h = (0, v.mN)({ defaultValues: x }),
            { control: u, handleSubmit: p } = h,
            A = (e) => {
              L()
                .fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: !0,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                })
                .then(async (n) => {
                  if (n.isConfirmed)
                    try {
                      const n =
                        null === a || void 0 === a
                          ? void 0
                          : a.experiences.filter((n, t) => t !== e);
                      o((0, b.Kg)({ experiences: n }));
                      const t = s.filter((n, t) => t !== e);
                      l(0 === t.length ? [0] : t),
                        L().fire(
                          "Deleted!",
                          "Your experience has been deleted.",
                          "success"
                        ),
                        window.location.reload();
                    } catch (t) {
                      console.error(t),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while deleting!",
                          icon: "error",
                        });
                    }
                });
            };
          return (
            (0, r.useEffect)(() => {
              a.experiences &&
                a.experiences.length > 0 &&
                l(a.experiences.map((e, n) => n));
            }, [a.experiences]),
            (0, F.jsx)("div", {
              role: "tabpanel",
              hidden: n !== t,
              id: "vertical-tabpanel-".concat(t),
              "aria-labelledby": "vertical-tab-".concat(t),
              style: { height: "100%" },
              children:
                n === t &&
                (0, F.jsx)(f.A, {
                  methods: h,
                  onSubmit: p(async (e) => {
                    try {
                      const n = e.experiences.map((e) => ({
                        companyName: e.companyName,
                        positionTitle: e.positionTitle,
                        employmentType: e.employmentType,
                        location: e.location,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        description: e.description,
                      }));
                      await o((0, b.Kg)({ experiences: n })),
                        L()
                          .fire({
                            title: "Are you sure?",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Yes, Save it!",
                          })
                          .then((e) => {
                            e.isConfirmed && i();
                          });
                    } catch (n) {
                      console.error(n),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while updating!",
                          icon: "error",
                        });
                    }
                  }),
                  children: (0, F.jsxs)(d.A, {
                    gap: 2,
                    children: [
                      (0, F.jsxs)(j.A, {
                        gap: 1,
                        children: [
                          (0, F.jsx)(c.A, { children: "Experience" }),
                          (0, F.jsxs)(W.A, {
                            onClick: () => {
                              l((e) => [...e, e.length]);
                            },
                            sx: { width: "90px" },
                            children: [
                              (0, F.jsx)(O.F, { size: 15, weight: "bold" }),
                              "Add More",
                            ],
                          }),
                        ],
                      }),
                      (0, F.jsx)(K.A, {
                        children: s.map((e) =>
                          (0, F.jsx)($, { index: e, control: u, handleDeleteMore: A }, e)
                        ),
                      }),
                      (0, F.jsx)(j.A, {
                        justifyContent: "end",
                        sx: { mb: "10px" },
                        children: (0, F.jsx)(S.A, {
                          color: "primary",
                          size: "large",
                          type: "submit",
                          variant: "contained",
                          sx: { height: "40px", width: "150px" },
                          children: "Save",
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        $ = (e) => {
          let { index: n, control: t, handleDeleteMore: r } = e;
          return (0, F.jsxs)(g.A, {
            gap: 2,
            children: [
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Company Name" }),
                  (0, F.jsx)(C.A, { name: "experiences[".concat(n, "].companyName") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Position Title" }),
                  (0, F.jsx)(C.A, { name: "experiences[".concat(n, "].positionTitle") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Employment Type" }),
                  (0, F.jsx)(v.xI, {
                    name: "experiences[".concat(n, "].employmentType"),
                    control: t,
                    render: (e) => {
                      let {
                        field: n,
                        fieldState: { error: t },
                      } = e;
                      return (0, F.jsx)(k.A, {
                        ...n,
                        fullWidth: !0,
                        value: n.value,
                        error: !!t,
                        children: M.jp.map((e, n) =>
                          (0, F.jsx)(w.A, { value: e, children: e }, n)
                        ),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Location" }),
                  (0, F.jsx)(C.A, { name: "experiences[".concat(n, "].location") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Start Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "experiences[".concat(n, "].startDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "startDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "End Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "experiences[".concat(n, "].endDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "endDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 12" },
                children: [
                  (0, F.jsx)(D.A, { children: "Description" }),
                  (0, F.jsx)(C.A, {
                    name: "experiences[".concat(n, "].description"),
                    type: "text",
                    multiline: !0,
                    minRows: 3,
                    sx: { height: "100%" },
                  }),
                ],
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsxs)(W.A, {
                  onClick: () => r(n),
                  sx: { width: "100px", color: "red", justifyContent: "start" },
                  children: [
                    (0, F.jsx)(P.l, { size: 15, weight: "bold" }),
                    "Delete Data",
                  ],
                }),
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsx)(Z.A, {}),
              }),
            ],
          });
        };
      var G = t(39336);
      const q = (e) => {
          let { activeTab: n, index: t, onNext: i } = e;
          const o = (0, m.wA)(),
            { currentUser: a } = (0, m.d4)((e) => e.app),
            [s, l] = (0, r.useState)([0]),
            x = {
              educations: (a.educations || []).map((e) => ({
                schoolName: e.schoolName,
                degree: e.degree,
                studyField: e.studyField,
                location: e.location,
                startDate: B()(e.startDate),
                endDate: B()(e.endDate),
                description: e.description,
              })),
            },
            u = (0, v.mN)({ defaultValues: x }),
            { control: p, handleSubmit: A } = u,
            g = (e) => {
              L()
                .fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: !0,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                })
                .then(async (n) => {
                  if (n.isConfirmed)
                    try {
                      const n =
                        null === a || void 0 === a
                          ? void 0
                          : a.educations.filter((n, t) => t !== e);
                      o((0, b.Kg)({ educations: n }));
                      const t = s.filter((n, t) => t !== e);
                      l(0 === t.length ? [0] : t),
                        L().fire(
                          "Deleted!",
                          "Your education has been deleted.",
                          "success"
                        ),
                        window.location.reload();
                    } catch (t) {
                      console.error(t),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while deleting!",
                          icon: "error",
                        });
                    }
                });
            };
          return (
            (0, r.useEffect)(() => {
              a.educations && a.educations.length > 0 && l(a.educations.map((e, n) => n));
            }, [a.educations]),
            (0, F.jsx)("div", {
              role: "tabpanel",
              hidden: n !== t,
              id: "vertical-tabpanel-".concat(t),
              "aria-labelledby": "vertical-tab-".concat(t),
              style: { height: "100%" },
              children:
                n === t &&
                (0, F.jsx)(f.A, {
                  methods: u,
                  onSubmit: A(async (e) => {
                    try {
                      const n = e.educations.map((e) => ({
                        schoolName: e.schoolName,
                        degree: e.degree,
                        studyField: e.studyField,
                        location: e.location,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        description: e.description,
                      }));
                      await o((0, b.Kg)({ educations: n })),
                        L()
                          .fire({
                            title: "Are you sure?",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Yes, Save it!",
                          })
                          .then((e) => {
                            e.isConfirmed && i();
                          });
                    } catch (n) {
                      console.error(n),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while updating!",
                          icon: "error",
                        });
                    }
                  }),
                  children: (0, F.jsxs)(d.A, {
                    gap: 2,
                    children: [
                      (0, F.jsxs)(j.A, {
                        gap: 1,
                        children: [
                          (0, F.jsx)(c.A, { children: "Education" }),
                          (0, F.jsxs)(W.A, {
                            onClick: () => {
                              l((e) => [...e, e.length]);
                            },
                            sx: { width: "90px" },
                            children: [
                              (0, F.jsx)(O.F, { size: 15, weight: "bold" }),
                              "Add More",
                            ],
                          }),
                        ],
                      }),
                      (0, F.jsx)(h.A, {
                        sx: { overflowY: "scroll", height: "100%" },
                        children: s.map((e) =>
                          (0, F.jsx)(H, { index: e, control: p, handleDeleteMore: g }, e)
                        ),
                      }),
                      (0, F.jsx)(j.A, {
                        justifyContent: "end",
                        sx: { mb: "10px" },
                        children: (0, F.jsx)(S.A, {
                          color: "primary",
                          size: "large",
                          type: "submit",
                          variant: "contained",
                          sx: { height: "40px", width: "150px" },
                          children: "Save",
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        H = (e) => {
          let { index: n, control: t, handleDeleteMore: r } = e;
          return (0, F.jsxs)(g.A, {
            gap: 2,
            children: [
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "School Name" }),
                  (0, F.jsx)(C.A, { name: "educations[".concat(n, "].schoolName") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Degree" }),
                  (0, F.jsx)(v.xI, {
                    name: "educations[".concat(n, "].degree"),
                    control: t,
                    render: (e) => {
                      let {
                        field: n,
                        fieldState: { error: t },
                      } = e;
                      return (0, F.jsx)(k.A, {
                        ...n,
                        fullWidth: !0,
                        value: n.value,
                        error: !!t,
                        children: M.yf.map((e, n) =>
                          (0, F.jsx)(w.A, { value: e, children: e }, n)
                        ),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Study Field" }),
                  (0, F.jsx)(C.A, { name: "educations[".concat(n, "].studyField") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Location" }),
                  (0, F.jsx)(C.A, { name: "educations[".concat(n, "].location") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Start Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "educations[".concat(n, "].startDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "startDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "End Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "educations[".concat(n, "].endDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "endDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 12" },
                children: [
                  (0, F.jsx)(D.A, { children: "Description" }),
                  (0, F.jsx)(C.A, {
                    name: "educations[".concat(n, "].description"),
                    type: "text",
                    multiline: !0,
                    minRows: 3,
                    sx: { height: "100%" },
                  }),
                ],
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsxs)(W.A, {
                  onClick: () => r(n),
                  sx: { width: "100px", color: "red", justifyContent: "start" },
                  children: [
                    (0, F.jsx)(P.l, { size: 15, weight: "bold" }),
                    "Delete Data",
                  ],
                }),
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsx)(G.A, {
                  sx: {
                    marginBottom: "20px",
                    width: "100%",
                    border: "1px solid #f7bd00",
                  },
                }),
              }),
            ],
          });
        },
        X = (e) => {
          let { activeTab: n, index: t, onNext: i } = e;
          const o = (0, m.wA)(),
            { currentUser: a } = (0, m.d4)((e) => e.app),
            [s, l] = (0, r.useState)([0]),
            x = {
              organizations: (a.organizations || []).map((e) => ({
                organizationName: e.organizationName,
                positionTitle: e.positionTitle,
                businessField: e.businessField,
                location: e.location,
                startDate: B()(e.startDate),
                endDate: B()(e.endDate),
                description: e.description,
              })),
            },
            u = (0, v.mN)({ defaultValues: x }),
            { control: p, handleSubmit: A } = u,
            g = (e) => {
              L()
                .fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: !0,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                })
                .then(async (n) => {
                  if (n.isConfirmed)
                    try {
                      const n =
                        null === a || void 0 === a
                          ? void 0
                          : a.organizations.filter((n, t) => t !== e);
                      o((0, b.Kg)({ organizations: n }));
                      const t = s.filter((n, t) => t !== e);
                      l(0 === t.length ? [0] : t),
                        L().fire(
                          "Deleted!",
                          "Your organization has been deleted.",
                          "success"
                        ),
                        window.location.reload();
                    } catch (t) {
                      console.error(t),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while deleting!",
                          icon: "error",
                        });
                    }
                });
            };
          return (
            (0, r.useEffect)(() => {
              a.organizations &&
                a.organizations.length > 0 &&
                l(a.organizations.map((e, n) => n));
            }, [a.organizations]),
            (0, F.jsx)("div", {
              role: "tabpanel",
              hidden: n !== t,
              id: "vertical-tabpanel-".concat(t),
              "aria-labelledby": "vertical-tab-".concat(t),
              style: { height: "100%" },
              children:
                n === t &&
                (0, F.jsx)(f.A, {
                  methods: u,
                  onSubmit: A(async (e) => {
                    try {
                      const n = e.organizations.map((e) => ({
                        organizationName: e.organizationName,
                        positionTitle: e.positionTitle,
                        businessField: e.businessField,
                        location: e.location,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        description: e.description,
                      }));
                      await o((0, b.Kg)({ organizations: n })),
                        L()
                          .fire({
                            title: "Are you sure?",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Yes, Save it!",
                          })
                          .then((e) => {
                            e.isConfirmed && i();
                          });
                    } catch (n) {
                      console.error(n),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while updating!",
                          icon: "error",
                        });
                    }
                  }),
                  children: (0, F.jsxs)(d.A, {
                    gap: 2,
                    children: [
                      (0, F.jsxs)(j.A, {
                        gap: 1,
                        children: [
                          (0, F.jsx)(c.A, { children: "Organization" }),
                          (0, F.jsxs)(W.A, {
                            onClick: () => {
                              l((e) => [...e, e.length]);
                            },
                            sx: { width: "90px" },
                            children: [
                              (0, F.jsx)(O.F, { size: 15, weight: "bold" }),
                              "Add More",
                            ],
                          }),
                        ],
                      }),
                      (0, F.jsx)(h.A, {
                        sx: { overflowY: "scroll", height: "100%" },
                        children: s.map((e) =>
                          (0, F.jsx)(J, { index: e, control: p, handleDeleteMore: g }, e)
                        ),
                      }),
                      (0, F.jsx)(j.A, {
                        justifyContent: "end",
                        sx: { mb: "10px" },
                        children: (0, F.jsx)(S.A, {
                          color: "primary",
                          size: "large",
                          type: "submit",
                          variant: "contained",
                          sx: { height: "40px", width: "150px" },
                          children: "Save",
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        J = (e) => {
          let { index: n, control: t, handleDeleteMore: r } = e;
          return (0, F.jsxs)(g.A, {
            gap: 2,
            children: [
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Organization Name" }),
                  (0, F.jsx)(C.A, {
                    name: "organizations[".concat(n, "].organizationName"),
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Position Title" }),
                  (0, F.jsx)(C.A, {
                    name: "organizations[".concat(n, "].positionTitle"),
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Business Field" }),
                  (0, F.jsx)(C.A, {
                    name: "organizations[".concat(n, "].businessField"),
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Location" }),
                  (0, F.jsx)(C.A, { name: "organizations[".concat(n, "].location") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Start Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "organizations[".concat(n, "].startDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "startDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "End Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "organizations[".concat(n, "].endDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "endDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 12" },
                children: [
                  (0, F.jsx)(D.A, { children: "Description" }),
                  (0, F.jsx)(C.A, {
                    name: "organizations[".concat(n, "].description"),
                    type: "text",
                    multiline: !0,
                    minRows: 3,
                    sx: { height: "100%" },
                  }),
                ],
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsxs)(W.A, {
                  onClick: () => r(n),
                  sx: { width: "100px", color: "red", justifyContent: "start" },
                  children: [
                    (0, F.jsx)(P.l, { size: 15, weight: "bold" }),
                    "Delete Data",
                  ],
                }),
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsx)(G.A, {
                  sx: {
                    marginBottom: "20px",
                    width: "100%",
                    border: "1px solid #f7bd00",
                  },
                }),
              }),
            ],
          });
        },
        _ = (e) => {
          let { activeTab: n, index: t, onNext: i } = e;
          const o = (0, m.wA)(),
            { currentUser: a } = (0, m.d4)((e) => e.app),
            [s, l] = (0, r.useState)([0]),
            x = {
              achievements: (a.achievements || []).map((e) => ({
                achievementName: e.achievementName,
                publishedBy: e.publishedBy,
                publishedDate: B()(e.publishedDate),
                proofLink: e.proofLink,
                description: e.description,
              })),
            },
            u = (0, v.mN)({ defaultValues: x }),
            { control: p, handleSubmit: A } = u,
            g = (e) => {
              L()
                .fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: !0,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                })
                .then(async (n) => {
                  if (n.isConfirmed)
                    try {
                      const n =
                        null === a || void 0 === a
                          ? void 0
                          : a.achievements.filter((n, t) => t !== e);
                      o((0, b.Kg)({ achievements: n }));
                      const t = s.filter((n, t) => t !== e);
                      l(0 === t.length ? [0] : t),
                        L().fire(
                          "Deleted!",
                          "Your achievement has been deleted.",
                          "success"
                        ),
                        window.location.reload();
                    } catch (t) {
                      console.error(t),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while deleting!",
                          icon: "error",
                        });
                    }
                });
            };
          return (
            (0, r.useEffect)(() => {
              a.achievements &&
                a.achievements.length > 0 &&
                l(a.achievements.map((e, n) => n));
            }, [a.achievements]),
            (0, F.jsx)("div", {
              role: "tabpanel",
              hidden: n !== t,
              id: "vertical-tabpanel-".concat(t),
              "aria-labelledby": "vertical-tab-".concat(t),
              style: { height: "100%" },
              children:
                n === t &&
                (0, F.jsx)(f.A, {
                  methods: u,
                  onSubmit: A(async (e) => {
                    try {
                      const n = e.achievements.map((e) => ({
                        achievementName: e.achievementName,
                        publishedBy: e.publishedBy,
                        publishedDate: e.publishedDate,
                        proofLink: e.proofLink,
                        description: e.description,
                      }));
                      await o((0, b.Kg)({ achievements: n })),
                        L()
                          .fire({
                            title: "Are you sure?",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Yes, Save it!",
                          })
                          .then((e) => {
                            e.isConfirmed && i();
                          });
                    } catch (n) {
                      console.error(n),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while updating!",
                          icon: "error",
                        });
                    }
                  }),
                  children: (0, F.jsxs)(d.A, {
                    gap: 2,
                    children: [
                      (0, F.jsxs)(j.A, {
                        gap: 1,
                        children: [
                          (0, F.jsx)(c.A, { children: "Achievement" }),
                          (0, F.jsxs)(W.A, {
                            onClick: () => {
                              l((e) => [...e, e.length]);
                            },
                            sx: { width: "90px" },
                            children: [
                              (0, F.jsx)(O.F, { size: 15, weight: "bold" }),
                              "Add More",
                            ],
                          }),
                        ],
                      }),
                      (0, F.jsx)(h.A, {
                        sx: { overflowY: "scroll", height: "100%" },
                        children: s.map((e) =>
                          (0, F.jsx)(Q, { index: e, control: p, handleDeleteMore: g }, e)
                        ),
                      }),
                      (0, F.jsx)(j.A, {
                        justifyContent: "end",
                        sx: { mb: "10px" },
                        children: (0, F.jsx)(S.A, {
                          color: "primary",
                          size: "large",
                          type: "submit",
                          variant: "contained",
                          sx: { height: "40px", width: "150px" },
                          children: "Save",
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        Q = (e) => {
          let { index: n, control: t, handleDeleteMore: r } = e;
          return (0, F.jsxs)(g.A, {
            gap: 2,
            children: [
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Achievement Name" }),
                  (0, F.jsx)(C.A, {
                    name: "achievements[".concat(n, "].achievementName"),
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Published By" }),
                  (0, F.jsx)(C.A, { name: "achievements[".concat(n, "].publishedBy") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Published Date" }),
                  (0, F.jsx)(v.xI, {
                    name: "achievements[".concat(n, "].publishedDate"),
                    control: t,
                    render: (e) => {
                      let {
                        field: { onChange: n, value: t },
                        fieldState: { error: r },
                      } = e;
                      return (0, F.jsx)(z.$, {
                        dateAdapter: I.R,
                        children: (0, F.jsx)(Y.l, {
                          fullWidth: !0,
                          name: "publishedDate",
                          value: t,
                          onChange: (e) => {
                            n(e);
                          },
                          variant: "inline",
                          autoOk: !0,
                          format: "MMMM YYYY",
                          views: ["month", "year"],
                          sx: {
                            width: "100%",
                            "& .MuiInputBase-root": { border: "2px solid #858585" },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          },
                        }),
                      });
                    },
                  }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Proof Link" }),
                  (0, F.jsx)(C.A, { name: "achievements[".concat(n, "].proofLink") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 12" },
                children: [
                  (0, F.jsx)(D.A, { children: "Description" }),
                  (0, F.jsx)(C.A, {
                    name: "achievements[".concat(n, "].description"),
                    type: "text",
                    multiline: !0,
                    minRows: 3,
                    sx: { height: "100%" },
                  }),
                ],
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsxs)(W.A, {
                  onClick: () => r(n),
                  sx: { width: "100px", color: "red", justifyContent: "start" },
                  children: [
                    (0, F.jsx)(P.l, { size: 15, weight: "bold" }),
                    "Delete Data",
                  ],
                }),
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsx)(G.A, {
                  sx: {
                    marginBottom: "20px",
                    width: "100%",
                    border: "1px solid #f7bd00",
                  },
                }),
              }),
            ],
          });
        },
        ee = (e) => {
          let { activeTab: n, index: t, onNext: i } = e;
          const o = (0, m.wA)(),
            { currentUser: a } = (0, m.d4)((e) => e.app),
            [s, l] = (0, r.useState)([0]),
            x = {
              socialmedias: (a.socialmedias || []).map((e) => ({
                mediaName: e.mediaName,
                mediaUsername: e.mediaUsername,
                mediaLink: e.mediaLink,
              })),
            },
            u = (0, v.mN)({ defaultValues: x }),
            { control: p, handleSubmit: A } = u,
            g = (e) => {
              L()
                .fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: !0,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                })
                .then(async (n) => {
                  if (n.isConfirmed)
                    try {
                      const n =
                        null === a || void 0 === a
                          ? void 0
                          : a.socialmedias.filter((n, t) => t !== e);
                      o((0, b.Kg)({ socialmedias: n }));
                      const t = s.filter((n, t) => t !== e);
                      l(0 === t.length ? [0] : t),
                        L().fire(
                          "Deleted!",
                          "Your socialmedia has been deleted.",
                          "success"
                        ),
                        window.location.reload();
                    } catch (t) {
                      console.error(t),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while deleting!",
                          icon: "error",
                        });
                    }
                });
            };
          return (
            (0, r.useEffect)(() => {
              a.socialmedias &&
                a.socialmedias.length > 0 &&
                l(a.socialmedias.map((e, n) => n));
            }, [a.socialmedias]),
            (0, F.jsx)("div", {
              role: "tabpanel",
              hidden: n !== t,
              id: "vertical-tabpanel-".concat(t),
              "aria-labelledby": "vertical-tab-".concat(t),
              style: { height: "100%" },
              children:
                n === t &&
                (0, F.jsx)(f.A, {
                  methods: u,
                  onSubmit: A(async (e) => {
                    try {
                      const n = e.socialmedias.map((e) => ({
                        mediaName: e.mediaName,
                        mediaUsername: e.mediaUsername,
                        mediaLink: e.mediaLink,
                      }));
                      await o((0, b.Kg)({ socialmedias: n })),
                        L()
                          .fire({
                            title: "Are you sure?",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Yes, Save it!",
                          })
                          .then((e) => {
                            e.isConfirmed && i();
                          });
                    } catch (n) {
                      console.error(n),
                        L().fire({
                          title: "Error!",
                          text: "An error occurred while updating!",
                          icon: "error",
                        });
                    }
                  }),
                  children: (0, F.jsxs)(d.A, {
                    gap: 2,
                    children: [
                      (0, F.jsxs)(j.A, {
                        gap: 1,
                        children: [
                          (0, F.jsx)(c.A, { children: "Contact Info" }),
                          (0, F.jsxs)(W.A, {
                            onClick: () => {
                              l((e) => [...e, e.length]);
                            },
                            sx: { width: "90px" },
                            children: [
                              (0, F.jsx)(O.F, { size: 15, weight: "bold" }),
                              "Add More",
                            ],
                          }),
                        ],
                      }),
                      (0, F.jsx)(h.A, {
                        sx: { overflowY: "scroll", height: "100%" },
                        children: s.map((e) =>
                          (0, F.jsx)(ne, { index: e, control: p, handleDeleteMore: g }, e)
                        ),
                      }),
                      (0, F.jsx)(j.A, {
                        justifyContent: "end",
                        sx: { mb: "10px" },
                        children: (0, F.jsx)(S.A, {
                          color: "primary",
                          size: "large",
                          type: "submit",
                          variant: "contained",
                          sx: { height: "40px", width: "150px" },
                          children: "Save",
                        }),
                      }),
                    ],
                  }),
                }),
            })
          );
        },
        ne = (e) => {
          let { index: n, control: t, handleDeleteMore: r } = e;
          return (0, F.jsxs)(g.A, {
            gap: 2,
            children: [
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Social Media Name" }),
                  (0, F.jsx)(C.A, { name: "socialmedias[".concat(n, "].mediaName") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 6" },
                children: [
                  (0, F.jsx)(D.A, { children: "Your Username" }),
                  (0, F.jsx)(C.A, { name: "socialmedias[".concat(n, "].mediaUsername") }),
                ],
              }),
              (0, F.jsxs)(h.A, {
                sx: { gridColumn: "span 12" },
                children: [
                  (0, F.jsx)(D.A, { children: "Social Media Link" }),
                  (0, F.jsx)(C.A, { name: "socialmedias[".concat(n, "].mediaLink") }),
                ],
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsxs)(W.A, {
                  onClick: () => r(n),
                  sx: { width: "100px", color: "red", justifyContent: "start" },
                  children: [
                    (0, F.jsx)(P.l, { size: 15, weight: "bold" }),
                    "Delete Data",
                  ],
                }),
              }),
              (0, F.jsx)(h.A, {
                sx: { gridColumn: "span 12" },
                children: (0, F.jsx)(G.A, {
                  sx: {
                    marginBottom: "20px",
                    width: "100%",
                    border: "1px solid #f7bd00",
                  },
                }),
              }),
            ],
          });
        };
      var te = t(87624);
      const re = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
            })
          ),
        ],
      ]);
      var ie = Object.defineProperty,
        oe = Object.defineProperties,
        ae = Object.getOwnPropertyDescriptors,
        se = Object.getOwnPropertySymbols,
        le = Object.prototype.hasOwnProperty,
        de = Object.prototype.propertyIsEnumerable,
        ce = (e, n, t) =>
          n in e
            ? ie(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
            : (e[n] = t);
      const xe = (0, r.forwardRef)((e, n) =>
        r.createElement(
          te.A,
          ((e, n) => oe(e, ae(n)))(
            ((e, n) => {
              for (var t in n || (n = {})) le.call(n, t) && ce(e, t, n[t]);
              if (se) for (var t of se(n)) de.call(n, t) && ce(e, t, n[t]);
              return e;
            })({ ref: n }, e),
            { weights: re }
          )
        )
      );
      xe.displayName = "CheckCircle";
      var he = t(53563);
      const ue = (e) => {
        let { activeTab: n, index: t } = e;
        const r = (0, m.wA)(),
          { currentUser: i } = (0, m.d4)((e) => e.app),
          o = (0, A.Zp)(),
          a = {
            email: null === i || void 0 === i ? void 0 : i.email,
            phoneNumber: null === i || void 0 === i ? void 0 : i.phoneNumber,
            role: null === i || void 0 === i ? void 0 : i.role,
          },
          s = (0, v.mN)({ defaultValues: a }),
          { control: l, handleSubmit: x } = s;
        return (0, F.jsx)("div", {
          role: "tabpanel",
          hidden: n !== t,
          id: "vertical-tabpanel-".concat(t),
          "aria-labelledby": "vertical-tab-".concat(t),
          style: { height: "100%" },
          children:
            n === t &&
            (0, F.jsx)(f.A, {
              methods: s,
              onSubmit: x(async (e) => {
                try {
                  console.log("DATA", e),
                    await r(
                      (0, b.Kg)({
                        email: e.email,
                        phoneNumber: e.phoneNumber,
                        role: e.role,
                      })
                    ),
                    L().fire({
                      title: "Are you sure?",
                      icon: "success",
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "Yes, Save it!",
                    });
                } catch (n) {
                  console.error(n),
                    L().fire({
                      title: "Error!",
                      text: "An error occurred while updating!",
                      icon: "error",
                    });
                }
              }),
              children: (0, F.jsxs)(d.A, {
                gap: 2,
                children: [
                  (0, F.jsx)(c.A, { children: "Security Info" }),
                  (0, F.jsx)(h.A, {
                    sx: { overflowY: "scroll", height: "100%" },
                    children: (0, F.jsxs)(g.A, {
                      gap: 2,
                      children: [
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 7" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Role" }),
                            (0, F.jsx)(v.xI, {
                              name: "role",
                              control: l,
                              render: (e) => {
                                let {
                                  field: n,
                                  fieldState: { error: t },
                                } = e;
                                return (0, F.jsx)(k.A, {
                                  ...n,
                                  fullWidth: !0,
                                  value: n.value,
                                  error: !!t,
                                  children: M.up.map((e, n) =>
                                    (0, F.jsx)(w.A, { value: e, children: e }, n)
                                  ),
                                });
                              },
                            }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 7" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Phone Number" }),
                            (0, F.jsx)(C.A, { name: "phoneNumber" }),
                          ],
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 7" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Email Address" }),
                            (0, F.jsx)(C.A, { name: "email" }),
                          ],
                        }),
                        (0, F.jsx)(h.A, {
                          sx: { gridColumn: "span 7" },
                          children: (0, F.jsxs)(W.A, {
                            onClick: () => {
                              r((0, he.Bt)({ email: i.email })), o("./auth/verify");
                            },
                            sx: { color: "blue", width: "150px" },
                            children: [
                              (0, F.jsx)(xe, { size: 14, weight: "bold" }),
                              "Verify This Account",
                            ],
                          }),
                        }),
                        (0, F.jsxs)(h.A, {
                          sx: { gridColumn: "span 7" },
                          children: [
                            (0, F.jsx)(D.A, { children: "Password" }),
                            (0, F.jsx)(p.A, {
                              onClick: () => o("./auth/reset-password"),
                              children: "Change Password",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, F.jsx)(j.A, {
                    justifyContent: "end",
                    sx: { mb: "10px" },
                    children: (0, F.jsx)(S.A, {
                      color: "primary",
                      size: "large",
                      type: "submit",
                      variant: "contained",
                      sx: { height: "40px", width: "150px" },
                      children: "Save",
                    }),
                  }),
                ],
              }),
            }),
        });
      };
      function pe(e) {
        return {
          id: "vertical-tab-".concat(e),
          "aria-controls": "vertical-tabpanel-".concat(e),
        };
      }
      const me = () => {
        const [e, n] = (0, r.useState)(0),
          t = (0, A.Zp)(),
          { currentUser: g } = (0, m.d4)((e) => e.app);
        console.log("\ud83d\ude80 ~ PageUserEdit ~ currentUser:", g);
        const f = () => {
          n((e) => e + 1);
        };
        return (0, F.jsx)(i.A, {
          children: (0, F.jsx)(o.A, {
            maxWidth: "md",
            children: (0, F.jsxs)(a.A, {
              gap: 3,
              children: [
                (0, F.jsx)(s.A, {
                  sx: { width: "30%" },
                  children: (0, F.jsxs)(d.A, {
                    gap: 2,
                    children: [
                      (0, F.jsx)(c.A, { children: "Edit Profile" }),
                      (0, F.jsxs)(x.A, {
                        orientation: "vertical",
                        value: e,
                        onChange: (e, t) => {
                          n(t);
                        },
                        sx: { borderRight: 3, borderColor: "divider" },
                        children: [
                          (0, F.jsx)(u.A, { label: "Personal Info", value: 0, ...pe(0) }),
                          (0, F.jsx)(u.A, { label: "Experience", ...pe(1) }),
                          (0, F.jsx)(u.A, { label: "Education", ...pe(2) }),
                          (0, F.jsx)(u.A, { label: "Organization", ...pe(3) }),
                          (0, F.jsx)(u.A, { label: "Achievement", ...pe(4) }),
                          (0, F.jsx)(u.A, { label: "Contact Info", ...pe(5) }),
                          (0, F.jsx)(u.A, { label: "Security Info", ...pe(6) }),
                        ],
                      }),
                      (0, F.jsx)(h.A, { sx: { flexGrow: 1 } }),
                      (0, F.jsxs)(j.A, {
                        gap: 2,
                        sx: { mb: "10px" },
                        children: [
                          (0, F.jsx)(p.A, {
                            onClick: () => t(-1),
                            sx: { bgcolor: "red", color: "white" },
                            children: "Back",
                          }),
                          (0, F.jsx)(p.A, {
                            onClick: () => t("./ch/".concat(g.username, "./resume")),
                            children: "Preview",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, F.jsxs)(l.A, {
                  sx: { width: "70%" },
                  children: [
                    0 === e && (0, F.jsx)(U, { activeTab: e, index: 0, onNext: f }),
                    1 === e && (0, F.jsx)(V, { activeTab: e, index: 1, onNext: f }),
                    2 === e && (0, F.jsx)(q, { activeTab: e, index: 2, onNext: f }),
                    3 === e && (0, F.jsx)(X, { activeTab: e, index: 3, onNext: f }),
                    4 === e && (0, F.jsx)(_, { activeTab: e, index: 4, onNext: f }),
                    5 === e && (0, F.jsx)(ee, { activeTab: e, index: 5, onNext: f }),
                    6 === e && (0, F.jsx)(ue, { activeTab: e, index: 6 }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    32005: (e, n, t) => {
      t.d(n, {
        Df: () => r,
        E2: () => d,
        Gq: () => x,
        Ih: () => s,
        gJ: () => a,
        jp: () => i,
        up: () => c,
        wV: () => l,
        yf: () => o,
      });
      const r = ["pending", "processed", "accepted", "rejected"],
        i = ["full-time", "part-time", "internship", "freelance"],
        o = [
          "highschool-diploma",
          "bachelor-degree",
          "master-degree",
          "doctor-degree",
          "course-bootcamp",
        ],
        a = ["work-from-office", "work-from-home", "work-from-anywhere"],
        s = ["text", "file"],
        l = ["once", "hourly", "daily", "weekly", "monthly"],
        d = ["male", "female", "secret"],
        c = ["user", "recruiter"],
        x = ["islam", "protestan", "katolik", "hindu", "budha", "konghucu", "secret"];
    },
    70399: () => {},
  },
]);
//# sourceMappingURL=779.1c3924c3.chunk.js.map
