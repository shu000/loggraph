import React, { FC, useEffect } from 'react';

export interface CustomersFormProps {
  selectingCustomerName?: string;
  customerNames?: string[];
  onChange?: (customerName: string) => void;
  fetchCustomers?: () => void;
}

const CustomersForm: FC<CustomersFormProps> = ({
  selectingCustomerName = '',
  customerNames = [],
  onChange = () => {},
  fetchCustomers = () => {},
}) => {
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="CustomersForm">
      <p>{`selecting: ${selectingCustomerName}`}</p>
      <form>
        <select defaultValue={selectingCustomerName}>
          {customerNames.map((customerName, i) => {
            return <option key={i.toString()}>{customerName}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default CustomersForm;
