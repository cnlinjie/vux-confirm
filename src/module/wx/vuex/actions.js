import ajax from '../assets/js/ajax'
const actions = {
    setUser ({commit}, data) {
        ajax.get('/my/user', {}, (data) => {
            commit('setUser', data)
        });
    },
}

export default actions
