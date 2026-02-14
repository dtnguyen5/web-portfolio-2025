import Header from "@/components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ICONS from "@/constants/icons"
import "./page.scss"

const SOCIAL_LINKS = [
  { href: "#", icon: ICONS.instagram, label: "Instagram" },
  { href: "#", icon: ICONS.linkedin, label: "LinkedIn" },
  { href: "#", icon: ICONS.facebook, label: "Facebook" },
  { href: "#", icon: ICONS.github, label: "GitHub" },
]

const HomePage = () => (
    <div className="min-h-screen w-full home-root">
      <Header />
      <section
        className="home-section flex items-center justify-center py-8 md:py-16"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center h-full">
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
                <span className="text2 home-accent font-bold">Front-end developer</span>
                <span className="text2 text-white font-bold"> & </span>
                <span className="text2 home-accent font-bold">UI/UX designer</span>
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

                  <div className="flex items-center gap-4 ml-6">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="home-social-button h-10 w-10 flex justify-center items-center p-5 rounded-full transition-all duration-300"
                        aria-label={link.label}
                      >
                        <FontAwesomeIcon icon={link.icon} className="w-5 h-7" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="h-8" />

                <div className="flex gap-5">
                  <button className="buttons-bold font-inter home-primary-button w-[175px] h-[53px] rounded-full transition-all duration-300 font-medium text-base lg:text-lg flex items-center justify-center">
                    Prozkoumat
                  </button>
                  <button className="buttons-bold font-inter border-2 home-secondary-button w-[175px] h-[53px] rounded-full transition-all duration-300 font-medium text-base lg:text-lg flex items-center justify-center">
                    Zkontaktovat
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:items-center h-full lg:pr-12 xl:pr-24">
              <div className="w-[404px] h-[393px] rounded-full border-4 home-profile-ring relative overflow-hidden"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
)

export default HomePage
