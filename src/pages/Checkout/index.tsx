import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barCode from '../../assets/images/barcode.png'
import creditCard from '../../assets/images/credit-card.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      cardCodeCVV: '',
      installments: 1
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caracteres'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      cpf: Yup.string()
        .required('CPF é obrigatório')
        .min(11, 'CPF deve ter no mínimo 14 caracteres')
        .max(14, 'CPF deve ter no máximo 14 caracteres'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'E-mail de entrega não confere')
        .required('E-mail de entrega é obrigatório'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema.required('Nome é obrigatório')
          : schema
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      cpfCardOwner: Yup.string()
        .required('CPF é obrigatório')
        .min(14, 'CPF deve ter no mínimo 14 caracteres')
        .max(14, 'CPF deve ter no máximo 14 caracteres'),
      cardDisplayName: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caracteres'),
      cardNumber: Yup.string()
        .required('Número do cartão é obrigatório')
        .min(16, 'Número do cartão deve ter no mínimo 16 caracteres')
        .max(16, 'Número do cartão deve ter no máximo 16 caracteres'),
      expirationMonth: Yup.string()
        .required('Mês de expiração é obrigatório')
        .min(2, 'Mês de expiração deve ter no mínimo 2 caracteres')
        .max(2, 'Mês de expiração deve ter no máximo 2 caracteres'),
      expirationYear: Yup.string()
        .required('Ano de expiração é obrigatório')
        .min(4, 'Ano de expiração deve ter no mínimo 4 caracteres')
        .max(4, 'Ano de expiração deve ter no máximo 4 caracteres'),
      cardCodeCVV: Yup.string()
        .required('CVV é obrigatório')
        .min(3, 'CVV deve ter no mínimo 3 caracteres')
        .max(3, 'CVV deve ter no máximo 3 caracteres'),
      installments: Yup.number()
        .required('Parcelamento é obrigatório')
        .min(1, 'Parcelamento deve ser maior que 0')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: '1',
            price: 0
          }
        ],
        billing: {
          name: values.name,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            number: values.cardNumber,
            code: Number(values.cardCodeCVV),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (
    fieldName: keyof typeof form.values,
    message?: string
  ) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }
  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido:
              <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação.
            </p>
            <p className="margin-top">
              Caso tenha alguma dúvida ou necessite de mais informações, por
              favor, entre em contato conosco através dos nossos canais de
              atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de Cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('name', form.errors.name)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('email', form.errors.email)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de Entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirmar E-mail</label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'confirmDeliveryEmail',
                      form.errors.confirmDeliveryEmail
                    )}
                  </small>
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={barCode} alt="Boleto" />
                Boleto Bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={creditCard} alt="Cartão" />
                Cartão de Crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row $marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardOwner">Nome do Titular</label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">CPF do Titular</label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cpfCardOwner',
                            form.errors.cpfCardOwner
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no Cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardDisplayName',
                            form.errors.cardDisplayName
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do Cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="123px">
                        <label htmlFor="expirationMonth">
                          Mês de Expiração
                        </label>
                        <input
                          type="text"
                          id="expirationMonth"
                          name="expirationMonth"
                          value={form.values.expirationMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'expirationMonth',
                            form.errors.expirationMonth
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="123px">
                        <label htmlFor="expirationYear">Ano de Expiração</label>
                        <input
                          type="text"
                          id="expirationYear"
                          name="expirationYear"
                          value={form.values.expirationYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'expirationYear',
                            form.errors.expirationYear
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="48px">
                        <label htmlFor="cardCodeCVV">CVV</label>
                        <input
                          type="text"
                          id="cardCodeCVV"
                          name="cardCodeCVV"
                          value={form.values.cardCodeCVV}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardCodeCVV',
                            form.errors.cardCodeCVV
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop="24px">
                      <S.InputGroup $maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        >
                          <option value="1">1x R$ 100,00</option>
                          <option value="2">2x R$ 50,00</option>
                          <option value="3">3x R$ 33,33</option>
                        </select>
                        {form.touched.installments &&
                          form.errors.installments && (
                            <small>{form.errors.installments}</small>
                          )}
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="button"
            onClick={form.handleSubmit}
            title="Clique aqui para finalizar compra"
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
