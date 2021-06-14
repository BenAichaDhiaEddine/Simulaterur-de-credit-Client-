import React, { useState, Fragment } from "react";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Row, Col, Collapse, Button } from "reactstrap";
import Dropzone from "react-dropzone";

const Features = ({ nextTab }) => {
  const [open, setOpen] = useState(true);
  const [isCrop, setIsCrop] = useState(true);
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         open: true,
  //         isCrop:true
  //     };
  //     this.onDrop = this.onDrop.bind(this);
  // }
  const onSubmit = (data) => {
    
  };
  const onDrop = (files) => {
    // files[0].preview = window.URL.createObjectURL(files[0]);
    // this.setState({ imagelink: URL.createObjectURL(files[0]) });
    // this.setState({
    //   files: files
    // });
    // this.setState({ isCrop: true });
    // this.setState({ openEdit: true });
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
            className="root"
          >
            <ListItem button>
              <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>{/* <DraftsIcon /> */}</ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem
              button
              //   onClick={handleClick}
            >
              <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
              <ListItemText primary="Inbox" />
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="nested">
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Col>

        <Button
          type="submit"
          color="primary"
          className="mr-1 waves-effect waves-light"
        >
          Save Changes
        </Button>
        <Button color="secondary" className="waves-effect">
          Cancel
        </Button>
      </Row>
    </Fragment>
  );
};

export default Features;
