import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import Image from "next/image"
import ICONS from "@/constants/icons"
import contentData from "@/data/content.json"
import "./Technologies.scss"

const { technologies } = contentData

const Technologies = () => (
	<section className="flex items-center justify-center w-full technologies-root">
		<div className="w-[81.5vw] h-[70vh] flex flex-col justify-center items-center gap-20 px-6 py-10 md:py-14 technologies-panel">
			<div className="flex flex-col items-center gap-3">
				<h2 className="text-3xl font-bold technologies-title">{technologies.title}</h2>
				<span className="technologies-underline" />
			</div>

			<div className="w-9/12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-15">
				{technologies.items.map((tech) => (
					<div
						key={tech.label}
						className="h-30 w-28 flex flex-col items-center justify-center gap-4 rounded-2xl technologies-card"
					>
						<div className="flex items-center justify-center h-13 w-13 rounded-full technologies-icon">
							{tech.reactIconKey ? (
								(() => {
									const ReactIcon = ICONS[tech.reactIconKey as keyof typeof ICONS] as typeof ICONS.framer
									return <ReactIcon className={tech.colorClass ? `technologies-icon-text ${tech.colorClass}` : "technologies-icon-text"} />
								})()
							) : tech.iconKey ? (
								<FontAwesomeIcon 
									icon={ICONS[tech.iconKey as keyof typeof ICONS] as IconProp} 
									className={tech.colorClass ? `technologies-icon-text ${tech.colorClass}` : "technologies-icon-text"}
								/>
							) : tech.image ? (
								<Image src={tech.image} alt={tech.label} width={29} height={29} />
							) : null}
						</div>
						<span className="text-sm font-semibold technologies-label">{tech.label}</span>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default Technologies
