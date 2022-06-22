<template>
<div>    
  <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>
       <main class="wrapper">

        <h2 class="mb-2">Recommended</h2>

        <div class="recommended">

          <product-card 
          class="card" 
          v-for="(product,index) in inventory.slice(0,3)" :key="product.id"
          :index = "index"
          :product = "product"
          :addToCart = "addToCart"
          :cart="cart"
          >

          </product-card>

        </div>

      </main>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Home',
  props:['inventory','cart','addToCart'],
  components:{
    ProductCard
  }
}
</script>
