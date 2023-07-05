import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
    //Note : mongoose provide a default _id

    /**
     * Always required 
     */
    @Prop({ type: String, required: true })
    title: string;

    /**
     * Always required 
     */
    @Prop({ type: String, required: true })
    slug: string;

    /**
     * Article publication date
     */
    @Prop({ type: Date, default: Date.now()})
    published_on: Date;

    /**
     * Article creation date
     */
    @Prop({ type: Date, default: Date.now()})
    created_on: Date;

    /**
     * Article modification date
     */
    @Prop({ type: Date, default: Date.now()})
    modified_on: Date;

    /**
     * Always required 
     */
    @Prop({ type: String, required: true })
    content: string;


}

export const ArticleSchema = SchemaFactory.createForClass(Article);