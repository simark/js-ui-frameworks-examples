import React from 'react';

var MyComponent = React.createClass({
    componentWillMount: function () {
        let textBoxModel = 'Hello World!';
        let words = textBoxModel.split(' ');

        this.setState({
            textBoxModel: textBoxModel,
            words: words,
        });
    },

    getInitialState: function () {
        return {
            words: [],
            textBoxModel: '',
        }
    },

    textBoxChange: function (event) {
        let textBoxModel = event.target.value;
        let words = textBoxModel.split(' ');

        this.setState({
            textBoxModel: textBoxModel,
            words: words,
        });
    },

    render: function () {
        var createListItem = function (word, idx) {
            console.log(idx);
            return (
                <li key={idx}>{word}</li>
            )
        }

        return (
            <div>
                <input value={this.state.textBoxModel} onChange={this.textBoxChange} />
                <p>The words are:</p>
                <ul>
                    { this.state.words.map(createListItem) }
                </ul>
            </div>
        )
    }
});

export default MyComponent;