<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <img
          class="logo-mesolex"
          src="/imagenes-generales/logo-mesolex-menu-01.svg"
          alt="logo mesolex"
        />
      </nuxt-link>
      <nuxt-link id="menu-item-1" to="/" class="menu-item">{{
        $t('navBar.topicIndex')
      }}</nuxt-link>
      <nuxt-link id="menu-item-2" to="/" class="menu-item">{{
        $t('navBar.languagesIndex')
      }}</nuxt-link>
      <nuxt-link id="menu-item-3" to="/" class="menu-item">{{
        $t('navBar.about')
      }}</nuxt-link>
      <nuxt-link id="menu-item-4" to="/" class="menu-item">{{
        $t('navBar.help')
      }}</nuxt-link>
      <!-- Language selector -->
      <the-language-selector />
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
