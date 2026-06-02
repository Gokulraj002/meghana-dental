'use client';

import { useEffect } from 'react';

export default function BootstrapProvider({ children }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  return <>{children}</>;
}
