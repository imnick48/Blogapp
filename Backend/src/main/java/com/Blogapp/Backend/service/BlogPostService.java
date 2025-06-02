package com.Blogapp.Backend.service;

import com.Blogapp.Backend.model.BlogPost;
import com.Blogapp.Backend.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostRepository blogPostRepository;

    public List<BlogPost> getAllPosts() {
        return blogPostRepository.findAll();
    }

    public Optional<BlogPost> getPostById(Long id) {
        return blogPostRepository.findById(id);
    }

    public BlogPost createPost(BlogPost post) {
        post.setCreatedAt(new Date());
        return blogPostRepository.save(post);
    }

    public BlogPost updatePost(Long id, BlogPost postDetails) {
        BlogPost post = blogPostRepository.findById(id).orElseThrow();
        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());
        post.setAuthor(postDetails.getAuthor());
        return blogPostRepository.save(post);
    }

    public void deletePost(Long id) {
        blogPostRepository.deleteById(id);
    }
}
