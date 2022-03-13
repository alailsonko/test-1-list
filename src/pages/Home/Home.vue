<template>
  <div>hello from home</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  setup() {
    // Setup
  },
});
</script>
>
<style lang="scss" module>
@use 'sass/color';
body {
  background: transparent
    linear-gradient(180deg, color.$white 0%, color.$gray 100%) 0% 0% no-repeat
    padding-box;
  opacity: 1;
  height: 100vh;
}
</style>
