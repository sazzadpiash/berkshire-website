import { RouterProvider } from 'react-router-dom';
import { router } from './routes/PublicRoute';
import './App.css';



function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
