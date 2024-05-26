import { numberFormatted } from "./numberFormatter";

interface Props {
  outcome: number;
  primary: {
    outcome: number;
    income: number;
    super: number;
    unpaidLeave: number;
  };
  secondary: {
    outcome: number;
    income: number;
    super: number;
    unpaidLeave: number;
  };
  personData: {
    carer: string;
    annualSalary: string;
    totalLeave: string;
    companyPaidLeave: string;
    governmentPaidLeave: string;
  }[];
  hasPartner: boolean;
  resultShowing: boolean;
}

const Result: React.FC<Props> = ({
  // summary,
  // unpaidLeave,
  outcome,
  primary,
  secondary,
  personData,
  hasPartner,
  resultShowing,
}) => {
  return (
    <div className="mt-16">
      {resultShowing ? (
        <div id="calculatedResult">
          <div className="flex flex-col items-center">
            <p className="text-slate-800 text-l md:text-xl px-0.5 font-bold text-center center">
              {hasPartner
                ? "The cost of your combined parental leave is"
                : "The cost of your parental leave is"}
            </p>
            <p className="text-slate-800 text-3xl md:text-5xl font-bold mb-2 text-center bg-purple-200 px-0.5 inline p-2 my-2">
              ${numberFormatted(outcome)}
            </p>
            <p className="text-slate-800 text-l md:text-xl px-0.5 font-bold text-center">
              in lost income.
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex justify-between gap-4 mt-8">
        <div
          id="calculationDetails"
          className="p-6 flex-1 bg-zinc-100 rounded-md"
        >
          <h2 className="text-xs text-slate-500 font-bold mb-4">
            PRIMARY CARER
          </h2>

          {resultShowing ? (
            <p className="text-slate-800 px-0.5">
              {personData[0].totalLeave} weeks of parental leave.{" "}
              {personData[0].companyPaidLeave} weeks paid by your employer.{" "}
              {personData[0].governmentPaidLeave} weeks paid by the government
              and {secondary.unpaidLeave} weeks unpaid.
            </p>
          ) : null}

          <div className="flex justify-between pt-2">
            <p className="text-slate-700 font-bold">Total impact</p>
            {!resultShowing ? (
              <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                ?
              </p>
            ) : (
              <p className="text-slate-700 font-bold">
                ${numberFormatted(primary.outcome)}
              </p>
            )}
          </div>

          <div className="flex justify-between pt-2">
            <p className="text-slate-700 font-normal">Income</p>
            {!resultShowing ? (
              <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                ?
              </p>
            ) : (
              <p className="text-slate-700 font-bold">
                ${numberFormatted(primary.income)}
              </p>
            )}
          </div>

          <div className="flex justify-between pt-2">
            <p className="text-slate-700 font-normal">Super</p>
            {!resultShowing ? (
              <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                ?
              </p>
            ) : (
              <p className="text-slate-700 font-bold">
                ${numberFormatted(primary.super)}
              </p>
            )}
          </div>
        </div>

        {hasPartner ? (
          <div
            id="calculationDetails"
            className="p-6 flex-1 bg-zinc-100 rounded-md"
          >
            <h2 className="text-xs text-slate-500 font-bold mb-4">
              SECONDARY CARER
            </h2>

            {resultShowing ? (
              <p className="text-slate-800 px-0.5">
                {personData[1].totalLeave} weeks of parental leave.{" "}
                {personData[1].companyPaidLeave} weeks paid by your employer.{" "}
                {personData[1].governmentPaidLeave} weeks paid by the government
                and {secondary.unpaidLeave} weeks unpaid.
              </p>
            ) : null}

            <div className="flex justify-between pt-2">
              <p className="text-slate-700 font-bold">Total impact</p>
              {!resultShowing ? (
                <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                  ?
                </p>
              ) : (
                <p className="text-slate-700 font-bold">
                  ${numberFormatted(secondary.outcome)}
                </p>
              )}
            </div>

            <div className="flex justify-between pt-2">
              <p className="text-slate-700 font-normal">Income</p>
              {!resultShowing ? (
                <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                  ?
                </p>
              ) : (
                <p className="text-slate-700 font-bold">
                  ${numberFormatted(secondary.income)}
                </p>
              )}
            </div>

            <div className="flex justify-between pt-2">
              <p className="text-slate-700 font-normal">Super</p>
              {!resultShowing ? (
                <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                  ?
                </p>
              ) : (
                <p className="text-slate-700 font-bold">
                  ${numberFormatted(secondary.super)}
                </p>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Result;
