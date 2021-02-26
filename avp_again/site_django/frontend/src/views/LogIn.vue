<template>
    <div class="login">

        <MyMenuSmall></MyMenuSmall>
        <div id="spacer"></div>
        <LoginWindow></LoginWindow>
        
        <Footer></Footer>

    </div>
</template>

<style scoped>
* {
  box-sizing: border-box;

}
#spacer {
  min-height: 8vh;
}

</style>

<script scoped>

import MyMenuSmall from '@/components/MyMenuSmall.vue'
import LoginWindow from '@/components/LogIn.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    MyMenuSmall,
    LoginWindow,
    Footer
  }, 
}
</script>