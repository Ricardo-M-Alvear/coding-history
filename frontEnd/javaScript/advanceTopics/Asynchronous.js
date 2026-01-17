// async function userProfile(){
//     try{
//         const response = await fetch('');
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// userProfile();
//
// async function getWeather(){
//     try{
//         const response = await fetch('weather-api');
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// getWeather();
//
// async function getTodo(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data.title);
//     }catch(err){
//         console.log(err);
//     }
// }
// getTodo();
//
// async function getTwoToDos(){
//     try{
//         const todos1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const todos2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
//         const [task1, task2] = await Promise.all([todos1, todos2]);
//         const [json1, json2] = await Promise.all([task1.json(), task2.json()]);
//         console.log(json1, json2);
//     }catch(err){
//         console.log(err);
//     }
// }
// getTwoToDos();
//
// let numbers = [1,2,3];
// async function slowCounter(){
//     try{
//         for (const index of numbers){
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`);
//             const data = await response.json();
//             console.log(data.title);
//         }
//     }catch(err){
//         console.log(err);
//     }
// }
// slowCounter();
//
// let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// async function resilientFetcher(){
//     const ids = [1,2,3];
//     for (const id of ids){
//         try{
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//             if (!response.ok){
//                 throw new Error("Failed due to 404 error.")
//             }else if (id === 2){
//                 throw await fetch(`https://broken-link.test`)
//             }else{
//                 const data = await response.json();
//                 console.log(data.title);
//             }
//         }catch(err){
//             console.log(`Id ${id} has failed.`);
//         }finally {
//             await sleep(2000)
//         }
//     }
// }
// resilientFetcher();

// Helper for the Timeout challenge
// const timeout = (ms) => new Promise((_, reject) =>
//     setTimeout(() => reject(new Error("Too slow!")), ms)
// );
//
// // 1. The Mirror Challenge (Use Promise.any)
// async function getFile() {
//     try{
//         const a = await Promise.any([
//             fetch('https://server-a.com'),
//             fetch('https://server-b.com')
//         ]);
//         const data = await a.json();
//         console.log(a.status);
//     }catch(err){
//         console.log(err);
//     }
//     // urls: 'https://server-a.com', 'https://server-b.com'
// }
// getFile();
//
// // 2. The Timeout Challenge (Use Promise.race)
// async function getProfileWithTimeout() {
//     // Goal: Race a fetch() against the timeout(2000) function.
//     try{
//         const a = await Promise.race([
//             fetch('https://server-a.com'),
//             timeout(2000)
//         ])
//         console.log(a);
//     }catch(err){
//         console.log(err);
//     }
// }
// getProfileWithTimeout();
//
// // 3. The News Summary (Use Promise.allSettled)
// async function getNews() {
//     // urls: 'article/1', 'article/2', 'article/3'
//     // Goal: Wait for all, then loop through and log if they are "fulfilled" or "rejected".
//     try{
//         const a = await Promise.allSettled([
//             fetch('article/1'),
//             fetch('article/2'),
//             fetch('article/3')
//         ])
//         a.forEach(e => {
//             if (e.status === "fulfilled") {
//                 console.log(e.value);
//             }else{
//                 console.log(e.reason);
//             }
//         })
//     }catch(err){
//         console.log(err);
//     }
// }
// getNews();
//
// const sleep = (ms) => new Promise(res => setTimeout(res, ms));
//
// // Step 1: Always works
// const fetchUser = async () => {
//     await sleep(500);
//     return { id: 42, name: "Gemini" };
// };
//
// // Step 2: Fails 70% of the time (Simulated)
// const fetchPosts = async (userId) => {
//     await sleep(500);
//     if (Math.random() > 0.3) {
//         throw new Error("Server Down");
//     }
//     return ["Post A", "Post B", "Post C"];
// };
//
// async function loadDashboard(){
//     let {userId, name} = await fetchUser();
//     for (let i = 0; i < 3; i++) {
//         try{
//             let posts = await fetchPosts(userId);
//             console.log(posts);
//             return;
//         }catch(e){
//             console.error("Attempt failed, retrying...");
//             if (i === 2) {
//                 console.log(`Could not load post for user ${name}`);
//             }
//             await sleep(500);
//         }
//     }
// }
// loadDashboard();




let serverA = async () => new Promise(res => setTimeout(res, 1000));
let serverB = async () => new Promise((_, rej) => setTimeout(rej, 2000));
let timeout = (ms) => new Promise(res => setTimeout(res, ms));

async function slowestLink(){
    try{
        let result = await Promise.race([
            serverA(),
            serverB(),
        ])
        if (await timeout(result, 3000)){
            throw new Error("Network Timeout")
        }
        console.log(result);
    }catch(e){
        console.error(e);
    }
}
slowestLink();


let users = {
    user1: "John",
    user2: "Doe",
    user3: "User not found"
}

async function smartSearch(){
    try{
        let result = await Promise.any([
            !await wrapper()
        ])
        console.log(result);
    }catch(e){
        console.error(e);
    }
}

async function wrapper(){
    let result = await users;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === "User not found"){
            throw new Error("User not found");
        }
        console.log(result[i]);
    }
}
smartSearch(users).then(r => console.log(r));


async function memoryLeak(){
    let isLoading = true;
    try{

    }catch(e){
        console.error(e);
    }finally {
        isLoading = false;
    }
}

let ids = [1,2,3,4,5,6,7,8,9,10];

async function selectiveBatcher(){
    for (let i = 0; i < ids.length; i+=2) {
        let batch = ids.slice(i, i + 2);
        let result = await Promise.allSettled([batch]);
        if (!result) break;
        console.log(...result);
    }
}
selectiveBatcher().then(r => console.log(r));



