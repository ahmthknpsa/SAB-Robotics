import React, { useState, useEffect } from "react";
import Stats from "../Stats";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import { selectSelectedId } from "../../redux/ugvSlice";

function RightCol() {
  const [carLat, setCarLat] = useState(null);
  const [carLong, setCarLong] = useState(null);
  const [carSpeed, setCarSpeed] = useState(null); 

  const selectedId = useSelector(selectSelectedId);

  const fetchData = async () => {
    try {
      // UgvRobot bilgilerini çek
      const ugvRobotResponse = await fetch(
        `https://localhost:44315/api/UgvRobot`
      );
      const ugvRobotData = await ugvRobotResponse.json();

      if (!ugvRobotData || !ugvRobotData.length) {
        console.error("No data found in UgvRobot");
        return;
      }

      // Seçilen ID'ye göre veri bul
      const selectedData = ugvRobotData.find((item) => item.id === selectedId);
      
      if (!selectedData) {
        console.error("Selected data not found");
        return;
      }

      // Veri setlerini güncelle
      setCarLat(selectedData.carLat || null);
      setCarLong(selectedData.carLong || null);
      setCarSpeed(selectedData.ugvSpeed || null);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedId) {
      fetchData();

      const intervalId = setInterval(() => {
        fetchData();
      }, 5000);

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [selectedId]); // selectedId değiştiğinde fetchData yeniden çağrılır

  return (
    <Flex
      vertical={true}
      justify="space-evenly"
      align="center"
      style={{ height: "80vh", width: "50vh" }}
    >
      <Stats title={"Hız"} value={carSpeed} suffix={"km/h"} /> {/* Hız bilgisi ekleniyor */}
      <Stats title={"Enlem"} value={carLat} suffix={""} />
      <Stats title={"Boylam"} value={carLong} suffix={""} />
    </Flex>
  );
}

export default RightCol;
