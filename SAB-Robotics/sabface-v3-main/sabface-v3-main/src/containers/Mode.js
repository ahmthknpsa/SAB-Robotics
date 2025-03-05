import React from "react";
import { Col, Row, Flex } from "antd";
import Weather from "../components/MainPage/Weather";
import CarList from "../components/ModePage/ModeCarList";
import GoogleMaps from "../components/MainPage/GoogleMaps";
import ModeCard from "../components/ModePage/ModeCard";

function Mode() {
  return (
    <Row>
      <Col span={12}>
        <Row style={{ marginLeft: "1rem" }}>
          <Flex
            justify="center"
            align="center"
            style={{
              height: "100%",
            }}
          >
            {<CarList />}
          </Flex>
        </Row>
        <Row>
          <Flex
            justify="center"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <ModeCard />
          </Flex>
        </Row>
      </Col>
      <Col span={12}>
        <Row style={{ height: "30%", marginLeft: "1rem" }}>
          <Flex
            justify="center"
            align="center"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Weather />
          </Flex>
        </Row>
        <Row style={{ height: "70%" }}>
          <Flex
            justify="center"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <GoogleMaps />
          </Flex>
        </Row>
      </Col>
    </Row>
  );
}

export default Mode;
