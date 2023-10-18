// Promise that resolves after 2 seconds
const fetchData = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};

// Using the Promise
fetchData()
    .then(data => {
        console.log(data); // Output: Data fetched successfully!
    })
    .catch(error => {
        console.error(error);
    });


// **Example 2: Using async/await with Promises**

// Async function using async/await with a Promise
const fetchDataAsync = async (): Promise<void> => {
    try {
        const data = await fetchData();
        console.log(data); // Output: Data fetched successfully!
    } catch (error) {
        console.error(error);
    }
};

// Calling the async function
fetchDataAsync();


// **Example 3: Chaining Promises**


// Promise that resolves after 1 second
const processStep1 = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1 completed!");
        }, 1000);
    });
};

// Promise that resolves after 1 second
const processStep2 = (data: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${data} Step 2 completed!`);
        }, 1000);
    });
};

// Chaining promises
processStep1()
    .then(data => processStep2(data))
    .then(result => {
        console.log(result); // Output: Step 1 completed! Step 2 completed!
    })
    .catch(error => {
        console.error(error);
    });


// **Example 4: Promise.all for Parallel Execution**


// Promises that resolve after 2 seconds
const fetchData1 = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from source 1");
        }, 2000);
    });
};

const fetchData2 = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from source 2");
        }, 2000);
    });
};

// Using Promise.all for parallel execution
Promise.all([fetchData1(), fetchData2()])
    .then(results => {
        console.log(results); // Output: ['Data from source 1', 'Data from source 2']
    })
    .catch(error => {
        console.error(error);
    });


// **Example 5: Error Handling with async/await**


// Promise that rejects after 1 second
const fetchDataWithError = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Failed to fetch data!");
        }, 1000);
    });
};

// Async function with error handling
const fetchDataAsyncWithError = async (): Promise<void> => {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.error(error); // Output: Error: Failed to fetch data!
    }
};

// Calling the async function
fetchDataAsyncWithError();