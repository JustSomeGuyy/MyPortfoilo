<script>
    export let project;
    export let index;
    export let left;

</script>

<div id="{index}" class={"flex min-w-1/2 w-11/12 gap-12 items-center " + (left ? index % 2 === 0 ? 'flex-row flex-start' : '' : index % 2 === 1 ? "flex-end flex-row-reverse" : ""
)}>
    <div class="relative size-64 md:size-48 sm:size-36 bg-darkGrey rounded-2xl">
        <img src="{project.source}" alt="">
        <span class="-z-10 size-full blur-md bg-purple absolute bottom-0"></span>
    </div>
    <div class="flex flex-col justify-center gap-6 w-5/12">
        <div class="flex flex-col gap-3">
                <h3 class=" text-3xl font-semibold">
                    <a href="{project.link}">{project.name}</a>
                </h3>
            <span class="h-[1px] w-full bg-purple"></span>
            <p class="opacity-75 text-sm">{project.description}</p>
        </div>
        <div class="flex flex-row gap-4">
            {#each project.languages as keyword}
            <div class="text-center border-purple border-[1px] rounded-[10px] py-1 px-5 opacity-80 font-meduim">
                <p>{keyword}</p>
            </div>
            {/each}
        </div>
    </div>
</div>