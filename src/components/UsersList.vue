<template>
  <TransitionGroup class="users-list" name="list" tag="ul">
    <v-list-item v-for="(item, index) in users" :key="index">
      <v-list-item-avatar class="avatar" @click='() => onShowAddress(index)'>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>
          <span v-html="item.title"></span>
        </v-list-item-title>
        <v-list-item-subtitle>
          <span v-html="item.subtitle"></span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </TransitionGroup>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    }
  },

  methods: {
    onShowAddress(index) {
      this.$emit('show', index);
    }
  }
}
</script>

<style>
.avatar {
  cursor: pointer;
}

.users-list {
  padding-top: 30px;
  padding-bottom: 30px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
