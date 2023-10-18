// Module: shapes.ts
export class Circle {
    constructor(public radius: number) {}

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
