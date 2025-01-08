import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*, profiles(full_name)');

    if (error) throw error;

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const data = await request.json();

    const { data: project, error } = await supabase
      .from('projects')
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating project' },
      { status: 500 }
    );
  }
}