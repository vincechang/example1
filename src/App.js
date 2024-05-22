import { RouterProvider } from 'react-router-dom';
import rootRouter from 'routes/RootRouter';

function App() {
  return <RouterProvider router={rootRouter} />;
}

export default App;
