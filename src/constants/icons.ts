import {
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faGithub,
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
} as const

export default ICONS
