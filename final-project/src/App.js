import Routes from './Route/Routes';
import { Toaster } from 'react-hot-toast';
const App = () => (
  <>
    <Toaster
      position="top-right"
      toastOptions={{
        style: { backgroundColor: 'black', color: 'white' },
        success: { duration: 5000 },
        error: { duration: 3000 },
      }}
    />
    <Routes />
  </>
);
export default App;
