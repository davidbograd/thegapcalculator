// Round numbers to 2 decimal points
function numberRounded(x: number) {
  return x.toFixed(2);
}

// Add , every thousands
function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format numbers
export function numberFormatted(x: number) {
  const roundedNumber = numberRounded(x);
  const numberWithCommasResult = numberWithCommas(roundedNumber);
  return numberWithCommasResult;
}
