<template>
  <div>
    <h1>Offers</h1>
    <div v-for="offers in offer">
      {{ offer.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'job-offers',
  props: ['offers'],
}
</script>
