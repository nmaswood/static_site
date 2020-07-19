import React  from 'react';

export default function Main() {
    const [visible, setVisible ] = React.useState(false);
    return (
        <div className="Main--container">
            <header className="Main--title">
                <div className='Main--intro'>
                    <h1 className="Main--name">Nasr Maswood</h1>
                    <h1 className="Main--nav">blog</h1>
                    <h1 className="Main--nav">about me</h1>
                </div>
            </header>
            <footer></footer>
        </div>
    );
}
