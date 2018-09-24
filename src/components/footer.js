import React from 'react'
import { Link } from 'gatsby'

const Footer = ({}) => (
    <div
        style={{
            background: 'blue',
            position:'fixed',

            bottom:'0px',
            width:'100%'


        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Home
                </Link>
            </h1>
            <Link
                to="/page-2"
                style={{
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                Page Two
            </Link>
            <br />
            <Link
                to="/page-3"
                style={{
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                Page Three
            </Link>
        </div>
    </div>
)

export default Footer
