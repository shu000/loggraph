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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    marginBottom: '10px',
    width: '25px',
    height: '25px',
    borderRadius: '1px',
    backgroundColor: props.backgroundColor,
    color: Util.seeableColor(props.backgroundColor),
  }),
});

const matchedRule = (pageURL: string, rules: DisplayRule[]): DisplayRule => {
  if (pageURL === 'arrow')
    return {
      pattern: 'arrow',
      matching: 'match',
      title: '',
      text: '→',
      backgroundColor: '#ffffff',
    };

  const matches = rules.filter(rule => {
    switch (rule.matching) {
      case 'match':
        return pageURL === rule.pattern;
      case 'startsWith':
        return pageURL.startsWith(rule.pattern);
      default:
        return pageURL.includes(rule.pattern);
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
  const matched = matchedRule(activity.pageURL, rules);
  const classes = useStyles(matched);

  return (
    <div className={classes.activity}>
      <span>{matched.text}</span>
    </div>
  );
};

export default Activity;
