import Header from "@/components/Header"
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
    <div className="min-h-screen w-full bg-[var(--dark-blue)]">
      <Header />
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-[95%] h-[60vh] flex justify-around items-center">

          {/* Profile */}
          <div className="h-75 w-80 bg-[var(--bila)] rounded-[30px] border-6 border-[var(--light-blue)]"></div>

          {/* Information */}
          <div className="ml-12 flex flex-col gap-8">
            {infoData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FontAwesomeIcon icon={item.icon} className="text-[var(--light-blue)] text-xs" />
                <span className="text-[var(--bila)] text-sm font-poppins">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    
  )
}
export default AboutPage;