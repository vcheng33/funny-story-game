import { useState, useEffect } from "react";
import { checkFormIncomplete } from "./madlibs";

import "./StoryForm.css";

/** Form for a user to input words for the associated prompts 
 * 
 *  Props:
 *  - initialFormData
 *  - handleStorySubmit: function to call in parent
 * 
 *  State:
 *  - formData: inputs selected by user to fill in 
 *              madlibs story
 *  - formIncomplete: true/false 
 * 
 *  MadlibsApp -> StoryForm
 *  
*/

function StoryForm({ story, handleStorySubmit }) {
    const [formData, setFormData] = useState(story.inputs);
    const [formIncomplete, setFormIncomplete] = useState(true);

    useEffect(() => (
        setFormIncomplete(checkFormIncomplete(formData))
    ), [formData]);

    /** Update form input */
    function handleChange(evt) {
        const { id, name, value } = evt.target;
        setFormData(fd => fd.map(i =>(
            i.id === Number(id)
                ? { ...i, [name]: value, }
                : i)
        ));
    }

    /** Call parent function and clear form */
    function handleSubmit(evt) {
        evt.preventDefault();
        handleStorySubmit(formData);
        setFormData(story.inputs);
    }

    return (
        <form className="StoryForm" onSubmit={handleSubmit}>
            
            <div className="form-group">
                {story.inputs.map(i => (
                    <div className="form-group row" key={i.id}>
                        <label htmlFor={i.id} className="col-form-label col-2 text-left StoryForm-label">
                            {i.input}:</label>
                        <div className="col-10 mb-2">
                            <input
                                id={i.id}
                                name="response"
                                className="form-control"
                                placeholder={i.input}
                                onChange={handleChange}
                                value={formData[i.id - 1].response}
                                required
                            />
                        </div>
                    </div>
                ))}
            </div>

            {formIncomplete && 
            <div className="alert alert-warning">Missing Field(s)!</div>}

            <button className="btn-primary btn btn-sm StoryForm-saveBtn">
                Generate Story!
            </button>

        </form >
    )
}

export default StoryForm;