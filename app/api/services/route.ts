import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: services, error } = await supabase
      .from('services')
      .select('*, profiles(full_name, avatar_url)');

    if (error) throw error;

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching services' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const data = await request.json();

    const { data: service, error } = await supabase
      .from('services')
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating service' },
      { status: 500 }
    );
  }
}