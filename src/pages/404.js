import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl font-bold font-raleway text-lavender">404 - Page Not Found</h1>
      <Link href="/" className="mt-4 text-lg font-spaceMono text-lavender underline">
        Back to Home
      </Link>
    </div>
  );
}
