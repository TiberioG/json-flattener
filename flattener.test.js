const flattener = require("./flattener");
const largeJson = require("./testJson/large-file.json");
const obj = {
  a: 1,
  b: true,
  c: {
    d: 3,
    e: "test",
    f: {
      g: {
        h: {
          i: {
            j: {
              k: {
                l: {
                  m: {
                    n: {
                      o: {
                        p: {
                          q: "deep",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          r: "",
        },
      },
    },
  },
};

const objWithNull = {
  a: null,
  b: {
    c: null,
    d: null,
    e: {
      f: null,
    },
  },
};

const objWithUndefined = {
  a: undefined,
  b: {
    c: undefined,
    d: undefined,
    e: {
      f: undefined,
    },
  },
};

describe("FUNCTIONAL implementation suite", function () {
  const target = flattener.func;
  test("output should be a valid JSON (large mock)", () => {
    expect(typeof target(largeJson)).toBe("object");
  });

  test("output is flat object: aka every value is not a obj", () => {
    expect(
      Object.values(target(obj)).every((val) => typeof val !== "object")
    ).toBe(true);
  });

  test("output is flat object: aka every value is not a obj (large)", () => {
    expect(
      Object.values(target(largeJson)).every((val) => typeof val !== "object")
    ).toBe(true);
  });

  test("output is as expected", () => {
    expect(target(obj)["c.f.g.h.i.j.k.l.m.n.o.p.q"]).toBe("deep");
  });

  test("values null are stringified", () => {
    expect(
      Object.values(target(objWithNull)).every((val) => val === "null")
    ).toBe(true);
  });

  test("values undefined are kept undefined", () => {
    expect(
      Object.values(target(objWithUndefined)).every((val) => val === undefined)
    ).toBe(true);
  });
}); //end Functional suite

/*
IMPERATIVE SUITE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/
describe("IMPERATIVE implementation suite", function () {
  const target = flattener.imp;
  test("output should be a valid JSON (large mock)", () => {
    expect(typeof target(largeJson)).toBe("object");
  });

  test("output is flat object: aka every value is not a obj", () => {
    expect(
      Object.values(target(obj)).every((val) => typeof val !== "object")
    ).toBe(true);
  });

  test("output is flat object: aka every value is not a obj (large)", () => {
    expect(
      Object.values(target(largeJson)).every((val) => typeof val !== "object")
    ).toBe(true);
  });

  test("output is as expected", () => {
    expect(target(obj)["c.f.g.h.i.j.k.l.m.n.o.p.q"]).toBe("deep");
  });

  test("values null are stringified", () => {
    expect(
      Object.values(target(objWithNull)).every((val) => val === "null")
    ).toBe(true);
  });

  test("values undefined are kept undefined", () => {
    expect(
      Object.values(target(objWithUndefined)).every((val) => val === undefined)
    ).toBe(true);
  });
}); //end Functional suite
