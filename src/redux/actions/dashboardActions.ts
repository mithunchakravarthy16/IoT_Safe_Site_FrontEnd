export const dashboardData = {
  GET_DASHBOARD_DATA: "GET_DASHBOARD_DATA",
  SET_DASHBOARD_DATA: "SET_DASHBOARD_DATA",
};

export const getDashboardData = (payload: any) => ({
  type: dashboardData.GET_DASHBOARD_DATA,
  payload: payload,
});

export const setDashboardData = (dashboardDataValue: any) => ({
  type: dashboardData.SET_DASHBOARD_DATA,
  dashboardDataValue,
});

export default dashboardData;
