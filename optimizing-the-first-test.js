function formatToNumber(number, decimalCount = 3, type = "round", fixed = 6) {
  return Number(
    Math[type](
      Number(Number(number)?.toFixed(Math.max(fixed, decimalCount + 2))) *
        Math.pow(10, decimalCount)
    ) / Math.pow(10, decimalCount)
  );
}

let errors = `Errors: `;

function log(index, isSuccess, { a, b, calculateNetWeight }, answer, calc) {
  if (isSuccess) {
    console.log(
      `\t👍 [${index}]: A: ${Number(a)?.toFixed(3)}, \tB: ${Number(b)?.toFixed(
        3
      )}, \tAnswer: ${Number(answer)?.toFixed(
        3
      )}, \tCalculateNetWeight: ${Number(calculateNetWeight)?.toFixed(
        3
      )}, JsCalculate: ${calc}`
    );
  } else {
    let err = `\t⛔️ [${index}]: A: ${Number(a)?.toFixed(3)}, \tB: ${Number(
      b
    )?.toFixed(3)}, \tAnswer: ${Number(answer)?.toFixed(
      3
    )}, \tCalculateNetWeight: ${Number(calculateNetWeight)?.toFixed(
      3
    )}, JsCalculate: ${calc}`;
    console.error(err);
    errors = `\n${err}`;
  }
}

function describe(callbackFunction) {
  console.log("**********Test function formatANumber**********");
  for (let i = 100; i <= 300; i++) {
    for (let j = 100; j <= 300; j++) {
      const a = Number(`0.${i}`);
      const b = Number(`0.${j}`);
      const calc = a + b;
      const answer = callbackFunction(calc, 3);
      const calculateNetWeight = (i + j) / 1000;
      log(
        `${i}_${j}`,
        answer === calculateNetWeight,
        { a, b, calculateNetWeight },
        answer,
        calc
      );
    }
  }
  console.log(errors);
}

describe(formatToNumber);
