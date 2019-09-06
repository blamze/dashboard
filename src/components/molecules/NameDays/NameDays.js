import React from 'react'
import {Card} from '../..'

const nameDayApiUrl = 'https://day.lt/dienos_vardadieniai?charset=utf'

export class NameDays extends React.Component {
    frame = (el) => {
        const script = document.createElement('script');
        script.src = nameDayApiUrl;
        el.contentDocument.body.appendChild(script);
        el.contentDocument.write('')
        script.onload = () => this.setState({names: Array.from(el.contentDocument.querySelectorAll('a')).map((node) => node.innerHTML)})
    }

    render() {
        return (
            <Card title="Name days:">
                <iframe ref={this.frame} title='nameDays' className="hide"/>
                {this.state && this.state.names.map(name => <div key={name}>{name}</div>)}
            </Card>
        )
    }
}
