<template lang="pug">
  v-dialog( v-model="visible" max-width="450" scrollable @click:outside="close" @keydown.esc="close")
    v-card
      v-system-bar
        v-spacer
        v-btn( @click="close" icon text)
          v-icon mdi-close
      v-card-title 발신번호 등록
        v-spacer
          v-radio-group(v-model="certifyType" row)
            v-radio(label="휴대폰 인증" value="sms")
            v-radio(label="ARS 인증" value="ars")
            v-radio(label="서류 인증" value="paper")
      v-card-text
        v-text-field(label="이름 입력" v-model="name" hide-details)
        v-text-field(label="전화번호 입력" v-model="tel" hide-details @keydown.enter="addTel")
          template(v-slot:append-outer)
            v-btn(@click="addTel") 인증번호 발송
        v-sheet(v-if="certifyType === 'paper'")
          v-data-table(:headers="headers" :items="senders")
            template(v-slot:item.name="props")
              v-edit-dialog(:return-value="props.item.name" @save="save" @cancel="cancel" @open="open" @close="closeEdit") {{props.item.name}}
                template(v-slot:input)
                  v-text-field(v-model="props.item.name" :rules="[max25chars]" label="edit" single-line counter)
            template(v-slot:item.tel="props")
              v-edit-dialog(:return-value="props.item.tel" @save="save" @cancel="cancel" @open="open" @close="closeEdit") {{props.item.tel}}
                template(v-slot:input)
                  v-text-field(v-model="props.item.tel" :rules="[max25chars]" label="edit" single-line counter)
          v-snackbar(v-model="snack" :timeout="3000" :color="snackColor") {{snackText}}
            v-btn(text @click="snack = false") Close
        v-sheet(v-else)
          v-text-field(label="인증번호 입력" v-model="confirmNum" hide-details)
        v-alert(v-show="showAlert" v-model="showAlert" type="success" dismissible transition="slide-x-reverse-transition" class="mt-2") 등록하신 발신번호 (010-0000-11111 ) 가 접수 되었습니다. 영업일 기준 2일 이내 처리될 예정입니다.
      v-card-actions
        v-btn( @click="close" text color="green darken-1") 닫기
        v-spacer
        v-btn( @click="showAlert = true" text color="green darken-1") 신청하기
  
</template>

<script>
export default {
  name: 'Reg',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      name: '',
      tel: '',
      showAlert: false,
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      certifyType: 'sms', // 라디오버튼 초기선택
      confirmNum: '',
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
    closeEdit() {
      console.log('Dialog closed');
    },
    addTel() {
      this.senders.push({
        name: this.name,
        tel: this.tel
      });
    },
    close() {
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style scoped></style>
