const { calculateAverage } = require("../src/reportProcessor");

describe("calculateAverage", () => {
  test("retourne la moyenne des valeurs quand le rapport est valide", () => {
    const report = { values: [10, 20, 30] };

    const result = calculateAverage(report);

    expect(result).toBe(20);
  });

  test("lève une erreur si le rapport est invalide", () => {
    expect(() => calculateAverage(null)).toThrow("Invalid report format");
  });
});
