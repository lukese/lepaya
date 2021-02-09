<template>
  <div>
    <div class="row">
      <div class="col-6 offset-3 order-md-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Choose your most important skills</h5>
            <Form
              class="needs-validation"
              @submit="completedSkills"
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
                  type="submit"
                  class="btn btn-primary btn-lg"
                >Next
                </button>
              </div>
            </Form>
          </div>
        </div>
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
