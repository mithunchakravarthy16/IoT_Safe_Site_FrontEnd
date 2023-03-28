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
  tabType?: any;
  pageName?: any,
}

const INF_Tabs = (props: TabProps) => {
  const {
    initialIndex,
    tabsList,
    handleTabs,
    dashboardNotificationClassName,
    tabType,
    pageName,
  } = props;

  const { itemCount, itemText, tabsRoot, tabRoot, tabHeadingText } =
    useStyles();

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
            // classes={{ root: !tabsList[0].count ? tabsRoot : "" }}
          >
            {tabsList?.map((item: any, index: number) => (
              <Tab
                // classes={{ root: !item?.count ? tabsRoot : "" }}
                classes={{ root: tabsRoot }}
                key={index}
                value={index}
                label={
                  item?.count ? 
                    <div>
                      {item?.icon ? (
                        <>
                          
                          <img src={item?.icon} alt="icon" />
                          <div className={itemCount}></div>
                          <div className={itemText}>
                            {item?.name}
                            {item?.count}
                          </div>
                        </>
                      ) : (
                        <>
                          
                          <div className={itemCount}> {item?.count}</div>
                          <div className={itemText}>{item?.name}</div>
                        </>
                      )}
                    </div>
                  : 
                  pageName && pageName === "infoDialogue"?
                  
                  <div>{item?.name}</div>
                  :
                    <>
                      <img src={item?.icon} alt="icon" />
                      <div className={tabHeadingText}>{item?.name}</div>
                    </>
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
