interface LeaveData {
  [key: string]: any;
}

export function LeaveCostCalc(
  // leaveDataArray is testing to pass an object with all details for both people
  leaveDataArray: LeaveData[],
  hasPartner: boolean
) {
  const leaveDetailsIndividual = [
    {
      salary: leaveDataArray[0].annualSalary,
      totalLeave: leaveDataArray[0].totalLeave,
      companyPaidLeave: leaveDataArray[0].companyPaidLeave,
      govPaidLeave: leaveDataArray[0].governmentPaidLeave,
      unpaidLeave:
        leaveDataArray[0].totalLeave -
        leaveDataArray[0].companyPaidLeave -
        leaveDataArray[0].governmentPaidLeave,
    },
    {
      salary: leaveDataArray[1].annualSalary,
      totalLeave: leaveDataArray[1].totalLeave,
      companyPaidLeave: leaveDataArray[1].companyPaidLeave,
      govPaidLeave: leaveDataArray[1].governmentPaidLeave,
      unpaidLeave:
        leaveDataArray[1].totalLeave -
        leaveDataArray[1].companyPaidLeave -
        leaveDataArray[1].governmentPaidLeave,
    },
  ];

  const leaveDetailsCombined = {
    salary: leaveDetailsIndividual[0].salary + leaveDetailsIndividual[1].salary,
  };

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

  function calculateForIndividual(index: number) {
    // Set company paid rate per individal
    const companyPaidWeekRate = leaveDetailsIndividual[index].salary / 52;

    // Set fixed super rate
    const superannuationRate = 0.11;
    // Set gov rate depending on hasPartner, and different rates if true.
    // If salary for single is over $168865, set gov paid to 0.
    // If salary for couple is over $350000, set gov paid to 0.
    const govWeekRate = hasPartner
      ? leaveDetailsCombined.salary > 350000
        ? 0
        : 882.75
      : leaveDetailsIndividual[0].salary > 168865
      ? 0
      : 882.75;

    let govPaidCalc = IncomeAndLossCalculator(
      leaveDetailsIndividual[index].govPaidLeave,
      govWeekRate,
      0
    );
    let companyPaidCalc = IncomeAndLossCalculator(
      leaveDetailsIndividual[index].companyPaidLeave,
      companyPaidWeekRate,
      superannuationRate
    );
    let lostPayCalc = IncomeAndLossCalculator(
      leaveDetailsIndividual[index].totalLeave,
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

    const individualData = {
      outcome: incomeTotals.total - lostTotals.total,
      income: incomeTotals.income - lostTotals.income,
      lost: {
        income: lostTotals.income,
        super: lostTotals.super,
        total: lostTotals.income + lostTotals.super,
      },
      pay: {
        employer: companyPaidCalc.income,
        super: companyPaidCalc.super,
        government: govPaidCalc.income,
        total:
          companyPaidCalc.income + companyPaidCalc.super + govPaidCalc.income,
      },
      super: incomeTotals.super - lostTotals.super,
      unpaidLeave: leaveDetailsIndividual[index].unpaidLeave,
    };

    return individualData;
  }

  const calculatedPrimary = calculateForIndividual(0);
  const calculatedSecondary = calculateForIndividual(1);
  const calculatedCombined = hasPartner
    ? calculatedPrimary.outcome + calculatedSecondary.outcome
    : calculatedPrimary.outcome;

  const LeaveCostResult = {
    combined: calculatedCombined,
    primary: calculatedPrimary,
    secondary: calculatedSecondary,
  };
  return LeaveCostResult;
}
