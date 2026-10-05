import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Catalogo from './components/Catalogo.jsx'
import Carrito from './components/Carrito.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [plataforma, setPlataforma] = useState('Todas')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  // Carga el catálogo al iniciar la aplicación.
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch(`${import.meta.env.BASE_URL}productos.json`)

        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el archivo de productos')
        }

        const datos = await respuesta.json()
        setProductos(datos)
      } catch (errorCarga) {
        console.error(errorCarga)
        setError(true)
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [])

  const productosFiltrados = productos.filter((producto) => {
    const texto = busqueda.trim().toLowerCase()
    const coincideTexto =
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto) ||
      producto.plataforma.toLowerCase().includes(texto)

    const coincidePlataforma = plataforma === 'Todas' || producto.plataforma === plataforma

    return coincideTexto && coincidePlataforma
  })

  const agregarAlCarrito = (producto) => {
    const yaExiste = carrito.some((item) => item.id === producto.id)
    if (!yaExiste) {
      setCarrito([...carrito, producto])
    }
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const filtrarPlataforma = (nombre) => {
    setPlataforma(nombre)
    setBusqueda('')
  }

  const total = carrito.reduce((acumulado, item) => acumulado + item.precioOferta, 0)

  return (
    <>
      <Header cantidadCarrito={carrito.length} onFiltrar={filtrarPlataforma} />
      <main>
        <Hero />
        <Catalogo
          productos={productosFiltrados}
          carrito={carrito}
          busqueda={busqueda}
          plataforma={plataforma}
          cargando={cargando}
          error={error}
          onBusqueda={setBusqueda}
          onMostrarTodos={() => filtrarPlataforma('Todas')}
          onAgregar={agregarAlCarrito}
        />
        <Carrito
          carrito={carrito}
          total={total}
          onEliminar={eliminarDelCarrito}
          onVaciar={vaciarCarrito}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
