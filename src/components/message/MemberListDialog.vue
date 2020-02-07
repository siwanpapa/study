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
      v-card-text
        v-list
          v-list-item-group( v-model="selected" multiple active-class="pink lighten-1")
            template(v-for="(item, idx) in memberList")
              v-hover(v-slot:default="{ hover }")
                v-list-item(:key="idx" @click="test")
                  v-list-item-icon
                    v-icon mdi-face
                  v-list-item-content 
                    v-list-item-title {{`${item.name} ${item.tel}`}}
                  v-list-item-action(v-if="hover" )
                    v-btn( @click.stop="remove(idx)" text icon)
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
      memberList: []
    };
  },
  methods: {
    makeMemberList() {
      for (let i = 0; i < 25; i++) {
        this.memberList.push({
          name: '김개똥' + i,
          tel: '0101111' + new String(i).padStart(4, '0')
        });
      }
    },
    remove(idx) {
      console.info('## TEST ', idx);
      // const arr = JSON.parse(JSON.stringify(this.selected));
      this.memberList.splice(idx, 1);
      // this.selected = [{ name: '김개똥2', tel: '01011110002' }];
      this.selected = [0, 1, 2];
      console.info('## test', JSON.stringify(this.selected));
    },
    test() {
      console.info('tag', '## test');
    },
    close() {
      return this.$emit('update:visible', false);
    }
  },
  computed: {
    selectItems() {
      return this.selected;
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
