<template>
    <header>


<div class="row">
  <nav class="navbarTop navbar navbar-light ">

    <div class="row">

      <div class="col-4 d-flex justify-content-center mt-3 ms-5">
        <v-col cols="12" sm="6" md="10">
          <v-text-field id="searchBar" label="Arama Yap" class="rounded-pill" placeholder="Arama Yap" solo>
          </v-text-field>
        </v-col>
      </div>

      <div class="col mt-5 ">

        <div class="d-flex justify-content-center">
          <img height="100"
            src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/online_on_yil_logo_2022-2.svg" />
        </div>

      </div>

      <div class="col-4 mt-4 ">

        <div class="row">
          <div class="d-flex justify-content-end">

            <div class="col-5">
              <img height="25"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-gift-red.svg" />
              <button class="navbarLink btn btn-sm ">KURUMSAL HEDİYELER</button>
            </div>
            <div class="col-3">
              <img height="25"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-user.svg" />
              <button @click="goToRegisterPage" class="navbarLink btn btn-sm ">GİRİŞ</button>
            </div>
            <div class="col-3">
              <img height="25"
                src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-basket.svg" />
              <button class="navbarLink btn btn-sm ">SEPET</button>
            </div>
          </div>

        </div>



      </div>

      <div class="row mt-4">
        <div class="d-flex justify-content-center">

          <div class="col-1 d-flex">
            <img height="25"
              src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/menu/hediye.svg" />
            <button class="btn btn-sm">
              <h6 class="ms-1 text-danger">HEDİYE</h6>

            </button>
          </div>
          <div class="col-1 d-flex">
            <img height="25"
              src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/menu/dondurma.svg" />
            <button class="btn btn-sm">
              <h6 class="ms-1 ">DONDURMA</h6>

            </button>
          </div>
          <div class="col-1 d-flex">
            <button class="m-auto btn btn-sm">
              <h6 class=" fw-bold">KAHVE</h6>
            </button>

          </div>
          <div class="col-1 d-flex">
            <button class="btn btn-sm">

              <h6 class="ms-2 fw-bold">ÇİKOLATA</h6>
            </button>
          </div>
          <div class="col-1 d-flex">
            <button class="btn btn-sm">

              <h6 class="ms-2 fw-bold">AKSESUAR</h6>
            </button>
          </div>
          <div class="col-1 d-flex">
            <button class="btn btn-sm">

              <h6 class="ms-2 fw-bold">PASTACILIK</h6>
            </button>
          </div>

          <div class="col-1 d-flex">
            <button class="btn btn-sm">
              <h6 class="ms-2 fw-bold">FIRSATLAR</h6>
            </button>

          </div>
          <div class="col-1 d-flex">
            <img height="25" class="mt-1"
              src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/menu/hakkimizda.svg" />
            <button class="btn btn-sm">
              <h6 class="ms-2 text-success fw-bold">HAKKIMIZDA</h6>
            </button>

          </div>

        </div>
      </div>

    </div>



  </nav>
</div>
</header>
</template>

<script>
export default {
  

  methods: {
    goToRegisterPage(){

      this.$router.push({path:"/register"})

    }
  },
}
</script>
