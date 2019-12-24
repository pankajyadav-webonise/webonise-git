import React from "react";

const CustomHeading = props => {
  const { frontColor, customPadding, frontSize, fontWeight } = props;
  return (
    <div
      style={{
        color: frontColor,
        padding: customPadding,
        fontSize: frontSize,
        fontWeight: fontWeight
      }}
    >
      Heading
    </div>
  );
};

export default CustomHeading;
