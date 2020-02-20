import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ParsedActivity } from '../constants/parsedData';
import { DisplayRule } from '../constants/displayRules';
import Util from '../util/util';

export interface ActivityProps {
  activity?: ParsedActivity;
  rules?: DisplayRule[];
}

const useStyles = makeStyles({
  activity: (props: DisplayRule) => ({
    backgroundColor: props.backgroundColor,
    color: Util.seeableColor(props.backgroundColor),
  }),
});

const matchedRule = (
  activity: ParsedActivity,
  rules: DisplayRule[]
): DisplayRule => {
  const matches = rules.filter(rule => {
    switch (rule.matching) {
      case 'match':
        return activity.pageURL === rule.pattern;
      case 'startsWith':
        return activity.pageURL.startsWith(rule.pattern);
      default:
        return activity.pageURL.includes(rule.pattern);
    }
  });

  // 末尾寄りのルールを優先
  if (matches.length > 0) return matches[matches.length - 1];

  // 一致するパターンがない場合
  return {
    pattern: '',
    matching: 'match',
    title: 'マッチルールなし',
    text: '無',
    backgroundColor: '#cccccc',
  };
};

const Activity: FC<ActivityProps> = ({
  activity = {
    time: '',
    pageTitle: '',
    pageURL: '',
  },
  rules = [],
}) => {
  const matched = matchedRule(activity, rules);
  const classes = useStyles(matched);

  return (
    <div className={classes.activity}>
      <span>{matched.text}</span>
      <span>{activity.pageURL}</span>
    </div>
  );
};

export default Activity;
