const state = {
  bName: 'bName',
}

const getters = {
  bFullName: (state, getters, rootState) => `full${state.bName}`
}

const mutations = {
  // 这里的 `state` 对象是模块的局部状态
  SET_B_NAME(state, payload) {
    debugger
    state.bName = payload.name;
  }
}

const actions = {
  ASYNC_SET_NAME({ state, commit, rootState }, payload) {
    setTimeout(() => {
      state.bName = 'asyncName'
    }, 4000)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}