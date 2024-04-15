import { CiLocationOn, CiMail } from "react-icons/ci";
import Button from "./Button";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiGrid32 } from "react-icons/ci";

const PropertyCards = ({ propertyData, searchString }) => {
  console.log(propertyData, searchString);
  console.log(propertyData[searchString]);

  return propertyData[searchString]?.map((prop) => (
    <div
      key={prop._id}
      className="relative max-w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      {/* Image */}
      <div className="w-[458px] h-[458px] relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <span className="absolute top-4 left-4 uppercase text-[10px] bg-black bg-opacity-60 text-white py-1 px-3 rounded-md">
          {prop.completionStatus}
        </span>
        <div className="w-full bg-blue-100">
          <img
            className="object-fill mx-auto"
            src={prop.images[0]}
            alt={prop.title}
          />
        </div>
        <Button
          className="absolute bottom-4 right-4 bg-white text-gray-700 p-3 rounded-md"
          text={<CiLocationOn />}
        />
        <Button
          className="absolute bottom-4 right-16 bg-white text-gray-700 p-3 rounded-md"
          text={<CiGrid32 />}
        />
      </div>

      <div className="flex-col">
        {/* Text-body */}
        <div className="p-4">
          <span className="text-sm bg-gray-400 bg-opacity-10 text-color-blue py-1 px-3 rounded-xl">
            Deliver Date : Q4 2027
          </span>
          <h4 className="my-2 text-2xl font-semibold tracking-wide text-blue-gray-900">
            {prop.title}
          </h4>
          <p className="mt-1">
            <span className="font-bold">From : </span>
            {`${prop?.price} AED`}
          </p>
          <p className="mt-1">
            <span className="font-bold">Developer : </span>
            {prop?.developer}
          </p>
        </div>

        <div className="flex-col">
        <div className="flex p-3 ml-1 text-gray-500 font-light text-sm">
          <p className="flex-center gap-1">
            <CiLocationOn size={"20px"} />
            <span>{`${prop?.building} ${prop.location}`}</span>
          </p>
        </div>
        <hr />

        {/* Contact */}
        <div className="flex-center p-3 gap-1">
          <Button
            text="Email"
            icons={<IoMail />}
            classname="flex-1 text-color-blue bg-gray-100 rounded-md"
          />
          <Button
            text="Whatsapp"
            icons={<IoLogoWhatsapp />}
            classname="flex-1 text-color-blue bg-gray-100 rounded-md"
          />
        </div>
        </div>
        
      </div>
    </div>
  ));
};

export default PropertyCards;
