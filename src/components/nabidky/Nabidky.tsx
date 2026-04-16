import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS, { type IconKey } from "@/constants/icons"
import contentData from "@/data/content.json"
import "./Nabidky.scss"

const { nabidky } = contentData

const Nabidky = () => (
  <div className="flex flex-col items-center justify-center gap-8 md:gap-20 md:flex-row animate-stagger">
    {nabidky.cards.map((card) => (
      <div
        key={card.title}
        className="flex flex-col items-center justify-center gap-5 md:gap-7 h-[40vh] w-[90vw] sm:h-[35vh] sm:w-[70vw] md:h-[35vh] md:w-[30vw] rounded-[10%] nabidky-card pt-8 pl-4 sm:pt-8 sm:pl-4 md:pt-0 md:pl-0 animate-slide-in-up"
      >
        <div className="flex flex-row items-center gap-7 w-[80%]">
          <div className="flex items-center justify-center h-16 w-16 rounded-full nabidky-icon-wrap">
            <FontAwesomeIcon icon={ICONS[card.iconKey as IconKey] as IconProp} style={{ fontSize: "28px", width: "30px", height: "30px" }} />
          </div>
          <h3 className="text-[1.61rem] font-bold">{card.title}</h3>
        </div>
        <p className="px-6 max-w-[85%] text-center text-[0.95rem] nabidky-card-text">
          {card.text}
        </p>
      </div>
    ))}
  </div>
)

export default Nabidky