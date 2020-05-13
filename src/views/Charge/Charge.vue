<template lang="pug">
  v-app
    v-app-bar(app clipped-left color="green" )
      v-toolbar-title 요금 충전
      v-btn(text to="/message") 문자방
      v-btn(text to="/senderNumberManagement") 발신번호 관리
      v-btn(text to="/Usage") 이용량
      v-btn(text to="/Address") 주소록 관리
      v-btn(text to="/MyInfo") 내정보
    v-content
      v-container
        v-card
          v-card-text
            v-row
              v-col
                v-radio-group(v-model="selectedCharge" row)
                  v-radio(label="1만원")
                  v-radio(label="3만원")
                  v-radio(label="5만원")
                  v-radio(label="10만원")
                v-text-field(label="직접입력" dense hide-details outlined suffix="원")
              v-divider(vertical)
              v-col
                p(class="font-weight-bold") 할인정보 안내
                div(class="font-weight-bold") 1만원 ~ 3만원 
                div 단문 : 20원 , 장문 : 60원 , 멀티 : 200원
                div(class="font-weight-bold") 4만원 ~ 10만원 
                div 단문 : xx원 , 장문 : xx원 , 멀티 : xx원
                div(class="font-weight-bold") 11만원 ~ 50만원 
                div 단문 : xx원 , 장문 : xx원 , 멀티 : xx원
                div(class="font-weight-bold") 50만원 ~
                div 단문 : xx원 , 장문 : xx원 , 멀티 : xx원
        v-row
          v-col(cols="7")
            v-card
              v-card-title 선택정보
              v-card-text
                p 충전금액 50,000원
                p 단가 단문 20원  장문 60원 멀티 200원
                div 예상 발송가능 건수 단문 xx건  장문 xx건 멀티 xx건
            v-card(class="mt-2")
              v-card-title 결제수단 선택
              v-card-text
                v-radio-group(v-model="chargeType" row)
                  v-radio(label="계좌이체")
                  v-radio(label="신용/체크 카드")
                div xx은행 1111-xxxx-xxx 예금주 : jk컴퍼니
                v-select(label="카드종류" :items="cardTypes" )
                v-select(label="할부기간" :items="monthlyPeriod" )

          v-col(cols="5")
            v-card
              v-card-title 결제정보
              v-card-text
                p 충전금액 50,000원
                div(class="font-weight-bold") 최종 결제금액
                span(class="font-weight-bold") 53,350 
                span (48,500 + 4,850 부가세 10%)
                p
                v-btn( block color="primary" ) 결제하기
                  
            

</template>

<script>
export default {
  data() {
    return {
      selectedCharge: 1, // 요금선택 라디오 버튼 모델
      chargeType: 0, // 결제수단 선택
      cardTypes: ['삼성카드', '신한카드'],
      monthlyPeriod: ['일시불', '3개월', '6개월']
    };
  }
};
</script>
