

    
<template>
  <div id="app" class="font-sans text-gray-800">
  
    <nav  :class="{ 'scrolled': !view.atTopOfPage }"  class="px-4 w-full flex flex-wrap items-center justify-between z-10 fixed animated">

        <div class="mb-0 lg:mb-6 xl:mb-0 ">
          <router-link to="/" class="font-bold text-xl flex items-end">
            <span> <img src="@/assets/logo.png" alt="avatar" class="w-40 sm:w-80"></span>
          </router-link>
        </div>

        <div class=" lg:hidden ">
          <button @click="toggleMenu" class="flex items-center px-3 py-2 mr-6 border rounded bg-yellow-100 bg-opacity-90 border-gray-500 hover:text-gray-600 hover:border-yellow-600">
            <svg v-show="!menuOpen" class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
            <svg v-show="menuOpen" xmlns="http://www.w3.org/2000/svg" class="" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <transition 
          enter-active-class="transition-opacity duration-800"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-900"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ul
          class=" transition duration-200 ease-in-out uppercase font-bold w-full flex-grow lg:hidden lg:flex lg:w-auto items-center mt-1 lg:mt-0 bg-gray-300 border border-black border-l-0 border-r-0 border-t-6 "
          v-show="menuOpen"
        >
            <li>
               <div class="w-full md:w-3/5 mx-auto p-8">
                    
                    <div class="shadow-md">
                        <div class="tab w-full overflow-hidden border-t">
                          <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs">
                          <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one">General Info</label>
                          <div class="tab-content overflow-hidden  leading-normal">
                            <div class="bg-gray-200 p-3 text-center  text-indigo-600 underline border-2 border-indigo-500"><a href="#aboutus">About Us</a></div>
                            <p class=" text-sm text-center border-l-2 border-indigo-500 text-indigo-600 p-3 bg-gray-200 "><span class="font-bold"> Phone number </span> 1 (631) 527-8074 </p>
                          </div>
                        </div>
                        <div class="tab w-full overflow-hidden border-t">
                          <input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs">
                          <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-two">Services</label>
                          <div class="tab-content overflow-hidden  bg-gray-100 leading-normal">
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2  border-indigo-500">
                              <a href="#open">Opening</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#power-vacuum">Power Vacuum</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#maintenance">Regular Maintenance</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#close">Closing</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#shrink-wrap">Shrink Wrap pool furniture</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#power-washing">Power Washing</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#installations">Installations</a>
                            </div>
                            <div class="bg-gray-200 p-2 text-center  text-indigo-600 underline border-2 border-indigo-500 flex flex-col">
                              <a href="#repair"> <span> general repair, Finding/Patching Leaks </span> </br> <span class="text-xs text-red-500">(regular maintenance customer only)</span> </a>
                            </div>
                          </div>
                           
                            
                        </div>


                        <div class="tab w-full overflow-hidden border-t">
                          <input class="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs">
                          <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-three">Maintenance </br> Package</label>
                          <div class="tab-content overflow-hidden bg-gray-100  leading-normal">
                            <div class="bg-gray-200 p-3 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#stream">Stream-lined</a>
                            </div>
                            <div class="bg-gray-200 p-3 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#standard">Gold Standard</a>
                            </div>                          
                            <div class="bg-gray-200 p-3 text-center  text-indigo-600 underline border-2 border-indigo-500">
                              <a href="#premium">Premium</a>
                            </div>                          
                            
                          </div>
                        </div>
                    </div>
                  </div>
            </li>
         
            <li class="flex justify-evenly">
               <div class="text-blue-900 py-2 hover:bg-white hover:bg-opacity-70 px-3 transition duration-100 ease-in-out">
                <router-link to="/login"  class="px-3 flex flex-col justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user stroke-current	" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg> Log-in
                </router-link> 
              </div>
                <div class="text-blue-900 py-2 hover:bg-white hover:bg-opacity-70 px-3 transition duration-100 ease-in-out">
                <router-link to="/blog_home"  class="px-3 flex flex-col justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news stroke-current	" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                    <line x1="8" y1="8" x2="12" y2="8" />
                    <line x1="8" y1="12" x2="12" y2="12" />
                    <line x1="8" y1="16" x2="12" y2="16" />
                  </svg> Blog
                </router-link>
                </div>
            
            <div class="py-2 hover:bg-white hover:bg-opacity-70 px-3 text-blue-900  transition duration-100 ease-in-out">
              <router-link to="/store_home" class="px-3 flex flex-col justify-center" >
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store stroke-current" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="3" y1="21" x2="21" y2="21" />
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
              <line x1="5" y1="21" x2="5" y2="10.85" />
              <line x1="19" y1="21" x2="19" y2="10.85" />
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
            </svg> Store</router-link>
            </div>
            </li>
          </ul>

        </transition>
        <ul
          class="hidden uppercase bg-white bg-opacity-10 rounded font-bold w-4/6 max-h-28 items-center  lg:flex justify-evenly border border-red-500 border-l-0 border-r-0 border-t-6" 
        >
            <li class="text-blue-900 px-3 hover:bg-white hover:bg-opacity-70 transition duration-50 ease-in-out">
              <button  @click="toggleMenu2" class="px-1 flex flex-col items-center justify-center w-full ">
                <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square stroke-current" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
                <div class="flex items-center">

                  <h3 class="uppercase font-bold">General Info</h3>
                  <svg  xmlns="http://www.w3.org/2000/svg" class="stroke-current" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>
              <ul v-show="menuOpen2" class=" absolute bg-gray-300 border p-6 ring-4 ring-blue-500 ring-opacity-50">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  Phone Number - (631)  
                </li>
              </ul>
            </li>
            
            
            <li class=" px-3  hover:bg-white hover:bg-opacity-70 transition duration-100 ease-in-out">
              <button @click="toggleMenu3" class="transition duration-500 ease-in-out transform scale-100 flex flex-col px-2 items-center text-blue-900 justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pool stroke-current" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
                  <path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
                  <path d="M15 12v-7.5a1.5 1.5 0 0 1 3 0" />
                  <path d="M9 12v-7.5a1.5 1.5 0 0 0 -3 0" />
                  <line x1="15" y1="5" x2="9" y2="5" />
                  <line x1="9" y1="10" x2="15" y2="10" />
                </svg>
                <div class="flex items-center ">
                <h3 class="uppercase font-bold">Services</h3>
                  <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  </div>
                </button>
                <ul v-show="menuOpen3" class=" absolute bg-gray-300 border p-6 ring-4 ring-blue-500 ring-opacity-50">
                <li>
                  <router-link to="/about">Contact Info</router-link>
                </li>
              </ul>
            </li>
            
            <li class="text-blue-900 py-2 hover:bg-white hover:bg-opacity-70 px-3 transition duration-100 ease-in-out">
              <router-link to="/blog_home"  class="px-3 flex flex-col justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news stroke-current	" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                  <line x1="8" y1="8" x2="12" y2="8" />
                  <line x1="8" y1="12" x2="12" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </svg> Blog
                </router-link>
            </li>
            
            <li class="py-2 hover:bg-white hover:bg-opacity-70 px-3 text-blue-900  transition duration-100 ease-in-out">
              <router-link to="/store_home" class="px-3 flex flex-col justify-center" >
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store stroke-current" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="3" y1="21" x2="21" y2="21" />
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
              <line x1="5" y1="21" x2="5" y2="10.85" />
              <line x1="19" y1="21" x2="19" y2="10.85" />
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
            </svg> Store</router-link>
            </li>
             
            <li class="text-blue-900 py-2 hover:bg-white hover:bg-opacity-70 px-3 transition duration-100 ease-in-out">
              <router-link to="/login"  class="px-3 flex flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user stroke-current	" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg> Log-in</router-link> 
            </li>
          </ul>
    </nav>

  </div>
