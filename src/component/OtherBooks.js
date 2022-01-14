import React from 'react'


const ReadMore = ({ children }) => {
    const text = children;
    if(text){
        var sliced= text.slice(0,150)
    } else {
        sliced = "None"
    }
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        <p className='text'>
            {isReadMore ? sliced : text}
            <span onClick={toggleReadMore} className='read-or-hide'>
                {isReadMore ? "...read more" : "show less"}
            </span>
        </p>
    );
}

function OtherBooks(props) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
                <a href={"/detail/" + props.bookid}>
                    <img src={props.image} className="card-img-top" alt="bg" />
                </a>
                <div className="card-body col">
                    <div className="row-12">
                        <h3 className="card-title"><b>Title : </b>{props.name}</h3>
                    </div>
                    <div className="row-12">
                        <h3 className="card-title"><b>Author : </b>{props.author}</h3>
                    </div>
                    <div className="row-12">
                        <ReadMore>{props.description}</ReadMore>
                    </div>
                    <div className="row-12">
                        <h3 className="card-value"><b>Price : </b>Rs.{props.price}/-</h3>
                    </div>
                    <div className="row-12">
                        <h3 className="card-value"><b>Pages : </b>{props.pages}</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default OtherBooks
