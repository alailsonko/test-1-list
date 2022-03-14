<template>
  <div class="container-search-bar">
    <input
      :onfocus="onFocusEvent"
      :onblur="onBlurEvent"
      class="search-bar"
      type="text"
      :value="todoText"
      placeholder="Search or Add"
      @input="handleOnChange" />
    <button
      class="button cancel-icon"
      :onfocus="handleClearInput"
      :onblur="onBlurEvent"
      tabindex="0"
      @keydown.esc="handleClearInput"
      @click="handleClearInput">
      <CancelIcon v-if="isSearchBarocused" class="" />
    </button>
    <button
      :onfocus="handleAddOnClick"
      :onblur="onBlurEvent"
      class="button add-icon"
      @click="handleAddOnClick">
      <AddIcon v-if="isSearchBarocused" class="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import CancelIcon from '../../assets/cancel.svg';
import AddIcon from '../../assets/add.svg';

export default defineComponent({
  name: 'SearchBar',
  components: {
    CancelIcon,
    AddIcon,
  },
  props: {
    todoText: {
      type: String,
      default: '',
    },
  },
  emits: [
    'handle-on-change-event',
    'handle-clear-input-event',
    'handle-on-click-event',
  ],
  setup() {
    // Setup
  },
  data() {
    return {
      isSearchBarocused: false,
    };
  },
  methods: {
    onFocusEvent() {
      this.isSearchBarocused = true;
    },
    onBlurEvent() {
      this.isSearchBarocused = false;
    },
    handleOnChange(e: any) {
      this.$emit('handle-on-change-event', e);
    },
    handleAddOnClick() {
      this.isSearchBarocused = true;
      this.$emit('handle-on-click-event', this.todoText);
    },
    handleClearInput() {
      this.isSearchBarocused = true;
      this.$emit('handle-clear-input-event', '');
    },
  },
});
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
@use 'sass/color';

.container-search-bar {
  position: relative;
  margin-top: 100px;
  display: flex;
  align-items: center;
  width: 800px;
  height: 60px;
}

.search-bar {
  font: normal normal normal 14px/19px Open Sans;
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
  position: absolute;
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
.cancel-icon {
  color: #fa5252;
  position: absolute;
  right: 72px;
}
.add-icon {
  color: #adb5bd;
  position: absolute;
  right: 25px;
}

.button {
  outline: none;
  border-width: 0;
  border-radius: 6px;
  cursor: pointer;
  background-color: #f1f3f5;
}
</style>
