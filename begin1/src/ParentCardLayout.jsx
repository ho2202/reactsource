import React from "react";
import CardLayout from "./CardLayout";

const ParentCardLayout = () => {
  return (
    <>
      <CardLayout>
        <p>Props of C</p>
      </CardLayout>
      <CardLayout title="Details"></CardLayout>
      <CardLayout title="Contact">
        <p>Email : example@e.com</p>
        <p>Phone : 123-123-1234</p>
      </CardLayout>
    </>
  );
};

export default ParentCardLayout;
