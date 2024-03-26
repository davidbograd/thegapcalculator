import CarwreckerCard from "./Components/CarwreckerCard";
import SiteLogo from "./Components/Icons/SiteLogo.tsx";
import carwreckers from "./carwreckerData";

function App() {
  return (
    // Car wreckers section
    <div className="mx-auto max-w-7xl p-4 lg:pt-8">
      <nav className="flex items-center justify-between">
        <a href="#">
          <SiteLogo />
        </a>
        <div className="">
          <a
            href="#"
            className="text-md lg:text-lg font-semibold text-slate-700 hover:text-sky-500 mr-4 lg:mr-8"
          >
            Find parts
          </a>
          <a
            href="#"
            className="text-md lg:text-lg font-semibold text-slate-700 hover:text-sky-500"
          >
            Sell car
          </a>
        </div>
      </nav>

      {/* Hero area */}
      <div className="my-10 md:my-20">
        <h1 className="text-slate-800 text-3xl md:text-5xl font-semibold mb-2">
          Find the car part you need
        </h1>
        <p className="text-slate-600 text-lg md:text-2xl font-regular">
          We'll contact {carwreckers.length} car wreckers across Perth to find
          your part. 100% free.
        </p>
        <div className="flex flex-wrap mt-4 md:mt-8">
          <a href="https://tally.so/r/3xpJPr" target="_blank">
            <button className="bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700 px-6 md:px-8 py-2 mt-2 mr-2 text-m md:text-xl rounded-full font-medium text-white">
              Find car parts
            </button>
          </a>
        </div>
      </div>

      <h2>Prefer to contact Perth wreckers on your own?</h2>
      <p>
        {" "}
        If you prefer to contact wreckers on your own, here's the contact
        details for wreckers in Perth.
      </p>
      {/* Carwrecker overview section */}
      <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carwreckers
          // Sort alphabetically
          .sort((a, b) => (a.wreckername > b.wreckername ? 1 : -1))
          .map((carwrecker, key) => {
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
