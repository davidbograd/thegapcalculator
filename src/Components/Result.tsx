import { useState } from "react";
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
  outcome,
  primary,
  secondary,
  // personData,
  hasPartner,
  resultShowing,
}) => {
  // if
  let resultsOpacityClass = resultShowing ? "mt-16" : "mt-16 opacity-50";
  const [detailAccordionIsOpen, setDetailAccordionIsOpen] = useState(false);

  const toggleAccordion = () => {
    setDetailAccordionIsOpen(!detailAccordionIsOpen);
  };

  return (
    <div className={resultsOpacityClass}>
      <div id="calculatedResult">
        <div className="flex flex-col items-center">
          {resultShowing ? (
            <p className="text-stone-800 text-lg md:text-xl px-0.5 font-bold text-center">
              {hasPartner
                ? "The cost of your combined parental leave is"
                : "The cost of your parental leave is"}
            </p>
          ) : (
            <p className="text-stone-800 text-lg md:text-xl px-0.5 font-bold text-center">
              Add details to see your parental leave cost
            </p>
          )}
          {resultShowing ? (
            <p className="text-stone-800 text-4xl md:text-5xl font-bold mb-2 text-center bg-purple-200 inline p-2 my-2">
              {numberFormatted(outcome)}
            </p>
          ) : (
            <p className="text-stone-800 text-4xl md:text-5xl font-bold mb-2 text-center bg-purple-200 inline p-2 my-2">
              $?
            </p>
          )}
          {resultShowing && (
            <p className="text-stone-800 text-lg md:text-xl px-0.5 font-bold text-center">
              in lost income.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row justify-between gap-4 mt-8">
        <div
          id="calculationDetails"
          className="p-6 flex-1 bg-stone-100 rounded-md"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-stone-700 font-bold text-xl">Primary carer</h2>
            <p className="text-stone-700 text-xl font-bold text-center bg-purple-200 inline p-1">
              {!resultShowing ? "?" : numberFormatted(primary.outcome)}
            </p>
          </div>

          <ResultSingleLine
            label="Total lost"
            lineNumber={-primary.lost.total}
            resultShowing={resultShowing}
            style={2}
            toggleAccordion={toggleAccordion}
          />
          {detailAccordionIsOpen && (
            <>
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
            </>
          )}

          <ResultSingleLine
            label="Total parental leave pay"
            lineNumber={primary.pay.total}
            resultShowing={resultShowing}
            style={2}
            toggleAccordion={toggleAccordion}
          />
          {detailAccordionIsOpen && (
            <>
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
            </>
          )}

          {/* {resultShowing ? (
            <p className="text-stone-800 px-0.5 mt-4">
              {personData[0].totalLeave} weeks of parental leave.{" "}
              {personData[0].companyPaidLeave} weeks paid by your employer.{" "}
              {personData[0].governmentPaidLeave} weeks paid by the government
              and {primary.unpaidLeave} weeks unpaid.
            </p>
          ) : null} */}
        </div>

        {hasPartner && (
          <div
            id="calculationDetails"
            className="p-6 flex-1 bg-stone-100 rounded-md"
          >
            <div className="flex justify-between">
              <h2 className="text-stone-700 font-bold text-xl">
                Secondary carer
              </h2>
              <p className="text-stone-700 text-xl font-bold text-center bg-purple-200 inline p-1">
                {!resultShowing ? "?" : numberFormatted(secondary.outcome)}
              </p>
            </div>

            <ResultSingleLine
              label="Total lost"
              lineNumber={-secondary.lost.total}
              resultShowing={resultShowing}
              style={2}
              toggleAccordion={toggleAccordion}
            />

            {detailAccordionIsOpen && (
              <>
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
              </>
            )}

            <ResultSingleLine
              label="Total parental leave pay"
              lineNumber={secondary.pay.total}
              resultShowing={resultShowing}
              style={2}
              toggleAccordion={toggleAccordion}
            />

            {detailAccordionIsOpen && (
              <>
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
              </>
            )}

            {/* {resultShowing ? (
              <p className="text-stone-800 px-0.5 mt-4">
                {personData[1].totalLeave} weeks of parental leave.{" "}
                {personData[1].companyPaidLeave} weeks paid by your employer.{" "}
                {personData[1].governmentPaidLeave} weeks paid by the government
                and {secondary.unpaidLeave} weeks unpaid.
              </p>
            ) : null} */}
          </div>
        )}
      </div>
      {resultShowing && (
        <button
          onClick={() => toggleAccordion()}
          className="mt-4 bg-stone-100 hover:bg-stone-200 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-stone-200 px-6 md:px-8 py-3 md:text-lg rounded-lg font-normal w-full"
        >
          {detailAccordionIsOpen
            ? "Hide calculation details"
            : "Show calculation details"}
        </button>
      )}
    </div>
  );
};

export default Result;
