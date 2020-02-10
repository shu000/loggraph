import React, { FC } from 'react';
import DisplayRuleForm from '../containers/displayRuleForm';
import Util from '../util/util';

export interface DisplayRuleFormsProps {
  rulesCount?: number;
}

const DisplayRuleForms: FC<DisplayRuleFormsProps> = ({ rulesCount = 0 }) => (
  <div className="DisplayRuleForms">
    {Util.range(rulesCount).map(i => (
      <DisplayRuleForm index={i} />
    ))}
  </div>
);

export default DisplayRuleForms;
