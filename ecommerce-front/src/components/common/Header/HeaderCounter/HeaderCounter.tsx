import styles from "./styles.module.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type HeaderCounterProbs = {
  totalQuantity: number;
  svgIcon: React.ReactNode;
  to: string;
  title: string;
};
const { container, totalNum, pumpAnimate, iconWrapper } = styles;

const HeaderCounter = ({
  totalQuantity,
  svgIcon,
  to,
  title,
}: HeaderCounterProbs) => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);

  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;
  useEffect(() => {
    if (totalQuantity === 0) return;
    setIsAnimate(true);

    const debounced = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounced);
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate(to)}>
      <div className={iconWrapper}>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderCounter;
