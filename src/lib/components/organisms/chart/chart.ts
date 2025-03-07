import type { ChartOptions, DataRecord, RoundMode } from '$lib/components/organisms/chart/types';

export const useChart = (data: DataRecord<number, string>[], options: ChartOptions) => {
    const {
        step,
        minSteps,
        roundMode,
        xScale,
        xMax,
        xMin,
    } = options;

    const roundedData = roundData(data, step, minSteps, roundMode);

    return {
        roundedData,
    }
}

const roundData = (data: DataRecord<number, string>[], step: number, minSteps: number, roundMode: RoundMode) => {
    return data.map(data => {
        const x = round(data.x, step, roundMode);

        return {
            roudedData: {
                ...data,
                x
            }
        }
    })
}

const round = (value: number, step: number, roundMode: RoundMode) => {
    if (roundMode === 'inclusive') {
        return Math.ceil(value / step) * step;
    } else {
        return Math.round(value / step) * step;
    }
}