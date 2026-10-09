import ProductoCard from './ProductoCard.jsx'

function Catalogo({
  productos,
  carrito,
  categorias,
  categoria,
  busqueda,
  cargando,
  error,
  onBusqueda,
  onCategoria,
  onAgregar,
  onLimpiarFiltros
}) {
  return (
    <section id="productos" className="py-5">
      <div className="container">
        <div className="row align-items-end g-3 mb-4">
          <div className="col-lg-5">
            <p className="text-primary text-uppercase fw-bold small mb-1">Catálogo dinámico</p>
            <h2 className="fw-bold mb-1">Videojuegos disponibles</h2>
            <p className="text-secondary mb-0">
              Puedes buscar por nombre o filtrar el catálogo por categoría.
            </p>
          </div>

          <div className="col-md-7 col-lg-4">
            <label htmlFor="busqueda" className="form-label">Buscar videojuego</label>
            <input
              id="busqueda"
              className="form-control form-control-lg"
              value={busqueda}
              onChange={(evento) => onBusqueda(evento.target.value)}
              placeholder="Nombre o plataforma"
            />
          </div>

          <div className="col-md-5 col-lg-3">
            <label htmlFor="categoria" className="form-label">Categoría</label>
            <div className="input-group input-group-lg">
              <select
                id="categoria"
                className="form-select"
                value={categoria}
                onChange={(evento) => onCategoria(evento.target.value)}
              >
                {categorias.map((item) => (
                  <option value={item} key={item}>{item}</option>
                ))}
              </select>
              <button className="btn btn-dark" type="button" onClick={onLimpiarFiltros}>Limpiar</button>
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
