# React on Rails



## Technologies Used

* React
* Rails


### General Approach Used

User can create


### Installation Instructions


git clone https://github.com/2high/ReactTube
cd ReactTube
npm install


```
Run `npm run dev` and visit localhost:8080 to make sure everything is working.
```



## Wireframes:


![First screen] (https://github.com/2high/ReactTubefinal/blob/master/style/img/Screen%20Shot%202017-02-28%20at%209.05.38%20AM.png?raw=true)

![Favorites screen] (https://github.com/2high/ReactTubefinal/blob/master/style/img/Screen%20Shot%202017-02-28%20at%209.05.54%20AM.png?raw=true)



### Code Highlight

The structure of the web app:

```
...
<div className="container">
  <div >
    <div className="row">
      <div className="col-md-3">
        <Favorites />
      </div>
      <div className="col-md-9">
        <SearchBar
        onSearchTermChange={videoSearch}
        videos={this.state.videos} />
      </div>
    </div>
  </div>
  <VideoDetail
    video={this.state.selectedVideo}
    />
  <VideoList
    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
    videos={this.state.videos}
    />
    <div className="container">
      <div className="col-md-12">
        <h1 className="soc">Favorites</h1>
        <div>
          {this.favoritesList()}
        </div>
      </div>
    </div>
</div>
...

```

## Deployment

Deployed on [Heroku](https://reactubez.herokuapp.com/)

## Author

* **Shauan Ferreira Leite** - [LinkedIn](https://www.linkedin.com/in/shauanleite)



## License

This project is currently in the process of being licensed.
# ReactTubefinal
