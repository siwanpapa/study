// 발신번호 관리
<template lang="pug">
  v-app
    v-app-bar(app color="orange" )
      v-toolbar-title 발신번호 관리
      v-btn(text to="/message") 문자방
      v-btn(text to="/address") 주소록 관리
      v-btn(text to="/Usage") 이용량
    v-container
      v-content
        v-card
          v-card-text
            v-simple-table
              template(v-slot:default)
                thead
                  tr
                    th(class="text-left") 번호유형
                    th(class="text-left") 번호규칙
                    th(class="text-left") 인증수단
                tbody
                  tr
                    td 이동전화번호
                    td 10~11자리 번호
                      br
                      | 예) 010-0000-0000
                    td 휴대폰 인증 또는, ARS 인증,서류인증(통신 서비스 이용증명원)
                  tr
                    td 유선전화번호
                    td 9~11자리 번호
                      br
                      | 예) 02-000-0000, 031-0000-0000
                      br
                      | *지역번호를 포함하여 번호를 등록
                    td ARS 인증 또는,서류인증(통신 서비스 이용증명원)
                  tr
                    td 공통서비스 식별번호 * 0N0  계열
                    td 12자리 번호
                      br
                      | 예) 030-0000-0000, 0505-0000-0000
                    td ARS 인증 또는,서류인증(통신 서비스 이용증명원)
                  tr
                    td 대표전화번호
                    td 8자리 번호
                      br
                      | 예) 15YY-0000, 16YY-0000
                      br
                      | * 번호 앞에 지역번호 사용금지
                    td 서류인증(통신 서비스 이용증명원)

        v-btn(@click="showRegDialog = true") 발신번호 등록
        Reg(:visible.sync="showRegDialog")

        v-card(class="mt-2")
          v-card-title 발신번호 리스트
            v-spacer
            v-text-field(v-model="search" append-icon="mdi-magnify" label="검색" single-line hide-details)
              template(v-slot:prepend)
                v-btn 삭제
          v-data-table(v-model="selected" :headers="headers2" :items="senders2" :search="search" show-select item-key="name" )

</template>

<script>
import Reg from './components/Reg.vue';
export default {
  name: 'SenderNumberManagement',
  components: {
    Reg
  },
  data() {
    return {
      showRegDialog: false,
      // 등록된 발신번호 리스트 제목
      headers2: [
        { text: '이름', value: 'name' },
        { text: '발신번호', value: 'tel' },
        { text: '인증방법', value: 'authType' },
        { text: '인증상태', value: 'authStat' },
        { text: '등록일자', value: 'regDate' }
      ],
      senders2: [
        {
          name: '강남지점',
          tel: '010-1111-2222',
          authType: '서류인증',
          authStat: '등록',
          regDate: '2017-09-09'
        },
        {
          name: '강북지점',
          tel: '010-1111-2222',
          authType: 'ARS',
          authStat: '인증완료',
          regDate: '2017-09-09'
        }
      ],
      search: '',
      selected: []
    };
  },
  methods: {}
};
</script>
