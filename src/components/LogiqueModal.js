import { useState } from "react";

const LogiqueModal = () => {
  const [revele, changeRevele] = useState(false);

  function toogle() {
    changeRevele(!revele);
  }

  return {
    revele,
    toogle,
  };
};

export default LogiqueModal;
