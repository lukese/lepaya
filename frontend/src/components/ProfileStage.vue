<template>
  <div>
    <div class="row">
      <div class="col-6 offset-3 order-md-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Fill your profile details</h5>
            <Form
              class="needs-validation"
              :validation-schema="schema"
              v-slot="{ errors }"
              @submit="completeProfile"
              novalidate
            >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <Field
                    name="firstName"
                    id="firstName"
                    type="text"
                    :class="{ 'is-invalid': errors.firstName }"
                    class="form-control"
                    required
                  />
                  <div class="invalid-feedback">{{errors.firstName}}</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <Field
                    name="lastName"
                    id="lastName"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.lastName }"
                    required
                  />
                  <div class="invalid-feedback">{{errors.lastName}}</div>
                </div>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="inputGroupFileAddon01"
                >Upload</span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  >
                  <label
                    class="custom-file-label"
                    for="inputGroupFile01"
                  >Choose file</label>
                </div>
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
import * as Yup from 'yup';

export default {
  name: 'profile-stage',
  components: {
    Form,
    Field,
  },
  data() {
    return {
      schema: Yup.object().shape({
        firstName: Yup.string()
          .min(3, 'First name should have at least 3 characters')
          .required('First Name is required'),
        lastName: Yup.string()
          .min(3, 'Last name should have at least 3 characters')
          .required('Last name is required'),
      }),
    };
  },
  methods: {
    completeProfile() {
      this.$emit('completedProfile');
    },
  },
};
</script>
