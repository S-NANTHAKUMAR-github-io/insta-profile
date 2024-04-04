import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import Navbar from "./Header";
import UserDetails from "./UserDetails";
import MainContent from "./MainContent";
import BottomFooter from './Footer'

const { Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },  
  } = theme.useToken();

  return (
    <Layout className="bg-slate-100">
      {/* Header */}
      <Navbar />

      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        ></Breadcrumb>
        <UserDetails />
      </Content>
      {/* Posts */}
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 650,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            // marginRight: 80,
            // marginLeft: 80,
          }}
        >
          <MainContent/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          minHeight: 110,
          justifyContent: "space-between",
        }}
        className="bg-slate-100 justify-between gap-4 relative"
      >
        <BottomFooter />
      </Footer>
    </Layout>
  );
};
export default App;
