import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[70vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="px-28 text-center">
             We believe in simplicity. Unlike most URL shorteners that track users or require sign-ups, our service focuses only on what matters—fast, secure, and private link shortening with zero hassle.
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='bg-rose-500 cursor-pointer rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github/"><button className='bg-rose-500 cursor-pointer rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
