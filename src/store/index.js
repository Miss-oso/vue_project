import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: [],
  },
  getters: {
    getPaymentList: state => state.paymentList,

    getCategoryList: state => state.categoryList,
  },
  mutations: {
    getDataApp(state, payload) {
      state.paymentList = payload
    },
    addDataPaymentList(state, payload) {
      state.paymentList.push(payload)
    },
    addCategoryList(state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i <= 50; i++) {
            items.push({
              date: '05.04.2022',
              category: 'Обучение',
              value: i,
              id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
            })
          }
          resolve(items)
        }, 2000)
      }).then(res => {
        commit('getDataApp', res)
      })
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Еда', 'Спорт', 'Транстпорт', 'Образование', 'Семья', 'Здоровье'])
        }, 1000)
      }).then(res => {
        commit('addCategoryList', res)
      })
    }
  },

})