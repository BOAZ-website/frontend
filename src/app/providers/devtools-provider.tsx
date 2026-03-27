import { lazy, useEffect, useState } from 'react';

const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-query-devtools').then((mod) => ({
        default: mod.ReactQueryDevtools,
      }))
    )
  : lazy(() =>
      import('@tanstack/react-query-devtools/production').then((mod) => ({
        default: mod.ReactQueryDevtools,
      }))
    );

export const DevtoolsProvider = () => {
  const [isOpen, setIsOpen] = useState(import.meta.env.DEV);

  useEffect(() => {
    if (import.meta.env.DEV) {
      return;
    }

    window.toggleDevtools = () => setIsOpen((prev) => !prev);

    return () => {
      delete window.toggleDevtools;
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return <ReactQueryDevtools initialIsOpen={false} />;
};
