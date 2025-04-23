<script lang="ts">
    export let
        start: Date,
        end: Date;

    const getYearsInRange = (start: Date, end: Date) => {
        const years = [];
        let year = start.getFullYear();
        while (year <= end.getFullYear()) {
            years.push(year);
            year++;
        }
        return years;
    }

    $: years = getYearsInRange(start, end);

    const getYearPercentage = (year: number, start: Date, end: Date) => {
        const yearEpoch = new Date(year, 0, 1).getTime();
        const startEpoch = start.getTime();
        const endEpoch = end.getTime();
        return ((yearEpoch - startEpoch) / (endEpoch - startEpoch)) * 100;
    }

</script>

<div class="overflow-hidden relative h-16">
    {#each years as year (year)}
        {#if getYearPercentage(year, start, end) >= 0 && getYearPercentage(year, start, end) <= 95}
            <div class="absolute font-sans text-primary-300 -translate-x-1/2" style="left: {getYearPercentage(year, start, end)}%">
                {year}
            </div>
        {/if}
    {/each}
</div>