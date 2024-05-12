import { useState } from "react";

interface Props {
  summary: {
    [key: string]: any;
  };
  unpaidLeave: number;
  personData: {
    carer: string;
    annualSalary: string;
    totalLeave: string;
    companyPaidLeave: string;
    governmentPaidLeave: string;
  };
}

const Result: React.FC<Props> = ({ summary, unpaidLeave, personData }) => {
  const [resultShowing, setResultShowing] = useState(true);

  return (
    <div className="mt-16 md:mt-0">
      <p id="resultPlaceholder" className="text-slate-800 px-0.5 text-center">
        Enter your details to see your true cost.
      </p>

      <div className="hidden" id="calculatedResult">
        <div className="flex flex-col items-center">
          <p className="text-slate-800 text-l md:text-xl px-0.5 font-bold text-center center">
            The cost of your parental leave is
          </p>
          <p className="text-slate-800 text-3xl md:text-5xl font-bold mb-2 text-center bg-purple-200 px-0.5 inline p-2 my-2">
            ${summary.total}
          </p>
          <p className="text-slate-800 text-l md:text-xl px-0.5 font-bold text-center">
            in lost income.
          </p>
        </div>
        <div className="my-6">
          <h2 className="font-bold mb-1">Summary</h2>
          <p className="text-slate-800 px-0.5">
            You’re taking {personData.totalLeave} weeks of parental leave.{" "}
            {personData.companyPaidLeave} weeks paid by your employer.{" "}
            {personData.governmentPaidLeave} weeks paid by the government and{" "}
            {unpaidLeave} weeks unpaid.
          </p>
        </div>
      </div>
      <div
        id="calculationDetails"
        className="bg-zinc-100 p-6 rounded-md mt-4 opacity-50"
      >
        <h2 className="text-xs text-slate-500 font-bold mb-4">
          CALCULATION DETAILS
        </h2>
        <div className="flex justify-between pt-2">
          <p className="text-slate-700 font-normal">Lost income</p>
          {!resultShowing ? (
            <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
              ?
            </p>
          ) : (
            <p className="text-slate-700 font-bold">${summary.lostIncome}</p>
          )}
        </div>
        <div className="flex justify-between pt-2">
          <p className="text-slate-700 font-normal">Lost super</p>
          {!resultShowing ? (
            <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
              ?
            </p>
          ) : (
            <p className="text-slate-700 font-bold">${summary.lostSuper}</p>
          )}
        </div>
        <div className="flex justify-between pt-2">
          <p className="text-slate-700 font-normal">Gained income</p>

          {!resultShowing ? (
            <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
              ?
            </p>
          ) : (
            <p className="text-slate-700 font-bold">${summary.gainedIncome}</p>
          )}
        </div>
        <div className="flex justify-between pt-2">
          <p className="text-slate-700 font-normal">Gained super</p>
          {!resultShowing ? (
            <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
              ?
            </p>
          ) : (
            <p className="text-slate-700 font-bold">${summary.gainedSuper}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
