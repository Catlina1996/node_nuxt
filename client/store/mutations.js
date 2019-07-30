import state from './state'

const mutations = {
  setAuth: (state, data) => {
    state.token = data
  }
};

export default mutations
