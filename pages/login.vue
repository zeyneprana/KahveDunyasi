<template>
  <section class="vh-100 bg-image"
    style="background-image: url(' https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Giriş Yap</h2>

                <form>

                  <div class="form-outline mb-4">
                    <v-text-field v-model="userData.email" label="Email" type="email" hide-details="auto">
                    </v-text-field>
                  </div>

                  <div class="form-outline mb-4">
                    <v-text-field v-model="userData.password" label="Şifre" type="password" hide-details="auto">
                    </v-text-field>
                  </div>


                  <div class="d-flex justify-content-center">
                    <button @click="login(userData)" type="button"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-light">Giriş
                      Yap</button>
                  </div>



                </form>
                <p class="text-center text-muted mt-5 mb-0">Hesabım yok, <button @click="goToRegisterPage"
                    class="fw-bold text-body">Kayıt ol</button>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { setDoc,doc } from "firebase/firestore";
import { db } from "@/firebase"

export default {

  data() {
    return {
      userData: {
        email: null,
        password: null
      }
    }
  },

  methods: {

    async login(userData) {

      if(userData.password ==null || userData.password == "" || userData.email == "" || userData.email == null){
        alert("Boş alanları doldurunuz")
      }else{
        const user = {
          ...userData
        }

        await setDoc(doc(db, "users",user.email), {
          ...user,
          basket:[],
        });

        this.$store.commit('setLogin',true)
        this.$store.commit('setUser',user)
        this.$router.push({ path: "/" })
      }
    },

    goToRegisterPage() {

      this.$router.push({ path: "/register" })

    }
  },

}
</script>
