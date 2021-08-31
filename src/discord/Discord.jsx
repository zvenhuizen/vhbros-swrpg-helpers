import React from 'react';

class Discord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.postMessageToDiscord = this.postMessageToDiscord.bind(this);
    }

    postMessageToDiscord(message) {

        let request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/882068887116599327/n4vm4B_S8lI5ZtKLKkKSF0Hu-ClyOX-Oa1TVOlnwNrJPKk6mbAyU70XB2qsrgSQo611h");
    
        request.setRequestHeader('Content-type', 'application/json');
    
        let params = {
            username: "VHBros SWRPG Helper",
            content: message
        }
    
        request.send(JSON.stringify(params));
      
    }

    postRollToDiscord(roll) {

        let request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/882068887116599327/n4vm4B_S8lI5ZtKLKkKSF0Hu-ClyOX-Oa1TVOlnwNrJPKk6mbAyU70XB2qsrgSQo611h");
    
        request.setRequestHeader('Content-type', 'application/json');
    
        let params = {
            username: "VHBros SWRPG Helper",
            content: roll.message
        }
    
        request.send(JSON.stringify(params));

        params = {
            username: "VHBros SWRPG Helper",
            content: roll.dice
        }

        request.send(JSON.stringify(params));

        params = {
            username: "VHBros SWRPG Helper",
            content: roll.result
        }

        request.send(JSON.stringify(params));
    }

    render() {
        return (
            <div className='discord'>
                <h2 className='discord-title'>Discord API</h2>
                <div className='discord-button-container'>
                    <button className='discord-button' onClick={() => this.postMessageToDiscord("***__~~testing with markup~~__***")}>Post a Message to Discord</button>
                </div>
                
            </div>
        )
    }
}

export default Discord;