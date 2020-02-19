import React, { FC } from 'react';
import { FormGroup, TextField, Radio } from '@material-ui/core';
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
      <FormGroup row>
        <TextField
          className="DisplayRuleForm__pattern"
          name="pattern"
          type="text"
          value={rule.pattern}
          onChange={event => {
            onChange(index, { ...rule, pattern: event.target.value });
          }}
        />
        <Radio
          className="DisplayRuleForm__matching"
          name="matching"
          checked={rule.matching === 'match'}
          onChange={() => {
            onChange(index, { ...rule, matching: 'match' });
          }}
        />
        <Radio
          className="DisplayRuleForm__matching"
          name="matching"
          checked={rule.matching === 'startsWith'}
          onChange={() => {
            onChange(index, { ...rule, matching: 'startsWith' });
          }}
        />
        <Radio
          className="DisplayRuleForm__matching"
          name="matching"
          checked={rule.matching === 'includes'}
          onChange={() => {
            onChange(index, { ...rule, matching: 'includes' });
          }}
        />
        <TextField
          className="DisplayRuleForm__title"
          name="title"
          type="text"
          value={rule.title}
          onChange={event => {
            onChange(index, { ...rule, title: event.target.value });
          }}
        />
        <TextField
          className="DisplayRuleForm__text"
          name="text"
          type="text"
          value={rule.text}
          onChange={event => {
            onChange(index, { ...rule, text: event.target.value });
          }}
        />
        <TextField
          className="DisplayRuleForm__backgroundColor"
          name="backgroundColor"
          type="text"
          value={background}
          style={{
            backgroundColor: background,
            color: seeable(background) // TODO: need custom style
          }}
          onChange={event => {
            onChange(index, { ...rule, backgroundColor: event.target.value });
          }}
        />
      </FormGroup>
    </div>
  );
};

export default DisplayRuleForm;
