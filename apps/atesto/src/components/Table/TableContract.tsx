import React, { memo, useCallback, useMemo, useState } from 'react';
import MaterialReactTable, {
  type MaterialReactTableProps,
  type MRT_Cell,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'material-react-table';
//Import Material React Table Translations
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';

import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import { ContractDataType } from '../../types';

interface TableProps {
  contractData?: ContractDataType[];
  loading?: boolean;
}

const TableContract = memo(({ contractData, loading }: TableProps) => {
  // const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState<ContractDataType[]>([
    ...(contractData || []),
  ]);
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  const handleSaveRowEdits: MaterialReactTableProps<ContractDataType>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      if (!Object.keys(validationErrors).length) {
        tableData[row.index] = values;
        //send/receive api updates here, then refetch or update local table data for re-render
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode and close modal
      }
    };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row: MRT_Row<ContractDataType>) => {
      if (
        // eslint-disable-next-line no-restricted-globals
        !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<ContractDataType>
    ): MRT_ColumnDef<ContractDataType>['muiTableBodyCellEditTextFieldProps'] => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo<MRT_ColumnDef<ContractDataType>[]>(
    () => [
      {
        accessorKey: 'nrContrato',
        header: 'Contrato',
        enableColumnOrdering: false,
        enableEditing: true, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'pregao',
        header: 'Pregão',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'empresa',
        header: 'Empresa',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'nrEmpenho',
        header: 'Empenho',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'email',
        }),
      },
      {
        accessorKey: 'valorTotal',
        header: 'Valor',
        size: 80,
        //custom conditional format and styling
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<number>() < 50_000
                  ? theme.palette.error.dark
                  : cell.getValue<number>() >= 50_000 &&
                    cell.getValue<number>() < 75_000
                  ? theme.palette.warning.dark
                  : theme.palette.success.dark,
              borderRadius: '0.25rem',
              color: '#fff',
              maxWidth: '9ch',
              p: '0.25rem',
            })}
          >
            {cell.getValue<number>()?.toLocaleString?.('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <MaterialReactTable
        muiTablePaperProps={{
          elevation: 0, //change the mui box shadow
          //customize paper styles
          sx: {
            width: '98%',
          },
        }}
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        state={{ isLoading: loading }}
        columns={columns}
        data={contractData || tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        localization={MRT_Localization_PT_BR}
        renderDetailPanel={({ row }) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4">Items</Typography>

              {row.original.itens?.map((items, index) => (
                <Typography key={index} variant="h5">
                  &quot;Lote: {items.lote}&quot; &quot; Quantidade:
                  {items.quantidade}&quot; &quot; Descrição: {items.descricao}
                  &quot; &quot;Valor unitário{items.valorUnitario}&quot;
                </Typography>
              ))}
            </Box>
          </Box>
        )}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', width: '100%', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        // renderTopToolbarCustomActions={() => (
        //   <Button
        //     color="secondary"
        //     onClick={() => setCreateModalOpen(true)}
        //     variant="contained"
        //   >
        //     Create New Account
        //   </Button>
        // )}
      />
      {/* <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      /> */}
    </>
  );
});

interface CreateModalProps {
  columns: MRT_ColumnDef<ContractDataType>[];
  onClose: () => void;
  onSubmit: (values: ContractDataType) => void;
  open: boolean;
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
}: CreateModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values, setValues] = useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any)
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age: number) => age >= 18 && age <= 50;

export default TableContract;
