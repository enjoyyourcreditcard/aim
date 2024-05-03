import prisma from './prisma';

export async function fetchCategories(query: string, currentPage: number) {
    try {
        const categories = await prisma.category.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            include: {
                _count: {
                    select: {
                        segments: true,
                    }
                }
            }
        });

        return categories;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch category data.');
    }
}

export async function fetchSegments(query: string, currentPage: number) {
    try {
        const segments = await prisma.segment.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            include: {
                category: true,
                _count: {
                    select: {
                        parts: true,
                    }
                }
            }
        });

        return segments;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch segments data.');
    }
}