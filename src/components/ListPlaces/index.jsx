import React from 'react';
import PlaceLeft from '../PlaceLeft';
import PlaceRight from '../PlaceRight';
import '../../css/PlaceLeft.css';

function ListPlaces () {
        return (
            <>
            <p className="pCenter"><strong>Coming to visit us?</strong> Here are some of out favorite places around town to <select><option>A quiet place to read a book </option></select></p>
            <div className="row">
                <div className="col-12 col-md-6 pRight">
                    <h4 className="titleList">Mexico city</h4>
                    <PlaceLeft /> 
                </div>
                <div className="col-12 col-md-6 pLeft">
                    <h4 className="titleList">America us</h4>
                    <PlaceRight />
                </div>    
            </div>
            <div className="row">
                <div className="col-12 col-md-6 pRight">
                    <PlaceLeft />
                </div>
                <div className="col-12 col-md-6 pLeft">
                    <PlaceRight />
                </div>
            </div>
            </>
        );
    }

export default ListPlaces;