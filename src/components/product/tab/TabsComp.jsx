import React, { Component } from 'react';
import {Tabs, Tab} from '@material-ui/core';


class TabsComp extends Component {
    state={
        tabActive : 0,
    }

    handleChange = (event, newValue) => {
        this.setState({tabActive : newValue})
    }
    render() {
        return (
            <div className='w-100 tab-custom'>
                <Tabs
                    value={this.state.tabActive}
                    // indicatorColor="primary"
                    // textColor="primary"
                    // variant="scrollable"
                    scrollButtons="off"
                    variant="fullWidth"
                    onChange={this.handleChange}
                >
                    <Tab style={{fontSize : 14, minWidth : '10%', textTransform : 'capitalize', fontFamily : 'Lato'}} label="Finansial" />
                    <Tab style={{fontSize : 14, minWidth : '10%', textTransform : 'capitalize', fontFamily : 'Lato'}} label="Overview" />
                    <Tab style={{fontSize : 14, minWidth : '10%', textTransform : 'capitalize', fontFamily : 'Lato'}} label="Simulasi Investasi" />
                    <Tab style={{fontSize : 14, minWidth : '10%', textTransform : 'capitalize', fontFamily : 'Lato'}} label="Updates" />
                    <Tab style={{fontSize : 14, minWidth : '10%', textTransform : 'capitalize', fontFamily : 'Lato'}} label="Comments" />
                </Tabs>
              
            </div>
        );
    }
}

export default TabsComp;