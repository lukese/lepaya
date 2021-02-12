<template>
  <div
    class="card"
    :class="{ disabled: disabled }"
  >
    <div class="card-body">
      <h5 class="card-title">{{ ucFirst(offer.name) }}</h5>
      <p class="card-text">{{ offer.description }}</p>
      <div class="">
          <span class="badge badge-secondary mr-2">
            Start Date: {{ startDate }}
          </span>
          <span class="badge badge-secondary">
            End Date: {{ endDate }}
          </span>
      </div>
      <h5 class="mt-2">Skills</h5>
      <div>
        <span
          v-for="(skill, index) in offer.skills"
          :key="offer.skills[index]"
          class="mt-4 mr-2"
        >{{ skill }}</span>
      </div>
      <div class="d-flex flex-row-reverse">
        <button
          type="submit"
          class="btn btn-success btn-sm "
          @click="acceptOffer"
        >Accept
        </button>
        <button
          type="submit"
          class="btn btn-danger btn-sm mr-2"
          @click="rejectOffer"
        >Reject
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  name: 'offer',
  props: ['offer'],
  data() {
    return {
      disabled: false,
    };
  },
  computed: {
    startDate() {
      return moment(this.offer.startDate).format('D-MM-Y HH:mm');
    },
    endDate() {
      return moment(this.offer.endDate).format('D-MM-Y HH:mm');
    },
  },
  methods: {
    acceptOffer(e) {
      e.preventDefault();
      console.log('Accepted');

      this.$emit('offerStatusFilled', {
        type: 'success',
        title: 'You have accepted an offer!',
      });

      this.hideOffer();
    },
    rejectOffer(e) {
      e.preventDefault();
      console.log('Rejected');

      this.$emit('offerStatusFilled', {
        type: 'warning',
        title: 'You have rejected an offer!',
      });

      this.hideOffer();
    },
    ucFirst(text) {
      if (typeof text !== 'string') {
        return '';
      }
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    hideOffer() {
      this.disabled = true;
      // this.$emit('offerToBottom', this.offer);
    },
  },
};
</script>
<style
  lang="scss"
  scoped
>
.card {
  margin-bottom: 20px;

  &.disabled {
    opacity: 0.55;
    pointer-events: none
  }
}
</style>
