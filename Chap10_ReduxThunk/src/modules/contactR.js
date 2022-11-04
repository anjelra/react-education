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

const baseURL = "http://localhost:5000/contacts/";
const baseLONG = "http://localhost:5000/contacts_long/";

// Action (() => dispatch 가 있는 이유는, 시간이 걸리는 작업이 있기 때문에. 즉, middleware가 필요하기 때문에.)
export const getContactListAction = () => async (dispatch) => {
  try {
    await dispatch({ type: GET_CONTACTLIST });

    const contactList = await axios.get(baseLONG, {
      params: { pageno: 1, pagesize: 10 },
    });

    dispatch({ type: GET_CONTACTLIST_SUCCESS, payload: contactList });
  } catch (error) {
    await dispatch({ type: GET_CONTACTLIST_FAILURE });
  }
};

export const getContactAction = (no) => async (dispatch) => {
  try {
    await dispatch({ type: GET_CONTACT });

    const contact = await axios.get(baseURL + no);
    console.log("contact", contact);
    await dispatch({ type: GET_CONTACT_SUCCESS, payload: contact });
  } catch (error) {
    await dispatch({ type: GET_CONTACT_FAILURE });
  }
};

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
      return { ...state, contactList: null, error: null };
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
      return { ...state, loading: false, contactList: action.payload.data };
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
      return {
        ...state,
        loading: false,
        contactList: null,
        error: action.payload,
      };
    },
    // Get
    [GET_CONTACT]: (state, action) => {
      return { ...state, loading: true, contact: null, error: null };
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
      return {
        ...state,
        loading: false,
        contact: action.payload.data,
        error: null,
      };
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
      return { ...state, loading: true, contact: null, error: null };
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
