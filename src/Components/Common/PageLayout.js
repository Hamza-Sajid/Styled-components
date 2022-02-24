import React from "react";
import styled from 'styled-components';
import {Header} from './Header';

const Content = styled.main`
max-width: 800px;
margin: 80px auto 0 auto;
padding: 0 16px;

font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
background-color: blueviolet;
h1,h2,h3,h4,h5,h6
{
    font-family: 'Courier New', Courier, monospace;
}

`;

export function PageLayout({children})
{
    return(
        <>
        <Header/>
        <Content>
            {children}
        </Content>
        </>
    )
}