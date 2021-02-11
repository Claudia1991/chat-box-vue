import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        idData:0
    },
    getters: {
        getData: state => {
            return state.idData
        }
    },
    mutations: {
        updateData(state, payload){
            state.idData = payload;
        }
    },
    actions:{}
});