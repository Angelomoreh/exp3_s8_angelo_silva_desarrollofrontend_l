import ProductoCard from './ProductoCard.jsx'

function Catalogo({
  productos,
  carrito,
  busqueda,
  plataforma,
  cargando,
  error,
  onBusqueda,
  onMostrarTodos,
  onAgregar
}) {
  return (
    <section id="productos" className="py-5">
      <div className="container">
        <div className="row align-items-end g-3 mb-4">
          <div className="col-lg-6">
            <p className="text-primary text-uppercase fw-bold small mb-1">Catálogo dinámico</p>
            <h2 className="fw-bold mb-1">Videojuegos disponibles</h2>
            <p className="text-secondary mb-0">
              {plataforma === 'Todas' ? 'Mostrando todas las plataformas.' : `Plataforma: ${plataforma}.`}
            </p>
          </div>

          <div className="col-lg-6">
            <label htmlFor="busqueda" className="form-label">Buscar videojuego</label>
            <div className="input-group input-group-lg">
              <input
                id="busqueda"
                className="form-control"
                value={busqueda}
                onChange={(evento) => onBusqueda(evento.target.value)}
                placeholder="Nombre, categoría o plataforma"
              />
              <button className="btn btn-dark" type="button" onClick={onMostrarTodos}>Ver todos</button>
            </div>
          </div>
        </div>

        {cargando && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="text-secondary mt-3">Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            No se pudieron cargar los productos. Intenta nuevamente.
          </div>
        )}

        {!cargando && !error && productos.length === 0 && (
          <div className="alert alert-info">No se encontraron productos con ese filtro.</div>
        )}

        {!cargando && !error && productos.length > 0 && (
          <div className="row g-4">
            {productos.map((producto) => (
              <ProductoCard
                key={producto.id}
                producto={producto}
                estaEnCarrito={carrito.some((item) => item.id === producto.id)}
                onAgregar={onAgregar}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Catalogo
