//export const zoom = 14;
import moment from "moment-timezone";

export const containerStyle = {
  width: "100%",
  height: "100%",
};

export const mapStyle = [
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#8f8f8f",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#8f8f8f",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#8f8f8f",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#8f8f8f",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#8f8f8f",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#8f8f8f",
      },
    ],
  },
];

export const calculateSchedule = (newDate, openHours, lunchHours) => {
  const fullDateString = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()}`;

  let hasLunchHoursToday = false;

  let isOpened = false;
  let closedOnMorning = false;
  let closedOnLunch = false;

  let fromLunchDate = "";
  let toLunchDate = "";
  switch (newDate.getDay()) {
    case 0:
      if (isNotNill(openHours.sunday)) {
        hasLunchHoursToday = lunchHours.sunday ? true : false;

        const hoursSplitted = openHours.sunday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.sunday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.sunday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;
    case 1:
      if (isNotNill(openHours.monday)) {
        hasLunchHoursToday = lunchHours.monday ? true : false;

        const hoursSplitted = openHours.monday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.monday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.monday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;

    case 2:
      if (isNotNill(openHours.tuesday)) {
        hasLunchHoursToday = lunchHours.tuesday ? true : false;

        const hoursSplitted = openHours.tuesday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.tuesday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.tuesday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;
    case 3:
      if (isNotNill(openHours.wednesday)) {
        hasLunchHoursToday = lunchHours.wednesday ? true : false;

        const hoursSplitted = openHours.wednesday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.wednesday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.wednesday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;
    case 4:
      // if (isNotNill(openHours.thursday)) {
      //   const hoursSplitted = openHours.thursday.split("-");

      //   const fromDate = moment(
      //     `${fullDateString} ${hoursSplitted[0]}:00`,
      //     "YYYY-MM-DD HH:mm:ss"
      //   );
      //   const toDate = moment(
      //     `${fullDateString} ${hoursSplitted[1]}:00`,
      //     "YYYY-MM-DD HH:mm:ss"
      //   );

      //   if (newDate >= fromDate && newDate < toDate) {
      //     isOpened = true;
      //   } else if (newDate < fromDate) {
      //     closedOnMorning = true;
      //   }
      // }
      // break;

      if (isNotNill(openHours.thursday)) {
        hasLunchHoursToday = lunchHours.thursday ? true : false;

        const hoursSplitted = openHours.thursday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.thursday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.thursday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;
    case 5:
      if (isNotNill(openHours.friday)) {
        hasLunchHoursToday = lunchHours.friday ? true : false;

        const hoursSplitted = openHours.friday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.friday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.friday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;
    case 6:
      if (isNotNill(openHours.saturday)) {
        hasLunchHoursToday = lunchHours.saturday ? true : false;

        const hoursSplitted = openHours.saturday.split("-");

        const fromDate = moment(
          `${fullDateString} ${hoursSplitted[0]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        const toDate = moment(
          `${fullDateString} ${hoursSplitted[1]}:00`,
          "YYYY-MM-DD HH:mm:ss"
        );
        fromLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.saturday.split("-")[0]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";
        toLunchDate = hasLunchHoursToday
          ? moment(
              `${fullDateString} ${lunchHours.saturday.split("-")[1]}:00`,
              "YYYY-MM-DD HH:mm:ss"
            )
          : "";

        if (newDate >= fromDate && newDate < toDate) {
          if (
            isNotNill(fromLunchDate) &&
            isNotNill(toLunchDate) &&
            newDate >= fromLunchDate &&
            newDate < toLunchDate
          ) {
            closedOnLunch = true;
          } else {
            isOpened = true;
          }
        } else if (newDate < fromDate) {
          closedOnMorning = true;
        }
      }
      break;
    default:
      break;
  }

  let openCloseAt = "";
  let indexDay = newDate.getDay();

  if (isOpened) {
    switch (indexDay) {
      case 0:
        openCloseAt = isNotNill(openHours.sunday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.sunday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.sunday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.sunday.split("-")[1]} hrs.`
          : "no data";
        break;

      case 1:
        openCloseAt = isNotNill(openHours.monday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.monday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.monday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.monday.split("-")[1]} hrs.`
          : "no data";
        break;

      case 2:
        openCloseAt = isNotNill(openHours.tuesday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.tuesday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.tuesday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.tuesday.split("-")[1]} hrs.`
          : "no data";
        break;

      case 3:
        openCloseAt = isNotNill(openHours.wednesday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.wednesday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.wednesday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.wednesday.split("-")[1]} hrs.`
          : "no data";
        break;

      case 4:
        openCloseAt = isNotNill(openHours.thursday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.thursday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.thursday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.thursday.split("-")[1]} hrs.`
          : "no data";
        break;

      case 5:
        openCloseAt = isNotNill(openHours.friday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.friday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.friday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.friday.split("-")[1]} hrs.`
          : "no data";
        break;

      case 6:
        openCloseAt = isNotNill(openHours.saturday)
          ? hasLunchHoursToday
            ? newDate < fromLunchDate
              ? `Cierra a las ${lunchHours.saturday.split("-")[0]} hrs.`
              : `Cierra a las ${openHours.saturday.split("-")[1]} hrs.`
            : `Cierra a las ${openHours.saturday.split("-")[1]} hrs.`
          : "no data";
        break;

      default:
        break;
    }
  } else {
    if (!closedOnMorning && !closedOnLunch) {
      indexDay++;
    }

    var counterExit = 0;
    while (openCloseAt === "") {
      if (indexDay > 6) indexDay = 0;

      switch (indexDay) {
        case 0:
          if (!isNotNill(openHours.sunday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Domingo` : ``
            } a las ${
              closedOnMorning
                ? openHours.sunday.split("-")[0]
                : closedOnLunch
                ? lunchHours.sunday.split("-")[1]
                : openHours.sunday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        case 1:
          if (!isNotNill(openHours.monday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Lunes` : ``
            } a las ${
              closedOnMorning
                ? openHours.monday.split("-")[0]
                : closedOnLunch
                ? lunchHours.monday.split("-")[1]
                : openHours.monday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        case 2:
          if (!isNotNill(openHours.tuesday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Martes` : ``
            } a las ${
              closedOnMorning
                ? openHours.tuesday.split("-")[0]
                : closedOnLunch
                ? lunchHours.tuesday.split("-")[1]
                : openHours.tuesday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        case 3:
          if (!isNotNill(openHours.wednesday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Miércoles` : ``
            } a las ${
              closedOnMorning
                ? openHours.wednesday.split("-")[0]
                : closedOnLunch
                ? lunchHours.wednesday.split("-")[1]
                : openHours.wednesday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        case 4:
          if (!isNotNill(openHours.thursday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Jueves` : ``
            } a las ${
              closedOnMorning
                ? openHours.thursday.split("-")[0]
                : closedOnLunch
                ? lunchHours.thursday.split("-")[1]
                : openHours.thursday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        case 5:
          if (!isNotNill(openHours.friday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Viernes` : ``
            } a las ${
              closedOnMorning
                ? openHours.friday.split("-")[0]
                : closedOnLunch
                ? lunchHours.friday.split("-")[1]
                : openHours.friday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        case 6:
          if (!isNotNill(openHours.saturday)) {
            indexDay++;
          } else {
            openCloseAt = `Abre ${
              !closedOnMorning && !closedOnLunch ? `el Sábado` : ``
            } a las ${
              closedOnMorning
                ? openHours.saturday.split("-")[0]
                : closedOnLunch
                ? lunchHours.saturday.split("-")[1]
                : openHours.saturday.split("-")[0]
            } hrs.`;
          }
          closedOnMorning = false;
          closedOnLunch = false;
          break;
        default:
          break;
      }

      counterExit++;
      if (counterExit > 8) openCloseAt = "no data";
    }
  }
  return (isOpened ? `Abierto - ` : `Cerrado - `) + openCloseAt;
};

export const createPoint = (agency) => {
  const street = agency.location.street_name;
  const city = agency.location.city_name;

  const point = {
    is_santiago:
      agency.location.city_id.length === 5
        ? agency.location.city_id.startsWith("13")
          ? true
          : false
        : false,
    name: agency.agency_name,
    distance: `${agency.distance
      .toFixed(1)
      .toString()
      .replace(/0+$/, "")
      .replace(/\.+$/, "")} km.`,
    address: `${street.charAt(0).toUpperCase()}${street
      .slice(1)
      .toLowerCase()} ${agency.location.street_number}, ${city
      .charAt(0)
      .toUpperCase()}${city.slice(1).toLowerCase()}`,

    phone: "Próximamente",
    schedule: calculateSchedule(
      getCurrentDate(),
      agency.open_hours,
      agency.lunch_hours
    ), //"Lunes a Viernes de 9:00 a 18:00 hrs.",
    coordenadas: {
      lat: agency.location.geolocation.latitude,
      lng: agency.location.geolocation.longitude,
    },
    services: {
      isPackageAdmission: agency.package_reception,
      isPackageDelivery: agency.pickup_availability,
      isReturnOfPackages: false,
    },

    scheduleDetail: [
      {
        day: "Domingo",
        indexDay: 0,
        open:
          isNotNill(agency.open_hours.sunday) &&
          agency.open_hours.sunday.split("-")[0],
        close:
          isNotNill(agency.open_hours.sunday) &&
          agency.open_hours.sunday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.sunday) &&
          agency.lunch_hours.sunday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.sunday) &&
          agency.lunch_hours.sunday.split("-")[1],
        pickup: isNotNill(agency.cut_hours.sunday) && agency.cut_hours.sunday,
      },
      {
        day: "Lunes",
        indexDay: 1,
        open:
          isNotNill(agency.open_hours.monday) &&
          agency.open_hours.monday.split("-")[0],
        close:
          isNotNill(agency.open_hours.monday) &&
          agency.open_hours.monday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.monday) &&
          agency.lunch_hours.monday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.monday) &&
          agency.lunch_hours.monday.split("-")[1],
        pickup: isNotNill(agency.cut_hours.monday) && agency.cut_hours.monday,
      },
      {
        day: "Martes",
        indexDay: 2,
        open:
          isNotNill(agency.open_hours.tuesday) &&
          agency.open_hours.tuesday.split("-")[0],
        close:
          isNotNill(agency.open_hours.tuesday) &&
          agency.open_hours.tuesday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.tuesday) &&
          agency.lunch_hours.tuesday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.tuesday) &&
          agency.lunch_hours.tuesday.split("-")[1],
        pickup: isNotNill(agency.cut_hours.tuesday) && agency.cut_hours.tuesday,
      },
      {
        day: "Miércoles",
        indexDay: 3,
        open:
          isNotNill(agency.open_hours.wednesday) &&
          agency.open_hours.wednesday.split("-")[0],
        close:
          isNotNill(agency.open_hours.wednesday) &&
          agency.open_hours.wednesday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.wednesday) &&
          agency.lunch_hours.wednesday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.wednesday) &&
          agency.lunch_hours.wednesday.split("-")[1],
        pickup:
          isNotNill(agency.cut_hours.wednesday) && agency.cut_hours.wednesday,
      },
      {
        day: "Jueves",
        indexDay: 4,
        open:
          isNotNill(agency.open_hours.thursday) &&
          agency.open_hours.thursday.split("-")[0],
        close:
          isNotNill(agency.open_hours.thursday) &&
          agency.open_hours.thursday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.thursday) &&
          agency.lunch_hours.thursday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.thursday) &&
          agency.lunch_hours.thursday.split("-")[1],
        pickup:
          isNotNill(agency.cut_hours.thursday) && agency.cut_hours.thursday,
      },
      {
        day: "Viernes",
        indexDay: 5,
        open:
          isNotNill(agency.open_hours.friday) &&
          agency.open_hours.friday.split("-")[0],
        close:
          isNotNill(agency.open_hours.friday) &&
          agency.open_hours.friday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.friday) &&
          agency.lunch_hours.friday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.friday) &&
          agency.lunch_hours.friday.split("-")[1],
        pickup: isNotNill(agency.cut_hours.friday) && agency.cut_hours.friday,
      },
      {
        day: "Sábado",
        indexDay: 6,
        open:
          isNotNill(agency.open_hours.saturday) &&
          agency.open_hours.saturday.split("-")[0],
        close:
          isNotNill(agency.open_hours.saturday) &&
          agency.open_hours.saturday.split("-")[1],
        lunchStart:
          isNotNill(agency.lunch_hours.saturday) &&
          agency.lunch_hours.saturday.split("-")[0],
        lunchEnd:
          isNotNill(agency.lunch_hours.saturday) &&
          agency.lunch_hours.saturday.split("-")[1],
        pickup:
          isNotNill(agency.cut_hours.saturday) && agency.cut_hours.saturday,
      },
    ],
    dimensions: `Hasta ${agency.maximum_package_dimensions.length} x ${agency.maximum_package_dimensions.width} x ${agency.maximum_package_dimensions.height} cms.`,
    weight: `Hasta ${agency.maximum_package_dimensions.weight} kg.`,
    other_location_info:
      agency.location.other_info &&
      agency.location.other_info.charAt(0).toUpperCase() +
        agency.location.other_info.slice(1).toLowerCase(),
  };

  return point;
};

