import { createPool } from 'mysql2';

const pool = createPool('mysql://test_user:test@localhost:3306/books');

export default pool;
