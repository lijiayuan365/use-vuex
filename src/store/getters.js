// 使用箭头函数，简洁好看
let getters = {
    deptNo: state => state.dept + state.num
}
export default getters;