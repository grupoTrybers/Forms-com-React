import React, { Component } from 'react'
import BtnDiv from './BtnDiv'
import Cargo from './Cargo'
import Cidade from './Cidade'
import Cpf from './Cpf'
import DescricaoC from './DescricaoC'
import Email from './Email'
import Endereco from './Endereco'
import Estado from './Estado'
import Nome from './Nome'
import ResumoC from './ResumoC'
import Tipo from './Tipo'
import DivDados from './DivDados'
import BtnReset from './BtnReset'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      resumoC: '',
      cargo: '',
      alert: '',
      descricao: '',
      data: '',
      renderdiv: false
    }
  }
  upperCase = ({ target }) => {
    this.setState({ nome: target.value.toUpperCase() })

  }

  stateS = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })

  }

  caracter = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '') })

  }

  onBlur = ({ target }) => {
    const { name } = target
    if (!isNaN(this.state.cidade[0])) this.setState({ [name]: '' })


  }

  onMouse = () => {
    if (this.state.alert === 0) {
      alert('Preencha com cuidado esta informação.')
      this.setState({ alert: 1 })
    }
  }

  dados = () => {
    this.setState({ data: this.state })
    const { nome, email, cpf, endereco, cidade, estado, tipo, resumoC, cargo, descricao } = this.state
    if (nome !== '' && email !== '' && cpf !== '' && endereco !== '' && cidade !== '' && estado !== '' && tipo !== '' && resumoC !== '' && cargo !== '' && descricao !== '') {
      this.setState({ renderdiv: true })
    }
  }

  reset = () => {
    const arr = Object.keys(this.state)
    arr.forEach((item) => {
      item === 'renderdiv' ? this.setState({ [item]: false }) : this.setState({ [item]: '' })
    })
  }

  render() {
    return (
      <>
        <h1>Forms</h1>
        {this.state.renderdiv ?
          <DivDados data={this.state.data} /> :
          <form>
            <fieldset>
              <Nome value={this.state.nome} func={this.upperCase} />
              <Email value={this.state.email} func={this.stateS} />
              <Cpf value={this.state.cpf} func={this.stateS} />
              <Endereco value={this.state.endereco} func={this.caracter} />
              <Cidade value={this.state.cidade} funcBlur={this.onBlur} func={this.stateS} />
              <Estado value={this.state.estado} func={this.stateS} />
              <Tipo func={this.stateS} />
            </fieldset>
            <fieldset>
              <ResumoC value={this.state.resumoC} func={this.stateS} />
              <Cargo value={this.state.cargo} func={this.stateS} onMouse={this.onMouse} />
              <DescricaoC value={this.state.descricao} func={this.stateS} />
            </fieldset>
          </form>
        }
        <div>
          <BtnDiv func={this.dados} />
          <BtnReset
            func={this.reset}
          />
        </div>

      </>
    )
  }
}
