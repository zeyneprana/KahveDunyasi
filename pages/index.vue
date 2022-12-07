<template>
  <div>
    <div class="container-fluid">

      <KargoField />

      <Navbar />

      <Slider />

      <CampaignCard />

      <div class="row mt-5">

        <div class="d-flex justify-content-center">
          <h5 class="border-3 border-dark border-bottom">Çok Satanlar</h5>
        </div>

      </div>

      <div class="row mb-4 mt-4">

        <ItemSlider />

      </div>

      <div class="row mt-5">

        <div class="d-flex justify-content-center">
          <h5 class="border-3 border-dark border-bottom">Kampanyalı Ürünler</h5>
        </div>
 

        <ItemSlider />

      </div>

    </div>
  </div>
</template>


<script>
export default {

  data() {
    return {

    }
  },

}
</script>



