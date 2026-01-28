function calculateAverage(report) {
  if (!report || !Array.isArray(report.values)) {
    throw new Error("Invalid report format");
  }

  if (report.values.length === 0) {
    return 0;
  }

  const sum = report.values.reduce((total, value) => {
    if (typeof value !== "number") {
      throw new Error("Report values must be numbers");
    }
    return total + value;
  }, 0);

  return sum / report.values.length;
}

module.exports = {
  calculateAverage,
};
