import { useState } from "react";
import SiteLogo from "./Components/SiteLogo.tsx";
import { LeaveCostCalc } from "/Users/David/Developer/Paternity leave/paternity-leave/src/Components/calculation";

function App() {
  console.log("App ran");
  const [salary, setSalary] = useState("");
  const [totalLeave, setTotalLeave] = useState("");
  const [companyPaidLeave, setCompanyPaidLeave] = useState("");
  const [result, setResult] = useState(() => LeaveCostCalc(0, 0, 0, 0));
  const [resultShowing, setResultShowing] = useState(false);

  const handleButtonClick = () => {
    console.log("Clickhandler ran");
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

      {/* Hero area */}
      <div className="my-10 md:my-20">
        <h1 className="text-slate-800 text-3xl md:text-4xl  font-bold mb-2 text-center">
          Uncover the <span className="bg-purple-200 px-0.5">true cost</span> of
          your parental leave
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium text-center mt-4">
          Understand it. Get ideas how to deal with it in.
        </p>

        {/* two sections */}
        <div className="max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {/* calculator */}
          <div className="max-w-sm bg-zinc-100 p-6 rounded-md">
            <form className="" name="form">
              {/* input */}
              <label
                htmlFor="salary"
                className="block text-gray-700 text-base font-bold mb-1"
              >
                Annual salary
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">
                  $
                </span>
                <input
                  className="border rounded w-full py-2 pl-8 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="salary"
                  type="text"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter annual salary"
                  name="salary"
                />
              </div>

              {/* input */}
              <label
                htmlFor="total-leave"
                className="block text-gray-700 text-base font-bold mt-8 mb-1"
              >
                Total leave (in weeks)
              </label>
              <div className="relative">
                <input
                  className="border rounded w-full py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="total-leave"
                  type="text"
                  required
                  value={totalLeave}
                  onChange={(e) => setTotalLeave(e.target.value)}
                  placeholder="Eg '26'"
                  name="totalLeave"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                  weeks
                </span>
              </div>

              {/* input */}
              <label
                htmlFor="company-paid-leave"
                className="block text-gray-700 font-bold mt-8 mb-1"
              >
                Company paid leave
              </label>
              <div className="relative">
                <input
                  className="border rounded w-full py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="company-paid-leave"
                  type="text"
                  required
                  value={companyPaidLeave}
                  onChange={(e) => setCompanyPaidLeave(e.target.value)}
                  placeholder="Eg '4'"
                  name="companyLeave"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                  weeks
                </span>
              </div>
            </form>
            <button
              onClick={() => handleButtonClick()}
              className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-700 px-6 md:px-8 py-2 mt-2 mr-2 text-m md:text-xl rounded-full font-normal text-white"
            >
              Calculate true cost
            </button>
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
