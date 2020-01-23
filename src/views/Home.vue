<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <div class="wrap mx-auto">
          <v-card class="mb-5">
            <v-card-text>
              <v-form>
                <v-text-field
                  label="아이디(이메일 또는 전화번호)"
                ></v-text-field>
                <v-text-field label="비밀번호" type="password"></v-text-field>
              </v-form>
              <v-btn color="success" block to="/message">로그인</v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn color="success" text to="/Join">회원가입</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="success" text>비밀번호 찾기</v-btn>
            </v-card-actions>
          </v-card>
          <v-btn color="orange" block to="/message">구경하기</v-btn>
          <v-footer absolute>
            footer..
          </v-footer>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import goTo from 'vuetify/es5/services/goto';

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      type: 'number',
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      textAreaProps: {
        'auto-grow': true,
        rows: 1,
        solo: true,
        'hide-details': true
      }
    };
  },
  methods: {
    inputMessage(/* event */) {
      /* const value = event.target.value;
      const type = event.shiftKey;
      const type2 = event.enterKey; */
      // console.info(`value: ${value}, type: ${type}, type2:${type2}`);
      console.info(document.documentElement.scrollTop);
      this.$vuetify.goTo(9999);
    }
  },
  computed: {
    target() {
      /* const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value; */
      return 9999;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 400px;
}
</style>
