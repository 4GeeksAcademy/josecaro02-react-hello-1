import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Welcome from "./Welcome";
import Card from "./Card";
import Badge from "./Badge";

//create your first component
const Home = () => {

	let names = ['Adriela', 'Amanda', 'Eunice'];
	let cardInfo = [
		{title: 'Italia', info: 'Bacon ipsum dolor amet ball tip leberkas spare ribs pork loin. Tongue alcatra sirloin, pancetta strip steak buffalo jerky venison.'},
		{title: 'Costa Rica', info: 'Capicola filet mignon ribeye alcatra shoulder, pastrami t-bone chislic. Jowl corned beef cupim chislic flank'},
		{title: 'Colombia', info: 'Pork ground round ribeye, pork loin chuck strip steak boudin ham hock meatball fatback doner.'},
		{title: 'Ecuado', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsum. Voluptates soluta illum quisquam, corrupti nobis deleniti ea reiciendis excepturi velit necessitatibus voluptatibus id maiores, voluptatem distinctio tempora impedit expedita.'}		
	]

	let badges = [{heading:'Hello!', text:'new'}, {heading:'Adios!', text:'old'}]
	
	return (
		<>
			{
				names.map((value, index, array)=>{
					return <Welcome name={value} key={index}/>
				})
			}
			{
				cardInfo.map((value, index, array)=><Card title={value.title} info={value.info} key={index}/>)
			}
			{
				badges.map((value, index)=>{
					return <Badge heading={value.heading} text={value.text} number={'Hola'} key={index}/>
				})
			}
		</>
	);
};

export default Home;
