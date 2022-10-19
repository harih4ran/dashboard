import React from 'react'

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-blue-800"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  )
}
const LeaveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-red-800"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      />
    </svg>
  )
}
const ProfileIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-yellow-700"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
      />
    </svg>
  )
}
const NextpayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-green-800"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
function StatisticCard() {
  var statistic_data = [
    {
      label: 'Number of Staff',
      icon: UserIcon(),
      iconbg: 'bg-blue-200',
      count: '128',
    },
    {
      label: 'Number of Leaves',
      icon: LeaveIcon(),
      iconbg: 'bg-red-200',
      count: '16',
    },
    {
      label: 'Profile update request',
      icon: ProfileIcon(),
      iconbg: 'bg-yellow-200',
      count: '21',
    },
    {
      label: 'Next Pay',
      icon: NextpayIcon(),
      iconbg: 'bg-green-200',
      count: '25th June',
    },
  ]
  return (
    <div>
      <div class="flex flex-wrap">
        {statistic_data.map((e) => (
          <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-6 mb-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 border">
              <div class="flex-auto p-4">
                <div class="flex justify-end">
                  <div
                    class={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-full ${e.iconbg}`}
                  >
                    {e.icon}
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4 flex justify-between items-center">
                  <span class="text-gray-600 mr-2">{e.label}</span>
                  <span class="whitespace-nowrap font-bold text-xl text-black">
                    {' '}
                    {e.count}{' '}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatisticCard
