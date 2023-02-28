export const formattedCardListData = (tabIndex: number, data: any) => {
  let aiCameraArray: any = [];
  let envrSensorArray: any = [];
  let floodSensorArray: any = [];
  data?.map((value: any, index: number) => {
    if (value?.type === "aiCameras") {
      aiCameraArray.push(value);
    } else if (value?.type === "envrSensors") {
      envrSensorArray.push(value);
    } else if (value?.type === "floodSensors") {
      floodSensorArray.push(value);
    }
  });

  let listData: any;
  switch (tabIndex) {
    case 0:
      listData = aiCameraArray;
      break;
    case 1:
      listData = envrSensorArray;
      break;
    case 2:
      listData = floodSensorArray;
      break;
    default:
      break;
  }

  return listData;
};
