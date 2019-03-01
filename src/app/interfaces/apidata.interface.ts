export class ApiData {
    home?: HomeData[];
    about?: AboutData[];
    contact?: ContactData;
}
export class HomeData {
    id?: number;
    title?: string;
}

export class AboutData {
    id?: number;
    body?: string;
    postId?: number;
}

export class ContactData {
    name?: string;
}

export class Chat {
    name?: string;
    message?: string;
}