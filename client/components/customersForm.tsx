import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export interface CustomersFormProps {
  selectingCustomerName?: string;
  customerNames?: string[];
  onChangeCustomerName?: (customerName: string) => void;
  getCustomers?: () => void;
}

const useStyles = makeStyles({
  select: {
    paddingLeft: 12,
    color: 'inherit',
  },
});

const CustomersForm: FC<CustomersFormProps> = ({
  selectingCustomerName = '',
  customerNames = [],
  onChangeCustomerName = () => {},
  getCustomers: fetchCustomers = () => {},
}) => {
  useEffect(() => {
    fetchCustomers();
  }, []);

  const classes = useStyles();

  return (
    <form>
      <Select
        className={classes.select}
        value={selectingCustomerName}
        onChange={event => {
          onChangeCustomerName(event.target.value as string);
        }}
      >
        {customerNames.map((customerName, i) => {
          return (
            <MenuItem key={i.toString()} value={customerName}>
              {customerName}
            </MenuItem>
          );
        })}
      </Select>
    </form>
  );
};

export default CustomersForm;
