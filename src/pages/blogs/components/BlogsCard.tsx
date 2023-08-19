import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


const BlogsCard = ({blog}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.body}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    );
};

export default BlogsCard;