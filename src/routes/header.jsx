import React from 'react'

export default function Header() {
  return (
    <>
    <>
  <header className=" bg-stone-100">
    <section className=" headerOne mt-3 bg-stone-100 flex flex-row align-middle justify-center">
      <img src="../logo.png" alt="logo" />
    </section>
    <section className="headerTwo p-4  flex flex-row align-middle justify-evenly bg-stone-100">
      <nav>
        <ul className="flex flex-row align-middle justify-around gap-10 text-wrap text-lg">
          <li className="hidden sm:block">India</li>
          <li className="hidden sm:block"> World</li>
          <li className="hidden sm:block md:block">Sports</li>
          <li className="hidden sm:block md:block">Tech</li>
          <li className="hidden sm:block md:block">Movies</li>
        </ul>
      </nav>

    </section>
  </header>

</>


    
    </>
  )
}
