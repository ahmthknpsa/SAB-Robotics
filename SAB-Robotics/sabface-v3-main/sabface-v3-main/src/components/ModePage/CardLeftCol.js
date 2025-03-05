import { Input, Button, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

const CardLeftCol = () => {
  const [formData, setFormData] = useState({
    uzunluk: "",
    mesafe: "",
    siraSayisi: "",
    secim: "1",
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Form verilerini işleme
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="uzunluk" className="block text-black font-poppins mb-2">
          Sıra Uzunluğu
        </label>
        <Input
          type="number"
          id="uzunluk"
          name="uzunluk"
          placeholder="Sıra Uzunluğu"
          value={formData.uzunluk}
          onChange={(e) => handleChange("uzunluk", e.target.value)}
          className="text-black border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mesafe" className="block text-black font-poppins mb-2">
          İki Sıra Arası Mesafe
        </label>
        <Input
          type="number"
          id="mesafe"
          name="mesafe"
          placeholder="İki sıra arası mesafe"
          value={formData.mesafe}
          onChange={(e) => handleChange("mesafe", e.target.value)}
          className="text-black border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="siraSayisi"
          className="block text-black font-poppins mb-2"
        >
          Toplam Sıra Sayısı
        </label>
        <Input
          type="number"
          id="siraSayisi"
          name="siraSayisi"
          placeholder="Toplam sıra sayısı"
          value={formData.siraSayisi}
          onChange={(e) => handleChange("siraSayisi", e.target.value)}
          className="text-black border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4 ">
        <label
          htmlFor="donusDerecesi"
          className="block text-black font-poppins mb-2"
        >
          Dönüş Derecesi
        </label>
        <Input
          type="number"
          id="donusDerecesi"
          name="donusDerecesi"
          placeholder="Dönüş derecesi"
          value={formData.donusDerecesi}
          onChange={(e) => handleChange("donusDerecesi", e.target.value)}
          className="text-black border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="secim" className="block text-black font-poppins mb-2">
          İlk Dönüş Açısı
        </label>
        <Select
          id="secim"
          name="secim"
          value={formData.secim}
          onChange={(value) => handleChange("secim", value)}
          className="text-black border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        >
          <Option value="1">Sağ</Option>
          <Option value="2">Sol</Option>
        </Select>
      </div>
      <div>
        <Button
          type="primary"
          onClick={handleSubmit}
          className="w-full font-poppins "
        >
          Gönder
        </Button>
      </div>
    </form>
  );
};

export default CardLeftCol;
