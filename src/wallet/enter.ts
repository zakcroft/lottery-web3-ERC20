import { useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useContracts } from "./contracts";

export function useEnterLottery(
  ethValue: string = "0.1",
  quantity: number = 100
) {
  const { account } = useWeb3React();
  const [enterLotteryTx, setTx] = useState<object>({});
  const [err, setErr] = useState("");
  const { Lottery } = useContracts();

  //lottery.enterLottery("100", { from:accounts[1] })
  const enterLottery = useCallback(async () => {
    try {
      const tx = await Lottery.enterLottery(quantity, {
        from: account,
      });
      setTx(tx);
    } catch (ex: any) {
      setErr(ex.message);
      //debugger
    }
  }, [Lottery]);

  return { enterLottery, enterLotteryTx, err };
}
