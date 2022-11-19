import React from 'react';
import { ErrorsType, IState } from '../../App';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import formatCode from '../../utils/formatCode';
import formatMounth from '../../utils/formatMounth';
import Feedback from '../Feedback/Feedback';
import './Form.css';

interface IForm {
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
  handleSubmit: (event: React.FormEvent) => void;
  handleReset: () => void;
  errors: ErrorsType | undefined;
  isSuccess: boolean;
}

const Form = ({
  state,
  setState,
  handleSubmit,
  handleReset,
  errors,
  isSuccess,
}: IForm) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value?: string) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: value ? value : event.target.value,
    }));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {!isSuccess && (
          <>
            <div className="form__inputGroup">
              <label className="form__label" htmlFor="name">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                className={errors?.name ? 'form__field error' : 'form__field'}
                id="name"
                name="name"
                placeholder="e.g. Jane Appleseed"
                maxLength={70}
                aria-invalid={typeof errors?.name !== undefined}
                value={state.name}
                onChange={handleChange}
              />
              {errors?.name && <p className="form__fieldError">{errors.name[0]}</p>}
            </div>

            <div className="form__inputGroup">
              <label className="form__label" htmlFor="number">
                CARD NUMBER
              </label>
              <input
                type="text"
                className={errors?.number ? 'form__field error' : 'form__field'}
                id="number"
                name="number"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={19}
                aria-invalid={typeof errors?.number !== undefined}
                value={state.number}
                onChange={(event) =>
                  handleChange(
                    event,
                    formatCode({ string: event.target.value, delimiter: ' ', by: 4 })
                  )
                }
              />
              {errors?.number && <p className="form__fieldError">{errors.number[0]}</p>}
            </div>

            <div className="form__dateAndCVC">
              <div className="form__inputGroup">
                <label className="form__label" htmlFor="month">
                  {'EXP. DATE (MM/YY)'}
                </label>
                <div className="form__dateContainer">
                  <input
                    type="number"
                    className={errors?.month ? 'form__field error' : 'form__field'}
                    id="month"
                    name="month"
                    placeholder="MM"
                    aria-label="month"
                    maxLength={3}
                    aria-invalid={typeof errors?.month !== undefined}
                    value={state.month}
                    onChange={handleChange}
                    onBlur={(event) =>
                      handleChange(event, formatMounth(event.target.value))
                    }
                  />
                  <input
                    type="number"
                    className={errors?.year ? 'form__field error' : 'form__field'}
                    id="year"
                    name="year"
                    placeholder="YY"
                    aria-label="year"
                    maxLength={2}
                    aria-invalid={typeof errors?.year !== undefined}
                    value={state.year}
                    onChange={handleChange}
                  />
                </div>

                {errors?.month ? (
                  <p className="form__fieldError">{errors.month[0]}</p>
                ) : errors?.year ? (
                  <p className="form__fieldError">{errors.year[0]}</p>
                ) : null}
              </div>

              <div className="form__inputGroup">
                <label className="form__label" htmlFor="cvc">
                  CVC
                </label>
                <input
                  type="number"
                  className={errors?.cvc ? 'form__field error' : 'form__field'}
                  id="cvc"
                  name="cvc"
                  placeholder="e.g. 123"
                  aria-invalid={typeof errors?.cvc !== undefined}
                  value={state.cvc}
                  onChange={(event) =>
                    setState((prevState) => ({
                      ...prevState,
                      [event.target.name]: event.target.value,
                    }))
                  }
                />
                {errors?.cvc && <p className="form__fieldError">{errors.cvc[0]}</p>}
              </div>
            </div>
            <PrimaryButton type="submit">Confirm</PrimaryButton>
          </>
        )}

        {isSuccess && <Feedback handleReset={handleReset} />}
      </form>
    </>
  );
};

export default Form;
