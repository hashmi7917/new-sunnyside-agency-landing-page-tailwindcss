import './App.css';
import HeroBgMob from './assets/images/mobile/image-header.jpg';
import HeroBgDesktop from './assets/images/desktop/image-header.jpg';
import Logo from './assets/images/logo.svg';
import FooterLogo from './assets/images/footerlogo.svg';
import MenuIcon from './assets/images/icon-hamburger.svg';
import ArrowDown from './assets/images/icon-arrow-down.svg';
import TransformBG from './assets/images/mobile/image-transform.jpg';
import StandOutBG from './assets/images/mobile/image-stand-out.jpg';
import CherryBG from './assets/images/mobile/image-graphic-design.jpg';
import CherryBGDesktop from './assets/images/desktop/image-graphic-design.jpg';
import OrangeBG from './assets/images/mobile/image-photography.jpg';
import OrangeBGDesktop from './assets/images/desktop/image-photography.jpg';
import EmilyPic from './assets/images/image-emily.jpg';
import ThomasPic from './assets/images/image-thomas.jpg';
import JenniePic from './assets/images/image-jennie.jpg';
import Bottle from './assets/images/mobile/image-gallery-milkbottles.jpg';
import Orange from './assets/images/mobile/image-gallery-orange.jpg';
import Cone from './assets/images/mobile/image-gallery-cone.jpg';
import Cubes from './assets/images/mobile/image-gallery-sugar-cubes.jpg';

