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
      <the-language-selector/>
      <!-- <div class="contenedor-selector-leng">
        <div class="menu-item-vertical-line"></div>
        <button
          :class="[
            isSpanishActive ? 'selector-lenguaje-activo' : 'selector-lenguaje',
          ]"
          @click="setLocale($i18n.locales[0].code)"
        >
          {{ $i18n.locales[0].name }}
        </button>
        <p class="divisor-selector-lenguaje">|</p>
        <button
          :class="[
            !isSpanishActive ? 'selector-lenguaje-activo' : 'selector-lenguaje',
          ]"
          @click="setLocale($i18n.locales[1].code)"
        >
          {{ $i18n.locales[1].name }}
        </button>
      </div> -->
    </nav>
  </header>
</template>

<script>
export default {
  // computed: {
  //   isSpanishActive() {
  //     return this.$i18n.locale === 'es';
  //   },
  // },
  // methods: {
  //   setLocale(locale) {
  //     this.$i18n.locale = locale;
  //     localStorage.setItem('locale', locale);
  //   },
  // },
};
</script>

<style></style>
