import schema from '../schemas/index';
import { fromJS } from 'immutable';
import { SEARCH_BY_AUTHOR } from '../action-types/index';

const initialState = fromJS({
  // ...data,
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
})

function data (state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_AUTHOR:{
      // // action.payload.query
      // const list = state.data.categories;
      // let results = [];
      // if (action.payload.query) {
      //   list.forEach( category => {
      //     results = results.concat(
      //       category.playlist.filter(
      //         item => item.author.toLowerCase().includes(action.payload.query.toLowerCase())
      //       )
      //     )
      //   }
      // )
      // if (results.length == 0){
      //   results = false;
      // }
      // }
      // return {
      //   ...state, 
      //   search: results
      // }
      return state.set('search', action.payload.query)
    }
    default: 
      return state
  }
}

export default data;