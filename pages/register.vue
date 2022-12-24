<template>
  <div>
    <section class="vh-100 bg-image"
      style="background-image: url('https://imgs.search.brave.com/siWbzE02Lzfnx2U954sbz6097w3C6_e9PrUfVJ2o4NQ/rs:fit:1200:713:1/g:ce/aHR0cHM6Ly9hcG9s/bG8ub21lZ2FiaWdk/YXRhLmNvbS9hcGkv/Y2V2YWhpci9jb250/ZW50L2ltYWdlLzM3/ODc0MS8_c2VjcmV0/PWVjZjJjNTdiLWIw/OTEtNGRhNS1hNGQx/LWYxNzg2ZjU3ODlm/OQ'); background-size: cover;">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-75">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px;">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">Hesap Oluştur</h2>

                  <form>

                    <div class="form-outline mb-4">
                      <v-text-field label="İsim" v-model="userData.name" hide-details="auto">
                      </v-text-field>

                    </div>

                    <div class="form-outline mb-4">
                      <v-text-field label="Email" v-model="userData.email" type="email" hide-details="auto">
                      </v-text-field>
                    </div>

                    <div class="form-outline mb-4">
                      <v-text-field label="Şifre" v-model="userData.password" type="password" hide-details="auto">
                      </v-text-field>
                    </div>

                    <div class="form-outline mb-4">
                      <v-text-field label="Şifre tekrar" v-model="userData.password2" type="password"
                        hide-details="auto">
                      </v-text-field>
                    </div>


                    <div class="d-flex justify-content-center">
                      <button @click="RegisterToPage(userData)" type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold text-light">Kayıt
                        Ol</button>
                    </div>



                  </form>
                  <p class="text-center text-muted mt-5 mb-0">Hesabım zaten var, <button @click="goToLoginPage"
                      class="fw-bold text-body">Giriş yap</button>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setDoc,doc } from "firebase/firestore";
import { db } from "@/firebase"


export default {

  data() {
    return {
      userData: {
        name: null,
        email: null,
        password: null,
        password2: null
      }
    }
  },

  methods: {

    async RegisterToPage(userData) {

      if (userData.password != userData.password2) {
        alert("Şifreler uyumsuz")
      } else {

        const user = {
          ...userData
        }
        delete user.password2

        await setDoc(doc(db, "users",user.email), {
          ...user,
          basket:[],
        });

        setTimeout(() => {
          this.$router.push({ path: "/login" })
        }, 1200);



      }



    },
    goToLoginPage() {

      this.$router.push({ path: "/login" })

    }
  },
}
</script>
