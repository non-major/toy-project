import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewContent from "./pages/NewContent";
import EditContent from "./pages/EditContent";
import MyDiaryList from "./pages/MyDiaryList";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewContent />} />
        <Route path="/edit" element={<EditContent />} />
        <Route path="/mydiary" element={<MyDiaryList />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
