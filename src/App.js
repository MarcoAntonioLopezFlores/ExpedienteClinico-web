import React from 'react'
import Login from './views/Login'
import Olvidar from './views/Olvidar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeAdmin from './views/admin/HomeAdmin'

import HomePaciente from './views/paciente/HomePaciente'
import NotFound from './views/NotFound'
import PrivateRoute from './components/PrivateRoute'
import HomeDoctor from './views/medico/HomeDoctor'
import VerPacientes from './views/medico/VerPacientes'
import RegistroPaciente from './views/RegistroPaciente'
import Expediente from './views/medico/Expediente'

import RegistrarCuestionario from './views/paciente/RegistrarCuestionario'

import MisAntecedentes from './views/paciente/MisAntecedentes'
import DocumentosPaciente from './components/doctor/DocumentosPaciente'
import CuestionarioFisio from './views/medico/CuestionarioFisio'
import ListCuestionariosPaciente from './components/doctor/ListCuestionariosPaciente'
import ListRevisiones from './components/doctor/ListRevisiones'
import ListFisioterapia from './views/medico/ListFisioterapia'
import Odontograma from './views/medico/Odontograma'
import OdontogramasPaciente from './views/medico/OdontogramasPaciente'
import Acupuntura from './views/medico/Acupuntura'
import ListAcupuntura from './views/medico/ListAcupuntura'
import Pacientes from './views/admin/Pacientes'
import ListNotas from './components/doctor/ListNotas'

 class App extends React.Component {
  
  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path={["/login", "/"]} component={Login}></Route>
            <Route exact path="/olvidar" component={Olvidar}></Route>
            <Route exact path="/registroPaciente" component={RegistroPaciente}></Route>
            <PrivateRoute component={HomeAdmin} role={1} path="/inicioAdmin" exact />
            
            <PrivateRoute component={Pacientes} role={1} path="/verPacientes" exact />
            
            <PrivateRoute component={HomeDoctor} role={2} path="/inicioDoctor" exact />
            <PrivateRoute component={VerPacientes} role={2} path="/pacientes" exact />
            <PrivateRoute component={Expediente} role={2} path="/paciente" exact />
            <PrivateRoute component={ListNotas} role={2} path="/paciente/notas" exact />
            <PrivateRoute component={DocumentosPaciente} role={2} path="/paciente/documentos" exact />
            
            <PrivateRoute component={CuestionarioFisio} role={2} path="/paciente/fisio/cuestionario" exact />
            <PrivateRoute component={Acupuntura} role={2} path="/paciente/acupuntura/cuestionario" exact />
            <PrivateRoute component={ListAcupuntura} role={2} path="/paciente/acupuntura" exact />
            <PrivateRoute component={ListFisioterapia} role={2} path="/paciente/fisio" exact />
            <PrivateRoute component={ListCuestionariosPaciente} role={2} path="/paciente/cuestionarios" exact />
            <PrivateRoute component={ListRevisiones} role={2} path="/paciente/revisiones" exact />
            <PrivateRoute component={Odontograma} role={2} path="/paciente/odontograma" exact />
            <PrivateRoute component={OdontogramasPaciente} role={2} path="/paciente/odontogramas" exact />
            
            <PrivateRoute component={HomePaciente} role={3} path="/inicioPaciente" exact />
            
          
            <PrivateRoute component={MisAntecedentes} role={3} path="/antecedente" exact />
            
            <PrivateRoute component={RegistrarCuestionario} role={3} path="/registrarCuestionario" exact />
            
            
            <Route component={NotFound}></Route>
            
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
    
}
export default App;
