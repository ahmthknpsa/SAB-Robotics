import { Input, Button } from "antd";
import { useState } from "react";

const CardRightCol = () => {
  const [count, setCount] = useState(0);
  const [coordinates, setCoordinates] = useState([]);

  const handleCoordinateCountChange = (e) => {
    const newCount = parseInt(e.target.value);
    setCount(newCount);

    const newCoordinates = Array.from({ length: newCount }, (_, index) => ({
      latitude: "",
      longitude: "",
      id: index + 1,
    }));
    setCoordinates(newCoordinates);
  };

  const handleCoordinateChange = (index, field, value) => {
    const updatedCoordinates = [...coordinates];
    updatedCoordinates[index][field] = value;
    setCoordinates(updatedCoordinates);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Input
        type="number"
        min={0}
        placeholder="Koordinat sayısı"
        className="dark:bg-sabDarkBlack p-2 border border-gray-300 rounded text-black dark:text-white mb-4"
        onChange={handleCoordinateCountChange}
      />
      {coordinates.map((coordinate, index) => (
        <div key={index} className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder={`${coordinate.id}. Enlem`}
            className="dark:bg-sabDarkBlack p-2 border border-gray-300 rounded w-24"
            value={coordinate.latitude}
            onChange={(e) =>
              handleCoordinateChange(index, "latitude", e.target.value)
            }
          />
          <Input
            type="text"
            placeholder={`${coordinate.id}. Boylam`}
            className="dark:bg-sabDarkBlack p-2 border border-gray-300 rounded w-24"
            value={coordinate.longitude}
            onChange={(e) =>
              handleCoordinateChange(index, "longitude", e.target.value)
            }
          />
        </div>
      ))}
      <div className="flex justify-center ">
        <Button
          type="primary"
          onClick={handleSubmit}
          className="w-full font-poppins "
        >
          Gönder
        </Button>
      </div>
    </div>
  );
};

export default CardRightCol;
