import Image from "next/image";
import wikiHuntLogo from "@/public/wikiHuntLogo.svg";
import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <header className=" body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-3 md:p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-2xl text-gray-200">WikiHunt</span>
          </Link>

          <Search />

        </div>
      </header>
    </>
  );
}
