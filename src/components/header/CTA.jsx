import { BsDownload } from 'react-icons/bs'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

const CTA = () => {
  return (
    <div className="cta">
      <a href="#" className="btn">
        <BsDownload /> Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        <HiOutlineChatBubbleLeftRight /> Let&apos;s Talk
      </a>
    </div>
  )
}

export default CTA