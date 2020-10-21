'use strict';

const useBootnative = require("../src");

describe("typography", () => {
  it("headers", () => {
    const bn = useBootnative();
    expect(bn("h1")).toStrictEqual({ fontSize: 44 });
    expect(bn("h2")).toStrictEqual({ fontSize: 38 });
    expect(bn("h3")).toStrictEqual({ fontSize: 32 });
    expect(bn("h4")).toStrictEqual({ fontSize: 26 });
    expect(bn("h5")).toStrictEqual({ fontSize: 20 });
    expect(bn("h6")).toStrictEqual({ fontSize: 14 });
  });
  it("u", () => {
    const bn = useBootnative();
    expect(bn("s")).toStrictEqual({ textDecorationLine: "line-through" });
    expect(bn("u")).toStrictEqual({ textDecorationLine: "underline" });
    expect(bn("em")).toStrictEqual({ fontStyle: "italic" });
    expect(bn("b")).toStrictEqual({ fontWeight: "bold" });
    expect(bn("mark")).toStrictEqual({ backgroundColor: "#FBC230" });
    expect(bn("mark-danger")).toStrictEqual({ backgroundColor: "#DD4145" });
  });
});
