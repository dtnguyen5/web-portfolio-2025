import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Link from "next/link"
import Image from "next/image"
import contentData from "@/data/content.json"
import "./projects.scss"

const { projects } = contentData

const ProjectsPage = () => (
  <div className="min-h-screen w-full flex flex-col projects-root" lang="cs">
    <Header />

    <main className="flex-1">
      <section className="w-full flex justify-center pb-8 md:pb-12 lg:pb-14" style={{paddingTop: '60px'}}>
        <div className="w-[92%] max-w-[1250px] flex flex-col items-center gap-12 md:gap-14">
          <div className="w-full flex flex-col items-center gap-3 mt-20 animate-slide-in-up">
            <h1 className="text-4xl font-bold font-poppins projects-title">{projects.title}</h1>
            <span className="w-[78px] h-[4px] rounded-full projects-title-underline" />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-x-16 lg:gap-y-16 animate-stagger">
            {projects.items.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <article
                  className="rounded-[24px] overflow-hidden project-card group cursor-pointer"
                  aria-label={`Projekt od ${project.client}`}
                >
                  <div className="project-card-content">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`Projekt pro ${project.client}`}
                        fill
                        className="object-cover"
                        priority={true}
                      />
                    )}
                  </div>
                  <div className="project-card-footer">
                    <div className="project-card-footer-divider" />
                    <div className="flex flex-col">
                      <p className="text-[13px] font-poppins project-card-label">Klient</p>
                      <p className="text-lg md:text-xl font-bold font-poppins text-white">{project.client}</p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>

    <div className="mt-12 md:mt-16">
      <Footer />
    </div>
  </div>
)

export default ProjectsPage