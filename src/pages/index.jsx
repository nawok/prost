import Head from 'next/head'

export default () => (
  <>
    <Head>
      <title>Prost!</title>
      <meta name="description" content="Next.js starter with Tailwind CSS" />
    </Head>

    <div className="flex flex-col items-center sm:min-h-screen sm:bg-blue-200">
      <article className="flex flex-col p-16 pt-8 text-2xl text-gray-900 bg-white sm:rounded-lg sm:shadow sm:mt-4 md:mt-8 lg:mt-32">
        <h1 className="text-6xl font-bold text-gray-800">🍻&thinsp;Prost!</h1>
        <div className="mx-auto mt-8">
          <p className="font-semibold">This starter uses:</p>
          <ul className="list-disc list-inside">
            <li><a className="hover:underline" href="https://nextjs.org/">Next.js</a></li>
            <li><a className="hover:underline" href="https://tailwindcss.com/">Tailwind CSS</a></li>
          </ul>
        </div>
      </article>
    </div>
  </>
)
