<template>
  <div>
    <h1>Offers</h1>
    <div class="row">
      <div
        v-for="(offer, index) in offers"
        :key="offer[index]"
        class="col-6"
      >
        <offer
          :offer="offer"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Offer from '@/components/Offer';

export default {
  name: 'job-offers',
  props: ['offers'],
  components: {
    Offer,
  },
};
</script>
