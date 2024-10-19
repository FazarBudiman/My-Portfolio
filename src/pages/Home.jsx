/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Card, Col, Flex, Grid, Layout, List, Row, Space, Typography } from "antd";
import Headers from "../component/Headers";
import BackgroundAnimation from "../component/BackgroundAnimation";
import BentoItem from "../component/BentoItem";
import profilePicture from "../assets/images/about/home_profile-picture.jpeg";
import Title from "antd/es/typography/Title";
import { ReactTyped } from "react-typed";
import { itemProjectHighlight } from "../assets/data/HomeData";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const Home = () => {
  // const navigate = useNavigate();

  // const handleMenu = (page) => {
  //   navigate(`/${page}`);
  //   console.log(page);
  // };

  const { xs } = useBreakpoint();
  // const colorCard = "#FFFFFF";
  // const colorIcon = "#071952";
  const colorBorder = "#088999";

  return (
    <Layout>
      <BackgroundAnimation />
      <Headers />
      <Content style={{ minHeight: "100vh", padding: "14vh 6vw 0vh" }}>
        <Row justify="start" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
            <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem" }}>
              <Flex vertical align="center" gap={"1rem"} justify="center">
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
          <Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18}>
            <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: "#fff" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "2rem", padding: "2rem" }}>
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

          <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}>
            <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: "#fff", padding: "2rem 3rem" }}>
              <Flex justify="space-between">
                <Title level={3}>Project</Title>
                <Link to="/project">
                  <Button type="text">More Project ...</Button>
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
          <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
                <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
                  <Text keyboard style={{ fontSize: `${xs ? "1.5rem" : "2rem"}` }}>
                    <ReactTyped strings={["Front-End Developer", "Back-End Developer", "Cloud Computing", "Machine Learning"]} typeSpeed={40} backSpeed={50} loop />
                  </Text>
                </BentoItem>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
                <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: "#fff", width: "100%", padding: "2rem", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                  <Space direction="vertical" size={"middle"}>
                    <Text code strong style={{ fontSize: "1rem" }}>
                      "Failure is part of the process, you don't know where you are vulnerable until you fail"
                    </Text>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Text mark italic>
                        --Mr. Elia (Scorpion)--
                      </Text>
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
