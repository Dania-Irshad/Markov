const { MarkovMachine } = require("./markov");

describe("markov functions", function () {
    test("make chains", function () {
        let mm = new MarkovMachine("the cat in the hat");
        expect(mm.chains).toEqual(new Map([
            ["the", ["cat", "hat"]],
            ["cat", ["in"]],
            ["in", ["the"]],
            ["hat", [null]]
        ]));
    });

    test("make text", function () {
        let mm = new MarkovMachine("the cat in the hat");
        let output = mm.makeText();
        expect(output.endsWith('hat')).toBe(true);
    });
});