<template>
  <div>

    <div class="container-fluid">

      <KargoField />

      <Navbar />

      <Slider />

      <CampaignCard />


      <Title title="Çok Satanlar" />
      <ItemSlider :data="data" />


      <Title title="Kampanyalı Ürünler" />
      <ItemSlider :data="data" />

      <Knowledge />


      <div class="row mt-5">

        <div class="d-flex justify-content-center">
          <h4 class="fw-bold fs-1">Blog</h4>
        </div>

      </div>

      <div class="row">


        <BlogSlider />



      </div>

      <InfoCard />

      <MobileApp />

      <Footer />

    </div>
  </div>
</template>


<script>

import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase";


export default {

  data() {
    return {
      data: []
    }
  },

  async mounted() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.data.push(doc.data())
    });
  },




}
</script>



