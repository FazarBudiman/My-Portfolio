import { ConfigProvider } from "antd";
import "./assets/styles/app.css";
import Router from "./router/Router";
import { useTheme } from "./context/ThemeContext";

const lightTheme = {
  token: {
    fontFamily: "Noto Sans JP, sans-serif",
    colorPrimary: "#088395",
    colorPrimaryBg: "#f1f1f1",
    colorPrimaryBorder: "#088999",
    colorFillSecondary: "#071952",
    colorText: "#010101",
    colorTextSecondary: "#f1f1f1",
    colorTextQuaternary: "#071952",
    colorTextTertiary: "#071952",
    colorBgContainer: "#fff",
  },
  components: {
    Layout: {
      headerPadding: 0,
      headerBg: "#fff",
      bodyBg: "#f1f1f1",
    },
    Menu: {
      itemBg: "#fff",
      itemHoverColor: "#37b7c3",
      activeBarHeight: 3,
      activeBarBorderWidth: 0,
      colorBorder: "red",
    },
  },
};

const darkTheme = {
  token: {
    fontFamily: "Noto Sans JP, sans-serif",
    colorPrimary: "#088395",
    colorPrimaryBg: "#071952",
    colorPrimaryBorder: "#f1f1f1",
    colorFillSecondary: "#088395",
    colorText: "#f1f1f1",
    colorTextSecondary: "#fff",
    colorTextQuaternary: "#a4a4a4",
    colorTextTertiary: "#a4a4a4",
    colorBgContainer: "#071942",
  },
  components: {
    Layout: {
      headerPadding: 0,
      headerBg: "#071952",
      bodyBg: "#071942",
    },
    Menu: {
      itemBg: "#071952",
      activeBarHeight: 3,
      activeBarBorderWidth: 0,
    },
    Message: {
      contentBg: "#088395",
    },
  },
};

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router />
    </ConfigProvider>
  );
};

export default App;
