import { useState } from "react";
import SiteLogo from "./Components/SiteLogo.tsx";
import { LeaveCostCalc } from "./Components/calculation.ts";
import Person from "./Components/Person.tsx";
import Result from "./Components/Result.tsx";

function App() {
  // State for each person
  const [personData, setPersonData] = useState([
    {
      carer: "Primary",
      annualSalary: "100000",
      totalLeave: "40",
      companyPaidLeave: "8",
      governmentPaidLeave: "18",
    },
    {
      carer: "Secondary",
      annualSalary: "50000",
      totalLeave: "4",
      companyPaidLeave: "2",
      governmentPaidLeave: "2",
    },
  ]);

  const handleValueChange = (
    newValue: string,
    index: number,
    field:
      | "annualSalary"
      | "totalLeave"
      | "companyPaidLeave"
      | "governmentPaidLeave"
  ) => {
    setPersonData((prevState) => {
      const updatedPersonData = [...prevState];
      updatedPersonData[index][field] = newValue;
      return updatedPersonData;
    });
  };

  const [result, setResult] = useState(() => LeaveCostCalc(0, 0, 0, 0));
  const [resultTwo, setResultTwo] = useState(() => LeaveCostCalc(0, 0, 0, 0));
  const [resultShowing, setResultShowing] = useState(false);

  // Restrict input to numbers
  // const handleChange = (
  //   inputValue: string,
  //   setValue: React.Dispatch<React.SetStateAction<string>>
  // ) => {
  //   const inputRegex = /^[0-9]*$/; // Regular expression to match only numbers

  //   if (inputRegex.test(inputValue) || inputValue === "") {
  //     setValue(inputValue);
  //   }
  // };

  const handleButtonClick = () => {
    console.log("Clickhandler ran");
    if (
      personData[0].annualSalary == "" ||
      personData[0].totalLeave == "" ||
      personData[0].companyPaidLeave == ""
    ) {
      alert("Please fill in all details");
      return;
    } else {
      const salaryValue = parseFloat(personData[0].annualSalary);
      const totalLeaveValue = parseFloat(personData[0].totalLeave);
      const companyPaidLeaveValue = parseFloat(personData[0].companyPaidLeave);
      const governmentPaidLeave = parseFloat(personData[0].governmentPaidLeave);
      setResult(
        LeaveCostCalc(
          salaryValue,
          totalLeaveValue,
          companyPaidLeaveValue,
          governmentPaidLeave
        )
      );
      const salaryValueTwo = parseFloat(personData[1].annualSalary);
      const totalLeaveValueTwo = parseFloat(personData[1].totalLeave);
      const companyPaidLeaveValueTwo = parseFloat(
        personData[1].companyPaidLeave
      );
      const governmentPaidLeaveTwo = parseFloat(
        personData[1].governmentPaidLeave
      );
      setResultTwo(
        LeaveCostCalc(
          salaryValueTwo,
          totalLeaveValueTwo,
          companyPaidLeaveValueTwo,
          governmentPaidLeaveTwo
        )
      );

      function showResult() {
        setResultShowing(true);

        const element = document.getElementById("calculatedResult"); // Get the DIV element
        element?.classList.remove("hidden"); // Remove hide class

        const placeholder = document.getElementById("resultPlaceholder"); // Get the DIV element
        placeholder?.classList.add("hidden"); // Add hide class

        const calculationDetails =
          document.getElementById("calculationDetails"); // Get the DIV element
        calculationDetails?.classList.remove("opacity-50"); // Remove opacity class
      }
      showResult();
    }
  };

  return (
    //
    <div className="mx-auto max-w-5xl p-4 lg:pt-8">
      <nav className="flex justify-center">
        <a href="#">
          <SiteLogo />
        </a>
      </nav>

      {/* Hero area */}
      <div className="my-10 md:my-20">
        <h1 className="text-slate-800 text-3xl md:text-4xl  font-bold mb-2 text-center">
          Uncover the <span className="bg-purple-200 px-0.5">true cost</span> of
          your parental leave
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium text-center mt-4">
          Understand it. Get ideas how to deal with it in.
        </p>

        {personData.map((person, index) => (
          <Person
            key={index}
            person={person}
            index={index}
            handleValueChange={handleValueChange}
          />
        ))}

        <div>
          <button
            onClick={() => handleButtonClick()}
            className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-700 px-6 md:px-8 py-2 mt-2 mr-2 text-m md:text-xl rounded-full font-normal text-white"
          >
            Calculate true cost
          </button>

          <Result
            summary={result.summary}
            unpaidLeave={result.unpaidLeave}
            personData={personData[0]}
          />

          <Result
            summary={resultTwo.summary}
            unpaidLeave={resultTwo.unpaidLeave}
            personData={personData[1]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
