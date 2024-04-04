import { CiLocationOn, CiMail } from "react-icons/ci";
import Button from "./Button";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiGrid32 } from "react-icons/ci";

const PropertyCards = ({ propertyData }) => {
  return (
    <div className="relative flex max-w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      {/* Image */}
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <span className="absolute top-4 left-4 uppercase text-[10px] bg-black bg-opacity-60 text-white py-1 px-3 rounded-md">
          under construction
        </span>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="ui/ux review check"
        />
        <Button className="absolute bottom-4 right-4 bg-white text-gray-700 p-3 rounded-md" text={<CiLocationOn />} />
        <Button className="absolute bottom-4 right-16 bg-white text-gray-700 p-3 rounded-md" text={<CiGrid32 />} />
      </div>
      {/* Text-body */}
      <div className="p-4">
        <span className="text-sm bg-gray-400 bg-opacity-10 text-color-blue py-1 px-3 rounded-xl">
          Deliver Date : Q4 2027
        </span>
        <h4 className="my-2 text-2xl font-semibold tracking-wide text-blue-gray-900">
          Ocean Star
        </h4>
        <p className="mt-1">
          <span className="font-bold">From : </span>17,00,000 AED
        </p>
        <p className="mt-1">
          <span className="font-bold">Developer : </span>Emaar
        </p>
      </div>
      <div className="flex p-3 ml-1 text-gray-500 font-light text-sm">
        <p className="flex-center gap-1">
          <CiLocationOn size={"20px"} />
          <span>Ocean point, Mina Rashid, Dubai</span>
        </p>
      </div>
      <hr />

      {/* COntact */}
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
  );
};

export default PropertyCards;
