import { Game } from 'packages/api/util-interfaces/src';
import { Header } from 'packages/store/ui-shared/src';
import { useEffect, useState } from 'react';

export function Index() {
  const [data, setData] = useState<Game|null>(null);

  useEffect(() => {
    fetch('/api/games').then(res => res.json()).then(setData);
  }, []);

  return (
    <>
      <Header />
      <span className='min-h-screen'>{data ? JSON.stringify(data) : 'Loading...'}</span>
    </>
  );
}

export default Index;
