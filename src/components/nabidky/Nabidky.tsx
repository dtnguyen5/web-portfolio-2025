"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS, { type IconKey } from "@/constants/icons"
import contentData from "@/data/content.json"
import "./Nabidky.scss"

const { nabidky } = contentData

const Nabidky = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="offers-accordion animate-stagger">
      <div className="offers-accordion__grid">
        {nabidky.cards.map((card, index) => {
          const isOpen = index === activeIndex
          const bodyId = `offers-panel-${index}`

          return (
            <article
              key={card.title}
              className={`offers-accordion__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="offers-accordion__header"
                aria-expanded={isOpen}
                aria-controls={bodyId}
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
              >
                <span className="offers-accordion__icon">
                  <FontAwesomeIcon
                    icon={ICONS[card.iconKey as IconKey] as IconProp}
                  />
                </span>
                <span className="offers-accordion__title">{card.title}</span>
                <span className="offers-accordion__toggle" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              <div id={bodyId} className="offers-accordion__body">
                <p className="offers-accordion__text">{card.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Nabidky