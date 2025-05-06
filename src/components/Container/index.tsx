import './index.css';
import Input from '$components/Input';

function Container() {
  return (
    <div class="container">
      <div class="form">
        <div class="form__header">
          <span class="header__title">Mortgage Calculator</span>
          <button class="header__reset">Reset All</button>
        </div>

        <div class="form__inputs">
          <div class="inputs__row">
            <Input label="Mortgage amount" placeholder="$" />
          </div>

          <div class="inputs__row">
            <Input label="Mortgage Term" placeholder="years" />
            <Input label="Interest Rate" placeholder="%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
