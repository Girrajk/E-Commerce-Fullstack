import React from 'react'

const Home = () => {
  return (
    <div id='home' className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Product</h1>
      <p className="text-lg text-gray-700 mb-6">Discover the best features and benefits of our amazing product.</p>
      
      <div id='d1' className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-2">Amazing Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>High Quality</li>
          <li>Affordable Price</li>
          <li>Easy to Use</li>
        </ul>
      </div>
      
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>

  )
}
export default Home;
