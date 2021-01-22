import { createStore } from "redux";

const initialState = {
  number: 5,
  activeTab: "profile",

  dataDetail : {},
  dataDetailCompany : {},
  dataDetailTags: [],
  // TABS 
  dataFinansialTab : {}
};

const reducer = (state = initialState, action) => {
  if (action.type === "HAHA") {
    console.log("yiiihaaa");
    return "hahaha";
  }

  if (action.type === "CHANGE_TAB") {
    console.log("ACTAB");
    return {
      ...state,
      activeTab: action.data,
    };
  }

  if (action.type === "POST_DETAIL") {
    console.log("post detail");
    return {
      ...state,
      dataDetail: action.data,
    };
  }

  if (action.type === "POST_DETAIL_COMPANY") {
    console.log("post detail COMAPNY");
    return {
      ...state,
      dataDetailCompany: action.data,
    };
  }

  if (action.type === "POST_DETAIL_TAGS") {
    console.log("post detail TAGS");
    return {
      ...state,
      dataDetailTags: action.data,
    };
  }
  

  if (action.type === "SEND_FINANSIAL_TAB") {
    console.log("post detail TAB FINANSIAL");
    return {
      ...state,
      dataFinansialTab: action.data,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
