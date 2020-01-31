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
              <v-tab-item>
                <v-card flat color="basil">
                  <v-card-text>
                    <ValidationObserver ref="obs" v-slot="{ passes, valid }">
                      <v-form>
                        <v-btn color="success">본인인증</v-btn>
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
                            :error-messages="errors"
                          />
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
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                        <VTextFieldWithValidation
                          rules="required|email"
                          v-model="email"
                          label="이메일"
                        />
                        <ValidationProvider
                          rules="required"
                          name="약관동의"
                          v-slot="{ errors }"
                        >
                          <v-checkbox
                            label="약관동의"
                            v-model="agree"
                            value="Y"
                            required
                            type="checkbox"
                            :error-messages="errors"
                          />
                        </ValidationProvider>

                        <v-btn @click="passes(onSubmit)" :disabled="!valid"
                          >회원가입</v-btn
                        >
                        <v-btn @click="clear(idx)">Reset</v-btn>
                      </v-form>
                    </ValidationObserver>
                    <v-sheet
                      >가입하면 “JK문자”의 약관 및 개인정보처리방침,스팸방지정책
                      에 동의하게 됩니다.
                    </v-sheet>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat color="basil">
                  <v-card-text>
                    <ValidationObserver ref="obs" v-slot="{ passes, valid }">
                      <v-form>
                        <v-btn color="success">본인인증</v-btn>
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
                            :error-messages="errors"
                          />
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
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                        <VTextFieldWithValidation
                          rules="required"
                          v-model="companyNo"
                          label="사업자번호"
                        />
                        <VTextFieldWithValidation
                          rules="required"
                          v-model="companyName"
                          label="회사 이름"
                        />
                        <VTextFieldWithValidation
                          rules="required"
                          v-model="managerName"
                          label="담당자 이름"
                        />
                        <VTextFieldWithValidation
                          rules="required"
                          v-model="managerTel"
                          label="담당자 연락처"
                        />
                        <VTextFieldWithValidation
                          rules="required|email"
                          v-model="email"
                          label="담당자 이메일"
                        />
                        <ValidationProvider
                          rules="required"
                          name="재직 증명서 위임장"
                          v-slot="{ errors }"
                        >
                          <v-file-input
                            multiple
                            label="재직 증명서 위임장"
                            required
                            v-model="certificate"
                            :show-size="1000"
                            counter
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                        <ValidationProvider
                          rules="required"
                          name="사업자 등록증"
                          v-slot="{ errors }"
                        >
                          <v-file-input
                            label="사업자 등록증"
                            v-model="businessLicense"
                            required
                            :error-messages="errors"
                            :show-size="1000"
                          />
                        </ValidationProvider>
                        <ValidationProvider
                          rules="required"
                          name="checkbox"
                          v-slot="{ errors }"
                        >
                          <v-checkbox
                            label="약관동의"
                            v-model="agree"
                            value="Y"
                            :error-messages="errors"
                          />
                        </ValidationProvider>
                        <v-btn @click="passes(onSubmit)" :disabled="!valid"
                          >회원가입</v-btn
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
      tab: null, // 0:개인, 1:기업 구분
      items: ['개인', '기업'],
      id: '',
      password: '',
      confirm: '',
      email: '',
      agree: '',
      companyNo: '', // 사업자 번호
      companyName: '', // 사업자 이름
      managerName: '', // 담당자 이름
      managerTel: '', // 담당자 연락처
      certificate: [], // 재직 증명서 & 위임장
      businessLicense: [] // 사업자 등록증
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
