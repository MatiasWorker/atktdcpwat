import { Search } from "feather-icons-react/build/IconComponents";
import React, { Fragment, useEffect, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const searchOptions = {
  componentRestrictions: { country: "cl" },
  language: "es",
};

const SearchBar = ({ updateMapPosition }) => {
  // const [results, setResults] = useState([]);
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState({});

  useEffect(() => {
    // console.log("search address", address);
  }, [address]);

  useEffect(() => {
    // console.log("search latLng", latLng);

    const center = {
      lat: latLng.lat,
      lng: latLng.lng,
    };

    if (typeof latLng.lat !== "undefined" && typeof latLng.lng !== "undefined")
      updateMapPosition(center);
  }, [latLng]);

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        setAddress(results[0].formatted_address);
        getLatLng(results[0]).then((latLng) => setLatLng(latLng));
      })

      .catch((error) => console.error("Error", error));
  };

  return (
    <Fragment>
      <div className="p-4 searchbar-container">
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
          searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="d-flex flex-column align-items-center">
              {/* {window.innerWidth >= 768 && (
                <p className="fs-6">
                  Ingresa una dirección, comuna o región para encontrar tu Punto
                  Blue Express más cercano
                </p>
              )} */}

              <div className="search-bar w-100 position-relative">
                <input
                  {...getInputProps({
                    placeholder: "Ingresa una dirección, comuna o región",
                    className:
                      "location-search-input form-control form-control-lg fs-14px fw-light",
                    type: "text",
                  })}
                />
                <Search size="20" className="search-icon" />
              </div>

              <div className="autocomplete-dropdown-container fw-light autocomplete-container w-100 shadow">
                {loading && <div>Cargando...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active py-2 px-3"
                    : "suggestion-item py-2 px-3";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </Fragment>
  );
};

export default SearchBar;
