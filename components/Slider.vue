<template>
    <div class="row mt-4">

<div class="col-9 m-auto" >
  <template >
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in sliderPhotos" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>
</div>


</div>
</template>

<script>
export default {
    data() {
        return {
            sliderPhotos: [{ src: "https://imgs.search.brave.com/hxrbzVxz8sTx_KgM-0zVppISCd8WnyKabWb5T-PDrMo/rs:fit:800:500:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tQVZra2k2UlpM/RVUvV1p4OExNcmlP/VEkvQUFBQUFBQUFK/alkvYlgwdWpSVzda/M2s3S3k5Z0JUNmNI/TmpRVkFGcFI5UnR3/Q0xjQkdBcy9zMTYw/MC9rYWh2ZWQuanBn" },
      { src: "https://img-kahvedunyasi.mncdn.com/mncropresize/1760/800/kahvedunyasi/banner/1760x800/77b2d96c7f6e3296f00f06716e263cd4.jpg" },
      { src: "https://img-kahvedunyasi.mncdn.com/mncropresize/1760/800/kahvedunyasi/banner/1760x800/1c098ef916e359905523cd1e95b66b4d.jpg" },
      { src: "https://img-kahvedunyasi.mncdn.com/mncropresize/1760/800/kahvedunyasi/banner/1760x800/c64f6e428d8cffa7d8300a21b2da1549.jpg" },
      ],
        }
    },
}
</script>