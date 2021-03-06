const baseUrl = 'https://5fa28679ba0736001613bc44.mockapi.io/Tasks/task';

export const createNewTask = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error("Internal Server Error.")
        }
    })
};

export const getTask = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Internal Server Error. Can't display events")
        })
}


export const deleteTask = id => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) {
            throw new Error(" Internal Server Error. Can't display events");
        }
    })
}

/* export const getTask = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(tasksList => {
            return tasksList.map(({ id, ...task }) => ({
                id: id,
                ...task
            }));
        })
} */


/* const events = [{
        id: 1,
        title: 'Go to the gym',
        description: 'some text here',
        dateFrom: new Date(2020, 8, 15, 10, 15),
        dateTo: new Date(2020, 8, 15, 15, 0),
    },
    {
        id: 2,
        title: 'Go to the school',
        description: 'hello, 2 am',
        dateFrom: new Date(2020, 8, 16, 10, 15),
        dateTo: new Date(2020, 8, 16, 11, 0),
    },
    {
        id: 3,
        title: 'Lunch',
        description: '',
        dateFrom: new Date(2020, 8, 17, 10, 30),
        dateTo: new Date(2020, 8, 17, 11, 30),
    },
    {
        id: 4,
        title: 'Meet friend',
        description: 'at the cafe',
        dateFrom: new Date(2020, 8, 25, 10, 30),
        dateTo: new Date(2020, 8, 25, 11, 0),
    }
]


//console.log(events)
export default events; */