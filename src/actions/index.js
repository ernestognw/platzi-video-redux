import { 
  CLOSE_MODAL, 
  OPEN_MODAL, 
  SEARCH_BY_AUTHOR,
  SEARCH_ASYNC_BY_AUTHOR,
  IS_LOADING } 
from "../action-types/index";

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function searchByAuthor(query) {
  return {
    type: SEARCH_BY_AUTHOR,
    payload: {
      query,
    }
  }
}

export function searchAsyncByAuthor(query) {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout( () => {
      dispatch(isLoading(false))      
      dispatch(searchByAuthor(query))
    }, 1000)
  }
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value,
    }
  }
}