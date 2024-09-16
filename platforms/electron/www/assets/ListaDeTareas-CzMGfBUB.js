import {
  r as i,
  c as l,
  a as t,
  w as c,
  v as d,
  b as m,
  F as _,
  d as T,
  o as n,
  e as k,
  t as y,
} from "./index-BKKPWFq7.js";
const f = ["onClick"],
  w = {
    __name: "ListaDeTareas",
    setup(g) {
      const r = i([]),
        e = i(""),
        p = () => {
          r.value.push(e.value), (e.value = "");
        },
        v = (o) => {
          r.value.splice(o, 1);
        };
      return (o, a) => (
        n(),
        l("div", null, [
          a[1] || (a[1] = t("h2", null, "Lista de tareas", -1)),
          c(
            t(
              "input",
              {
                "onUpdate:modelValue": a[0] || (a[0] = (s) => (e.value = s)),
                onKeyup: m(p, ["enter"]),
                type: "text",
              },
              null,
              544
            ),
            [[d, e.value]]
          ),
          t("ul", null, [
            (n(!0),
            l(
              _,
              null,
              T(
                r.value,
                (s, u) => (
                  n(),
                  l("li", { key: "tatarea_" + u }, [
                    k(y(s) + " ", 1),
                    t("button", { onClick: (x) => v(u) }, "X", 8, f),
                  ])
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  };
export { w as default };
