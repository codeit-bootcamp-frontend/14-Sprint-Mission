import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/boards');
  return <div>Home</div>;
}
