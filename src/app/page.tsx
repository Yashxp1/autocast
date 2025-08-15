import { DarkmodeToggle } from '@/components/darkmode/DarkmodeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <DarkmodeToggle />
      <Link href="/auth/google">
        <Button>Auth - Google</Button>
      </Link>
    </div>
  );
};

export default page;
