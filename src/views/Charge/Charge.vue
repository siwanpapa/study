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
              v-col(cols="5")
                v-radio-group(v-model="selectedCharge" row)
                  v-radio(label="1만원")
                  v-radio(label="3만원")
                  v-radio(label="5만원")
                  v-radio(label="10만원")
              v-divider(vertical)
              v-col(class="d-flex text-center")
          
</template>

<script>
export default {
  data() {
    return {
      selectedCharge: 1
    };
  }
};
</script>
