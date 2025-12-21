import Header from "@/components/Header"
import Nabidky from "@/components/Nabidky"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBirthdayCake, faMapMarkerAlt, faGraduationCap } from "@fortawesome/free-solid-svg-icons"

const AboutPage = () => {

  const infoData = [
    {
      icon: faUser,
      text: "Nguyen Duy Tiep",
    },
    {
      icon: faBirthdayCake,
      text: "18 let",
    },
    {
      icon: faMapMarkerAlt,
      text: "Plzeň",
    },
    {
      icon: faGraduationCap,
      text: "SŠ INFIS",
    },
  ];

  return (
    
    <div className="min-h-[180vh] w-full bg-[var(--dark-blue)]">
      <Header />
      {/* Section 1 */}
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-[95%] h-[60vh] flex items-center justify-around">

          {/* Profile + Info vedle sebe */}
          <div className="flex items-center gap-24">
            {/* Profile */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center">
              <div className="w-[340px] h-[340px] bg-[var(--bila)] rounded-[40px] border-4 border-[var(--light-blue)]"></div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-10 min-w-[260px]">
              {infoData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <FontAwesomeIcon icon={item.icon} className="text-[var(--light-blue)]" style={{ width: '38px', height: '38px' }} />
                  <span className="text-[var(--bila)] text-[1.4rem] font-poppins whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About text */}
          <div className="pl-20 flex flex-col justify-center w-[32vw] gap-6">
            <h2 className="text-[var(--light-blue)] text-4xl font-bold mb-8 font-poppins text-center">O mně</h2>
            <div className="rounded-[30px] p-8">
              <div className="flex flex-col gap-6">
                <p className="text-[var(--bila)] text-[1.2rem] font-poppins leading-normal text-justify break-words">
                  Jsem webový vývojář z Plzně a specializuji se na tvorbu moderních, funkčních a snadno udržovatelných webových stránek. Weby vytvářím v Reactu, TypeScriptu, TailwindCSS a{'\u00A0'}SCSS. Díky těmto technologiím tvořím rychlé, dynamické a{'\u00A0'}škálovatelné projekty, které dobře vypadají a snadno se upravují podle potřeby klienta.
                </p>
                <p className="text-[var(--bila)] text-[1.2rem] font-poppins leading-normal text-justify break-words">
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
            <h2 className="text-[var(--light-blue)] text-4xl font-bold font-poppins">Co Vám mohu nabídnout ?</h2>
            <div className="w-[125px] h-[7px] bg-[var(--light-blue)] rounded-r-lg"></div>
          </div>

          {/* Karty nabídek */}
          <div>
            <Nabidky />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AboutPage;
