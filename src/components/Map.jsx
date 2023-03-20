import { memo, useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  MarkerClusterer,
} from "@react-google-maps/api";
import SearchBar from "./Search";
import ListBox from "./ListBox";
import { getPickupPoints } from "../services/getPickupPoints";
import {
  containerStyle,
  mapStyle,
  createPoint,
  getDistancesAndSortAgencies,
} from "../utilities/utilities";
import SharePopUp from "./SharePopUp";
import LazyLoadListBox from "./LazyLoadListBox";

const MapContainer = ({ isMarkerShown }) => {
  const bar = window.location.search;
  const params = new URLSearchParams(bar);
  const selectedId = params.get("id");
  const isBannerEnabled = params.get("banner");

  const [center, setCenter] = useState({
    lat: -33.4488897,
    lng: -70.6692655,
  });
  const [agencies, setAgencies] = useState();
  const [map, setMap] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [topAgency, setTopAgency] = useState();
  const [selectedAgency, setSelectedAgency] = useState();
  const [actualLocation, setActualLocation] = useState(center);
  const [zoom, setZoom] = useState(14);
  const [isSharePopUpOpen, setIsSharePopUpOpen] = useState(false);

  useEffect(() => {
    if (!isDataLoaded) {
      let newCenter = center;
      if (navigator.geolocation) {
        console.log("Geolocation Available");
        navigator.geolocation.getCurrentPosition((position) => {
          // console.log("Geo Latitude is :", position.coords.latitude);
          // console.log("Geo Longitude is :", position.coords.longitude);
          newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setActualLocation(newCenter);
          setCenter(newCenter);
        });
      } else {
        console.log("Geolocation Not Available");
      }
      getPickupPoints().then((agencies) => {
        const sortedAgencies = getDistancesAndSortAgencies(agencies, newCenter);

        setAgencies(sortedAgencies);
        setIsDataLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!agencies) return;
    const sortedAgencies = getDistancesAndSortAgencies(
      agencies,
      actualLocation
    );

    setAgencies(sortedAgencies);
    setTopAgency(null);
    const listBox = document.querySelector(".list-box-container");
    listBox.scrollTop = 0;
  }, [actualLocation]);

  // useEffect(() => {
  //   console.log("Map center", center);
  // }, [center]);

  // useEffect(() => {
  //   console.log("agencies", agencies && agencies);
  // }, [agencies]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA9ifrCNoGXpy2-9pKEAoir4S2jc7KjfMw",
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const updateCenterAndActualLocation = useCallback((latLng) => {
    // console.log("map updating center", latLng);
    setCenter(latLng);
    setActualLocation(latLng);
  }, []);

  const handleBluexMarkerClick = (id) => {
    // console.log("id pressed", id);
    const auxAgency = agencies.agencies.find(
      (agency) => agency.agency_id === id
    );
    // console.log("new selected agency:", auxAgency);

    const listBox = document.querySelector(".list-box-container");
    listBox.scrollTop = 0;

    setTopAgency(auxAgency);
    setSelectedAgency(auxAgency);
    const newCenter = {
      lat: auxAgency.location.geolocation.latitude,
      lng: auxAgency.location.geolocation.longitude,
    };
    setCenter(newCenter);

    //setAgencies(auxAgency);
    return auxAgency;
  };

  const handleClickListboxTitle = (id) => {
    const body = document.querySelector("body");
    body.scrollTo(0, 0);

    const auxAgency = agencies.agencies.find(
      (agency) => agency.agency_id === id
    );
    window.innerWidth < 768 && setTopAgency(auxAgency);
    setSelectedAgency(auxAgency);
    // setTopAgency();
    const newCenter = {
      lat: auxAgency.location.geolocation.latitude,
      lng: auxAgency.location.geolocation.longitude,
    };
    setCenter(newCenter);
    setZoom(zoom === 18 ? 17 : 18);
    // console.log("Listbox Pulsado", id);
  };

  const handleOpenPopUp = () => {
    setIsSharePopUpOpen(true);
  };
  const handleClosePopUp = () => {
    setIsSharePopUpOpen(false);
  };
  return isLoaded ? (
    <>
      {isSharePopUpOpen && (
        <div className="z-index-99999">
          <SharePopUp onClose={handleClosePopUp} />
        </div>
      )}
      <SearchBar
        className="position-absolute search-bar-container"
        updateMapPosition={updateCenterAndActualLocation}
      />
      <div className="w-100 h-100">
        <div className="position-relative w-100 h-100">
          <div className="w-100 h-100 position-relative map-container">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: center.lat,
                lng: center.lng,
              }}
              zoom={zoom}
              onLoad={onLoad}
              onUnmount={onUnmount}
              id={map}
              options={{
                gestureHandling: "greedy",
                disableDefaultUI: true,
                zoomControl: true,
                styles: mapStyle,
              }}
            >
              {isMarkerShown && (
                <MarkerF
                  position={actualLocation}
                  icon={{
                    url: "https://static.blue.cl/images/map_markers/marker_blue_here.png",
                    scaledSize: new window.google.maps.Size(51, 60),
                  }}
                />
              )}
              {isDataLoaded && (
                <MarkerClusterer
                  options={{
                    imagePath:
                      "https://static.blue.cl/images/map_markers/marker_cluster_b",
                    // "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
                    gridSize: 90,
                    zoomOnClick: true,
                    averageCenter: true,
                    maxZoom: 14,
                    imageExtension: "png",
                    imageSizes: [40, 60, 80],
                    //title: "Titulo",
                  }}
                >
                  {(clusterer) =>
                    agencies &&
                    agencies.agencies
                      .filter((agency) => agency.status === "active")
                      .map((agency) => {
                        const position = {
                          lat: agency.location.geolocation.latitude,
                          lng: agency.location.geolocation.longitude,
                        };
                        return (
                          <MarkerF
                            key={agency.agency_id}
                            position={position}
                            icon={{
                              url: "https://static.blue.cl/images/map_markers/marker_blue_standard-1.png",
                              scaledSize: new window.google.maps.Size(34, 40),
                            }}
                            clusterer={clusterer}
                            onClick={() =>
                              handleBluexMarkerClick(agency.agency_id)
                            }
                          />
                        );
                      })
                  }
                </MarkerClusterer>
              )}
            </GoogleMap>
          </div>
          <div className="list-box-container">
            {isDataLoaded ? (
              <div>
                {/* <div className="scroll-down-bar">
                  <span className="bar"></span>
                </div> */}
                {topAgency && (
                  <div
                    className={
                      selectedAgency?.agency_id === topAgency.agency_id
                        ? "selected-list-box"
                        : ""
                    }
                  >
                    <ListBox
                      point={createPoint(topAgency)}
                      key={topAgency.agency_id}
                      id={topAgency.agency_id}
                      onClickTitle={handleClickListboxTitle}
                      onClickShare={handleOpenPopUp}
                      actualLocation={
                        actualLocation.lat + "," + actualLocation.lng
                      }
                    />
                  </div>
                )}

                {agencies &&
                  agencies.agencies
                    .filter(
                      (agency) =>
                        agency.status === "active" &&
                        agency.agency_id !== topAgency?.agency_id
                    )
                    .map((agency) => {
                      const point = createPoint(agency);

                      return (
                        <div
                          key={agency.agency_id}
                          className={
                            selectedAgency?.agency_id === agency.agency_id
                              ? "selected-list-box"
                              : ""
                          }
                        >
                          <ListBox
                            point={point}
                            key={agency.agency_id}
                            id={agency.agency_id}
                            onClickTitle={handleClickListboxTitle}
                            onClickShare={handleOpenPopUp}
                            actualLocation={
                              actualLocation.lat + "," + actualLocation.lng
                            }
                          />
                        </div>
                      );
                    })}
              </div>
            ) : (
              <div>
                <LazyLoadListBox />
                <LazyLoadListBox />
                <LazyLoadListBox />
                <LazyLoadListBox />
                <LazyLoadListBox />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="p-4">
        <p className="fs-1">Cargando...</p>
      </div>
    </>
  );
};

export default memo(MapContainer);
