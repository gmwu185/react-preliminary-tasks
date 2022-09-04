import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Notiflix from 'notiflix';

import {
  AuthContext,
  ProtectedRoute,
  DatasContext,
} from './controllers/contexts';
import VisualLayout from './components/visual/VisualLayout';
import Login from './components/visual/Login';
import SignUp from './components/visual/SignUp';
import NotFound from './components/visual/NotFound';
import PageLayout from './components/page/PageLayout';
import ToDoList from './components/page/todolist/index';

const NotiflixDangerColor = '#ff5549';
Notiflix.Loading.init({
  customSvgUrl: `${process.env.PUBLIC_URL}/assets/img/logo-primary.svg`,
  svgSize: '100px',
});
Notiflix.Confirm.init({
  titleColor: NotiflixDangerColor,
  okButtonBackground: NotiflixDangerColor,
  borderRadius: '8px',
});

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [selectType, setSelectType] = useState('all');
  const [nickname, setNickname] = useState(
    localStorage.getItem('nickname') || ''
  );
  const [tabStatus, setTabStatus] = useState([
    { type: 'all', text: '全部', active: true },
    { type: 'unfinish', text: '待完成', active: false },
    { type: 'finish', text: '已完成', active: false },
  ]);
  const [todosData, setTodosData] = useState([]);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [singUpData, setSingUpData] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    Notiflix.Loading.custom('讀取中 ...');
    setTimeout(() => {
      Notiflix.Loading.remove();
    }, 2000);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <DatasContext.Provider
          value={{
            selectType,
            setSelectType,
            nickname,
            setNickname,
            todosData,
            setTodosData,
            loginData,
            setLoginData,
            singUpData,
            setSingUpData,
            tabStatus,
            setTabStatus,
          }}
        >
          <Routes>
            <Route path="/">
              <Route element={<VisualLayout />}>
                <Route index element={<Login />} />
                <Route path="sign_up" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route element={<PageLayout />}>
                  <Route path="/todolist" element={<ToDoList />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </DatasContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
