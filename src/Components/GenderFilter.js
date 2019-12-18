import React,{Component} from 'react';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const options  = [
			{ key: 'male', text: 'Male', value: 'Male' },{ key: 'female', text: 'Female', value: 'Female' },];

class GenderFilter extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {values:[]}
	}
	componentWillReceiveProps(props){
		let larr=[];
		for(var i=0;i<props.uniqGen.length;i++)
		{
			var ltemp = {};
			ltemp.key = props.uniqGen[i];
			ltemp.text = props.uniqGen[i];
			ltemp.value = props.uniqGen[i];
			larr.push(ltemp);
		}
		this.setState({values:larr})
	}
	render()
	{
		return(
			<Dropdown placeholder='Species' fluid multiple selection options={this.state.values} />
		)
	}
}

export default GenderFilter

