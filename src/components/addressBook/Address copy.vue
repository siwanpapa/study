<template lang="pug">
  v-card
    v-card-title 주소록
    v-row
      v-col
        v-treeview(:items="address" 
          open-on-click dense activatable :load-children="getData" :active.sync="active" :open.sync="open")
          template( v-slot:prepend="{ item, active}" )
            v-icon(v-if="!item.children" ) mdi-folder
          template( v-slot:append="{ item }" )
            div(class="ml-2") {{item.count}}
      v-divider(vertical)
      v-col
        v-scroll-y-transition(mode="out-in" )
          div(v-if="!selected") 그룹을 선택해주세요
          v-card( v-else flat :key="selected.id")
            v-list(dense)
              v-list-item-group( v-model="addrModel" multiple )
                v-list-item(v-for="item in selected.items" :key="item.id")
                  v-list-item-icon 
                   v-icon mdi-face
                  v-list-item-content
                    v-list-item-title {{item.name}} {{item.tel}}
            
            div {{addrModel}}
                    

                           
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
          id: 0,
          name: '전체',
          children: [
            {
              id: 1,
              name: '강남 지점',
              count: 10,
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
            }
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
    }
  },
  computed: {
    selected() {
      if (!this.active.length) return undefined;
      const id = this.active[0];
      return this.address[0].children.find(user => user.id === id);
    }
  },
  created() {
    // this.getData();
  }
};
</script>

<style scoped></style>
