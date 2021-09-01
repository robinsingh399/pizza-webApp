import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import './MainDisplay.css';
import {selectResults , selectCart} from '../features/pizzamenuDetails/pizzamenuDetailsSlice';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart} from '../features/pizzamenuDetails/pizzamenuDetailsSlice';
function MainDisplay() {
    const dispatch = useDispatch();
    const [finaldata,selectfinaldata] = useState([]);
    let {id} = useParams();
    if(!id){
        id = 1;
    }
    
    const recipe = useSelector(selectResults);
    const cart = useSelector(selectCart);
    useEffect(()=>{
        selectfinaldata(recipe.filter(a=>a.id==id));
    },[id]);
   

    const showAddOn = () =>{
     
        document.querySelector(".AddOns").style.display = "block";
    }

    const closeAddOn = () =>{
     
        document.querySelector(".AddOns").style.display = "none";
    }

    const addCart = ()=>{
        dispatch(addToCart({
            cart : finaldata
        }))
        closeAddOn();
    }

    return (
        <div className="MainDisplay">
            
            {finaldata.map((data,index)=>(
                <div key={index}>
                    <div className="display_img">
                        <img className="display_imgUrl" src={data.img_url}/>
                    </div>
                    <div className="display_name">
                        <h5>{data.name}</h5>
                        </div>
                        <div className="display_description">
                            <p>{data.description}</p>
                            </div>
                            <div className="display_ratings">
                            {
                            Array(Math.floor(data.rating)).fill().map((_,i)=>(
                            <span className="fa fa-star checked"></span>
                            ))}
                                </div>
                                <div className="display_ratings">
                                    <p>Rs.{data.price}</p>
                                    </div>
                                    <div className="display_ratings">
                                        <p>{data.isVeg?"Veg":"NonVeg"}</p>
                                        </div>
                                        <div className="display_ratings">
                                            <button onClick={showAddOn} className="display_button">-AddOn+</button>
                                            </div>
                </div>
                
            ))}
            <div className="AddOns">
                <div style={{display:"flex" ,backgroundColor:"black", alignItems: "center" , justifyContent: "flex-end"}}>
                    <button className="closeButton" onClick={closeAddOn} style={{backgroundColor:"gray" , fontWeight:"bolder"}}>X</button>
                </div>
                <div className="selectSize">
                <label>Select Size:-</label>
                </div>
                    <div>
                        {finaldata.map((data,index)=>(
                            <div>
                            {data.size.map((d,i)=>(
                                    <div className="sizes">
                                        {d.items.map((dt,indexes)=>(
                                            <div style={{display:"flex",alignItems: "center"}}>
                                                <input type="radio" name="sizes" value={dt.size} id="myRadio"></input>
                                                <h5>{dt.size}</h5>
                                                </div>
                                        ))}
                                        </div>
                            ))}
                                <div className="selectSize">
                                    <label>Select Toppings:-</label>
                                    </div>
                                    {data.toppings.map((d,i)=>(
                                    <div className="sizes">
                                        {d.items.map((dt,indexes)=>(
                                            <div style={{display:"flex",alignItems: "center"}}>
                                                <input type="radio" name="toppings" value={dt.size} id="myRadio"></input>
                                                <h5>{dt.name}</h5>
                                                </div>
                                        ))}
                                        </div>
                                    ))}
                                </div>
                        ))}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'flex-end'}}>
                        <button onClick={addCart} className="cartButton" style={{backgroundColor: 'gray' , height: '30px' , fontWeight: 'bolder'}}>Add to Cart</button>
                    </div>
                    
            </div>
        </div>
    )
}

export default MainDisplay;
