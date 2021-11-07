<template>
  <div class="">
    <the-nav-bar />
    <nuxt />
  </div>
</template>

<script>
export default {
  created() {
    if(process.client){
      const locale = localStorage.getItem('locale');
      if (locale) {
        this.$i18n.locale = locale;
      }
    }
  },
};
</script>

<style></style>
