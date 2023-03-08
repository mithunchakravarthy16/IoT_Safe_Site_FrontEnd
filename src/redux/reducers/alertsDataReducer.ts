import alertsDataAction from "redux/actions/alertsDataActions";

const initialState = {
  alertsDataValue: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case alertsDataAction.SET_ALERTS_DATA:
      const { alertsDataValue } = action;
      return { ...state, alertsDataValue };
    default:
      return state;
  }
};
