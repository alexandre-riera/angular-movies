export class Movie {
    constructor(
        public id?: any,
        public poster_path?: String,
        public adult?: String,
        public overview?: String,
        public release_date?: String,
        public genre_ids?: Array<[]>,
        public original_title?: String,
        public original_language?: String,
        public title?: String,
        public backdrop_path?: String,
        public popularity?: Number,
        public vote_count?: Number,
        public video?: Boolean,
        public vote_average?: Number,
    ){}

}
