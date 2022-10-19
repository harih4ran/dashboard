import React from 'react'

function Topbar() {
  return (
    <div>
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          <div className="hidden lg:block">
            <div className="flex">
              <div className="text-md text-gray-600 font-medium px-2 hidden lg:block">
                Employee View
              </div>
              <div className="text-md text-gray-600 font-medium px-2 hidden lg:block">
                System Control
              </div>
              <div className="text-md text-blue-600 font-medium px-2 hidden lg:block">
                Admin
              </div>
            </div>
          </div>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 my-auto text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex space-x-4">
          
            <button aria-label="chat" className="w-10 h-10 rounded-full border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 m-auto text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </button>
            <button
              aria-label="notification"
              className="w-10 h-10 rounded-full border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 m-auto text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <a href="#" title="home">
                <img
                  src="https://cdn.pixabay.com/photo/2017/09/22/18/11/cyber-security-2776600__340.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </a>
              <div className="pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
