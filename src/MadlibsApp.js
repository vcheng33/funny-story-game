import { useState } from "react";

import StoriesForm from "./StoriesForm";
import StoryForm from "./StoryForm";
import Story from "./Story";
import { STORIES, updateTextWithInputs } from "./madlibs";

const defaultInitialState = {
    text: "",
    formComplete: false,
};


/** App to create a Madlib Story 
 * 
 *  Props:
 *  - stories: array of story options [ {story}, ... ]
 * 
 *  State:
 *  - story: an object of { id, title, inputs: [{input},...], text }
 * 
 *  App -> MadlibsApp -> { StoriesForm, StoryForm, Story }
*/

function MadlibsApp({ stories=STORIES }) {
    const [ story, setStory ] = useState(defaultInitialState);

    /** Updates story with story chosen by user */
    function handleStoryChoice(formData) {
        console.log({formData});
        const chosenStory = stories.filter(
            s => s.id === Number(formData.value));
        console.log({chosenStory});
        setStory(...chosenStory);
        console.log({story});
    }

    /** Updates story to the default initial state 
     *  so that the user can choose another story
    */
    function handleStoryChoiceUpdate() {
        setStory(defaultInitialState);
    }

    /** Updates story with the inputs provided from
     *  the user in the StoryForm. Also updates
     *  formComplete to true
     */
    function handleStorySubmit(formData) {
        setStory(curr => ({
            ...curr,
            inputs : formData,
            formComplete: true,
        }));
    }

    /** Updates formComplete to false so that the
     *  user can update their inputs
     */
    function handleStoryRestart() {
        setStory(curr => ({
            ...curr,
            formComplete: false,
        }));
    }

    return (
        <div>
        {!story.text && 
            <StoriesForm 
                handleStoryChoice={handleStoryChoice} 
                stories={stories}
            />
        }

        {story.text && !story.formComplete && 
            <StoryForm 
                handleStorySubmit={handleStorySubmit}
                story={story}
            />
        }

        {story.formComplete && 
            <section>
                <Story 
                    text={updateTextWithInputs(story.text, story.inputs)} 
                    handleStoryRestart={handleStoryRestart}
                    handleStoryChoiceUpdate={handleStoryChoiceUpdate}
                />
            </section>
        }
        </div>
        
    )
}

export default MadlibsApp;