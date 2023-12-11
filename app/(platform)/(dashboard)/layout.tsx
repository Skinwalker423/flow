import React from "react";
import NavBar from "./_components/navbar";

const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='w-full h-full bg-slate-400'>
      <NavBar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
