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
        {/* Section 1 */}
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className="w-[95%] h-[60vh] flex items-center justify-around">
          {/* Profile + Info vedle sebe */}
          <div className="flex items-center gap-24">
            {/* Profile */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center">
              <div className="w-[340px] h-[340px] about-profile-box rounded-[40px] border-4"></div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-10 min-w-[260px]">
              {about.infoItems.map((item) => (
                <div key={item.text} className="flex items-center gap-6">
                  <FontAwesomeIcon icon={ICONS[item.iconKey as keyof typeof ICONS] as IconProp} className="about-info-icon" style={{ width: "38px", height: "38px" }} />
                  <span className="about-info-text text-[1.4rem] font-poppins whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About text */}
          <div className="pl-20 flex flex-col justify-center w-[32vw] gap-6">
            <h2 className="about-section-title text-4xl font-bold mb-8 font-poppins text-center">{about.title}</h2>
            <div className="rounded-[30px] p-8">
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
        </div>

        {/* Section 2 */}
      <div className="w-full h-[70vh] flex justify-center items-center">
        <div className="w-[82%] h-[70vh] flex flex-col gap-17">

          {/* Nadpis */}
          <div className="w-full flex flex-col gap-7">
            <h2 className="about-section-title text-4xl font-bold font-poppins">{about.offersTitle}</h2>
            <div className="w-[125px] h-[7px] about-section-underline rounded-r-lg"></div>
          </div>

          {/* Karty nabídek */}
          <div>
            <Nabidky />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full flex justify-center items-center py-20 pb-36">
        <div className="w-[90%]">
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