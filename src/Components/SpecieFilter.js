import React,{Component} from 'react';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



class SpecieFilter extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {values:[],selectedVal:[]}
	}
	selVal = (e, { value }) => {
		debugger;
	}
	componentWillReceiveProps(props){
		let larr=[];
		for(var i=0;i<props.uniqSpe.length;i++)
		{
			var ltemp = {};
			ltemp.key = props.uniqSpe[i];
			ltemp.text = props.uniqSpe[i];
			ltemp.value = props.uniqSpe[i];
			larr.push(ltemp);
		}
		this.setState({values:larr})
	}
	render()
	{
		return(
			<Dropdown placeholder='Species' fluid multiple selection={this.selVal} options={this.state.values} />
		)
	}
}
export default SpecieFilter

