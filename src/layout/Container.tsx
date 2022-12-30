import React from "react";

type ContainerType = React.FC<{
  className?: string;
}>;
const Container: ContainerType = ({ className, children }) => {
  return (
    <>
      <div
        className={`w-full max-w-7xl md:max-w-6xl lg:max-w-5xl mx-auto  ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
