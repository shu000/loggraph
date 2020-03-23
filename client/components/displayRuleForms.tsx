import React, { FC, useEffect } from 'react';
import DisplayRuleForm from '../containers/displayRuleForm';
import DisplayRuleFormHeader from './displayRuleFormHeader';
import Util from '../util/util';

export interface DisplayRuleFormsProps {
  selectingCustomerName?: string;
  rulesCount?: number;
  getRules?: (customerName: string) => void;
}

const DisplayRuleForms: FC<DisplayRuleFormsProps> = ({
  selectingCustomerName = '',
  rulesCount = 0,
  getRules: fetchRules = () => {},
}) => {
  useEffect(() => {
    if (selectingCustomerName !== '') fetchRules(selectingCustomerName);
  }, [selectingCustomerName]);

  return (
    <div className="DisplayRuleForms">
      <DisplayRuleFormHeader />
      {Util.range(rulesCount).map(i => (
        <DisplayRuleForm key={i.toString()} index={i} />
      ))}
    </div>
  );
};

export default DisplayRuleForms;
