import React,{Component} from 'react';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const options  = [
			{ key: 'earth', text: 'earth', value: 'earth' },{ key: 'unknown', text: 'unknown', value: 'unknown' },];

class OriginFilter extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {values:[]}
	}
	componentWillReceiveProps(props){
		let larr=[];
		for(var i=0;i<props.orgnFlt.length;i++)
		{
			var ltemp = {};
			ltemp.key = props.orgnFlt[i];
			ltemp.text = props.orgnFlt[i];
			ltemp.value = props.orgnFlt[i];
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


export default OriginFilter

