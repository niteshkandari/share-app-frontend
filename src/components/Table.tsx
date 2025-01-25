
type TablePropsType = {
  data: Array<{ values: Array<string> }>;
  columns: Array<string>;
};

const Table = (props: TablePropsType) => {
  const { data, columns } = props;

  return (
    <div className={`overflow-x-auto overflow-y-auto ${data.length < 5  ? "h-auto" : data.length ? "h-[80vh]" : "h-auto"  } border border-gray-300 rounded-xl`}>
      <table className="w-full">
        <thead className="border-b">
          <tr>
            {columns.map((ele: string, index: number) => {
              return (
                <th
                  key={index}
                  className="px-2 md:px-4 py-4 text-xs md:text-[16px] text-left text-gray-400 font-semibold"
                >
                  {ele}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row: { values: Array<string> }, index: number) => (
              <tr key={index} className={"border-b"}>
                {row.values.map((ele, index) => (
                  <td key={index} className="px-2 text-gray-500 md:px-4 py-4 text-xs md:text-[16px] font-semibold">
                    {ele ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center px-2 py-4 text-gray-500 text-xs md:text-[16px] font-semibold"
              >
                No Records to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
