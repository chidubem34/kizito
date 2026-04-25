import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/chidubem34"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/kizito-chidubem-427401328"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <BsInstagram />
      </a>
      <a href="https://x.com/kizito_08" target="_blank" rel="noreferrer">
        <FaXTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
