import React from 'react'
import '../Style.css'

import TextField from '@mui/material/TextField';


class CitySearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {searchInputValue: ""}
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInputValue)
        
    }

    render() {
        return(
            
            <form className="search-loaction" onSubmit={this.onFormSubmit}>
            <center><TextField id="outlined-basic" label="Enter the City Here!!!" variant="outlined" style={{width:'1100px',marginTop:"-19px", WebkitTextFillColor:'white'}}
             type="text"
             name="city"
             
             onChange={(event) => this.setState({searchInputValue: event.target.value})}
            /></center>
        </form>
        
        )
    }
}

export default CitySearch;