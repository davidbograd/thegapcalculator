import { numberFormatted } from "./numberFormatter";

interface Props {
  label: string;
  lineNumber: number;
  resultShowing: boolean;
  style: number;
  toggleAccordion?: () => void;
}

const ResultSingleLine = ({
  label,
  lineNumber,
  resultShowing,
  style,
  toggleAccordion,
}: Props) => {
  // If results isn't showing and style is 2, return null
  if (!resultShowing && style !== 2) {
    return null;
  }

  let standardLine = {
    labelStyle: "",
    numberStyleNotShown: "",
    numberStyleShown: "",
  };
  // Standard line
  if (style === 1) {
    standardLine = {
      labelStyle: "pl-4 text-stone-600 font-normal",
      numberStyleNotShown:
        "bg-stone-600 inline-block w-24 text-center text-sm font-bold rounded-md text-white",
      numberStyleShown: "text-stone-600",
    };
    // subTitle for sections headers in calc
  } else {
    standardLine = {
      labelStyle: "text-stone-700 font-bold text-md",
      numberStyleNotShown:
        "text-center text-sm font-bold rounded-md text-stone-500",
      numberStyleShown: "text-stone-700 font-bold",
    };
    // Title is the last option
  }

  let marginSpacing =
    style === 1 ? "flex justify-between mt-1" : "flex justify-between mt-4";

  return (
    <div
      className={marginSpacing}
      {...(toggleAccordion && { onClick: toggleAccordion })}
    >
      <p className={standardLine.labelStyle}>{label}</p>
      {!resultShowing ? (
        <p className={standardLine.numberStyleNotShown}>$?</p>
      ) : (
        <p className={standardLine.numberStyleShown}>
          {numberFormatted(lineNumber)}
        </p>
      )}
    </div>
  );
};

export default ResultSingleLine;
