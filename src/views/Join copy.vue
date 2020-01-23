<template>
  <v-app>
    <v-content>
      <v-container>
        <div class="wrap mx-auto">
          <v-card color="basil">
            <v-card-title class="text-center justify-center py-6">
              <h1 class="font-weight-bold display-3 basil--text">JK</h1>
            </v-card-title>
            <v-tabs v-model="tab" background-color="transparent" color="basil">
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                <v-card flat color="basil">
                  <v-card-text>
                    <ValidationObserver
                      ref="obs"
                      v-slot="{ handleSubmit, reset }"
                    >
                      <v-form
                        @submit.prevent="handleSubmit(onSubmit)"
                        @reset.prevent="reset"
                      >
                        <ValidationProvider
                          name="이메일"
                          rules="required|email"
                          v-slot="{ errors }"
                        >
                          <v-text-field
                            v-model="email"
                            type="email"
                            counter="10"
                            label="your email *"
                          >
                          </v-text-field>
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                      </v-form>
                    </ValidationObserver>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('ko', ko);

/* import { required, email, min } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate'; */
// import ko from 'vee-validate/dist/locale/ko.js';

/* const config = {
  locale: 'ko',
  dictionary: {
    ko
  }
}; */

/* extend('required', {
  ...required,
  message: '필수로 입력해야 합니다.'
}); */

/* extend('email', {
  ...email,
  message: 'This field must be a valid email'
}); */
// No message specified.
/* extend('email', email);
extend('min', {
  ...min,
  message: '3자리 이상 입력'
}); */

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      tab: null,
      items: ['개인', '기업'],
      text: 'hello',
      id: '',
      pwd: '',
      email: '',
      agree: null
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.info('Form submit!!');
    }
    /* async clear() {
      // console.info('>>> ', this.$refs.obs);
      this.email = '';
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
    } */
  }
};
</script>

<style scoped>
.wrap {
  width: 500px;
}
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
