<template lang="pug">
  v-dialog( v-model="visible" max-width="350" scrollable @click:outside="close" @keydown.esc="close")
    v-card
      v-system-bar
        v-spacer
        v-btn( @click="close" icon text)
          v-icon mdi-close
      v-card-title 
        span 문자 받는 사람들 {{memberList.length}} 명
        v-text-field(hide-details dense outlined single-line label="받는사람 검색" append-icon="mdi-magnify")
        div {{selectItem}}
      v-card-text
        v-treeview(return-object item-text="name1" :items="memberList" :active.sync="active" open-on-click dense activatable multiple-active )
          template( v-slot:append="{ item }" )
            v-btn( @click="remove(item)" icon text)
              v-icon mdi-close-circle
      v-card-actions
        v-btn( @click="close" text color="green darken-1") 닫기
        v-spacer
        v-btn( @click="" text color="green darken-1") 제거하기
        v-btn( @click="" text color="green darken-1") 추가하기
          
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      selected: [],
      open: [],
      active: [],
      memberList: []
    };
  },
  methods: {
    makeMemberList() {
      for (let i = 0; i < 25; i++) {
        this.memberList.push({
          id: i,
          name1: '김개똥' + i + ' | 0101111' + new String(i).padStart(4, 0)
        });
      }
    },
    remove(idx) {
      /* if (!items || items.length < 1) {
        return;
      }
      items.forEach(item => {
        }); */
      // this.memberList.splice(idx, 1);
      console.info('tag', 'test', idx);
      const i = this.memberList.findIndex(item => item.id === idx.id);
      this.memberList.splice(i, 1);
    },
    test($event) {
      console.info('tag', $event);
    },
    close() {
      return this.$emit('update:visible', false);
    }
  },
  computed: {
    selectItem() {
      return this.active;
    }
  },
  created() {
    this.makeMemberList();
  }
};
</script>

<style scoped>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
