export interface APIResponseModel {
    copyright: string;
    last_modified: Date;
    num_results: number;
    results: any[];
    status: string;
}

export interface SellerModel {
    list_name: string;
    display_name: string;
    bestsellers_date: Date;
    published_date: Date;
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    amazon_product_url: string;
    isbns: ISBNSModel[];
    book_details: BookDetailModel[];
    reviews: ReviewModel[];
}

export interface ISBNSModel {
    isbn10: number;
    isbn13: number;
}

export interface BookDetailModel {
    title: string;
    description: string;
    contributor: string;
    author: string;
    contributor_note: string;
    price: string;
    age_group: string;
    publisher: string;
    primary_isbn13: number;
    primary_isbn10: number;
}

export interface ReviewModel {
    url: string;
    publication_dt: Date;
    byline: string;
    book_title: string;
    book_author: string;
    summary: string;
    uuid: string;
    uri: string;
    isbn13: number[];
}

export interface ListNameModel {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: Date;
    newest_published_date: Date;
    updated: string;
}

export interface BookSearchModel {
    listName: string;
    bestsellersDate: Date;
    publishedDate: Date;
    offSet: number;
}