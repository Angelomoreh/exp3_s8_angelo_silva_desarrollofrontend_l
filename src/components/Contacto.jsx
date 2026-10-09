import { useState } from 'react'

function Contacto() {
  const [formulario, setFormulario] = useState({ nombre: '', email: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target
    setFormulario({ ...formulario, [name]: value })
    setEnviado(false)
  }

  const validar = () => {
    const nuevosErrores = {}

    if (formulario.nombre.trim().length < 2) {
      nuevosErrores.nombre = 'Ingresa tu nombre.'
    }

    if (!/^\S+@\S+\.\S+$/.test(formulario.email.trim())) {
      nuevosErrores.email = 'Ingresa un correo válido.'
    }

    if (formulario.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return nuevosErrores
  }

  const enviar = (evento) => {
    evento.preventDefault()
    const nuevosErrores = validar()
    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true)
      setFormulario({ nombre: '', email: '', mensaje: '' })
    }
  }

  return (
    <section id="contacto" className="py-5 contacto-section border-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-4">
              <p className="text-primary text-uppercase fw-bold small mb-1">Contacto</p>
              <h2 className="fw-bold">¿Necesitas ayuda?</h2>
              <p className="text-secondary mb-0">Envíanos un mensaje y revisaremos tu consulta.</p>
            </div>

            <form className="card border-0 shadow-sm" onSubmit={enviar} noValidate>
              <div className="card-body p-4 p-md-5">
                {enviado && (
                  <div className="alert alert-success" role="alert">
                    Mensaje enviado correctamente. Gracias por contactarnos.
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                      value={formulario.nombre}
                      onChange={actualizarCampo}
                      placeholder="Tu nombre"
                    />
                    {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                      value={formulario.email}
                      onChange={actualizarCampo}
                      placeholder="correo@ejemplo.cl"
                    />
                    {errores.email && <div className="invalid-feedback">{errores.email}</div>}
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                      value={formulario.mensaje}
                      onChange={actualizarCampo}
                      placeholder="Escribe tu consulta"
                    ></textarea>
                    {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
                  </div>
                </div>

                <button className="btn btn-primary mt-4 px-4" type="submit">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
