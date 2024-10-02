import { FaSearch } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

function App() {

  return (
    <>
      <div>
        <div className='bg-primary text-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white py-10'>
          <h1>Weather Dashboard</h1>
        </div>
        <div className="flex flex-row w-full">
          <div className="bg-primary-light w-[360px] min-h-screen px-6 pt-4 max-w-[40%] md:flex hidden">
            <div className="col-lg-3 bg-light">
              <h5 className="text-xl text-gray font-medium">Search for a City:</h5>
              <div className="flex flex-row mb-3 gap-0">
                <input type="text" className="px-2 ring-0 border border-[#CDD0D5] py-2 text-sm w-full max-w-full rounded-s-md text-gray" placeholder="Enter a city" aria-label="Enter a city" />
                <button className="flex flex-row items-center bg-primary py-2.5 px-3 -ml-3 text-white rounded-e-md" type="button">
                  <FaSearch />
                </button>
              </div>
              <button className="bg-primary text-white w-full text-sm py-2.5 rounded-md" type="button" id="clear-history">Clear history</button>
              <form id="history"></form>
            </div>
          </div>
          <div className="bg-white  flex-grow px-6 pt-5">
            <div className="border border-gray min-w-full">
              <div className="p-5">
                <h1 className="text-2xl mb-2 font-medium">Lagos</h1>
                <div>
                  <FaCloud className="text-5xl my-3 text-primary" />
                </div>
                <div className="space-y-3">
                  <p>Temperature: 86 °F</p>
                  <p>Humidity: 70%</p>
                  <p>Wind Speed: 3.74 MPH</p>
                  <p>UV Index: 12.84</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-2xl mb-2 font-medium">7-Day Forecast</h1>
              <div className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-3">
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                  <div className=" border border-primary bg-primary text-white p-4">
                    <p>10/3/2024</p>
                    <div>
                      <FaCloud className="text-5xl my-3 text-primary-light" />
                    </div>
                    <p>Temp: 75 °F</p>
                    <p>Humidity: 94%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
