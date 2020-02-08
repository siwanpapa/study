<template lang="pug">
  v-dialog( v-model="visible" max-width="750" @click:outside="close" @keydown.esc="close" )
    v-card
      v-card-title 주소록
      v-card-text 
        v-row
          v-col(cols="3")
            v-treeview(:items="address" open-on-click dense activatable :active.sync="active" color="warning")
              template( v-slot:prepend="{ item }" )
                v-icon {{ item.id === 1 ? 'mdi-folder' : 'mdi-account-multiple' }}
              template( v-slot:append="{ item }" )
                div(class="ml-2") {{item.count}}
          v-divider(vertical)
          v-col(cols="4" class="d-flex")
            v-scroll-x-transition(mode="out-in" )
              v-sheet(v-if="!selected") 그룹을 선택해주세요
              v-card( v-else flat :key="selected.id")
                v-list(dense)
                  v-list-item-group( v-model="selection" multiple )
                    template(v-for="item in selected.items")
                      v-list-item(:key="item.id" :value="item" active-class="deep-purple--text text--accent-4" )
                        template(v-slot:default="{active, toggle}")
                          v-list-item-icon 
                            v-icon mdi-face
                          v-list-item-content
                            v-list-item-title {{`${item.name} ${item.tel}`}}
                          v-list-item-action
                            v-checkbox(:input-value="active" :true-value="item" color="deep-purple accent-4" @click="toggle")
          v-divider(vertical)
          v-col(cols="4")
            //- v-sheet(v-if="!selected") 그룹을 선택해주세요
            v-sheet {{ `${selection.length}명 선택` }}
            v-scroll-y-transition(mode="out-in" )
              v-chip-group(column)
                v-chip(v-for="(select, idx) in selection" :key="idx" close @click:close="remove(select)") {{select.name}}
      v-card-actions
        v-spacer
        v-btn( @click="close" text ) 닫기
        v-btn( @click="close" text ) 추가하기
          
                
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
      selection: [],
      open: [],
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
          name: '을지로 지점',
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
    remove(item) {
      this.selection.splice(this.selection.indexOf(item), 1);
      this.selection = [...this.selection];
    },
    close() {
      this.$emit('update:visible', false);
    }
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
