<template>
    <div class="product-list">
    <!-- Для функции v-for необходимо указывать уникальный ключ, в вашем примере id тоже уникально) 
    переделал на прием с внешнего API, для запуска json-server --watch db.json
    -->
    <CardProduct
    class="card" 
    v-for="product in PRODUCTS"
    :key="product.id"
    :product="product" 
    >
    </CardProduct>
  </div>
  
   <!-- <Header :cart="cart" :currency="currency"></Header>
    <List :currency="currency"/>
    <Cart :cart="cart"/> -->
  <!-- :style="{width: cardsWidth + '%'}" -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardProduct from '@/components/CardProduct.vue'
export default {
  
  components: { 
    CardProduct
   },
  computed: {
  ...mapGetters([
    "PRODUCTS"
    ]),
  },
  methods: {
  ...mapActions([
    "GET_PRODUCTS"
    ]),
    startPricesMonitoring() {
      setInterval(this.GET_PRODUCTS, 2000)
    },
  },
  // грузит ресурсы при активации, может есть  способ лучше, но я его не знаю
  // для проверки снимите коммент функции this.startPricesMonitoring()
  mounted() {
    // this.startPricesMonitoring();
    this.GET_PRODUCTS();
  },
} 
  // props: {
  //   currency: String,
  // },
  
  // computed: {
  //   cardsWidth() {
  //     let width = window.innerWidth;
  //     let count = 1;
  //     if (width > '840px') {
  //       count = 3;
  //     } else if ((width > '420px' && width < '840px')) {
  //       count = 2;
  //     }

  //     return 100 / count;
  //   },
  // },
  // methods: {
  //   startPricesMonitoring() {
  //     setInterval(this.getList, 1000);
  //   },
  //   async getList() {
  //     let data = await this.$store.dispatch('getProductsList');

  //     this.products = data;
  //   },
  //   addToCart(product) {
  //     let amount = this.$refs.amount.find((input) => input.id === product.id).value;

  //     let data = {
  //       amount,
  //       price: product.price,
  //       title: product.title,
  //     };
  //     this.$parent.cart.push(data);
  //   },
  // },
  // created() {
  //   this.startPricesMonitoring();
  // },
// }
</script>

<style scoped>
  .product-list {
    display: flex;
    margin-top: 40px;
    padding: 10px;
  }
  @media (max-width: 420px) {
  .product-list {
    flex-wrap: wrap;
  }
}
  @media (min-width: 420px) and (max-width: 840px) {
  .product-list {
    flex-wrap: wrap;
  }
}
  @media (min-width: 840px) {
  .product-list {
    flex-wrap: nowrap;
  }
}

 

</style> -->
