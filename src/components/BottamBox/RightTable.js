import React from 'react';

const RightTable = () => {
  const dynamicData = [
    {
      name: 'John Doe',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
    {
      name: 'Alice Smith',
      budget: '$2,500 USD',
      department: 'PATHOLOGY',
      users: [
        'https://www.nicepng.com/png/detail/648-6487280_involve-employees-and-their-representatives-ensuring-employees-clipart.png',
      ],
    },
  ];

  return (
    <section className="relative bg-blueGray-50">
      <div className="w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded text-black">
          <div className="block w-full overflow-x-auto">
            <div className="overflow-y-auto h-[480px]">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead className="sticky top-0">
                  <tr>
                    <th className="px-10 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      #
                    </th>
                    <th className="px-8 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Name
                    </th>
                    {/* Add the new heading */}
                    <th className="px-5 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Department
                    </th>
                    <th className="px-10 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Status
                    </th>
                                      </tr>
                </thead>
                <tbody>
                  {dynamicData.map((item, index) => (
                    <tr
                          key={index}
                          className={
                            index % 2 === 0
                              ? "bg-pink-100 border border-t-slate-500 border-b-slate-500 "
                              : "bg-slate-300"
                          }
                        >
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-2 text-left flex items-center">
                        <img
                          src={item.users[0]}
                          className="h-9 w-9 bg-white rounded-full border"
                          alt="..."
                        />
                      </th>
                      <td className="border-t-0 px-6 align-middle text-pink-500 border-l-0 border-r-0 text-[16px] whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="border-t-0 px-6 align-middle text-blue-600 border-l-0 border-r-0 text-[16px] whitespace-nowrap">
                        {item.department}
                      </td>
                      <td className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap">
                        <button
                          className="text-white bg-black hover:bg-emerald-500 hover:text-white active:bg-emerald-600 uppercase px-5 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
