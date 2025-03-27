import { Validator } from "@/utils/validator";

type FormSchema = {
  values: Record<string, ValidatorValuetype>;
  validators: Record<string, Validator>;
  errors: Record<string, { target: string; errors: string[] }>;
};

type ValidatorValuetype = string | string[] | File | null;

type ValidatorFieldType = {
  target: string;
  validators: {
    validator: (
      value1: ValidatorValuetype,
      value2?: ValidatorValuetype
    ) => boolean;
    errorMessage?: string;
    connectField: string;
  }[];
};

export { FormSchema, ValidatorValuetype, ValidatorFieldType };
