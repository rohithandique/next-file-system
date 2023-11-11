import { getDirectoryData } from '@/utils/crudData';
import { getPathFromParams } from '@/utils/parseData';
import Link from 'next/link'

export default async function Home() {

  let path = getPathFromParams({slug: [""]});
  let data = getDirectoryData(path);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link className="rounded border border-blue-600 bg-blue-600 px-12 py-3 text-white hover:outline-none hover:ring" href="/">
          Go to Root Directory
        </Link>
      </div>
    </main>
  )
}
