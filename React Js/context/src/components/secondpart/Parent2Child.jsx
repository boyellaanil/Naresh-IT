import React, { useContext } from "react";
import { messageContext } from "../context/MessageContext";

const Parent2Child = () => {
  let data = useContext(messageContext);
  return <div>{data}</div>;
};

export default Parent2Child;