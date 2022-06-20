<!-- template обычно в начале страницы, хотя в Vite его делают после Script,
страницы лучше не называть тэгами -->
<template>
  <div class="header">
    <div>
      <router-link to="/">
        <h3>Home</h3>
      </router-link>
    </div>
    <div class="cart">
      <div>
        <router-link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-check"
            viewBox="0 0 16 16"
            v-show="CART.length"
          >
            <path
              d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
            <path
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
            v-show="!CART.length"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
        </router-link>
      </div>
      <div class="cart-show">
        <div v-if="CART.length">
          <h3>
            Товаров в корзине на: {{ totalAmount.toFixed(2) }} {{ CURRENCY }}
          </h3>
        </div>
        <div>
          <h3 v-if="!CART.length">Корзина пока пуста</h3>
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      cartPrice: 0,
    };
  },
  computed: {
    ...mapGetters(["CART", "CURRENCY"]),
    totalAmount() {
      return this.CART.reduce((sum, item) => sum + item.totalPrice, 0);
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart {
  display: flex;
  align-items: center;
  padding-right: 20px;
}
h3 {
  margin: 0;
  margin-left: 10px;
  color: black;
  text-decoration: none;
}
a{
  text-decoration: none;
}
svg {
  color: black;
}
@media (max-width: 420px) {
  .card-content {
    flex-wrap: wrap;
  }
  .cart-show {
    display: none;
  }
}
</style>


