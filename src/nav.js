import React from 'react'
import {Link} from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                <Link to="/" className="btn btn-danger addbtn active">Add Data </Link>
                            </div>
                            <div className="btn-group mr-2" role="group" aria-label="Second group">
                                <Link to="/show" className="btn btn-danger showbtn">Show Data</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation