<template>
  <div
    class="wrapper-list-item"
    @mouseover="handleContainerOnMouseOver"
    @mouseleave="handleContainerOnMouseLeave">
    <div class="left-block">
      <CheckIcon v-if="title === isExactMatch" class="check-icon" />
      <div>
        <p class="title-list">{{ title }}</p>
        <p class="id-text-list">
          <span v-if="title === isExactMatch" class="is-exact-match-text"
            >Exact Match,</span
          >
          #{{ id }}
        </p>
      </div>
    </div>
    <div class="right-section">
      <p class="timestamp-text-list">{{ time }}</p>
      <button
        v-if="isMouseOverItemList"
        class="button"
        @click="handleOnDeleteItemList">
        <TrashIcon class="trash-icon" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formatDuration, intervalToDuration } from 'date-fns';
import TrashIcon from '../../assets/trash.svg';
import CheckIcon from '../../assets/check.svg';

export default defineComponent({
  name: 'ListItem',
  components: {
    TrashIcon,
    CheckIcon,
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
    timestamp: {
      type: Date,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    isExactMatch: {
      type: String,
      default: '',
    },
  },
  emits: ['handle-on-delete-item-list'],
  setup() {
    // setip
  },
  data() {
    return {
      interval: 0,
      time: '',
      isMouseOverItemList: false,
    };
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  created() {
    this.interval = this.interval = setInterval(() => {
      const intervalSinceCreated = intervalToDuration({
        start: new Date(this.timestamp),
        end: new Date(),
      });
      this.time =
        intervalSinceCreated.minutes && intervalSinceCreated.minutes > 0
          ? `${formatDuration(intervalSinceCreated, {
              format: ['minutes'],
            })} ago`
          : 'now';
    }, 1000);
  },
  methods: {
    handleContainerOnMouseOver() {
      this.isMouseOverItemList = true;
      console.log('handleContainerOnMouseOver', this.id);
    },
    handleContainerOnMouseLeave() {
      this.isMouseOverItemList = false;
      console.log('handleContainerOnMouseLeave', this.id);
    },
    handleOnDeleteItemList() {
      this.$emit('handle-on-delete-item-list', {
        id: this.id,
      });
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
  &:hover {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 40px #0000000d;
    border: 1px solid #ffffff;
    border-radius: 6px;
    opacity: 1;
  }
}

.container-list {
  margin-top: 10px;
}
.right-section {
  display: flex;
  align-items: center;
}
.trash-icon {
  color: #fa5252;
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

.button {
  outline: none;
  border-width: 0;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ffffff;
}

.left-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.timestamp-text-list {
  text-align: right;
  font: normal normal normal 13px/18px Open Sans;
  letter-spacing: 0px;
  color: #212529;
  opacity: 1;
}

.check-icon {
  color: #12b886;
}
.is-exact-match-text {
  text-align: left;
  font: normal normal normal 12px/17px Open Sans;
  letter-spacing: 0px;
  color: #12b886;
}
</style>
