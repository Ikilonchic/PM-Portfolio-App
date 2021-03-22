import emptyPortfolio from '../data/empty_portfolio.json';

const CREATE_NEW = 'portfolio/new/create';
const SAVE_NEW = 'portfolio/save/create';
const DELETE_NEW = 'portfolio/new/delete';
const UPDATE_NEW_CONTACTS = 'portfolio/new/contacts/update';
const UPDATE_NEW_SCHOOL = 'portfolio/new/school/update';
const UPDATE_NEW_WORK = 'portfolio/new/work/update';

const ADD = 'portfolio/all/add';
const DELETE_BY_ID = 'portfolio/all/delete_by_id';
const CLEAR_ALL = 'portfolio/all/clear';


export const createNewPortfolio = () => (dispatch) => {
  dispatch(createNew());
};

export const saveNewPortfolio = () => (dispatch) => {
  dispatch(saveNew());
  dispatch(deleteNew());
};

export const deleteNewPortfolio = () => (dispatch) => {
  dispatch(deleteNew());
};

export const updateNewPortfolioContacts = (contacts) => (dispatch) => {
  dispatch(updateNewContacts(contacts));
};

export const updateNewPortfolioSchool = (school) => (dispatch) => {
  dispatch(updateNewSchool(school));
};

export const updateNewPortfolioWork = (work) => (dispatch) => {
  dispatch(updateNewWork(work));
};

export const addPortfolio = (data) => (dispatch) => {
  dispatch(add(data));
};

export const deletePortfolioById = (id) => (dispatch) => {
  dispatch(deleteById(id));
};

export const clearAllportfolio = () => (dispatch) => {
  dispatch(deleteAll());
};


const createNew = () => ({
  type: CREATE_NEW,
  payload: emptyPortfolio,
});

const saveNew = () => ({
  type: SAVE_NEW,
});

const deleteNew = () => ({
  type: DELETE_NEW,
});

const updateNewContacts = (contacts) => ({
  type: UPDATE_NEW_CONTACTS,
  payload: contacts,
});

const updateNewSchool = (school) => ({
  type: UPDATE_NEW_SCHOOL,
  payload: school,
});

const updateNewWork = (work) => ({
  type: UPDATE_NEW_WORK,
  payload: work,
});


const add = (data) => ({
  type: ADD,
  payload: data,
});

const deleteById = (id) => ({
  type: DELETE_BY_ID,
  payload: id,
});

const deleteAll = () => ({
  type: CLEAR_ALL,
});


const initialState = {
  new: emptyPortfolio,
  all: [],
};


export const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CREATE_NEW:
      return {
        ...state,
        new: action.payload,
      };
    case SAVE_NEW:
      return {
        ...state,
        all: [ ...state.all, state.new ],
      };
    case UPDATE_NEW_CONTACTS: 
      return {
        ...state,
        new: {
          ...state.new,
          contacts: action.payload,
        }
      };
    case UPDATE_NEW_SCHOOL: 
      return {
        ...state,
        new: {
          ...state.new,
          school: action.payload,
        }
      };
    case UPDATE_NEW_WORK: 
      return {
        ...state,
        new: {
          ...state.new,
          work: action.payload,
        }
      };
    case DELETE_NEW:
      return {
        ...state,
        new: emptyPortfolio,
      };
    case ADD: 
      return {
        ...state,
        all: [ ...state.all, action.payload.data ],
      };
    case DELETE_BY_ID:
      return {
        ...state,
        all: state.all.filter(item => item.id !== action.payload.id),
      };
    case CLEAR_ALL:
      return {
        ...state,
        all: [],
      };
    default:
      return state;
  }
};
