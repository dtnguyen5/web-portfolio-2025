import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Nabidky from "@/components/nabidky/Nabidky"
import Technologies from "@/components/technologies/Technologies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS from "@/constants/icons"
import contentData from "@/data/content.json"
import "./about.scss"

const { about } = contentData

const AboutPage = () => (
  <div className="min-h-screen w-full flex flex-col about-root" lang="cs">
      <Header />
      
      {/* Main content */}
      <div className="flex-1">
        {/* Section 1 - O mně */}
        <div className="w-full flex flex-col md:h-[80vh] justify-center items-center py-16 md:py-0">
          <div className="w-full px-4 md:px-0 md:w-[90vw] h-auto md:h-[60vh] flex flex-col md:flex-row items-center md:justify-around gap-8 md:gap-12 animate-stagger">

            {/* Profile */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-auto">
              <div className="w-[200px] h-[200px] md:w-[340px] md:h-[340px] about-profile-box rounded-[40px] border-4"></div>
            </div>

            {/* Info items */}
            <div className="flex flex-col gap-6 md:gap-10 min-w-[260px] animate-stagger w-full md:w-auto">
              {/* Mobil - Nadpis "O mně" nad info items */}
              <h2 className="md:hidden about-section-title text-2xl font-bold font-poppins text-center w-full">{about.title}</h2>

              {about.infoItems.map((item) => (
                <div key={item.text} className="flex items-center gap-4 md:gap-6 md:ml-0" style={{ marginLeft: "60px" }}>
                  <FontAwesomeIcon icon={ICONS[item.iconKey as keyof typeof ICONS] as IconProp} className="about-info-icon" style={{ width: "38px", height: "38px" }} />
                  <span className="about-info-text text-base md:text-[1.4rem] font-poppins whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>

            {/* About text - Desktop only */}
            <div className="hidden md:flex flex-col justify-center w-[32vw] gap-6" style={{ marginLeft: "60px" }}>
              <h2 className="about-section-title text-4xl font-bold mb-8 font-poppins text-center">{about.title}</h2>
              <div className="about-text-box">
                <div className="flex flex-col gap-6">
                  <p className="about-body-text text-[1.2rem] font-poppins leading-normal break-words">
                    {about.paragraphs[0]}
                  </p>
                  <p className="about-body-text text-[1.2rem] font-poppins leading-normal break-words">
                    {about.paragraphs[1]}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* MOBIL - Text dole */}
          <div className="md:hidden w-full px-4 pb-12">
            <div className="about-text-box-mobile">
              <div className="flex flex-col gap-4">
                <p className="about-body-text text-sm font-poppins leading-relaxed break-words text-left">
                  {about.paragraphs[0]}
                </p>
                <p className="about-body-text text-sm font-poppins leading-relaxed break-words text-left">
                  {about.paragraphs[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Co Vám mohu nabídnout */}
        <div className="w-full h-[70vh] flex justify-center items-center">
          <div className="w-[82vw] h-[70vh] flex flex-col gap-17">
            <div className="w-full flex flex-col gap-7 animate-slide-in-up">
              <h2 className="about-section-title text-4xl font-bold font-poppins">{about.offersTitle}</h2>
              <div className="w-[125px] h-[7px] about-section-underline rounded-r-lg"></div>
            </div>
            <div>
              <Nabidky />
            </div>
          </div>
        </div>

        {/* Section 3 - Technologie */}
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className="w-[90vw]">
            <Technologies />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-36 md:mt-44">
        <Footer />
      </div>
  </div>
)

export default AboutPage