const ASET_DEPT = 'ASET_DEPT'
const actions = {
    [ASET_DEPT](context,payload){
        setTimeout(()=>{
            context.commit('SET_DEPT',payload.dept);
        },2000)
    },
}
export default actions;