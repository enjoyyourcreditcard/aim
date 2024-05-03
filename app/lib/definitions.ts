// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Category = {
    id: number;
    name: string;
}

export type Segment = {
    id: number;
    category_id: number;
    name: string;
}

export type Brand = {
    id: number;
    name: string;
}

export type Part = {
    id: number;
    segment_id: number;
    brand_id: number;
    name: string;
    uom: string;
    is_serial_number: boolean;
}
