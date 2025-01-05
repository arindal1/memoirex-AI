import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl font-bold text-beige font-raleway text-lavender">404 - Page Not Found</h1>
      <Link href="/" className="mt-4 text-lg font-spaceMono text-light underline">
        Back to Home
      </Link>
    </div>
  );
}
