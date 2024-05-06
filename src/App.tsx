import { useState } from "react";
import SiteLogo from "./Components/SiteLogo.tsx";
import { LeaveCostCalc } from "./Components/calculation.ts";
import Field, { justTesting } from "./Components/Field";

function App() {
  const [peopleData, setPeopleData] = useState([
    { salary: "", totalLeave: "", companyPaidLeave: "" },
  ]);

  // These will go into field.tsx
  const [salary, setSalary] = useState("");
  const [totalLeave, setTotalLeave] = useState("");
  const [companyPaidLeave, setCompanyPaidLeave] = useState("");

  const [result, setResult] = useState(() => LeaveCostCalc(0, 0, 0, 0));
  const [resultShowing, setResultShowing] = useState(false);

  // Restrict input to numbers
  const handleChange = (
    inputValue: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const inputRegex = /^[0-9]*$/; // Regular expression to match only numbers

    if (inputRegex.test(inputValue) || inputValue === "") {
      setValue(inputValue);
    }
  };

  const handleButtonClick = () => {
    console.log("Clickhandler ran");
    console.log(justTesting);
    if (salary == "" || totalLeave == "" || companyPaidLeave == "") {
      alert("Please fill in all details");
      return;
    } else {
      const salaryValue = parseFloat(salary);
      const totalLeaveValue = parseFloat(totalLeave);
      const companyPaidLeaveValue = parseFloat(companyPaidLeave);
      setResult(
        LeaveCostCalc(salaryValue, totalLeaveValue, companyPaidLeaveValue, 20)
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
      <Field
        id="0"
        carer="primary"
        dataPoint="salary"
        label="Annual salary"
        placeholder="Enter annual salary"
      />
      <Field
        id="1"
        carer="primary"
        dataPoint="total leave"
        label="Total leave in weeks"
        placeholder="Eg 40"
      />

      {/* Hero area */}
      <div className="my-10 md:my-20">
        <h1 className="text-slate-800 text-3xl md:text-4xl  font-bold mb-2 text-center">
          Uncover the <span className="bg-purple-200 px-0.5">true cost</span> of
          your parental leave
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium text-center mt-4">
          Understand it. Get ideas how to deal with it in.
        </p>

        <div>
          {/* primary input */}
          <div className="p-6 rounded-md border">
            <p className="text-xs text-slate-500 font-bold mb-4">
              PRIMARY CARER
            </p>
            <form name="form" className="flex gap-4">
              {/* Primary */}
              {/* input */}
              <div className="border-r">
                <label
                  htmlFor="salary"
                  className="text-gray-700 text-base font-bold mb-1"
                >
                  Annual salary
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center text-gray-700">
                    $
                  </span>
                  <input
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                    id="salary"
                    type="text"
                    required
                    value={salary}
                    onChange={(e) => handleChange(e.target.value, setSalary)}
                    placeholder="Enter annual salary"
                    name="salary"
                  />
                </div>
              </div>

              {/* input */}
              <div className="border-r">
                <label
                  htmlFor="total-leave"
                  className="block text-gray-700 text-base font-bold mb-1"
                >
                  Total leave (in weeks)
                </label>
                <div className="relative">
                  <input
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="total-leave"
                    type="text"
                    required
                    value={totalLeave}
                    onChange={(e) =>
                      handleChange(e.target.value, setTotalLeave)
                    }
                    placeholder="Eg '40'"
                    name="totalLeave"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    weeks
                  </span>
                </div>
              </div>

              <div className="border-r">
                <label
                  htmlFor="company-paid-leave"
                  className="block text-gray-700 font-bold mb-1"
                >
                  Company paid leave
                </label>
                <div className="relative">
                  <input
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company-paid-leave"
                    type="text"
                    required
                    value={companyPaidLeave}
                    onChange={(e) =>
                      handleChange(e.target.value, setCompanyPaidLeave)
                    }
                    placeholder="Eg '4'"
                    name="companyLeave"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    weeks
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* primary input */}
          <div className="p-6 mt-4 rounded-md border">
            <p className="text-xs text-slate-500 font-bold mb-4">
              SECONDARY CARER
            </p>
            <form name="form" className="flex gap-4">
              {/* Primary */}
              {/* input */}
              <div className="border-r">
                <label
                  htmlFor="salary"
                  className="text-gray-700 text-base font-bold mb-1"
                >
                  Annual salary
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center text-gray-700">
                    $
                  </span>
                  <input
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                    id="salary"
                    type="text"
                    required
                    value={salary}
                    onChange={(e) => handleChange(e.target.value, setSalary)}
                    placeholder="Enter annual salary"
                    name="salary"
                  />
                </div>
              </div>

              {/* input */}
              <div className="border-r">
                <label
                  htmlFor="total-leave"
                  className="block text-gray-700 text-base font-bold mb-1"
                >
                  Total leave (in weeks)
                </label>
                <div className="relative">
                  <input
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="total-leave"
                    type="text"
                    required
                    value={totalLeave}
                    onChange={(e) =>
                      handleChange(e.target.value, setTotalLeave)
                    }
                    placeholder="Eg '4'"
                    name="totalLeave"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    weeks
                  </span>
                </div>
              </div>

              <div className="border-r">
                <label
                  htmlFor="company-paid-leave"
                  className="block text-gray-700 font-bold mb-1"
                >
                  Company paid leave
                </label>
                <div className="relative">
                  <input
                    className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company-paid-leave"
                    type="text"
                    required
                    value={companyPaidLeave}
                    onChange={(e) =>
                      handleChange(e.target.value, setCompanyPaidLeave)
                    }
                    placeholder="Eg '2'"
                    name="companyLeave"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    weeks
                  </span>
                </div>
              </div>
            </form>
          </div>

          <button
            onClick={() => handleButtonClick()}
            className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-700 px-6 md:px-8 py-2 mt-2 mr-2 text-m md:text-xl rounded-full font-normal text-white"
          >
            Calculate true cost
          </button>

          {/* two sections */}
          <div className="max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            {/* calculator */}
          </div>

          {/* Result */}
          <div className="mt-16 md:mt-0">
            <p
              id="resultPlaceholder"
              className="text-slate-800 px-0.5 text-center"
            >
              Enter your details to see your true cost.
            </p>

            <div className="hidden" id="calculatedResult">
              <div className="flex flex-col items-center">
                <p className="text-slate-800 text-l md:text-xl px-0.5 font-bold text-center center">
                  The cost of your parental leave is
                </p>
                <p className="text-slate-800 text-3xl md:text-5xl font-bold mb-2 text-center bg-purple-200 px-0.5 inline p-2 my-2">
                  ${result.summary.total}
                </p>
                <p className="text-slate-800 text-l md:text-xl px-0.5 font-bold text-center">
                  in lost income.
                </p>
              </div>
              <div className="my-6">
                <h2 className="font-bold mb-1">Summary</h2>
                <p className="text-slate-800 px-0.5">
                  You’re taking {result.leaveDetail.totalLeave} weeks of
                  parental leave. {result.leaveDetail.companyPaidLeave} weeks
                  paid by your employer. {result.leaveDetail.govPaidLeave} weeks
                  paid by the government and {result.leaveDetail.unpaidLeave}{" "}
                  weeks unpaid.
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
                  <p className="text-slate-700 font-bold">
                    ${result.summary.lostIncome}
                  </p>
                )}
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-slate-700 font-normal">Lost super</p>
                {!resultShowing ? (
                  <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                    ?
                  </p>
                ) : (
                  <p className="text-slate-700 font-bold">
                    ${result.summary.lostSuper}
                  </p>
                )}
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-slate-700 font-normal">Gained income</p>

                {!resultShowing ? (
                  <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                    ?
                  </p>
                ) : (
                  <p className="text-slate-700 font-bold">
                    ${result.summary.gainedIncome}
                  </p>
                )}
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-slate-700 font-normal">Gained super</p>
                {!resultShowing ? (
                  <p className="bg-slate-500 inline-block w-24 text-center text-sm font-bold rounded-md text-white">
                    ?
                  </p>
                ) : (
                  <p className="text-slate-700 font-bold">
                    ${result.summary.gainedSuper}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
