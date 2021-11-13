/** Global constants and functions for the Madlibs App */

const STORIES = [
    {
        id: 1,
        title: "History",
        inputs: [
            { id: 1, input: "place", response: "",  },
            { id: 2, input: "adjective", response: "", },
            { id: 3, input: "noun", response: "", },
            { id: 4, input: "verb", response: "", },
        ],
        text: `
        Once upon a time, in a long-ago {response}, 
        there lived an exceptionally {response}
        {response}. It loved to {response}.
        `,
    },
    {
        id: 2,
        title: "Butterfly",
        inputs: [
            { id: 1, input: "adjective", response: "", },
            { id: 2, input: "verb", response: "", },
        ],
        text: `
        The life cycle of a butterfly is one of 
        extraordinary change. It begins with a 
        {response} caterpillar crawling on a 
        twig. Then the caterpillar spins a 
        chrysalis and {response} inside.
        `,
    },
    {
        id: 3,
        title: "A Letter from George",
        inputs: [
            { id: 1, input: "noun", response: "", },
            { id: 2, input: "occupation", response: "", },
            { id: 3, input: "place", response: "", },
            { id: 4, input: "number", response: "", },
        ],
        text: `
        Hello, my fellow {response}, it's me, George Washington, 
        the first {response}. I am writing from {response},
        where I have been secretly living for the past {response}
        years.
        `,
    },
    {
        id: 4,
        title: "A Trip to the Doctor",
        inputs: [
            { id: 1, input: "noun", response: "", },
            { id: 2, input: "verb", response: "", },
            { id: 3, input: "adjective", response: "", },
            { id: 4, input: "verb", response: "", },
            { id: 5, input: "noun", response: "", },
            { id: 6, input: "noun", response: "", },
        ],
        text: `
        The other day, I woke up and my {response} was sore.
        I looked in the mirror and started to {response}. My
        skin was all {response}! My dad told me not to {response}
        and took me to the doctor. When we got there, the nurse
        stuck a {response} into my {response}.
        `,
    },

];

/** A function that takes in a story's text and returns the
 *  text updated with the inputs provided by the user
 */
function updateTextWithInputs(text, inputs) {
    for (let input of inputs) {
        const { response } = input;
        text = text.replace('{response}', response);
    }

    return text;
}

function checkFormIncomplete(formData) {
    const incompleteInputs = formData.filter(input => input.response === "");
    console.log({incompleteInputs});
    console.log("incompleteInputs", incompleteInputs.length > 0);
    return incompleteInputs.length > 0;
}

export { STORIES, updateTextWithInputs, checkFormIncomplete };