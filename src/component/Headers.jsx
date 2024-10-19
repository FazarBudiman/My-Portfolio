import { Col, Grid, Menu, Row, Space, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import { IoMdCloudyNight } from "react-icons/io";
import { FaCloudSun } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { itemMenu } from "../assets/data/itemMenu";
import { useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

const Headers = () => {
  const { xs, sm } = useBreakpoint();
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const navigate = useNavigate();

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
                  <IoMenu color="#303030" size={24} onClick={() => setIsDrawerMenuOpen(!isDrawerMenuOpen)} />
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <IoClose color="#303030" size={24} onClick={() => setIsDrawerMenuOpen(!isDrawerMenuOpen)} />
                </motion.div>
              )}
            </motion.span>
          ) : (
            <Menu mode="horizontal" items={itemMenu} onClick={(value) => handleMenu(value.key)} />
          )}
        </Col>
        <Col>
          <Space size="large">
            <Switch defaultChecked checkedChildren={<FaCloudSun />} unCheckedChildren={<IoMdCloudyNight />} />
          </Space>
        </Col>
      </Row>
      {isDrawerMenuOpen && (
        <motion.div initial={{ opacity: 0, y: 100 }} animate={isDrawerMenuOpen ? "open" : "closed"} variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 100 } }}>
          <Menu items={itemMenu} style={{ height: "100vh", paddingTop: 20 }} onClick={(value) => handleMenu(value.key)} />
        </motion.div>
      )}
    </Header>
  );
};

export default Headers;
