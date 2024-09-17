/* eslint-disable camelcase */
import React from 'react';
import { Table, Placeholder } from 'semantic-ui-react';

function TableLoader(props) {
  const { row = 5, column = 8, is_table_header = true } = props;

  const rowCount = new Array(row).fill(null);
  const columnCount = new Array(column).fill(null);

  const tableBody = () => (
    <Table.Body>
      {rowCount.map(() => (
        <Table.Row key={Math.random()}>
          {columnCount.map(() => (
            <Table.Cell key={Math.random()}>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );

  return (
    is_table_header ? (
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            {columnCount.map(() => (
              <Table.Cell key={Math.random()}>
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                </Placeholder>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        {tableBody()}
      </Table>
    ) : (
      tableBody()
    )
  );
}

export default TableLoader;
