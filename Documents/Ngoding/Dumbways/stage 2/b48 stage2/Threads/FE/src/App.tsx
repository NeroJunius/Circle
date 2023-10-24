/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import DetailThread from './features/thread/components/DetailThread';
import API, { setAuthToken } from './lib/api';
// import Registration from './pages/Register';
// import { AUTH_CHECK, AUTH_ERROR } from './store/rootReducer';
import { RootState } from './store/types/rootState';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import DetailThread from './features/thread/components/DetailThread';
import { Login } from './pages/Login';
import Register from './pages/Register';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const auth = useSelector((state : RootState) => state.auth);
  
  console.log(auth)

  async function AuthCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      console.log("Auth Check Berhasil", response);
      setIsLoading(false);
    } catch (error) {
      localStorage.removeItem("token");
      setIsLoading(false);
      navigate("/auth/login");
      console.log("Auth Error : ", error);
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      AuthCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {/* {isLoading ? null : ( */}
        <Box>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/detail/:id"  element={localStorage.token ? <DetailThread /> : <Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={!localStorage.token ? <Login /> : <Navigate to="/" />} />
            <Route path="/auth/register" element={!localStorage.token ? <Register /> : <Navigate to="/" />} />
          </Routes>          
        </Box>
      {/* )} */}
    </>
  );
}

export default App;

