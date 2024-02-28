import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return(
    <main className="  min-h-screen h-screen flex-col items-center justify-between p-24 ml-auto"style={{ backgroundColor: 'black' }}>
      <div className=" text-lg text-gray-50 gap-5">
      <b className= "text-4xl">CPRG 306: Web Development 2 - Assignments</b>
      <p>
        <Link href="/week-2" className=" hover:text-green-500 hover:underline">
         Week 2 Assignment
        </Link>
        </p>
        <p>
        <Link href="/week-3" className=" hover:text-green-500 hover:underline">
        Week 3 Assignment
        </Link>
        </p>
        <p>
        <Link href="/week-4"className="  hover:text-green-500 hover:underline" >
        Week 4 Assignment
        </Link>
        </p>
        <p>
        <Link href="/week-2" className=" hover:text-green-500 hover:underline">
        Week 5 Assignment
        </Link>
         </p>
         <p>
        <Link href="/week-2" className=" hover:text-green-500 hover:underline">
        Week 6 Assignment
        </Link>
         </p>
         <p>
        <Link href="/week-2" className=" hover:text-green-500 hover:underline">
        Week 7 Assignment
        </Link>
         </p>
         <p>
        <Link href="/week-2" className=" hover:text-green-500 hover:underline">
        Week 8 Assignment
        </Link>
         </p>
         <p>
        <Link href="/week-2" className=" hover:text-green-500 hover:underline">
        Week 10 Assignment
        </Link>
      </p>
    </div>
    </main>
  );
}
