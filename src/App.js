import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
//import {robots} from './robots';
import './App.css'
import {connect} from 'react-redux';//kell a reduxhoz
import {setSearchField, doRequestRobots} from './actions';//amelyik action kell, azt beimportaljuk

//name anything:
//leszuri a state-t, es csak 1-2 dolgot ad at a jelenlegi komponensnek.
const mapStateToProps=state=>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//event handlereket is props -kent adja be a dolog
const mapDispatchToProps=(dispatch)=>{
    return {
        //az action-t hivja meg, az onKeresesmezoValtozast tovabbitja a setSearchField actionbe, mint event handlerbe
        onKeresesmezoValtozas: (event) => dispatch(setSearchField(event.target.value)), //just as onSearchChange    
        onRequestRobotok: () => dispatch(doRequestRobots())
    }
}

class App extends Component
{
    constructor()
    {
        super();
        //state-ben taroljuk a robot listajat, searchfield pedig valtozik most is
        this.state={
            robots: [],//ez a props-ban fog jonni vissza, ha redux thunk van hasznalva
        }
    }

    componentDidMount()
    {
        console.log("betoltesnel hivodik ez meg");
        this.props.onRequestRobotok();
    }

    render(){
        //itt ujrarendereleshez ujra alakitjuk a robotok listajat
        // !!! ezek a props-bol jonnek redux miatt, nem a state-bol
        const { searchField, onKeresesmezoValtozas, robots, isPending } = this.props;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        //lassu api toltesnel:
        if(isPending)
        {
            return <h1>Loading</h1>
        }

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onKeresesmezoValtozas}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

//mapStateToProps: melyik state darab erdekel,
//mapDispatchToProps: melyik action erdekel
//mindegyik props-kent megy be.
//connect a feliratkozashoz kell, a connect egy masik function-t ad vissza
export default connect(mapStateToProps, mapDispatchToProps)(App);