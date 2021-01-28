<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-ts-template</h1>
      <h2 class="subtitle">with scss support</h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="counter">
        <button class="decrement" @click="decrement">-</button>
        <button class="increment" @click="increment">+</button>
        <div>{{ value }}</div>
        <button class="update" @click="update">Update</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useRootStore } from '~/utils/rootStore';
import RootStore from '~/store/modules';

export default Vue.extend({
  computed: {
    rootStore(): RootStore {
      return useRootStore(this.$store);
    },

    value(): number {
      return this.rootStore.counter.value;
    },
  },

  methods: {
    decrement(): void {
      this.rootStore.counter.decrement();
    },

    increment(): void {
      this.rootStore.counter.increment();
    },

    update(): void {
      this.rootStore.counter.incrementValueRandomlyAndAsync();
    },
  },
});
</script>

<style lang="scss">
@import './assets/vars';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: $color-one;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: $color-two;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .counter {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 90px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
    }

    button {
      margin: 1rem;
      width: 90px;
      height: 60px;
      border: 1px solid grey;
      border-radius: 25%;
      cursor: pointer;

      &.decrement {
        background: #e55528;
      }
      &.increment {
        background: #39dbb5;
      }
      &.update {
        background: #72a0f3;
      }
    }
  }
}
</style>
