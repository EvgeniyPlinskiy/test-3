import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    currency: 'VGTB'
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    CURRENCY(state) {
      return state.currency
    }
  },
  mutations: {
    SET_PRODUCTS: (state, response) => {
      state.products = response
    },
    SET_TO_CART: (state, dataProduct) => {
      // функция работает некорректно, не пониаю почему(((( по идее проверяет корзину, потом перебирает
      // и сравнивает элементы по ID. При первом запуске все корректно, но если добавить продукты после другого
      // она сбивается. Может получится решить эту проблему раньше, чем Вы это прочитаете))
      if (state.cart.length) {
        state.cart.map(item => {
          if (item.id === dataProduct.id) {
            item.totalPrice = item.totalPrice + dataProduct.totalPrice
            item.amount = item.amount + dataProduct.amount
          } else {
            state.cart.unshift(dataProduct);
          }
        })
      } else {
        state.cart.unshift(dataProduct);
      }

    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
  },
  actions: {
    GET_PRODUCTS({
      commit
    }) {
      return axios('http://localhost:3000/products', {
          method: 'GET'
        })
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
          return response
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART({
      commit
    }, dataProduct) {
      commit('SET_TO_CART', dataProduct)
    },
    DELETE_FROM_CART({
      commit
    }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
})