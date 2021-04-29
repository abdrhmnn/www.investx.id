import React, { Component } from "react";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import Slide from "react-reveal/Slide";
import FilterCheck from "./FilterCheck";
import triangle from "../../images/company/triangle.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import greenshield from "../../images/greenshield.svg";
import Select from "react-select";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import helper from "../../helpers/helper";

import Pagination from "react-js-pagination";

import API from "../../api";
// import Loading from "../shared/Loading";
// import Swal from "sweetalert2";


class CompanyList extends Component {
  state = {
    filterShow: true,
    most_funded: false,
    tipeBisnisCount: [],
    amount: { min: 2, max: 10 },
    data : [],

    dataCity : [],
    bisnisType : [],
    //filter
    cityFil : null,
    limit : 9,
    page : 1,
    totalData : null

  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (window.screen.width <= 768) {
      this.setState({ filterShow: false });
    }
    this.getObjOpt()
    this.getData()
  }

  getData = () =>{
    console.log(this.state.cityFil)
    let params = {
      limit : this.state.limit,
      offset : (this.state.page -1) * this.state.limit,
      city : this.state.cityFil ? this.state.cityFil.value : '',
      ordering : this.props.match.params.ordering.replace('-',"_")
    }
    API.fundraise(params).then(res=>{
      console.log(res, 'DATA FUNDRAISE')
      this.setState({ 
        data : res.data.results,
        totalData : res.data.count,
      })
    }).catch(err => console.log(err.response))
  }

  getObjOpt = () =>{
    const params = {
      limit : 600
    }
    API.getRegencyFund(params).then(res=>{
      console.log(res)
      this.setState({ 
        dataCity : res.data.results.map(val=>({label: val.name, value : val.name})),
      })
    }).catch(err => console.log(err.response))

    API.refCompanyGeneral().then(res=>{
      console.log(res)
      this.setState({ 
        bisnisType : res.data.business_type,
      })
    }).catch(err => console.log(err.response))
  }


