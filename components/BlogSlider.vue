<template>
    <v-sheet class="mx-auto mb-5" elevation="8" max-width="1200">
        <v-slide-group v-model="model" class="pa-4" prev-icon="mdi-minus" next-icon="mdi-plus" show-arrows>
            <v-slide-item v-for="item in blogSlider" :key="item" v-slot="{ active, toggle }">
                <v-card  :color="active ? 'primary' : 'grey lighten-1'" class="ma-4 me-5 " height="550" width="400"
                    @click="toggle">
                    <div class="position-relative">
                        
                        <div class="row position-absolute"><img  :src="item.src" alt=""></div>
                        <div class="row position-absolute ms-2  me-5 mt-5">
                            
                                <div class="col-12 position-relative">
                                    <div class="position-absolute mt-5">
                                        <h5 class="mt-5 bg-light">{{item.title}}</h5>
                                        <h4 class="fw-bold bg-light">{{item.content}}</h4>
                                    </div>

                                </div>
                        </div>
                    </div>

                    <v-row class="fill-height" align="center" justify="center">
                        <v-scale-transition>
                            <v-icon v-if="active" color="white" size="48" ></v-icon>
                        </v-scale-transition>
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>


<script>
export default {

    data() {
        return {
            blogSlider:[
            {src:"https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/54f12e8d765e51202236bd69ae324acb.jpg",
            title:"Bizden Haberler",
            content:"Kahve Dünyas'ından Zaferin 100. Yılına Özel Çekirdek Puan Kampanyası"
        },
        {src:"https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/0b2388191140fd32501ec941876a4f81.jpg",
            title:"Tarif",
            content:"Kahve Dünyası Granola ve Müsli ile Sağlıklı Lezzetler"
        },
        {src:"https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/164b86673fce4a244c74c5406fc5e92a.jpg",
            title:"Tarif",
            content:"Şeker İlavesiz Beyaz Çikolatalı ve Granolalı Muhallebi"
        },
        {src:"https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/905200ac32f75a79448aba002b9410c6.jpg",
            title:"Tarif",
            content:"Colombia Espresso Kapsülü ile Mocha"
        },
        {src:"https://img-kahvedunyasi.mncdn.com/kahvedunyasi/blog/410x589/78ce103c3b5385614a486e3e45bdcb78.jpg",
            title:"Bizden Haberler",
            content:"Kahve Dünyası’ndan Dünya Çikolata Günü’ne Özel Anket"
        },
        


            ]
        }
    },
    
}
</script>