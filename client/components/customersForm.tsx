import React, { FC, useEffect } from 'react';

export interface CustomersFormProps {
  customers?: string[];
  onChange?: (customerName: string) => void;
  fetchCustomers?: () => void;
}

const CustomersForm: FC<CustomersFormProps> = ({
  customers = [],
  onChange = () => {},
  fetchCustomers = () => {},
}) => {
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="CustomersForm">
      <form>
        <select>
          {customers.map(customerName => {
            return <option>{customerName}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default CustomersForm;
