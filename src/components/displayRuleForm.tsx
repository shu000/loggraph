import React, { FC } from 'react';
import DisplayRules from '../constants/displayRules';

export interface DisplayRuleFormProps {
  index?: number;
  rules?: DisplayRules;
}

const DisplayRuleForm: FC<DisplayRuleFormProps> = ({
  index = 0,
  rules = {
    customerName: '',
    rules: [],
  },
}) => {
  if (rules.rules.length === 0) return <div className="DisplayRuleForm" />;

  const rule = rules.rules[index];
  // backgroundColor という変数名を避ける（stylelintエラーの臨時対策）
  const background = rule.backgroundColor;

  return (
    <div className="DisplayRuleForm">
      <form>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__pattern"
            name="pattern"
            type="text"
            defaultValue={rule.pattern}
          />
        </div>
        <div className="DisplayRuleForm__group">
          <fieldset>
            <input
              className="DisplayRuleForm__matching"
              name="matching"
              type="radio"
            />
            <input
              className="DisplayRuleForm__matching"
              name="matching"
              type="radio"
            />
            <input
              className="DisplayRuleForm__matching"
              name="matching"
              type="radio"
            />
          </fieldset>
        </div>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__title"
            name="title"
            type="text"
            defaultValue={rule.title}
          />
        </div>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__text"
            name="text"
            type="text"
            defaultValue={rule.text}
          />
        </div>
        <div className="DisplayRuleForm__group">
          <input
            className="DisplayRuleForm__backgroundColor"
            name="backgroundColor"
            type="text"
            style={{ backgroundColor: background }}
          />
        </div>
      </form>
    </div>
  );
};

export default DisplayRuleForm;
