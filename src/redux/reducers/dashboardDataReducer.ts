import dashboardDataAction from "redux/actions/dashboardActions";

const initialState = {
  dashboardDataValue: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case dashboardDataAction.SET_DASHBOARD_DATA:
      const { dashboardDataValue } = action;
      return { ...state, dashboardDataValue };
    default:
      return state;
  }
};
