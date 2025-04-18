import { useState } from "react";
import url from "../../../assets/react.svg";
const Home = () => {
  const [count, setCount] = useState(0);
  const createProduct = async () => {
    const res = await window.api.createProduct({
      title: "first product",
      price: 40,
    });
    console.log("created successfully", res);
  };
  createProduct();
  return (
    <div className='min-h-[90vh]  text-white flex flex-col'>
      {/* Header */}
      <header className='p-4 border-b border-gray-700 flex justify-between items-center'>
        <h1 className='text-xl font-bold text-cyan-400'>
          Electron + Vite + Tailwind
        </h1>
        <div className='text-sm text-gray-400'>v1.0.0</div>
      </header>

      {/* Main Content */}
      <main className='flex-1 flex flex-col items-center justify-center p-8 text-center'>
        <div className='mb-8'>
          <img
            src={url}
            className='w-24 h-24 mx-auto mb-4 animate-pulse'
            alt='Logo'
          />
          <h2 className='text-3xl font-bold mb-2'>Welcome to Electron</h2>
          <p className='text-gray-400 max-w-md'>
            A minimal starter template with React, Vite, Tailwind CSS and
            Electron
          </p>
        </div>

        <div className='space-y-4 p-4'>
          <button
            onClick={() => setCount(count + 1)}
            className='px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors p-4'
          >
            Count is: {count}
          </button>

          <div className='text-sm text-gray-500'>
            Edit <code className='bg-gray-800 px-1 rounded'>src/App.jsx</code>{" "}
            to get started
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='p-4 border-t border-gray-700 text-center text-gray-500 text-sm'>
        <p>Press Ctrl+Shift+I to open DevTools</p>
      </footer>
    </div>
  );
};

export default Home;
