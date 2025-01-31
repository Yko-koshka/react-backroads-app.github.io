import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink
            key={link.id}
            icon={link.icon}
            link={link}
            itemClass={itemClass}
          />
        )
      })}
    </ul>
  )
}
export default SocialLinks
