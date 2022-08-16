import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <section id="form-section">

        <div id='form'>

          <div id='heading'>
            <h2>Login</h2>
          </div>

          <form>

            <div className='text'>
              <input type='text' name='' required="required"/>
              <label>Username</label>
            </div>

            <div className='text'>
              <input type='password' name='' required="required"/>
              <label>Password</label>
            </div>

            <a href=''>

              <span></span>
              <span></span>
              <span></span>
              <span></span>

              Submit

            </a>

          </form>

        </div>

      </section>
    
    
    </div>
  );
}

export default App;
