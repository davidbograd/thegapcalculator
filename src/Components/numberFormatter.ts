// Round numbers to 2 decimal points
function numberRounded(x: number) {
  return x.toFixed(2);
}

// Add , every thousands
function numberWithCommas(x: string) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format numbers
export function numberFormatted(x: number) {
  const isNegative = x < 0;
  const absoluteValue = Math.abs(x);
  const roundedNumber = numberRounded(absoluteValue);
  const numberWithCommasResult = numberWithCommas(roundedNumber);

  return isNegative
    ? // if negative, put minus before
      `-$${numberWithCommasResult}`
    : // if positive, put plus before
      `+$${numberWithCommasResult}`;
}
