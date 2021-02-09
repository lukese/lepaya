<template>
  <div>
    <h1>Service Provide Sign Up</h1>
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
      :clients="clients"
    />
  </div>
</template>
<script>
import http from '@/http';
import SkillsStage from '@/components/SkillsStage';
import ProfileStage from '@/components/ProfileStage';

export default {
  name: 'service-provider',
  components: {
    ProfileStage,
    SkillsStage,
  },
  methods: {
    chooseSkills() {
      this.formStage = 2;
    },
    async getClientOffers(selectedSkills) {
      // Make request to get client offers based on skills
      this.clients = await http.post('/companies', {
        skills: selectedSkills,
      });

      // Pass data into the final stage

      // Show the offers page
    },
  },
  data() {
    return {
      formStage: 2,
      clients: [],
    };
  },
};
</script>
