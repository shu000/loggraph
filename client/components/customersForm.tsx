import React, { FC, useEffect } from 'react';

export interface CustomersFormProps {
  customerNames?: string[];
  onChange?: (customerName: string) => void;
  fetchCustomers?: () => void;
}

const CustomersForm: FC<CustomersFormProps> = ({
  customerNames = [],
  fetchCustomers = () => {},
}) => {
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="CustomersForm">
      <form>
        <select>
          {customerNames.map((customerName, i) => {
            return <option key={i.toString()}>{customerName}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default CustomersForm;
