import Vuex from "vuex"
import Vue from "vue"
import example from "./modules/example"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        example,
    },
})
