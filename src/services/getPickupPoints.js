// import { apiAux } from "../utilities/utilities";

export const getPickupPoints = async () => {
  //const API_URL = "http://localhost:8080/api/cross/v1/agencies/agencies/";
  //const API_URL = "https://devapigw.bluex.cl/api/cross/v1/agencies/agencies/";
  //const API_URL = "https://apigw.bluex.cl/api/cross/v1/agencies/agencies/";
  const API_URL = "https://qaapigw.bluex.cl/api/cross/v1/agencies/agencies/";

  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    country_id: "CL",
    status: "active",
    //city_id: "13124",
    // state_id: "13",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    console.log("Trayendo data");
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();

    return data;

    // return apiAux();
  } catch (error) {
    console.error("no response", error);
  }
};
