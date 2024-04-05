import React, { useEffect, useState } from "react";
import PropertyCards from "./shared/PropertyCards";
import axios from "axios";

const PropertyCardsContainer = ({ label = "Dubai" }) => {

  const [propertiesData, setPropertiesData] = useState([]);
  const searchString = label.toLowerCase();

  const fetchPropertiesData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_USERS_URL}/search?s=${searchString}&perPage=6`
      );
      if (response?.status === 200) {
        setPropertiesData((prev) =>({
            ...prev,
            [searchString]: response?.data.result,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPropertiesData();
  }, []);

  console.log(propertiesData, "==propertiesData");

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
        <PropertyCards propertyData={propertiesData} searchString={searchString}/>
    </div>
  );
};

export default PropertyCardsContainer;
