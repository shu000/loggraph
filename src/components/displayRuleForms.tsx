import React, { FC } from 'react';

export interface DisplayRuleFormsProps {
  rulesCount?: number;
}

const DisplayRuleForm: FC<DisplayRuleFormsProps> = ({ rulesCount = 0 }) => (
  <div className="DisplayRuleForms" />
);

export default DisplayRuleForm;
