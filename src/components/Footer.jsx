function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0">© 2026 NextLevel Games</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a className="link-light" href="#inicio">Inicio</a>
          <a className="link-light" href="#productos">Productos</a>
          <a className="link-light" href="#gestion">Gestión</a>
          <a className="link-light" href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
