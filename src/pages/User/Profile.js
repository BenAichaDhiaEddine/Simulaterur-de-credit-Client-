import React from "react";
import { FormGroup, Row, Col, Label, Input, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Dropzone from "react-dropzone";
import user from "../../assets/images/users/avatar-5.jpg";
import { useForm, Controller } from "react-hook-form";
const Profile = () => {
  const { control, handleSubmit } = useForm();
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Form>
            <Row>
              <Col md="4" className=" border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img className="rounded-circle mt-5" src={user} width="130" />
                  <span className="font-weight-bold">John Doe</span>
                  <span className="text-black-50">john_doe12@bbb.com</span>
                  <span>United States</span>
                </div>
              </Col>
              <Col md="5" className=" mt-5">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    acceptedFiles.map((file) =>
                      Object.assign(file, {
                        preview: URL.createObjectURL(file),
                        formattedSize: formatBytes(file.size),
                      })
                    );
                    //onChange(acceptedFiles);
                    //handleAcceptedFiles(acceptedFiles);
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
              </Col>
              <Col md="9">
                <div className="p-3 py-5">
                  <Row className=" mt-2">
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row className=" mt-3">
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row className=" mt-3">
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                    <Col md="6">
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => (
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="first name"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <div class="mt-5 text-right">
                    <button
                      class="btn btn-primary profile-button"
                      type="button"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
