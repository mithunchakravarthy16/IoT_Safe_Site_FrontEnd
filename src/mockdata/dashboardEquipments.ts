const dashboardEquipments = {
  aiCameras: {
    id: "",
    img: "",
    title: "",
    count: "",
    category: "",
    list: [
      {
        id: "aiCamera1",
        category: "aiCameras",
        title: "AI Camera #1",
        area: "Construction Area, Zone 1",
        connectivityPercentage: "79%",
        incidentsObservation: "32 min ago",
        operationAlertObservation: "3 days ago",
        motionObservation: "5 sec ago",
        timeStamp: "12-15-2022 | 09:00 AM",
        location: {
          lat: 39.95479636747346,
          lng: -75.19125340481472,
        },
      },
      {
        id: "aiCamera2",
        category: "aiCameras",
        title: "AI Camera #2",
        area: "Construction Area, Zone 2",
        connectivityPercentage: "79%",
        incidentsObservation: "32 min ago",
        operationAlertObservation: "3 days ago",
        motionObservation: "5 sec ago",
        timeStamp: "12-15-2022 | 09:00 AM",
        location: {
          lat: 39.95465062495,
          lng: -75.19156122272521,
        },
      },
    ],
  },
  envrSensors: {
    id: "",
    img: "",
    title: "",
    count: "",
    category: "",
    list: [
      {
        id: "envrSensor1",
        category: "envrSensors",
        title: "Environmental Sensor#1",
        area: "Construction Area, Zone 1",
        connectivityPercentage: "59%",
        incidentsObservation: "32 min ago",
        operationAlertObservation: "3 days ago",
        motionObservation: "5 sec ago",
        timeStamp: "12-15-2022 | 09:00 AM",
        location: {
          lat: 39.9546330296282,
          lng: -75.19113445372379,
        },
        infoIconList: [
          {
            name: "Temperature",
            value: "25°C",
          },
          {
            name: "Humidity",
            value: "40%",
          },
          {
            name: "Carbon Monoxide",
            value: "36Kg",
          },
          {
            name: "Battery",
            value: "75%",
          },
        ],
      },
      {
        id: "envrSensor2",
        category: "envrSensors",
        title: "Environmental Sensor#2",
        area: "Construction Area, Zone 2",
        connectivityPercentage: "49%",
        incidentsObservation: "32 min ago",
        operationAlertObservation: "3 days ago",
        motionObservation: "5 sec ago",
        timeStamp: "12-15-2022 | 09:00 AM",
        location: {
          lat: 39.95467066644549,
          lng: -75.19144746835305,
        },
        infoIconList: [
          {
            name: "Temperature",
            value: "25°C",
          },
          {
            name: "Humidity",
            value: "40%",
          },
          {
            name: "Carbon Monoxide",
            value: "36Kg",
          },
          {
            name: "Battery",
            value: "75%",
          },
        ],
      },
    ],
  },
  floodSensors: {
    id: "",
    img: "",
    title: "",
    count: "",
    category: "",
    list: [
      {
        infoIconList: [
          {
            name: "Temperature",
            value: "25°C",
          },
          {
            name: "Humidity",
            value: "40%",
          },
          {
            name: "Water Level",
            value: "0.58mm",
          },
          {
            name: "Battery",
            value: "75%",
          },
        ],
        id: "floodSensor1",
        category: "floodSensors",
        title: "Flood Sensor #1",
        area: "Construction Area, Zone 1",
        connectivityPercentage: "79%",
        incidentsObservation: "32 min ago",
        operationAlertObservation: "3 days ago",
        motionObservation: "5 sec ago",
        timeStamp: "12-15-2022 | 09:00 AM",
        location: {
          lat: 39.95446073977229,
          lng: -75.19156782580588,
        },
      },
      {
        infoIconList: [
          {
            name: "Temperature",
            value: "25°C",
          },
          {
            name: "Humidity",
            value: "40%",
          },
          {
            name: "Water Level",
            value: "0.58mm",
          },
          {
            name: "Battery",
            value: "75%",
          },
        ],
        id: "floodSensor2",
        category: "floodSensors",
        title: "Flood Sensor #2",
        area: "Construction Area, Zone 2",
        connectivityPercentage: "79%",
        incidentsObservation: "32 min ago",
        operationAlertObservation: "3 days ago",
        motionObservation: "5 sec ago",
        timeStamp: "12-15-2022 | 09:00 AM",
        location: {
          lat: 39.95435610583542,
          lng: -75.19096305748663,
        },
      },
    ],
  },
};

export default dashboardEquipments;
