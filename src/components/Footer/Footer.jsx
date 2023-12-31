import { FcConferenceCall } from "react-icons/fc";
const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 '>
        <aside>
          <FcConferenceCall className='text-5xl'></FcConferenceCall>
          <p>
            <span className=' text-lg  font-semibold '>techTalk </span>2023,
            Indonesia
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className='footer-title text-blue-500'>Services</header>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <header className='footer-title text-blue-500'>Company</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <header className='footer-title text-blue-500'>Legal</header>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
