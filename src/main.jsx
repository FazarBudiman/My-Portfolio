import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router.jsx";
import { ConfigProvider } from "antd";
import "./assets/styles/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Noto Sans JP, sans-serif",
          colorPrimary: "#57BEE6",
          colorText: "#000000",
          colorTextQuaternary: "#1E1E2A",
          colorTextTertiary: "#1E1E2A",
          colorSplit: "#FFF",
        },
        components: {
          Layout: {
            headerPadding: 0,
            headerBg: "#FFFFFF",
          },
          Menu: {
            itemBg: "#FFFFFF",
            colorText: "#1E1E2A",
            activeBarHeight: 3,
            itemHoverColor: "#3D424A",
            horizontalItemHoverBg: "#FFF",
            horizontalItemHoverColor: "#3D424A",
            activeBarBorderWidth: 0,
            colorBorder: "#FFFFFF",
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  </React.StrictMode>
);
