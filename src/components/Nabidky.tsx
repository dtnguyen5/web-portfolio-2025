import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faGear } from "@fortawesome/free-solid-svg-icons";

const Nabidky = () => {
  const cards = [
    {
      title: "Návrh webu",
      icon: faDesktop,
      text: `Vytvářím moderní a\u00A0esteticky promyšlené návrhy webových stránek, které dobře vypadají a\u00A0odpovídají požadavkům cílové skupiny. Důraz kladu na přehlednost, uživatelskou přívětivost a\u00A0vizuální identitu značky.`
    },
    {
      title: "Tvorba webu",
      icon: faCode,
      text: `Vytvářím plně funkční a\u00A0responzivní webové stránky s\u00A0využitím moderních technologií jako React, TailwindCSS a\u00A0TypeScript. Dbám na čistý kód, škálovatelnost a\u00A0snadnou správu. Výsledkem je rychlý web připravený na budoucí rozšíření.`,
    },
    {
      title: "Optimalizace webu",
      icon: faGear,
      text: `Při optimalizaci dbám na rychlé načítání a přehlednost webu. Upravuji rozložení, strukturu a kód tak, aby byl jednoduchý, srozumitelný a bez rušivých prvků. Výsledkem je snadnější správa webu a lepší uživatelská zkušenost.`,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[var(--blue-low)] text-[var(--light-blue)] flex flex-col justify-center items-center h-[35vh] w-[30vw] gap-7 rounded-[10%]"
          style={{ boxShadow: '0 6px 10px rgba(0, 0, 0, 0.6), 6px 0 10px rgba(0, 0, 0, 0.4), -6px 0 10px rgba(0, 0, 0, 0.4), 0 -6px 0 var(--light-blue)' }}
        >
          <div className="flex flex-row items-center gap-7 w-[80%]">
            <div className="text-[var(--light-blue)] bg-[var(--dark-blue2)] rounded-full flex items-center justify-center w-16 h-16" style={{ boxShadow: '0 0 4px 2px var(--light-blue), 0 0 8px 2px var(--light-blue)' }}>
              <FontAwesomeIcon icon={card.icon} style={{ fontSize: '28px', width: '30px', height: '30px' }} />
            </div>
            <h3 className="text-[1.61rem] font-bold">{card.title}</h3>
          </div>
          <p className="text-[var(--bila)] text-center text-[0.95rem] px-6 max-w-[85%]">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Nabidky;
