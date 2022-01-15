import React, { Component } from 'react';
import axios from 'axios';

export class BookDetail extends Component {

    state = {
        bookDetail : ""
    }

    h2Style = {
        margin: "0px 0px 0px"
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const url = `https://floran-book-api.herokuapp.com/${id}`

        const fetchBookDetail = () => {
            axios.get(url).then(
                (res) => {
                    this.setState({
                        bookDetail: res.data
                    })
                }
            ).catch(
                err => console.log(err)
            )
        }

        fetchBookDetail()
    }

    

    render() {

        let bookDetail = this.state.bookDetail
        if(!bookDetail) {
            return<h6>No Such Book</h6>
        } else {
            return (
                <div className='container mx-auto mt-5'>
                        <div className='row'>
                            <div className='col-6 text-center'>
                                <h3 className='detailHeader' style={this.h2Style}>{bookDetail.name}</h3>
                                <img className='latestImg' src={bookDetail.cover} alt='cover' />
                            </div>
                            <div className='col-6'>
                                <h4><b>Author : </b>{bookDetail.author}</h4>
                                <h4><b>Price : </b>Rs.{bookDetail.price}/-</h4>
                                <h4><b>Pages : </b>{bookDetail.pages}</h4>
                                <br/>
                                <br/>
                                <h6>{bookDetail.description}</h6>
                        </div>
                            
                            
                        </div>
                </div>
            )
        }
    }
}

export default BookDetail
