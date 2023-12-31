import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const elements = useRoutes(routes);

  return (
    <div className="App">
      {elements}
    </div>
  );
}

export default App;
