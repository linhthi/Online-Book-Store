import React from 'react';

function Slider() {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://raw.githubusercontent.com/linhthi/SE-INT2208/master/book1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://raw.githubusercontent.com/linhthi/SE-INT2208/master/book.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="http://i.huffpost.com/gen/1811926/images/o-BOOKS-facebook.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Slider;
