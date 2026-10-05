function Hero() {
  return (
    <section id="inicio" className="hero d-flex align-items-center text-white">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="badge rounded-pill text-bg-primary mb-3">Videojuegos y accesorios</span>
            <h1 className="display-4 fw-bold">Tu próxima aventura comienza aquí</h1>
            <p className="lead text-white-50 mb-4">
              NextLevel Games ahora está desarrollado con React. El catálogo se carga
              dinámicamente y el carrito se actualiza según el estado de la aplicación.
            </p>
            <a href="#productos" className="btn btn-primary btn-lg">Ver catálogo</a>
          </div>

          <div className="col-lg-5">
            <div className="hero-card p-4 rounded-4">
              <h2 className="h4">Actividad Semana 8</h2>
              <p className="mb-0">React, useState, useEffect, props, carrito y renderizado condicional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
