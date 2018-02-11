const {sum} = require("./index");

test("Equals four when adding two and two", function () {
    expect(sum(0, {
        type: "SUM",
        number: 2
    })).toBe(2);
});
