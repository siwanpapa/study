// 시간 선택
<template lang="pug">
  v-dialog(ref="dialog" v-model="modal" :return-value.sync="cTime" persistent width="290px")
    template(v-slot:activator="{on}")
      v-sheet(class="d-inline-flex" width="50px" )
        v-text-field(v-model="cTime" v-on="on" placeholder="시간" readonly hide-details dense)
    v-time-picker(v-model="cTime" ampm-in-title)
      v-spacer
      v-btn( text @click="modal = false" ) 취소
      v-btn( text @click="update" ) 완료
        
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      modal: false,
      cTime: ''
    };
  },
  methods: {
    update() {
      this.$refs.dialog.save(this.cTime);
      this.$emit('update:time', this.cTime);
    }
  },
  mounted() {
    this.cTime = this.time;
  }
};
</script>

<style lang="scss" scoped></style>
