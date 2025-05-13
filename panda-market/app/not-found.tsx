import { redirect } from 'next/navigation';

function NotFound() {
  redirect('/boards');
}

export default NotFound;
