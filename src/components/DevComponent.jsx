import React, { Component } from "react";
import DevItem from "./DevItem";
import Spinner from "./Spinner";

export default class DevComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title = `${this.props.tag} - DevTalks`;
  }

  handleNextClick = async () => {
      let url = `https://dev.to/api/articles?tag=${this.props.tag}&page=${this.state.page + 1}&per_page=${this.props.pageSize}`;
      this.state.loading = true;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.state.loading = false;
      console.log(parsedData);
      this.setState({
        articles: parsedData,
        page: this.state.page + 1,
      });
  };

  handlePrevClick = async () => {
    let url = `https://dev.to/api/articles?tag=${this.props.tag}&page=${this.state.page - 1}&per_page=${this.props.pageSize}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.state.loading = false;
    console.log(parsedData);
    this.setState({ articles: parsedData, page: this.state.page - 1 });
  };

  //This mounts after the render method
  async componentDidMount() {
    let url = `https://dev.to/api/articles?tag=${this.props.tag}&page=${this.state.page}&per_page=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData,
    //   totalResults: 30,
    });
    this.state.loading = false;
    //Reinitialize the state
  }

  render() {
    // let {pageSize}  = this.props
    return (
      <>
        <div className="my-3">
          <h1>
            <center>{`This are the Latest ${this.props.tag} Blogs`}</center>
          </h1>
            <center>{this.state.loading && <Spinner />}</center>
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 " key={element.url}>
                      <DevItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : "..."
                        }
                        imageUrl={element.cover_image}
                        newsUrl={element.url}
                        pageSize={12}
                        author={element.user.name}
                        date={element.published_at}
                      />
                    </div>
                  );
                })}
            </div>
          
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-outline-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
