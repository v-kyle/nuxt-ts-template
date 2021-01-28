import { Module } from 'vuex-simple';
import Counter from '~/store/modules/counter';

export default class RootStore {
  @Module()
  public counter = new Counter();
}
