var React = require('react');

class Popular extends React.Component{
    constructor(props){
        super();
        this.state = {
            selectedLanguage: "All"
        };
    }

    updateLanguage(lang){
        this.setState(() => {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ["All", "JavaScript", "Java", "CSS", "Python"];

        return(
            <ul className="languages">
                {languages.map((lang) => {
                    return (
                        <li 
                            style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null }
                            key={lang}
                            onClick={(lang) => this.updateLanguage(lang)}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

module.exports = Popular;