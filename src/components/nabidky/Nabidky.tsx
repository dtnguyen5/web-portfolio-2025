import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ICONS from "@/constants/icons"
import "./Nabidky.scss"

const CARDS = [
  {
    title: "Návrh webu",
    icon: ICONS.desktop,
    text: `Vytvářím moderní a\u00A0esteticky promyšlené návrhy webových stránek, které dobře vypadají a\u00A0odpovídají požadavkům cílové skupiny. Důraz kladu na přehlednost, uživatelskou přívětivost a\u00A0vizuální identitu značky.`,
  },
  {
    title: "Tvorba webu",
    icon: ICONS.code,
    text: `Vytvářím plně funkční a\u00A0responzivní webové stránky s\u00A0využitím moderních technologií jako React, TailwindCSS a\u00A0TypeScript. Dbám na čistý kód, škálovatelnost a\u00A0snadnou správu. Výsledkem je rychlý web připravený na budoucí rozšíření.`,
  },
  {
    title: "Optimalizace webu",
    icon: ICONS.gear,
    text: `Při optimalizaci dbám na rychlé načítání a přehlednost webu. Upravuji rozložení, strukturu a kód tak, aby byl jednoduchý, srozumitelný a bez rušivých prvků. Výsledkem je snadnější správa webu a lepší uživatelská zkušenost.`,
  },
]

const Nabidky = () => (
  <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
    {CARDS.map((card) => (
      <div
        key={card.title}
        className="flex flex-col items-center justify-center gap-7 h-[35vh] w-[30vw] rounded-[10%] nabidky-card"
      >
        <div className="flex flex-row items-center gap-7 w-[80%]">
          <div className="flex items-center justify-center h-16 w-16 rounded-full nabidky-icon-wrap">
            <FontAwesomeIcon icon={card.icon} style={{ fontSize: "28px", width: "30px", height: "30px" }} />
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
