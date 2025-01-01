```javascript
const database = firebase.database();

database.ref('/users/' + userId + '/balance').transaction((currentBalance) => {
  if (currentBalance === null) {
    return amount; // Initialize if balance doesn't exist
  }
  return currentBalance + amount;
}).then((transactionResult) => {
  if (transactionResult.committed) {
    console.log('Transaction committed successfully!');
  } else {
    console.error('Transaction failed:', transactionResult.error);
  }
}).catch((error) => {
  console.error('Transaction failed:', error);
});
```

This revised code uses a transaction to atomically update the balance. It fetches the current balance, adds the `amount`, and then updates the database. This guarantees that concurrent updates will not lead to data inconsistencies.