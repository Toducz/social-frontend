import { useMemo } from 'react';
import { FieldPath, FieldPathValue, FieldValues, RegisterOptions, Validate } from 'react-hook-form';

export type ValidationRules<TFieldValue> = {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  validate?: Validate<TFieldValue, any>;
};

export type MuiValidationRules<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;

export function useValidationRules<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(rules?: ValidationRules<FieldPathValue<TFieldValues, TName>>): MuiValidationRules<TFieldValues, TName> {
  return useMemo(() => {
    const ret: MuiValidationRules<TFieldValues, TName> = {};

    if (!rules || Object.keys(rules).length === 0) {
      return ret;
    }

    if (rules.required) {
      ret.required = { value: true, message: 'Field is required' };
    } else {
      ret.required = false;
    }

    if (rules.min) {
      if (rules.max) {
        ret.min = { value: rules.min, message: `Value must be between ${rules.min} and ${rules.max}` };
        ret.max = { value: rules.max, message: `Value must be between ${rules.min} and ${rules.max}` };
      } else {
        ret.min = { value: rules.min, message: `Value must be at least ${rules.min}` };
      }
    } else if (rules.max) {
      ret.max = { value: rules.max, message: `Value must be at most ${rules.max}` };
    }

    if (rules.minLength) {
      if (rules.maxLength) {
        ret.minLength = {
          value: rules.minLength,
          message: `Length must be between ${rules.minLength} and ${rules.maxLength}`,
        };
        ret.maxLength = {
          value: rules.maxLength,
          message: `Length must be between ${rules.minLength} and ${rules.maxLength}`,
        };
      } else {
        ret.minLength = { value: rules.minLength, message: `Length must be at least ${rules.minLength}` };
      }
    } else if (rules.maxLength) {
      ret.maxLength = { value: rules.maxLength, message: `Length must be at most ${rules.maxLength}` };
    }

    if (rules.validate) {
      ret.validate = rules.validate;
    }

    return ret;
  }, [rules?.required, rules?.min, rules?.max, rules?.minLength, rules?.maxLength, rules?.validate]);
}

export function useFileValidationRules<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(maxFileSize: number): MuiValidationRules<TFieldValues, TName> {
  return useMemo(() => {
    const ret: MuiValidationRules<TFieldValues, TName> = {};

    if (maxFileSize) {
      ret.validate = (file) => {
        if (file?.size > maxFileSize) {
          return 'The file is too large';
        }
        return true;
      };
    }

    return ret;
  }, [maxFileSize]);
}
