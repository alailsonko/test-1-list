<template>
  <div>
    <RouterLink to="/" />
  </div>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    // Setup
  },
});
</script>

<style lang="scss" module>
// Style
</style>
