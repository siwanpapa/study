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
              <v-tab-item v-for="(item, idx) in items" :key="item">
                <v-card flat color="basil">
                  <v-card-text>
                    <ValidationObserver ref="obs" v-slot="{ passes, valid }">
                      <v-form>
                        <VTextFieldWithValidation
                          rules="required|max:5"
                          v-model="id"
                          :counter="5"
                          label="아이디"
                        />
                        <ValidationProvider
                          rules="required|confirmed:confirm"
                          name="비밀번호"
                          v-slot="{ errors }"
                        >
                          <v-text-field
                            label="비밀번호"
                            v-model="password"
                            type="password"
                          />
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>

                        <ValidationProvider
                          name="비밀번호 확인"
                          rules="required"
                          v-slot="{ errors }"
                          vid="confirm"
                        >
                          <v-text-field
                            label="비밀번호 확인"
                            v-model="confirm"
                            type="password"
                          />
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                        <VTextFieldWithValidation
                          rules="required|email"
                          v-model="email"
                          label="이메일"
                        />
                        <v-checkbox
                          label="약관동의"
                          v-model="agree"
                          value="Y"
                        />

                        <v-btn @click="passes(onSubmit)" :disabled="!valid"
                          >Submit</v-btn
                        >
                        <v-btn @click="clear(idx)">Reset</v-btn>
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
  ValidationObserver,
  ValidationProvider,
  localize,
  extend
} from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko.json';
import * as rules from 'vee-validate/dist/rules';
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('ko', ko);

export default {
  components: {
    VTextFieldWithValidation,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      tab: null,
      items: ['개인', '기업'],
      text: 'hello',
      id: '',
      password: '',
      confirm: '',
      email: '',
      agree: 'N'
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.info('Form submit!!');
    },
    clear(idx) {
      console.info('>>> ', idx);
      this.email = '';
      requestAnimationFrame(() => {
        this.$refs.obs[idx].reset();
      });
    }
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
