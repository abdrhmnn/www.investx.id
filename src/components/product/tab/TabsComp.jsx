import React, { Component } from "react";
import { Tabs, Tab, Collapse } from "@material-ui/core";
import Finansial from "./Finansial";
import Simulasi from "./Simulasi";
import Updates from "./Updates";
import Comments from "./Comments";

class TabsComp extends Component {
  state = {
    tabActive: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({ tabActive: newValue });
  };
  render() {
    const { tabActive } = this.state;
    return (
      <div className="w-100 tab-custom ">
        <Tabs
          className="box-tabs"
          value={this.state.tabActive}
          // indicatorColor="primary"
          // textColor="primary"
          // variant="scrollable"
          scrollButtons="off"
          variant="fullWidth"
          onChange={this.handleChange}
        >
          <Tab
            style={{
              fontSize: 14,
              minWidth: "10%",
              textTransform: "capitalize",
              fontFamily: "Lato",
            }}
            label="Finansial"
          />
          {/* <Tab style={{fontSize : 14, minWidth : '10%', textTransform : 'capitalize', fontFamily : 'Lato'}} label="Overview" /> */}
          <Tab
            style={{
              fontSize: 14,
              minWidth: "10%",
              textTransform: "capitalize",
              fontFamily: "Lato",
            }}
            label="Simulasi Investasi"
          />
          <Tab
            style={{
              fontSize: 14,
              minWidth: "10%",
              textTransform: "capitalize",
              fontFamily: "Lato",
            }}
            label="Updates"
          />
          <Tab
            style={{
              fontSize: 14,
              minWidth: "10%",
              textTransform: "capitalize",
              fontFamily: "Lato",
            }}
            label="Comments"
          />
        </Tabs>

        <Collapse in={tabActive === 0}>
          <div className="tab-content">
            <Finansial />
          </div>
        </Collapse>
        <Collapse in={tabActive === 1}>
          <div className="tab-content">
            <Simulasi />
          </div>
        </Collapse>
        <Collapse in={tabActive === 2}>
          <div
            className="tab-content"
            style={{ padding: 0, backgroundColor: "unset" }}
          >
            <Updates />
          </div>
        </Collapse>

        <Collapse in={tabActive === 3}>
          <div className="tab-content">
            <Comments />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default TabsComp;
