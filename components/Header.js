import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      {/* Fixed header with background color and full width */}
      <div className='flex justify-between items-center p-6 fixed w-full bg-white shadow-md p-2'>
        <div>
          <Link href="/">
            <h1 className='font-bold text-3xl'>Parking_Management_System</h1>
          </Link>
        </div>

        <div>
          <nav>
            <ul className='flex gap-5 text-xl'>
              <li><Link className='hover:border-b-2 hover:border-black' href="/">DashBoard</Link></li>
              <li><Link className='hover:border-b-2 hover:border-black' href="/Parking_list">Parking_List</Link></li>
              <li><Link className='border bg-red-300 p-2 hover:bg-slate-200 hover:border-b-2 ' href="/Add_vehicle">Add_Vehicle</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Added padding to avoid content being hidden behind the fixed header */}
     
    </>
  )
}

export default Header