'use client'
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent } from 'react'



export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearchSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setSearch("");
        router.push(`/${search}/`);
    }
  return (
    <form  className="md:ml-auto" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="bg-gray-300 rounded-md py-1 px-2 "
              placeholder="Search Wikipedia"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button type='submit' className="bg-gray-200 rounded-md ml-2 hover:bg-gray-300 py-1 px-2">
              🔎
            </button>
          </form>
  )
}