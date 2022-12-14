import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AllContents from "./pages/AllContents/AllContents";
import Content from "./pages/Content/Content";
import NewContent from "./pages/NewContent/NewContent";
import Register from "./pages/User/Register";
import Login from "./pages/User/Login";
import MyPage from "./pages/MyPage/MyPage";
// import EditContent from "./pages/EditContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="all" element={<AllContents />} />
            <Route path="mydiary" element={<AllContents />} />
            <Route path="new" element={<NewContent />} />
            <Route path="content/:id" element={<Content />} />
            {/* <Route path="edit" element={<EditContent />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="mypage" element={<MyPage isMain={true} />} />
            <Route path="mypage/edit" element={<MyPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
