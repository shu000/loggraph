import React, { FC, useEffect } from 'react';
import { Button, Select, MenuItem } from '@material-ui/core';

export interface CustomersFormProps {
  selectingCustomerName?: string;
  customerNames?: string[];
  onChangeCustomerName?: (customerName: string) => void;
  fetchCustomers?: () => void;
}

const CustomersForm: FC<CustomersFormProps> = ({
  selectingCustomerName = '',
  customerNames = [],
  onChangeCustomerName = () => {},
  fetchCustomers = () => {},
}) => {
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="CustomersForm">
      <form>
        <Select
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
        <Button variant="contained" color="primary">
          保存
        </Button>
      </form>
    </div>
  );
};

export default CustomersForm;
