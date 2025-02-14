'use strict';

const populationList = Array.from(document.querySelectorAll('.population')).map(
  (node) => node.textContent,
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = populationList.reduce(
  (pref, number) => pref + convertToNumber(number),
  0,
);
const average = total / populationList.length;

totalPopulation.textContent = total;
averagePopulation.textContent = average;

function convertToNumber(string) {
  let result = '';

  for (const ch of string) {
    if (ch === ',') {
      continue;
    }

    result += ch;
  }

  return Number(result);
}