  handleSelectCity = (val)=> this.setState({cityFil : val}, this.getData)


  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ page: pageNumber }, this.getData);
  };

  handleCheckFilter = (name, value) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleTipeBisnis = (name, value, id) => {
    if (this.state.tipeBisnisCount.length < 3 && value === true) {
      this.setState({
        [name]: value,
        tipeBisnisCount: [
          ...this.state.tipeBisnisCount,
          { id: id, name: name, value: value },
        ],
      });
    }

    console.log(this.state, 'industries')

    if (this.state.tipeBisnisCount.length >= 3 && value) {
      toast.warn("Pilihan Tipe Bisnis Maksimal 3!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }

    if (!this.state.tipeBisnisCount.length < 3 && !value) {
      const arrRemove = this.state.tipeBisnisCount.filter(
        (res) => res.id !== id
      );
      this.setState({
        [name]: value,
        tipeBisnisCount: arrRemove,
      });
      console.log(this.state.tipeBisnisCount);
    }
  };

  handleOrdering = (val)=>{
    console.log(val)
    this.props.history.push(`/company-list/${val.value}`)
    this.getData()
  }
  render() {
    console.log(this.state, 'INI STATE');
    const filterCheck = [
      { id: 0, name: "Most Funded" },
      { id: 1, name: "Recently launched" },
      { id: 2, name: "Closing Soon" },
      { id: 3, name: "In Progress" },
      { id: 4, name: "Completed campaigns" },
    ];
    const filterCheckIndustries = [
      { id: 0, name: "Fashion" },
      { id: 1, name: "Automotive" },
      { id: 2, name: "Energy" },
      { id: 3, name: "Finance" },
      { id: 4, name: "Creative" },
      { id: 5, name: "Food" },
    ];

    const optionsOrdering = [
      { value: "highly-selective", label: "Highly selective" },
      { value: "closed-soon", label: "Closed Soon"},
      { value: "new-startup", label: "New Startup" },
    ];
    return (
      <>
        <ToastContainer position="top-center" />
        <Navbar />
        <div className="company-list">
          <div className="container">
            <div className="breadcrumb-custom">
              <Link to="/">Home</Link> <span> {`>`} </span>
              <Link to="/company-list">Company list</Link>{" "}
            </div>
            <p className="title-company">
              Find your favourite company. Invest now, or regret later
            </p>
            <p className="desc-company ">
              {" "}
              <img src={greenshield} alt="" /> All companies are rigorously
              screened & pass due diligence.
            </p>
          </div>

          <div >
            <div className="row list-boxes no-gutters">

              <div className="col-md-2 d-flex align-items-end flex-column overflow-hidden "
                onMouseLeave={() => this.setState({ filterShow: false })}
              >
                <div className={
                    this.state.filterShow
                      ? "title-filter-active"
                      : "title-filter"
                  }
                  onMouseEnter={() => this.setState({ filterShow: true })}
                >
                  <i
                    className={
                      this.state.filterShow
                        ? "fas fa-caret-right mr-2"
                        : "fas fa-caret-left mr-2"
                    }
                  ></i>
                  Filter
                </div>

                <div
                  className="title-filter-mobile"
                  data-toggle="modal"
                  data-target="#modalFilterMobile"
                >
                  <i className="fas fa-filter"></i> Filter
                </div>

                {/* MOBILE START  */}

                <div
                  className="modal fade"
                  id="modalFilterMobile"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog filter-popup">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Filter
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="filter-box-mobile">
                          <ul>
                            {filterCheck.map((res, i) => (
                              <li key={i}>
                                <FilterCheck
                                  label={res.name}
                                  isCheck={this.state[`${res.name}`]}
                                  onClick={() =>
                                    this.handleCheckFilter(
                                      res.name,
                                      !this.state[`${res.name}`]
                                    )
                                  }
                                />
                              </li>
                            ))}
                          </ul>

                          <hr />

                          <div className="title-check">City </div>
                          <div className="w-100 pr-3 city-select">
                            <Select options={this.state.dataCity} />
                          </div>

                          <hr />

                          <div className="title-check">
                            Industries <img src={triangle} alt="triangle" />
                          </div>
                          <ul className="industries-check-mobile">
                            {filterCheckIndustries.map((res, i) => (
                              <li key={i}>
                                <FilterCheck
                                  label={res.name}
                                  isCheck={this.state[`${res.name}`]}
                                  onClick={() =>
                                    this.handleTipeBisnis(
                                      res.name,
                                      !this.state[`${res.name}`],
                                      res.id
                                    )
                                  }
                                />
                              </li>
                            ))}
                          </ul>

                          <hr />

                          <div className="title-check text-center justify-content-center pr-4">
                            Investment amount ( Rp )
                          </div>

                          <div className="filter-amount-mobile">
                            <div className="wrap-disp">
                              <div className="amount-disp">
                                <div className="label">Min. ammount</div>
                                <div className="value-amount">
                                  {helper.idr(this.state.amount.min * 1000000)}
                                </div>
                              </div>
                              <span>-</span>
                              <div className="amount-disp">
                                <div className="label">Max. ammount</div>
                                <div className="value-amount">
                                  {helper.idr(this.state.amount.max * 1000000)}
                                </div>
                              </div>
                            </div>
                            <div className="range-wrap mb-3 mt-4">
                              <InputRange
                                // formatLabel={value => `${value}Jt`}
                                maxValue={15}
                                minValue={1}
                                value={this.state.amount}
                                onChange={(value) =>
                                  this.setState({ amount: value })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* MOBILE END  */}

                {/* ////////////// DESK START //////////  */}
                <Slide right when={this.state.filterShow}>
                  <div
                    className={
                      this.state.filterShow
                        ? "filter-box1"
                        : "filter-box1 filter-hidden"
                    }
                  >
                    <ul>
                      {filterCheck.map((res, i) => (
                        <li key={i}>
                          <FilterCheck
                            label={res.name}
                            isCheck={this.state[`${res.name}`]}
                            onClick={() =>
                              this.handleCheckFilter(
                                res.name,
                                !this.state[`${res.name}`]
                              )
                            }
                          />
                        </li>
                      ))}
                    </ul>

                    <hr />

                    <div className="title-check">City </div>
                    <div className="w-100 pr-3 city-select">
                      <Select 
                      options={this.state.dataCity}
                      isClearable
                      onChange={this.handleSelectCity}
                       />
                    </div>

                    <hr />

                    <div className="title-check">
                      Tipe Bisnis <img src={triangle} alt="triangle" />
                    </div>
                    <ul className="industries-check">
                      {this.state.bisnisType.map((res, i) => (
                        <li key={i}>
                          <FilterCheck
                            label={res.text}
                            isCheck={this.state[`${res.text}`]}
                            onClick={() =>
                              this.handleTipeBisnis(
                                res.text,
                                !this.state[`${res.text}`],
                                res.id
                              )
                            }
                          />
                        </li>
                      ))}
                    </ul>

                    <hr />

                    <div className="title-check text-center justify-content-center pr-4">
                      Investment amount ( Rp )
                    </div>

                    <div className="filter-amount">
                      <div className="wrap-disp">
                        <div className="amount-disp">
                          <div className="label">Min. ammount</div>
                          <div className="value-amount">
                            {helper.idr(this.state.amount.min * 1000000)}
                          </div>
                        </div>
                        <span>-</span>
                        <div className="amount-disp">
                          <div className="label">Max. ammount</div>
                          <div className="value-amount">
                            {helper.idr(this.state.amount.max * 1000000)}
                          </div>
                        </div>
                      </div>
                      <div className="range-wrap">
                        <InputRange
                          // formatLabel={value => `${value}Jt`}
                          maxValue={15}
                          minValue={1}
                          value={this.state.amount}
                          onChange={(value) => this.setState({ amount: value })}
                        />
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>

              <div className="col-md-10 bg-light">
                <div className="header-list-company">
                  <span>
                    Discover <span style={{ color: "#4CB5EF" }}> {this.state.totalData} </span>
                    Investments
                  </span>
                  <div className="tags">
                    {this.state.tipeBisnisCount.map((res, i) => (
                      <div className="box-tag" key={i}>
                        #{res.name}
                      </div>
                    ))}
                  </div>
                  <div className="filad">
                    <span>Urutkan : </span>{" "}
                    <Select className="selfil" 
                    options={optionsOrdering} 
                    onChange={this.handleOrdering} 
                    value={
                      this.props.match.params.ordering === 'highly-selective' ? 
                      { value: "highly-selective", label: "Highly selective" }
                      :this.props.match.params.ordering === 'closed-soon' ? 
                      { value: "closed-soon", label: "Closed Soon"}
                      :this.props.match.params.ordering === 'new-startup' ?
                      { value: "new-startup", label: "New Startup" }
                      : null
                    }
                    />
                  </div>
                </div>

                <div className="row box-row no-gutters">
                  {this.state.data.map((res, i) => (
                    <div className="mb-5 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4" key={i}>
                      <Link to={`/company-list/detail/${res.id62}`}>
                        <Card data={res} />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="pagination_cus">
                  <span className="mr-3">Page</span>
                  <Pagination
                    hideDisabled
                    activePage={this.state.page}
                    itemsCountPerPage={this.state.limit}
                    totalItemsCount={this.state.totalData}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    activeClass="activeClass"
                    itemClass="itemClass"
                    innerClass="innerClass"
                    itemClassNext="activeArrows"
                    itemClassPrev="activeArrows"
                    itemClassFirst="activeArrows"
                    itemClassLast="activeArrows"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyList;
