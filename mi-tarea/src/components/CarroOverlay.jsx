import "./Drawer.css"

export default function CarroOverlay({ isOpen, cerrarCarrito }) {
  return (
    <>
      {isOpen && <div className="overlay"></div>}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={cerrarCarrito}>
          ✕
        </button>
        <h2>Carrito</h2>
      </div>
    </>
  )
}
