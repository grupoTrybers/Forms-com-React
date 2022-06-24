import React, { Component } from 'react'

export default class DivDados extends Component {
  render() {
    const { nome, email, cpf, endereco, cidade, estado, tipo, resumoC, cargo, descricao } = this.props.data
    return (
      <div className='data'>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: {nome}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {endereco}</div>
        <div> Cidade: {cidade}</div>
        <div> Estado: {estado}</div>
        <div> Tipo de residência: {tipo}</div>
        <h3>Profissional</h3>
        <div> Currículo: {resumoC}</div>
        <div> Cargo: {cargo}</div>
        <div> Descrição do cargo: {descricao}</div>
      </div>
    )
  }
}