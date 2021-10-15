export const getTotal = <T, K extends keyof T>(array: T[], property: K): number => {
    return array.map(item => item[property]).reduce((prev, cur: any) => prev + cur, 0)
}