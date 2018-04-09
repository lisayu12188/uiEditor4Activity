import Fetch from './http';
import * as Utils from '../utils';
// import * as types from './mutation-types'

export const getCurrentAct = ({commit}) => {
  let id = Utils.parseQuery(location.search).id;
  if(!id){
    return
  }
  id =  Utils.parseTime(id)

  return Fetch.get(`/current_act?id=${id}`).then( data => {
    // if(data.data.code === 2000){
    //   commit('getActivities',data.data.data);
    // }
    return  data
  })
};

export const fetchHtml = ({commit}) => {
  let id = Utils.parseQuery(location.search).id;
  console.log(file)
  if(file === undefined || !id){
    return false
  }
  id = Utils.parseTime(id)
  return Fetch.get(`/html?id=${id}`).then( data => {
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
