<template>
  <div class="container">
    <LangInput />
    <div style="max-width: 90vw">
      <Logo />
      <h1 class="title">nuxt-ts-template</h1>
      <h2 class="subtitle">with scss, typed store and axios support</h2>
      <div class="links">
        <a
          href="https://typescript.nuxtjs.org"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          {{ $t('docs') }}
        </a>
        <a
          href="https://github.com/v-kyle"
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
      <div>
        {{ mathFact || $t('click_on') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useRootStore } from '~/utils/rootStore';
import RootStore from '~/store/modules';
import { getRandomMathFact } from '~/api/radom';
import LangInput from '~/components/LangInput.vue';

export default Vue.extend({
  components: { LangInput },

  data() {
    return {
      mathFact: '',
    };
  },

  computed: {
    rootStore(): RootStore {
      return useRootStore(this.$store);
    },

    value(): number {
      return this.rootStore.counter.value;
    },

    tt(): unknown {
      return this.$t('click_on');
    },
  },

  watch: {
    async value(v: number) {
      if (v >= 0) {
        await this.updateMathFact();
      } else {
        this.mathFact = '';
      }
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

    async updateMathFact(): Promise<void> {
      this.mathFact = await getRandomMathFact(this.value);
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

  @media (max-width: 720px) {
    .title {
      font-size: 48px;
    }
    .subtitle {
      font-size: 24px;
    }
  }

  @media (max-width: 500px) {
    .title {
      font-size: 24px;
    }
    .subtitle {
      font-size: 12px;
    }
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
      font-size: 1.15rem;
    }

    button {
      margin: 1rem;
      width: 90px;
      height: 60px;
      border: 1px solid grey;
      border-radius: 25%;
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: bolder;
      outline: none;
      opacity: 0.8;

      &.decrement {
        background: #e55528;
      }
      &.increment {
        background: #39dbb5;
      }
      &.update {
        background: #72a0f3;
      }

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 1;
        transform: translateY(1px);
      }
    }

    @media (max-width: 720px) {
      button {
        width: 60px;
        height: 30px;
        font-size: 0.7rem;
      }
    }
  }
}
</style>
