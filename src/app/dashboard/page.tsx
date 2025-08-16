import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='w-[50%] flex gap-2'>
        <Input placeholder="Enter a topic" />
        <Button variant="outline">Autocast</Button>
      </div>
    </div>
  );
};

export default page;
