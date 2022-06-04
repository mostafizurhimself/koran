import Button from '@/components/shared/Button';
import Link from 'next/link';
import { FiVolume2 } from 'react-icons/fi';
import { HiOutlineAnnotation } from 'react-icons/hi';

const AppRightBar = () => {
  return (
    <div className="hidden lg:block w-72 px-6 shrink-0">
      <div className="h-20 flex items-center">
        <Button className="px-4 py-2 ml-auto">Support</Button>
      </div>
      <div className="py-6 border-b">
        <h6 className="font-semibold text-primary-500">Last Read</h6>
        <Link href="/surah">
          <a className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Al Faatiha</h3>
              <p className="text-sm text-gray-500 dark:text-gray-100">Ayah No: 1</p>
            </div>
            <HiOutlineAnnotation size={70} className="text-gray-800 dark:text-white opacity-10 dark:opacity-25" />
          </a>
        </Link>
      </div>
      <div className="py-6">
        <h6 className="font-semibold text-primary-500">Last Listened</h6>
        <Link href="/surah">
          <a className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Al Mulk</h3>
              <p className="text-sm text-gray-500 dark:text-gray-100">Ayah No: 3</p>
            </div>
            <FiVolume2 size={70} className="text-gray-800 dark:text-white opacity-10 dark:opacity-25" />
          </a>
        </Link>
      </div>

      <div className="mt-6">
        <div className="p-4 bg-primary-500 text-white rounded-2xl">
          <p className="uppercase text-xs text-gray-200">Ayah of the day</p>
          <p className="py-4 border-b border-primary-100 text-sm text-gray-100">
            It is Allah who created the heavens without pillars that you [can] see; then He established Himself above
            the Throne ...
          </p>
          <p className="pt-4 text-xs">Read Now</p>
        </div>
      </div>
    </div>
  );
};

export default AppRightBar;
