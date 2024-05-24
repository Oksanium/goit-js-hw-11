
'use strict';


const BASE_URL = 'https://pixabay.com/api/?';

export function getURL(q) {
    const params = new URLSearchParams ({
    key: '44040237-e4cc253c6c6f225197cba954d',
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    });
    return BASE_URL + params;
}

