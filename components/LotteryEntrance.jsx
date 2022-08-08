// have a function to enter the lottery
import React from "react";

import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants";

const LotteryEntrance = () => {
  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: "",
    contractAddress: "",
    functionName: "",
    params: "",
    msgValue: "",
  });

  return <div>LotteryEntrance</div>;
};

export default LotteryEntrance;
