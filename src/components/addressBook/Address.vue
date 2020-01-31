<template lang="pug">
  v-card(width="1000" min-width="800")
    v-card-title 주소록
    v-card-text 
      v-row
        v-col(cols="3")
          v-treeview(:items="address" open-on-click dense activatable :active.sync="active" :open.sync="open")
            template( v-slot:prepend="{ item, active}" )
              v-icon {{item.id === 1 ? 'mdi-folder' : 'mdi-account-multiple'}}
            template( v-slot:append="{ item }" )
              div(class="ml-2") {{item.count}}
        v-divider(vertical)
        v-col(cols="4" class="d-flex")
          v-scroll-x-transition(mode="out-in" )
            v-sheet(v-if="!selected") 그룹을 선택해주세요
            v-card( v-else flat :key="selected.id")
              v-list(dense)
                v-list-item-group( v-model="addrModel" multiple )
                  v-list-item(v-for="item in selected.items" :key="item.id")
                    v-list-item-icon 
                      v-icon mdi-face
                    v-list-item-content
                      v-list-item-title {{item.name}} {{item.tel}}
        v-divider(vertical)
        v-col(cols="4")
          v-sheet
            v-row
              v-col(cols="2")
                v-btn(fab x-small class="mb-3")
                  v-icon mdi-arrow-right
                v-btn(fab x-small)
                  v-icon mdi-arrow-left
              v-col(cols="10")
                v-scroll-y-transition(mode="out-in" )
                  div hello

                  
                    

                           
</template>

<script>
export default {
  data() {
    return {
      open: [],
      addrModel: [],
      item: [],
      active: [],
      address: [
        {
          id: 1,
          name: '전체',
          count: '',
          items: [
            { name: '홍길동1', tel: '01011112222' },
            { name: '홍길동2', tel: '01011112223' }
          ]
        },
        {
          id: 2,
          name: '강북 지점',
          count: 20,
          items: [
            { name: '아무개1', tel: '01011112222' },
            { name: '아무개2', tel: '01011112223' },
            { name: '아무개3', tel: '01011112224' }
          ]
        },
        {
          id: 3,
          name: '명동 지점',
          count: 25,
          items: [
            { name: '김씨1', tel: '01011112222' },
            { name: '김씨2', tel: '01011112223' },
            { name: '김씨3', tel: '01011112224' },
            { name: '김씨4', tel: '01011112225' }
          ]
        },
        {
          id: 4,
          name: '명동 지점',
          count: 25,
          items: [
            { name: '이씨1', tel: '01011112222' },
            { name: '이씨2', tel: '01011112223' },
            { name: '이씨3', tel: '01011112224' },
            { name: '이씨4', tel: '01011112225' }
          ]
        }
      ]
    };
  },
  methods: {
    async getData() {
      /* fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => console.info('## res', JSON.stringify(json)))
        .catch(err => console.warn(err)); */
      console.info('## call methods!!');
    },
    reset() {
      this.addrModel = [];
    }
  },
  watch: {
    selected: 'reset'
  },
  computed: {
    selected() {
      if (!this.active.length) return undefined;
      const id = this.active[0];
      return this.address.find(user => user.id === id);
    }
  },
  created() {
    // this.getData();
  }
};
</script>

<style scoped></style>
