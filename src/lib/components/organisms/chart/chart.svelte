<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import ArrowLeft from '$lib/icons/arrow-left.svelte';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	export let scaleX: number = -1;

	let maxX: number | null = null;
	let minX: number | null = null;
	let container: HTMLDivElement | null = null;
	let showArrows = false;
	let scrollInterval: ReturnType<typeof setInterval> | null = null;
	let isDragging = false;
	let startX = 0;
	let scrollLeft = 0;

	const setMaxX = (x: number) => {
		if (maxX === null || x > maxX) {
			maxX = x;
		}
	}

	const setMinX = (x: number) => {
		if (minX === null || x < minX) {
			minX = x;
		}
	}

	setContext('bounds', {
		setMaxX,
		setMinX
	});

	$: fullXScale = scaleX === -1 || maxX === null || minX === null;
	$: percentageWidth = fullXScale ? 100 : ((maxX! - minX!) / scaleX) * 100;

	const startScrolling = (direction: number) => {
		if (container) {
			scrollInterval = setInterval(() => {
				container?.scrollBy({ left: direction * 10, behavior: 'auto' });
			}, 10);
		}
	};

	const stopScrolling = () => {
		if (scrollInterval) {
			clearInterval(scrollInterval);
			scrollInterval = null;
		}
	};

	const handleMouseDown = (event: MouseEvent) => {
		if (!container) return;
		isDragging = true;
		startX = event.pageX - container.offsetLeft;
		scrollLeft = container.scrollLeft;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!isDragging || !container) return;
		event.preventDefault();
		const x = event.pageX - container.offsetLeft;
		const walk = (x - startX) * 2; // Adjust scrolling speed
		container.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUp = () => {
		isDragging = false;
	};

	onMount(() => {
		const updateArrows = () => {
			if (container) {
				showArrows = container.scrollWidth > container.clientWidth;
			}
		};
		updateArrows();
		window.addEventListener('resize', updateArrows);
		return () => window.removeEventListener('resize', updateArrows);
	});
</script>

<style>
    .scroll-container::-webkit-scrollbar {
        height: 0;
        width: 0;
        display: none;
    }

    .scroll-container::-webkit-scrollbar-thumb {
        display: none;
    }
</style>

<div class="relative max-w-full">
    {#if showArrows}
        <button
            class="absolute bg-primary-900 rounded-full left-3 top-1/2 -translate-y-1/2 p-2 z-10"
            on:touchstart={() => startScrolling(-1)}
            on:touchend={stopScrolling}
            on:mousedown={() => startScrolling(-1)}
            on:mouseup={stopScrolling}
            on:mouseleave={stopScrolling}
            on:keydown={(e) => {
			    if (e.key === 'Enter') {
					e.preventDefault();
					container?.scrollBy({ left: -100, behavior: 'smooth' })
			    }
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
					container?.scrollBy({ left: -100, behavior: 'smooth' })
                }
				if (e.key === 'ArrowRight') {
                    e.preventDefault();
					container?.scrollBy({ left: 100, behavior: 'smooth' })
				}
            }}
        >
            <ArrowLeft />
        </button>
        <button
            class="absolute bg-primary-900 rounded-full right-3 top-1/2 -translate-y-1/2 p-2 z-10"
            on:touchstart={() => startScrolling(1)}
            on:touchend={stopScrolling}
            on:mousedown={() => startScrolling(1)}
            on:mouseup={stopScrolling}
            on:mouseleave={stopScrolling}
            on:keydown={(e) => {
			    if (e.key === 'Enter') {
					e.preventDefault();
					container?.scrollBy({ left: 100, behavior: 'smooth' })
			    }
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
					container?.scrollBy({ left: -100, behavior: 'smooth' })
                }
				if (e.key === 'ArrowRight') {
                    e.preventDefault();
					container?.scrollBy({ left: 100, behavior: 'smooth' })
				}
            }}
        >
            <ArrowRight />
        </button>
    {/if}
    <div
        bind:this={container}
        role="group"
        aria-label="scrollable chart"
        tabindex="0"
        aria-roledescription="scrollable"
        class="scroll-container overflow-x-auto scrollbar-hide md:overflow-x-hidden cursor-grab active:cursor-grabbing"
        on:mousedown={handleMouseDown}
        on:mousemove={handleMouseMove}
        on:mouseup={handleMouseUp}
        on:mouseleave={handleMouseUp}
        on:keydown={(e) => {
            if (!container) return;
            const step = 100;
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    container.scrollBy({ left: -step, behavior: 'smooth' });
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    container.scrollBy({ left: step, behavior: 'smooth' });
                    break;
                case 'Home':
                    e.preventDefault();
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                    break;
                case 'End':
                    e.preventDefault();
                    container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
                    break;
                case 'PageUp':
                    e.preventDefault();
                    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
                    break;
                case 'PageDown':
                    e.preventDefault();
                    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
                    break;
            }
        }}>
        <div class="min-w-[60rem] md:min-w-auto flex flex-col gap-12 px-3 lg:px-6">
            <div style={`width: ${percentageWidth}%`}>
                <slot />
            </div>
            <div style={`width: ${percentageWidth}%`}>
                <slot name="x-axis" {minX} {maxX} />
            </div>
        </div>
    </div>
</div>
