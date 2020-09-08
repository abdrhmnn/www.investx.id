import React, { Component } from 'react';
import check from '../../images/company/check.svg'

class FilterCheck extends Component {
    render() {
        return (
            <div className='filter-check' onClick={this.props.onClick}>
                {
                    this.props.isCheck?
                    <div className="checklist-active">
                        <img src={check} alt="check"/>
                    </div>
                    :
                    <div className="checklist"></div>
                }
                <div className="check-label">{this.props.label}</div>
            </div>
        );
    }
}

export default FilterCheck;