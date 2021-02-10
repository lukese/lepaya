<template>
  <div>
    <h1>Offers</h1>
    <Message
      v-if="isErrorVisible"
      :type="errorType"
      :title="errorTitle"
    />
    <div class="row">
      <div
        v-for="(offer, index) in offers"
        :key="offer[index]"
        class="col-6"
      >
        <offer
          :offer="offer"
          v-on:offerStatusFilled="showHideMessage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Offer from '@/components/Offer';
import Message from '@/components/Message';

export default {
  name: 'job-offers',
  props: ['offers'],
  data() {
    return {
      errorType: '',
      errorTitle: '',
      isErrorVisible: false,
    };
  },
  components: {
    Offer,
    Message,
  },
  methods: {
    showHideMessage(options) {
      this.errorTitle = options.title;
      this.errorType = options.type;
      this.isErrorVisible = true;
    },
  },
};
</script>
