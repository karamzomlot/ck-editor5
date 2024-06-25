'use client';

import dynamic from 'next/dynamic';

const CustomEditor = dynamic(
  () => {
    return import('../components/custom-editor');
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <CustomEditor initialData='<h1>Hello from CKEditor in Next.js!</h1>' />
    </main>
  );
}
