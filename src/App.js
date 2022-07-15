import Home from "./pages";
import {BrowserRouter,Route,Routes} from'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
