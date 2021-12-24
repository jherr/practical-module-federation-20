import React from "react";

import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

const { Header, Content } = Layout;

const Home = React.lazy(() => import("home/Home"));
const Profile = React.lazy(() => import("profile/Profile"));
const Search = React.lazy(() => import("search/Search"));

const MENU_KEYS = {
  "/": "1",
  "/search": "2",
  "/profile": "3",
};

const Shell = () => {
  const location = useLocation();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={MENU_KEYS[location.pathname]}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/search">Search</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<div>Loading home</div>}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="/search"
              element={
                <React.Suspense fallback={<div>Loading search</div>}>
                  <Search />
                </React.Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <React.Suspense fallback={<div>Loading profile</div>}>
                  <Profile />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};

export default () => (
  <Router>
    <Shell />
  </Router>
);
