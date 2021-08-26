import {Link} from 'react-router-dom';

const Personas = () => {
    return ( 
        <div>
            <div className="jumbotron">
  <h1 className="display-4">Personas</h1>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <Link to="/"className="btn btn-primary btn-lg" href="#" role="button">Volver al Inicio</Link>
  </p>
</div>
        </div>
     );
}
 
export default Personas;