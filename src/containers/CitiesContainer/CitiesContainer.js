import React, {Component} from 'react';
import axios from 'axios';
import CityList from '../../components/CityList/CityList';
import CityView from '../../components/CityView/CityView';
import Article from '../../components/Article/Article';


class CitiesContainer extends Component {

    state = {
        selectedCity: '',
        articleList: [],
        cityList: [],
        selectedCityObject: {},
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities/all`).then((res)=>{
            console.log(res)
            this.setState({cityList: res.data.data})
            this.getArticleList()
            
        }).catch((err)=>console.log(err));

        // let cityName = this.props.match.params.name;
        // let capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
        // this.setState({
        //     selectedCity: capitalizedName,
        // }, this.getArticleList())
    }

    handleSelect = (event) => {
        // event.preventDefault(); 
        console.log("changing selected city");
        this.setState({
            selectedCity: event.target.name,
        }, function() {this.getArticleList()})
    }

    getArticleList = () => {
        let cityName = this.props.match.params.name;
        let capitalizedName = '';
        if (cityName.split('-').length > 1) {
            let capitalizedNameList = [];
            cityName.split('-').forEach((word) => { 
                capitalizedNameList.push(word.charAt(0).toUpperCase() + word.slice(1));
            })
            capitalizedName = capitalizedNameList.join(' ');
        } else {
            capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
        }
        console.log("getting article list");
        axios.get(`${process.env.REACT_APP_API_URL}/posts/find?name=${capitalizedName}`, {
        // axios.get(`${process.env.REACT_APP_API_URL}/posts/find?name=${this.state.selectedCity}`, {
            withCredentials: true,
        }).then((res)=>{
            console.log(res)
            this.setState({articleList: res.data.data.sort((a, b) => (a.postDate < b.postDate) ? 1 : -1)})
        }).catch((err)=>console.log(err));
        let cityObject = this.state.cityList.filter(obj => {return obj.name === this.state.selectedCity})[0]
            this.setState({
                selectedCityObject: cityObject,
            })
    }

    render () {

        return (
            <>
                {/* {console.log(this.state.cityList.filter(obj => {return obj.name === this.state.selectedCity})[0])} */}
                {console.log(this.state.selectedCityObject)}
                <h1>Cities Container</h1>
                {this.state.cityList && <CityList cityList={this.state.cityList} handleSelect={this.handleSelect} getArticleList={this.getArticleList}/>}
                <div className="article-list">
                {console.log(this.state.articleList)}
                {console.log(this.state.cityList)}
                {console.log(this.state.selectedCity)}
                <CityView selectedCity={this.state.selectedCity} cityList={this.state.cityList} articleList={this.state.articleList}/>
                {this.state.articleList.length && this.state.articleList.map((article, index) => 
                    <Article article={article} index={index} />
                )}
                </div>
            </>
        )
    }

}

export default CitiesContainer;