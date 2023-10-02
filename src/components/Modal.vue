<template>
  <div class="modal" @click.stop='closeModal'>
    <div class="modal__content" @click.stop>
      <h2 class="modal__heading">
        Address:
      </h2>

      <div v-if='currentUser.address'>
        <p>
          1. {{ currentUser.address.street }}
        </p>

        <p>
          2. {{ currentUser.address.suite }}
        </p>

        <p>
          3. {{ currentUser.address.city }}
        </p>

        <p>
          4. {{ currentUser.address.zipcode }}
        </p>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    }
  },

  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__heading {
  margin-bottom: 30px;
}

.modal__content {
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
}
</style>