/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCHING_SUCCESS, FETCHING_FAILURE, ADDING_SMURF, DELETING_SMURF } from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialBanana = { 
  smurfs: [],
  fetchingSmurfs: false,
  error: null,
  addingSmurf: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function bananaReducer (stateBanana = initialBanana, actionBanana) {
  switch(actionBanana.type) {
    case FETCHING_SMURFS:
      return {
        ...stateBanana,
        fetchingSmurfs: true,
        error: null
      }
    case FETCHING_SUCCESS:
      return {
        ...stateBanana,
        smurfs: actionBanana.payloadBanana,
        error: null
      }
    case FETCHING_FAILURE:
      return {
        ...stateBanana,
        error: actionBanana.payloadBanana
      }
    case ADDING_SMURF:
      return {
        ...stateBanana,
        addingSmurf: true,
        error: actionBanana.payloadBanana
      }
    case DELETING_SMURF:
      return {
        ...stateBanana,
        deletingSmurf: true,
        error: actionBanana.payloadBanana
      }

    default: return stateBanana
  }
}

export default bananaReducer