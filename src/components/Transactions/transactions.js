import { PropTypes } from 'prop-types';

import {
  Table,
  TableThead,
  TableTr,
  TableTh,
  TableBody,
  TableBodyTd,
  TableBodyTr,
} from 'components/Transactions/transactions.style';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>
      <TableBody>
        {items.map(item => (
          <TableBodyTr key={item.id}>
            <TableBodyTd>{item.type}</TableBodyTd>
            <TableBodyTd>{item.amount}</TableBodyTd>
            <TableBodyTd>{item.currency}</TableBodyTd>
          </TableBodyTr>
        ))}
      </TableBody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};
