<template>
  <div>
    
      <main class="wrapper">
        <h1 class="mb-2">Products</h1>

        <div class="card-container">
            <product-card 
          class="card" 
          v-for="(product,index) in inventory" :key="product.id"
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
 props:["inventory","addToCart","cart"],
 data(){
  return{
    quantity:0
  }
 }, 
 components:{
    ProductCard
  }
}
</script>

<style>

</style>