<template>
  <div>
    <div
      class="alert fade show"
      :class="getTypeClass"
      role="alert"
    >
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',
  props: ['title', 'type'],
  computed: {
    getTypeClass() {
      return `alert-${this.type}`;
    },
  },
};
</script>
