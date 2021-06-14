import React, { useState, useEffect, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Form } from "redux-form";
import MapGL from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { setRTLTextPlugin } from "mapbox-gl";
import {
  addCorporateGeography,
  disableEdit,
  editCorporateGeography,
} from "../../../store/actions";

setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true // Lazy load the plugin
);
// Config

const Geography = ({ nextTab }) => {
  const { register, errors, handleSubmit, control, reset } = useForm();
  const [selectedField, setSelectedField] = useState("location");
  const dispatch = useDispatch();
  const history = useHistory();
  const { corporate, editId } = useSelector(
    ({ Corporates }) => Corporates
  );
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 15,
  });
  const [data, setData] = useState({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [-122.41411987304815, 37.792209769935084],
          type: "Point",
        },
      },
    ],
  });

  const onSubmit = ({ latitude, longitude }) => {
    let { _id } = corporate;
    let geographyInfo = {
      id: _id,
      submitData: {
        latitude: latitude.toString(),
        longitude: longitude.toString(),

      },
    };
    if (!editId) {
      dispatch(addCorporateGeography(geographyInfo));
    } else {
      dispatch(editCorporateGeography(geographyInfo));
      dispatch(disableEdit());
      history.push("/corporates");
    }
  };
  useEffect(() => {
    if (editId) {
      if (corporate.geography) {
        reset({
          latitude: corporate.geography.latitude,
          longitude: corporate.geography.longitude,

        });
        setViewport({
          latitude: corporate.geography.latitude,
          longitude: corporate.geography.longitude,
          zoom: 15,
        });
      }
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {

        setViewport({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 15,
        });
      });
    }
  }, []);
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm="4">
            <FormGroup>
              <Label htmlFor="longitude">Longitude</Label>

              <Controller
                name="longitude"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    disabled
                    id="longitude"
                    name="longitude"
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.longitude && (
                <span className="my-2 text-danger">This Field is required</span>
              )}
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label htmlFor="latitude">Latitude</Label>
              <Controller
                name="latitude"
                control={control}
                // defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    disabled
                    id="latitude"
                    name="latitude"
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.latitude && (
                <span className="my-2 text-danger">This Field is required</span>
              )}
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup className="select2-container">
              <label className="control-label">Field Input</label>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                value={selectedField}
                onChange={(event) => {
                  setSelectedField(event.target.value);
                }}
              >
                <option value={"location"}>ADD LOCATION</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          {selectedField === "location" ? (
            <MapGL
              style={{ width: "100%", height: "400px" }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              accessToken={
                "pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q"
              }
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              onViewportChange={setViewport}
              onClick={(event) => {
                control.setValue("latitude", event.lngLat.lat);
                control.setValue("longitude", event.lngLat.lng);
              }}
            ></MapGL>
          ) : (
            <MapGL
              style={{ width: "100%", height: "400px" }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              accessToken={
                "pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q"
              }
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              onViewportChange={setViewport}
            >

            </MapGL>
          )}
        </Row>

        <Row className="my-3">
          <Button
            type="submit"
            color="primary"
            className="mr-1 waves-effect waves-light"
          >
            {editId ? "Finish" : "Next"}
          </Button>
        </Row>
      </Form>
    </Fragment>
  );
};

export default Geography;
