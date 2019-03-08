import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'
export const ADDING_SMURF = 'ADDING_SMURF'
export const DELETING_SMURF = 'DELETING_SMURF'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatchBanana => {
  dispatchBanana({ type: FETCHING_SMURFS })
  axios.get('http://localhost:3333/smurfs')
       .then(response => {
         dispatchBanana({ type: FETCHING_SUCCESS, payloadBanana: response.data})
       })
       .catch(error => {
         console.log(error)
         dispatchBanana({ type: FETCHING_FAILURE, payloadBanana: error})
       })
}

export const addSmurf = smurf => dispatchBanana => {
  dispatchBanana({ type: ADDING_SMURF })
  axios.post('http://localhost:3333/smurfs', smurf)
       .then(response => {
         dispatchBanana({ type: FETCHING_SUCCESS, payloadBanana: response.data})
       })
       .catch(error => {
         console.log(error)
       })
}

export const deleteSmurf = id => dispatchBanana => {
  dispatchBanana({ type: DELETING_SMURF})
  axios.delete(`http://localhost:3333/smurfs/${id}`)
       .then(response => {
         dispatchBanana({ type: FETCHING_SUCCESS, payloadBanana: response.data})
       })
       .catch(error => {
         dispatchBanana({ type: FETCHING_FAILURE, payloadBanana: error })
       }) 
}