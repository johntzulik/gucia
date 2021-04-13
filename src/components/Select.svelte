<script>
    export let label
    export let options = [];
    export let display_func = a => a;
    export let index = 0;
    export let value

    $: {
        value = options[index];
        //console.log(value);
    }
</script>

<div class="relative mb-4">
    <label for={label} class="leading-7 text-sm text-gray-600">{label}</label>
    <select bind:value={index} id={label} name={label} {...$$restProps}
        class="w-full bg-white rounded border border-gray-300 focus:border-chocolate-500 
        focus:ring-2 focus:ring-chocolate-200 text-base outline-none text-gray-700 py-1 px-3 
        leading-8 transition-colors duration-200 ease-in-out">
        {#each options as option, i}
        <option value={i}>{display_func(option)}</option>
        {/each}
    <select>
</div>
