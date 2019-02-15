import React from 'react'
import menu from '../menu'
import "./DinnerMenu.css"


function DinnerMenu (){
console.log(menu)
    return(
        <React.Fragment>
            <h1 className = "menu-dinner-heading">DINNER</h1>

            <h1 className="menu-selection-heading"> ANTIPASTI</h1>
            <div className="menu-list-container" >
                <ul className="menu-list-content">{menu[0].dinner.antipasti.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>


                <ul className="menu-list-prices">{menu[0].dinner.antipasti_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
            
            <h1 className="menu-selection-heading">INSALATE</h1>
            <div className="menu-list-container">    
                <ul className="menu-list-content">{menu[0].dinner.insalate.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul className="menu-list-prices">{menu[0].dinner.insalate_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
            
            
            <h1 className="menu-selection-heading">PASTA</h1>
            <div className="menu-list-container">
                <ul className="menu-list-content">{menu[0].dinner.pasta.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul className="menu-list-prices">{menu[0].dinner.pasta_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
            
            <h1 className="menu-selection-heading">SECONDI</h1>
            <div className="menu-list-container">
                <ul className="menu-list-content">{menu[0].dinner.secondi.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul className="menu-list-prices">{menu[0].dinner.secondi_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>

            <h1 className="menu-selection-heading">CONTORNI</h1>
            <div className="menu-list-container">
                <ul className="menu-list-content">{menu[0].dinner.contorni.map((item)=>{
                    return <li key={item}> {item}</li>
                })}
                </ul>

                <ul className="menu-list-prices">{menu[0].dinner.contorni_Prices.map((item)=>{
                    return <li key={item.indexOf}> {item}</li>
                })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default DinnerMenu