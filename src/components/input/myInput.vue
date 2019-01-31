<template>
  <div>
    <div v-cloak v-clickoutside="outsideClose">
      <!-- <input type="text" v-focus/> -->
      <div @click="show = !show" class="dropbutton">
        下拉菜单{{show}}
      </div>
      <div class="dropdown" v-show="isShow">
          {{isShow}}
          <p>点击下拉菜单显示菜单内容，点击外部区域可关闭下拉菜单</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "myInput",
    data() {
      return{
          show: false
      }
    },
    computed: {
      isShow: function () {
        return this.show;
      }
    },
    directives: {
    //   focus: {
    //     inserted: function (el) {
    //     el.focus();
    //     }
    //   }
      clickoutside: {
          bind(el, binding, vnode){
            function documentHandler(e) {
              if (el.contains(e.target)) {
                return false;
              }
              if (binding.expression) {
                binding.value(e);
                console.log(el.show); 
              }
            }

            function KeyUp(e) {
                if (e.keyCode == 27) {
                    if (binding.expression) {
                        binding.value(e);
                    }
                }
            }
            el.__vueClickOutSize__ = documentHandler;
            el.__vueKeyup__ = KeyUp;

            document.addEventListener('keyup', KeyUp)
            document.addEventListener('click', documentHandler)
          },
          unbind(el, binding) {
          document.removeEventListener('click', el.__vueClickOutSize__)
          delete  el.__vueClickOutSize__

          document.removeEventListener('keyup', el.__vueKeyup__)
          delete  el.__vueKeyup__
        }
      }
    },
    methods: {
      outsideClose() {
        this.show = false
      }
    }
}
</script>

<style lang="stylus" scoped>
.dropbutton{
    border: 1px black solid;
    width: 200px;
    background-color: yellow;
}
.dropdown{
    border: 1px black solid;
    width: 200px;
}
</style>
