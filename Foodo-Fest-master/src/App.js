import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/dashboard";
import Orders from "./containers/orders";
import Login from "./containers/login";
import Auth from "./components/Auth";
import Customers from "./containers/customer";
import Categories from "./containers/categories";
import MenuList from "./containers/menuList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }
        />
        <Route
          path="/customers"
          element={
            <Auth>
              <Customers />
            </Auth>
          }
        />
        <Route
          path="/categories"
          element={
            <Auth>
              <Categories />
            </Auth>
          }
        />
        <Route
          path="/menuList"
          element={
            <Auth>
              <MenuList />
            </Auth>
          }
        />
        <Route
          path="/orders"
          element={
            <Auth>
              <Orders />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
