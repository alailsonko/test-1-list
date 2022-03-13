<template>
  <div class="container-home">
    <SearchBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '../../components/SearchBar/SearchBar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
  },
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

<style lang="scss" scoped>
@use 'sass/color';
.container-home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
