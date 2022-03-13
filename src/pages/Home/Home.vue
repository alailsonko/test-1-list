<template>
  <div class="container">
    <input class="search-bar" type="text" placeholder="Search or Add" />
  </div>
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

<style lang="scss" scoped>
@use 'sass/color';
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.search-bar {
  font: normal normal normal 14px/19px Open Sans;
  margin-top: 100px;
  text-indent: 20px;
  width: 800px;
  height: 60px;
  background: #f1f3f5;
  border-radius: 6px 6px 6px 6px;
  border-width: 0;
  outline: none;
  font-size: 14px;
  text-align: left;
  color: color.$text;
  &:focus {
    background: #f1f3f5;
  }
  &::placeholder {
    font-size: 14px;
    text-align: left;
    color: #adb5bd;
    margin-right: 20px;
  }
}
</style>
