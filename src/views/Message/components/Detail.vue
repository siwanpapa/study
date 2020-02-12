// 메시지 상태 상세보기
<template lang="pug">
  v-card(width="700")
    v-card-title {{detail.list[0].name}}님
      span(v-show="detail.list.length > 0" class="font-weight-regular body-2" ) {{`외 ${detail.list.length-1}명에게 ${detail.type} ${detail.status}`}}
    v-card-subtitle {{detail.status === '전송중' ? `${detail.sending}/${detail.total}(${detail.sending*100/100}%)`:''}} | 성공:{{detail.succ}}, 실패:{{detail.fail}}, 전송대기: 20
    v-card-text 
      v-expansion-panels(focusable)
        v-expansion-panel(v-for="(item, idx) in detail.list" :key="idx")
          v-expansion-panel-header {{item.name +':'+ String(item.tel)}} 
            div
              span(:class="{'red--text' : item.status === '실패'}") dhdhd
              span  ahaa
              span  ahaa
          v-expansion-panel-content {{detail.msg}}
      
</template>

<script>
export default {
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
  }
};
</script>

<style scoped></style>
