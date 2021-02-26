<template>
  <div class="home">
    <MyMenu></MyMenu>

    <LandingPage></LandingPage> 
  
    <Footer></Footer>
    

  </div>
  
</template>

<script scoped>

import MyMenu from '@/components/MyMenu.vue'
import LandingPage from '@/components/LandingPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  
  components: {
    
    MyMenu,
    Footer,
    LandingPage
  },
  
}

</script>
