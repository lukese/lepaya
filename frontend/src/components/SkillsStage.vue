<template>
  <div>
    <div class="row">
      <div class="col-6 offset-3 order-md-1">
        <div class="py-5 text-center">
          <h2>Step 2</h2>
          <p class="lead"></p>
        </div>
        <h4 class="mb-3">Choose your preferred skills</h4>
        <Form
          class="needs-validation"
          novalidate
        >
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="custom-control custom-checkbox"
          >
            <Field
              name="skills"
              type="checkbox"
              class="custom-control-input"
              v-model="selectedSkills"
              :value="skill"
              :id="skill"
            />
            <label
              class="custom-control-label"
              :for="skill"
            >{{ skill }}</label>
          </div>
          <div class="d-flex flex-row-reverse">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              v-on:click="completedSkills"
            >Next
            </button>
          </div>
        </Form>
      </div>
      <div>
          <span>
            {{ selectedSkills }}
          </span>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate';

export default {
  name: 'skills-stage',
  data() {
    return {
      skills: [
        'python',
        'php',
        'node.js',
        'vueJS',
        'react',
        'java',
      ],
      selectedSkills: [],
    };
  },
  methods: {
    completedSkills() {
      this.$emit('completedSkills', this.selectedSkills);
    },
  },
  components: {
    Form,
    Field,
  },
};
</script>
