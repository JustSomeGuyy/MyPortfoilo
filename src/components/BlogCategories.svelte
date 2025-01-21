<script>
    import Posts from '$lib/blog/_posts';

    /**
	 * @type {Iterable<any> | null | undefined}
	 */
    let postsArr = [];

    // Collect categories from each post
    Posts.forEach(post => {
        // @ts-ignore
        postsArr.push(post.category);
    });

    // Remove duplicates by converting to a Set, then back to an array
    let uniqueCategories = [...new Set(postsArr)];

    // Optionally, sort the categories alphabetically (if you want to organize them)
    let organizedCategories = uniqueCategories.sort();
</script>

<div class="">
    <h2 class="text-2xl font-semibold">Categories</h2>
    <ul class="flex flex-wrap gap-2">
        {#each organizedCategories as category}
            <li class="bg-purple text-darkGrey rounded-md p-2">{category}</li>
        {/each}
    </ul>
</div>