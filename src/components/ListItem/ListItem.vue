<template>
  <div class="wrapper-list-item">
    <div>
      <p class="title-list">{{ title }}</p>
      <p class="id-text-list">#{{ id }}</p>
    </div>
    <p class="timestamp-text-list">{{ timestamp }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem',
  components: {},
  props: {
    id: {
      type: Number,
      default: 0,
    },
    timestamp: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
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

.wrapper-list-item {
  width: 800px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff00 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 1px;
}

.container-list {
  margin-top: 10px;
}

.title-list {
  text-align: left;
  font: normal normal normal 14px/19px Open Sans;
  letter-spacing: 0px;
  color: #212529;
  opacity: 1;
}

.id-text-list {
  text-align: left;
  font: normal normal normal 12px/17px Open Sans;
  letter-spacing: 0px;
  color: #868e96;
  opacity: 1;
}

.timestamp-text-list {
  text-align: right;
  font: normal normal normal 13px/18px Open Sans;
  letter-spacing: 0px;
  color: #212529;
  opacity: 1;
}
</style>
