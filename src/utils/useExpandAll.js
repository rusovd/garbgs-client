import { useState, useEffect } from "react";

export const useExpandAll = () => {
  const [expandAll, setExpandAll] = useState(false);

  const handler = state => {
    setExpandAll(state);
  };
  return { expandAll, setExpandAll, handler };
};
