
import { articles_url } from '../Configuration/Rest_config';

export async function getArticles(category = "career") {

    try {
        let articles = await fetch(`${articles_url}?&category=${category}`);

        let result = await articles.json();

        category = null;
        articles = null;

        return result;
    }
    catch (error) {
        throw error;
    }
}