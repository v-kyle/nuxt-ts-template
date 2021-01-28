import { $axios } from '~/utils/axios';

type RandomMathFactResponse = string;

async function getRandomMathFact(n: number): Promise<RandomMathFactResponse> {
  return await $axios.$get<RandomMathFactResponse>(`/${n}`);
}

export { getRandomMathFact };
