import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';



import AddComp from '../../components/Add/Add';
import Loader from '../../components/Loader/Loader';



import { useStateValue } from '../../context/StateProvider';


const Add = ( props ) => {
	
	const [{list}, dispatch ] = useStateValue();
	
	const [ name, setName ] = useState('');
	const [ number, setNumber ] = useState('');
	const [ addr, setAddr ] = useState('');

	const [ nameEmpty, setNameEmpty ] = useState(false);
	const [ numberEmpty, setNumberEmpty ] = useState(false);
	
	
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ loader, setLoader ] = useState('');
	
	const history = useHistory();
	
	
	const nameHandler = ( event ) => {
		let name = event.target.value;
		
		setName(name);
		if( !name ) {
			setNameEmpty( true );
		}
		else {
			setNameEmpty(false);
		}
	}
		
	const numberHandler = ( event ) => {
		let number = event.target.value;
		setNumber( number );
		if( !number ) {
			setNumberEmpty( true );
		}
		else {
			setNumberEmpty(false);
		}
	}
	
	const addrHandler = ( event ) => {
		let addr = event.target.value;
		setAddr( addr );
		
	}
	
	
	
	const addHandler = ( event ) => {
		event.preventDefault();
		setLoader(true);
		
		
	const lists = {name, number, addr}
	alert(lists,"list")
		history.push('/list');
		dispatch({
			
					type: 'ON_SUBMIT',
					list: lists
				});
				
				 
		
	}
	
	
	
	
	
	return (
		<div>
			
			<AddComp 	name={name}
				   nameChanged={nameHandler}
				   nameEmpty={nameEmpty}	
				   number={number}
				   numberChanged={numberHandler}
				   numberEmpty={numberEmpty}
				   addr={addr}
				   addrChanged={addrHandler}
				   clicked={addHandler} 
				   errorMessage={errorMessage}	
					/>
					
			
		</div>
	);
}

export default Add;