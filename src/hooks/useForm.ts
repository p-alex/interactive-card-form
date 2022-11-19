import React, { useState } from 'react';
import { z } from 'zod';
import { ErrorsType, IState } from '../App';
import { formSchema } from '../utils/validateForm';

const useForm = () => {
  const [state, setState] = useState<IState>({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState<ErrorsType>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setErrors(undefined);
      const data = {
        ...state,
        number: state.number.replaceAll(' ', ''),
        month: parseInt(state.month),
        year: parseInt(state.year),
        cvc: parseInt(state.cvc),
      };
      formSchema.parse(data);
      setIsSuccess(true);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const errors = error.flatten().fieldErrors as ErrorsType;
        setErrors(errors);
      } else {
        throw error;
      }
    }
  };

  const handleReset = () => {
    setState({
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: '',
    });
    setIsSuccess(false);
  };

  return { state, setState, isSuccess, errors, handleSubmit, handleReset };
};

export default useForm;
