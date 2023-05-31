import axios from 'axios';
import { type Article } from '@/types/Article'

class ArticleService {

    async getAll(): Promise<Article[]> {
        return [];
    }

    async get(slug: string): Promise<Article | null> {
        return null;
    }

    async create(article: Article): Promise<void> {

    }

    async update(article: Article): Promise<void> {
        
    }

    async delete(slug: string): Promise<void> {

    }

    
}

export default new ArticleService();