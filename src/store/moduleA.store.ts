import {Module} from 'vuex';
import {RootState} from '@/store/store';

interface moduleA {
    data: string;
}

const module: Module<moduleA, RootState> = {
    namespaced: true,
    state: {
        data: 'moduleA',
    },
    mutations: {
        setData (state, data: string) {
            state.data = data;
        },
    },
    actions: {
        setData ({commit}, data: string) {
            commit('setData', data);
        },
    },
    getters: {
        data: (state) => state.data,
    },
};

export default module;