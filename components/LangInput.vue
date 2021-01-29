<template>
  <div style="position: fixed; top: 10px; margin: auto">
    <label>
      <span>Select a language</span>
      <select v-model="$i18n.locale">
        <option
          v-for="lang in availableLocales"
          :key="lang.code"
          :value="lang.code"
        >
          {{ lang.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LangInput',

  computed: {
    availableLocales(): Array<{ name: string; code: string }> {
      return this.$i18n.locales as { name: string; code: string }[];
    },
  },
});
</script>
