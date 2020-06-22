const state = {
    mockData: "t",
}

const getters = {
    getMockData: (state) => {
        return state.mockData
    },
}

const actions = {
    setMockDataAction: ({ commit }, value) => {
        commit("setMockDataMutation", value)
    },
}

const mutations = {
    setMockDataMutation: (state, value) => {
        state.mockData = value
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
