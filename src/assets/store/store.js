import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        idData:0,
        selectedLanguage :'',
    },
    getters: {
        getData: state => {
            return state.idData
        },
        getSelectedLanguage: state => {
            return state.selectedLanguage
        }
    },
    mutations: {
        updateData(state, payload){
            state.idData = payload;
        },
        updateSelectedLanguage(state, payload){
            state.selectedLanguage = payload;
        }
    },
    actions:{}
});