import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'


export default {
    namespaced: true, // 添加一个命名空间
    state,
    actions,
    getters,
    mutations
}