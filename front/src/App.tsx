import "./App.css";
import { useContext, createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AllContents from "./pages/AllContents/AllContents";
import Content from "./pages/Content/Content";
import NewContent from "./pages/NewContent/NewContent";
import Register from "./pages/User/Register";
import Login from "./pages/User/Login";
import MyPage from "./pages/MyPage/MyPage";
import Modal from "./components/Modal/Modal";
import { modalReducer, ModalDispatch, ModalState } from "./redux/reducer";

export const StateContext = createContext<ModalState | null>(null);
export const DispatchContext = createContext<ModalDispatch | null>(null);

export function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(modalReducer, { isModalOpen: false });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useModalState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error("Cannot find Provider");
  } // 유효하지 않을땐 에러를 발생
  return state;
}

export function useModalDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find Provider");
  } // 유효하지 않을땐 에러를 발생
  return dispatch;
}

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/modal" element={<Modal />} />
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
    </Provider>
  );
}

export default App;
