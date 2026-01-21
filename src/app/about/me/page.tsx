export default function Me() {
  return (
    <div className=" flex justify-center mt-20 ">
      <div className=" p-3 items-center w-150 h-96 bg-blue-50 border-2 border-gray-500 rounded-4xl">
        <div className="grid grid-cols-2 grid-rows-6 gap-6  w-full h-full">
          <div className="bg-white row-span-3 rounded-3xl">
            <img
              className="object-contain w-full h-full scale-130"
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
              alt="avatar-image"
            />
          </div>
          <div className="bg-white row-span-4 rounded-3xl p-2 ">
            <h3 className="flex justify-center font-bold mb-1">
              {" "}
              Fullstack Developer
            </h3>
            <p className="font-bold italic text-justify">
              I build scalable, attractive, and efficient websites that not only
              look great but also help increase your sales and grow your
              business. Experienced in front-end and back-end development,
              creating complete solutions from UI to server and database.
            </p>
          </div>
          <div className="bg-white row-span-1 rounded-3xl">
            <h2 className="font-bold text-3xl flex justify-center items-center">
              Djustin Sun
            </h2>
          </div>
          <div className="bg-white row-span-2 col-span-2 rounded-3xl">
            <div className="grid grid-flow-col grid-rows-4 gap-2 h-full p-2.5">
              <div className=" row-span-4">
                <img
                  className="object-contain w-full h-full scale-110"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="QR-COD"
                />
              </div>
              <div className="  col-span-2 row-span-2">
                <p className="flex p-2 font-bold relative ">
                  Email:{" "}
                  <span className="absolute pl-25 text-emerald-800 font-extrabold">
                    hesore9553@elafans.com
                  </span>
                </p>
              </div>
              <div className="  col-span-2 row-span-2">
                <p className="flex p-2 font-bold relative">
                  WhatsApp:{" "}
                  <span className="absolute pl-25 text-emerald-800 font-extrabold">
                    +4915777952010
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
