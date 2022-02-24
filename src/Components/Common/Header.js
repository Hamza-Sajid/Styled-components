import React,{useState} from "react";
import Styled from 'styled-components';
import {Link as ReactRouterDomLink} from 'react-router-dom';
import Toogle from './Toogle';

const HeaderWrapper = Styled.header`
height:60px;
width: 100%;
display:flex;
position: fixed,
top:0;
background: yellow;
`;

const Menu = Styled.nav`
display:${p => p.open ? 'block' : 'none'};
width: 100%;
height: 60px;
background: GREEN;
position: absolute;
padding: 8px;
top: 60px;
left: 0;
box-sizing:border-box;
border-bottom: 3px solid pink;

@media(min-width: 768px)
{
    display: flex;
    position: relative;
width: initial;
border-bottom:none;
margin: auto 0 auto auto;
background: none;
left:initial;
top: initial;
}
`;

const Linked = Styled.li`

list-style-type: none;
text-decoration:none;
font-size:1.5em;
margin:1px 42px 3px 4px;

`;


const StyledLink = Styled(Linked)`
padding: 4px 8px;
display: block;
text-align:center;
margin:auto 0;
`

const Link = ({isActive, children , ...props})=>
{
    return(

        <ReactRouterDomLink {...props}>
            {props}
        </ReactRouterDomLink>
    )
}

const MobileMenuIcon = Styled.div`

    margin:auto 0 auto auto;
    width:25;
    min-width:25px;
    padding:5px;
    position:absolute;
    right:0;
    
    background:green;
    border: 1px solid green;
    border-radius:5px;
    margin:4px;
    display: block;
    margin:5px 50px 10px 10px;

    >div
    {
        height:3px;
        display:block;
        background:white;
        margin:5px 0;
        width:100%;
        
    }

`

export function Header()
{
    const [menuOpen, setMenuOpen]=useState(false);
    return(
     
    <HeaderWrapper>        
        <MobileMenuIcon onClick={()=> setMenuOpen(s => !s )}>

            <div/>
            <div/>
            <div/>
        </MobileMenuIcon>
        <Menu open={menuOpen}>
        <Linked>
        
        <ReactRouterDomLink to="/">
            Home
        </ReactRouterDomLink>
        
        <ReactRouterDomLink to="/login">
            Login
        </ReactRouterDomLink>
        
        </Linked>
        </Menu>
        <Toogle/>
        </HeaderWrapper>
    )
}



