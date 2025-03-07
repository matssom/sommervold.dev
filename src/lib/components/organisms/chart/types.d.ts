export type DataRecord<XType, YType> = {
	[key: string]: unknown;
	x: XType;
	y: YType;
}

type XType = number;
type YType = number | string;

export type TimelineRecord = {
	[key: string]: unknown;
	start: number;
	length: number;
}

export type RoundMode = 'closest' | 'inclusive';

export type ChartOptions = {
	step: number;
	minSteps: number;
	roundMode: RoundMode;
	xScale: number;
	xMax: number;
	xMin: number;
}

export type BoundsContext = {
	setMaxX: (x: number) => void;
	setMinX: (x: number) => void;
}
