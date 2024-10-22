/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Card, Col, Flex, Grid, Layout, List, Row, Space, theme, Typography } from "antd";
import Headers from "../component/Headers";
import BackgroundAnimation from "../component/BackgroundAnimation";
import BentoItem from "../component/BentoItem";
import profilePicture from "../assets/images/about/home_profile-picture.jpeg";
import Title from "antd/es/typography/Title";
import { ReactTyped } from "react-typed";
import { itemProjectHighlight } from "../assets/data/HomeData";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";

const { Text } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;
const { useToken } = theme;

const Home = () => {
  const { xs, sm } = useBreakpoint();
  const { token } = useToken();

  return (
    <Layout>
      <BackgroundAnimation />
      <Headers />

      <Content className="content">
        <Row justify="start" gutter={[16, 16]}>
          {/* Profile */}
          <Col xs={{ order: 2, span: 24 }} sm={{ order: 2, span: 24 }} md={{ order: 1, span: 8 }} lg={{ order: 1, span: 6 }} xl={{ order: 1, span: 6 }} xxl={{ order: 1, span: 6 }}>
            <BentoItem className="profile" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
              <Flex vertical align="center" gap="1rem" justify="center">
                <Avatar
                  size={{
                    xs: 150,
                    sm: 150,
                    md: 150,
                    lg: 160,
                    xl: 160,
                    xxl: 150,
                  }}
                  src={profilePicture}
                />
                <Title level={3}>Fazar Budiman</Title>
              </Flex>
            </BentoItem>
          </Col>

          {/* Statement */}
          <Col xs={{ order: 3, span: 24 }} sm={{ order: 3, span: 24 }} md={16} lg={18} xl={18} xxl={18}>
            <BentoItem className="statement" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
              <div>
                <Space direction="vertical">
                  <Text keyboard strong>
                    Do What You Feel Necessary
                  </Text>
                  <Text>
                    This principle defines not only my approach to work but also my attitude toward life. I believe in putting in the effort where it truly matters. As someone who values discipline and responsibility, I commit myself fully
                    to every task. Hard work is not just an obligation for me. it is a passion driven by the belief that each step taken with purpose brings me closer to meaningful outcomes.
                  </Text>
                </Space>

                <Space>
                  <Link to="/about">
                    <Button target="/about" type="primary">
                      About Me
                    </Button>
                  </Link>
                </Space>
              </div>
            </BentoItem>
          </Col>

          {/* Project Highlight */}
          <Col xs={{ order: 4, span: 24 }} sm={{ order: 4, span: 24 }} md={24} lg={24} xl={16} xxl={16}>
            <BentoItem className="project-highlight" height="100%" style={{ padding: `${xs || sm ? "1rem 1rem" : "1rem 2rem"}`, backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
              <Flex justify="space-between">
                <Title level={3}>Project</Title>
                <Link to="/project">
                  <Button type="primary">More Project ...</Button>
                </Link>
              </Flex>
              <List
                grid={{
                  gutter: 16,
                  column: xs ? 1 : 2,
                }}
                dataSource={itemProjectHighlight}
                renderItem={(item) => (
                  <List.Item>
                    <Card
                      hoverable
                      title={item.title}
                      extra={
                        <a href={item.repoLink} target="_blank" rel="noopener noreferrer">
                          Repository
                        </a>
                      }
                    >
                      {item.descriptions}
                    </Card>
                  </List.Item>
                )}
              />
            </BentoItem>
          </Col>

          {/* Interest and Quotes */}
          <Col xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24 }} md={{ order: 4, span: 24 }} lg={24} xl={8} xxl={8}>
            <Row gutter={[8, 8]}>
              {/* Interest */}
              <Col xs={{ order: 2, span: 24 }} sm={{ order: 2, span: 24 }} md={12} lg={12} xl={24} xxl={24}>
                <BentoItem className="interest" height="100%" style={{ padding: `${xs ? "0.5rem" : "2rem"}`, backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
                  <Text keyboard style={{ fontSize: `${xs ? "1.2rem" : "2rem"}` }}>
                    <ReactTyped strings={["Front-End Developer", "Back-End Developer", "Cloud Computing", "Machine Learning"]} typeSpeed={40} backSpeed={50} loop />
                  </Text>
                </BentoItem>
              </Col>

              {/* Quotes */}
              <Col xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24 }} md={12} lg={12} xl={24} xxl={24}>
                <BentoItem className="quotes" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
                  <Space direction="vertical" size={"middle"}>
                    <Text code strong style={{ fontSize: "1rem" }}>
                      "Failure is part of the process, you don't know where you are vulnerable until you fail"
                    </Text>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Text italic>--Mr. Elia (Scorpion)--</Text>
                    </div>
                  </Space>
                </BentoItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
