export function LeaveCostCalc(
  salary: number,
  totalLeaveWeeks: number,
  companyPaidLeaveWeeks: number,
  govPaidLeaveWeeks: number
) {
  // Format numbers
  function numberFormatted(x: number) {
    // Round numbers to 2 decimal points
    function numberRounded(x: number) {
      return x.toFixed(2);
    }
    // Add , every thousands
    function numberWithCommas(x: any) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const roundedNumber = numberRounded(x);
    const numberWithCommasResult = numberWithCommas(roundedNumber);
    return numberWithCommasResult;
  }

  const LeaveDetails = {
    salary: salary,
    totalLeave: totalLeaveWeeks,
    companyPaidLeave: companyPaidLeaveWeeks,
    govPaidLeave: govPaidLeaveWeeks,
    unpaidLeave: totalLeaveWeeks - companyPaidLeaveWeeks - govPaidLeaveWeeks,
  };

  const superannuationRate = 0.11;
  // If salary is over $168865, set gov paid to 0.
  const govWeekRate = LeaveDetails.salary > 168865 ? 0 : 882.75;
  const companyPaidWeekRate = LeaveDetails.salary / 52;

  function IncomeAndLossCalculator(
    weeks: number,
    weekRate: number,
    superRate: number
  ) {
    const income = weeks * weekRate;
    const superannuation = income * superRate;
    const total = income + superannuation;
    return {
      income: income,
      super: superannuation,
      total: total,
    };
  }
  let govPaidCalc = IncomeAndLossCalculator(
    LeaveDetails.govPaidLeave,
    govWeekRate,
    0
  );
  let companyPaidCalc = IncomeAndLossCalculator(
    LeaveDetails.companyPaidLeave,
    companyPaidWeekRate,
    superannuationRate
  );
  let lostPayCalc = IncomeAndLossCalculator(
    LeaveDetails.totalLeave,
    companyPaidWeekRate,
    superannuationRate
  );

  let lostTotals = {
    income: lostPayCalc.income,
    super: lostPayCalc.super,
    total: lostPayCalc.total,
  };

  let incomeTotals = {
    income: govPaidCalc.income + companyPaidCalc.income,
    super: govPaidCalc.super + companyPaidCalc.super,
    total: govPaidCalc.total + companyPaidCalc.total,
  };

  let summaryTotals = {
    total: incomeTotals.total - lostTotals.total,
    lostIncome: lostTotals.income,
    lostSuper: lostTotals.super,
    gainedIncome: incomeTotals.income,
    gainedSuper: incomeTotals.super,
  };

  function formatObjectValues(obj: { [key: string]: any }): {
    [key: string]: any;
  } {
    // Create a new object to store the updated values
    let newObj: { [key: string]: any } = {};
    // Iterate over each property in the object
    for (let key in obj) {
      // Check if the property value is a number
      newObj[key] = numberFormatted(obj[key]);
    }
    // Return the new object with updated values
    return newObj;
  }

  const LeaveCostResult = {
    summary: formatObjectValues(summaryTotals),
    unpaidLeave: LeaveDetails.unpaidLeave,
  };
  return LeaveCostResult;
}
