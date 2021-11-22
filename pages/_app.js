import { ThemeProvider } from 'next-themes';
import '../styles/global.css';
import ToggleMode from '../components/ToggleMode';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
        <ToggleMode />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
