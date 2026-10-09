import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Catalogo from './components/Catalogo.jsx'
import Carrito from './components/Carrito.jsx'
import GestionCatalogo from './components/GestionCatalogo.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  // Carga inicial del catálogo desde un archivo JSON.
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

  const categorias = useMemo(() => {
    const lista = productos.map((producto) => producto.categoria)
    return ['Todas', ...new Set(lista)]
  }, [productos])

  const productosFiltrados = productos.filter((producto) => {
    const texto = busqueda.trim().toLowerCase()

    const coincideTexto =
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto) ||
      producto.plataforma.toLowerCase().includes(texto)

    const coincideCategoria = categoria === 'Todas' || producto.categoria === categoria

    return coincideTexto && coincideCategoria
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

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto])
    setCategoria('Todas')
    setBusqueda('')
  }

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id))
    setCarrito(carrito.filter((producto) => producto.id !== id))
  }

  const total = carrito.reduce((acumulado, item) => acumulado + item.precioOferta, 0)

  return (
    <>
      <Header cantidadCarrito={carrito.length} />

      <main>
        <Hero />

        <Catalogo
          productos={productosFiltrados}
          carrito={carrito}
          categorias={categorias}
          categoria={categoria}
          busqueda={busqueda}
          cargando={cargando}
          error={error}
          onBusqueda={setBusqueda}
          onCategoria={setCategoria}
          onAgregar={agregarAlCarrito}
          onLimpiarFiltros={() => {
            setBusqueda('')
            setCategoria('Todas')
          }}
        />

        <Carrito
          carrito={carrito}
          total={total}
          onEliminar={eliminarDelCarrito}
          onVaciar={vaciarCarrito}
        />

        <GestionCatalogo
          productos={productos}
          onAgregar={agregarProducto}
          onEliminar={eliminarProducto}
        />

        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default App
