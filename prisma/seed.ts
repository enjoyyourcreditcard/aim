import prisma from '../app/lib/prisma';
import { PrismaClient } from "@prisma/client/extension";
import {
    categories,
    brands,
    segments,
    parts
} from './../app/lib/placeholder-data';
import {
    Category,
    Brand,
    Segment,
    Part
} from "@/app/lib/definitions";

async function deleteAllRecord(prisma: PrismaClient) {
    try {
        const deletePart = prisma.part.deleteMany();
        const deleteBrand = prisma.brand.deleteMany();
        const deleteSegment = prisma.segment.deleteMany();
        const deleteCategory = prisma.category.deleteMany();

        // The transaction runs synchronously so deleteUsers must run last.
        await prisma.$transaction([deletePart, deleteBrand, deleteSegment, deleteCategory])
    } catch (error) {
        console.error('Error deleting records:', error);
        throw error;
    }
}

async function seedCategory(prisma: PrismaClient) {
    try {
        const insertedCategories = await Promise.all(
            categories.map(async (category: Category) => {
                const result = await prisma.category.create({
                    data: {
                        name: category.name
                    },
                });

                return result;
            }),
        );

        console.log(`Seeded ${insertedCategories.length} categories`);

        return {
            categories: insertedCategories
        };
    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    }
}

async function seedBrand(prisma: PrismaClient) {
    try {
        const insertedBrands = await Promise.all(
            brands.map(async (brand: Brand) => {
                const result = await prisma.brand.create({
                    data: {
                        name: brand.name
                    },
                });

                return result;
            }),
        );

        console.log(`Seeded ${insertedBrands.length} brands`);

        return {
            brands: insertedBrands
        };
    } catch (error) {
        console.error('Error seeding brands:', error);
        throw error;
    }
}

async function seedSegment(prisma: PrismaClient) {
    try {
        const insertedSegments = await Promise.all(
            segments.map(async (segment: Segment) => {
                const category = await prisma.category.findUnique({
                    where: {
                        id: segment.category_id
                    }
                });

                const result = await prisma.segment.create({
                    data: {
                        name: segment.name,
                        category: {
                            connect: category
                        }
                    },
                });

                return result;
            }),
        );

        console.log(`Seeded ${insertedSegments.length} segments`);

        return {
            segments: insertedSegments
        };
    } catch (error) {
        console.error('Error seeding segments:', error);
        throw error;
    }
}

async function seedPart(prisma: PrismaClient) {
    try {
        const insertedParts = await Promise.all(
            parts.map(async (part: Part) => {
                const segment = await prisma.segment.findUnique({
                    where: {
                        id: part.segment_id
                    }
                });

                const brand = await prisma.brand.findUnique({
                    where: {
                        id: part.brand_id
                    }
                });

                const result = await prisma.part.create({
                    data: {
                        name: part.name,
                        uom: part.uom,
                        isSerialNumber: part.is_serial_number,
                        segment: {
                            connect: segment
                        },
                        brand: {
                            connect: brand
                        }
                    },
                });

                return result;
            }),
        );

        console.log(`Seeded ${insertedParts.length} part`);

        return {
            parts: insertedParts
        };
    } catch (error) {
        console.error('Error seeding parts:', error);
        throw error;
    }
}

async function main() {
    await deleteAllRecord(prisma);
    await seedCategory(prisma);
    await seedBrand(prisma);
    await seedSegment(prisma);
    await seedPart(prisma);
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
