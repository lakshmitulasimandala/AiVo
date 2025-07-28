'use client';

import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to AiVo!</h1>
      
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/sign-in")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>
        <button
          onClick={() => router.push("/sign-up")}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
