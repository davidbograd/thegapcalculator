import CarwreckerCard from "./Components/CarwreckerCard";
import SiteLogo from "./Components/Icons/SiteLogo.tsx";
import carwreckers from "./carwreckerData";

function App() {
  return (
    // Car wreckers section
    // space-x-8
    <div className="mx-auto max-w-7xl p-4">
      <nav>
        <SiteLogo />
      </nav>

      {/* Hero area */}
      <div className="my-10 md:my-20">
        <h1 className="text-slate-800 text-3xl md:text-5xl font-semibold mb-2">
          Find the car wrecker in Perth for you
        </h1>
        <p className="text-slate-600 text-lg md:text-2xl font-regular">
          Easy access to {carwreckers.length} car wreckers in Perth, Western
          Australia
        </p>
        <div className="flex flex-wrap mt-4 md:mt-8">
          <a href="https://tally.so/r/3xpJPr" target="_blank">
            <button className="bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-700 px-6 md:px-8 py-2 mt-2 mr-2 text-m md:text-xl rounded-full font-medium text-white">
              Find car parts
            </button>
          </a>
          <a href="https://tally.so/r/npKD7q" target="_blank">
            <button className="bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-700 px-6 md:px-8 py-2 mt-2 text-m md:text-xl rounded-full font-medium text-white">
              Sell your car
            </button>
          </a>
        </div>
      </div>

      {/* Carwrecker overview section */}
      <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carwreckers.map((carwrecker, key) => {
          return (
            <CarwreckerCard
              key={key}
              wreckername={carwrecker.wreckername}
              address={carwrecker.address}
              email={carwrecker.email}
              phone={carwrecker.phone}
              website={carwrecker.website}
              url={carwrecker.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
