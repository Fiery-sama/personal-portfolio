import Link from "next/link";

export const Footer = () => {
    return (
<footer className="p-4 md:p-8 lg:p-10 border-t">
  <div className="mx-auto max-w-screen-xl text-center">
      <Link href="#" className="flex justify-center items-center text-2xl font-semibold p-4">
          Suhail Khan 
      </Link>
      <ul className="flex flex-wrap justify-center items-center mb-6">
          <li>
              <Link href="#about" className="mr-4 hover:underline md:mr-6 ">About</Link>
          </li>
          <li>
              <Link href="#projects" className="mr-4 hover:underline md:mr-6">Projects</Link>
          </li>
          <li>
              <Link href="#contact" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center">© 2025 <Link href="#" className="hover:underline">Suhail Khan™</Link>. All Rights Reserved.</span>
  </div>
</footer>        
    );
}