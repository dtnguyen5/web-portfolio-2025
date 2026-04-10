import {
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import {
  faDesktop,
  faCode,
  faGear,
  faUser,
  faBirthdayCake,
  faMapMarkerAlt,
  faGraduationCap,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons"
const ICONS = {
  // Social
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  facebook: faFacebook,
  github: faGithub,

  // Nav
  home: faHome,

  // Services
  desktop: faDesktop,
  code: faCode,
  gear: faGear,

  // About
  user: faUser,
  birthdayCake: faBirthdayCake,
  mapMarkerAlt: faMapMarkerAlt,
  graduationCap: faGraduationCap,
  envelope: faEnvelope,

  // Technologies
  react: faReact,
} as const

export type IconKey = keyof typeof ICONS

export default ICONS
