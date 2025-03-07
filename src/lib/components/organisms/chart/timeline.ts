import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import type { RoundMode, TimelineRecord } from '$lib/components/organisms/chart/types';

dayjs.extend(minMax);

export const useTimelinePersentages = (timelineData: TimelineRecord[], step: number, minSteps: number, roundMode: RoundMode) => {
	const roundedData = roundRecords(timelineData, step, minSteps, roundMode);

	const minStart = Math.min(...roundedData.map(data => data.start));
	const maxEnd = Math.max(...roundedData.map(data => data.start + data.length));

	const findStartPercentage = (roundedRecord: TimelineRecord) => {
		const start = roundStart(roundedRecord, step, roundMode);
		return (start - minStart) / (maxEnd - minStart) * 100;
	}

	const findLengthPercentage = (roundedRecord: TimelineRecord) => {
		// How long the event is in percentage of the whole timeline
		const start = roundStart(roundedRecord, step, roundMode);
		const end = roundEnd(roundedRecord, step, minSteps, roundMode);

		const length = end - start;
		return length / (maxEnd - minStart) * 100;
	}

	return {
		roundedData,
		minStart,
		maxEnd,
		findStartPercentage,
		findLengthPercentage
	}
}

const roundRecords = (data: TimelineRecord[], step: number, minSteps: number, roundMode: RoundMode) => {
	return data.map(data => {
		const start = roundStart(data, step, roundMode);
		const length = roundEnd(data, step, minSteps, roundMode) - start;

		return {
			...data,
			start,
			length
		}
	})
}

const roundStart = (data: TimelineRecord, step: number, roundMode: RoundMode) => {
	if (roundMode === 'inclusive') {
		return floor(data.start, step);
	} else {
		return round(data.start, step);
	}
}

const roundEnd = (data: TimelineRecord, step: number, minSteps: number, roundMode: RoundMode) => {
	if (roundMode === 'inclusive') {
		return ceil(data.start + data.length, step);
	} else {
		const roundedEnd = round(data.start + data.length, step);
		const roundedStart = roundStart(data, step, roundMode);

		if (roundedEnd === roundedStart) {
			return roundedEnd + (step * minSteps);
		} else {
			return roundedEnd;
		}
	}
}

const floor = (value: number, step: number) => {
	return Math.floor(value / step) * step;
}

const ceil = (value: number, step: number) => {
	return Math.ceil(value / step) * step;
}

const round = (value: number, step: number) => {
	return Math.round(value / step) * step;
}

export const Step = {
	Second: 1000,
	Minute: 60 * 1000,
	Hour: 60 * 60 * 1000,
	Day: 24 * 60 * 60 * 1000,
	Week: 7 * 24 * 60 * 60 * 1000,
	Month: 30 * 24 * 60 * 60 * 1000,
	Quarter: 90 * 24 * 60 * 60 * 1000,
	Year: 365 * 24 * 60 * 60 * 1000,
	Decade: 10 * 365 * 24 * 60 * 60 * 1000,
}