import useBootnative from "../src";

describe("typography", () => {
  it("headers", () => {
    const bn = useBootnative();
    expect(bn("h1")).toStrictEqual({ fontSize: "44px" });
    expect(bn("h2")).toStrictEqual({ fontSize: "38px" });
    expect(bn("h3")).toStrictEqual({ fontSize: "32px" });
    expect(bn("h4")).toStrictEqual({ fontSize: "26px" });
    expect(bn("h5")).toStrictEqual({ fontSize: "20px" });
    expect(bn("h6")).toStrictEqual({ fontSize: "14px" });
  });
  it("u", () => {
    const bn = useBootnative();
    expect(bn("s")).toStrictEqual({ textDecoration: "line-through" });
    expect(bn("u")).toStrictEqual({ textDecoration: "underline" });
    expect(bn("em")).toStrictEqual({ fontStyle: "italic" });
    expect(bn("bold")).toStrictEqual({ fontWeight: "bold" });
    expect(bn("mark")).toStrictEqual({ backgroundColor: "#FBC230" });
    expect(bn("mark-danger")).toStrictEqual({ backgroundColor: "#DD4145" });
  });
});
