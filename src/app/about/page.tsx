import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Nabidky from "@/components/nabidky/Nabidky"
import Technologies from "@/components/technologies/Technologies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ICONS from "@/constants/icons"
import "./about.scss"

const INFO_ITEMS = [
  { icon: ICONS.user, text: "Nguyen Duy Tiep" },
  { icon: ICONS.birthdayCake, text: "18 let" },
  { icon: ICONS.mapMarkerAlt, text: "Plzeň" },
  { icon: ICONS.graduationCap, text: "SŠ INFIS" },
]

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
              {INFO_ITEMS.map((item) => (
                <div key={item.text} className="flex items-center gap-6">
                  <FontAwesomeIcon icon={item.icon} className="about-info-icon" style={{ width: "38px", height: "38px" }} />
                  <span className="about-info-text text-[1.4rem] font-poppins whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About text */}
          <div className="pl-20 flex flex-col justify-center w-[32vw] gap-6">
            <h2 className="about-section-title text-4xl font-bold mb-8 font-poppins text-center">O mně</h2>
            <div className="rounded-[30px] p-8">
              <div className="flex flex-col gap-6">
                <p className="about-body-text text-[1.2rem] font-poppins leading-normal break-words">
                  Jsem webový vývojář z Plzně a specializuji se na tvorbu moderních, funkčních a snadno udržovatelných webových stránek. Weby vytvářím v Reactu, TypeScriptu, TailwindCSS a{'\u00A0'}SCSS. Díky těmto technologiím tvořím rychlé, dynamické a{'\u00A0'}škálovatelné projekty, které dobře vypadají a snadno se upravují podle potřeby klienta.
                </p>
                <p className="about-body-text text-[1.2rem] font-poppins leading-normal break-words">
                  Zakládám si na přehlednosti, responzivitě a vizuální atraktivitě. Sleduji aktuální trendy a neustále rozvíjím své dovednosti, abych{'\u00A0'} svým klientům poskytoval moderní a efektivní řešení.
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
            <h2 className="about-section-title text-4xl font-bold font-poppins">Co Vám mohu nabídnout ?</h2>
            <div className="w-[125px] h-[7px] about-section-underline rounded-r-lg"></div>
          </div>

          {/* Karty nabídek */}
          <div>
            <Nabidky />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full flex justify-center items-center py-20 mb-60">
        <div className="w-[90%]">
          <Technologies />
        </div>
      </div>
  </div>

      {/* Footer */}
      <Footer />
  </div>
)

export default AboutPage
