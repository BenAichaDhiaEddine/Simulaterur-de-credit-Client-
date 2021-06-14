import React, { Fragment } from "react";

import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { Form } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { addSFTPConnection,disableEdit } from "../../../store/actions";

const SftpServer = () => {
  const { loading, editMode, corporate, editId } = useSelector(
    (state) => state.Corporates
  );
  const { register, errors, handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const onSubmit = ({ name, ip, port, password }) => {
    let sftpInfo = {
      id: corporate.id !== undefined ? corporate.id : corporate._id,
      submitData: {
        name: name,
        ip: ip,
        port: port,
        password: password,
      },
    };
    dispatch(addSFTPConnection(sftpInfo));
    dispatch(disableEdit());
  };
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm="12">SFTP ServerisCrop</Col>
          <Col sm="6">
            <FormGroup>
              <Label htmlFor="UserName">User name</Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ onChange, value }) => (
                  <Input
                    id="UserName"
                    name="name"
                    type="text"
                    rules={{ required: true }}
                    className="form-control"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.UserName && (
                <span className="my-2 text-danger">This Field is required</span>
              )}
            </FormGroup>
            <Row>
              <Col sm="8">
                <FormGroup>
                  <Label htmlFor="server">Server</Label>

                  <Controller
                    name="ip"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <Input
                        id="server"
                        name="ip"
                        type="text"
                        rules={{ required: true }}
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.server && (
                    <span className="my-2 text-danger">
                      This Field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label htmlFor="port">Port</Label>

                  <Controller
                    name="port"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <Input
                        id="port"
                        name="port"
                        type="number"
                        rules={{ required: true }}
                        className="form-control"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.port && (
                    <span className="my-2 text-danger">
                      This Field is required
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label htmlFor="password">Password</Label>

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ onChange, value }) => (
                  <Input
                    id="password"
                    name="password"
                    type="text"
                    rules={{ required: true }}
                    className="form-control"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.password && (
                <span className="my-2 text-danger">This Field is required</span>
              )}
            </FormGroup>
          </Col>

          <Col sm="6">
            <FormGroup style={{ textAlign: "right" }}>
              Statut :{" "}
              <button className="btn btn-success waves-effect waves-light btn btn-success">
                Online
              </button>
            </FormGroup>
            <FormGroup>&nbsp;</FormGroup>
            <FormGroup>&nbsp;</FormGroup>
            <FormGroup style={{ textAlign: "right" }}>
              <button
                className="btn btn-light waves-effect btn btn-light"
                type="submit"
              >
                Connect
              </button>
            </FormGroup>
          </Col>
        </Row>
        <Row className="my-3">
          <Button
            type="submit"
            color="primary"
            className="mr-1 waves-effect waves-light"
          >
            Finish
          </Button>
        </Row>
      </Form>
    </Fragment>
  );
};

export default SftpServer;
