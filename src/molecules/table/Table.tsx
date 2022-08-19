import { Dispatch, ReactNode, useState } from "react";
import { generateId } from "../../atoms/Input";
import Loader from "../../atoms/Loader";
import "./Table.scss";

export type paginationType = {
  totalRows: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  nextPage?: number;
  prevPage?: number;
};

export interface PropTypes {
  id?: string;
  headings?: Array<{ name: string; key: string }>;
  tableData?: Array<{
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
    };
    phone: string;
    website: string;
  }>;
  errorMessage?: string;
  loading?: boolean;
  children?: ReactNode;
  scroll?: boolean;
}

const Table = ({
  headings = [
    { name: "NAME", key: "name" },
    { name: "USERNAME", key: "username" },
    { name: "EMAIL", key: "email" },
    { name: "City", key: "address" },
    { name: "PHONE", key: "phone" },
    { name: "WEBSITE", key: "website" },
  ],
  tableData = Array(20)
    .fill("")
    .map((_, index) => ({
      name: "Bidmus Ola",
      username: "Asafa#3",
      email: "bigZ@gmail.com",
      address: {
        street: "home",
        suite: "yes",
        city: "Lagos",
      },
      phone: "093726363652",
      website: "docsweb.org",
    })),
  loading,
  errorMessage,
}: PropTypes) => {
  const [tableId] = useState(generateId());

  if (loading) return <Loader />;
  return (
    <div className="table-wrapper">
      {errorMessage || tableData?.length === 0 ? (
        <>
          {tableData?.length === 0 && (
            <div className="empty-data">
              <span>No doctor found</span>
            </div>
          )}
          {errorMessage && (
            <div className="empty-data">
              <span>{errorMessage}!</span>
              <span>Check internet connection</span>
            </div>
          )}
        </>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {headings.map((heading, headingIndex) => (
                  <th key={headingIndex}>
                    <div className="flex">{heading.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData?.length > 0 &&
                tableData.map((row: any, rowIndex: number) => (
                  <tr key={`${tableId}_table-row-${rowIndex}`}>
                    {headings.map((col, colIndex) => (
                      <td key={`${tableId}-row_${rowIndex}-col_${colIndex}`}>
                        {typeof row[col.key] === "object"
                          ? `${row[col.key].city}`
                          : row[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
