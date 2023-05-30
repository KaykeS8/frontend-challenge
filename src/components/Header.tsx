"use client"

import { Saira_Stencil_One } from "next/font/google"
import styled from "styled-components"
import { PrimaryInput, PrimaryInputSearchIcon } from "./Primary-input"

interface HeaderProps { }

const SairaStencilOne = Saira_Stencil_One({ subsets: ['latin'], weight: ['400'] })

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={SairaStencilOne.className}>Caputteeno</Logo>
      <PrimaryInputSearchIcon placeholder="Procurando por algo especifico?" />
    </TagHeader>
  )
}