import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RouterPaths from '../consts/RouterPaths';
import Home from '../home/page';
import Login from '../login/page';
import Register from '../register/page';

export default function RouteProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.HOME} element={<Home />} />

        <Route path={RouterPaths.LOGIN} element={<Login />} />

        <Route path={RouterPaths.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
