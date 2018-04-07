import Fetch from './http';
import * as Utils from '../utils';
// import * as types from './mutation-types'

export const getCurrentAct = ({commit}) => {
  const time = Utils.parseQuery(location.search).time;
  if(!time){
    return
  }
  const file =  Utils.parseTime(time)

  return Fetch.get(`/current_act?time=${file}`).then( data => {
    // if(data.data.code === 2000){
    //   commit('getActivities',data.data.data);
    // }
    return  data
  })
};

export const fetchHtml = ({commit}) => {
  const file = Utils.parseQuery(location.search).time;
  return Fetch.get(`/html?time=${file}`).then( data => {
    // if(data.data.code === 2000){
    //   commit('getActivities',data.data.data);
    // }
    return  data
  })
};

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