</template>

<script scoped>
var myRadios = document.getElementsByName('tabs2');
      var setCheck;
      var x = 0;
      for(x = 0; x < myRadios.length; x++){
          myRadios[x].onclick = function(){
              if(setCheck != this){
                   setCheck = this;
              }else{
                  this.setcheck = false;
                  setCheck = null;
          }
          };
      }
import DropdownMenu from '@/components/DropdownMenu.vue'
document.addEventListener("DOMContentLoaded", function(){
    var replacers = document.querySelectorAll('[data-replace]');
    for(var i=0; i<replacers.length; i++){
        let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(function(key) {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
        });
    }
});

export default {
  
  data() {
    return {
      menuOpen: false,
      menuOpen2: false,
      menuOpen3: false,
      view: {
            atTopOfPage: true
        }
    }
  },
  
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},
  components: {
    DropdownMenu,
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    toggleMenu2() {
      this.menuOpen2 = !this.menuOpen2
    },
    toggleMenu3() {
      this.menuOpen3 = !this.menuOpen3
    },
   
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
  },
  computed: {
    videoElement () {
      return this.$refs.video;
    }, 
  }

}
</script>

<style scoped>
        .tab-content {
         max-height: 0;
         -webkit-transition: max-height .35s;
         -o-transition: max-height .35s;
         transition: max-height .35s;
         
         }
         
         /* :checked - resize to full height */
         .tab input:checked ~ .tab-content {
         max-height: 100vh;
         }
         /* Label formatting when open */
         .tab input:checked + label{
         /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
         font-size: 1.25rem; /*.text-xl*/
         padding: 1.25rem; /*.p-5*/
         border-left-width: 2px; /*.border-l-2*/
         border-color: #6574cd; /*.border-indigo*/
         background-color: #f8fafc; /*.bg-gray-100 */
         color: #6574cd; /*.text-indigo*/
         }
         /* Icon */
         .tab label::after {
         float:right;
         right: 0;
         top: 0;
         display: block;
         width: 1.5em;
         height: 1.5em;
         line-height: 1.5;
         font-size: 1.25rem;
         text-align: center;
         -webkit-transition: all .35s;
         -o-transition: all .35s;
         transition: all .35s;
         }
         /* Icon formatting - closed */
         .tab input[type=checkbox] + label::after {
         content: "+";
         font-weight:bold; /*.font-bold*/
         border-width: 1px; /*.border*/
         border-radius: 9999px; /*.rounded-full */
         border-color: #b8c2cc; /*.border-grey*/
         }
         .tab input[type=radio] + label::after {
         content: "\25BE";
         font-weight:bold; /*.font-bold*/
         border-width: 1px; /*.border*/
         border-radius: 9999px; /*.rounded-full */
         border-color: #b8c2cc; /*.border-grey*/
         }
         /* Icon formatting - open */
         .tab input[type=checkbox]:checked + label::after {
         transform: rotate(315deg);
         background-color: #6574cd; /*.bg-indigo*/
         color: #f8fafc; /*.text-grey-lightest*/
         }
         .tab input[type=radio]:checked + label::after {
         transform: rotateX(180deg);
         background-color: #6574cd; /*.bg-indigo*/
         color: #f8fafc; /*.text-grey-lightest*/
         }
#overlay{
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  mix-blend-mode: overlay;
  min-height: 100vh;
  background-image: linear-gradient(180deg,rgba(255,255,0,0.4) ,rgba(0,0,255,0.1));
  mix-blend-mode: overlay;

}
nav {
    z-index: 10
}

nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0px;
    border-radius: 25px;
    transition: all 2s ease-in-out;
    background-image: linear-gradient(180deg,rgba(255,255,0,0.6) ,rgba(0,0,255,0.6));
}
</style>