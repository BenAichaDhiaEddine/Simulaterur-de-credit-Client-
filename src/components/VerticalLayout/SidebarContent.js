import React, { useEffect } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";

const SidebarContent = ({ type, t, location }) => {
  useEffect(() => {
    initMenu();
  }, []);
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //     };
  // }

  // componentDidMount() {
  //     this.initMenu();
  // }

  // componentDidUpdate(prevProps) {
  //     if (this.props.type !== prevProps.type) {
  //         this.initMenu();
  //     }
  // }

  const initMenu = () => {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  };

  const activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">{t("Menu")}</li>
          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="bx bx-home-circle"></i>
              {/* <span className="badge badge-pill badge-info float-right">03</span> */}
              <span>{t("Dashboards")}</span>
            </Link>
            {/* <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to="/dashboard">{this.props.t('Default') }</Link></li>
                                    <li><Link to="/#">{this.props.t('Saas') }</Link></li>
                                    <li><Link to="/#">{this.props.t('Crypto') }</Link></li>
                                </ul> */}
          </li>
          <li>
            <Link to="/corporates" className=" waves-effect">
              {/* <i className="bx bx-calendar"></i> */}
              <i className="bx bx-store"></i>
              <span>{t("Corporates")}</span>
            </Link>
          </li>
          <li>
            <Link to="/admins" className=" waves-effect">
              {/* <i className="bx bx-calendar"></i> */}
              <i className="bx bx-store"></i>
              <span>{t("Admins")}</span>
            </Link>
          </li>
          <li>
            <Link to="/categories" className=" waves-effect">
              {/* <i className="bx bx-calendar"></i> */}
              <i className="bx bx-store"></i>
              <span>{t("Credit Types")}</span>
            </Link>
          </li>

          <li>
            <Link to="/#" className="waves-effect">
              <i className="bx bx-file"></i>
              <span>{t("Permit System")}</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/permit">{t("Requests")}</Link>
              </li>
              <li>
                <Link to="/features">{t("Features")}</Link>
              </li>
              <li>
                <Link to="/status">{t("Status")}</Link>
              </li>
              <li>
                <Link to="/process">{t("Process")}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default withRouter(withNamespaces()(SidebarContent));
