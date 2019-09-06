import React from 'react'
import {Card} from '../..'

const dailyProverbApiUrl = 'https://day.lt/dienos_info?format=[patarle]&charset=utf'

export class DailyProverb extends React.Component {
    frame = (el) => {
        const script = document.createElement('script');
        script.src = dailyProverbApiUrl;
        el.contentDocument.body.appendChild(script);
        el.contentDocument.write('')
        script.onload = () => {
            this.setState({proverb: el.contentDocument.body.innerHTML})
        }
    }

    render() {
        return (
            <Card title="Daily proverb:">
                <iframe ref={this.frame} title="dailyProverb" className="hide"/>
                {this.state && this.state.proverb}
            </Card>
        )
    }
}
