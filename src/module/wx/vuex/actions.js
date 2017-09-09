import ajax from '../assets/js/ajax'
const actions = {
    setUser ({commit}, data) {
        ajax.get('/my/user', {}, (data) => {
            commit('setUser', data)
        });
    },
    setTeam ({commit}, data) {
        ajax.get('/my/team', {}, (data) => {
            console.log(data);
            commit('setTeam', data.team)
            commit('setTeammate', data.users);
        });
    }
}

export default actions
