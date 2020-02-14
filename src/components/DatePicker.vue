// 날짜 선택
<template lang="pug">
  v-menu(v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="200")
    template(v-slot:activator="{on}")
      v-sheet(class="d-inline-flex" width="100px" )
        v-text-field(v-model="cDate" v-on="on" readonly hide-details dense)
    v-date-picker(v-model="cDate" locale="ko-KR" show-current="2020-02-13" @input="update")
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
      menu: false,
      cDate: ''
    };
  },
  methods: {
    update() {
      this.menu = false;
      this.$emit('update:date', this.cDate);
    }
  },
  mounted() {
    this.cDate = this.date;
  }
};
</script>

<style lang="scss" scoped></style>
