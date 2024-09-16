import {
  _ as o,
  r,
  c as l,
  a,
  t as c,
  n as u,
  F as _,
  o as d,
} from "./index-BKKPWFq7.js";
const m = {
    __name: "Counter",
    setup(p) {
      const e = r(0),
        n = () => {
          e.value++;
        },
        s = () => {
          e.value--;
        };
      return (i, t) => (
        d(),
        l(
          _,
          null,
          [
            t[0] || (t[0] = a("h1", null, "Hola mundo", -1)),
            a("button", { onClick: s, class: "btn btn-less" }, "-"),
            a(
              "p",
              { class: u({ green: e.value >= 0, red: e.value < 0 }) },
              c(e.value),
              3
            ),
            a("button", { onClick: n, class: "btn btn-add" }, "+"),
          ],
          64
        )
      );
    },
  },
  v = o(m, [["__scopeId", "data-v-9eb5888a"]]);
export { v as default };
