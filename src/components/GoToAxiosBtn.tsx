import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { AXIOS_WEBSITE } from '../helpers/resourceConstants'

interface GoToAxiosBtnProps {}

const GoToAxiosBtn: FC<GoToAxiosBtnProps> = () => {
  return <AxiosBtn type="button">Visit Axios.com &#10230;</AxiosBtn>
}

const AxiosBtn = styled.button`
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  line-height: 1.25;
  transition-duration: 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
export default GoToAxiosBtn
