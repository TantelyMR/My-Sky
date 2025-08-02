import { SkyProvider } from './SkyProvider';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <SkyProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SkyProvider>
  );
}

export default App