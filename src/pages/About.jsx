import { Layout, Row, Col, Avatar, Typography, Form, Input, Button, Flex, List, Grid, message, theme } from "antd";
import Headers from "../component/Headers";
import { FaSquareGithub, FaSquareWhatsapp, FaSquareInstagram, FaLinkedin, FaClipboardCheck } from "react-icons/fa6";
import { SiGmail, SiGooglecloud, SiJavascript, SiReact, SiTensorflow } from "react-icons/si";
import BackgroundAnimation from "../component/BackgroundAnimation";
import BentoItem from "../component/BentoItem";
import { itemExperience } from "../assets/data/AboutData";
import profilePicture from "../assets/images/about/profile-picture.jpg";
import { motion } from "framer-motion";
import "../assets/styles/about.css";

const { Title } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;
const { useToken } = theme;

const About = () => {
  const { xs, sm, md } = useBreakpoint();
  const { token } = useToken();

  const colorIcon = token.colorFillSecondary;

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const validateMessages = {
    required: "Please input your ${label}",
    types: {
      email: "Format ${label} is not relevan",
    },
  };

  const onFinish = async (val) => {
    const api = "https://sheetdb.io/api/v1/ybfmviww4me7c";
    const date = new Date().toISOString();
    const { name, email, subject, message } = val;

    try {
      await fetch(api, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: name,
              email: email,
              subject: subject,
              message: message,
              date: date,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.created !== undefined) {
            form.resetFields();
            messageApi.open({
              type: "success",
              content: <span className="message-registrasi">Pesan Anda telah berhasil dikirim. Terima kasih!</span>,
              className: "custom-class",
            });
          } else {
            messageApi.open({
              type: "error",
              content: <span className="message-registrasi">Maaf, pesan Anda tidak dapat dikirim. Silakan coba lagi nanti.</span>,
              className: "custom-class",
            });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Layout>
        <BackgroundAnimation />
        <Headers />
        <Content className="content">
          <Row justify="start" gutter={[16, 16]}>
            {/* Kolom Kiri */}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }} xl={{ span: 14 }} xxl={{ span: 14 }}>
              <BentoItem height="100%">
                <Row gutter={[16, 16]}>
                  {/* Profile */}
                  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <BentoItem className="about-profile" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
                      <Flex gap={"middle"} vertical={(sm && !md) || xs ? true : false} align={(sm && !md) || xs ? "center" : "start"} style={{ padding: "2rem" }}>
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

                  {/* Experience */}
                  <Col xs={{ span: 24 }} sm={{ span: 24, order: 3 }} md={{ span: 19, order: 3 }} lg={{ span: 24, order: 3 }} xl={{ span: 19, order: 2 }} xxl={{ span: 20 }}>
                    <BentoItem className="experience" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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

                  {/* Skills */}
                  <Col xs={{ span: 24 }} sm={{ span: 24, order: 2 }} md={{ span: 5, order: 2 }} lg={{ span: 24, order: 2 }} xl={{ span: 5, order: 3 }} xxl={{ span: 4 }}>
                    <BentoItem className="skills" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
                      <Title level={2}>Skills</Title>
                      <Row gutter={[16, { xs: 16, sm: 16, md: 16, lg: 16, xl: 12, xxl: 10 }]} align={"middle"} justify={"center"}>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                          <SiJavascript size={"3rem"} color={colorIcon} />
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                          <SiReact size={"3rem"} color={colorIcon} />
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                          <SiTensorflow size={"3rem"} color={colorIcon} />
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                          <SiGooglecloud size={"3rem"} color={colorIcon} />
                        </Col>
                      </Row>
                    </BentoItem>
                  </Col>
                </Row>
              </BentoItem>
            </Col>

            {/* Kolom Kanan */}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }} xl={{ span: 10 }} xxl={{ span: 10 }}>
              <BentoItem height="100%">
                <Row gutter={[8, { xs: 16, sm: 16, md: 16, lg: 12, xl: 16 }]}>
                  {/* Social Media Group */}
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                    <a href="https://github.com/FazarBudiman" target="_blank" rel="noopener noreferrer">
                      <BentoItem className="social-media" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                    <a href="https://www.cloudskillsboost.google/public_profiles/2a5bb05b-c4f1-499a-a112-bffe78205c45" target="_blank" rel="noopener noreferrer">
                      <BentoItem className="social-media" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                    <a href="https://linkedin.com/in/fazar-budiman" target="_blank" rel="noopenr noreferrer">
                      <BentoItem className="social-media" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                    <a href="https://wa.me/+6281381131455" target="_blank" rel="noopener noreferrer">
                      <BentoItem className="social-media" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                    <a href="https://www.instagram.com/fazar.budiman" target="_blank" rel="noopener noreferrer">
                      <BentoItem className="social-media" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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
                  <Col xs={{ span: 8 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 12 }} xl={{ span: 4 }}>
                    <a href="https://mail.google.com/mail/?view=cm&to=fazarbudiman1907@gmail.com&su=Project&body=" target="_blank" rel="noopener noreferrer">
                      <BentoItem className="social-media" height="100%" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
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

                  {/* Form Contact Me */}
                  <Col xs={{ span: 24 }} md={{ span: 24 }} span={24}>
                    <BentoItem height="100%" className="contact-me" style={{ backgroundColor: token.colorPrimaryBg, border: `2px solid ${token.colorPrimaryBorder}` }}>
                      <Flex vertical gap="middle">
                        <Title level={2}>Contact Me</Title>
                        {contextHolder}
                        <Form form={form} name="message" layout="vertical" size="middle" validateMessages={validateMessages} onFinish={(e) => onFinish(e)}>
                          <Row gutter={[8, 0]}>
                            <Col xs={24} sm={12} md={12} lg={24} xl={12} xxl={12}>
                              <Form.Item
                                label="Name"
                                name="name"
                                required
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={24} xl={12} xxl={12}>
                              <Form.Item
                                label="Email"
                                name="email"
                                required
                                rules={[
                                  {
                                    required: true,
                                  },
                                  {
                                    type: "email",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Form.Item
                            label="Subject"
                            name="subject"
                            required
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            label="Message"
                            name="message"
                            required
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Input.TextArea />
                          </Form.Item>

                          <Form.Item style={{ textAlign: "end", padding: "0.5rem 2rem 0rem" }}>
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