function App() {
  return (
    <div className="mx-auto max-w-sm md:max-w-md lg:max-w-xl xl:max-w-full shadow-xl xl:shadow-none">
      <div
        className="xl:hidden"
        style={{
          minHeight: '650px',
          backgroundImage: `url(${HeroBgMob})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <header className="flex flex-col text-center relative transition-all ease-in-out">
          <div className="flex flex-col z-10">
            <nav className="flex justify-between items-center p-5">
              <img className="w-30" src={Logo} alt="logo header" />
              <img
                id="menubar"
                className="w-30"
                src={MenuIcon}
                alt="hamburger menu"
                onClick={openNav}
              />
              <div
                id="sidemenu"
                className="hidden w-full bg-neutral-White text-neutral-VeryDarkGrayishBlue text-center px-12 py-12 absolute right-0 top-24 transition-all ease-in shadow-xl"
              >
                <i
                  onClick={closeNav}
                  className="fa-solid fa-circle-xmark absolute right-0 top-0 pr-4 pt-4 text-2xl hover:scale-110 transition-all ease-out duration-75 cursor-pointer hover:text-primary-SoftRed"
                ></i>

                <ul className="w-1/3 flex flex-col justify-around items-center mx-auto h-48 transition-all ease-in-out duration-75">
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Products</li>
                  <button
                    className="bg-primary-Yellow font-Fraunces text-neutral-VeryDarkDesaturatedBlue text-sm w-32 h-10 rounded-full  hover:border hover:text-neutral-White hover:bg-primary-SoftRed"
                    type="submit"
                  >
                    CONTACT
                  </button>
                </ul>
              </div>
            </nav>
            <h1 className="text-neutral-White text-5xl font-Fraunces uppercase tracking-widest pt-20 lg:w-11/12 mx-auto">
              we are creatives
            </h1>
            <img
              className="object-fill w-10 my-auto self-center pt-32"
              src={ArrowDown}
              alt="arrow"
            />
          </div>
        </header>
      </div>
      <div
        className="xl:block hidden"
        style={{
          minHeight: '650px',
          backgroundImage: `url(${HeroBgDesktop})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <header className="flex flex-col text-center relative">
          <div className="flex flex-col z-10">
            <nav className="flex justify-between items-center p-5">
              <img className="w-40" src={Logo} alt="logo header" />
              <ul className="w-1/3 flex justify-around items-center text-neutral-White">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Products</li>
                <button
                  className="bg-neutral-White font-Fraunces text-neutral-VeryDarkDesaturatedBlue text-sm w-32 h-10 rounded-full hover:bg-transparent hover:border hover:text-neutral-White"
                  type="submit"
                >
                  CONTACT
                </button>
              </ul>
            </nav>
            <h1 className="text-neutral-White text-5xl xl:text-6xl font-Fraunces uppercase tracking-widest pt-20 lg:w-11/12 mx-auto">
              we are creatives
            </h1>
            <img
              className="object-fill w-10 my-auto self-center pt-20"
              src={ArrowDown}
              alt="arrow"
            />
          </div>
        </header>
      </div>
      <div className="flex flex-col xl:flex-row-reverse justify-between items-center text-center bg-neutral-White">
        <img className="w-full xl:w-1/2" src={TransformBG} alt="Transform" />
        <div className="flex flex-col justify-evenly items-center xl:items-start xl:text-left px-2 py-16 w-10/12 xl:w-1/2 xl:pl-24">
          <h2 className="font-Fraunces text-4xl xl:text-5xl xl:w-8/12">
            Transform your brand
          </h2>
          <p className="text-lg text-neutral-DarkGrayishBlue leading-relaxed py-8 w-11/12 xl:w-9/12">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h6 className="font-Fraunces border-b-4 border-primary-Yellow rounded-md border-opacity-40 cursor-pointer">
            LEARN MORE
          </h6>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <img className="w-full xl:w-1/2" src={StandOutBG} alt="Stand Out" />
        <div className="flex flex-col justify-evenly items-center xl:text-left xl:items-start px-2 xl:pl-24 py-16 w-10/12">
          <h2 className="font-Fraunces text-4xl xl:text-5xl">
            Stand out to the right audience
          </h2>
          <p className="text-lg text-neutral-DarkGrayishBlue leading-relaxed py-8 w-11/12 xl:w-9/12">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{' '}
          </p>
          <h6 className="font-Fraunces border-b-4 border-primary-SoftRed rounded-md border-opacity-40 cursor-pointer">
            LEARN MORE
          </h6>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col justify-between items-center text-center relative text-primary-DarkDesaturatedCyanGDesignText">
          <img className="xl:hidden" src={CherryBG} alt="Graphic Design" />
          <img
            className="hidden xl:block"
            src={CherryBGDesktop}
            alt="Graphic Design"
          />
          <div className="absolute left-0 bottom-20 z-10 px-12 leading-loose flex flex-col justify-between h-36 lg:mb-18">
            <h4 className="font-Fraunces text-2xl lg:text-3xl">
              Graphic Design
            </h4>
            <p className="font-thin lg:text-lg xl:w-8/12 mx-auto">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-center relative text-primary-DarkBluePhotographyText">
          <img className="xl:hidden" src={OrangeBG} alt="Graphic Design" />
          <img
            className="hidden xl:block"
            src={OrangeBGDesktop}
            alt="Graphic Design"
          />
          <div className="absolute left-0 bottom-20 z-10 px-12 leading-loose flex flex-col justify-between h-36 lg:mb-18">
            <h4 className="font-Fraunces text-2xl lg:text-3xl">Photography</h4>
            <p className="font-thin lg:text-lg xl:w-8/12 mx-auto">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center py-20">
        <h4 className="text-md xl:text-xl font-Fraunces text-neutral-GrayishBlue tracking-widest uppercase pt-12 pb-6 xl:pb-16">
          client testimonials
        </h4>
        <div className="text-center flex flex-col xl:flex-row justify-evenly items-center text-neutral-DarkGrayishBlue xl:px-8">
          <div className="flex flex-col justify-between items-center w-3/4 px-5 py-6">
            <img className="w-14 rounded-full" src={EmilyPic} alt="emily" />
            <p className="leading-relaxed py-6 xl:px-12">
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
            <p className="leading-relaxed py-6 xl:px-12">
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
            <p className="leading-relaxed py-6 xl:px-12">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h4 className="text-neutral-VeryDarkDesaturatedBlue font-Fraunces">
              Jennie F.{' '}
            </h4>
            <h6 className="text-sm text-neutral-GrayishBlue pt-2">
              Business Owner
            </h6>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 pt-12">
        <img src={Bottle} alt="Milk Bottle" />
        <img src={Orange} alt="Milk Bottle" />
        <img src={Cone} alt="Milk Bottle" />
        <img src={Cubes} alt="Milk Bottle" />
      </div>
      <footer className="bg-primary-DarkModerateCyanFooter text-primary-FooterText flex flex-col justify-between items-center px-2 py-20">
        <img className="w-40" src={FooterLogo} alt="footer logo" />
        <ul className="flex justify-evenly items-center w-11/12 pt-8 pb-14 xl:w-5/12 xl:pt-12 xl:pb-20">
          <li className="cursor-pointer hover:text-neutral-White">About</li>
          <li className="cursor-pointer hover:text-neutral-White">Services</li>
          <li className="cursor-pointer hover:text-neutral-White">Projects</li>
        </ul>
        <div className="flex justify-between items-center w-1/3 xl:w-1/6">
          <i className="cursor-pointer text-xl fa-brands fa-square-facebook hover:text-neutral-White"></i>
          <i className="cursor-pointer text-xl fa-brands fa-instagram hover:text-neutral-White"></i>
          <i className="cursor-pointer text-xl fa-brands fa-twitter hover:text-neutral-White"></i>
          <i className="cursor-pointer text-xl fa-brands fa-pinterest hover:text-neutral-White"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
