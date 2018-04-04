import Fetch from './http';
// import * as types from './mutation-types'


export const fetchActivities = ({commit}) => {
  Fetch.get(`/activities`).then( data => {
    if(data.data.code === 2000){
      commit('getActivities',data.data.data);
    }
  })
};

export const saveActivity = ({commit},params) => {
  return Fetch.post(`/activities`,params).then( data => {
    return data;
  })
};
