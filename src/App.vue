<template>
<div>
<navigation 
  :toggle="toggle" 
  :cart="cart" 
  :toggleSideBar="toggleSideBar" 
/>
<router-view 
  :inventory = "inventory" 
  :cart="cart" 
  :addToCart = "addToCart"
  :removeItem = 'removeItem'
  />
<side-bar 
  v-if="toggle"
  :toggle="toggle"
  :toggleSideBar="toggleSideBar" 
  :cart="cart"
  :removeItem = 'removeItem'
   />
</div>
</template>
<script>
import Navigation from './components/Navigation/Nav.vue'
import food from './food.json'
import SideBar from './components/SideBar.vue'

export default {
  components: {
    Navigation,SideBar
  },
   data(){
    return{
      inventory : food,
      cart : [],
      toggle : false

    }
  },
  methods:{
    addToCart(product,quantity){
      if(quantity <= 0){
        alert('Please choose the amount you wish to purchase.')
      }else{
      let found = this.cart.find(item => item.name === product.name );
      if(found){
       found.quantity+= quantity
      }else{
        product['quantity'] = quantity
      this.cart.push(product)
      }
      }
    },
    removeItem(index){
      this.cart.splice(index,1)
    },
      toggleSideBar(){
      this.toggle = !this.toggle
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none!important;;
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
}
#nav a:hover {  
  color: #42b983;
}
.no-decor{
  text-decoration: none!important;
  color:unset;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width: 920px){
.recommended ,.card-container{
    flex-direction: column;
    align-items: center;
}
.wrapper{
  padding: 35px 20px;
}
}
</style>
