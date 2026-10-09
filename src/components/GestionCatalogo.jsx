import { useState } from 'react'

const imagenPorPlataforma = {
  PlayStation: 'img/fc26.svg',
  Nintendo: 'img/zelda.svg',
  Xbox: 'img/minecraft.svg',
  PC: 'img/gta.svg'
}

function GestionCatalogo({ productos, onAgregar, onEliminar }) {
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')
  const [plataforma, setPlataforma] = useState('PlayStation')
  const [precio, setPrecio] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [mensaje, setMensaje] = useState('')

  const agregar = (evento) => {
    evento.preventDefault()

    if (!nombre.trim() || !categoria.trim() || !descripcion.trim() || Number(precio) <= 0) {
      setMensaje('Completa los datos del videojuego antes de agregarlo.')
      return
    }

    // Se crea un objeto JavaScript y luego se envía al componente principal mediante props.
    const nuevoProducto = {
      id: Date.now(),
      nombre: nombre.trim(),
      categoria: categoria.trim(),
      plataforma,
      precioNormal: Number(precio),
      precioOferta: Number(precio),
      descripcion: descripcion.trim(),
      imagen: imagenPorPlataforma[plataforma]
    }

    onAgregar(nuevoProducto)
    setNombre('')
    setCategoria('')
    setPrecio('')
    setDescripcion('')
    setMensaje('Videojuego agregado al catálogo.')
  }

  return (
    <section id="gestion" className="py-5 bg-white border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <p className="text-primary text-uppercase fw-bold small mb-1">State y props</p>
            <h2 className="fw-bold">Gestión del catálogo</h2>
            <p className="text-secondary">
              Esta sección permite agregar o eliminar videojuegos y muestra cómo cambia el estado del catálogo en tiempo real.
            </p>

            <form className="card border-0 shadow-sm" onSubmit={agregar} noValidate>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="nuevoNombre">Nombre</label>
                  <input
                    id="nuevoNombre"
                    className="form-control"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                    placeholder="Ej: Hollow Knight"
                  />
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="nuevaCategoria">Categoría</label>
                    <input
                      id="nuevaCategoria"
                      className="form-control"
                      value={categoria}
                      onChange={(evento) => setCategoria(evento.target.value)}
                      placeholder="Aventura"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="nuevaPlataforma">Plataforma</label>
                    <select
                      id="nuevaPlataforma"
                      className="form-select"
                      value={plataforma}
                      onChange={(evento) => setPlataforma(evento.target.value)}
                    >
                      <option>PlayStation</option>
                      <option>Nintendo</option>
                      <option>Xbox</option>
                      <option>PC</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="form-label" htmlFor="nuevoPrecio">Precio</label>
                  <input
                    id="nuevoPrecio"
                    className="form-control"
                    type="number"
                    min="1"
                    value={precio}
                    onChange={(evento) => setPrecio(evento.target.value)}
                    placeholder="29990"
                  />
                </div>

                <div className="mt-3">
                  <label className="form-label" htmlFor="nuevaDescripcion">Descripción</label>
                  <textarea
                    id="nuevaDescripcion"
                    className="form-control"
                    rows="3"
                    value={descripcion}
                    onChange={(evento) => setDescripcion(evento.target.value)}
                    placeholder="Descripción corta del videojuego"
                  ></textarea>
                </div>

                {mensaje && <div className="alert alert-info py-2 mt-3 mb-0">{mensaje}</div>}

                <button className="btn btn-primary w-100 mt-3" type="submit">Agregar videojuego</button>
              </div>
            </form>
          </div>

          <div className="col-lg-7">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="h5 fw-bold mb-0">Productos actuales</h3>
              <span className="badge text-bg-dark">{productos.length} productos</span>
            </div>

            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="list-group list-group-flush">
                {productos.length === 0 ? (
                  <div className="list-group-item p-4 text-secondary">No quedan videojuegos en el catálogo.</div>
                ) : (
                  productos.map((producto) => (
                    <div
                      className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 p-3"
                      key={producto.id}
                    >
                      <div>
                        <strong>{producto.nombre}</strong>
                        <div className="small text-secondary">{producto.categoria} · {producto.plataforma}</div>
                      </div>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        type="button"
                        onClick={() => onEliminar(producto.id)}
                      >
                        Eliminar del catálogo
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GestionCatalogo
