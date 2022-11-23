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
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewContent />} />
          <Route path="/edit" element={<EditContent />} />
          <Route path="/mydiary" element={<MyDiaryList />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
