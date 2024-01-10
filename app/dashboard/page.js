"use client";
import { DashboardLayout } from "@/components/Dashboard/Layout";

import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineFolderView } from "react-icons/ai";
const dashboard = ({ children }) => {
  return (
    <>
      <DashboardLayout>
        <h2>Hello World</h2>
      </DashboardLayout>
    </>
  );
};

export default dashboard;
