import './App.css';
import Form from './components/Form/Form';
import Cards from './containers/Cards/Cards';
import { FormInput } from './utils/validateForm';
import useForm from './hooks/useForm';

export type ErrorsType = { [Property in keyof FormInput]: string[] };

export interface IState {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

function App() {
  const { state, setState, handleSubmit, errors, isSuccess, handleReset } = useForm();
  return (
    <main className="main">
      <picture className="main__bgContainer">
        <source media="(min-width:1260px)" srcSet="/images/bg-main-desktop.png" />
        <source media="(min-width:0px)" srcSet="/images/bg-main-mobile.png" />
        <img className="main__bg" src="/images/bg-main-mobile.png" alt="" />
      </picture>
      <div className="main__container">
        <Cards
          name={state.name}
          number={state.number}
          month={state.month}
          year={state.year}
          cvc={state.cvc}
        />
        <Form
          state={state}
          setState={setState}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          errors={errors}
          isSuccess={isSuccess}
        />
      </div>
    </main>
  );
}

export default App;
