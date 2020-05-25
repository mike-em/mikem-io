import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Formik } from 'formik'
import { device } from '../utils/device'
import { FiCheckCircle } from 'react-icons/fi'
import axios from 'axios'

const fadeOutAnimation = props => keyframes`
  0% {
    /* opacity: 1; */
    visibility: visible;
  }
  100% {
    /* opacity: 0; */
    visibility: hidden;
  }
`

const StyledFormContainer = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${device.xl} {
    width: 80%;
    margin: 0 auto;
  }
`

const StyledFormGroup = styled.label`
  position: relative;
  display: block;
  margin-bottom: 35px;
`

const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  position: absolute;
  top: 8px;
  left: 5px;
  transition: all 200ms ease-in-out;
  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSize.l};
    top: 0;
  }
`

const StyledInputName = styled.input`
  border: none;
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  background-color: ${({ theme }) => theme.color.mainWhite};
  display: block;
  width: 100%;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  padding: 5px;
  &:required {
    box-shadow: none;
  }
  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  :focus {
    outline: none;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    &:focus + ${Label}, &:valid + ${Label} {
      transform: translate(-5px, -30px) scale(0.8);
      color: ${({ theme }) => theme.color.primary};
    }
  }
  ${({ value }) =>
    value !== '' &&
    css`
      border: 1px solid ${({ theme }) => theme.color.primary};
      &:focus + ${Label}, &:valid + ${Label} {
        transform: translate(-5px, -30px) scale(0.8);
        color: ${({ theme }) => theme.color.primary};
      }
    `}
`

const StyledInputEmail = styled.input`
  border: none;
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  background-color: ${({ theme }) => theme.color.mainWhite};
  display: block;
  width: 100%;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  padding: 5px;
  &:required {
    box-shadow: none;
  }
  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  :focus {
    outline: none;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    &:focus + ${Label}, &:valid + ${Label} {
      transform: translate(-5px, -30px) scale(0.8);
      color: ${({ theme }) => theme.color.primary};
    }
  }
  ${({ value }) =>
    value !== '' &&
    css`
      border: 1px solid ${({ theme }) => theme.color.primary};
      &:focus + ${Label}, &:valid + ${Label} {
        transform: translate(-5px, -30px) scale(0.8);
        color: ${({ theme }) => theme.color.primary};
      }
    `}
`

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  background-color: ${({ theme }) => theme.color.mainWhite};
  border-radius: 5px;
  margin-top: 35px;
  margin-bottom: -10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Montserrat', sans-serif;
  box-shadow: none;
  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`

const Alternative = styled.p`
  margin-top: 30px;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.color.black};
  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`

const AltEmail = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
`

const StyledButton = styled.button`
  width: 130px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  background-color: transparent;
  font-size: 1.6rem;
  font-family: 'Montserrat';
  transition: all 300ms ease-in-out;
  color: ${({ theme }) => theme.color.primary};
  letter-spacing: 2px;

  @media ${device.smallMobile} {
    width: 150px;
    height: 48px;
    font-size: 1.8rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }
`

const StyledButtonSuccess = styled(StyledButton)`
  position: absolute;
  background-color: #4bb543;
  border: 1px solid #4bb543;
  &:hover {
    background-color: #4bb543;
  }
  ${({ isvisible }) =>
    isvisible &&
    css`
      animation: ${p => fadeOutAnimation(p)} 3000ms;
      -webkit-animation-fill-mode: forwards;
    `};
`

const StyledCheck = styled(FiCheckCircle)`
  margin: 0;
  padding: 0;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.l};
  top: 3px;
  position: relative;
  color: white;
  @media ${device.xl} {
    margin-top: 6px;
  }
  &:hover {
    color: white;
  }
`

const ContactForm = () => {
  return (
    <StyledFormContainer>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          axios
            .post(
              'https://us-central1-mikem-contact-form.cloudfunctions.net/sendEmail',
              values
            )
            .then(res => {
              resetForm({})
              setStatus(true)
              setSubmitting(false)
            })
            .catch(err => {
              console.log(err)
              setSubmitting(false)
            })
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          status,
        }) => (
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <StyledFormGroup>
              <StyledInputName
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                autoComplete="value"
                required
              />
              <Label>Name</Label>
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledInputEmail
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoComplete="value"
                required
              />
              <Label>Email</Label>
            </StyledFormGroup>
            <StyledFormGroup>
              <Label>Message</Label>
              <StyledTextarea
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                required
              />
            </StyledFormGroup>
            {status && (
              <StyledButtonSuccess isvisible={true}>
                <StyledCheck />
              </StyledButtonSuccess>
            )}
            <StyledButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'sending...' : 'submit'}
            </StyledButton>
          </form>
        )}
      </Formik>
      <Alternative>
        or email me directly:{' '}
        <AltEmail href="mailto: hi@mikem.io">hi@mikem.io</AltEmail>
      </Alternative>
    </StyledFormContainer>
  )
}

export default ContactForm
