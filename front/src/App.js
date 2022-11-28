import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllContents from "./pages/AllContents";
// import Content from "./pages/Content";
// import NewContent from "./pages/NewContent";
// import EditContent from "./pages/EditContent";
// import MyDiaryList from "./pages/MyDiaryList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="all" element={<AllContents />} />
            {/* <Route path="new" element={<NewContent />} />
            <Route path="content" element={<Content />} />
            <Route path="edit" element={<EditContent />} />
            <Route path="mydiary" element={<MyDiaryList />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="mypage" element={<MyPage isMain={true} />} />
            <Route path="mypage/edit" element={<MyPage />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
