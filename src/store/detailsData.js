import { useContext } from "react";
import { Context } from "../Context";

const useUserFlowData = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const updateData = name => {
    setState(prevState => ({
      ...prevState,
      userFlow: {
        ...userFlow,
        name: name
      }
    }));
  }; // 更新状态的方法

  // 返回你需要的部分数据在组件中使用
  return {
    data: state.userFlow,
    updateData
  };
};

export default useUserFlowData;