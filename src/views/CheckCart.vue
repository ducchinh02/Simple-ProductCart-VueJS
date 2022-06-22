<template>
<div>
     <main class="wrapper">
        <h1 class="mb-2">Your Orders</h1>

        <table v-if="cart.length > 0" class="product-table">
          <thead>
            <tr>
              <td><span class="sr-only">Product Image</span></td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td><span class="sr-only">Actions</span></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,index) in cart" :key="index">
              <td><i :class="['icofont-'+product.icon, 'icofont-4x']"></i></td>
              <td>{{product.name}}</td>
              <td>${{product.price.USD}}</td>
              <td>{{product.quantity}}</td>
              <td>${{(product.price.USD * product.quantity).toFixed(2)}}</td>
              <td><button @click="removeItem(index)" class="btn btn-dark">Remove</button></td>
            </tr>
          </tbody>
        </table>
        
        <p v-else class="mb-2"><em>No items in cart</em></p>
      </main>
</div>
</template>

<script>
export default {
  props:['cart','removeItem']

}
</script>

<style>

</style>