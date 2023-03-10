import gorkEyeZonesListDataActions from "redux/actions/gorkEyeZonesListActions";

const initialState = {
    gorkEyeZonesListDataValue: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case gorkEyeZonesListDataActions.SET_GORK_EYE_ZONE_LIST_DATA:
      const { gorkEyeZonesListDataValue } = action;
      return { ...state, gorkEyeZonesListDataValue };
    default:
      return state;
  }
};