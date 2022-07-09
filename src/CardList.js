import React from 'react';
import Card from './Card';

const CardList=({robots})=>
{
    //ez is eleg a returnbe {cardComponent} -kent
    /*
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    */

    const cardComponent=robots.map((user,i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    function CreateCard(i){
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    }
    let ArrayCard=[];
    console.log("robots.length: "+robots.length);
    for(var robotnum=0;robotnum<robots.length;robotnum++){
        ArrayCard.push(CreateCard(robotnum));
    }
    return (
        <div>

            {ArrayCard}
            <br></br>
            <p>Masodik lista:</p>
            {cardComponent}

        </div>
    );
}

export default CardList;
