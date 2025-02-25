import { NextResponse } from 'next/server';
import { saveLocation } from '@/lib/location';

export async function POST(request: Request) {
    try {
        const { userId, lat, lng } = await request.json();

        await saveLocation(userId, parseFloat(lat), parseFloat(lng));

        return NextResponse.json({ message: 'Location updated' });
    } catch (error) {
        console.error("Error updating location:", error);
        return NextResponse.json({ message: 'Error updating location' }, { status: 500 });
    }
}