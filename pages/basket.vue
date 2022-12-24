<template>

<section>
  <div class="container py-5">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-10">
        <div v-for="item in basketData" :key="item.id" class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div  class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img :src="item?.src"
                    class="w-100" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>{{item?.productName}}</h5>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div class="d-flex flex-row align-items-center mb-1">
                  <h4 class="mb-1 me-1">{{item?.unitPrice}} TL</h4>
                </div>
                <div class="d-flex flex-column mt-4">
                  <button @click="deleteItem(item)" class="btn btn-danger btn-sm text-white" type="button">Sepetten Sil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</section>

</template>


<script>

import { collection, query, where, getDocs,doc,updateDoc,arrayRemove } from "firebase/firestore";
import { mapGetters } from "vuex";
import { db } from "~/firebase";

export default {

  data() {
    return {
      dbBasketData: [],
      basketData: [],
    }
  },

  async mounted() {
    const q = query(collection(db, "users"), where("email", "==", this.getUser.email));
    const basket = await getDocs(q);
    basket?.forEach((doc) => {
      console.log(doc.data());
      this.dbBasketData?.push(doc.data().basket)

      this.dbBasketData?.forEach((item) => {
        item?.forEach((item) => {
          this.basketData.push(item)
        })
      })
    });
  },

  methods: {
    async deleteItem(item){
      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        basket: arrayRemove(item)
      });

      this.basketData = this.basketData.filter(i => i.id != item.id)
    }
  },

  computed: {

    ...mapGetters(['getUser', 'getTotalPrice'])

  }
}
</script>
