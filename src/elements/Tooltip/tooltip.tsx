import * as React from "react";
import { useState, useEffect, createRef } from "react";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import useStyles from "./styles";

const INF_Tooltip: React.FC<any> = (props) => {
  const {
    rootContainer
  } = useStyles();
  const tipRef = createRef<any>();

  const [inView, setInView] = useState(false);

  const cb = (entries: any) => {
    const [entry] = entries;
    entry.isIntersecting ? setInView(true) : setInView(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
    };
    const ref = tipRef.current;
    const observer = new IntersectionObserver(cb, options);

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [tipRef]);

  const { tooltipValue, children } = props;

  return (
    <div className={rootContainer} >
      <Tooltip
        className="tooltipTest"
        arrow
        ref={tipRef}
        title={tooltipValue}
        disableInteractive
        TransitionComponent={Zoom}
        PopperProps={{
          sx: {
            display: inView ? "block" : "none",
            zIndex: "99999 !important",
          },
          modifiers: [
            {
              name: "offset",

              options: {
                offset: [0, -8],
              },
            },
          ],
        }}
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "#82848A",
              "& .MuiTooltip-arrow": {
                color: "#82848A",
              },
              color: "white",
              fontSize: "12px",
              borderRadius: 7,
            },
          },
        }}
      >
        <div>{children}</div>
      </Tooltip>
    </div>
  );
};

export default INF_Tooltip;
