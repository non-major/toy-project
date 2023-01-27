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
import Admin from "./pages/Admin/Admin";
import PrivateRoute from "./route/PrivateRoute";
import { QueryClientProvider, QueryClient } from "react-query";
import EditContent from "./pages/EditContent/EditContent";

import { worker } from "./mocks/browers";
import { Provider } from "react-redux";
import store from "./redux/store";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="all" element={<AllContents />} />
                <Route path="mydiary" element={<AllContents />} />
                <Route path="new" element={<NewContent />} />
                <Route path="content/:id" element={<Content />} />
                <Route path="edit/:id" element={<EditContent />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                  path="mypage/statistics"
                  element={
                    <PrivateRoute>
                      <MyPage isMain={true} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="mypage/useredit"
                  element={
                    <PrivateRoute>
                      <MyPage />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
