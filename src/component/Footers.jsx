import { Col, ConfigProvider, Flex, Row, Space, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { RiInstagramFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLink: "#c6c6c6",
          colorLinkHover: "#FFFFFF",
          colorText: "#FFFFFF",
          fontSize: 15,
          fontSizeHeading3: 30,
        },
        components: {
          Layout: {
            footerBg: "#303030",
          },
        },
      }}
    >
      <Footer style={{ borderRadius: "20px 20px 0px 0px", paddingTop: 50, zIndex: 1 }}>
        <Row gutter={[0, { xs: 50 }]}>
          <Col xs={{ span: 22, order: 2 }} sm={{ span: 17, order: 1 }} md={{ offset: 2, span: 15 }} lg={{ offset: 3, span: 14 }} xl={{ offset: 4, span: 13 }}>
            <Space direction="vertical" size="large">
              <Title level={3}>Fazar Budiman</Title>
              <Space direction="horizontal" size="large">
                <FaSquareWhatsapp size={28} color="#FEAE49" />
                <RiInstagramFill size={28} color="#FEAE49" />
                <RxLinkedinLogo size={28} color="#FEAE49" />
              </Space>
            </Space>
          </Col>
          <Col xs={{ span: 14, order: 1 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 3 }} style={{ paddingTop: 10 }}>
            <Flex wrap="wrap" gap="middle" vertical style={{ height: 100 }}>
              <Link to="/">
                <strong>Home</strong>
              </Link>
              <Link to="/about">
                <strong>About</strong>
              </Link>
              <Link to="/education">
                <strong>Education</strong>
              </Link>
              <Link to="/project">
                <strong>Project</strong>
              </Link>
              <Link to="/contact">
                <strong>Contact</strong>
              </Link>
            </Flex>
          </Col>
        </Row>
        <Flex justify="center" style={{ marginTop: 70, marginBottom: "-15px" }}>
          <Typography.Text strong style={{ fontSize: 12 }}>
            Developed By <span style={{ color: "#FEAE49" }}>Fazar Budiman</span>
          </Typography.Text>
        </Flex>
      </Footer>
    </ConfigProvider>
  );
};

export default Footers;
