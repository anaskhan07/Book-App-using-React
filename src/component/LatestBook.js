import React from 'react'
// import ReadMore from './OtherBooks'


function LatestBook(props) {
    return (
        <div className="card col-12">
            <div className='row'>
                <div className='text-center col-md-12'>
                    <a href={"/detail/" + props.bookid}>
                        <img src={props.image} className="card-img-top latestImg" alt="bg" />
                    </a>
                
                </div>

            </div>
            <div className="card-body row">
                <div className="col-12">
                    <h3 className="card-title"><b>Title : </b>{props.name}</h3>
                </div>
                <div className="col-12">
                    <h5 className="card-title"><b>Author : </b>{props.author}</h5>
                </div>
                {/* <div className="col-12">
                    <ReadMore>{props.description}</ReadMore>
                </div> */}
                <div className="col-12">
                    <h5 className="card-value"><b>Price : </b>Rs.{props.price}/-</h5>
                </div>
                <div className="col-12">
                    <h5 className="card-value"><b>Pages : </b>{props.pages}</h5>
                </div>
            </div>

        </div>

    )
}

export default LatestBook
