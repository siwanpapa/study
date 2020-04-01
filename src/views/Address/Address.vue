<template lang="pug">
  v-app
    v-app-bar(app clipped-left color="orange" )
      v-toolbar-title 주소록 관리
      v-btn(text to="/message") 문자방
      v-btn(text to="/senderNumberManagement") 발신번호 관리
      v-btn(text to="/Usage") 이용량
    v-navigation-drawer(app clipped permanent)
      v-container
        v-row
          v-col(cols="12")
            v-text-field(solo hide-details label="그룹명 입력" append-icon="mdi-plus-circle")
      v-list(nav dense)
        v-list-item-group(v-model="addrsModel" color="primary")
          v-list-item(v-for="item in addrs" :key="item.key")
            v-list-item-content 
              v-list-item-title {{item.name}}
            v-list-item-action
              v-list-item-action-text {{item.count}}
    v-content
      v-container
        v-card
          v-card-title 강남 수강생(10명)
            v-spacer
            v-text-field(label="검색" hide-details append-icon="mdi-magnify")
          v-card-text
            v-row
              v-col(cols="6")
                v-text-field(label="이름" hide-details)
              v-col(cols="6")
                v-text-field(label="핸드폰번호" hide-details append-outer-icon="mdi-plus" @click:append-outer="test")

        v-card(class="mt-2")
          v-card-title
            v-btn 삭제
            v-btn 이동
            v-btn 복사
            v-btn 문자
            v-spacer
            v-text-field(append-icon="mdi-magnify" label="검색" single-line hide-details)
          v-data-table(v-model="selected" :headers="headers" :items="datas" show-select item-key="name" ) 

</template>

<script>
export default {
  data() {
    return {
      addrsModel: 0,
      selected: [],
      // 주소록 그룹 리스트
      addrs: [
        {
          key: 0,
          name: '강남 수강생',
          count: 10
        },
        {
          key: 1,
          name: '천안 동아리',
          count: 100
        }
      ],
      // 주소록 리스트
      headers: [
        { text: '이름', value: 'name' },
        { text: '전화번호', value: 'tel' },
        { text: '그룹', value: 'group' }
      ],
      datas: [
        {
          name: '브래드피트',
          tel: '010-1234-1234',
          group: '강남 수강생'
        },
        {
          name: '안젤리아 졸리',
          tel: '010-1234-0001',
          group: '천안 동아리'
        }
      ]
    };
  },
  methods: {
    test() {
      console.info('tag', 'test');
    }
  }
};
</script>

<style scoped></style>
