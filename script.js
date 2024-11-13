const posts = [
    {name: "About R.T. Parlor", file_name: "aboutus.html"},
    {name: "Our Theological Works", file_name: "posts.html"},
];

const blog_posts_div = document.getElementById("blog-posts");
posts.forEach(post => {
    const post_tag = document.createElement("a");
    post_tag.href = "posts/" + post.file_name;
    post_tag.textContent = post.name;


    blog_posts_div.appendChild(post_tag);
});