export const gorkEyeZonesListData = {
    GET_GORK_EYE_ZONE_LIST_DATA: "GET_GORK_EYE_ZONE_LIST_DATA",
    SET_GORK_EYE_ZONE_LIST_DATA: "SET_GORK_EYE_ZONE_LIST_DATA",
  };
  
  export const getgorkEyeZonesListData = (payload: any) => ({
    type: gorkEyeZonesListData.GET_GORK_EYE_ZONE_LIST_DATA,
    payload: payload,
  });
  
  export const setgorkEyeZonesListData = (gorkEyeZonesListDataValue: any) => ({
    type: gorkEyeZonesListData.SET_GORK_EYE_ZONE_LIST_DATA,
    gorkEyeZonesListDataValue,
  });
  
  export default gorkEyeZonesListData;