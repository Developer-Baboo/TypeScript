// Certainly! Here are five easy examples related to working with asynchronous APIs in with easy-to-understand comments:

// **Example 1: Fetching Data from a JSON API**

// Fetching data from a JSON API asynchronously using fetch
const fetchData = async (): Promise<void> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data); // Output: { userId: 1, id: 1, title: '...', completed: false }
    } catch (error) {
        console.error(error);
    }
};

// Calling the async function
fetchData();


// **Example 2: Sending Data to a REST API**

// Sending data to a REST API asynchronously using fetch with POST method
const postData = async (): Promise<void> => {
    const postData = {
        userId: 1,
        id: 1,
        title: 'New Todo',
        completed: false
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data); // Output: { userId: 1, id: 201, title: 'New Todo', completed: false }
    } catch (error) {
        console.error(error);
    }
};

// Calling the async function
postData();


// **Example 3: Handling Parallel Requests with Promise.all**

// Fetching data from multiple endpoints in parallel using Promise.all
const fetchDataParallel = async (): Promise<void> => {
    try {
        const [userResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        const userData = await userResponse.json();
        const postData = await postResponse.json();

        console.log(userData); // Output: User data object
        console.log(postData); // Output: Post data object
        
    } catch (error) {
        console.error(error);
    }
};

// Calling the async function
fetchDataParallel();


// **Example 4: Handling API Errors**

// Handling API errors using try-catch block
const fetchDataWithErrors = async (): Promise<void> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        console.log(data); // This will not be executed in case of API error
    } catch (error) {
        console.error(error.message); // Output: API request failed
    }
};

// Calling the async function
fetchDataWithErrors();


// **Example 5: Canceling Fetch Requests**

// Canceling fetch requests using AbortController
const fetchDataWithCancellation = async (): Promise<void> => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
        controller.abort(); // Simulating cancellation after 2 seconds
    }, 2000);

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', { signal });
        const data = await response.json();
        console.log(data); // This will not be executed if the request is canceled
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request was canceled');
        } else {
            console.error(error);
        }
    }
};

// Calling the async function
fetchDataWithCancellation();
