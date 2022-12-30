import Container from "../layout/Container";
import { BsCheck } from "react-icons/bs";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-96  rounded-rull">
      <Container>
        <div className="flex flex-col  justify-center items-center ">
          <img
            className="rounded-full w-32 h-32"
            src="data:image/jpeg;base64,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"
            alt="vandam uuuuuu"
          />
          <h3 className="text-xl ml-3 text-white font-bold mt-5 flex-row flex justify-evenly  items-center">
            Razhan omed Osman{" "}
            <div className="rounded-full ml-2 bg-blue-600 p-1">
              <BsCheck className=" font-bold" />
            </div>
          </h3>
          <h3 className="text-sm text-gray-200 font-bold ">
            Razhanomed2@gmail.com{" "}
          </h3>

          <div className=" mt-20 mx-auto ">
            <div
              className="flex  items-center justify-center mx-auto 
            bg-gray-200  rounded-lg p-4"
            >
              <h2 className="text-gray-500 hover:text-gray-700 text-lg p-4 tracking-tight	">
                my name is Razhan Omed osman I'm 20 years old I was born in
                sulaymaniyah I'm a student at the university of sulaymaniyah in
                the faculty of computer science
              </h2>
            </div>
          </div>

          <div className=" mt-20  ">
            <div className="bg-gray-100   py-4 rounded-lg px-4 space-y-8">
              <div
                className="flex flex-row  items-center justify-between
              "
              >
                <div className="flex  flex-row items-center ">
                  <a
                    href="https://www.snapchat.com/add/razhanomedd?share_id=2Om4t8xKScuxcVf5dbeZkg&locale=en_US&sid=27ecdf7db16a4983b18ad671472e1366"
                    className="flex justify-center items-center space-x-3 cursor-pointer"
                  >
                    <img
                      className="w-6 h-6"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <h2 className="text-yellow-500 font-bold text-lg ">
                      Razhanomedd
                    </h2>
                  </a>
                </div>
              </div>

              <div
                className="flex flex-row  items-center justify-between
              "
              >
                <div className="flex  flex-row items-center ">
                  <a
                    href="https://www.youtube.com/@razhanomed6970"
                    className="flex justify-center items-center space-x-3 cursor-pointer"
                  >
                    <img
                      className="w-6 h-6"
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                      alt=""
                    />
                    <h2 className="text-red-500 font-bold text-lg ">
                      Razhan omed
                    </h2>
                  </a>
                </div>
                <h2 className="text-pink-500 text-xl">3000</h2>
              </div>

              {/* instegram */}
              <div
                className="flex flex-row  items-center justify-between
              "
              >
                <div className="flex  flex-row items-center ">
                  <a
                    href="https://www.instagram.com/razh4an/"
                    className="flex justify-center items-center space-x-3 cursor-pointer"
                  >
                    <img
                      className="w-6 h-6"
                      src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                      alt=""
                    />
                    <h2 className="text-purple-500 font-bold text-lg ">
                      razh4an
                    </h2>
                  </a>
                </div>
                <h2 className="text-purple-500 text-xl">46k</h2>
              </div>

              {/* facebook */}

              <div
                className="flex flex-row  items-center justify-between
              "
              >
                <div className="flex  flex-row items-center ">
                  <a
                    href="https://m.facebook.com/razhan.omed.osman/?comment_id=Y29tbWVudDo3MTAzMTUyNDM3ODgxMzlfOTE5MjM3Mzk5NDYyNTE5"
                    className="flex justify-center items-center space-x-3 cursor-pointer"
                  >
                    <img
                      className="w-6 h-6"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDFPcAthUKGOVXy2-7sYmnImBMVHbqTJoJX4Sg7Y&s"
                      alt=""
                    />
                    <h2 className="text-blue-500 font-bold text-lg ">
                      Razhan Omed Osman
                    </h2>
                  </a>
                </div>
                <h2 className="text-blue-500 text-xl">113k</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
