import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Formik } from 'formik'
import { device } from '../utils/device'
import { FiCheckCircle } from 'react-icons/fi'
import Spinner from './Spinner'
import call from '../images/call.svg'
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
    width: 60%;
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
  top: 7px;
  left: 5px;
  transition: all 200ms ease-in-out;
`

const StyledInputName = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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

  @media ${device.tablet} {
    margin-bottom: 30px;
  }

  @media ${device.xl} {
    font-size: ${({ theme }) => theme.fontSize.m};
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
    cursor: pointer;
  }
`

const StyledButtonSuccess = styled(StyledButton)`
  position: absolute;
  background-color: #4bb543;
  border: 1px solid #4bb543;
  &:hover {
    background-color: #4bb543;
    border: 1px solid #4bb543;
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
    margin-top: 2px;
  }
  &:hover {
    color: white;
  }
`

const StyledCallContainer = styled.div`
  margin: 0 auto -40px auto;
  width: 80px;
  height: 80px;
  position: relative;
`

const StyledNumber = styled.a`
  width: 300px;
  position: absolute;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.medium};
  left: -50%;
  transition: transform 300ms 300ms ease-in-out;
  transform: translateY(${props => (props.toggle ? '25px' : '150px')});
`

const StyledCall = styled.div`
  margin: 0 auto -30px auto;
  width: 80px;
  height: 80px;
  background-image: url(${call});
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: 50% 50%;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  transition: all 300ms 300ms ease-in-out;
  position: absolute;
  transform: translateY(${props => (props.isvisible ? '-150px' : '0')});
  opacity: ${props => (props.isvisible ? '0' : '1')};

  :hover {
    cursor: pointer;
  }
`

const ContactForm = () => {
  const [state, setState] = useState(false)

  const handleCall = () => {
    setState(!state)
  }
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
              {isSubmitting ? <Spinner /> : 'submit'}
            </StyledButton>
          </form>
        )}
      </Formik>
      <Alternative>
        or email me directly:{' '}
        <AltEmail href="mailto: hi@mikem.io">hi@mikem.io</AltEmail>
      </Alternative>
      <StyledCallContainer onClick={handleCall}>
        <StyledCall isvisible={state} />
        <StyledNumber
          href="tel: 07510 200 320"
          toggle={state}
          onClick={handleCall}
        >
          07510 200 320
        </StyledNumber>
      </StyledCallContainer>
    </StyledFormContainer>
  )
}

export default ContactForm
