"use strict";
(self.webpackChunkchat = self.webpackChunkchat || []).push([
  [252],
  {
    18986: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(96446);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { flexGrow: 1, height: "90dvh", width: "100%" };
      });
    },
    88780: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(19252);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };
      });
    },
    87476: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(39336);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { marginBottom: "20px", width: "100%", border: "1px solid #f7bd00" };
      });
    },
    55174: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(96446);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        };
      });
    },
    56861: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(96446);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { overflowY: "scroll", height: "100%", width: "100%" };
      });
    },
    23613: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(78977);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
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
    48824: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(88911);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          height: "95%",
          width: "inherit",
          justifyContent: "center",
          flexDirection: "row",
        };
      });
    },
    73576: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(88911);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { width: "100%", height: "100%", flexDirection: "column" };
      });
    },
    47122: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(88911);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { width: "100%", flexDirection: "row" };
      });
    },
    75595: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(85865);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return { fontSize: "14px", "&:first-letter": { textTransform: "capitalize" } };
      });
    },
    72360: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(85865);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          fontSize: "20px",
          fontWeight: 600,
          "&:first-letter": { textTransform: "capitalize" },
        };
      });
    },
    43274: (e, r, t) => {
      t.d(r, { A: () => i });
      var n = t(96446);
      const i = (0, t(34535).Ay)(n.A)((e) => {
        let { theme: r } = e;
        return {
          backgroundColor: "#fff",
          borderRadius: "25px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "20px",
        };
      });
    },
    41252: (e, r, t) => {
      t.r(r), t.d(r, { default: () => T });
      var n = t(65043),
        i = t(18986),
        s = t(88780),
        d = t(48824),
        c = t(43274),
        l = t(72360),
        a = t(73576),
        o = t(47122),
        h = t(96446),
        x = t(81045),
        A = t(23613),
        m = t(56861),
        g = t(55174),
        j = t(73216),
        u = t(35475),
        p = t(65239),
        f = t.n(p),
        v = t(37762),
        w = t(83003),
        y = t(63326),
        b = t(60984),
        C = t(60446),
        k = t.n(C),
        N = t(87476),
        F = t(80688),
        I = t(75595),
        D = t(70579);
      const T = () => {
        const e = (0, n.useRef)(null),
          { username: r } = (0, j.g)(),
          t = (0, w.wA)();
        (0, n.useEffect)(() => {
          t((0, y.x0)(r));
        }, []);
        const { user: p } = (0, w.d4)((e) => e.app);
        return (0, D.jsx)(i.A, {
          children: (0, D.jsx)(s.A, {
            maxWidth: "md",
            children: (0, D.jsx)(d.A, {
              gap: 3,
              children: (0, D.jsx)(c.A, {
                children: (0, D.jsxs)(a.A, {
                  gap: 2,
                  children: [
                    (0, D.jsxs)(o.A, {
                      sx: { alignItems: "center" },
                      children: [
                        (0, D.jsx)(l.A, { children: "Profile Resume" }),
                        (0, D.jsx)(h.A, { sx: { flexGrow: 1 } }),
                        (0, D.jsx)(A.A, {
                          onClick: () => {
                            f()(e.current, { useCORS: !0 }).then((e) => {
                              let r = new Image();
                              (r.src = e.toDataURL("image/png")),
                                (r.onload = () => {
                                  const e = new v.uE("p", "mm", "a4", !0),
                                    t = e.getImageProperties(r);
                                  let n = e.internal.pageSize.getWidth(),
                                    i = e.internal.pageSize.getHeight(),
                                    s = (t.height * n) / t.width;
                                  e.addImage(r, "PNG", 0, 0, n, s),
                                    s >= i &&
                                      (e.addPage(),
                                      (s = 0),
                                      e.addImage(r, "PNG", 0, 0, n, s)),
                                    e.save("".concat(p.username, "_resume.pdf"));
                                });
                            });
                          },
                          sx: { width: "100px" },
                          children: "Download",
                        }),
                      ],
                    }),
                    (0, D.jsx)(m.A, {
                      sx: {
                        borderWidth: "2px 0px 0px 0px",
                        borderStyle: "solid",
                        borderColor: "#252525",
                      },
                      children: (0, D.jsxs)(g.A, {
                        id: "divToPrint",
                        ref: e,
                        gap: 2,
                        sx: { padding: "30px" },
                        children: [
                          (0, D.jsx)(h.A, {
                            sx: { gridColumn: "span 2", gridRow: "span 1" },
                            children: (0, D.jsx)(x.A, {
                              alt: null === p || void 0 === p ? void 0 : p.username,
                              src: null === p || void 0 === p ? void 0 : p.avatar,
                              sx: { width: 100, height: 100 },
                            }),
                          }),
                          (0, D.jsx)(h.A, {
                            sx: { gridColumn: "span 10" },
                            children: (0, D.jsxs)(a.A, {
                              gap: 1,
                              sx: { justifyContent: "center" },
                              children: [
                                (0, D.jsx)(l.A, {
                                  children: ""
                                    .concat(p.firstName, " ")
                                    .concat(p.lastName),
                                }),
                                (0, D.jsxs)(o.A, {
                                  gap: 1,
                                  sx: { alignItems: "center" },
                                  children: [
                                    (0, D.jsx)(I.A, {
                                      sx: {
                                        "&:first-letter": { textTransform: "lowercase" },
                                      },
                                      children: "".concat(p.email),
                                    }),
                                    void 0 !== p.phoneNumber &&
                                      (0, D.jsxs)(D.Fragment, {
                                        children: [
                                          (0, D.jsx)(b.A, { children: "|" }),
                                          (0, D.jsx)(I.A, {
                                            children: "".concat(p.phoneNumber),
                                          }),
                                        ],
                                      }),
                                    0 !== p.socialmedias.length &&
                                      (0, D.jsxs)(D.Fragment, {
                                        children: [
                                          (0, D.jsx)(b.A, { children: "|" }),
                                          (0, D.jsx)(I.A, { children: "Chairoon: " }),
                                          (0, D.jsx)(u.N_, {
                                            to: ""
                                              .concat(F.ET, "./ch/")
                                              .concat(p.username),
                                            children: (0, D.jsx)(I.A, {
                                              sx: {
                                                "&:first-letter": {
                                                  textTransform: "lowercase",
                                                },
                                              },
                                              children: "@".concat(p.username),
                                            }),
                                          }),
                                        ],
                                      }),
                                    0 !== p.profileWeb.length &&
                                      (0, D.jsxs)(D.Fragment, {
                                        children: [
                                          (0, D.jsx)(b.A, { children: "|" }),
                                          (0, D.jsx)(I.A, { children: "Web: " }),
                                          p.profileWeb.map((e) =>
                                            (0, D.jsx)(u.N_, {
                                              to: "".concat(e.linkUrl),
                                              children: (0, D.jsx)(I.A, {
                                                children: "".concat(e.linkName),
                                              }),
                                            })
                                          ),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, D.jsxs)(o.A, {
                                  gap: 1,
                                  sx: { alignItems: "center" },
                                  children: [
                                    void 0 !== p.city &&
                                      (0, D.jsx)(D.Fragment, {
                                        children: (0, D.jsx)(I.A, {
                                          children: "".concat(p.city, ", "),
                                        }),
                                      }),
                                    void 0 !== p.country &&
                                      (0, D.jsx)(D.Fragment, {
                                        children: (0, D.jsx)(I.A, {
                                          children: "".concat(p.country),
                                        }),
                                      }),
                                    void 0 !== p.birthday &&
                                      (0, D.jsxs)(D.Fragment, {
                                        children: [
                                          (0, D.jsx)(b.A, { children: "|" }),
                                          (0, D.jsx)(I.A, {
                                            children: "".concat(
                                              k()(p.birthday).format("ddd, DD MMM YYYY")
                                            ),
                                          }),
                                        ],
                                      }),
                                    void 0 !== p.gender &&
                                      "secret" !== p.gender &&
                                      (0, D.jsxs)(D.Fragment, {
                                        children: [
                                          (0, D.jsx)(b.A, { children: "|" }),
                                          (0, D.jsx)(I.A, {
                                            children: "".concat(p.gender),
                                          }),
                                        ],
                                      }),
                                    void 0 !== p.religion &&
                                      "secret" !== p.religion &&
                                      (0, D.jsxs)(D.Fragment, {
                                        children: [
                                          (0, D.jsx)(b.A, { children: "|" }),
                                          (0, D.jsx)(I.A, {
                                            children: "".concat(p.religion),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, D.jsx)(h.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, D.jsx)(N.A, { sx: { mb: "0px" } }),
                          }),
                          (0, D.jsx)(h.A, {
                            sx: { gridColumn: "span 12" },
                            children: (0, D.jsxs)(a.A, {
                              gap: 1,
                              children: [
                                (0, D.jsx)(l.A, { children: "About Me" }),
                                (0, D.jsx)(h.A, {
                                  sx: { ml: "20px" },
                                  children: (0, D.jsx)(I.A, { children: p.about }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=252.7635c517.chunk.js.map
