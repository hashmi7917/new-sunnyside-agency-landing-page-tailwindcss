import './App.css';
import HeroBgMob from './assets/images/mobile/image-header.jpg';
import Logo from './assets/images/logo.svg';
import MenuIcon from './assets/images/icon-hamburger.svg';
import ArrowDown from './assets/images/icon-arrow-down.svg';

function App() {
  return (
    <div className="w-full mx-auto max-w-md">
      <header
        className="flex flex-col text-center relative"
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${HeroBgMob})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <nav className="flex justify-between items-center p-5">
          <img className="w-30" src={Logo} alt="logo header" />
          <img className="w-30" src={MenuIcon} alt="hamburger menu" />
        </nav>
        <h1 className="text-neutral-White text-5xl font-Fraunces uppercase tracking-widest pt-28">
          we are creatives
        </h1>
        <img
          className="object-contain h-36 my-auto"
          src={ArrowDown}
          alt="arrow"
        />
      </header>
    </div>
  );
}

export default App;
