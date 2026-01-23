export default function Me() {
  return (
    <section className="flex justify-center mt-10 px-4">
      <div
        className="
          p-4
          w-full sm:w-105 md:w-175 lg:w-190 xl:w-200
          bg-blue-50 border-2 border-gray-500 rounded-4xl
        "
      >
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            grid-rows-auto md:grid-rows-6
            gap-4 md:gap-6
            w-full
          "
        >
          {/* Avatar */}
          <div className="bg-white md:row-span-3 rounded-3xl flex justify-center items-center p-4">
            <img
              className="object-contain w-40 h-40 md:w-full md:h-full md:scale-110"
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
              alt="avatar"
            />
          </div>

          {/* Description */}
          <div className="bg-white md:row-span-4 rounded-3xl p-4">
            <h3 className="text-center font-bold text-lg md:text-xl mb-2">
              Fullstack Developer
            </h3>
            <p className="font-bold italic text-sm md:text-base text-justify">
              I build scalable, attractive, and efficient websites that not only
              look great but also help increase your sales and grow your
              business. Experienced in front-end and back-end development,
              creating complete solutions from UI to server and database.
            </p>
          </div>

          {/* Name */}
          <div className="bg-white md:row-span-1 rounded-3xl flex justify-center items-center">
            <h2 className="font-bold text-2xl md:text-3xl">Djustin Sun</h2>
          </div>

          {/* Contact */}
          <div className="bg-white md:row-span-2 md:col-span-2 rounded-3xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 h-full">
              {/* QR */}
              <div className="flex justify-center items-center">
                <img
                  className="object-contain max-h-32 sm:max-h-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="QR code"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-3">
                <p className="font-bold">
                  Email:
                  <span className="block text-emerald-800 font-extrabold break-all">
                    hesore9553@elafans.com
                  </span>
                </p>
                <p className="font-bold">
                  WhatsApp:
                  <span className="block text-emerald-800 font-extrabold">
                    +49 1577 7952010
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
