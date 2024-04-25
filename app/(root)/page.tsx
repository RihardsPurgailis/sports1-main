import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen flex justify-center items-start pt-16 lg:pt-24">
      {/* <Image
        src="/trans-bg.jpeg"
        alt="bg image"
        fill
        style={{ objectFit: 'cover' }}
      /> */}
      <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
        <section className="text-center">
          <div>
            <p className="font-bold text-gray-800 mt-2 text-5xl md:text-6xl lg:text-7xl text-shadow-md">We connect passion with passion</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:space-x-4 md:space-x-6 lg:space-x-8">
            <Link
              href="/players"
              className="inline-block px-6 py-3 bg-white text-black font-bold text-lg rounded-md border border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-150 ease-in-out mb-4 sm:mb-0"
            >
               Player Market
            </Link>
            <Link
              href="/teams"
              className="inline-block px-6 py-3 bg-white text-black font-bold text-lg rounded-md border border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-150 ease-in-out mb-4 sm:mb-0"
            >
               Team Market
            </Link>
            <Link
              href="/camps"
              className="inline-block px-6 py-3 bg-white text-black font-bold text-lg rounded-md border border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-150 ease-in-out mb-4 sm:mb-0"
            >
              Camps/Tryouts
            </Link>
            <Link
              href="/post/create"
              className="inline-block px-6 py-3 bg-white text-black font-bold text-lg rounded-md border border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-150 ease-in-out mb-4 sm:mb-0"
            >
              Create Post
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
