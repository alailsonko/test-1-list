<template>
  <div class="container">
    <div class="container-home">
      <SearchBar
        :todo-text="todoText"
        @handle-on-change-event="handleOnChangeSearchBarEvent"
        @handle-clear-input-event="handleClearInputSearchBarEvent"
        @handle-on-click-event="handleOnClickSearchBarEvent" />
      <div class="container-list">
        <ListItem
          v-for="(item, index) in itemsList"
          :id="item.id"
          :key="item.id"
          :is-exact-match="isExactMatch"
          :title="item.title"
          :timestamp="item.timestamp"
          :index="index"
          :item-list="itemsList"
          @handle-on-delete-item-list="handleDeleteItemListEvent" />
      </div>
    </div>
    <div class="wrapper-sort-options">
      <button class="button-sort" @click="handleSortByValue">
        Sort by Value
      </button>
      <button class="button-sort" @click="handleSortByAddedDate">
        Sort by Added Date
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '../../components/SearchBar/SearchBar.vue';
import ListItem from '../../components/ListItem/ListItem.vue';
import { localStorage } from '../../services/localStorage';

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
    ListItem,
  },
  setup() {
    let itemsList;
    itemsList = localStorage.getTodo() || [];
    if (itemsList.length === 0) {
      localStorage.setItem('todo-list', JSON.stringify([]));
      itemsList = localStorage.getTodo() || [];
    }
    return {
      itemsList,
    };
  },
  data() {
    return {
      todoText: '',
      isLoading: true,
      isExactMatch: '',
    };
  },
  methods: {
    sortStrategy() {
      const sortedOption = localStorage.getItem('sorted');
      if (sortedOption) {
        switch (sortedOption) {
          case 'sort-by-value':
            this.handleSortByValue();
            break;
          case 'sort-by-added-date':
            this.handleSortByAddedDate();
            break;
          default:
            break;
        }
      }
    },
    handleSortByValue() {
      this.itemsList.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      localStorage.setItem('sorted', JSON.stringify('sort-by-value'));
      this.$forceUpdate();
    },
    handleSortByAddedDate() {
      // sort by added date
      this.itemsList.sort((a, b) => {
        if (a.timestamp < b.timestamp) {
          return -1;
        }
        if (a.timestamp > b.timestamp) {
          return 1;
        }
        return 0;
      });
      localStorage.setItem('sorted', JSON.stringify('sort-by-added-date'));
      this.$forceUpdate();
    },
    handleOnChangeSearchBarEvent(e: any) {
      this.todoText = e.target.value;
      this.isExactMatch = e.target.value;
    },
    handleOnClickSearchBarEvent() {
      const newTodo = {
        title: this.todoText,
        id: this.itemsList.length,
        timestamp: new Date(),
      };
      this.itemsList.push(newTodo);
      localStorage.addNewTodo(newTodo);

      this.$forceUpdate();
    },
    handleClearInputSearchBarEvent(value: any) {
      this.todoText = value;
    },
    handleDeleteItemListEvent(value: any) {
      this.itemsList = this.itemsList.filter(
        (item: any) => item.id !== value.id
      );
      localStorage.deleteById(value.id);
      this.$forceUpdate();
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
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.wrapper-sort-options {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.button-sort {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border-width: 0;
  cursor: pointer;
  width: 200px;
  height: 40px;
}
</style>
