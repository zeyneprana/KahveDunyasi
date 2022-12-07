<template>
    <div>
          <template>
            <v-sheet class="mx-auto" elevation="5" max-width="1000">
              <v-slide-group class="pa-4" center-active show-arrows>
                <v-slide-item v-for="n in 10" :key="n" >
                  <button>
                  <v-card  class="mx-auto my-12" max-width="374">
                  
                    
                    <v-img height="250" src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/product/250x250/8ae3c_Cikolatali_Turk_Kahvesi_100_gr.jpg"></v-img>

                    
                      <v-card-title class="fw-bold">Türk Kahvesi</v-card-title>

                    

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                      

                        <h5 class="text-danger">30.99 TL</h5>

                      </v-row>

                        
                      

                      
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <button class="btn btn-sm btn-success mb-3 p-3">Sepete Ekle</button>

                    


                  </v-card>
                </button>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </template>
        </div>
</template>