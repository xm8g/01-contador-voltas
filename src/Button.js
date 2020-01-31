import React from 'react'

const Button = (props) => <button {...props}>{props.text}</button> /*Qualquer propriedade colocada no componente é replicada aqui no elemento HTML */

export default Button