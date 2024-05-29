import BlogList from "./BlogList";
import Create from "./Create";
import Details from "./Details";
import Home from "./Home";
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>  
          <Route path="/" element={  <Home />}/>
          </Routes>

          <Routes>  
          <Route path="/create" element={  <Create />}/>
          </Routes>
        
          <Routes>
            <Route path="/blogs/:id" element={<Details/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
