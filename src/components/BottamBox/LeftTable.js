import React from 'react';

const LeftTable = () => {
  const dynamicData = [
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
      ],
    },
    {
      date: '30-03-2023',
      invoiceNo: '85648',
      billAmount: '1900',
      users: [
        'https://www.pngitem.com/pimgs/m/274-2749146_that-s-my-billing-invoice-icon-invoice-icon.png',
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
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      #
                    </th>
                    <th className="px-10 align-middle py-2 text-[16px]  uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      date
                    </th>
                    {/* Add the new heading */}
                    <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Invoice No.
                    </th>
                    <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Bill Amount
                    </th>
                    <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500">
                      Paid Amount
                    </th>
                    <th className="px-2 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-cyan-500 text-white border-cyan-500"></th>
                  </tr>
                </thead>
                <tbody>
                  {dynamicData.map((item, index) => (
                    <tr key={index}>
                      <th className=" px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={item.users[0]}
                          className="h-10 w-10 border rounded-full"
                          alt="..."
                        />
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.date}
                      </td>
                      <td className="border-t-0 px-10 align-middle border-l-0 text-pink-500 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.invoiceNo}
                      </td>
                      <td className="border-t-0 px-10 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.billAmount}
                      </td>
                      <td className="border-t-0 px-10 align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
                        {item.billAmount}
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
