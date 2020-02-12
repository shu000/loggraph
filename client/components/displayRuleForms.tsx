import React, { FC, useEffect } from 'react';
import DisplayRuleForm from '../containers/displayRuleForm';
import Util from '../util/util';

export interface DisplayRuleFormsProps {
  rulesCount?: number;
  fetchRules?: (customerName: string) => void;
}

const DisplayRuleForms: FC<DisplayRuleFormsProps> = ({
  rulesCount = 0,
  fetchRules = () => {},
}) => {
  useEffect(() => {
    fetchRules('もりぞう様');
  }, []);

  return (
    <div className="DisplayRuleForms">
      {Util.range(rulesCount).map(i => (
        // TODO: range(i + 1) new line
        <DisplayRuleForm key={i.toString()} index={i} />
      ))}
    </div>
  );
};

export default DisplayRuleForms;
