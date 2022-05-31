import React from 'react';
import Button from '@/components/shared/Button';

const AppRightBar = () => {
  return (
    <div className="w-56 px-6 shrink-0">
      <div className="h-20 flex items-center">
        <Button className="px-4 py-2 ml-auto">Donate</Button>
      </div>
    </div>
  );
};

export default AppRightBar;
