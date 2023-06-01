function formatANumber(number, decimalCount = 3, type = "round", fixed = 6) {
  return Number(
    Math[type](
      Number(number)?.toFixed(Math.max(fixed, decimalCount + 2)) *
        Math.pow(10, decimalCount)
    ) / Math.pow(10, decimalCount)
  );
}

const test = [
  {
    decimalCount: 3,
    type: "round",
    a: 0.3,
    b: 0.04,
    answer: 0.34,
  },
  {
    decimalCount: 3,
    type: "round",
    a: 0.1,
    b: 0.2,
    answer: 0.3,
  },
  {
    decimalCount: 3,
    type: "round",
    a: 0.1,
    b: 0.7,
    answer: 0.8,
  },
  {
    decimalCount: 3,
    type: "round",
    a: 0.1,
    b: 1.1,
    answer: 1.2,
  },
  {
    decimalCount: 3,
    type: "round",
    a: 0.1,
    b: 1.3,
    answer: 1.4,
  },
  {
    decimalCount: 3,
    type: "round",
    a: 0.1,
    b: 1.6,
    answer: 1.7,
  },
];

function log(isSuccess, item) {
  if (isSuccess) {
    console.log(
      `\t👍: A: ${item?.a}, \t\tB: ${item?.b}, \t\tAnswer: ${item?.answer}`
    );
  } else {
    console.error(
      `\t⛔️: A: ${item?.a}, \t\tB: ${item?.b}, \t\tAnswer: ${item?.answer}`
    );
  }
}

function describe(list = [], callbackFunction) {
  console.log("**********Test**********");
  for (const item of list) {
    const answer = callbackFunction(
      item?.a + item?.b,
      item?.decimalCount,
      item?.type
    );
    log(item?.answer === answer, item);
  }
}

describe(test, formatANumber);
