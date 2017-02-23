



var NewItem= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (
                <div>
                    <input className="input_a col-md-offset-2" ref='name' placeholder='Type the name of the restaurant' />
                    <input className="input_b" ref='description' placeholder='Enter the url' />
                    <button className="button_a" onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});