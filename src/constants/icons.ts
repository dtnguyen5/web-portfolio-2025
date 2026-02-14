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
} from "@fortawesome/free-solid-svg-icons"
import { FiFramer } from "react-icons/fi"

const ICONS = {
  // Social
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  facebook: faFacebook,
  github: faGithub,

  // Services
  desktop: faDesktop,
  code: faCode,
  gear: faGear,

  // About
  user: faUser,
  birthdayCake: faBirthdayCake,
  mapMarkerAlt: faMapMarkerAlt,
  graduationCap: faGraduationCap,

  // Technologies
  react: faReact,
  framer: FiFramer,
} as const

export default ICONS
