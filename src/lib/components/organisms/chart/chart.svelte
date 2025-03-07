<script lang="ts">
    import { setContext } from 'svelte';
    export let
        scaleX: number = -1;

    let maxX: number | null = null;
    let minX: number | null = null;

    const setMaxX = (x: number) => {
        console.log("max", x)
        if (maxX === null || x > maxX) {
            maxX = x;
        }
    }

    const setMinX = (x: number) => {
        console.log("min", x)
        if (minX === null || x < minX) {
            minX = x;
        }
    }

    setContext('bounds', {
        setMaxX,
        setMinX
    });

    $: fullXScale = scaleX === -1 || maxX === null || minX === null;

    // should be 100% if fullXScale, otherwise should be percentage width so that xRange is 100%
    $: percentageWidth = fullXScale ? 100 : ((maxX! - minX!) / scaleX) * 100;
</script>

<div class="w-full flex flex-col gap-12 overflow-hidden">
    <div style={`width: ${percentageWidth}%`}>
        <slot />
    </div>
    <div style={`width: ${percentageWidth}%`}>
        <slot name="x-axis" {minX} {maxX} />
    </div>
</div>