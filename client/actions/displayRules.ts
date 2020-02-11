import { DisplayRule } from '../constants/displayRules';

export const ON_CHANGE = 'ON_CHANGE';

export const onChange = (index: number, rule: DisplayRule) => ({
  type: ON_CHANGE as typeof ON_CHANGE,
  payload: {
    index,
    rule,
  },
});

export type DisplayRulesAction = ReturnType<typeof onChange>;
