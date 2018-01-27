import cxs from 'cxs';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';

const cx = cxs({
  'a:not(:last-child)': {
    marginRight: '10px'
  }
});

const SomeIcons = () => (
  <div className={cx}>
    <a href="mailto:jere.piispanen@gmail.com" target="_blank">
      <FaEnvelopeSquare size={32} />
    </a>
    <a href="https://www.linkedin.com/in/jerep/" target="_blank">
      <FaLinkedinSquare size={32} />
    </a>
    <a href="https://github.com/jerep" target="_blank">
      <FaGithubSquare size={32} />
    </a>
    <a href="https://www.instagram.com/jerepx/" target="_blank">
      <FaInstagram size={32} />
    </a>
    <a href="https://twitter.com/jerepx/" target="_blank">
      <FaTwitterSquare size={32} />
    </a>
  </div>
);

export default SomeIcons;
