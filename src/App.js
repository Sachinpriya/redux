import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
import {Details} from "./Component/Details"
import Home from "./Component/Home";
import Editstudent from "./Component/Editstudent";
import AddStudent from "./Component/AddStudent";

function App() {
  return (
    <Details>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/add/:id" element={<AddStudent />} />
            <Route path="/student/edit/:id" element={<Editstudent />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </Details>
  );
}

export default App;
