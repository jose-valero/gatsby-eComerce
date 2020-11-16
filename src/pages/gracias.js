import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="compra exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu Swang</p>
        <p>Te esperamos de regreso NPDA</p>
        <span role="img" aria-label="emoji">
          💗
        </span>
        <Link to="/">
          <Button>Volver Al Catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
