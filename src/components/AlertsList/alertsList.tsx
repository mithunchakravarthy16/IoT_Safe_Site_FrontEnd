import { useState, useEffect, Fragment, createRef } from "react";
import moment from "moment";
import theme from "../../theme/theme";
import Tabs from "../../elements/Tabs";
import SearchIcon from "../../assets/searchIcon.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import SearchBox from "../../elements/SearchBox";
import useTranslation from "../../localization/translations";
import AlertsListItem from "components/AlertsListItem";
import { formattedAlertListData } from "../../utils.ts/utils";
import useStyles from "./styles";
import InfoDialog from "components/InfoDialog";
import {addDoc, collection, doc, getDoc, getDocs} from 'firebase/firestore/lite';
import { db } from "services/firebase";

const AlertsList: React.FC<any> = (props) => {
  const {
    alertsData,
    consolidatedData,
    selectedMarker,
    setSelectedNotification,
    selectedNotification,
    tabIndex,
    setTabIndex,
    setNotificationTimeStamp,
    alertsMainList,
    searchOpen,
    setSearchOpen,
    setCurrentOpenInstrument,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [firebaseTabsTheme, setFirebaseTabsTheme]=useState<any>({})
  const [firebaseTabsThemeDestructureEvent, setFirebaseTabsThemeDestructureEvent]=useState<any>({
    eventBgColor:"unset",
   eventTextColor:"unset",  

  })
  const [firebaseTabsThemeDestructureAlerts, setFirebaseTabsThemeDestructureAlerts]=useState<any>({    
   alertsBgColor:"unset",
   alertsTextColor:"unset",

  })

  const [firebaseTabsThemeDestructureOpr, setFirebaseTabsThemeDestructureOpr]=useState<any>({    
    oprBgColor:"unset",
   oprTextColor:"unset",
 
   })

  
  const {
    alertsRightPanel,
    dashboarListTitle,
    listTitleName,
    listSearch,
    dashboardListSection,
    searchClass,
    noResultStyle,
    customNotificationTabs,
  } = useStyles({
    ...appTheme,
     tabThemeEvent:firebaseTabsThemeDestructureEvent,
     tabThemeAlerts:firebaseTabsThemeDestructureAlerts,
     tabThemeOpr:firebaseTabsThemeDestructureOpr,
    });

  useEffect(()=>{
    const buttonCollectionRef = doc(db, "customTheming", "iotTheme" );
    getDoc(buttonCollectionRef)
    .then(response => {
      
      const btns = response.data()
      
      setFirebaseTabsTheme(btns);
      
    })
    .catch(error=> console.log(error.message));
  },[])

  useEffect(()=>{
    if(firebaseTabsTheme){
      firebaseTabsTheme?.tabs?.map((item:any)=>{
        switch(item?.name){
              case "Events" : setFirebaseTabsThemeDestructureEvent({eventBgColor: item?.bgColor, eventTextColor: item?.textColor});
                             
              
               break;
              case "Incidents" : setFirebaseTabsThemeDestructureOpr({oprBgColor: item?.bgColor, oprTextColor: item?.textColor});
                           
              
              break;
              case "Alerts" : setFirebaseTabsThemeDestructureAlerts({alertsBgColor: item?.bgColor, alertsTextColor: item?.textColor});
                            
             
              break;
          
           }
      })
    }

  },[firebaseTabsTheme])

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const { search, noResult, alerts, events, operations } = useTranslation();

  const [selectedRefId, setSelectedRefId] = useState("");

  const [alertsDataList, setAlertsDataList] = useState(
    formattedAlertListData(tabIndex, alertsData)
  );

  const [searchValue, setSearchValue] = useState<any>(alertsDataList);
  const handleTabs = (index: number) => {
    setTabIndex(index);
    setSearchOpen(false);
    setSelectedNotification("");
    setSelectedRefId("");
  };

  useEffect(() => {
    setAlertsDataList(formattedAlertListData(tabIndex, alertsData));
    setSearchValue(formattedAlertListData(tabIndex, alertsData));
  }, [tabIndex]);

  useEffect(() => {
    setAlertsDataList(formattedAlertListData(tabIndex, alertsData));
    setSearchValue(formattedAlertListData(tabIndex, alertsData));
  }, []);

  useEffect(() => {
    switch (selectedTheme) {
      case "red":
        setAppTheme(theme?.redTheme);
        break;
      case "green":
        setAppTheme(theme?.greenTheme);
        break;
      case "yellow":
        setAppTheme(theme?.yellowTheme);
        break;
      case "default":
        setAppTheme(theme?.defaultTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const tabsList = [
    {
      name: events,
      val: 0,
      count: alertsMainList?.events?.length,
    },
    {
      name: alerts,
      val: 1,
      count: alertsMainList?.alerts?.length,
    },
    {
      name: operations,
      val: 2,
      count: alertsMainList?.operations?.length,
    },
  ];

  const handleSearch = (searchValue: any) => {
    let searchResult = alertsDataList?.filter((value: any) => {
      return (
        value?.observation
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase()) ||
        value?.name
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase()) ||
        value?.zone
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase())
      );
    });
    setSearchValue(searchResult);
    setSearchOpen(true);
    setSelectedNotification("");
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchValue(alertsDataList);
    setSelectedNotification("");
  };

  const handleExpandListItem = (index: any, dateTime: any) => {
    if (setCurrentOpenInstrument) {
      setCurrentOpenInstrument("");
    }
    setSelectedNotification(selectedNotification === index ? "" : index);
    setSelectedRefId(index);
    setNotificationTimeStamp(dateTime);
  };

  const [showInfoDialogue, setShowInfoDialogue] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] = useState<string>();

  const handleInfoDialogue = (evt: React.MouseEvent, title: string) => {
    setSelectedNotification("")
    setShowInfoDialogue(true);
    setSelectedTitle(title);
  };

  const refs =
    searchValue && searchValue.length > 0
      ? searchValue.reduce((acc: any, value: any) => {
          acc[value.index] = createRef<any>();
          return acc;
        }, {})
      : "";

  useEffect(() => {
    if ((selectedNotification || selectedRefId) && refs) {
      setTimeout(() => {
        refs[
          selectedNotification ? selectedNotification : selectedRefId
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  }, [refs, selectedRefId, selectedNotification]);

  useEffect(() => {
    if (selectedNotification === -1 || selectedNotification === "") {
      if (tabIndex === 0 && refs[1]) {
        refs[1]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if (tabIndex === 1 && refs[6]) {
        refs[6]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if (tabIndex === 2 && refs[16]) {
        setTimeout(() => {
          refs[16]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 300);
      }
    }
  }, [tabIndex, refs, selectedNotification]);

  return (
    <>
      <div className={alertsRightPanel}>
        <div className={dashboarListTitle}>
          <div className={listTitleName}>
            {!searchOpen ? (
              alerts
            ) : (
              <SearchBox
                searchInput={searchClass}
                placeHolder={search}
                handleSearch={handleSearch}
                searchIsOpen={true}
                fontColor={appTheme?.palette?.dashboard?.blackGrayWhite}
              />
            )}
          </div>
          <div className={listSearch}>
            <img
              src={searchOpen ? CloseIcon : SearchIcon}
              alt="search"
              onClick={searchOpen ? handleSearchClose : handleSearch}
            />
          </div>
        </div>
        <div>
          <Tabs
            // initialIndex={tabIndex}
            initialIndex={tabIndex}
            tabsList={tabsList}
            handleTabs={handleTabs}
            dashboardNotificationClassName={customNotificationTabs}
            tabType={""}
          />
        </div>
        <div className={dashboardListSection}>
          {searchValue && searchValue.length > 0
            ? searchValue?.map((item: any, index: number) => {
                return (
                  <AlertsListItem
                    refs={refs}
                    data={item}
                    key={index}
                    handleExpandListItem={handleExpandListItem}
                    selectedNotification={selectedNotification}
                    notificationTimeStamp={""}
                    handleInfoDialogue={handleInfoDialogue}
                  />
                );
              })
            : noResult}
        </div>
      </div>
      {showInfoDialogue && (
        <InfoDialog
          setShowInfoDialogue={setShowInfoDialogue}
          pageName={"alerts"}
          selectedTitle={selectedTitle}
        />
      )}
    </>
  );
};
export default AlertsList;

// selectedNotification
