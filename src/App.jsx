import Gallery from './Gallery';
import { useGlobalContext } from './GlobalContext';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
