<template>
  <div
    class="card"
  >
    <div class="card-body">
      <h5 class="card-title">{{ offer.name }}</h5>
      <p class="card-text">{{ offer.description }}</p>
      <div class="d-flex flex-column">
          <span>Start Date: {{ startDate }}</span>
          <span>
            End Date: {{ endDate }}
          </span>
      </div>
      <div
        v-for="(skill, index) in offer.skills"
        :key="offer.skills[index]"
      >
        <h5>Skills</h5>
        <span>{{ skill }}</span>
      </div>
      <div class="d-flex flex-row-reverse">
        <button
          type="submit"
          class="btn btn-success btn-sm"
        >Accept
        </button>
        <button
          type="submit"
          class="btn btn-danger btn-sm"
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
  computed: {
    startDate() {
      return moment(this.offer.startDate).format('D-MM-Y HH:mm');
    },
    endDate() {
      return moment(this.offer.endDate).format('D-MM-Y HH:mm');
    },
  },
};
</script>
<style>
  .card {
    margin-bottom: 20px;
  }
</style>
