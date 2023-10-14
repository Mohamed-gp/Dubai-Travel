import "./index.scss";
import Header from "./Component/header";
import Home from "./pages/Home";
import { BrowserRouter , Route , Routes } from "react-router-dom";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
