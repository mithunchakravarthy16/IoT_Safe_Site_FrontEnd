import dashboardInfoWindowDataAction from "redux/actions/dashboardInfoWindowActions";

const initialState = {
  dashboardInfoWindowDataValue: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case dashboardInfoWindowDataAction.SET_DASHBOARD_INFO_WINDOW_DATA:
      const { dashboardInfoWindowDataValue } = action;
      return { ...state, dashboardInfoWindowDataValue };
    default:
      return state;
  }
};