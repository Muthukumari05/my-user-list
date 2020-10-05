import React from 'react';

import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const ListComp = ( props ) => {
	return (
	
	<Jumbotron fluid>
				<Container>
					<h3>Welcome</h3>
						<p>Name:<strong>{props.name}</strong></p>
						<p>Number:<strong>{props.no}</strong></p>
						<p>Address:<strong>{props.addr}</strong></p>
			  </Container>
			</Jumbotron>
			
	
			);
}

export default ListComp;