import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Index() {
  return (
    <>
      <Head>
        <title>Prost!</title>
        <meta
          name="description"
          content="Next.js starter with TypeScript, Tailwind CSS, Framer Motion, and Splitbee"
        />
      </Head>

      <div className="flex flex-col items-center sm:min-h-screen sm:bg-gray-50">
        <article className="flex flex-col p-16 pt-12 text-2xl text-gray-900 bg-white sm:rounded-lg sm:shadow-md sm:mt-4 md:mt-8 lg:mt-32">
          <motion.h1
            className="text-6xl font-bold text-gray-800"
            initial={{ rotate: -10, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 12,
              delay: 0.2
            }}>
            🍻&thinsp;Prost!
          </motion.h1>
          <div className="mx-auto mt-8 leading-relaxed ">
            <p className="font-semibold">This starter uses:</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  className="hover:underline hover:text-blue-600"
                  href="https://nextjs.org/">
                  Next.js
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-blue-600"
                  href="https://www.typescriptlang.org">
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-blue-600"
                  href="https://tailwindcss.com/">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-blue-600"
                  href="https://www.framer.com/motion/">
                  Framer Motion
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-blue-600"
                  href="https://app.splitbee.io/public/prost.vercel.app">
                  Splitbee
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <a
                    className="text-sm font-medium tracking-wider text-gray-500 uppercase hover:underline hover:text-gray-400"
                    href="https://github.com/nawok/prost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="inline-block w-6 h-6 mr-2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Source code
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="text-sm font-medium tracking-wider text-gray-500 uppercase hover:underline hover:text-gray-400"
                    href="https://pavel.codes/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="inline-block w-6 h-6 mr-2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Pavel Fomchenkov
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
