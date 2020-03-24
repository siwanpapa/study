<template>
  <v-app>
    <v-app-bar app clipped-left color="teal">
      <router-link to="/">
        <v-toolbar-title>Vuetify</v-toolbar-title>
      </router-link>
      <v-subheader>Message</v-subheader>
      <v-btn text to="/senderNumberManagement">
        발신번호 관리
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <!-- 툴바 아래에 확장하여 사용 -->
      <template v-slot:extension>
        <v-btn text @click.stop="dialog.memList = true">
          <span class="title">동아리방 25명</span>
        </v-btn>
        <span class="ml-10"
          >오늘 총 발송 건수 00건 | 성공 00건 | 실패 00건</span
        >
        <v-btn color="indigo" text icon @click.stop="dialog.addr = true">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <MemberListDialog
        :visible.sync="dialog.memList"
        v-on:openAddr="dialog.addr = true"
      />
      <AddRecipient :visible.sync="dialog.addr" />
    </v-app-bar>

    <v-navigation-drawer app clipped permanent>
      <v-list class="sticky" color="blue" subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>문자방</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-plus-circle</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item class="background1" dense>
          <v-list-item-content>
            <v-text-field
              label="문자방, 수신자 검색"
              hide-details
              solo
              dense
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="`/message/${item.title}`"
            ref="room"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text
                v-text="item.time"
              ></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fill-height>
        <router-view />
      </v-container>
    </v-content>
    <!-- <v-footer app>
      <div>footer..</div>
    </v-footer> -->
  </v-app>
</template>

<script>
import MemberListDialog from './components/MemberListDialog.vue';
import AddRecipient from './components/AddRecipient.vue';
export default {
  components: {
    MemberListDialog,
    AddRecipient
  },
  data() {
    return {
      item: 0,
      items: [
        {
          title: '동아리방',
          icon: 'mdi-home-city',
          time: '2020.01.02 13:00:01'
        },
        {
          title: '강남 점주들',
          icon: 'mdi-account',
          time: '2020.01.02 13:01:01'
        },
        {
          title: '댄스 동아리',
          icon: 'mdi-account-group-outline',
          time: '2020.01.03 13:00:01'
        }
      ],
      dialog: {
        addr: false,
        memList: false
      }
    };
  },
  methods: {
    print() {
      console.info('>>> :::' + this.item);
    }
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.items.push({
        title: '동아리방' + i,
        icon: 'mdi-home-city',
        time: '2020.01.02 13:00:01'
      });
    }
  },
  mounted() {
    // 최초 진입 시 최근 문자방 로드
    this.$refs.room[0].$el.click();
    /* if (!this.$route.params.no) {
    } */
  }
};
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