export const getCurrentDate = () => {
  let newDate = moment().tz("America/Santiago").toDate();

  return newDate;
};

export const getDistance = (point1, point2) => {
  let radians = Math.PI / 180;
  let earthRadius = 6371;
  let aux =
    0.5 -
    Math.cos((point2.lat - point1.lat) * radians) / 2 +
    (Math.cos(point1.lat * radians) *
      Math.cos(point2.lat * radians) *
      (1 - Math.cos((point2.lng - point1.lng) * radians))) /
      2;
  return earthRadius * 2 * Math.asin(Math.sqrt(aux));
};

export const sortAgenciesByDistance = (agencies) => {
  let sortedAgencies = agencies.sort((a, b) =>
    a.distance > b.distance ? 1 : -1
  );
  sortedAgencies = { agencies: sortedAgencies };
  return sortedAgencies;
};

export const getDistancesAndSortAgencies = (agencies, actualLocation) => {
  let agenciesWithDistances = agencies.agencies.map((agency) => {
    const agencyLocation = {
      lat: agency.location.geolocation.latitude,
      lng: agency.location.geolocation.longitude,
    };
    return {
      ...agency,
      distance: getDistance(actualLocation, agencyLocation),
    };
  });

  const sortedAgencies = sortAgenciesByDistance(agenciesWithDistances);

  return sortedAgencies;
};

export const isNotNill = (object) => {
  if (object && object !== "") return true;
  return false;
};

export const getDayNameByIndex = (index) => {
  switch (index) {
    case 0:
      return "Domingo";
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    default:
      return "No Válido";
  }
};
