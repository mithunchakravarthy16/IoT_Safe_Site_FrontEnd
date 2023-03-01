import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useStyles from "./styles";

interface TabProps {
  initialIndex: any;
  tabsList: any;
  handleTabs: any;
  dashboardNotificationClassName?: any;
  tabType: any;
}

const INF_Tabs = (props: TabProps) => {
  const {
    initialIndex,
    tabsList,
    handleTabs,
    dashboardNotificationClassName,
    tabType,
  } = props;

  const { itemCount, itemText, tabsRoot, tabRoot } = useStyles();

  const [value, setValue] = useState<number>(initialIndex);

  useEffect(() => {
    setValue(initialIndex);
  }, [initialIndex]);

  const handleChange = (event: any, val: any) => {
    setValue(val);
    handleTabs(val);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={dashboardNotificationClassName}>
          <Tabs
            value={value !== undefined && value}
            onChange={handleChange}
            indicatorColor="secondary"
            classes={{ root: !tabsList[0].count ? tabsRoot : "" }}
          >
            {tabsList.map((item: any, index: number) => (
              <Tab
                classes={{ root: !item?.count ? tabsRoot : "" }}
                key={index}
                value={index}
                label={
                  item?.count ? (
                    <div>
                      <img src={item.icon} alt="icon" />
                      <div className={itemCount}></div>
                      <div className={itemText}>
                        {item?.name}
                        {item?.count}
                      </div>
                    </div>
                  ) : (
                    <div>{item?.name}</div>
                  )
                }
              />
            ))}
          </Tabs>
        </div>
      </Grid>
    </Grid>
  );
};
export default INF_Tabs;