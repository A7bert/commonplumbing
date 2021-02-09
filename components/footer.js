import styled from 'styled-components'

const FooterSection = styled.div`
    height: 60px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Footer = () => {
    return (
        <FooterSection>
            <p>Next 2021 all rights reserved</p>
        </FooterSection>
    )
}

export default Footer
