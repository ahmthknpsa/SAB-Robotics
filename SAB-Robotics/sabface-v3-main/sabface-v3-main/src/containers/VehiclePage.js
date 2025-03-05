import React from "react";
import { Col, Row, Flex } from "antd";
import Vehicle from "../components/VehiclePage/Vehicle";
import LeftCol from "../components/VehiclePage/LeftCol";
import RightCol from "../components/VehiclePage/RightCol";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function VehiclePage() {
  const goBack = () => {
    window.location.reload();
  };
  const borderRadiusLeft = "1.5rem 0 0 1.5rem"; // sol alt ve sol üst köşeler
  const borderRadiusRight = "0 1.5rem 1.5rem 0"; // sağ üst ve sağ alt köşeler

  return (
    <Row
      style={{ width: "87vh", height: "80vh" }}
      className=" bg-sabGreenDark dark:bg-sabGreenHardDark border rounded-3xl border-sabGreenDark dark:border-sabGreenHardDark"
    >
      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          style={{
            height: "100%",

            borderRadius: borderRadiusLeft,
          }}
        >
          <LeftCol />
        </Flex>
      </Col>
      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          style={{
            height: "100%",

            flexDirection: "column", // İçerikleri dikey olarak hizalar
          }}
        >
          <button
            onClick={goBack}
            type="button"
            class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
          >
            <ArrowUturnLeftIcon></ArrowUturnLeftIcon>
            <span>Geri Dön</span>
          </button>
          <Vehicle />
        </Flex>
      </Col>
      <Col span={8}>
        <Flex
          justify="center"
          align="center"
          style={{
            height: "100%",

            borderRadius: borderRadiusRight,
          }}
        >
          <RightCol />
        </Flex>
      </Col>
    </Row>
  );
}

export default VehiclePage;
