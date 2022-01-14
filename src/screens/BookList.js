import React, { useState } from 'react';
import axios from 'axios';
import LatestBook from '../component/LatestBook';
import OtherBooks from '../component/OtherBooks';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';




function BookList() {

    const [book, setBook] = useState("")
    const [latestbook, setLatestBook] = useState("")
    const [current, setCurrent] = useState(0)

    const latestBookURL = "https://floran-book-api.herokuapp.com/latest/"
    const otherBookURL = "https://floran-book-api.herokuapp.com/"

    const nextSlide = () => {
        setCurrent(current === latestbook.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? latestbook.length - 1 : current - 1)
    }

    React.useEffect(() => {
        axios.get(otherBookURL).then(
            (res) => {
                setBook(res.data.reverse());
            }
        ).catch(
            err => console.log(err)
        )

        axios.get(latestBookURL).then(
            (ress) => {
                setLatestBook(ress.data.reverse());
            }
        ).catch(
            error => console.log(error)
        )
    }, [])


    if (book && latestbook) {
        return (
            <div className="container mx-auto mt-5">
                <div className='row'>
                    <div className='col-12'>
                        <h1>Latest Books</h1>
                        <section className='slider'>
                            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                            <div className='row'>
                                {latestbook.map((slide, index) => {
                                    return (
                                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                            {index === current && (
                                                <LatestBook bookid={slide.id} name={slide.name} author={slide.author} description={slide.description} price={slide.price} pages={slide.pages} image={slide.cover} />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    {
                        book.map((value, index) => (
                            <OtherBooks bookid={value.id} name={value.name} author={value.author} description={value.description} price={value.price} pages={value.pages} image={value.cover} />
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return "Loading"
    }


}

export default BookList
