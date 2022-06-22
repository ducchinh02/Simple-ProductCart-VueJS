<template>
   <header class="top-bar spread">
        <nav class="top-bar-nav">
          <router-link to="/" class="top-bar-link">
            <i class="icofont-spoon-and-fork"></i>
            <span>Home</span>
          </router-link>
          <router-link to="/product" class="top-bar-link">
            <span>Products</span>
          </router-link>
          <router-link to="/check-cart" class="top-bar-link">
            <span>Check Cart</span>
          </router-link>
        </nav>
        <a @click="toggleSideBar" class="top-bar-cart-link">
          <i class="icofont-cart-alt icofont-1x"></i>
          <span>Cart ({{cart.length}})</span>
        </a>   
      </header>
    
</template>

<script>
export default {
  props:['toggle','toggleSideBar','cart'],
 data(){
  return{
  }
 },

}
</script>

<style scoped>
.cart-container{
    z-index: 9999999;
}
</style>