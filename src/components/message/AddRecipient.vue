<template lang="pug">
  v-card(width="700" max-height=500)
    v-card-title 문자 받는사람 추가
    v-card-text
      v-tabs
        v-tab 직접 추가
        v-tab 주소록 추가
        v-tab-item
          v-container(fluid class="d-flex")
            v-textarea(v-model="telList" auto-grow outlined single-line label="문자받는 연락처를 추가해주세요.")
            v-scroll-x-transition(mode="out-in" )
              v-sheet(v-if="!telList") 그룹을 선택해주세요
              v-card( v-else flat)
                v-list(dense)
                  v-list-item-group( v-model="selection" multiple )
                    template(v-for="(item, idx) in procTel")
                      v-list-item(:key="idx" :value="item" active-class="deep-purple--text text--accent-4" )
                        template(v-slot:default="{active, toggle}")
                          v-list-item-icon
                            v-icon mdi-face
                          v-list-item-content
                            v-list-item-title {{item}}
                          v-list-item-action
                            v-checkbox(:input-value="active" :true-value="item" color="deep-purple accent-4" @click="toggle")
        v-tab-item
          v-card
            v-card-title 주소록 추가..
    v-card-actions
      v-spacer
      v-btn( @click="close" text ) 닫기
      v-btn( @click="close" text ) 추가하기


</template>

<script>
export default {
  name: 'AddRecipient',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      tab: null,
      showInput: true,
      selection: [],
      telList: ''
    };
  },
  methods: {
    async getData() {
      /* fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(json => console.info('## res', JSON.stringify(json)))
          .catch(err => console.warn(err)); */
      console.info('## call methods!!');
    },
    remove(item) {
      this.selection.splice(this.selection.indexOf(item), 1);
      this.selection = [...this.selection];
    },
    test() {
      console.info('## TEST');
    },
    close() {
      this.$emit('update:visible', false);
    }
  },
  computed: {
    procTel() {
      const regex = /[^0-9]/g;
      let res = this.telList
        .split('\n')
        .map(item => {
          return (item || '').replace(regex, '');
        })
        .filter(item => item !== '');
      return res;
    }
  },
  created() {
    // this.getData();
  }
};
</script>

<style scoped></style>
