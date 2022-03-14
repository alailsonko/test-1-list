<template>
  <div class="container-home">
    <SearchBar
      :todo-text="todoText"
      @handle-on-change-event="handleOnChangeEvent"
      @handle-clear-input-event="handleClearInputEvent"
      @handle-on-click-event="handleOnClickEvent" />
    <div class="container-list">
      <ListItem
        v-for="(item, index) in itemsList"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :timestamp="item.timestamp"
        :index="index"
        :item-list="itemsList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '../../components/SearchBar/SearchBar.vue';
import ListItem from '../../components/ListItem/ListItem.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
    ListItem,
  },
  setup() {
    const itemsList = [
      {
        title: 'hello',
        id: 1,
        timestamp: '2 minutes ago',
      },
      {
        title: 'hello',
        id: 2,
        timestamp: '3 minutes ago',
      },
      {
        title: 'hello',
        id: 3,
        timestamp: '5 minutes ago',
      },
    ];
    return {
      itemsList,
    };
  },
  data() {
    return {
      todoText: 'props',
    };
  },
  methods: {
    handleOnChangeEvent(e: any) {
      this.todoText = e.target.value;
    },
    handleOnClickEvent() {
      this.itemsList.push({
        title: this.todoText,
        id: this.itemsList.length + 1,
        timestamp: 'now',
      });
      this.todoText = '';
    },
    handleClearInputEvent(value: any) {
      this.todoText = value;
    },
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.container-list {
  margin-top: 10px;
}
</style>
