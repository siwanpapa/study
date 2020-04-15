<template lang="pug">
  v-app
    v-app-bar(app clipped-left color="green" )
      v-toolbar-title 내정보
      v-btn(text to="/message") 문자방
      v-btn(text to="/senderNumberManagement") 발신번호 관리
      v-btn(text to="/Usage") 이용량
      v-btn(text to="/Address") 주소록 관리
    v-navigation-drawer(app clipped permanent)
      v-list(nav dense)
        v-list-item-group(v-model="leftMenuSelected" color="primary")
          v-list-item
            v-list-item-icon
              v-icon mdi-account
            v-list-item-content
              v-list-item-title 내정보
    v-content
      v-container
        div(style="width:500px")
          v-card
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



</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      leftMenuSelected: 0
    };
  }
};
</script>
