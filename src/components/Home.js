import React from 'react'
import Sidebar from './Sidebar'
import StatisticCard from './StatisticCard'
import Topbar from './Topbar'
import Men from '../images/man.png';
import Women from '../images/woman.png';
import Chart from '../images/chart.png';

function Home() {
  return (
    <div>
      <Sidebar />
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        {/* <Topbar/> */}

        <StatisticCard />
        <div class="flex flex-wrap">
          <div class="md:w-1/3 px-6">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border pb-10">
              <div class="flex justify-between items-center p-4">
                <div class="font-bold text-xl text-black">
                  Employee Happiness
                </div>
                <div class="text-md text-gray-500">Augest 2022</div>
              </div>
              <img src={Chart} class="h-80" />
            </div>
          </div>
          <div class="md:w-2/3">
            <div class="flex flex-wrap">
              <div class="md:w-1/2 px-6">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border">
                  <div class="flex items-center p-4">
                    <div class="font-bold text-xl text-black">
                      Employee Gender
                    </div>
                  </div>
                  <div class="flex px-4 pb-2">
                    <div class="w-1/2">
                      <p class="text-pink-500 font-bold text-lg text-center">
                        37.5%
                      </p>
                      <p class="text-center"><img class="h-16 flex justify-center" src={Women}/></p>
                      <p class="text-pink-500 font-bold text-lg text-center">
                        48
                      </p>
                      <p class="text-gray-500 font-bold text-lg text-center">
                        Women
                      </p>
                    </div>
                    <div class="w-1/2">
                      <p class="text-blue-500 font-bold text-lg text-center">
                        62.5%
                      </p>
                      <p class="text-center"><img class="h-16 flex justify-center" src={Men}/></p>
                      <p class="text-blue-500 font-bold text-lg text-center">
                        80
                      </p>
                      <p class="text-gray-500 font-bold text-lg text-center">
                        Men
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border my-4">
                  <div class="flex items-center p-4">
                    <div class="font-bold text-xl text-black">
                      Employee Gender
                    </div>
                  </div>
                  <div class="px-4 py-2">
                    <p class="text-gray-500 font-bold text-lg b-2">
                      Proportion of your workforce who leave during a period of
                      time
                    </p>
                    <div class="flex justify-between items-center">
                      <div class="flex my-2 py-2 px-1 rounded-md border items-center">
                        <span class="text-black ">Q2 2019</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="flex">
                        <span class="px-2 text-green-500 text-xl font-bold">
                          15%
                        </span>
                        <span class="bg-green-200 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 text-green-800"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 px-6">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border">
                  <div class="flex items-center p-4">
                    <div class="font-bold text-xl text-black">Requests</div>
                  </div>
                  <ul>
                    <li class="px-4">
                      <div class="flex justify-between border-b">
                        <div class="text-gray-500 pb-2">
                          Profile update request
                        </div>
                        <div class="pb-2">21</div>
                      </div>
                      <div class="flex justify-between border-b">
                        <div class="text-gray-500 py-2">Leave request</div>
                        <div class="pb-2">13</div>
                      </div>
                      <div class="flex justify-between border-b">
                        <div class="text-gray-500 py-2">Loan request</div>
                        <div class="pb-2">06</div>
                      </div>
                      <div class="flex justify-between">
                        <div class="text-gray-500 py-2">Other request</div>
                        <div class="pb-2">18</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border my-4">
                  <div class="flex items-center p-4">
                    <div class="font-bold text-xl text-black">
                      Employee Gender
                    </div>
                  </div>
                  <div class="px-4 py-2">
                    <p class="text-gray-500 font-bold text-lg b-2">
                      Proportion of your workforce who leave during a period of
                      time
                    </p>
                    <div class="flex justify-between items-center">
                      <div class="flex my-2 py-2 px-1 rounded-md border items-center">
                        <span class="text-black ">Q2 2019</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="flex">
                        <span class="px-2 text-green-500 text-xl font-bold">
                          15%
                        </span>
                        <span class="bg-green-200 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 text-green-800"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 p-6">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border">
              <div class="flex items-center p-4">
                <div class="font-bold text-xl text-black">Create Announcement</div>
              </div>

                  <div class="flex justify-between items-center  px-4">
                    <div class="text-gray-500 pb-2">Make an announcement to your coworker</div>
                    <div class="pb-2"><img src="https://media.istockphoto.com/photos/man-checking-ads-of-houses-for-sale-picture-id1337712514?b=1&k=20&m=1337712514&s=170667a&w=0&h=rvy46BN58p9491qiyc8-WsJkxIyhc7EcLRtgm4TrrHs=" class="rounded-full w-10 h-10"/></div>
                  </div>
                  <div class="flex justify-between px-4 items-center pb-2">
                  <button class="border border-blue-400 text-blue-400 p-2 rounded-md">
                    Create Announcement
                  </button>
                    <div class="pb-2 text-gray-500">See history</div>
                  </div>
                 
            </div>
          </div>
          <div class="md:w-1/3 p-6">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border">
              <div class="flex items-center p-4">
                <div class="font-bold text-xl text-black">Quick links</div>
              </div>
                <div class="px-4">
                    <div class="text-gray-500 pb-2">Based on your most frequency used modules</div>
                    <div class="text-blue-500 py-2">Add employee</div>
                    <div class="text-blue-500 py-2">Profile request update</div>
                    <div class="text-blue-500 py-2">Payroll management</div>
                    <div class="text-blue-500 py-2">Marketplace</div>
                    <div class="text-blue-500 py-2">Special Days</div>
                    <div class="text-blue-500 py-2">Audit Trail</div>
                </div>
            </div>
          </div>
          <div class="md:w-1/3 p-6">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border">
              <div class="flex items-center p-4">
                <div class="font-bold text-xl text-black">Quick links</div>
              </div>
                <div class="px-4">
                  <div class="flex justify-between border-b">
                    <div><img class="rounded-md pr-3 h-max w-max" src="https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529__340.jpg" /></div>
                    <div class="pb-2">
                    <div class="text-gray-500 py-2 text-justify">Create your company manual add everything you want your employees to know about the company</div>
                    <button class="border border-blue-400 text-blue-400 p-2 rounded-md">
                    Create Announcement
                  </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
