import { handleActions } from "redux-actions";
import axios from "axios";

const GET_CONTACTLIST = "CONTACT/GET_CONTACTLIST";
const GET_CONTACTLIST_SUCCESS = "CONTACT/GET_CONTACTLIST_SUCCESS";
const GET_CONTACTLIST_FAILURE = "CONTACT/GET_CONTACTLIST_FAILURE";

const GET_CONTACT = "CONTACT/GET_CONTACT";
const GET_CONTACT_SUCCESS = "CONTACT/GET_CONTACT_SUCCESS";
const GET_CONTACT_FAILURE = "CONTACT/GET_CONTACT_FAILURE";

const ADD_CONTACT = "CONTACT/ADD_CONTACT";
const ADD_CONTACT_SUCCESS = "CONTACT/ADD_CONTACT_SUCCESS";
const ADD_CONTACT_FAILURE = "CONTACT/ADD_CONTACT_FAILURE";

const baseURL = "http://localhost:8080/contacts/";
const baseLONG = "http://localhost:8080/contacts_long/";

// Action

const init = {
  loading: false,
  contactList: null,
  contact: null,
  error: null,
};
const contactR = handleActions(
  {
    // Get List
    [GET_CONTACTLIST]: (state, action) => {
      return;
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
      return;
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
      return;
    },
    // Get
    [GET_CONTACT]: (state, action) => {
      return;
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
      return;
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
      return;
    },
    // Add
    [ADD_CONTACT]: (state, action) => {
      return;
    },
    [ADD_CONTACT_SUCCESS]: (state, action) => {
      return;
    },
    [ADD_CONTACT_FAILURE]: (state, action) => {
      return;
    },
  },
  init
);
export default contactR;
