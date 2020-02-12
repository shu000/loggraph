import React, { FC, useEffect } from 'react';

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
      <p>{`selecting: ${selectingCustomerName}`}</p>
      <form>
        <select
          value={selectingCustomerName}
          onChange={event => {
            onChangeCustomerName(event.target.value);
          }}
        >
          {customerNames.map((customerName, i) => {
            return <option key={i.toString()}>{customerName}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default CustomersForm;
