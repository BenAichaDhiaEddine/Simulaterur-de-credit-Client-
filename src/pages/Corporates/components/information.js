import React, { useState, Fragment } from "react";

import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addCorporateInformation,
  EditCorporateInformation,
} from "../../../store/actions";
import { useEffect } from "react";

const Information = ({ nextTab, id }) => {
  const dispatch = useDispatch();
  const [selectedFiles, setSelectFiles] = useState([]);
  const { register, errors, handleSubmit, control, reset } = useForm();
  const { loading, editMode, corporate, editId, stepNumber } = useSelector(
    (state) => state.Corporates
  );
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const onSubmit = (data) => {

    let form = new FormData();
    form.append("name[fr]", data.name);
    form.append("name[ar]", data.namear);
    form.append("phone", data.phone);
    form.append("email", data.email);
    form.append("city[ar]", data.cityar);
    form.append("city[fr]", data.city);
    form.append("fax", data.fax);
    form.append("website", data.website);
    form.append("state", data.state);
    form.append("number", data.number);
    form.append("codePostal", data.zip);
    form.append("street", data.street);
    form.append("logo", data.files[0]);


    if (editId === null) {
      dispatch(addCorporateInformation(form));

    } else {
      dispatch(EditCorporateInformation(form, editId));
    }
  };
  useEffect(() => {
    if (editMode === true) {

      reset({
        name: corporate.name.fr,
        namear: corporate.name.ar,
        city: corporate.city.fr,
        cityar: corporate.city.ar,
        phone: corporate.phone,
        email: corporate.email,
        website: corporate.website,
        fax: corporate.fax,
        number: corporate.number,
        zip: corporate.codePostal,
        street: corporate.street,
        state: corporate.state.ar,
      });
    }
  }, []);
  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectFiles(files);
  };
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs="12">
            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.name && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="city">City</Label>
                  <Controller
                    name="city"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.city && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">Phone</Label>

                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="phone"
                        name="phone"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.phone && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="fax">Fax</Label>

                  <Controller
                    name="fax"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="fax"
                        name="fax"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.fax && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
              </Col>

              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="namear">Name Ar</Label>
                  <Controller
                    name="namear"
                    rules={{ required: true }}
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="namear"
                        name="namear"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.namear && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cityar">City Ar</Label>

                  <Controller
                    name="cityar"
                    rules={{ required: true }}
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="cityar"
                        name="cityar"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.email && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>

                  <Controller
                    name="email"
                    rules={{ required: true }}
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.email && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="website">Website</Label>

                  <Controller
                    name="website"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <Input
                        id="website"
                        name="website"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.website && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col sm="4">
                <Controller
                  name="files"
                  rules={{ required: editMode ? false : true }}
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        acceptedFiles.map((file) =>
                          Object.assign(file, {
                            preview: URL.createObjectURL(file),
                            formattedSize: formatBytes(file.size),
                          })
                        );
                        onChange(acceptedFiles);
                        
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="dz-message needsclick">
                              <div className="mb-3">
                                <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  )}
                />
                {errors.files && (
                  <span className="my-2 text-danger">
                    This field is required
                  </span>
                )}
              </Col>
            </Row>
            <Row>
              <Col sm="12">Address</Col>
              <Col sm="3">
                <FormGroup>
                  <Label htmlFor="street">Street</Label>

                  <Controller
                    name="street"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <Input
                        id="street"
                        name="street"
                        type="text"
                        rules={{ required: true }}
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.street && (
                    <span className="my-2 text-danger">
                      This street is required
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label htmlFor="number">Number</Label>

                  <Controller
                    name="number"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <Input
                        id="number"
                        name="number"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.number && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label htmlFor="zip">Zip code</Label>

                  <Controller
                    name="zip"
                    rules={{ required: true }}
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="zip"
                        name="zip"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.zip && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label htmlFor="state">State</Label>
                  <Controller
                    name="state"
                    rules={{ required: true }}
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.state && (
                    <span className="my-2 text-danger">
                      This field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>

            <Button
              type="submit"
              color="primary"
              className="mr-1 waves-effect waves-light"
            >
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default Information;
