import React from 'react';

const LeftTable = () => {
  const dynamicData = [
    {
      patientName: "Ravi Kumar",
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
    {
      patientName: "Ravi Kumar" ,
      mrNumber: "MR000336" ,
      reportNumber: "475698" ,
      users: [
        'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png',
      ],
    },
  ];

  return (
    <section className="relative bg-blueGray-50">
      <div className="w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-slate-200 text-white">
          <div className="block w-full overflow-x-auto">
            <div className="overflow-y-auto h-[480px]">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead className="sticky top-0">
                  <tr>
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      #
                    </th>
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                     Patient Name
                    </th>
                    {/* Add the new heading */}
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      MR Number
                    </th>
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Report No
                    </th>
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Report Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dynamicData.map((item, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={item.users[0]}
                          className="h-8 w-8 bg-green-500 rounded-full border"
                          alt="..."
                        />
                      </th>
                      <td className="border-t-0 px-6 text-black align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.patientName}
                      </td>
                      <td className="border-t-0 px-6 align-middle text-pink-600 border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.mrNumber}
                      </td>
                      <td className="border-t-0 px-6 align-middle text-green-600 border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.reportNumber}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
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

export default LeftTable;
