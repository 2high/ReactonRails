# React on Rails



## Technologies Used

* React
* Rails


### General Approach Used

User can create


### Installation Instructions


git clone https://github.com/2high/ReactonRails
cd ReactonRails
bin/rails db:migrate RAILS_ENV=development




```
Run `rails server` and visit localhost:3000 to make sure everything is working.
```



## Wireframes:


![First screen] (https://github.com/2high/ReactonRails/blob/master/public/p1.png?raw=true)





### Code Highlight

The structure of the web app:

```
...
var Body = React.createClass({
    getInitialState() {
        return { items: [] }
    },


    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },



    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },


    handleDelete(id) {
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeItemClient(id);
            }
        });
    },

    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },
...

```


## Author

* **Shauan Ferreira Leite** - [LinkedIn](https://www.linkedin.com/in/shauanleite)



## License

This project is currently in the process of being licensed.
