import { Layout, Row, Col, Typography, Grid, Avatar, Tooltip, List, Card, Image } from "antd";
import Headers from "../component/Headers";
import BackgroundAnimation from "../component/BackgroundAnimation";
import "../assets/styles/project.css";
import BentoItem from "../component/BentoItem";
import { FaRegLightbulb } from "react-icons/fa6";
import { Meta } from "antd/es/list/Item";
import { itemProjectBackEnd, itemProjectMachineLearning, itemProjectOther, itemTeamOnProjectAqm } from "../assets/data/ProjectData";
import aqmProjectPicure from "../assets/images/project/aquaculture-mate/logo.png";

const { Title } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const Project = () => {
  const { xs, sm, md, lg } = useBreakpoint();

  const colorCard = "#FFFFFF";
  const colorIcon = "#071952";
  const colorBorder = "#088999";

  return (
    <>
      <Layout>
        <BackgroundAnimation />
        <Headers />
        <Content style={{ minHeight: "100vh", padding: "14vh 6vw 0vh" }}>
          <Row justify="start" gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}>
              <BentoItem height="100%">
                <Row gutter={[8, 8]}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <BentoItem className="project-aqm" height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard }}>
                      <Avatar
                        size={{
                          xs: 100,
                          sm: 100,
                          md: 110,
                          lg: 120,
                          xl: 130,
                          xxl: 150,
                        }}
                        src={aqmProjectPicure}
                      />
                      <div>
                        <Title level={2} style={{ color: "#010101", margin: 0, textAlign: "center" }}>
                          Aquaculture Mate
                        </Title>
                        <p style={{ textAlign: "center" }}>
                          This application aims to manage freshwater fish ponds and has implemented machine learning for fish classification. [
                          <a href="https://github.com/C241-PS258" target="_blank" rel="noopener noreferrer">
                            repository
                          </a>
                          ]
                        </p>
                      </div>
                      <Avatar.Group>
                        {itemTeamOnProjectAqm.map((member, index) => {
                          return (
                            <a href={member.linkedId} key={index} target="_blank" rel="noopener noreferrer">
                              <Tooltip title={member.name} placement="top">
                                <Avatar
                                  style={{
                                    backgroundColor: "#010101",
                                  }}
                                  src={member.image}
                                />
                              </Tooltip>
                            </a>
                          );
                        })}
                      </Avatar.Group>
                    </BentoItem>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} style={{ height: (xs || sm || md || lg) && "45vh" }}>
                    <BentoItem className="project-nitro" height="100%">
                      <div>
                        <Title level={2} style={{ color: "#f1f1f1", textAlign: "center" }}>
                          Web Profile Nitroboost
                        </Title>
                        <p style={{ textAlign: "center" }}>
                          This{" "}
                          <a href="https://nitroboost.id" target="_blank" rel="noopener noreferrer">
                            website
                          </a>{" "}
                          is built using React JS and Ant Design as UI library. [
                          <a href="https://github.com/FazarBudiman/Nitroboost-Project" target="_blank" rel="noopener noreferrer">
                            repository
                          </a>
                          ]
                        </p>
                      </div>
                    </BentoItem>
                  </Col>

                  <Col xs={{ span: 24 }} sm={{ order: 2, span: 14 }} md={8} lg={8} xl={8} xxl={8}>
                    <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard, padding: "1rem" }}>
                      <Title level={3} style={{ textAlign: "center" }}>
                        Back-End Developer
                      </Title>
                      <List
                        itemLayout="horizontal"
                        dataSource={itemProjectBackEnd}
                        renderItem={(item) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<FaRegLightbulb color={colorIcon} size={"1rem"} />}
                              title={
                                <a href={item.repoLink} target="_blank" rel="noreferrer noopener">
                                  {item.title}
                                </a>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </BentoItem>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ order: 1, span: 24 }} md={8} lg={8} xl={8} xxl={8}>
                    <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard, padding: "1rem" }}>
                      <Title level={3} style={{ textAlign: "center" }}>
                        Machine Learning
                      </Title>
                      <List
                        itemLayout="horizontal"
                        dataSource={itemProjectMachineLearning}
                        renderItem={(item) => (
                          <List.Item style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <List.Item.Meta
                              avatar={<FaRegLightbulb color={colorIcon} size={"1rem"} />}
                              title={
                                <a href={item.repoLink} target="_blank" rel="noreferrer noopener">
                                  {item.title}
                                </a>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </BentoItem>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ order: 3, span: 10 }} md={8} lg={8} xl={8} xxl={8}>
                    <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard, padding: "1rem" }}>
                      <Title level={3} style={{ textAlign: "center" }}>
                        Other
                      </Title>
                      <List
                        itemLayout="horizontal"
                        dataSource={itemProjectOther}
                        renderItem={(item) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<FaRegLightbulb color={colorIcon} size={"1rem"} />}
                              title={
                                <a href={item.repoLink} target="_blank" rel="noreferrer noopener">
                                  {item.title}
                                </a>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </BentoItem>
                  </Col>
                </Row>
              </BentoItem>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
              <BentoItem height="100%" border={`2px solid ${colorBorder}`} style={{ backgroundColor: colorCard, padding: "1rem" }}>
                <Title level={3} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  Certification
                </Title>
                <div className="masonry-grid">
                  <Image.PreviewGroup>
                    <div className="masonry-item">
                      <Card hoverable bordered={false} cover={<Image alt="example" src="../src/assets/images/project/certificate-bangkit.jpg" />}>
                        <Meta title="Bangkit Academy" style={{ textAlign: "center" }} />
                      </Card>
                    </div>
                    <div className="masonry-item">
                      <Card hoverable bordered={false} cover={<Image alt="example" src="../src/assets/images/project/certificate-google_cloud.jpg" />}>
                        <Meta title="Cloud-GCP" style={{ textAlign: "center" }} />
                      </Card>
                    </div>
                    <div className="masonry-item">
                      <Card hoverable bordered={false} cover={<Image alt="example" src="../src/assets/images/project/certificate-front_end.jpg" />}>
                        <Meta title="Front-End" style={{ textAlign: "center" }} />
                      </Card>
                    </div>
                    <div className="masonry-item">
                      <Card hoverable bordered={false} cover={<Image alt="example" src="../src/assets/images/project/certificate-aws_cloud.jpg" />}>
                        <Meta title="Cloud-AWS" style={{ textAlign: "center" }} />
                      </Card>
                    </div>
                    <div className="masonry-item">
                      <Card hoverable bordered={false} cover={<Image alt="example" src="../src/assets/images/project/certificate-machine_learning.jpg" />}>
                        <Meta title="Machine Learning" style={{ textAlign: "center" }} />
                      </Card>
                    </div>
                    <div className="masonry-item">
                      <Card hoverable bordered={false} cover={<Image alt="example" src="../src/assets/images/project/certificate-back_end.jpg" />}>
                        <Meta title="Back-End" style={{ textAlign: "center" }} />
                      </Card>
                    </div>
                  </Image.PreviewGroup>
                </div>

                {/* <Row gutter={[8, 8]} wrap>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-bangkit.jpg" />}>
                      <Meta title="Bangkit Academy" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-google_cloud.jpg" />}>
                      <Meta title="Back-End" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-aws_cloud.jpg" />}>
                      <Meta title="Back-End" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-aws_cloud.jpg" />}>
                      <Meta title="Back-End" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-aws_cloud.jpg" />}>
                      <Meta title="Back-End" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-aws_cloud.jpg" />}>
                      <Meta title="Back-End" />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card hoverable bordered={false} cover={<img alt="example" src="../src/assets/images/project/certificate-front_end.jpg" />}>
                      <Meta title="Back-End" />
                    </Card>
                  </Col>
                </Row> */}
              </BentoItem>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Project;
