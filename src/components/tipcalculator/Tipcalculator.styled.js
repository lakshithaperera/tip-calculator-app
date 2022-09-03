
import styled from "styled-components";

export const Container = styled.div`
 
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 100vh;
    @media (max-width: 728px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }

`


export const Logo = styled.svg`
position: relative;
width: 67px;
height: 34px;
margin-bottom: 60px;
@media (max-width: 728px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`
export const ContainerSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: ${({theme}) => theme.colors.whiteColor};
    padding: 30px;
    border-radius: 10px;
    gap: 30px;

  @media (max-width: 728px) {
    flex-direction: column;
  }
`

/***********Container-left-style****************/


export const ContainerLeftSection = styled.div`
    flex: 0.5;
    position: relative;
    width: 300px;
    @media (max-width: 728px) {
    width: 250px;
  }
    
    
`

export const H5 = styled.h5`
    font-size: 12px;
    color: ${({theme}) => theme.colors.primaryColor};
    margin-bottom: 5px;
`
export const InputContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 30px;
   width: 100%;
   
   
`
export const InputArea = styled.input`
    
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${({theme}) => theme.colors.inputAreaColor};
    padding: 6px 10px;
    border-radius: 5px;
    padding-left: 40px;
    width: 100%;
    color: ${({theme}) => theme.colors.primaryColor};
    transition: .04;
    cursor: pointer;
    outline: none;
    ::placeholder{
    color:  ${({theme}) => theme.colors.inputTextColor};
    font-size: 15px;
    opacity: .8;
    text-align: right;
   }
   :hover{
    outline: 2px solid ${({theme}) => theme.colors.primaryVeriantColor} ;
    color: ${({theme})  => theme.colors.primaryColor};
   }
` 
export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(29.33%, 1fr) );
    gap: 10px;
    margin-bottom: 30px;;
    @media (max-width: 728px) {
        grid-template-columns: repeat( auto-fit, minmax(33.33%, 1fr) );
  }
`

export const ButtonItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
    font-size: 16px;
    color: ${({theme}) => theme.colors.whiteColor};
    background: ${({theme}) => theme.colors.primaryColor};
    border: none;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
    :hover{
        background: ${({theme}) => theme.colors.primaryVeriantColor};
    }    
    

`

export const TipCustomInput = styled.input`
    padding: 5px 8px;
    background:  ${({theme}) => theme.colors.inputAreaColor};
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.primaryColor};
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    
    ::placeholder{
        opacity: 1;
        color: ${({theme}) => theme.colors.primaryColor}
    }
    :hover{
    outline: 2px solid ${({theme}) => theme.colors.primaryVeriantColor} ;
   }
   
`

/***********Container-right-style****************/


export const ContainerRightSection = styled.div`
    background: ${({theme}) => theme.colors.primaryColor};
    flex: 0.5;
    width: 300px;
    border-radius: 10px;
    padding: 20px;
    @media (max-width: 728px) {
    width: 250px;
  }
`
export const Main = styled.div`
  margin-bottom: 60px;
`

export const TipTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const TipText = styled.div`
  background: transparent;
`
export const WhiteH5 = styled.h5`
    color: ${({theme}) => theme.colors.whiteColor};
    font-size: 12px;
`
export const PersonText  = styled.h6`
    color: ${({theme}) => theme.colors.inputTextColor};
`

export const MainPriceContainer =  styled.div`
    display: flex;
    align-items: end;
    
    
`
export const MainPrice = styled.h1`
    color: ${({theme}) => theme.colors.primaryVeriantColor};
`
export const DollerIcon = styled.h2`
   color: ${({theme}) => theme.colors.primaryVeriantColor};
   font-size: 34px;
`

/************Rset button style******************/

export const  ResetButton = styled.button`
   width: 100%;
   padding: 7px 0;
   text-transform: uppercase;
   color: ${({theme}) => theme.colors.primaryColor};
   background: ${({theme}) => theme.colors.primaryVeriantColor};
   letter-spacing: 0.02em;
   border: none;
   border-radius: 5px;
   transition: 0.4s;
   cursor: pointer;
   :hover{
        background: ${({theme}) => theme.colors.inputAreaColor};
       
    }    
`

