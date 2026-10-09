function Hero() {
  return (
    <section id="inicio" className="hero d-flex align-items-center text-white">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="badge rounded-pill text-bg-primary mb-3">Tienda de videojuegos</span>
            <h1 className="display-4 fw-bold">Tu próxima aventura comienza aquí</h1>
            <p className="lead text-white-50 mb-4">
              Revisa el catálogo, filtra por categoría y agrega tus juegos favoritos al carrito.
              El sitio está desarrollado con React, JavaScript y Bootstrap 5.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#productos" className="btn btn-primary btn-lg">Ver catálogo</a>
              <a href="#contacto" className="btn btn-outline-light btn-lg">Contacto</a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-card p-4 rounded-4">
              <h2 className="h4">NextLevel Games</h2>
              <p className="mb-0">
                Catálogo dinámico, filtros, carrito, formulario validado y componentes reutilizables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
