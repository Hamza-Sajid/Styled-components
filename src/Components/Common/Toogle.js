import React from 'react';
import styled from 'styled-components';


const ToogleWrapper =styled.div`
width:50px;
min-width:50px;
height:35px;
margin:10px 1px 2px 4px;
border-radius:25px;
border:1px solid black;
display:flex;
background:black;

`
const Notch = styled.div`

height:21px;
width:21px;
border:1px solid #666;
background:white;
border-radius:50%;
margin-top:5px;
transition: transform 0.1s linear;
transform: translate(${p => p.isActive? '26px' : '1px'})

`
export default function Toggle({isActive})
{
    return(
        <div>
<ToogleWrapper>

<Notch/>

</ToogleWrapper>

        </div>
    )
}