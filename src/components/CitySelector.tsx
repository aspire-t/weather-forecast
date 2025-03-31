import React from 'react';
import { Select } from 'antd';
import cityData from '../city/city.json';

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity, onCityChange }) => {
  const options = cityData.map(item => ({
    value: item.city,
    label: item.city
  }));

  return (
    <div className="city-selector">
      <Select
        showSearch
        style={{ width: 200 }}
        value={selectedCity}
        onChange={onCityChange}
        placeholder="请选择城市"
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={options}
      />
    </div>
  );
};

export default CitySelector;