export const alertsData = {
  GET_ALERTS_DATA: "GET_ALERTS_DATA",
  SET_ALERTS_DATA: "SET_ALERTS_DATA",
};

export const getAlertsData = (payload: any) => ({
  type: alertsData.GET_ALERTS_DATA,
  payload: payload,
});

export const setAlertsData = (alertsDataValue: any) => ({
  type: alertsData.SET_ALERTS_DATA,
  alertsDataValue,
});

export default alertsData;
