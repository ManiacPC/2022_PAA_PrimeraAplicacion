import React, { useState, useEffect } from 'react'

const Login = () => {
    // espacio para variables de estado
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [recordar, setRecordar] = useState(false)

    // espacio para funciones
    // function handleClickLogin(evento) { ... }
    const handleClickRecordarme = (evento) => {
        setRecordar(!recordar)
    }

    const handleUsuario = (evento) => {
        // desde donde se saca el texto del input?
        // evento.target.value
        setUsuario(evento.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {/* input usuario */}
                    <label htmlFor="usuario">Usuario</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input
                            id="usuario"
                            value={usuario}
                            onChange={handleUsuario}
                            type="text"
                            className="form-control"
                            placeholder="Ingrese su usuario"
                        />
                    </div>

                    {/* input contraseña */}
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">#</span>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>

                    {/* input recordarme */}
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="recordar"
                            checked={recordar}
                            onClick={handleClickRecordarme}
                        />
                        <label className="form-check-label" htmlFor="recordar">
                             Recordarme
                        </label>
                    </div>

                    {/* button iniciar sesión */}
                    <button type="button" className="btn btn-primary">
                        Iniciar sesión
                    </button>

                </div>
            </div>
        </>
    )
}

export default Login