import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import ICONS from "@/constants/icons"
import "./Technologies.scss"

const TECHNOLOGIES = [
	{ label: "React", icon: ICONS.react, colorClass: "icon-cyan" },
	{ label: "ViteJs", image: "/Vite.js.svg" },
	{ label: "Next.Js", image: "/Next.js.svg" },
	{ label: "TailwindCSS", image: "/Tailwind CSS.svg" },
	{ label: "SCSS", image: "/Sass.svg" },
	{ label: "TypeScript", image: "/TypeScript.svg" },
	{ label: "VSCode", image: "/VSCode.svg" },
	{ label: "Git", image: "/Git.svg" },
	{ label: "GitHub", icon: ICONS.github, colorClass: "icon-white" },
	{ label: "Figma", image: "/Figma.svg" },
	{ label: "Framer", reactIcon: ICONS.framer, colorClass: "icon-white" },
	{ label: "Blender", image: "/Blender.svg" },
]

const Technologies = () => (
	<section className="flex items-center justify-center w-full technologies-root">
		<div className="w-[81.5vw] h-[70vh] flex flex-col justify-center items-center gap-20 px-6 py-10 md:py-14 technologies-panel">
			<div className="flex flex-col items-center gap-3">
				<h2 className="text-3xl font-bold technologies-title">Technologie</h2>
				<span className="technologies-underline" />
			</div>

			<div className="w-9/12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-15">
				{TECHNOLOGIES.map((tech) => (
					<div
						key={tech.label}
						className="h-30 w-28 flex flex-col items-center justify-center gap-4 rounded-2xl technologies-card"
					>
					<div className="flex items-center justify-center h-13 w-13 rounded-full technologies-icon">
					{tech.reactIcon ? (
						<tech.reactIcon className={tech.colorClass ? `technologies-icon-text ${tech.colorClass}` : "technologies-icon-text"} />
					) : tech.icon ? (
						typeof tech.icon === 'string' ? (
						<Image src={tech.icon} alt={tech.label} width={29} height={29} />
						) : (
							<FontAwesomeIcon 
								icon={tech.icon} 
								className={tech.colorClass ? `technologies-icon-text ${tech.colorClass}` : "technologies-icon-text"}
							/>
							)
						) : tech.image ? (
						<Image src={tech.image} alt={tech.label} width={29} height={29} />
						) : (
							<span className="technologies-icon-text">{tech.abbr}</span>
						)}
						</div>
						<span className="text-sm font-semibold technologies-label">{tech.label}</span>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default Technologies
