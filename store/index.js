const actions = {
  onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      state.commit('SET_USER', null)
    } else {
      const { uid, email, photoURL, displayName, phoneNumber } = authUser
      state.commit('SET_USER', {
        uid,
        email,
        photoURL,
        displayName,
        phoneNumber,
      })
    }
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

const state = () => ({
  user: null,
})

const getters = {
  getUser(state) {
    return state.user
  },
  isLoggedIn(state) {
    let userLoggedIn = false
    if (state.user) {
      userLoggedIn = true
    }
    return userLoggedIn
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
