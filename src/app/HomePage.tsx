'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAnalytics } from '@/hooks/useAnalytics'

type StackComponent = {
  name: string
  url: string
}

const stack: StackComponent[] = [
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
  { name: 'Splitbee', url: 'https://app.splitbee.io/public/prost.vercel.app' }
]

export default function HomePage() {
  useAnalytics()
  return (
    <>
      <div className="flex flex-col items-center sm:min-h-screen sm:bg-gray-50">
        <article className="flex flex-col bg-white p-16 pt-12 text-2xl text-gray-900 sm:mt-4 sm:rounded-lg sm:shadow-md md:mt-8 lg:mt-32">
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
            <ul className="list-inside list-disc">
              {stack.map(({ name, url }) => (
                <li key={name}>
                  <Link
                    className="hover:text-blue-600 hover:underline"
                    href={url}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <a
                    className="text-sm font-medium uppercase tracking-wider text-gray-500 hover:text-gray-400 hover:underline"
                    href="https://github.com/nawok/prost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="mr-2 inline-block h-6 w-6">
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
                    className="text-sm font-medium uppercase tracking-wider text-gray-500 hover:text-gray-400 hover:underline"
                    href="https://pavel.codes/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="mr-2 inline-block h-6 w-6">
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
