<template>
  <div class="wrap d-flex flex-column fill-height">
    <Detail :visible.sync="showDetail" />
    <div class="content">
      <div v-for="(value, name) in data" :key="name">
        <div class="d-flex mb-3">
          <v-chip outlined v-text="name" class="mx-auto"></v-chip>
        </div>
        <v-card
          class="mb-3"
          v-for="subValue in value"
          :key="subValue.key"
          @click="showDetail = true"
        >
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
    <v-sheet class="footer">
      <div class="d-flex mb-1 align-center">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text icon @click="isReserve = !isReserve">
              <v-icon v-on="on" :class="{ 'deep-orange--text': isReserve }"
                >mdi-alarm</v-icon
              >
            </v-btn>
          </template>
          <span>예약 전송</span>
        </v-tooltip>
        <template v-if="isReserve">
          <DatePicker :date.sync="date1" />
          <TimePicker :time.sync="time" />
        </template>
        <v-spacer></v-spacer>
        <span>{{ msgByte }}/80</span>
      </div>
      <v-textarea
        label="메시지 입력"
        v-model="msg"
        solo
        dense
        rows="2"
        append-icon="mdi-send"
        hide-details
        auto-grow
      ></v-textarea>
    </v-sheet>
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
import Detail from './Detail.vue';
import DatePicker from '@/components/DatePicker.vue';
import TimePicker from '@/components/TimePicker.vue';
export default {
  components: {
    Detail,
    DatePicker,
    TimePicker
  },
  props: ['no'],
  data() {
    return {
      rows: 2,
      date1: new Date().toISOString().substring(0, 10),
      time: '',
      showDetail: false,
      data: {},
      isReserve: false,
      msg: ''
    };
  },
  methods: {
    getByte(str) {
      var resultSize = 0;
      if (str == null) {
        return 0;
      }

      for (var i = 0; i < str.length; i++) {
        var c = escape(str.charAt(i));
        if (c.length == 1) {
          //기본 아스키코드
          resultSize++;
        } else if (c.indexOf('%u') != -1) {
          //한글 혹은 기타
          resultSize += 2;
        } else {
          resultSize++;
        }
      }

      return resultSize;
    }
  },
  computed: {
    msgByte() {
      return this.getByte(this.msg);
    }
  },
  created() {
    this.getByte('안녕하세요. 좋은하루.');
    axios.get('/mock/message.json').then(result => {
      console.info('>> ', result);
      for (let index = 0; index < 15; index++) {
        result.data['20200110'].push({
          key: 4 + index,
          to: '01011112222',
          otherCount: 5,
          sendType: 'LMS',
          sendTime: '151620',
          succ: 10,
          fail: 5,
          wait: 5,
          msg: '오후 동아리 모임 있습니다~'
        });
      }
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
  height: 80px;
  position: sticky;
  bottom: 0;
}
</style>
