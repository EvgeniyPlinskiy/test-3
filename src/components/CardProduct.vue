<template>
  <div>
     <p class="card-title">{{ product.title }}</p>
     <!-- Картинки обычно хранятся в папке assets и в понятно названной папке -->
      <img class="card-image" 
      :src="require('@/assets/image/' + product.image)">
      <p class="card-price">Цена: {{ product.price.toFixed(2) }} {{ currency }}</p>
        
      <div> 
        <input 
        type="number" 
        v-model="amount" 
        class="input">
        <span>кг</span>
      </div>

      <button @click.prevent="addToCart(product)"> В корзину </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'CardProduct',
  data() {
    return {
      amount: 0
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    addToCart(product) {
      // let amount = this.$refs.amount.find((input) => input.id === product.id).value;
      if (this.amount > 0) {
        let data = {
        id: this.product.id,
        image: this.product.image,
        amount: this.amount,
        price: this.product.price,
        title: this.product.title,
        totalPrice: this.product.price * this.amount
        }
        this.ADD_TO_CART(data)
      } else {
        alert('Введите корректное значение количества товара')
      }
    },
    ...mapActions(["ADD_TO_CART"]),
  },
};
</script> -->

<style lang="scss" scoped>
 .card {
    display: inline-block;
    border: 1px solid #908888;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }
  input {
    margin: 0 auto;
    width: 100%;
    
  }
  @media  (max-width: 420px) {
  .card {
    width: 100%;
  }
}
  @media (min-width: 420px) and (max-width: 840px) {
  .card {
    width: 35%;
  }
}
  @media (min-width: 840px) {
  .card {
    width: 28%;
  }
}
</style>