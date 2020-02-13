// 메시지 상태 상세보기
<template lang="pug">
  v-dialog( v-model="visible" width="750" max-width="750" scrollable @click:outside="close" @keydown.esc="close" )
    v-card
      v-system-bar
        v-spacer
        v-btn( @click="close" icon text)
          v-icon mdi-close
      v-card-title {{detail.list[0].name}}님
        span(v-show="detail.list.length > 0" class="font-weight-regular body-2" ) {{`외 ${detail.list.length-1}명에게 ${detail.type} ${detail.status}`}}
      v-card-subtitle {{detail.status === '전송중' ? `${detail.sending}/${detail.total}(${detail.sending*100/100}%)`:''}} | 성공:{{detail.succ}}, 실패:{{detail.fail}}, 전송대기: 20
        v-icon(class="ml-1") mdi-magnify
      v-card-text 
        v-expansion-panels(focusable)
          v-expansion-panel(v-for="(item, idx) in detail.list" :key="idx")
            v-expansion-panel-header {{item.name +':'+ String(item.tel)}} 
              div
                span(:class="{'red--text' : item.status === '실패'}" class="ml-1") {{item.status}}
                span(v-show="item.status === '실패'") ({{item.comment}})
                span(class="ml-1") {{item.sendDate}}
            v-expansion-panel-content {{detail.msg}}
      v-card-actions
        v-spacer
        v-btn( @click="close" text color="green darken-1") 닫기
      
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
      detail: {
        type: '장문',
        status: '전송중',
        sending: 90,
        total: 100,
        succ: 50,
        fail: 2,
        msg: '2020 새해 복 많이 받으세요~',
        list: [
          {
            name: '김씨1',
            tel: '01011112222',
            status: '전송대기'
          },
          {
            name: '김씨2',
            tel: '01011110001',
            status: '실패',
            comment: '잘못된 번호',
            sendDate: '20200202 101015'
          },
          {
            name: '김씨3',
            tel: '01011110002',
            status: '성공',
            comment: '',
            sendDate: '20200202 101015'
          }
        ]
      }
    };
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
    makeList() {
      for (let index = 0; index < 20; index++) {
        this.detail.list.push({
          name: '김씨' + index,
          tel: '0101111'.padStart(4, index),
          status: '성공',
          comment: '',
          sendDate: '20200202 101015'
        });
      }
    }
  },
  created() {
    this.makeList();
  }
};
</script>

<style scoped></style>
