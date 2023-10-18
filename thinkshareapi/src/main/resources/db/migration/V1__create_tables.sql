-- Active: 1697590847730@@127.0.0.1@5432@thinksharedb@public
CREATE TABLE users(  
    user_id UUID PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    profile_img BYTEA
);

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    post_img BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    post_id INT REFERENCES posts(post_id),
    content TEXT NOT NULL,
    comment_img BYTEA,
    comment_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post_reactions(
    reaction_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    post_id INT REFERENCES posts(post_id),
    reaction_type VARCHAR(20) NOT NULL
);

CREATE TABLE saved_posts(
    saved_post_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    post_id INT REFERENCES posts(post_id),
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
