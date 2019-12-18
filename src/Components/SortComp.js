import React,{Component} from 'react';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const options  = [
			{ key: 'desc', text: 'Descening', value: 'Descening' },{ key: 'asc', text: 'Ascending', value: 'Ascending' },];


class SortComp extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {values:[]}
	}
	handleChange = (e, { value }) => {
		debugger;
		if(value === "Ascending")
		{
			this.props.currentSel("DESC");
		}
		else{
			
			this.props.currentSel("ASC");
		}
	}
	render()
	{
		return(
			<Dropdown placeholder='Sort By' fluid selection onChange={this.handleChange} options={options} />
		)
	}
}

export default SortComp

