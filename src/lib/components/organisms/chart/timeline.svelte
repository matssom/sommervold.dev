<script lang="ts">
    import { Step, useTimelinePersentages } from '$lib/components/organisms/chart/timeline';
    import type { BoundsContext, RoundMode, TimelineRecord } from '$lib/components/organisms/chart/types';
    import { getContext, onMount } from 'svelte';

    export let
      timelineData: TimelineRecord[],
      step: number = Step.Minute,
      minSteps: number = 1,
      roundMode: RoundMode = 'inclusive';

    const {
        minStart,
        maxEnd,
        findStartPercentage,
        findLengthPercentage
    } = useTimelinePersentages(timelineData, step, minSteps, roundMode);

    const bounds = getContext<BoundsContext>('bounds');

    onMount(() => {
        bounds.setMaxX(maxEnd);
        bounds.setMinX(minStart);
    })

</script>

{#if timelineData.length > 0}
    <div class="flex flex-col gap-3">
        {#each timelineData as record}
            <div class="w-full">
                <div style={`margin-left:${findStartPercentage(record)}%; width:${findLengthPercentage(record)}%;`}>
                    <slot {record}>
                        {record.start}
                    </slot>
                </div>
            </div>
        {/each}
    </div>
{/if}