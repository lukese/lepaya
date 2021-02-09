<template>
  <div>
    <profile-stage
      v-if="formStage === 1"
      v-on:completedProfile="chooseSkills"
    />
    <skills-stage
      v-if="formStage === 2"
      v-on:completedSkills="getClientOffers"
    />
    <job-offers
      v-if="formStage === 3"
      :offers="offers.data"
    />
  </div>
</template>
<script>
import http from '@/http';
import SkillsStage from '@/components/SkillsStage';
import ProfileStage from '@/components/ProfileStage';
import JobOffers from '@/components/JobOffers';

export default {
  name: 'service-provider',
  components: {
    ProfileStage,
    SkillsStage,
    JobOffers,
  },
  methods: {
    chooseSkills() {
      this.formStage = 2;
    },
    async getClientOffers(selectedSkills) {
      // Make request to get client offers based on skills
      this.offers = await http.post('/companies', {
        skills: selectedSkills,
      });

      // Show the offers page
      this.formStage = 3;
    },
  },
  data() {
    return {
      formStage: 1,
      offers: [],
    };
  },
};
</script>
