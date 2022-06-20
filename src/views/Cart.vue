<template>
  
    <div class="card"
    v-for="cartItem in CART" 
    :key="cartItem.id">
      <div class="card-header">
        <p class="card-title">{{ cartItem.title }}</p>
      </div>
      <div class="card-content">
        <div class="card-image">
          <img  :src="require('@/assets/image/' + cartItem.image)" />
        </div>
        <div class="card-text">
          <p class="card-price">Количество: {{ cartItem.amount }}</p>
          <p class="card-price">
            Цена: {{ cartItem.price.toFixed(2) }} {{ currency }}
          </p>
          <p class="card-price">
            Общая стоимость: {{ cartItem.totalPrice.toFixed(2) }} {{ currency }}
          </p>
          <button @click.prevent="deleteFromCart(cartItem.id)">Удалить</button>
        </div>
      </div>
    </div>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
  ...mapActions([
    "DELETE_FROM_CART"
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
      console.log(index);
    }

  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  border: 1px solid #908888;
  border-radius: 5px;
  width: 80%;
  text-align: center;
  padding: 10px;
  margin: 50px 10px 20px 0px;
}
.card-header {
display: flex;
justify-self: start;
}
.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;

}
.card-image {
  width: 50%;
}
img {
  width: 100%;
}
.card-text {
  width: 50%;
}

button {
  padding: 5px;
  margin: 5px;
}

@media (max-width: 420px) {
  .card-content {
    flex-wrap: wrap;
  }
  .card-image {
    width: 100%;
  }
}
@media (min-width: 420px) and (max-width: 840px) {
  .product-list {
    flex-wrap: wrap;
  }
}
@media (min-width: 840px) {
  .product-list {
  }
}
</style> -->
