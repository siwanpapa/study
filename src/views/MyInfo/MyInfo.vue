<template lang="pug">
  v-app
    v-app-bar(app clipped-left color="green" )
      v-toolbar-title 내정보
      v-btn(text to="/message") 문자방
      v-btn(text to="/senderNumberManagement") 발신번호 관리
      v-btn(text to="/Usage") 이용량
      v-btn(text to="/Address") 주소록 관리
    v-content
      v-container
        div(style="width:500px")
          v-card(class="mb-2" )
            v-card-title 홍길동 님의 정보
            v-card-text
              v-list
                v-list-item
                  v-list-item-content
                    v-text-field(label="핸드폰 번호" value="010-1111-0000" hide-details)
                v-list-item(three-line)
                  v-list-item-content
                    v-list-item-title 비밀번호 변경
                    v-list-item-subtitle
                      v-text-field(label="기존 비밀번호" hide-details)
                      v-text-field(label="신규 비밀번호" hide-details)
                      v-text-field(label="신규 비밀번호 확인" hide-details)
                v-list-item
                  v-text-field(label="이메일 주소" value="empty@very.com" hide-details)

          v-card(class="mb-2")
            v-card-title 충전 내역
            v-card-text
              v-data-table(:headers="charge.headers" :items="charge.datas" item-key="idx" )           
          v-card(class="mb-2")
            v-card-title 문의 내역
            v-card-text
              v-data-table(:headers="inquiry.headers" :items="inquiry.datas" item-key="idx" ) 
          div 
            span 회원탈퇴를 원하시나요?
            v-dialog( v-model="withdrawal" width="500" )
              template(v-slot:activator="{ on }")
                v-btn(color="teal lighten-5" v-on="on") 회원탈퇴
              v-card
                v-card-title 회원탈퇴
                v-card-text 
                  p(class="font-weight-bold") 탈퇴할 경우  보유계정(부계정 포함) 재상용 및 복구가 불가능 합니다.
                  p 본인 및 타인 모두 재사용이 불가 하오니 신중하게 선택해 주세요.
                  p
                  p(class="font-weight-bold") 전송이력은 1년 동안 보관  후 파기 됩니다.
                  p 관련법에 의거하여 전송이력을 보관하게 됨을 참고해 주시기 바랍니다.
                  p
                  v-checkbox(label="위 사항에 모두 동의 합니다.")
                v-divider
                v-card-actions
                  v-spacer
                  v-btn( color="primary" text @click="withdrawal = false") 취소
                  v-btn( color="primary" text ) 탈퇴
                  

</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      leftMenuSelected: 0,
      withdrawal: false, // 회원탈퇴
      // 충전내역
      charge: {
        headers: [
          { text: '날짜', value: 'date' },
          { text: '충전금액', value: 'charge' },
          { text: '결제금액', value: 'pay' },
          { text: '충전방법', value: 'type' },
          { text: '상태', value: 'state' }
        ],
        datas: [
          {
            idx: 0,
            date: '2020-03-29',
            charge: '50,000원',
            pay: '55,000원',
            type: '카드',
            state: '충전완료'
          },
          {
            idx: 1,
            date: '2020-03-29',
            charge: '30,000원',
            type: '계좌이체',
            pay: '33,000원',
            state: '충전대기'
          }
        ]
      },
      // 문의 내역
      inquiry: {
        headers: [
          { text: '번호', value: 'idx' },
          { text: '문의내역', value: 'inquiry' },
          { text: '답변여부', value: 'state' },
          { text: '문의일', value: 'date' }
        ],
        datas: [
          {
            idx: 0,
            inquiry: '초당 전송건수 어떻게 되나요??',
            state: '처리중',
            date: '2020-03-29'
          },
          {
            idx: 1,
            inquiry: '충전 언제 되나요??',
            state: '완료',
            date: '2020-03-29'
          }
        ]
      }
    };
  }
};
</script>
