import Header from "@/components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-[var(--dark-blue)]">
      <Header />
      <section
        className="bg-[var(--dark-blue)] flex items-center justify-center py-8 md:py-16"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 items-center h-full">
            {/* Left Content */}
            <div className="text-white flex flex-col justify-center text-left justify-self-center w-[66%] max-w-2xl pl-4 sm:pl-6 md:pl-8">
              
              {/* Nadpis */}
              <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                <span className="block">
                  Ahoj, jsem<br />
                  Nguyen Duy Tiep <span className="inline-block">👋</span>
                </span>
              </h1>

              <div className="h-5" />

              {/* Profese */}
              <h2 className="font-inter text-base sm:text-lg md:text-3xl lg:text-3xl xl:text-3xl">
                <span className="text2 text-[var(--light-blue)] font-bold">Front-end developer</span>
                <span className="text2 text-white font-bold"> & </span>
                <span className="text2 text-[var(--light-blue)] font-bold">UI/UX designer</span>
              </h2>

              <div className="h-5" />

              {/* Popis */}
              <p className="font-inter text-base sm:text-base md:text-lg lg:text-lg text-white leading-relaxed max-w-11/12">
                Zde najdete ukázky mých webových projektů. Tvořím moderní a funkční weby – podívejte se na mé práce a ozvěte se pro spolupráci!
              </p>

              <div className="h-2" />

              {/* Sociální sítě a tlačítka */}
              <div className="space-y-10">
                <div className="flex items-center flex-wrap gap-y-4">
                  <span className="font-inter text-white text-base sm:text-base md:text-lg lg:text-lg min-w-[150px]">
                    Sledujte mě na:
                  </span>

                  <div className="flex items-center space-x-4 ml-6 gap-4">
                    <a
                      href="#"
                      className="bg-white h-10 w-10 flex justify-center items-center text-[var(--dark-blue)] p-5 rounded-full hover:bg-[var(--light-blue)] hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-5 h-7" />
                    </a>
                    <a
                      href="#"
                      className="bg-white h-10 w-10 flex justify-center items-center text-[var(--dark-blue)] p-5 rounded-full hover:bg-[var(--light-blue)] hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-7" />
                    </a>
                    <a
                      href="#"
                      className="bg-white h-10 w-10 flex justify-center items-center text-[var(--dark-blue)] p-5 rounded-full hover:bg-[var(--light-blue)] hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="w-5 h-7" />
                    </a>
                    <a
                      href="#"
                      className="bg-white h-10 w-10 flex justify-center items-center text-[var(--dark-blue)] p-5 rounded-full hover:bg-[var(--light-blue)] hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-5 h-7" />
                    </a>
                  </div>
                </div>

                <div className="h-8" />

                <div className="flex space-x-6 gap-5">
                  <button className="buttons-bold font-inter bg-[var(--light-blue)] text-white w-[175px] h-[53px] rounded-full hover:bg-white hover:text-[var(--light-blue)] transition-all duration-300 font-medium text-base lg:text-lg flex items-center justify-center">
                    Prozkoumat
                  </button>
                  <button className="buttons-bold font-inter border-2 border-[var(--light-blue)] text-[var(--light-blue)] w-[175px] h-[53px] rounded-full hover:bg-[var(--light-blue)] hover:text-white transition-all duration-300 font-medium text-base lg:text-lg flex items-center justify-center">
                    Zkontaktovat
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-center lg:items-center h-full lg:pr-12 xl:pr-24">
              <div className="w-[404px] h-[393px] rounded-full border-4 border-[var(--light-blue)] bg-white relative overflow-hidden"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
