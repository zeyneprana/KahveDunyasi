<template>
 <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" :src="selectedProduct?.src" width="250" /> </div>
                        </div>
                    </div>
                    <div class="col-6 my-auto">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center"> <button @click="$router.go(-1)"><span class="ml-1 text-decoration-underline">Back</span></button> </div> <i class="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div class="mt-4 mb-3">
                                <h5 class="text-uppercase">{{selectedProduct?.productName}}</h5>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">{{selectedProduct?.unitPrice}} TL</span>

                                </div>
                            </div>

                            <div v-if="this.getLoginInfo" class="cart mt-4 align-items-center"> <button @click="addToBasket(selectedProduct)" class="btn btn-danger text-uppercase mr-2 px-4">Sepete Ekle</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex';
import { collection, addDoc,doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "~/firebase";

export default {

  data() {
    return {
      selectedProduct:null
    }
  },

  mounted() {
    this.selectedProduct = this.getSelectedProduct
  },

  methods: {
    async addToBasket(item){
      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        basket: arrayUnion(item)
      });
    }
  },
  computed: {


    ...mapGetters(['getSelectedProduct','getLoginInfo','getUser'])
  }
}
</script>









