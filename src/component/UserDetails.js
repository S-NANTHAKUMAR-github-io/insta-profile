import React from "react";
import { Button, Divider, Typography, theme } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { LinkOutlined } from "@ant-design/icons";

const UserDetails = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 24,
        minHeight: 300,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        // marginRight: 80,
        // marginLeft: 80,
      }}
    >
      <Row
        style={{ paddingRight: 24, paddingLeft: 44 }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        className="gap-y-[45px]  relative"
      >
        <Col span={10} xs={24} sm={12} md={12} lg={8}>
          <img
            src="http://res.cloudinary.com/dlapfxsrz/image/upload/v1712232608/twjsty9mcwlmmbcmfqlu.jpg"
            alt="kohli"
            className="rounded-full h-[150px] w-[150px]"
          />
        </Col>
        <Col span={14} xs={24} sm={12} md={12} lg={8}>
          <Row gutter={16}>
            <Col span={12} className="flex items-center ">
              <Typography className="text-[25px] whitespace-nowrap">
                virat.kohli
              </Typography>
              <img
                src="https://res.cloudinary.com/dlapfxsrz/image/upload/v1712234105/urty1dcxkoq6kh2hqpui.png"
                alt="verified"
                className="h-[30px] w-[30px] ml-[20px]"
              />
            </Col>
            <Col
              span={12}
              xs={24}
              sm={12}
              md={12}
              lg={8}
              className="whitespace-nowrap"
            >
              <Button
                style={{ marginRight: "20px" }}
                className="bg-slate-100 border-none outline-none text-black font-semibold text-[15px] w-[100px] "
              >
                Follow
              </Button>
              <Button className="bg-slate-100 border-none outline-none text-black font-semibold text-[15px] w-[100px] ">
                Message
              </Button>
            </Col>
          </Row>

          <Row gutter={16} className="top-[30px] relative">
            <Col
              xs={24}
              sm={24}
              md={12}
              className="flex justify-between items-center gap-[50px] whitespace-nowrap"
            >
              <Typography className="border-none outline-none text-black font-semibold text-[15px]">
                1,679 posts
              </Typography>
              <Typography className="border-none outline-none text-black font-semibold text-[15px]">
                267M followers
              </Typography>
              <Typography className="border-none outline-none text-black font-semibold text-[15px]">
                296 following
              </Typography>
            </Col>
          </Row>

          <Row gutter={16} className="top-[60px] relative">
            <Col
              span={12}
              className="whitespace-nowrap  justify-between items-center gap-[50px]"
            >
              <Typography className="border-none outline-none text-black font-semibold text-[16px] w-[100px] ">
                Virat Kohli
              </Typography>
              <Typography className="border-none outline-none text-black  text-[16px] w-[100px] ">
                Carpediem!
              </Typography>
              <Link
                to="https://wrogn.com/collections/spring-summer-collection?utm_source=ViratSocial&utm_medium=LinkInBio&utm_campaign=SS24"
                className=" border-none outline-none text-blue-900 font-semibold text-[17px] w-[100px] "
              >
                <LinkOutlined /> bit.ly/SS24Wrogn
              </Link>
            </Col>
          </Row>
        </Col>
        <Divider />
      </Row>
    </div>
  );
};

export default UserDetails;
