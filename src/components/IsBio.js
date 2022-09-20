import React from 'react';

function IsBio(props) {
const len=Object.keys(props).length;
console.log(`Length is `,len)

         if(len> 0){
    return <p>{props.bio}</p>
         }

     else return (NULL);

        }

export default IsBio;