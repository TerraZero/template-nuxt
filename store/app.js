export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, item) {
    state.list.push(item);
  },
  remove(state, index) {
    state.list.splice(index, 1);
  }
}

export const actions = {

}
