/** Shows a story with the text updated with user inputs
 * 
 *  Props:
 *  - text: final story text with words inputted by user
 *  - handleStoryUpdate: function to call in parent
 *  - handleStoryChoiceUpdate: function to call in parent
 * 
 *  MadlibsApp -> Story
 */

function Story({ text, handleStoryRestart, handleStoryChoiceUpdate }) {
    
    return (
        <div className="Story">
            <div className="Story-completed-text mb-3">{text}</div>
            <button 
                type="button"
                className="btn-primary btn btn-sm StoryForm-restartBtn"
                onClick={handleStoryRestart}>
                    Restart!
            </button>
            <button 
                type="button"
                className="btn-outline-primary btn btn-sm StoriesForm-saveBtn ms-2"
                onClick={handleStoryChoiceUpdate}>
                    Choose Another Story!
            </button>
        </div>
    )
}

export default Story;