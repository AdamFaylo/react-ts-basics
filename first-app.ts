// let userName = 'max';

// //userName = 34;
// userName = 'max';
// // userName = 34;

// let userAge = 34;

// let isValid = true;

// // string, number, boolean

// let userID: string | number = 'abc1';
// userID = 34;
// // userID = true;

// // let user: {
// //     name: string;
// //     age: number;
// //     //isAdmin: boolean;
// //     id: string | number;
// // };

// //user = "max";

// // user = {
// //     name: 'max',
// //     age: 34
// //     //isAdmin: true,
// //     id: 'abc', //123
// // };

// //user = {};



// let hobbies: string[];

// hobbies = ['sports', 'cooking', 'reading'];

// //hobbies = [1,2,3];

// function add(a: number, b: number) {
//     const result = a + b;
//     return result;
// }

// type AddFn = (a: number, b: number) => number;

// function calculate(
//     a: number,
//     b: number,
//     calcFn: AddFn
// ) {
//     calcFn(a, b);
// }

// calculate(10, 20, add);

// interface Credentials {
//     email: string
//     password: string | number
// };

// // interface Credentials {
// //     mode: string
// // };

// let creds: Credentials;

// creds = {
//     email: 'ed@gmail.com',
//     password: 'abc'
// }

// class AuthCredentials implements Credentials {
//     email: string;
//     password: string | number;
//     userName: string;
// }

// function login(creds: Credentials) {
//     // login logic
// }

// login(new AuthCredentials());

// // type Admin = {
// //     permissions:string[];
// // };

// // type AppUser = {
// //     userName: string;
// // };

// // type AppAdmin = Admin & AppUser;

// // let admin: AppAdmin;kmolp,iujn n

// // admin = {
// //     userName: 'max',
// //     permissions: ['login', 'logout']
// // }

// interface Admin {
//     permissions: string[];
// };

// interface AppUser {
//     userName: string;
// };

// interface AppAdmin extends Admin, AppUser { };

// let admin: AppAdmin;

// admin = {
//     userName: 'max',
//     permissions: ['login']
// }

// type Role = 'admin' | 'user' | 'editor';

// let role: 'admin' | 'user' | 'editor';

// role = 'admin';
// role = 'user';
// role = 'editor';
// //role = 'abc';

// function prefotmAction(action: string, role: Role) {
//     if (role === 'admin' || typeof role === 'string') {
//         //  ...
//     }
// }

// let roles: Array<Role>;
// roles = ['admin', 'editor'];

// Assuming a User type is defined like this:
type User = {
    id: number;
    name: string;
};

// Generic DataStorage type definition
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => T;
};

// Implementation for text storage
const textStorage: DataStorage<string> = {
    storage: [],
    add(data: string) {
        this.storage.push(data);
        return data; // Return the added data
    }
};

// Implementation for user storage
const userStorage: DataStorage<User> = {
    storage: [],
    add(data: User) {
        this.storage.push(data);
        return data; // Ensure it returns the added User object
    }
};

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b,
    }
}

const newUser = merge(
    { name: 'Max' },
    { age: 30 }
);



