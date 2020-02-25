import React, { useMemo } from "react";
import styled from "styled-components";
import { ColorPalette } from "../utils/colors";
import { useTable, useFlexLayout, useRowSelect } from "react-table";
import { Link } from "react-router-dom";

const TableWrapper = styled.div`
  display: block;
  max-width: 100%;
  overflow-x: auto;
`;

const TableElement = styled.div`
  width: 100%;
`;

const TableHead = styled.div`
  background-color: ${ColorPalette.gray.background};
  padding: 1.8rem 0.9rem;
`;

const TableHeadItem = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.2;
  letter-spacing: 0;
  color: ${ColorPalette.pureBlack};
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  padding: 1.8rem 0.9rem;
  text-align: left;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 0;
  color: #000000;
  box-shadow: 0px 3px 50px #007bff00;
  margin-top: 0.8rem;
  background-color: ${ColorPalette.white};
  display: block;
  text-decoration: none;

  &:not(:last-of-type) {
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  word-wrap: break-word;
`;

export const TableCellImage = styled.img`
  width: 4.5rem;
  height: auto;
  margin-right: 2.85rem;
  flex-shrink: 0;
`;

export const TableCellText = styled.div`
  max-width: 13.5rem;
`;

export const TableCellBadge = styled.div`
  background-color: ${props => props.color};
  color: ${ColorPalette.white};
  font-size: 1.25rem;
  line-height: 1.2;
  letter-spacing: 0;
  font-weight: normal;
  padding: 1.1rem 1.6rem;
  border-radius: 0.5rem;
`;

export const BoldTableText = styled.b`
  display: inline-flex;
  align-items: center;
`;

export const CenteredTableCell = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

export const Table = ({ columns, data, ...props }) => {
  const defaultColumn = useMemo(
    () => ({
      width: 100
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFlexLayout,
    useRowSelect,
    hooks => {
      hooks.allColumns.push(columns => [
        {
          id: "selection",
          disableResizing: true,
          minWidth: 35,
          width: 35,
          maxWidth: 35,
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ]);
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0];
        selectionGroupHeader.canResize = false;
      });
    }
  );

  return (
    <TableWrapper>
      <TableElement {...getTableProps()}></TableElement>
      {headerGroups.map(headerGroup => (
        <TableHead {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <TableHeadItem {...column.getHeaderProps()}>
              {column.render("Header")}
            </TableHeadItem>
          ))}
        </TableHead>
      ))}
      <TableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          const linkProps = {
            ...(row.original.linkTo && {
              as: Link,
              to: row.original.linkTo
            })
          };
          return (
            <TableRow {...linkProps} {...row.getRowProps()}>
              {row.cells.map(cell => (
                <TableCell {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableWrapper>
  );
};
