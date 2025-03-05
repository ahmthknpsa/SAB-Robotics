import React, { useEffect, useState } from "react";
import { Col, Row, Flex } from "antd";
import Camera from "../components/CameraPage/Camera";
import CarList from "../components/MainPage/CarList";
import VehiclePage from "./VehiclePage";
import { useSelector } from "react-redux";
import { selectIsVehicleClicked } from "../redux/navigationSlice";

function CameraPage() {
  const [showVehiclePage, setShowVehiclePage] = useState(false);

  const isVehicleClicked = useSelector(selectIsVehicleClicked);

  useEffect(() => {
    setShowVehiclePage(isVehicleClicked);
  }, [isVehicleClicked]);

  return (
    <Row>
      <Col span={12}>
        <Flex
          justify="center"
          align="center"
          style={{ height: "100%" }}
          className="scroll-pl-6 snap-x "
        >
          {showVehiclePage ? <VehiclePage /> : <CarList />}
        </Flex>
      </Col>
      <Col
        span={12}
        className="bg-sabGreenDark dark:bg-sabGreenHardDark rounded-3xl px-10"
      >
        <Flex justify="center" align="center">
          <Camera />
        </Flex>
      </Col>
    </Row>
  );
}

export default CameraPage;
