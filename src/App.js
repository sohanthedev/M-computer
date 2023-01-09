
import { RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routers';


function App() {
  
  return (
    <div className="App">
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
