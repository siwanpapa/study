// 메시지 상태 상세보기
<template lang="pug">
  v-card(width="700" )
    v-subheader 외 00명에게 장문 전송중
    //- v-card-subtitle 외 00명에게
    v-card-text
      v-expansion-panels(focusable)
        v-expansion-panel
          v-expansion-panel-header Item
          v-expansion-panel-content 어쩌구 저쩌구....
        v-expansion-panel
          v-expansion-panel-header Item
          v-expansion-panel-content 어쩌구 저쩌구....
        
      
</template>

<script>
export default {};
</script>

<style scoped></style>
