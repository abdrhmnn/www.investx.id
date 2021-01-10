import React, { Component } from "react";
import { Clock, Tag } from "react-feather";
import loca from "../../images/loca.svg";
import moment from 'moment'

// const dummyImag = 'https://picsum.photos/280/180'

class Card extends Component {
  render() {
    const { 
      name,
      amount,
      progress,
      logo,
      tags,
      investor_count,
      min_invest_amount,
      regency,
      trademark,
      end_date
     } = this.props.data;
    return (
      <div>
        <div className="card-sec">
          <img src={logo} alt="card" />

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
                style={{ width: progress }}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="num">{progress}</div>
          </div>
          <div className="raised">
            <div className="box-raised text-center">
              <p className="nom">
                Rp. {amount} <br /> <span>Raised</span>
              </p>
            </div>
            <div className="box-raised border-left border-right text-center">
              <p className="nom">
                Rp. {min_invest_amount} <br /> <span>Min. Invest</span>
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
              {tags[0]}
            </div>
            <div className="name">
              <img src={loca} alt="" />
              {regency}
            </div>
          </div>
          <div className="foot-card"><Clock size='18' className='mr-1'/>Berakhir pada {moment(end_date).format('DD MMMM YYYY')}</div>
          {/* <div className="foot-card-done">
                        Pendanaan Selesai
                    </div> */}
        </div>
      </div>
    );
  }
}

export default Card;
