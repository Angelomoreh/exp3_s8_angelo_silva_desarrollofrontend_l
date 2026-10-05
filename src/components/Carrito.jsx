const formatearPrecio = (valor) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(valor)

function Carrito({ carrito, total, onEliminar, onVaciar }) {
  return (
    <section id="carrito" className="py-5 bg-light border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <p className="text-primary text-uppercase fw-bold small mb-1">Estado del carrito</p>
            <h2 className="fw-bold">Resumen del carrito</h2>

            {carrito.length === 0 ? (
              <div className="alert alert-secondary mt-4">
                El carrito está vacío. Agrega un videojuego para comenzar.
              </div>
            ) : (
              <div className="card border-0 shadow-sm mt-4">
                <div className="card-body p-0">
                  {carrito.map((item) => (
                    <div className="item-carrito d-flex justify-content-between align-items-center gap-3 p-3" key={item.id}>
                      <div>
                        <h3 className="h6 fw-bold mb-1">{item.nombre}</h3>
                        <p className="small text-secondary mb-0">{item.plataforma}</p>
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <strong>{formatearPrecio(item.precioOferta)}</strong>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => onEliminar(item.id)}>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm resumen-compra">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold">Total de compra</h3>
                <div className="d-flex justify-content-between mt-4">
                  <span>Productos</span>
                  <strong>{carrito.length}</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span>Total</span>
                  <strong className="fs-4">{formatearPrecio(total)}</strong>
                </div>
                <button
                  className="btn btn-outline-danger w-100 mt-4"
                  type="button"
                  onClick={onVaciar}
                  disabled={carrito.length === 0}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrito
