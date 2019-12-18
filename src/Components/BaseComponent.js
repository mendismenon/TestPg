import React,{Component} from 'react';
import SpecieFilter from './SpecieFilter';
import GenderFilter from './GenderFilter';
import OriginFilter from './OriginFilter';
import SortComp from './SortComp';
import axios from 'axios';
import $ from 'jquery';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react';
import './index.css';


class BaseComponent extends Component {
	constructor(props)
	{
		super(props);
		this.state = {listData:[],uniqueSpecies:[],genderFilter:[],originFilter:[]};
	}
	componentDidMount()
	{
		//debugger;
		$('.divided ').find('.column:first').addClass("widthChng");
		$('.divided ').find('.column:last').addClass("widthChng75");
		this.getAllData();
	}
	getAllData = function(){
		axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
		 // debugger;
        const listData = res.data.results;
		let unqSpecies = [];
		let lgenderArr =[];
		let lorignArr = [];
		for(var i=0;i<listData.length;i++)
		{
			if(unqSpecies.indexOf(listData[i].species) == -1)
			{
				unqSpecies.push(listData[i].species);
			}
			if(lgenderArr.indexOf(listData[i].gender) == -1)
			{
				lgenderArr.push(listData[i].gender);
			}
			if(lorignArr.indexOf(listData[i].origin.name) == -1)
			{
				lorignArr.push(listData[i].origin.name);
			}
		}
		console.log(JSON.stringify(listData));
        this.setState({ listData:listData,uniqueSpecies:unqSpecies,genderFilter: lgenderArr,originFilter:lorignArr});
      })
	};
	currentSelSort =(key) => {
		let lval = this.state.listData;
		if(key == "ASC")
		{
			lval.sort(function(a,b){return  b[1] - a[1]});
			lval.reverse();
		}
		else{
			lval.sort(function(a,b){return     a[1] - b[1]});
			lval.reverse();
		}
		this.setState({listData:lval});
	}		
 render(){
	 return(
	 <div> 
	
     
    <Grid container columns={2} divided relaxed stackable> 
	<Grid.Column>
		 <Grid.Column>
			<Segment> Species <SpecieFilter uniqSpe={this.state.uniqueSpecies}/></Segment>
		  </Grid.Column>
		  <Grid.Column>
			<Segment> Gender <GenderFilter uniqGen={this.state.genderFilter} /></Segment>
		  </Grid.Column>
		   <Grid.Column>
			<Segment> Origin <OriginFilter orgnFlt={this.state.originFilter}/></Segment>
		  </Grid.Column> 
	  </Grid.Column> 
	
	
	<Grid.Column>
	<Segment>Sort by ID<SortComp currentSel={this.currentSelSort}/></Segment> </Grid.Column>
       
		 </Grid>
		 
		 
			
				
					<Grid container columns={4} divided relaxed stackable doubling>
					
						{
                            this.state.listData.map(data => {
                                return (
								
									<Grid.Column>
										<div>
											<img className="imgClass" src={data.image} />
										</div>
										<div>
											{data.name}
										</div>
										<div>
											<span className="fltLeft marLft">
											id: {data.id} </span>
											<span className="fltright marRgt">created : {data.created.split('T')[0]}</span>
										</div>
										<div>
											<span className="fltLeft marLft">
												Species : </span>
											<span className="fltright marRgt">{data.species} </span>
										</div>
										<div>
											<span className="fltLeft marLft">
												Gender : </span>
											<span className="fltright marRgt">{data.gender} </span>
										</div>
										<div>
											<span className="fltLeft marLft">
												Status : </span>
											<span className="fltright marRgt">{data.status} </span>
										</div>
										<div>
											<span className="fltLeft marLft">
												Origin : </span>
											<span className="fltright marRgt">{data.origin.name} </span>
										</div>
										<div>
											<span className="fltLeft marLft">
												Location : </span>
											<span className="fltright marRgt">{data.location.name} </span>
										</div>
									</Grid.Column>
								 
								)
							})
						}
					
					</Grid>
			
		
	 </div>
	 );
}
}

export default BaseComponent;
