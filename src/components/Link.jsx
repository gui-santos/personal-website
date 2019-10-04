import styled from 'styled-components'

const Link = styled.a`
  font-size: 0.8rem;
  color: #ff006f;
  text-decoration: none;
  transition: color 0.5s ease-in-out;

  :hover {
    color: #ff00f1;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`

export default Link
