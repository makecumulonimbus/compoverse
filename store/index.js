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

  rememberMe(state, email) {
    state.commit('SET_REMEMBER_EMAIL', email)
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },

  SET_REMEMBER_EMAIL(state, email) {
    state.rememberEmail = email
  },
}

const state = () => ({
  user: null,
  rememberEmail: '',
})

const getters = {
  getUser(state) {
    return state.user
  },
  getRemember(state) {
    return state.email
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
