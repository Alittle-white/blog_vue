// import { resetRouter } from '@/router'

// const state = {
//   token: {},
//   name: '',
//   avatar: require('@/assets/img/user_avatar.png'),
//   userInfo: {},
//   curRoute: [],
//   routes: []
// }

// const mutations = {
//   USER_INFO: (state, userInfo) => {
//     state.userInfo = JSON.parse(JSON.stringify(userInfo))
//     state.roleRoutes = JSON.parse(JSON.stringify(userInfo))
//   },
//   ADD_ROUTES: (state, routes) => {
//     state.routes = JSON.parse(JSON.stringify(routes))
//     state.curRoute = JSON.parse(JSON.stringify(routes))
//   },
//   LOGIN_OUT: (state) => {
//     state.userInfo = {}
//     state.roleRoutes = {}
//     state.routes = {}
//     state.curRoute = {}
//   }
// }

// const actions = {
//   login({ commit }, userInfo) {
//     commit('USER_INFO', userInfo)
//   },
//   addRoutes({ commit }, routes) {
//     commit('ADD_ROUTES', routes)
//   },
//   loginOut({ commit }) {
//     commit('LOGIN_OUT')
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }

