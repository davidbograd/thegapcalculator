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
      annualSalary: "",
      totalLeave: "",
      companyPaidLeave: "",
      governmentPaidLeave: "18",
    },
    {
      carer: "Secondary",
      annualSalary: "",
      totalLeave: "",
      companyPaidLeave: "",
      governmentPaidLeave: "2",
    },
  ]);

  // converts to strings to numbers, when possible.
  function convertToNumberIfPossible(value: any): any {
    // Check if the value is a string and if it represents a number
    if (typeof value === "string" && !isNaN(Number(value))) {
      return Number(value); // Convert the string to a number
    }
    return value; // Return the value as is if it's not a number string
  }

  function formatObjectValues(obj: { [key: string]: any }): {
    [key: string]: any;
  } {
    // Create a new object to store the updated values
    let newObj: { [key: string]: any } = {};
    // Iterate over each property in the object
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Convert the property value to number if possible
        newObj[key] = convertToNumberIfPossible(obj[key]);
      }
    }
    // Return the new object with updated values
    return newObj;
  }

  // Converting the strings to numbers to pass into calculation.ts
  let formattedPersonData = personData.map(formatObjectValues);

  const [hasPartner, setHasPartner] = useState(false);
  const [resultShowing, setResultShowing] = useState(false);

  const handlePartnerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasPartner(event.target.value === "yes");
  };

  const handlePersonDataChange = (
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
  const [resultData, setResultData] = useState(
    LeaveCostCalc(formattedPersonData, hasPartner)
  );

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
    // Check if primary person input is empty
    if (
      personData[0].annualSalary == "" ||
      personData[0].totalLeave == "" ||
      personData[0].companyPaidLeave == ""
    ) {
      alert("Please fill in all details");
      return;
    } else {
      // New calc
      const updatedResultData = LeaveCostCalc(
        // parseFloat(personData[0].annualSalary),
        formattedPersonData,
        hasPartner
      );

      // Set the new calc to resultData
      setResultData(updatedResultData);
      // Set resultShowing to true
      setResultShowing(true);
    }
  };

  return (
    //
    <div className="mx-auto max-w-5xl p-4 lg:pt-6">
      <nav className="flex justify-center">
        <a href="#">
          <SiteLogo />
        </a>
      </nav>

      {/* Hero area */}
      <div className="my-10 md:my-16">
        <h1 className="text-slate-800 text-3xl md:text-4xl  font-bold mb-2 text-center">
          Uncover the <span className="bg-purple-200 px-0.5">true cost</span> of
          your parental leave
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium text-center mt-4">
          Understand it. Get ideas how to deal with it in.
        </p>
        <Person
          key={0}
          person={personData[0]}
          index={0}
          handlePersonDataChange={handlePersonDataChange}
          handlePartnerChange={handlePartnerChange}
        />
        {/* If hasPartner is set to yes, render input for secondary */}
        {hasPartner && (
          <Person
            key={1}
            person={personData[1]}
            index={1}
            handlePersonDataChange={handlePersonDataChange}
            handlePartnerChange={handlePartnerChange}
          />
        )}
        <div>
          <button
            onClick={() => handleButtonClick()}
            className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-700 px-6 md:px-8 py-2 mr-2 text-m md:text-xl rounded-full font-normal text-white"
          >
            Calculate true cost
          </button>

          <Result
            outcome={resultData.combined}
            primary={resultData.primary}
            secondary={resultData.secondary}
            personData={personData}
            hasPartner={hasPartner}
            resultShowing={resultShowing}

            // handlePartnerChange={handlePartnerChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
