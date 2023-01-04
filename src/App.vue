<template>
  <div>
    <!-- menu -->
    <button class="fixed z-10" v-on:click="menuClick()">haha</button>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" @leave="leave" >
      <Menu v-show="menuSwitch" :close="menuClick"></Menu>
    </transition>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Menu
  },
  methods: {
    // switch
    menuClick: function () {
      this.menuSwitch = !this.menuSwitch
      }
    ,
    // menu enter animation
    beforeEnter(el) {
      const enter = this.gsap.timeline()
      if (el) {
        enter.set(el.querySelector('#menu'), {
          opacity:1
        }).set(el.querySelectorAll('.menu-bg'), {
          x: '100%'
        }).set(el.querySelector("#content"), {
          opacity: 0
        })
      }
    },
    enter(el) {
      const menu_bg = this.gsap.timeline()
      menu_bg.to(el.querySelectorAll('.menu-bg'), {
        x: 0, duration: 1, stagger: 0.05
      }).to(el.querySelector('#content'), {
        opacity: 1, duration: 0.5,onComplete:function () {
        }
      }, ">")
    },
    leave(el,done) {
      this.gsap.to(el.querySelector('#menu'),0.3, 
      {opacity:0,onComplete:done})
      } 
  },
    data() {
      return {
        menuSwitch: false
      }
    }
  }
</script>

<style>
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>