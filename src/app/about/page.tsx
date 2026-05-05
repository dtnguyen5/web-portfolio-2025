import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Nabidky from "@/components/nabidky/Nabidky"
import Technologies from "@/components/technologies/Technologies"
import Image from "next/image"
import contentData from "@/data/content.json"
import "./about.scss"

const { about } = contentData

const AboutPage = () => (
  <div className="min-h-screen w-full flex flex-col about-root" lang="cs">
      <Header />
      
      {/* Main content */}
      <div className="flex-1">
        {/* Section 1 - O mně — Card layout */}
        <section className="about-section">
          <div className="about-card animate-slide-in-up">
            {/* Photo side — fills entire left */}
            <div className="about-card__photo animate-slide-in-left">
              <Image 
                src={about.photo.src}
                alt={about.photo.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content side */}
            <div className="about-card__content animate-slide-in-right animate-stagger">
              <span className="about-card__tag">{about.tag}</span>
              <h2 className="about-card__title">{about.title}</h2>
              <div className="about-card__line" />
              <p className="about-card__text">{about.paragraphs[0]}</p>
              <p className="about-card__text">{about.paragraphs[1]}</p>

              <div className="about-card__stats animate-stagger">
                {about.stats.map((stat, index) => (
                  <div key={`${stat.value}-${stat.label}`} className="contents">
                    <div className="about-card__stat">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                    {index < about.stats.length - 1 && (
                      <div className="about-card__stat-sep" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Co Vám mohu nabídnout */}
        <div className="w-full flex justify-center items-center py-0 md:py-8 md:h-auto about-offers-section">
          <div className="w-full px-4 md:px-0 md:w-[82vw] h-auto flex flex-col gap-2 md:gap-10">
            <div className="w-full flex flex-col gap-2 animate-slide-in-up md:gap-7">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-7 title-section">
                <h2 className="about-section-title text-left text-2xl md:text-4xl font-bold font-poppins">{about.offersTitle}</h2>
                <div className="w-[125px] h-[7px] about-section-underline rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="about-offers-cards">
                <Nabidky />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Technologie */}
        <div className="w-full flex justify-center items-center py-8 md:py-8 h-auto technologies-section">
          <div className="w-[90vw]">
            <Technologies />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 md:mt-12">
        <Footer />
      </div>
  </div>
)

export default AboutPage