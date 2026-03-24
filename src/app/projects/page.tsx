import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import contentData from "@/data/content.json"
import "./projects.scss"

const { projects } = contentData
const PROJECT_PLACEHOLDERS = projects.placeholders

const ProjectsPage = () => (
  <div className="min-h-screen w-full flex flex-col projects-root" lang="cs">
    <Header />

    <main className="flex-1">
      <section className="w-full flex justify-center pb-12 md:pb-16 lg:pb-20" style={{paddingTop: '60px'}}>
        <div className="w-[92%] max-w-[1250px] flex flex-col items-center gap-12 md:gap-14">
          <div className="w-full flex flex-col items-center gap-3 mt-20 animate-slide-in-up">
            <h1 className="text-4xl font-bold font-poppins projects-title">{projects.title}</h1>
            <span className="w-[78px] h-[4px] rounded-full projects-title-underline" />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-x-20 lg:gap-y-20 animate-stagger">
            {PROJECT_PLACEHOLDERS.map((project) => (
              <article
                key={project.id}
                className="h-[255px] md:h-[272px] rounded-[24px] overflow-hidden project-placeholder-card"
                aria-label="Placeholder projektu"
              >
                <div className="h-[50%] project-placeholder-top" />
                <div className="h-[54%] project-placeholder-bottom" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

    <div className="mt-16 md:mt-20">
      <Footer />
    </div>
  </div>
)

export default ProjectsPage