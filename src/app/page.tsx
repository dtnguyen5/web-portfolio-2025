import Header from "@/components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS from "@/constants/icons"
import contentData from "@/data/content.json"
import "./page.scss"

const { home } = contentData

const HomePage = () => (
  <div className="min-h-screen w-full home-root">
    <Header />
    <section
      className="flex items-center justify-center py-8 md:py-16 home-section"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2 h-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center justify-self-center pl-4 sm:pl-6 md:pl-8 w-[66%] max-w-2xl text-left text-white">
            {/* Nadpis */}
            <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              <span className="block">
                {home.hero.greeting}<br />
                {home.hero.name} <span className="inline-block">{home.hero.wave}</span>
              </span>
            </h1>

            <div className="h-5" />

            {/* Profese */}
            <h2 className="font-inter text-base sm:text-lg md:text-3xl lg:text-3xl xl:text-3xl">
              <span className="text2 font-bold home-accent">{home.hero.rolePrimary}</span>
              <span className="text2 font-bold text-white">{home.hero.roleConnector}</span>
              <span className="text2 font-bold home-accent">{home.hero.roleSecondary}</span>
            </h2>

            <div className="h-5" />

            {/* Popis */}
            <p className="w-full font-inter text-base sm:text-base md:text-lg lg:text-lg leading-relaxed text-white">
              {home.hero.descriptionLine1}<br />{home.hero.descriptionLine2}
            </p>

            <div className="h-2" />

            {/* Sociální sítě a tlačítka */}
            <div className="space-y-10">
              <div className="flex flex-wrap items-center gap-y-4">
                <span className="min-w-[150px] font-inter text-base sm:text-base md:text-lg lg:text-lg text-white">
                  {home.hero.followText}
                </span>

                <div className="ml-6 flex items-center gap-4">
                  {home.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-center p-5 h-10 w-10 home-social-button rounded-full transition-all duration-300"
                      aria-label={link.label}
                    >
                      <FontAwesomeIcon icon={ICONS[link.iconKey as keyof typeof ICONS] as IconProp} className="w-5 h-7" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-8" />

              <div className="flex gap-5">
                <button className="flex items-center justify-center h-[53px] w-[175px] font-inter text-base lg:text-lg font-medium buttons-bold home-primary-button rounded-full transition-all duration-300">
                  {home.hero.primaryButton}
                </button>
                <button className="flex items-center justify-center h-[53px] w-[175px] border-2 font-inter text-base lg:text-lg font-medium buttons-bold home-secondary-button rounded-full transition-all duration-300">
                  {home.hero.secondaryButton}
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:items-center lg:pr-12 xl:pr-24 h-full">
            <div className="relative h-[393px] w-[404px] overflow-hidden border-4 rounded-full home-profile-ring"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HomePage
