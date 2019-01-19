import _ from "lodash";

import { GET_PROFILE } from "../actions";

//Reducer listening to different action types
//initial state is {}
export default function(state = {}, action) {
  switch (action.type) {
    //target
    case GET_PROFILE:
      console.log(action.payload.data);

      return action.payload.data;
    // case TLOGIN:
    //   console.log(action.payload.data);
    //   return _.mapKeys(action.payload.data, "name");

    default:
      return { ...state };
  }
}
