interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface Blog {
    id: number;
    title: string;
    content: string;
    user_id: number;
}

export { User, Blog };
