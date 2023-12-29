import Image from 'next/image'
import Link from "next/link";
import '../app/global.css'
import {getCurrentWeather} from "@/app/utils/getCurruentWeather";

export default async function Home() {
    const res = await getCurrentWeather('seoul');
    console.log(res.location.name)
  return (
   <>
   <h1>날씨 앱</h1>
       <ul className={"list-decimal"}>
           <li>
               <Link href="seoul">서울</Link>
           </li>
           <li>
               <Link href="newyork">뉴욕</Link>
           </li>
           <li>
               <Link href="london">런던</Link>
           </li>
       </ul>
   </>
  )
}
