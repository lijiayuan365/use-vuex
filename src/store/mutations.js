// 事件类型
const SET_DEPT = 'SET_DEPT'

const mutation = {
    // 回调函数，就处理 state 的方法啦
    [SET_DEPT](state, payload) {
        state.dept = payload.dept;
    }
}

export default mutation;