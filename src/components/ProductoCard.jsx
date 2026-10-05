const formatearPrecio = (valor) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(valor)

function ProductoCard({ producto, estaEnCarrito, onAgregar }) {
  const rutaImagen = `${import.meta.env.BASE_URL}${producto.imagen}`

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <article className="card producto-card h-100">
        <img
          src={rutaImagen}
          className="card-img-top"
          alt={`Portada referencial de ${producto.nombre}`}
        />

        <div className="card-body p-4">
          <span className="badge text-bg-primary align-self-start mb-2">{producto.plataforma}</span>
          <h3 className="h5 card-title fw-bold">{producto.nombre}</h3>
          <p className="small text-uppercase fw-bold text-secondary mb-2">{producto.categoria}</p>
          <p className="descripcion">{producto.descripcion}</p>

          <div className="precio-normal">{formatearPrecio(producto.precioNormal)}</div>
          <strong className="precio-oferta">{formatearPrecio(producto.precioOferta)}</strong>

          <button
            className={`btn mt-3 w-100 ${estaEnCarrito ? 'btn-success' : 'btn-primary'}`}
            type="button"
            onClick={() => onAgregar(producto)}
            disabled={estaEnCarrito}
          >
            {estaEnCarrito ? 'En el carrito' : 'Agregar al carrito'}
          </button>
        </div>
      </article>
    </div>
  )
}

export default ProductoCard
