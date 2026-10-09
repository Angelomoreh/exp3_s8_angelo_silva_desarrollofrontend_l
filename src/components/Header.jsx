function Header({ cantidadCarrito }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">NextLevel Games</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarPrincipal"
            aria-controls="navbarPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarPrincipal">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#gestion">Gestión</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>

            <a className="btn btn-outline-light" href="#carrito">
              Carrito <span className="badge text-bg-primary ms-1">{cantidadCarrito}</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
