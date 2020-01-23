<template>
  <div class="wrap d-flex flex-column fill-height">
    <div class="content">
      <div v-for="(value, name) in data" :key="name">
        <div class="d-flex mb-3">
          <v-chip outlined v-text="name" class="mx-auto"></v-chip>
        </div>
        <v-card class="mb-3" v-for="subValue in value" :key="subValue.key">
          <v-card-text>
            <span class="font-weight-bold">{{ subValue.to }} 님</span>
            <span v-if="subValue.otherCount > 0">
              외 {{ subValue.otherCount }} 명 에게
              {{ subValue.sendType }} 전송</span
            >
            <span v-else> 께 {{ subValue.sendType }} 전송</span>
            <span class="font-weight-bold ml-1">{{ subValue.sendTime }}</span>
            <div>
              <span v-show="subValue.succ > 0">성공 {{ subValue.succ }}건</span>
              <span class="red--text" v-show="subValue.fail > 0">
                | 실패 {{ subValue.fail }}건</span
              >
              <span v-show="subValue.wait > 0">
                | 결과대기 {{ subValue.wait }}건</span
              >
            </div>
            <div class="mt-1" v-text="subValue.msg"></div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div>
      <v-textarea
        label="메시지 입력"
        solo
        dense
        rows="2"
        append-icon="mdi-send"
        hide-details
        auto-grow
      ></v-textarea>
    </div>
    <!--// content end -->
    <!-- 메시지 입력 부분 -->
    <!-- <div class="footer_message">
      <v-textarea
        label="메시지 입력"
        solo
        dense
        :rows="rows"
        append-icon="mdi-send"
        no-resize
        hide-details
        auto-grow
      ></v-textarea>
    </div> -->
    <!-- <v-footer app inset>
      footer..
    </v-footer> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['no'],
  data() {
    return {
      rows: 2,
      data: {}
    };
  },
  methods: {},
  created() {
    console.info('<<< props', this.no);
    axios.get('/mock/message.json').then(result => {
      console.info('>> ', result);
      this.data = result.data;
    });
  }
};
</script>

<style scoped>
.wrap {
  width: 500px;
}
.content {
  padding: 20px;
  min-height: 100%;
  min-width: 100%;
  margin: 0 auto -50px;
}
.footer {
  height: 50px;
  position: sticky;
  bottom: 0;
}
</style>
