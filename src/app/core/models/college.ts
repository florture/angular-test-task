export class College {
    id: number;
    name: string;
    photo: string;
    about: string;
    mediaType: number;
    vimeoVideoId: number;

    constructor(obj) {
        for (const [key, value] of Object.entries(obj)) {
            this[key] = value;
        }
    }
}
