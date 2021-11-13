/** Site-wide header for Madlibs App */

function Header() {
    return (
        <header className="App-header container-fluid pt-4 pb-1">
            <div className="container">
                <h1>Mad Libs</h1>
                <p className="lead">
                    Choose a story and fill out the fields below.
                    When you are ready to see your story, click Generate Story!
                </p>
            </div>
        </header>
    )
}

export default Header;