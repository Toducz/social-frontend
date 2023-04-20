import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import React, { ReactNode } from 'react';
import { Controller, FieldPath, FieldPathValue, FieldValues, UseControllerProps } from 'react-hook-form';
import { useValidationRules, ValidationRules } from '../hooks/useValidationRules';

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<UseControllerProps<TFieldValues, TName>, 'render' | 'rules'> & {
  type?: 'text' | 'number' | 'select';
  label?: string;
  isLoading?: boolean;
  rows?: number;
  rules?: ValidationRules<FieldPathValue<TFieldValues, TName>>;
  children?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function FormTextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  type = 'text',
  label = null,
  isLoading = false,
  rows = null,
  rules = null,
  children = null,
  onChange = null,
  ...controllerProps
}: Props<TFieldValues, TName>) {
  const { name } = controllerProps;
  const finalLabel = label ?? name;

  const muiRules = useValidationRules(rules);

  return (
    <Controller
      defaultValue={'' as FieldPathValue<TFieldValues, TName>}
      {...controllerProps}
      render={({ field: { onChange: onChangeInternal, value }, fieldState: { error } }) =>
        isLoading ? (
          <CircularProgress />
        ) : (
          <TextField
            type={type !== 'select' ? type : undefined}
            select={type === 'select'}
            label={finalLabel}
            variant="outlined"
            fullWidth
            value={value}
            onChange={(event) => {
              onChange?.(event);
              onChangeInternal(event);
            }}
            required={rules?.required}
            multiline={!!rows}
            rows={rows}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 'any' }}
            SelectProps={{ displayEmpty: true }}
            error={!!error}
            helperText={error?.message}
          >
            {children}
          </TextField>
        )
      }
      rules={muiRules}
    />
  );
}
