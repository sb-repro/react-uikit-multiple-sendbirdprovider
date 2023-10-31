import { Link } from 'react-router-dom';

export default function RoutePage() {
  return (
    <>
      <br />
      <Link to={'/team'}>Team Chat</Link>
      <br />
      <Link to={'/private'}>Private Chat</Link>
    </>
  );
}
