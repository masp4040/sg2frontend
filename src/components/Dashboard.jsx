import React from "react";
import imagen from "../img/logo.png";

function Dashboard() {
  return (
    <div>
      <div>
        <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 "
            href="/"
          >
            SEG Energy Group
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3 text-bg-dark" href="/">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <img
                    className="mb-3"
                    src={imagen}
                    alt=""
                    width="200"
                    height="80"
                  ></img>
                  <a
                    className="nav-link active text-muted"
                    aria-current="page"
                    href="#"
                  >
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    Mi Empresa
                  </a>
                </li>
                <li className="nav-item text-muted">
                  <a className="nav-link text-muted" href="#">
                    <span
                      data-feather="file"
                      className="align-text-bottom"
                    ></span>
                    Mis empleados
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-muted" href="#">
                    <span
                      data-feather="shopping-cart"
                      className="align-text-bottom"
                    ></span>
                    Mi Progreso
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    <span
                      data-feather="users"
                      className="align-text-bottom"
                    ></span>
                    Mis Evaluaciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    <span
                      data-feather="bar-chart-2"
                      className="align-text-bottom  "
                    ></span>
                    Mis Reportes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted" href="#">
                    <span
                      data-feather="layers"
                      className="align-text-bottom"
                    ></span>
                    Responsable SST
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span
                    data-feather="plus-circle"
                    className="align-text-bottom"
                  ></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-8">
            <div className=" justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Empresas Registradas</h2>
              <table className="table table-striped ">
                <thead className="thead-inverse">
                  <tr>
                    <th>Empresa</th>
                    <th>Representante</th>
                    <th>Nivel Riesgo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>si</td>
                    <td>fss</td>
                    <td>miguel</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
            <div className=" justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Mis evaluaciones</h2>
              <table className="table table-striped ">
                <thead className="thead-inverse">
                  <tr>
                    <th>empleados</th>
                    <th>cantidad</th>
                    <th>Nivel Riesgo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>20</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
