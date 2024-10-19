/* eslint-disable react/prop-types */
import { Layout, Row, Col, Avatar, Typography, Form, Input, Button, Flex, List, Space, Grid } from "antd";
import Headers from "../component/Headers";
import { FaSquareGithub, FaSquareWhatsapp, FaSquareInstagram, FaLinkedin, FaClipboardCheck } from "react-icons/fa6";
import { SiGmail, SiGooglecloud, SiJavascript, SiReact, SiTensorflow } from "react-icons/si";
import BackgroundAnimation from "../component/BackgroundAnimation";
import BentoItem from "../component/BentoItem";
import { itemExperience } from "../assets/data/AboutData";
import profilePicture from "../assets/images/about/profile-picture.jpg";
import { motion } from "framer-motion";

const { Title } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const About = () => {
  const { xs, sm, md, lg, xl } = useBreakpoint();

  const colorCard = "#FFFFFF";
  const colorIcon = "#071952";
  const colorBorder = "#088999";

  return (
    <>
      <Layout>
        <BackgroundAnimation />
        <Headers />
        <Content style={{ minHeight: "100vh", overflowX: "hidden", padding: "14vh 6vw 0vh" }}>
          <Row justify="start" align="stretch" gutter={[16, 16]}>
            {/* Kolom Kiri */}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }} xl={{ span: 14 }} xxl={{ span: 14 }}>
              <BentoItem height="100%">
                <Row gutter={[16, 16]}>
                  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard }}>
                      <Flex gap={"middle"} vertical={(sm && !md) || xs ? true : false} align={(sm && !md) || xs ? "center" : "start"} style={{ borderRadius: "15px", padding: "2rem" }}>
                        <div>
                          <Avatar
                            size={{
                              xs: 100,
                              sm: 100,
                              md: 110,
                              lg: 120,
                              xl: 130,
                              xxl: 150,
                            }}
                            src={profilePicture}
                          />
                        </div>
                        <div>
                          <Title level={3}>
                            My name is{xs && <br />}
                            <code>Fazar Budiman</code>
                          </Title>
                          <Typography.Paragraph>
                            I am a final year Informatics Engineering student at Sunan Gunung Djati State Islamic University Bandung. I have sufficient skills in website development using React. Additionally, I have an interest in Machine
                            Learning and Cloud Computing skills.
                          </Typography.Paragraph>
                        </div>
                      </Flex>
                    </BentoItem>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 24, order: 3 }} md={{ span: 19, order: 3 }} lg={{ span: 24, order: 3 }} xl={{ span: 19, order: 2 }} xxl={{ span: 20 }}>
                    <BentoItem height="100%" padding="1rem 2rem 0rem" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard }}>
                      <Title level={2}>Experience</Title>
                      <List
                        itemLayout="horizontal"
                        dataSource={itemExperience}
                        renderItem={(item) => (
                          <List.Item>
                            <List.Item.Meta avatar={<FaClipboardCheck size={"1.5rem"} color={colorIcon} />} title={item.title} description={item.description} />
                          </List.Item>
                        )}
                      />
                    </BentoItem>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 24, order: 2 }} md={{ span: 5, order: 2 }} lg={{ span: 24, order: 2 }} xl={{ span: 5, order: 3 }} xxl={{ span: 4 }} style={{ textAlign: "center" }}>
                    <BentoItem height="100%" border={`2px solid ${colorBorder}`} padding="1rem 0rem 1rem" style={{ backgroundColor: colorCard }}>
                      <Title level={2}>Skills</Title>
                      <Flex vertical={(lg && !xl) || (sm && !md) ? false : true} justify="space-evenly" align="center" gap={xl ? "small" : "large"}>
                        <SiJavascript size={"3rem"} color={colorIcon} />
                        <SiReact size={"3rem"} color={colorIcon} />
                        <SiTensorflow size={"3rem"} color={colorIcon} />
                        <SiGooglecloud size={"3rem"} color={colorIcon} />
                      </Flex>
                    </BentoItem>
                  </Col>
                </Row>
              </BentoItem>
            </Col>

            {/* Kolom Kanan */}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} xl={{ span: 10 }} xxl={{ span: 10 }}>
              <BentoItem height="100%">
                <Row gutter={[16, { xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }]}>
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 8 }} xl={{ span: 4 }} style={{ height: "9.5vh" }}>
                    <a href="https://www.cloudskillsboost.google/public_profiles/2a5bb05b-c4f1-499a-a112-bffe78205c45" target="_blank" rel="noopener noreferrer">
                      <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colorCard }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }} // Membesar saat hover
                          whileTap={{ scale: 0.9 }}
                          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                          <FaSquareGithub size={"2.9rem"} color={colorIcon} />
                        </motion.div>
                      </BentoItem>
                    </a>
                  </Col>
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 8 }} xl={{ span: 4 }} style={{ height: "9.5vh" }}>
                    <a href="https://www.cloudskillsboost.google/public_profiles/2a5bb05b-c4f1-499a-a112-bffe78205c45" target="_blank" rel="noopener noreferrer">
                      <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colorCard }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }} // Membesar saat hover
                          whileTap={{ scale: 0.9 }}
                          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                          <SiGooglecloud size={"2.9rem"} color={colorIcon} />
                        </motion.div>
                      </BentoItem>
                    </a>
                  </Col>
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 8 }} xl={{ span: 4 }} style={{ height: "9.5vh" }}>
                    <a href="https://linkedin.com/in/fazar-budiman" target="_blank" rel="noopenr noreferrer">
                      <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colorCard }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }} // Membesar saat hover
                          whileTap={{ scale: 0.9 }}
                          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                          <FaLinkedin size={"3rem"} color={colorIcon} />
                        </motion.div>
                      </BentoItem>
                    </a>
                  </Col>
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 8 }} xl={{ span: 4 }} style={{ height: "9.5vh" }}>
                    <a href="https://wa.me/+6281381131455" target="_blank" rel="noopener noreferrer">
                      <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colorCard }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }} // Membesar saat hover
                          whileTap={{ scale: 0.9 }}
                          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                          <FaSquareWhatsapp size={"3rem"} color={colorIcon} />
                        </motion.div>
                      </BentoItem>
                    </a>
                  </Col>
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 8 }} xl={{ span: 4 }} style={{ height: "9.5vh" }}>
                    <a href="https://www.instagram.com/fazar.budiman" target="_blank" rel="noopener noreferrer">
                      <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colorCard }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }} // Membesar saat hover
                          whileTap={{ scale: 0.9 }}
                          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                          <FaSquareInstagram size={"3rem"} color={colorIcon} />
                        </motion.div>
                      </BentoItem>
                    </a>
                  </Col>
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 8 }} xl={{ span: 4 }} style={{ height: "9.5vh" }}>
                    <a href="https://mail.google.com/mail/?view=cm&to=fazarbudiman1907@gmail.com&su=Project&body=" target="_blank" rel="noopener noreferrer">
                      <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colorCard }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }} // Membesar saat hover
                          whileTap={{ scale: 0.9 }}
                          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                          <SiGmail size={"2.8rem"} color={colorIcon} />
                        </motion.div>
                      </BentoItem>
                    </a>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} span={24}>
                    <BentoItem height="100%" padding="1rem 2rem" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard }}>
                      <Flex vertical gap="middle">
                        <Title level={2}>Contact Me</Title>
                        <Form name="basic" layout="vertical" size="middle">
                          <Space direction={xs ? "vertical" : "horizontal"}>
                            <Form.Item label="Your Name" name="username">
                              <Input />
                            </Form.Item>
                            <Form.Item label="Your Email" name="username">
                              <Input />
                            </Form.Item>
                          </Space>

                          <Form.Item label="Subject" name="subject">
                            <Input />
                          </Form.Item>
                          <Form.Item label="Message" name="subject">
                            <Input.TextArea />
                          </Form.Item>

                          <Form.Item
                            wrapperCol={{
                              offset: 8,
                              span: 24,
                            }}
                          >
                            <Button htmlType="submit" type="primary">
                              Send Message
                            </Button>
                          </Form.Item>
                        </Form>
                      </Flex>
                    </BentoItem>
                  </Col>
                </Row>
              </BentoItem>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default About;
