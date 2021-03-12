import React from 'react';
import './tableCell.css';

const TableCell = ({ className, time }) => {
  return <td className={`${className}${time}`}></td>;
};

export { TableCell };
