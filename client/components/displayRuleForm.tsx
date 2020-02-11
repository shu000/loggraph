import React, { FC } from 'react';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import Util from '../util/util';

export interface DisplayRuleFormProps {
  index?: number;
  rules?: DisplayRules;
  onChange?: (index: number, rule: DisplayRule) => void;
}

const DisplayRuleForm: FC<DisplayRuleFormProps> = ({
  index = 0,
  rules = {
    customerName: '',
    rules: [],
  },
  onChange = () => {},
}) => {
  if (rules.rules.length === 0 || index >= rules.rules.length)
    return <div className="DisplayRuleForm" />;

  const rule = rules.rules[index];
  // TODO: off stylelint on .tsx
  // 以下、臨時対策でcammelCaseを避けてる
  const background = rule.backgroundColor;
  const seeable = Util.seeableColor;

  return (
    <div className="DisplayRuleForm">
      <form>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__pattern"
            name="pattern"
            type="text"
            defaultValue={rule.pattern}
            onChange={event => {
              onChange(index, { ...rule, pattern: event.target.value });
            }}
          />
        </div>
        <div className="DisplayRuleForm__group">
          <fieldset>
            <input
              className="DisplayRuleForm__matching"
              name="matching"
              type="radio"
              defaultChecked={rule.matching === 'match'}
              onChange={() => {
                onChange(index, { ...rule, matching: 'match' });
              }}
            />
            <input
              className="DisplayRuleForm__matching"
              name="matching"
              type="radio"
              defaultChecked={rule.matching === 'startsWith'}
              onChange={() => {
                onChange(index, { ...rule, matching: 'startsWith' });
              }}
            />
            <input
              className="DisplayRuleForm__matching"
              name="matching"
              type="radio"
              defaultChecked={rule.matching === 'includes'}
              onChange={() => {
                onChange(index, { ...rule, matching: 'includes' });
              }}
            />
          </fieldset>
        </div>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__title"
            name="title"
            type="text"
            defaultValue={rule.title}
            onChange={event => {
              onChange(index, { ...rule, title: event.target.value });
            }}
          />
        </div>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__text"
            name="text"
            type="text"
            defaultValue={rule.text}
            onChange={event => {
              onChange(index, { ...rule, text: event.target.value });
            }}
          />
        </div>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__backgroundColor"
            name="backgroundColor"
            type="text"
            defaultValue={background}
            style={{
              backgroundColor: background,
              color: seeable(background),
            }}
            onChange={event => {
              onChange(index, { ...rule, backgroundColor: event.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default DisplayRuleForm;
