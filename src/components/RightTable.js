import React from 'react';

const RightTable = () => {
  const dynamicData = [
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },
    {
      budget: '$2,500 USD',
      status: 'pending',
      users: [
        'https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg',
      ],
    },

  ];

  return (
    <section className="relative bg-blueGray-50">
      <div className="w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-yellow-900 text-white">
          <div className="block w-full overflow-x-auto">
            <div className="overflow-y-auto h-[480px]">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead className="sticky top-0">
                  <tr>
                  <th className="px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      #
                    </th>
                    <th className="px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      MR Number
                    </th>
                    <th className="px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Report No
                    </th>
                    <th className="px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Report Status
                    </th>
                    <th className="px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500"></th>
                  </tr>
                </thead>
                <tbody>
                  {dynamicData.map((item, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={item.users[0]}
                          className="h-8 w-8 bg-white rounded-full border"
                          alt="..."
                        />
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.budget}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i className="fas fa-circle text-orange-500 mr-2"></i>
                        {item.status}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          className="text-blueGray-800 bg-black hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Yes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightTable;
