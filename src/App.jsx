import './App.css';
import HeroBgMob from './assets/images/mobile/image-header.jpg';
import Logo from './assets/images/logo.svg';
import FooterLogo from './assets/images/footerlogo.svg';
import MenuIcon from './assets/images/icon-hamburger.svg';
import ArrowDown from './assets/images/icon-arrow-down.svg';
import TransformBG from './assets/images/mobile/image-transform.jpg';
import StandOutBG from './assets/images/mobile/image-stand-out.jpg';
import CherryBG from './assets/images/mobile/image-graphic-design.jpg';
import OrangeBG from './assets/images/mobile/image-photography.jpg';
import EmilyPic from './assets/images/image-emily.jpg';
import ThomasPic from './assets/images/image-thomas.jpg';
import JenniePic from './assets/images/image-jennie.jpg';
import Bottle from './assets/images/mobile/image-gallery-milkbottles.jpg';
import Orange from './assets/images/mobile/image-gallery-orange.jpg';
import Cone from './assets/images/mobile/image-gallery-cone.jpg';
import Cubes from './assets/images/mobile/image-gallery-sugar-cubes.jpg';

function App() {
  return (
    <div className="mx-auto max-w-sm shadow-xl">
      <header className="flex flex-col text-center relative">
        <img className="absolute left-0 top-0" src={HeroBgMob} alt="hero" />

        <div className="flex flex-col z-20">
          <nav className="flex justify-between items-center p-5">
            <img className="w-30" src={Logo} alt="logo header" />
            <img className="w-30" src={MenuIcon} alt="hamburger menu" />
          </nav>
          <h1 className="text-neutral-White text-5xl font-Fraunces uppercase tracking-widest pt-20">
            we are creatives
          </h1>
          <img
            className="object-fill w-10 my-auto self-center pt-16"
            src={ArrowDown}
            alt="arrow"
          />
        </div>
      </header>
      <div className="flex flex-col justify-between items-center text-center bg-neutral-White mt-28">
        <img className="w-full" src={TransformBG} alt="" />
        <div className="flex flex-col justify-evenly items-center px-2 py-16 w-10/12">
          <h2 className="font-Fraunces text-4xl">Transform your brand</h2>
          <p className="text-lg text-neutral-DarkGrayishBlue leading-relaxed py-8 w-11/12">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h6 className="font-Fraunces border-b-4 border-primary-Yellow rounded-md border-opacity-40">
            LEARN MORE
          </h6>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center text-center bg-neutral-White">
        <img className="" src={StandOutBG} alt="" />
        <div className="flex flex-col justify-evenly items-center px-2 py-16 w-10/12">
          <h2 className="font-Fraunces text-4xl">
            Stand out to the right audience
          </h2>
          <p className="text-lg text-neutral-DarkGrayishBlue leading-relaxed py-8 w-11/12">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{' '}
          </p>
          <h6 className="font-Fraunces border-b-4 border-primary-SoftRed rounded-md border-opacity-40">
            LEARN MORE
          </h6>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between items-center text-center relative text-primary-DarkDesaturatedCyanGDesignText">
          <img className="" src={CherryBG} alt="Graphic Design" />
          <div className="absolute left-0 bottom-20 z-10 px-12 leading-loose flex flex-col justify-between h-36">
            <h4 className="font-Fraunces text-2xl">Graphic Design</h4>
            <p className="font-thin">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-center relative text-primary-DarkBluePhotographyText">
          <img className="" src={OrangeBG} alt="Graphic Design" />
          <div className="absolute left-0 bottom-20 z-10 px-12 leading-loose flex flex-col justify-between h-36">
            <h4 className="font-Fraunces text-2xl">Photography</h4>
            <p className="font-thin">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col justify-evenly items-center text-neutral-DarkGrayishBlue">
        <h4 className="text-md font-Fraunces tracking-widest uppercase pt-12 pb-6">
          client testimonials
        </h4>
        <div className="flex flex-col justify-between items-center w-3/4 px-5 py-6">
          <img className="w-14 rounded-full" src={EmilyPic} alt="emily" />
          <p className="leading-relaxed py-6">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4 className="text-neutral-VeryDarkDesaturatedBlue font-Fraunces">
            Emily R.{' '}
          </h4>
          <h6 className="text-sm text-neutral-GrayishBlue pt-2">
            Marketing Director
          </h6>
        </div>
        <div className="flex flex-col justify-between items-center w-3/4 px-5 py-6">
          <img className="w-14 rounded-full" src={ThomasPic} alt="emily" />
          <p className="leading-relaxed py-6">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4 className="text-neutral-VeryDarkDesaturatedBlue font-Fraunces">
            Thomas S.{' '}
          </h4>
          <h6 className="text-sm text-neutral-GrayishBlue pt-2">
            Chief Operating Officer
          </h6>
        </div>
        <div className="flex flex-col justify-between items-center w-3/4 px-5 py-6">
          <img className="w-14 rounded-full" src={JenniePic} alt="emily" />
          <p className="leading-relaxed py-6">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4 className="text-neutral-VeryDarkDesaturatedBlue font-Fraunces">
            Jennie F.{' '}
          </h4>
          <h6 className="text-sm text-neutral-GrayishBlue pt-2">
            Business Owner
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 pt-12">
        <img src={Bottle} alt="Milk Bottle" />
        <img src={Orange} alt="Milk Bottle" />
        <img src={Cone} alt="Milk Bottle" />
        <img src={Cubes} alt="Milk Bottle" />
      </div>
      <footer className="bg-primary-DarkModerateCyanFooter text-primary-FooterText flex flex-col justify-between items-center px-2 py-20">
        <img className="w-40" src={FooterLogo} alt="footer logo" />
        <ul className="flex justify-evenly items-center w-11/12 pt-8 pb-14">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className="flex justify-between items-center w-1/3">
          <i class="text-xl fa-brands fa-square-facebook"></i>
          <i class="text-xl fa-brands fa-instagram"></i>
          <i class="text-xl fa-brands fa-twitter"></i>
          <i class="text-xl fa-brands fa-pinterest"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
