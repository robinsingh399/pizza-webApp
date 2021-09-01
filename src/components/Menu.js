import React,{useEffect,useState} from 'react'
import './Menu.css';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {selectResults} from '../features/pizzamenuDetails/pizzamenuDetailsSlice';
import {setResults} from '../features/pizzamenuDetails/pizzamenuDetailsSlice';
import ImportExportIcon from '@material-ui/icons/ImportExport';
function Menu() {

    const dispatch = useDispatch();
    const[final,setfinal] = useState([]);
    let Results = useSelector(selectResults);

    useEffect(() =>{

        async function getData(){
            const res = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
            const data = await res.json();
            if(data){
                setfinal(data);
            }
           dispatch(setResults({
               result : data
           }));
        }
        getData();
       
    },[]);
   
    const PriceSort = ()=>{
          
        setfinal(final.slice().sort((a, b) => b.price - a.price));
        
    }   

    const RatingSort = ()=>{
          
        setfinal(final.slice().sort((a, b) => b.rating - a.rating));
        
    } 

    const VegSort=()=>{
        setfinal(final.filter(w=>w.isVeg==true));
    }

    const NonVegSort=()=>{
        setfinal(final.filter(w=>w.isVeg==false));
    }

    return (
        <div className="menu">
            
            <div style={{display:"flex",flexDirection:"column",alignItems:"stretch"}}>
            {final.map((data,index)=>(
                <Link key={index} className="preview_link" to={`/detail/`+data.id}>
                <div  className="preview">
                    
                    <div className="preview__fig">
                    <img src={data.img_url}/>
                    </div>
                    <div className="preview__name">
                    <h4>{data.name}</h4>
                    </div>
                    
                </div>
                </Link> 
            ))}
            </div>
            <div className="sortIcons">
            <div className="sortButton">
                <button onClick={PriceSort}><span><ImportExportIcon/></span>Price</button>
            </div>
            <div className="sortButton">
                <button onClick={RatingSort}><span><ImportExportIcon/></span>Rating</button>
            </div>
            <div className="sortButton">
                <button onClick={VegSort}><span><ImportExportIcon/></span>Veg</button>
            </div>
            <div className="sortButton">
                <button onClick={NonVegSort}><span><ImportExportIcon/></span>NonVeg</button>
            </div>
            </div>
        </div>
    )
}

export default Menu
