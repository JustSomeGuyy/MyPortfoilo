<script>
    export let post;

</script>

<div class="">
        <h1 class="">{post.title}</h1>
        <span class="h-[1px] w-full bg-purple"></span>
        <div class="">
            <p class="">{post.date}</p>
            <p class="">{post.category}</p>
        </div>
        <p class="">{post.description}</p>
</div>