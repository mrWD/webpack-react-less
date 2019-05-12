import { ACTION_SUCCESS } from '../constants/actionStatus'

export default function newAction() {
  return dispatch => {
    return fetch('https://api.edamam.com/search?app_id=7a1e52eb&app_key=2649cb6fcbaffaa5bcb1052c98754dc1&q=meat&from=0&to=20', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        return dispatch({
          type: ACTION_SUCCESS,
          payload: data,
        })
      })
      .catch(e => console.log(e))
  }
}
