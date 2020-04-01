<!-- 이용량 페이지-->
<template lang="pug">
  v-app
    v-app-bar(app clipped-left color="orange" )
      v-toolbar-title 이용량
      v-btn(text to="/message") 문자방
      v-btn(text to="/address") 주소록 관리
      v-btn(text to="/senderNumberManagement") 발신번호 관리
    v-content
      v-container
        v-card(width="600px")
          v-card-text
            | 보유금액 : 00 원 <br />
            | 오늘 이용량 30건  <br />
            | 단문 10건(00원) , 장문 10건(00원), 멀티 10건(00원) <br />
            | 총 이용금액 : 00원
        v-card(width="600px" class="mt-2")
          v-card-title 주간 발송량 ( 9월 4째주 : 0월 00일 ~ 0월 00 일 )
          v-card-text
            canvas(ref="myChart")
            br
            | 주간 이용량 30건 <br />
            | 단문 10건(00원) , 장문 10건(00원), 멀티 10건(00원) <br />
            | 총 이용금액 : 00원  | 상세보기
        v-card(width="600px" class="mt-2")
          v-card-title 월간 발송량 ( 9월 : 0월 00일 ~ 0월 00 일 )
          v-card-text
            canvas(ref="monthly")
            br
            | 월간 이용량 30건 <br />
            | 단문 10건(00원) , 장문 10건(00원), 멀티 10건(00원) <br />
            | 총 이용금액 : 00원  | 상세보기
        v-card(width="600px" class="mt-2")
          v-card-title 3개월 평균
          v-card-text
            canvas(ref="threeMonth")
            br
            | 이용량 30건 <br />
            | 단문 10건(00원) , 장문 10건(00원), 멀티 10건(00원) <br />
            | 총 이용금액 : 00원  | 상세보기
        v-card(width="600px" class="mt-2")
          v-card-title 연간 발송량 ( 2017년 1월 ~ 9월 )
          v-card-text
            canvas(ref="yearly")
            br
            | 연간 이용량 30건 <br />
            | 단문 10건(00원) , 장문 10건(00원), 멀티 10건(00원) <br />
            | 총 이용금액 : 00원  | 상세보기
        v-card(width="600px" class="mt-2")
          v-card-title 이용량 상세
            v-spacer
            v-sheet(width="400" class="d-flex")
              v-text-field(dense outlined hide-details)
              | -
              v-text-field(dense outlined hide-details)
              v-btn(color="primary" text) 검색 <br />
            v-radio-group(v-model="usage.selectOfDate" row)
              v-radio(label="일별")
              v-radio(label="월별")
              v-radio(label="년별")
          v-simple-table
            template(v-slot:default)
              thead
                tr
                  th(class="text-left" v-for="header in usage.headers" :key="header.value") {{header.text}}
              tbody
                tr(v-for="(data, idx) in usage.datas" :key="idx")
                  td(v-if="idx === 0" rowspan="3") {{data.date}}
                  td {{data.type}}
                  td {{data.total}}
                  td {{data.succ}}
                  td {{data.fail}}
                  td {{data.wait}}
</template>

<script>
import Chart from 'chart.js';
export default {
  name: 'Usage',
  data() {
    return {
      // 이용량
      usage: {
        selectOfDate: 0,
        headers: [
          { text: '날짜', value: 'date' },
          { text: '유형', value: 'type' },
          { text: '총건수', value: 'total;' },
          { text: '성공', value: 'succ' },
          { text: '실패', value: 'fail' },
          { text: '결과 미수신', value: 'wait' }
        ],
        datas: [
          {
            date: '2020-03-29',
            type: '단문',
            total: 50,
            succ: 20,
            fail: 15,
            wait: 15
          },
          {
            date: '2020-03-29',
            type: '장문',
            total: 50,
            succ: 20,
            fail: 15,
            wait: 15
          },
          {
            date: '2020-03-29',
            type: '멀티',
            total: 50,
            succ: 20,
            fail: 15,
            wait: 15
          }
        ]
      }
    };
  },
  mounted() {
    const ctx = this.$refs.myChart;
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
    // 주간 이용량
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['월', '화', '수', '목', '금', '토'],
        datasets: [
          {
            label: '단문',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#f87979',
            borderWidth: 1
          },
          {
            label: '장문',
            data: [5, 2, 13, 15, 12, 13],
            backgroundColor: '#f87909',
            borderWidth: 1
          },
          {
            label: '멀티',
            data: [3, 7, 7, 10, 6, 10],
            backgroundColor: '#a87200',
            borderWidth: 1
          }
        ]
      },
      options
    });
    // 월간 발송량
    new Chart(this.$refs.monthly, {
      type: 'bar',
      data: {
        labels: ['1주', '2주', '3주', '4주'],
        datasets: [
          {
            label: '단문',
            data: [12, 19, 3, 5],
            backgroundColor: '#f87979',
            borderWidth: 1
          },
          {
            label: '장문',
            data: [5, 2, 13, 15],
            backgroundColor: '#f87909',
            borderWidth: 1
          },
          {
            label: '멀티',
            data: [3, 7, 7, 10],
            backgroundColor: '#a87200',
            borderWidth: 1
          }
        ]
      },
      options
    });
    // 3개월 평균
    new Chart(this.$refs.threeMonth, {
      type: 'bar',
      data: {
        // labels: ['1주', '2주', '3주', '4주'],
        datasets: [
          {
            label: '단문',
            data: [12],
            backgroundColor: '#f87979',
            borderWidth: 1
          },
          {
            label: '장문',
            data: [5],
            backgroundColor: '#f87909',
            borderWidth: 1
          },
          {
            label: '멀티',
            data: [3],
            backgroundColor: '#a87200',
            borderWidth: 1
          }
        ]
      },
      options
    });
    // 연간 이용량
    new Chart(this.$refs.yearly, {
      type: 'line',
      data: {
        labels: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월'
        ],
        datasets: [
          {
            label: '단문',
            data: [12, 19, 3, 5, 12, 19, 3, 5, 12, 19, 3, 5],
            borderColor: 'orange',
            borderWidth: 1,
            fill: false
          },
          {
            label: '장문',
            data: [5, 2, 13, 15, 5, 2, 13, 15, 5, 2, 13, 15],
            borderColor: 'green',
            borderWidth: 1,
            fill: false
          },
          {
            label: '멀티',
            data: [3, 7, 7, 10, 3, 7, 7, 10, 3, 7, 7, 10],
            borderColor: 'blue',
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options
    });
  }
};
</script>

<style scoped></style>
