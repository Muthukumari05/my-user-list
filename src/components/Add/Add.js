import React from 'react';
import { Link } from 'react-router-dom';


import './Add.css';


const AddComp = (props) => {
	
		return (
		<div className="add">
			<div className="add__form">
			  <form>
				<div className="add__title">
				     <Link className="add__link" to="/">Ezee Housing</Link>
				 </div> 
				<div>
					<input type="text" 
						placeholder="User Name"
						className="add__input"
						value={ props.name}
						onChange={ props.nameChanged }	
						/>
					{ props.nameEmpty ? <p className="error">Enter Your Name</p> : null  }	
				</div>
				<div>
					<input type="number"
						placeholder="Phone number"
						className="add__input"
						value={props.number}
						onChange={ props.numberChanged }
						/>
					{ props.numberEmpty ? <p className="error">Enter your Phone number</p> : null  }	
				</div>
				<div>
					<input type="text"
						placeholder="Address"
						className="add__input"
						value={props.addr}
						onChange={ props.addrChanged }
						/>
					{ props.addrEmpty ? <p className="error">Enter your Address</p> : null  }	
				</div>	
			    
			    
				<button className="add__button" onClick={props.clicked}>Add</button>
							 </form>
			<div className="add__error">{props.errorMessage}</div>
		  </div> 
		</div>
	);
}

export default AddComp;