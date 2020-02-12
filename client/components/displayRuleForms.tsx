import React, { FC, useEffect } from 'react';
import DisplayRuleForm from '../containers/displayRuleForm';
import Util from '../util/util';

export interface DisplayRuleFormsProps {
  selectingCustomerName?: string;
  rulesCount?: number;
  fetchRules?: (customerName: string) => void;
}

const DisplayRuleForms: FC<DisplayRuleFormsProps> = ({
  selectingCustomerName = '',
  rulesCount = 0,
  fetchRules = () => {},
}) => {
  useEffect(() => {
    if (selectingCustomerName !== '') fetchRules(selectingCustomerName);
  }, [selectingCustomerName]);

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
