import { useState } from "react";
import SiteLogo from "./Components/SiteLogo.tsx";
import { LeaveCostCalc } from "/Users/David/Developer/Paternity leave/paternity-leave/src/Components/calculation";

function App() {
  const [salary, setSalary] = useState("100000");
  const [totalLeave, setTotalLeave] = useState("40");
  const [companyPaidLeave, setCompanyPaidLeave] = useState("12");
  const [result, setResult] = useState(LeaveCostCalc(0, 0, 0, 0));

  const handleButtonClick = () => {
    console.log("I ran");
    const salaryValue = parseFloat(salary);
    const totalLeaveValue = parseFloat(totalLeave);
    const companyPaidLeaveValue = parseFloat(companyPaidLeave);
    setResult(
      LeaveCostCalc(salaryValue, totalLeaveValue, companyPaidLeaveValue, 20)
    );
    function showResult() {
      const element = document.getElementById("resultSection"); // Get the DIV element
      element?.classList.remove("hidden"); // Remove mystyle class from DIV
      element?.classList.add("block"); // Add newone class to DIV
    }
    showResult();
  };

  return (
    //
    <div className="mx-auto max-w-7xl p-4 lg:pt-8">
      <nav className="flex justify-center">
        <a href="#">
          <SiteLogo />
        </a>
      </nav>

      {/* Hero area */}
      <div className="my-10 md:my-20">
        <h1 className="text-slate-800 text-3xl md:text-5xl font-semibold mb-2 text-center">
          Uncover the <span className="bg-purple-200 px-0.5">true cost</span> of
          your parental leave
        </h1>
        <p className="text-slate-600 text-lg md:text-2xl font-regular text-center">
          See why your you should xxx...
        </p>
        <div>
          <form className="bg-white w-80 m-auto mt-8">
            {/* input */}
            <label className="block text-gray-700 text-sm font-bold mt-8 mb-1">
              Annual salary
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salary"
              type="number"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            ></input>

            {/* input */}
            <label className="block text-gray-700 text-sm font-bold mt-8 mb-1">
              Total leave (in weeks)
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="total-leave"
              type="number"
              value={totalLeave}
              onChange={(e) => setTotalLeave(e.target.value)}
            ></input>

            {/* input */}
            <label className="block text-gray-700 text-sm font-bold mt-8 mb-1">
              Company paid leave
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company-paid-leave"
              type="number"
              value={companyPaidLeave}
              onChange={(e) => setCompanyPaidLeave(e.target.value)}
            ></input>
          </form>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleButtonClick()}
            className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-700 px-6 md:px-8 py-2 mt-2 mr-2 text-m md:text-xl rounded-full font-medium text-white"
          >
            Calculate true cost
          </button>
        </div>

        {/* Results go here */}
        <div className=" mt-16 hidden" id="resultSection">
          <p className="text-slate-800 text-l md:text-xl px-0.5 font-semibold text-center">
            The cost of your parental leave is
          </p>
          <p className="text-slate-800 text-3xl md:text-5xl font-semibold mb-2 text-center bg-purple-200 px-0.5">
            ${result.summary.total}
          </p>
          <p className="text-slate-800 text-l md:text-xl px-0.5 font-semibold text-center">
            in lost income.
          </p>

          <h2>Summary</h2>
          <p className="text-slate-800 text-md md:text-lg px-0.5">
            You’re taking {result.leaveDetail.totalLeave} weeks of parental
            leave. {result.leaveDetail.companyPaidLeave} weeks paid by your
            employer. {result.leaveDetail.govPaidLeave} weeks paid by the
            government and {result.leaveDetail.unpaidLeave} weeks unpaid.
          </p>

          <h2 className="mt-8">Calculation details</h2>
          <p className="text-slate-800 text-md md:text-lg px-0.5">
            Lost income: ${result.summary.lostIncome}
          </p>
          <p className="text-slate-800 text-md md:text-lg px-0.5">
            Lost super: ${result.summary.lostSuper}
          </p>
          <p className="text-slate-800 text-md md:text-lg px-0.5">
            Gained income: ${result.summary.gainedIncome}
          </p>
          <p className="text-slate-800 text-md md:text-lg px-0.5">
            Gained super: ${result.summary.gainedSuper}
          </p>
        </div>
      </div>
      {}
    </div>
  );
}

export default App;
