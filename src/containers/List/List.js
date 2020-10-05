import React from 'react';


import ListComp from '../../components/List/List';


import { useStateValue } from '../../context/StateProvider';


const List = ( props ) => {
	
	const [{list}, dispatch ] = useStateValue();
	console.log(list,"licom");
	
	
	
	return (
	
	<>
					
			{list.map(item => (
			
			<ListComp 
			
			name={item.name}
			no={item.number}
			addr={item.addr}
			
			/>
			
			))}
			
			
	</>			
	);
}

export default List;