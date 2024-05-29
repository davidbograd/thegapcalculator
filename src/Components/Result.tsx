import { numberFormatted } from "./numberFormatter";
import ResultSingleLine from "./ResultSingleLine";

interface CarerData {
  outcome: number;
  income: number;
  lost: {
    income: number;
    super: number;
    total: number;
  };
  pay: {
    employer: number;
    super: number;
    government: number;
    total: number;
  };
  super: number;
  unpaidLeave: number;
}

interface Props {
  outcome: number;
  primary: CarerData;
  secondary: CarerData;
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
  // personData,
  hasPartner,
  resultShowing,
}) => {
  return (
    <div className="mt-16">
      {resultShowing ? (
        <div id="calculatedResult">
          <div className="flex flex-col items-center">
            <p className="text-stone-800 text-l md:text-xl px-0.5 font-bold text-center center">
              {hasPartner
                ? "The cost of your combined parental leave is"
                : "The cost of your parental leave is"}
            </p>
            <p className="text-stone-800 text-3xl md:text-5xl font-bold mb-2 text-center bg-purple-200 inline p-2 my-2">
              ${numberFormatted(outcome)}
            </p>
            <p className="text-stone-800 text-l md:text-xl px-0.5 font-bold text-center">
              in lost income.
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap flex-col md:flex-row justify-between gap-4 mt-8">
        <div
          id="calculationDetails"
          className="p-6 flex-1 bg-stone-100 rounded-md"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-stone-700 font-bold text-xl">Primary carer</h2>
            <p className="text-stone-700 text-xl font-bold text-center bg-purple-200 inline p-1">
              ${!resultShowing ? "?" : numberFormatted(primary.outcome)}
            </p>
          </div>

          <ResultSingleLine
            label="Total parental leave pay"
            lineNumber={primary.pay.total}
            resultShowing={resultShowing}
            style={2}
          />
          <ResultSingleLine
            label="Pay (employer)"
            lineNumber={primary.pay.employer}
            resultShowing={resultShowing}
            style={1}
          />

          <ResultSingleLine
            label="Pay (government)"
            lineNumber={primary.pay.government}
            resultShowing={resultShowing}
            style={1}
          />

          <ResultSingleLine
            label="Super (employer)"
            lineNumber={primary.pay.super}
            resultShowing={resultShowing}
            style={1}
          />

          <ResultSingleLine
            label="Total lost"
            lineNumber={-primary.lost.total}
            resultShowing={resultShowing}
            style={2}
          />

          <ResultSingleLine
            label="Income lost"
            lineNumber={-primary.lost.income}
            resultShowing={resultShowing}
            style={1}
          />

          <ResultSingleLine
            label="Super lost"
            lineNumber={-primary.lost.super}
            resultShowing={resultShowing}
            style={1}
          />

          {/* {resultShowing ? (
            <p className="text-stone-800 px-0.5 mt-4">
              {personData[0].totalLeave} weeks of parental leave.{" "}
              {personData[0].companyPaidLeave} weeks paid by your employer.{" "}
              {personData[0].governmentPaidLeave} weeks paid by the government
              and {primary.unpaidLeave} weeks unpaid.
            </p>
          ) : null} */}
        </div>

        {hasPartner ? (
          <div
            id="calculationDetails"
            className="p-6 flex-1 bg-stone-100 rounded-md"
          >
            <div className="flex justify-between">
              <h2 className="text-stone-700 font-bold text-xl">
                Secondary carer
              </h2>
              <p className="text-stone-700 text-xl font-bold text-center bg-purple-200 inline p-1">
                ${!resultShowing ? "?" : numberFormatted(secondary.outcome)}
              </p>
            </div>

            <ResultSingleLine
              label="Total parental leave pay"
              lineNumber={secondary.pay.total}
              resultShowing={resultShowing}
              style={2}
            />
            <ResultSingleLine
              label="Pay (employer)"
              lineNumber={secondary.pay.employer}
              resultShowing={resultShowing}
              style={1}
            />

            <ResultSingleLine
              label="Pay (government)"
              lineNumber={secondary.pay.government}
              resultShowing={resultShowing}
              style={1}
            />

            <ResultSingleLine
              label="Super (employer)"
              lineNumber={secondary.pay.super}
              resultShowing={resultShowing}
              style={1}
            />

            <ResultSingleLine
              label="Total lost"
              lineNumber={-secondary.lost.total}
              resultShowing={resultShowing}
              style={2}
            />

            <ResultSingleLine
              label="Income lost"
              lineNumber={-secondary.lost.income}
              resultShowing={resultShowing}
              style={1}
            />

            <ResultSingleLine
              label="Super lost"
              lineNumber={-secondary.lost.super}
              resultShowing={resultShowing}
              style={1}
            />

            {/* {resultShowing ? (
              <p className="text-stone-800 px-0.5 mt-4">
                {personData[1].totalLeave} weeks of parental leave.{" "}
                {personData[1].companyPaidLeave} weeks paid by your employer.{" "}
                {personData[1].governmentPaidLeave} weeks paid by the government
                and {secondary.unpaidLeave} weeks unpaid.
              </p>
            ) : null} */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Result;
