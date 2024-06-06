import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items = [] }) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type ? item.type : 'unknown'}</td>
              <td>{item.amount ? item.amount : 0}</td>
              <td>{item.currency ? item.currency : 'unknown'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
