export const dashboardInfoWindowData = {
    GET_DASHBOARD_INFO_WINDOW_DATA: "GET_DASHBOARD_DATA",
    SET_DASHBOARD_INFO_WINDOW_DATA: "SET_DASHBOARD_DATA",
  };
  
  export const getDashboardInfoWindowData = (payload: any) => ({
    type: dashboardInfoWindowData.GET_DASHBOARD_INFO_WINDOW_DATA,
    payload: payload,
  });
  
  export const setDashboardInfoWindowData = (dashboardInfoWindowDataValue: any) => ({
    type: dashboardInfoWindowData.SET_DASHBOARD_INFO_WINDOW_DATA,
    dashboardInfoWindowDataValue,
  });
  
  export default dashboardInfoWindowData;