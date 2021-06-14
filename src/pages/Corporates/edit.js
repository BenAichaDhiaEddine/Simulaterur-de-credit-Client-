import React, { useState, Fragment, useEffect } from "react";
import { reduxForm } from "redux-form";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane,
  NavLink,
  NavItem,
  Nav,
  Form,
} from "reactstrap";
import classnames from "classnames";

//Actions
import {
  retrieve,
  resetCorporates as reset,
  enableEdit,
} from "../../store/actions";

// Component
import Information from "./components/information";
import Geography from "./components/geography";
import Admins from "./components/admins";
import SftpServer from "./components/sftpServer";
import Features from "./components/features";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import SpinnerPage from "../../components/loader";
// SCSS
import "./style.scss";
import { Button } from "bootstrap";

// Config
const navLinkItems = [
  { id: 0, label: "Informations" },
  { id: 1, label: "Geography" },
  { id: 2, label: "Admins" },
  { id: 3, label: "SFTP Server" },
  { id: 4, label: "Features" },
];

const EditCorporate = (props) => {
  const params = useParams();
  let { id } = params;


  const { register, errors, handleSubmit, control } = useForm();
  const [activeTabJustify, setActiveTab] = useState(0);
  const { corporate, error, loading, editMode, stepNumber } = useSelector(
    ({ Corporates }) => Corporates
  );

  const dispatch = useDispatch();

  const resetData = () => dispatch(reset());
  const initData = () => {
    if (id != "create" && !editMode ) {
      dispatch(enableEdit(id));
      dispatch(retrieve(id));
      //resetData();
    }
  };
  useEffect(() => {
    initData();
  }, []);
  const onSubmit = (data) => {
  };

  const toggleCustomJustified = (tab) => {
    if (activeTabJustify !== tab) {
      setActiveTab(tab);
    }
  };

  const _renderNavLink = () => {
    return navLinkItems.map((item) => (
      <NavItem key={item.id}>
        <NavLink
          style={{ cursor: "pointer" }}
          className={classnames({
            active: activeTabJustify === item.id,
          })}
          onClick={() => {
            toggleCustomJustified(item.id);
          }}
        >
          <span className="d-none d-sm-block">{item.label}</span>
        </NavLink>
      </NavItem>
    ));
  };
  const StepsDisplay = (id) => {
    switch (id) {
      case 0:
        return <Information id={id} />;
      case 1:
        return <Geography />;
      case 2:
        return <Admins />;
      case 3:
        return <SftpServer />;
      case 4:
        return <Features />;

      default:
        return null;
    }
  };
  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Corporates"
            breadcrumbItem={corporate && corporate.nameFr}
          />
          {loading ? (
            <SpinnerPage />
          ) : (
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <TabContent activeTab={0}>
                      <TabPane tabId={0} className="p-3">
                        {StepsDisplay(stepNumber)}
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </Fragment>
  );
};

export default reduxForm({
  form: "Corporates",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(EditCorporate);
