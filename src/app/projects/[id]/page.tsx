'use client'

import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import { FiFramer } from 'react-icons/fi'
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import contentData from "@/data/content.json"
import "./detail.scss"

const { projects } = contentData

// Mapování nástrojů na ikony
const toolIcons: Record<string, { type: 'image' | 'icon'; value: string }> = {
  'Figma': { type: 'image', value: '/Figma.svg' },
  'Framer': { type: 'icon', value: 'framer' }
}

const ProjectDetail = () => {
  const router = useRouter()
  const params = useParams()
  const project = projects.items.find(p => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen w-full flex flex-col projects-root" lang="cs">
        <Header />
        <main className="flex-1 w-full flex justify-center items-center">
          <div className="text-center">
            <p className="text-white text-2xl">Projekt nebyl nalezen</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col projects-root" lang="cs">
      <Header />

      <main className="flex-1">
        <section className="w-full flex justify-center" style={{paddingTop: '40px'}}>
          <div className="w-[92%] max-w-[1250px] flex flex-col gap-12 animate-stagger">
            
            {/* Back button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white w-fit project-back-button"
            >
              <span>←</span>
              <span>Zpět na seznam</span>
            </button>

            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">#{tag}</span>
                ))}
              </div>
            )}

            {/* Client name and intro */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white">
                {project.client}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed w-full">
                {project.intro}
              </p>
            </div>

            {/* Project Image and Preview Button */}
            {project.image && (
              <div className="flex flex-col gap-6">
                <div className="w-full rounded-lg overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
                  <Image 
                    src={project.image} 
                    alt={project.client}
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-inter text-base lg:text-lg font-medium buttons-bold home-primary-button rounded-full transition-all duration-300"
                    style={{
                      height: "var(--spacing-home-button-h)",
                      width: "var(--spacing-home-button-w)"
                    }}
                  >
                    Živý náhled
                  </a>
                )}
              </div>
            )}

            {/* Year and Role */}
            <div className="grid grid-cols-2 gap-6">
              <div className="project-info-card">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-sm">Časová osa</span>
                  <p className="text-2xl font-bold text-white">{project.year}</p>
                </div>
              </div>
              <div className="project-info-card">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-sm">Role</span>
                  <p className="text-2xl font-bold text-white">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold font-poppins text-white">Cíle</h2>
              <div className="flex flex-col gap-8">
                {project.goals.map((goal) => (
                  <div key={goal.number} className="flex gap-6">
                    <div className="project-goal-number">{goal.number}</div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-bold text-white">{goal.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            {project.tools && (
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold font-poppins text-white">Nástroje</h2>
                <div className="flex flex-col gap-3">
                  {project.tools.map((tool) => {
                    const toolIcon = toolIcons[tool]
                    return (
                      <div key={tool} className="project-tool-item">
                        <div className="flex items-center gap-4">
                          {toolIcon && toolIcon.type === 'image' && (
                            <Image 
                              src={toolIcon.value} 
                              alt={tool}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          )}
                          {toolIcon && toolIcon.type === 'icon' && (
                            <FiFramer className="w-6 h-6" />
                          )}
                          <span>{tool}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Conclusion */}
            {project.conclusion && (
              <div className="flex flex-col gap-6 pb-12">
                <h2 className="text-3xl font-bold font-poppins text-white">Závěr</h2>
                <p className="text-gray-400 leading-relaxed">
                  {project.conclusion}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetail
