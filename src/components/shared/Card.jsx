import React, { Component } from "react";
import { Clock, Tag } from "react-feather";
import loca from "../../images/loca.svg";
import moment from 'moment'
import millify from 'millify'
// const millify = require('millify')


// const dummyImag = 'https://picsum.photos/280/180'

class Card extends Component {
  getCountdown = (endDate) =>{
    // var xxx = '2021-02-18'
    var endInvest = moment(endDate);
    var now = moment();
    var result =  endInvest.diff(now, 'days')  + 1
    return result 
  }
  render() {
    const { 
      name,
      amount_sold,
      progress,
      cover,
       industry,
      investor_count,
      min_invest_amount,
      regency,
      trademark,
      end_date
     } = this.props.data;
    return (
      <div>
        <div className="card-sec">
          <img src={cover} alt="card" />

          <div className="body-card">
            <div>
              <p className="name">{name}</p>
              <p className="desc">{trademark}</p>
            </div>
            <i className="far fa-heart"></i>
          </div>
          <div className="prog">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: Math.round(progress * 100) }}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="num">{Math.round(progress * 100)}%</div>
          </div>
          <div className="raised">
            <div className="box-raised text-center">
              <p className="nom">
                Rp. {amount_sold !== undefined ? millify(amount_sold) : null} <br /> <span>Raised</span>
              </p>
            </div>
            <div className="box-raised border-left border-right text-center">
              <p className="nom">
                Rp. {millify(min_invest_amount)} <br /> <span>Min. Invest</span>
              </p>
            </div>
            <div className="box-raised text-center">
              <p className="nom">
                {investor_count} <br /> <span>Investors</span>
              </p>
            </div>
          </div>
          <div className="loc">
            <div className="name">
              {/* <img src={} alt="" /> */}
              <Tag size='18' className='mr-1'/>
              { industry}
            </div>
            <div className="name">
              <img src={loca} alt="" />
              {regency}
            </div>
          </div>
          {
            this.getCountdown(end_date) <= 0 ? 
            <div className="foot-card-done">
                Pendanaan Selesai
            </div>
            :
            <div className="foot-card"><Clock size='18' className='mr-1'/>
              {this.getCountdown(end_date)} hari lagi
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Card;
