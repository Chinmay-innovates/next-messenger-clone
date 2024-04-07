"use client";

import useActiveChannel from "../hooks/useActiveChannel";
interface ActiveStatusProps  {
    children: React.ReactNode;
  }
const ActiveStatus:React.FC<ActiveStatusProps> = ({
    children
}) => {
  useActiveChannel();

  return null;
};

export default ActiveStatus;
