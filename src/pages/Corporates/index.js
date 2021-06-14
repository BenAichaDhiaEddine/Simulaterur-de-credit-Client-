import React, { useEffect, Fragment, useState } from "react";
import { MDBDataTable, MDBBadge, MDBBtn } from "mdbreact";
import { Row, Col, Card, CardBody, Container, Button } from "reactstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { withRouter, Link, useRouteMatch, useHistory } from "react-router-dom";
import SpinnerPage from "../../components/loader";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";
import "./style.scss";

//Actions
import {
  deleteCorporate,
  disableEdit,
  enableEdit,
  getList,
  resetCorporates as reset,
  retrieve,
  toggleCorporate,
} from "../../store/actions";

// Config
const tableHead = [
  {
    label: "Gouvernorat",
    field: "governorate",
    sort: "asc",
    width: 150,
  },
  {
    label: "Banque",
    field: "corporate",
    sort: "asc",
    width: 150,
  },
  {
    label: "Statut",
    field: "status",
    sort: "asc",
    width: 150,
  },
  {
    label: "Exist",
    field: "exist",
    sort: "asc",
    width: 150,
  },
  {
    label: "Features",
    field: "features",
    sort: "asc",
    width: 100,
  },
  {
    label: "Phone",
    field: "phone",
    sort: "asc",
    width: 100,
  },
  {
    label: "Fax",
    field: "fax",
    sort: "asc",
    width: 100,
  },
  {
    label: "Edit",
    field: "edit",
    sort: "asc",
    width: 100,
  },
];

const Corporates = (props) => {
  //const [data, setData] = useState([]);
  // Hooks Declaration
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const { list, error, loading } = useSelector(
    ({ Corporates }) => Corporates
  );

  const mapDataToDisplay = (data) => {
    let columns = [
      {
        label: "Name in Arabic",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 200,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 100,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ];
    let rows = data.map((elm) => {
      return {
        name: elm.name,

        city: elm.city,
        phone: elm.phone,
        email: elm.email,
        status: elm.activated ? (
          <MDBBtn
            pill="true"
            size="sm"
            color="danger"
            onClick={() => {
              dispatch(
                toggleCorporate({
                  id: elm.id,
                  activated: false,
                })
              );
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
              dispatch(
                toggleCorporate({
                  id: elm.id,
                  activated: true,
                })
              );
            }}
          >
            Enable
          </MDBBtn>
        ),
        // manager:
        //   elm.corporate &&
        //   elm.corporate.manager.user.firstName + " " + elm.corporate &&
        //   elm.corporate.manager.user.lastName,
        action: (
          <Fragment>
            <button
              className="btn btn-success waves-effect waves-light btn btn-success "
              onClick={() => {
                dispatch(enableEdit(elm.id));
                dispatch(retrieve(elm.id));
                history.push(`/corporates/${elm.id}`);
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
              className="btn btn-secondary waves-effect waves-light btn btn-danger "
              value={elm.id}
              style={{
                minWidth: "100px",
                marginTop: "10px",
              }}
              onClick={
                () => {
                  
                  dispatch(deleteCorporate(elm))
                  history.push(`/corporates/`);
                  
                }
              }
            >
              Delete
            </button>
            {/* <Link
              to={`/corporates/${elm.id}`}
              className=" waves-effect"
              style={{ color: "white", textDecoration: "none" ,marginTop:"7px"}}
            >
              <button
                className="btn btn-success waves-effect waves-light btn btn-danger "
                value={elm.id}
                style={{
                  minWidth: "100px",
                }}
              >
                Delete
              </button>
            </Link> */}
            <br />
          </Fragment>
        ),
      };
    });
    const display = {
      columns: columns,
      rows: rows,
    };
   
    return display;
  };

  useEffect(() => {
    dispatch(getList());
    return () => {
    };
  }, []);
  
  const getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.list !== prevState.list && nextProps.list.length) {
      const data = nextProps.list.map((row) => {
        return {
          governorate: row.city,
          corporate: row.nameFr,
          status: row.corporate ? (
            <MDBBadge pill color="success">
              Activer
            </MDBBadge>
          ) : (
            <MDBBadge pill color="danger">
              Déactiver
            </MDBBadge>
          ),
          exist: row.active ? (
            <MDBBadge pill color="success">
              Exister
            </MDBBadge>
          ) : (
            <MDBBadge pill color="danger">
              Pas exister
            </MDBBadge>
          ),
          features: row.features.length ? (
            row.features.map((feature) => {
              return (
                <>
                  <MDBBadge pill color="primary">
                    {feature.nameFr}
                  </MDBBadge>
                  <br />
                </>
              );
            })
          ) : (
            <MDBBadge pill color="danger">
              Aucune features
            </MDBBadge>
          ),
          phone: row.phone,
          fax: row.fax,
          edit: (
            <Link
              to={`/corporates/${row.id}`}
              className=" waves-effect"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button
                className="btn btn-success waves-effect waves-light btn btn-success"
                value={row.id}
              >
                Edit
              </button>
            </Link>
          ),
        };
      });
      return { ...prevState, data: { columns: tableHead, rows: data } };
    }
    return prevState;
  };

  //   const { loading } = this.props;
  //   const { data } = this.state;
  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Banks" breadcrumbItem="" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row className="mb-2">
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <div className="text-sm-right">
                        <Button
                          onClick={() => {
                            history.push(`${match.url}/create`);
                            dispatch(disableEdit());
                          }}
                          type="button"
                          color="primary"
                          className="btn-rounded waves-effect waves-light mb-2 mr-2"
                        >
                          <i className="mdi mdi-plus mr-1"></i> Add&nbsp;&nbsp;{" "}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  {loading ? (
                    <SpinnerPage />
                  ) : (
                    <MDBDataTable
                      responsive
                      striped
                      bordered
                      data={mapDataToDisplay(list)}
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   const { list, error, loading } = state.Corporates;
//   return {
//     list,
//     error,
//     loading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getList: () => dispatch(getList()),
//     reset: () => dispatch(reset()),
//   };
// };

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(Corporates)
// );

export default Corporates;
