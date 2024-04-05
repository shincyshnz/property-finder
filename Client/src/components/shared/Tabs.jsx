import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(
    React.Children.toArray(children)[0]?.props?.label
  );

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="mx-auto my-12">
      <div className="flex border-b border-gray-300 mb-8">
        {React.Children.map(children, (child) => (
          <button
            key={child.props?.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-2 font-medium border-brand-sea-100 text-brand-sea-100"
                : "text-global-grey1"
            } flex-1 py-2 px-8 max-w-max`}
            onClick={(e) => handleClick(e, child.props?.label)}
          >
            {child.props?.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {React.Children.map(children, (child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}  className={"lg:grid lg:grid-cols-2 lg:gap-3"}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label}  className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };
