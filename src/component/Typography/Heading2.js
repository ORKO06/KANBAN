import './Heading2.css'

const Heading2 = ({children , classes }) => {
  return (
    <h1 className={`Typography-Heading-2 ${classes}`}>{children}</h1>
  )
}

export default Heading2;