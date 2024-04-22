import { PropsWithChildren } from "react"

export function H1(props: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  )
}

export function H2(props: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  )
}

export function H3(props: PropsWithChildren) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  )
}

export function H4(props: PropsWithChildren) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  )
}

export function Paragraph(props: PropsWithChildren) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {props.children}
    </p>
  )
}


