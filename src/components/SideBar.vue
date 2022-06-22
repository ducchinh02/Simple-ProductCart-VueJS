<template>
    <aside class="cart-container">
        <div class="cart">
          <h1 class="cart-title spread mb-2">
            <span>
              Cart
              <i class="icofont-cart-alt icofont-1x"></i>
            </span>
            <button @click="toggleSideBar" class="cart-close">&times;</button>
          </h1>

          <div class="cart-body">
            <table v-if="cart.length > 0" class="cart-table">
              <thead>
                <tr>
                  <th><span class="sr-only">Product Image</span></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th><span class="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                <tr class="row-product" v-for="(item,index) in cart" :key="index">
                  <td><i :class="['icofont-'+item.icon, 'icofont-3x']"></i></td>
                  <td>{{item.name}}</td>
                  <td>${{item.price.USD}}</td>
                  <td class="center">{{item.quantity}}</td>
                  <td>${{(item.price.USD * item.quantity).toFixed(2)}}</td>
                  <td class="center">
                    <button @click="removeItem(index)" class="btn btn-light cart-remove">
                      &times;
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <p v-else class="center mb-2"><em>No items in cart</em></p>
          </div>
            <div class="spread">
              <span><strong>Total:</strong> ${{CartSubTotal.toFixed(2)}}</span>
              <button class="btn btn-light">
                <router-link class="no-decor" to="/check-cart">Check cart</router-link>
              </button>
            </div>
        </div>
      </aside>
</template>

<script>
export default {
    props:['toggle','toggleSideBar','cart','removeItem'],
    data(){
        return{
            
        }
    },
    computed:{
        CartSubTotal(){
            let total = 0
            this.cart.forEach((item) => {
                total += (item.price.USD * item.quantity)
            });
            return total
        }
    }

}
</script>

<style scoped>
.row-product td{
    padding: 1rem;
}
thead{
    text-align: center;
}
.cart-body{
    max-height:300px ;
    overflow-y: scroll;
}
.spread:last-child{
    padding: 1rem calc(10px + 1rem) 0;
}
.cart-body::-webkit-scrollbar{
    width: 0;
}
</style>