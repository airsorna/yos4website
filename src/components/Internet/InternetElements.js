import styled from 'styled-components'

export const InternetContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#000')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InternetWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1060px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const InternetH1 = styled.h1`
margin-bottom: 4px;
font-size: 48px;
line-height: 10.1;
font-weight: 600;
@media screen and (max-width: 80px) {
    font-size: 32px;
}
`