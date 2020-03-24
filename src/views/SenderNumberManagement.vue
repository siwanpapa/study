// 발신번호 관리
<template lang="pug">
  v-app
    v-app-bar(app color="orange" )
      v-btn(text to="/message") 문자방
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

        v-card(class="mt-2")
          v-card-title 발신번호 등록
          v-card-text
            v-radio-group(v-model="certifyType" row)
              v-radio(label="문자 인증" value="sms")
              v-radio(label="ARS 인증" value="ars")
              v-radio(label="서류 인증" value="paper")
            v-row(class="d-flex align-end")
              v-col(cols="5")
                v-text-field(label="이름 입력" v-model="name" hide-details)
              v-col(cols="5")
                v-text-field(label="전화번호 입력" v-model="tel" hide-details @keydown.enter="addTel")
              v-col(cols="2")
                v-btn(@click="addTel") 추가
            v-sheet(v-if="certifyType === 'paper'")
              v-data-table(:headers="headers" :items="senders")
                template(v-slot:item.name="props")
                  v-edit-dialog(:return-value="props.item.name" @save="save" @cancel="cancel" @open="open" @close="close") {{props.item.name}}
                    template(v-slot:input)
                      v-text-field(v-model="props.item.name" :rules="[max25chars]" label="edit" single-line counter)
                template(v-slot:item.tel="props")
                  v-edit-dialog(:return-value="props.item.tel" @save="save" @cancel="cancel" @open="open" @close="close") {{props.item.tel}}
                    template(v-slot:input)
                      v-text-field(v-model="props.item.tel" :rules="[max25chars]" label="edit" single-line counter)
              v-snackbar(v-model="snack" :timeout="3000" :color="snackColor") {{snackText}}
                v-btn(text @click="snack = false") Close
            v-sheet(v-else)
              v-row(class="d-flex align-end")
                v-col(cols="8")
                  v-text-field(label="인증번호 입력" v-model="confirmNum" hide-details)
                v-col(cols="4")
                  v-btn 인증번호 전송
            v-btn(@click="showAlert = true") 신청하기
            v-alert(v-show="showAlert" v-model="showAlert" type="success" dismissible transition="slide-x-reverse-transition" class="mt-2") 등록하신 발신번호 (010-0000-11111 ) 가 접수 되었습니다. 영업일 기준 2일 이내 처리될 예정입니다.

</template>

<script>
export default {
  name: 'SenderNumberManagement',
  data() {
    return {
      name: '',
      tel: '',
      confirmNum: '',
      showAlert: false,
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      certifyType: 'sms', // 라디오버튼 초기선택
      headers: [
        { text: '이름', value: 'name' },
        { text: '발신번호', value: 'tel' }
      ],
      senders: [
        { name: '강남지점', tel: '010-1111-2222' },
        { name: '강북지점', tel: '010-1111-2223' }
      ]
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = 'success';
      this.snackText = 'Data saved';
    },
    cancel() {
      this.snack = true;
      this.snackColor = 'error';
      this.snackText = 'Canceled';
    },
    open() {
      this.snack = true;
      this.snackColor = 'info';
      this.snackText = 'Dialog opened';
    },
    close() {
      console.log('Dialog closed');
    },
    addTel() {
      this.senders.push({
        name: this.name,
        tel: this.tel
      });
    }
  }
};
</script>
