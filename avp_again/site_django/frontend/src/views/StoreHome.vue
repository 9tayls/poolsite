<template>
    <div class="storehome">
        
        <MyMenuSmall></MyMenuSmall>

        <div id="top-space"></div>

        <h1 class="text-6xl">Store Home</h1>

        <Footer></Footer>

    </div>
</template>

<script scoped>
import MyMenuSmall from '@/components/MyMenuSmall.vue'
import Footer from '@/components/Footer.vue'



export default {
  
  components: {
    MyMenuSmall,
    Footer
  },
  
}

</script>

<style scoped>
* {
  box-sizing: border-box;

}

#top-space{
  min-height: 100vh;
}

</style>