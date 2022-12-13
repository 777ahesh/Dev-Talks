import React, { Component } from "react";

export default class Dev extends Component {
   

  render() {
    let {title, description, imageUrl, newsUrl,author, date} = this.props
    return (
      <>
        <div className="card my-3">
          <img className="card-img-top" src={imageUrl?imageUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--cyQ9Mqon--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nc1xbnblr52yg8y7z1jp.png"} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">By {author?author:"unknown"} {date?`on ${date}`:" "}</small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
