import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white h-max">
        <div className="items-center text-center py-5">
          <h1 className="font-bold text-6xl my-3">MyCourse</h1><br />
          <p className="text-2xl ">Study With our Comprehensive courses at one place</p>
          <Link href='/courses'><button className="bg-black text-white py-7 px-20 text-center my-7 rounded-full cursor-pointer">
            View courses
          </button></Link>
        </div>

        <div className="bg-black h-1"></div>

        <div className="items-center text-center py-5">
          <h1 className="font-bold text-6xl my-3">About Us</h1><br />
          <p className="text-2xl ">MyCourse provide courses from free to paid related<br /> to math, Web development....</p>
          <Link href='/about'><button className="bg-black text-white py-7 px-20 text-center my-7 rounded-full cursor-pointer">
            Learn More
          </button></Link>
        </div>

        <div className="bg-black h-1"></div>

        <div className="items-center text-center py-5">
          <h1 className="font-bold text-6xl my-3">Contact Us</h1><br />
          <p className="text-2xl ">We are happy to help you in any kind of situations.....</p>
          <Link href='/contact'><button className="bg-black text-white py-7 px-20 text-center my-7 rounded-full cursor-pointer">
            Contact us
          </button></Link>
        </div>
      </div>
    </div>
  );
}
