import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import SpinnerPage from "../../components/loader";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { MDBBtn } from "mdbreact";

import { useDispatch, useSelector } from "react-redux";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";
// import "./style.scss";
import Dropzone from "react-dropzone";
import { withNamespaces } from "react-i18next";

import { useForm, Controller } from "react-hook-form";

import { Fragment } from "react";
import { addNewCategory, getCategories, toggleStatus, EditType, deleteType } from "../../store/categories/actions";
const Categories = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { errors, handleSubmit, control, reset } = useForm();
  const [selectedId, setSelectedId] = useState(null);
  const { categoriesList, loading } = useSelector(
    ({ Categories }) => Categories
  );
  const [mode, setMode] = useState("add");
  const onSubmit = (data) => {
    if (mode === "add") {
      const dataToSubmit = {
        "name.ar": data.nameFr,
        "iconPath": data.icon[0].path,
        "description": data.description,
        "enabled": true
      }
      dispatch(addNewCategory(dataToSubmit));
    } else {
      let payload =
      {
        dataToSubmit: {
          "name": data.nameFr,
          "description": data.description,
          "iconPath": data.icon[0]
        },
        id: selectedId,
      };
      dispatch(EditType(payload));
    }
    toggleModal();
  };
  const toggleModal = () => {
    setMode("add");
    setOpen(!open);
    reset({
      nameFr: "",
      nameAr: "",
      description: "",
      icon: ""
    });
  };
  useEffect(() => {
    dispatch(getCategories());

  }, []);
  const mapDataToDisplay = () => {
    let rows = categoriesList.map((elm) => {
      return {
        name: elm.name !== undefined ? elm.name : "",
        customId: elm.customId,
        description: elm.description,
        status: elm.enabled ? (
          <MDBBtn
            pill="true"
            size="sm"
            color="danger"
            onClick={() => {
              dispatch(toggleStatus(elm));
            }}
          >
            Disable
          </MDBBtn>
        ) : (
          <MDBBtn
            pill="true"
            size="sm"
            color="success"
            onClick={() => {
              dispatch(toggleStatus(elm));
            }}
          >
            Enable
          </MDBBtn>
        ),
        phone: elm.phone,
        actions: (
          <Fragment>
            <button
              className="btn btn-success waves-effect waves-light btn btn-success my-2"
              onClick={() => {
                reset({
                  nameFr: elm?.name,
                  description: elm?.description,
                  icon: elm?.icon
                });
                setSelectedId(elm.id);
                setMode("edit");
                setOpen(true);
              }}
              value={elm.id}
              style={{
                minWidth: "100px",
              }}
            >
              Edit
            </button>

            <br />

            <button
              className="btn btn-success waves-effect waves-light btn btn-danger "
              value={elm.id}
              style={{
                minWidth: "100px",
              }}
              onClick={() => {
                dispatch(deleteType(elm));
              }}
            >
              Delete
            </button>

            <br />
          </Fragment>
        ),
      };
    });
    return {
      columns: [
        {
          label: "Name",
          field: "name",
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
        },
        {
          label: "Description",
          field: "description",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          width: 200,
        },
        {
          label: "Actions",
          field: "actions",
          width: 200,
        }
      ],
      rows: rows,
    };
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Categories" breadcrumbItem="List" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Row className="mb-2">
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <div className="text-sm-right">
                        <Button
                          onClick={toggleModal}
                          type="button"
                          color="primary"
                          className="btn-rounded waves-effect waves-light mb-2 mr-2"
                        >
                          <i className="mdi mdi-plus mr-1"></i> Add&nbsp;&nbsp;{" "}
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  {
                    loading ? (<SpinnerPage />) : (
                      <MDBDataTable
                        responsive
                        striped
                        bordered
                        data={mapDataToDisplay()}
                      />
                    )}


                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <Modal
        size="lg"
        isOpen={open}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={toggleModal}>

        <div className="modal-content">
          <ModalHeader toggle={toggleModal}>
            {mode === "add" ? "Add New Category" : "Edit Category"}
          </ModalHeader>
          <ModalBody>
            <div className="">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="nameFr">Name</Label>
                      <Controller
                        control={control}
                        defaultValue=""
                        name="nameFr"
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="nameFr"
                            name="nameFr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.nameFr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>

                  {/* <Col sm="6">
                     <FormGroup>
                      <Label htmlFor="nameAr">Name Ar</Label>
                      <Controller
                        control={control}
                        name="nameAr"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="nameAr"
                            name="nameAr"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.nameAr && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>  */}

                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="description">Description</Label>
                      <Controller
                        control={control}
                        name="description"
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                          <Input
                            id="description"
                            name="description"
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.description && (
                        <span className="my-2 text-danger">
                          This field is required
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                  </Col>
                  <Col sm="6">
                    <Controller
                      name="icon"
                      rules={{ required: true }}
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
                      )}
                    />
                    {errors.icon && (
                      <span className="my-2 text-danger">
                        This field is required
                      </span>
                    )}
                  </Col>
                </Row>

                <Button
                  type="submit"
                  color="primary"
                  className="mr-1 waves-effect waves-light">
                  Save Changes
                </Button>
                <Button type="button" color="secondary" onClick={toggleModal}>
                  Close
                </Button>
              </Form>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default withNamespaces()(Categories);
