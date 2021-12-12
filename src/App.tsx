import { Link, Outlet } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>React Practice!</h1>
      <ul>
        <li>
          <Link to="/invoices">ReactRouter</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
