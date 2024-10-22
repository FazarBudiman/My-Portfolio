import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { itemMenu } from "../assets/data/itemMenu";
import { Col, Grid, Menu, Row, Space, Switch, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { IoMdCloudyNight } from "react-icons/io";
import { FaCloudSun } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";

const { useBreakpoint } = Grid;
const { useToken } = theme;

const Headers = () => {
  const { xs, sm } = useBreakpoint();
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { token } = useToken();

  const { toggleTheme } = useTheme();

  const handleMenu = (key) => {
    setIsDrawerMenuOpen(!isDrawerMenuOpen);
    setTimeout(() => {
      navigate(`/${key}`);
    }, 200);
  };

  return (
    <Header style={{ position: "fixed", width: "100%", zIndex: 2 }}>
      <Row align={"middle"}>
        <Col xs={{ offset: 1, span: 19 }} sm={{ offset: 1, span: 20 }} md={{ offset: 2, span: 18 }} lg={{ offset: 3, span: 16 }} xl={{ offset: 3, span: 16 }}>
          {xs || (!xs && !sm) ? (
            <motion.span style={{ position: "absolute", top: -25 }} initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {!isDrawerMenuOpen ? (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 1 }}>
                  <IoMenu color={token.colorText} size={24} onClick={() => setIsDrawerMenuOpen(!isDrawerMenuOpen)} />
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <IoClose color={token.colorText} size={24} onClick={() => setIsDrawerMenuOpen(!isDrawerMenuOpen)} />
                </motion.div>
              )}
            </motion.span>
          ) : (
            <Menu mode="horizontal" items={itemMenu} onClick={(value) => handleMenu(value.key)} />
          )}
        </Col>
        <Col>
          <Space size="large">
            <Switch defaultChecked onChange={toggleTheme} checkedChildren={<IoMdCloudyNight />} unCheckedChildren={<FaCloudSun />} />
          </Space>
        </Col>
      </Row>
      {isDrawerMenuOpen && xs ? (
        <motion.div initial={{ opacity: 0, y: 100 }} animate={isDrawerMenuOpen ? "open" : "closed"} variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 100 } }}>
          <Menu items={itemMenu} style={{ height: "100vh", paddingTop: 20 }} onClick={(value) => handleMenu(value.key)} />
        </motion.div>
      ) : (
        <span></span>
      )}
    </Header>
  );
};

export default Headers;
