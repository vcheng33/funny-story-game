import { useState } from "react";

const initialFormData = {
    value: "",
}


/** Form for choosing a story to create a madlibs for
 *   
 *  Props:
 *  - stories: array of story options [ {story}, ... ]
 *  - handleStoryChoice: function to call in parent
 * 
 *  State:
 *  - formData: selection of story for stories list
 * 
 *  MadlibsApp -> StoriesForm
 */

function StoriesForm({ stories, handleStoryChoice }) {
    const [formData, setFormData] = useState(initialFormData);

    /** Update form input. */
    function handleChange(evt) {
        setFormData({value: evt.target.value});
    }

    /** Call parent function and clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        handleStoryChoice(formData);
        setFormData(initialFormData);
    }

    return (

        <form className="StoriesForm" onSubmit={handleSubmit}>
            <div className="form-group d-flex justify-content-between">
                <div className="w-75 d-flex justify-content-between">
                    <label htmlFor="StoriesForm-choices"
                        className="d-inline-flex">Choose a Story:&nbsp;&nbsp;
                    </label>
                    <select id="StoriesForm-choices"
                        name="story"
                        value={formData.value}
                        onChange={handleChange}
                        className="form-control form-control-sm d-inline-flex"   
                    >
                        <option key={0} value="" defaultValue disabled>Choose a Story!</option>
                        {stories.map(story => (
                            <option key={story.id} value={story.id}>{story.title}</option>
                        ))}

                    </select>
                </div>
                <button className="btn-primary btn btn-sm StoriesForm-Btn">
                    Choose
                </button>
            </div>
        </form>

    )

}

export default StoriesForm;