import './app.css';
import FirstComp from './components/FirstComp';
import Navbar from './components/Navbar';
import { INavbarList } from './types/mainTypes';

const App = () => {
  const webSiteName = 'My Website';
  const navbarList: INavbarList[] = [];
  navbarList.push({
    name: 'home',
    url: '/',
  });

  navbarList.push({
    name: 'contact',
    url: '/contact',
  });

  navbarList.push({
    name: 'about',
    url: '/about',
  });

  navbarList.push({
    name: 'reachus',
    url: '/react',
  });
  return (
    <div className='App'>
      <Navbar webSiteName={webSiteName} navbarList={navbarList} />
      <FirstComp />
      <FirstComp />
    </div>
  );
};

export default App;
