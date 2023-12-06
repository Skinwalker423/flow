import Link from "next/link";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <Medal className='h-6 w-6 mr-2' />
          No 1 task management
        </div>
        <h1 className='headerOne text-center text-neutral-800 mb-6'>
          Flow helps teams move
        </h1>
        <div className='headerOne bg-purple-gradient'>
          work forward.
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
        Collaborate, manage projects, and reach new
        productivity peaks. From high rises to the home
        office, the way your team works is unique -
        accomplish it all with Flow.
      </div>
      <Button className='mt-6' size={"lg"} asChild>
        <Link href={"/sign-up"}>Get Flow for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
